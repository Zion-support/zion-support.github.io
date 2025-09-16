import fs from 'fs';
import path from 'path';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  publishedDate?: string;
  tags?: string[];
  featuredImage?: string;
  author?: { name: string; title?: string; avatarUrl?: string };
  content: string;
};

function parseMarkdown(filePath: string): BlogPost | null {
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/---\n([\s\S]+?)\n---\n([\s\S]*)/);
  if (!match || !match[1] || !match[2]) return null;
  const meta = JSON.parse(match[1]);
  const content = match[2].trim();
  const slug = path.basename(filePath).replace(/\.md$/, '');
  return { ...(meta as object), id: slug, slug, content } as BlogPost;
}

interface BlogPostPageProps { initialPost: BlogPost | null }

const BlogPostPage = ({ initialPost }: BlogPostPageProps) => {
  const [post, setPost] = useState<BlogPost | null>(initialPost);

  useEffect(() => {
    setPost(initialPost);
  }, [initialPost]);

  if (!post) return <div className="max-w-3xl mx-auto py-8">Article not found</div>;

  const body = (post as any).body || post.content;

  return (
    <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
      <h1>{post.title}</h1>
      {post.excerpt && <p className="lead">{post.excerpt}</p>}
      {post.featuredImage && (
        <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="object-cover w-full h-full"
            onError={(e: any) => {
              const target = (e as any).currentTarget as HTMLImageElement;
              target.src = '/images/blog-placeholder.svg';
            }}
          />
        </div>
      )}
      <ReactMarkdown>{body}</ReactMarkdown>
    </main>
  );
};

export default BlogPostPage;

export const getStaticPaths = async () => {
  const dir = path.resolve('contentblog');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f: string) => f.endsWith('.md')) : [];
  const paths = files.map((f: string) => ({ params: { slug: f.replace(/\.md$/, '') } }));
  return { paths, fallback: 'blocking' } as { paths: any[]; fallback: 'blocking' };
};

export const getStaticProps = async ({ params }: { params?: { slug?: string } }) => {
  const slug = (params?.slug as string) || '';
  if (!/^[a-z0-9-]+$/.test(slug)) return { notFound: true } as any;
  const filePath = path.resolve('contentblog', `${slug}.md`);
  const post = parseMarkdown(filePath);
  if (!post) return { notFound: true } as any;
  return { props: { initialPost: post }, revalidate: 60 } as any;
};
