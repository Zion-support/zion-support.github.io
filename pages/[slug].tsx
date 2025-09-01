import fs from 'fs';
import path from 'path';
import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { NextSeo } from '@/components/NextSeo';

interface PageMeta {
  title?: string;
  description?: string;
}

interface PageProps {
  content: string | null;
  meta: PageMeta | null;
}

function parseMarkdown(filePath: string): { meta: PageMeta; content: string } {
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/---\n([\s\S]+?)\n---\n([\s\S]*)/);
  if (!match) return { meta: {}, content: raw };
  const meta = JSON.parse(match[1]);
  const content = match[2].trim();
  return { meta, content };
}

const StaticPage: React.FC<PageProps> = ({ content, meta }) => {
  if (!content) {
    return <div>Page not found</div>;
  }
  return (
    <>
      <NextSeo title={meta?.title} description={meta?.description} />
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentPagesDir = path.join(process.cwd(), 'content', 'pages');
  const mainPagesDir = path.join(process.cwd(), 'pages');

  const contentFiles = fs.readdirSync(contentPagesDir).filter((f) => f.endsWith('.md'));

  const paths = contentFiles
    .map((f) => {
      const slug = f.replace(/\.md$/, '');
      return { params: { slug } };
    })
    .filter(p => {
      // Check if a dedicated page exists for this slug in the main 'pages' directory
      // e.g., pages/privacy.tsx, pages/terms.js etc.
      const potentialPagePathTs = path.join(mainPagesDir, `${p.params.slug}.tsx`);
      const potentialPagePathJs = path.join(mainPagesDir, `${p.params.slug}.js`);
      const potentialPagePathJsx = path.join(mainPagesDir, `${p.params.slug}.jsx`); // Added jsx check

      if (fs.existsSync(potentialPagePathTs) || fs.existsSync(potentialPagePathJs) || fs.existsSync(potentialPagePathJsx)) {
        // If a dedicated page exists, exclude this slug from being handled by [slug].tsx
        return false;
      }
      // Otherwise, include it
      return true;
    });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'content', 'pages', `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }
  const { meta, content } = parseMarkdown(filePath);
  return { props: { meta, content } };
};

export default function DynamicPage({ title, slug, description }: PageProps) {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com';
	const canonical = `${baseUrl.replace(/\/$/, '')}/${slug}/`;
	
	return (
		<>
			<SEO 
				title={`${title} | Zion Tech Group`}
				description={description}
				keywords={[title, 'Services', 'Technology']}
			/>
			<div className="container mx-auto px-4 py-16">
				<nav className="text-sm text-gray-400 mb-6">
					<Link href="/" className="hover:text-white">Home</Link>
					<span className="mx-2">/</span>
					<span className="text-gray-300">{title}</span>
				</nav>
				<h1 className="text-4xl font-bold mb-4">{title}</h1>
				<p className="text-gray-300 mb-8">{description}</p>
				<div className="flex gap-4">
					<Link href="/services" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Browse Services</Link>
					<Link href="/pricing" className="px-6 py-3 rounded-lg border border-cyan-500/40 text-cyan-300">View Pricing</Link>
					<Link href="/contact" className="px-6 py-3 rounded-lg border border-gray-700 text-gray-200">Contact Sales</Link>
				</div>
				<div className="mt-12 text-sm text-gray-500">Auto-generated route: /{slug}</div>
			</div>
		</>
	);
}