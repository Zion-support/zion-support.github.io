import AdvancedSEO from '@/components/seo/AdvancedSEO';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export interface BlogPost {
	slug: string;
	title: string;
	excerpt?: string;
	featuredImage?: string;
	publishedDate?: string;
	tags?: string[];
	author: {
		name: string;
		avatarUrl?: string;
		title?: string;
	};
	content: string;
}

function parseMarkdown(filePath: string): BlogPost | null {
	if (!fs.existsSync(filePath)) {
		return null;
	}
	const raw = fs.readFileSync(filePath, 'utf8');
	const match = raw.match(/---\n([\s\S]+?)\n---\n([\s\S]*)/);
	if (!match || !match[1] || !match[2]) return null;
	let meta: any;
	try {
		meta = JSON.parse(match[1]);
	} catch (e) {
		return null;
	}
	const content = match[2].trim();
	const slug = path.basename(filePath).replace(/\.md$/, '');
	return { ...meta, slug, content } as BlogPost;
}

interface BlogPostPageProps {
	initialPost: BlogPost | null;
}

const BlogPostPage = ({ initialPost }: BlogPostPageProps) => {
	if (!initialPost) {
		return <div className="max-w-3xl mx-auto py-8">Article not found</div>;
	}

	const articleLd = {
		author: initialPost.author?.name,
		publishedTime: initialPost.publishedDate,
		tags: initialPost.tags || [],
	};

	return (
		<>
			<AdvancedSEO
				title={initialPost.title}
				description={initialPost.excerpt}
				image={initialPost.featuredImage}
				type="article"
				article={articleLd as any}
			/>
			<main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
				<h1>{initialPost.title}</h1>
				{initialPost.excerpt && <p className="lead">{initialPost.excerpt}</p>}
				{initialPost.author && (
					<div className="flex items-center gap-3 mb-6">
						{initialPost.author.avatarUrl && (
							<img
								src={initialPost.author.avatarUrl}
								alt={initialPost.author.name}
								className="w-10 h-10 rounded-full"
								onError={(e: any) => {
									e.currentTarget.src = '/images/blog-placeholder.svg';
								}}
							/>
						)}
						<div>
							<p className="m-0 font-medium">{initialPost.author.name}</p>
							{initialPost.author.title && (
								<p className="m-0 text-sm text-zion-slate-light">{initialPost.author.title}</p>
							)}
						</div>
					</div>
				)}
				{initialPost.featuredImage && (
					<div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
						<img
							src={initialPost.featuredImage}
							alt={initialPost.title}
							className="object-cover w-full h-full"
							onError={(e: any) => {
								e.currentTarget.src = '/images/blog-placeholder.svg';
							}}
						/>
					</div>
				)}
				<ReactMarkdown>{initialPost.content}</ReactMarkdown>
			</main>
		</>
	);
};

export default BlogPostPage;

export async function getStaticPaths() {
	const dir = path.join(path.resolve('.'), 'contentblog');
	const files: string[] = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f: string) => f.endsWith('.md')) : [];
	const paths = files.map((f: string) => ({ params: { slug: f.replace(/\.md$/, '') } }));
	return { paths, fallback: 'blocking' };
}

export async function getStaticProps(ctx: any) {
	const slug = (ctx.params?.slug as string) || '';
	if (!/^[a-z0-9-]+$/.test(slug)) {
		return { notFound: true };
	}
	const filePath = path.join(path.resolve('.'), 'contentblog', `${slug}.md`);
	const post = parseMarkdown(filePath);
	if (!post) {
		return { notFound: true };
	}
	return { props: { initialPost: post }, revalidate: 60 };
}
