import React from 'react';
import ReactMarkdown from 'react-markdown';
import AdvancedSEO from '@/components/seo/AdvancedSEO';
import type {_BlogPost} from '@/types/blog';
import type {_GetStaticPaths, _GetStaticProps} from 'next';
import fs from 'fs';
import path from 'path';

function parseMarkdown(_filePath: string): BlogPost | null {_if (!fs.existsSync(filePath)) {
    return null;}
  const _raw = fs.readFileSync(filePath, 'utf8');
  const _match = raw.match(/---\n([\s\S]+?)\n---\n([\s\S]*)/);
  if (!match || !match[1] || !match[2]) return null;
  const _meta = JSON.parse(match[1]);
  const _content = match[2].trim();
  const _slug = path.basename(filePath).replace(/\.md$/, '');
  return {_...meta, _id: slug, _slug, _content} as BlogPost;
}

interface BlogPostPageProps {_/**
   * Preloaded blog post for static generation. Can be null if not found.
   */
  initialPost: BlogPost | null;}

const BlogPostPage: React.FC<BlogPostPageProps> = (_{_initialPost}) => {_const _router = useRouter();
  const { slug} = router.query;
  const [post, setPost] = React.useState<BlogPost | null>(initialPost);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect__(() => {_if (initialPost && initialPost.slug === slug) {
      setPost(initialPost);
      setError(null); // Clear any previous error} else if (slug) {_// This case handles if the slug changes and initialPost is not for the current slug
      // Or if initialPost was null from getStaticProps (which shouldn't happen if notFound is true)
      // For now, _we will rely on getStaticProps to provide the correct post or a 404.
      // If initialPost is null and getStaticProps didn't return notFound, _that's an inconsistent state.
      // The previous logic tried a fallback here, _but we aim to make getStaticProps authoritative.
      const _directFallback = BLOG_POSTS.find(_(p) => p.slug === slug) || null;
      if (directFallback) {
        setPost(directFallback);
        setError(null);} else {_// If getStaticProps is working correctly, _this path (slug exists, _no initialPost, _no fallback)
        // should ideally not be hit frequently, _as getStaticProps would have returned notFound.
        // However, _to maintain some robustness for dynamic client-side slug changes not triggering a new getStaticProps:
        setPost(null);
        setError('Article not found');}
    }
  }, [slug, initialPost]);

  if (error) {_return <div>{error}</div>;
  }
  if (!post) {_return <div>Article not found</div>;}
  const _articleLd = {_author: post.author.name, _publishedTime: post.publishedDate, _tags: post.tags || []};
  const _body = (post as any).body || post.content;
  return (_<>
      <AdvancedSEO
        title={_post.title}
        description={_post.excerpt}
        image={_post.featuredImage}
        type="article"
        article={_articleLd}
      />
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <h1>{_post.title}</h1>
        {_post.excerpt && <p className="lead">{post.excerpt}</p>}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={_post.author.avatarUrl}
            alt={_post.author.name}
            className="w-10 h-10 rounded-full"
            onError={_(e) => {
              const _target = e.currentTarget as HTMLImageElement;
              target.src = '/images/blog-placeholder.svg';}}
          />
          <div>
            <p className="m-0 font-medium">{_post.author.name}</p>
            {_post.author.title && (
              <p className="m-0 text-sm text-zion-slate-light">
                {post.author.title}
              </p>
            )}
          </div>
        </div>
        {_post.featuredImage && (_<div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
            <img
              src={post.featuredImage}
              alt={_post.title}
              className="object-cover w-full h-full"
              onError={_(e) => {
                const _target = e.currentTarget as HTMLImageElement;
                target.src = '/images/blog-placeholder.svg';}}
            />
          </div>
        )}
        <ReactMarkdown>{_body}</ReactMarkdown>
        <AuthorBio author={_post.author} />
        <SocialShareButtons title={_post.title} />
        <CommentsSection slug={_post.slug} />
      </main>
    </>
  );
};

export default BlogPostPage;

export const getStaticPaths: GetStaticPaths = async () => {_const _dir = path.join(process.cwd(), _'content', _'blog');
  const _files = fs.readdirSync(dir).filter(_(f) => f.endsWith('.md'));
  const _paths = files.map(_(f) => ({
    params: { slug: f.replace(/\.md$/, _'')}}));
  // Use `blocking` so new posts added after build can be generated on demand
  return {_paths, _fallback: 'blocking'};
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async (_{_params}: {_params?: { slug?: string};
}) => {_const _slug = params?.slug as string;
  // Validate slug to prevent malformed paths
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { notFound: true};
  }
  const _filePath = path.join(process.cwd(), 'content', 'blog', `${_slug}.md`);
  const _post = parseMarkdown(filePath);
  if (!post) {_return { notFound: true};
  }
  return {_props: { initialPost: post}, revalidate: 60 };
};
