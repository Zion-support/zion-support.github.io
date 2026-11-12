import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { notFound } from 'next/navigation';
import GeneratedShellBlog from '@/components/GeneratedShellBlog';
import GeneratedTechArticle from '@/components/GeneratedTechArticle';
import type { GeneratedBlogData } from '@/components/generated-blog-data';

const dataDirectory = path.join(process.cwd(), 'app', '_blog-pages');
export const dynamicParams = false;

export async function generateStaticParams() {
  return (await readdir(dataDirectory))
    .filter(name => /^[a-z0-9][a-z0-9-]*\.json$/.test(name))
    .sort().map(name => ({ slug: name.slice(0, -5) }));
}

async function readPage(slug: string): Promise<GeneratedBlogData> {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) notFound();
  let data: GeneratedBlogData;
  try {
    data = JSON.parse(await readFile(path.join(dataDirectory, `${slug}.json`), 'utf8'));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') notFound();
    throw error;
  }
  if (!['page-shell', 'tech-article'].includes(data.template)) {
    throw new Error(`Unsupported blog template: ${data.template}`);
  }
  return data;
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  return (await readPage((await params).slug)).metadata;
}

export default async function BlogPage({ params }: PageProps) {
  const data = await readPage((await params).slug);
  return data.template === 'page-shell'
    ? <GeneratedShellBlog data={data} />
    : <GeneratedTechArticle data={data} />;
}
