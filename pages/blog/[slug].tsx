import React from 'react';
<<<<<<< HEAD
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import AdvancedSEO from '@/components/seo/AdvancedSEO';
import { BLOG_POSTS } from '@/data/blog-posts';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { SocialShareButtons } from '@/components/blog/SocialShareButtons';
import { CommentsSection } from '@/components/blog/CommentsSection';
import type { BlogPost } from '@/types/blog';
import type { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
function parseMarkdown(filePath: string): BlogPost | null {
  if (!fs.existsSync(filePath)) {
    return null
  }
  const raw = fs.readFileSync($2);
  const match = $2;
  if (!match || !match[1] || !match[2]) return null,
  const meta = JSON.parse($2);
  const content = match[2].trim($2);
  const slug = path.basename(filePath).replace($2);
  return { ...meta, id: slug, slug, content } as BlogPost
}

interface BlogPostPageProps {
  /**
   * Preloaded blog post for static generation. Can be null if not found.
   */
  initialPost: BlogPost | null
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ initialPost }) => {
  const router = useRouter($2);
  const { slug } = router.query,
  const [post, setPost] = React.useState<BlogPost | null>(initialPost),
  const [error, setError] = React.useState<string | null>(null),

  React.useEffect(() => {
    if (initialPost && initialPost.slug === slug) {
      setPost($2);
      setError(null), // Clear any previous error
    } else if (slug) {
      // This case handles if the slug changes and initialPost is not for the current slug
      // Or if initialPost was null from getStaticProps (which shouldn't happen if notFound is true)
      // For now, we will rely on getStaticProps to provide the correct post or a 404.
      // If initialPost is null and getStaticProps didn't return notFound, that's an inconsistent state.
      // The previous logic tried a fallback here, but we aim to make getStaticProps authoritative.
      const directFallback = $2;
      if (directFallback) {
        setPost($2);
        setError(null)
      } else {
        // If getStaticProps is working correctly, this path (slug exists, no initialPost, no fallback)
        // should ideally not be hit frequently, as getStaticProps would have returned notFound.
        // However, to maintain some robustness for dynamic client-side slug changes not triggering a new getStaticProps: setPost($2);
        setError('Article not found')
      }
    }
  }, [slug, initialPost]),

  if (error) {
    return <div>{error}</div>
  }
  if (!post) {
    return <div>Article not found</div>
  }
  const articleLd = $2;
    publishedTime: post.publishedDate,
    tags: post.tags || []},
  const body = $2;
  return (
    <>
      <AdvancedSEO
        title = $2;
              target.src = $2;
                target.src = $2;
export default BlogPostPage,

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join(process.cwd(), 'contentblog'),
  const files = $2;
  const paths = files.map((f) => ({
    params: { slug: f.replace(/\.md$/, '') }})),
  // Use `blocking` so new posts added after build can be generated on demand
  return { paths, fallback: 'blocking' }
},

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params}: {
  params?: { slug?: string }
}) => {
  const slug = $2;
  // Validate slug to prevent malformed paths
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { notFound: true}
  }
  const filePath = path.join(process.cwd(), 'contentblog', `${slug}.md`),
  const post = parseMarkdown($2);
  if (!post) {
    return { notFound: true}
  }
  return { props: { initialPost: post}, revalidate: 60}
},
=======
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function BlogSlug() {
  return (
    <Layout>
      <Head>
        <title>Blog Post - Zion Tech Group</title>
        <meta name="description" content="Blog post content." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog Post</h1>
          <p className="text-lg text-gray-600">
            Blog post content coming soon.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
