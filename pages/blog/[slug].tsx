<<<<<<< HEAD
<<<<<<< HEAD
 
}interface BlogPostPageProps {
  /** * Preloaded blog post for static generation. Can be null if not found. */ 
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import React from 'react';
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
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/---\n([\s\S]+?)\n---\n([\s\S]*)/);
  if (!match || !match[1] || !match[2]) return null;
  const meta = JSON.parse(match[1]);
  const content = match[2].trim();
  const slug = path.basename(filePath).replace(/\.md$/, '');
  return { ...meta, id: slug, slug, content } as BlogPost
}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

interface BlogPostPageProps {
  /**
   * Preloaded blog post for static generation. Can be null if not found.
   */
<<<<<<< HEAD
<<<<<<< HEAD
  initialPost: BlogPost | null;
=======
  initialPost: BlogPost | null
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  initialPost: BlogPost | null
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

const BlogPostPage: React.FC<BlogPostPageProps> = ({ initialPost }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = React.useState<BlogPost | null>(initialPost);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (initialPost && initialPost.slug === slug) {
      setPost(initialPost);
<<<<<<< HEAD
<<<<<<< HEAD
      setError(null); // Clear any previous error
=======
      setError(null), // Clear any previous error
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setError(null), // Clear any previous error
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } else if (slug) {
      // This case handles if the slug changes and initialPost is not for the current slug
      // Or if initialPost was null from getStaticProps (which shouldn't happen if notFound is true)
      // For now, we will rely on getStaticProps to provide the correct post or a 404.
      // If initialPost is null and getStaticProps didn't return notFound, that's an inconsistent state.
      // The previous logic tried a fallback here, but we aim to make getStaticProps authoritative.
<<<<<<< HEAD
<<<<<<< HEAD
      const directFallback = BLOG_POSTS.find(p => p.slug === slug) || null;
=======
      const directFallback = BLOG_POSTS.find((p) => p.slug === slug) || null;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      if (directFallback) {
        setPost(directFallback);
        setError(null)
      } else {
        // If getStaticProps is working correctly, this path (slug exists, no initialPost, no fallback)
        // should ideally not be hit frequently, as getStaticProps would have returned notFound.
<<<<<<< HEAD
        // However, to maintain some robustness for dynamic client-side slug changes not triggering a new getStaticProps:
        setPost(null);
        setError('Article not found');
=======
      const directFallback = BLOG_POSTS.find((p) => p.slug === slug) || null;
      if (directFallback) {
        setPost(directFallback);
        setError(null)
      } else {
        // If getStaticProps is working correctly, this path (slug exists, no initialPost, no fallback)
        // should ideally not be hit frequently, as getStaticProps would have returned notFound.
        // However, to maintain some robustness for dynamic client-side slug changes not triggering a new getStaticProps: setPost(null),
        setError('Article not found')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        // However, to maintain some robustness for dynamic client-side slug changes not triggering a new getStaticProps: setPost(null),
        setError('Article not found')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    }
  }, [slug, initialPost]);

  if (error) {
<<<<<<< HEAD
<<<<<<< HEAD
    return <div>{error}</div>;
  }
  if (!post) {
    return <div>Article not found</div>;
=======
    return <div>{error}</div>
  }
  if (!post) {
    return <div>Article not found</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return <div>{error}</div>
  }
  if (!post) {
    return <div>Article not found</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
  const articleLd = {
    author: post.author.name,
    publishedTime: post.publishedDate,
<<<<<<< HEAD
<<<<<<< HEAD
    tags: post.tags || [],
  };
=======
    tags: post.tags || []},
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    tags: post.tags || []},
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const body = (post as any).body || post.content;
  return (
    <>
      <AdvancedSEO
        title={post.title}
        description={post.excerpt}
        image={post.featuredImage}
<<<<<<< HEAD
<<<<<<< HEAD
        type='article'
=======
        type="article"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        article={articleLd}
      />
      <main className="prose dark: prose-invert max-w-3xl mx-auto py-8">
        <h1>{post.title}</h1>
        {post.excerpt && <p className="lead">{post.excerpt}</p>}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={post.author.avatarUrl}
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.src = '/images/blog-placeholder.svg'
            }}
          />
          <div>
            <p className="m-0 font-medium">{post.author.name}</p>
            {post.author.title && (
<<<<<<< HEAD
              <p className='m-0 text-sm text-zion-slate-light'>
=======
        type="article"
        article={articleLd}
      />
      <main className="prose dark: prose-invert max-w-3xl mx-auto py-8">
        <h1>{post.title}</h1>
        {post.excerpt && <p className="lead">{post.excerpt}</p>}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={post.author.avatarUrl}
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.src = '/images/blog-placeholder.svg'
            }}
          />
          <div>
            <p className="m-0 font-medium">{post.author.name}</p>
            {post.author.title && (
              <p className="m-0 text-sm text-zion-slate-light">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <p className="m-0 text-sm text-zion-slate-light">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                {post.author.title}
              </p>
            )}
          </div>
        </div>
        {post.featuredImage && (
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6'>
=======
          <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <img
              src={post.featuredImage}
              alt={post.title}
              className="object-cover w-full h-full"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
<<<<<<< HEAD
                target.src = '/images/blog-placeholder.svg';
=======
          <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="object-cover w-full h-full"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.src = '/images/blog-placeholder.svg'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                target.src = '/images/blog-placeholder.svg'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              }}
            />
          </div>
        )}
        <ReactMarkdown>{body}</ReactMarkdown>
        <AuthorBio author={post.author} />
        <SocialShareButtons title={post.title} />
        <CommentsSection slug={post.slug} />
      </main>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

export default BlogPostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join(process.cwd(), 'contentblog');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  const paths = files.map((f) => ({
    params: { slug: f.replace(/\.md$/, '') }}));
  // Use `blocking` so new posts added after build can be generated on demand
  return { paths, fallback: 'blocking' }
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
<<<<<<< HEAD
  params,
}: {
  params?: { slug?: string };
=======
  )
};

export default BlogPostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join(process.cwd(), 'contentblog');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  const paths = files.map((f) => ({
    params: { slug: f.replace(/\.md$/, '') }}));
  // Use `blocking` so new posts added after build can be generated on demand
  return { paths, fallback: 'blocking' }
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params}: {
  params?: { slug?: string }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  params}: {
  params?: { slug?: string }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
}) => {
  const slug = params?.slug as string;
  // Validate slug to prevent malformed paths
  if (!/^[a-z0-9-]+$/.test(slug)) {
<<<<<<< HEAD
<<<<<<< HEAD
    return { notFound: true };
=======
    return { notFound: true }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
  const filePath = path.join(process.cwd(), 'contentblog', `${slug}.md`);
  const post = parseMarkdown(filePath);
  if (!post) {
    return { notFound: true }
  }
<<<<<<< HEAD
  return { props: { initialPost: post }, revalidate: 60 };
=======
    return { notFound: true }
  }
  const filePath = path.join(process.cwd(), 'contentblog', `${slug}.md`);
  const post = parseMarkdown(filePath);
  if (!post) {
    return { notFound: true }
  }
  return { props: { initialPost: post }, revalidate: 60 }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return { props: { initialPost: post }, revalidate: 60 }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};
