<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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

  const raw = fs.readFileSync(filePath, 'utf8')
  const match = raw.match(/---\n([\s\S]+?)\n---\n([\s\S]*)/)
  if (!match |!match[1] |!match[2]) return null
  const meta = JSON.parse(match[1])
  const content = match[2].trim()
  const slug = path.basename(filePath).replace(/\.md$/, '')
  return { ...meta, id: slug, slug, content } as BlogPost
}
<<<<<<< HEAD

interface BlogPostPageProps {
  /**
   * Preloaded blog post for static generation. Can be null if not found.
   */
  initialPost: BlogPost | null
}
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import React from 'react',
import ReactMarkdown from 'react - markdown',
import { use_router } from 'next / router',
import AdvancedSEO from '@/components / seo / AdvancedSEO',
import { BLOG_POSTS } from '@/data / blog - posts',
import { AuthorBio } from '@/components / blog / AuthorBio',
import { SocialShareButtons } from '@/components / blog / SocialShareButtons',
import { CommentsSection } from '@/components / blog / CommentsSection',
import type { BlogPost } from '@/types / blog',
import type { GetStaticPaths, GetStaticProps } from 'next',
import fs from 'fs',
import path from 'path',
function parse_markdown (file_path: string): BlogPost | null {
  if () {) {
  $2
}
    return null;
  }
  const raw = fs.readFileSync (file_path, 'utf8'),
  const match = raw.match (/---\n ([\s\S]+?)\n---\n ([\s\S]*)/),
  // Check condition
if (return null, ) {
  $2
}
  const meta = JSON.parse (match[1]),
  const content = match[2].trim (),
  const slug = path.basename (file_path).replace (/\.md$/, ''),
  return { ...meta, id: slug, slug, content } as BlogPost;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface BlogPostPageProps {
  /**;
  * Preloaded blog post for static generation. Can be null if not found.;
  */;
  initial_post: BlogPost | null;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
const BlogPostPage: React.FC<BlogPostPageProps> = ({ initialPost }) => {
  const router = useRouter()
  const { slug } = router.query
  const [post, setPost] = React.useState<BlogPost | null>(initialPost)
  const [error, setError] = React.useState<string | null>(null)
  React.useEffect(() => {
    if (initialPost && initialPost.slug === slug) {
<<<<<<< HEAD
      setPost(initialPost);
=======
<<<<<<< HEAD
      setPost(initialPost)
=======
      setPost(initialPost);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      setError(null), // Clear any previous error
    } else if (slug) {
      // This case handles if the slug changes and initialPost is not for the current slug
      // Or if initialPost was null from getStaticProps (which shouldn't happen if notFound is true)
      // For now, we will rely on getStaticProps to provide the correct post or a 404.
      // If initialPost is null and getStaticProps didn't return notFound, that's an inconsistent state.
      // The previous logic tried a fallback here, but we aim to make getStaticProps authoritative.
<<<<<<< HEAD
=======
<<<<<<< HEAD
      const directFallback = BLOG_POSTS.find((p) => p.slug === slug) |null
      if (directFallback) {
        setPost(directFallback)
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      const directFallback = BLOG_POSTS.find((p) => p.slug === slug) || null;
      if (directFallback) {
        setPost(directFallback);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        setError(null)
      } else {
        // If getStaticProps is working correctly, this path (slug exists, no initialPost, no fallback)
        // should ideally not be hit frequently, as getStaticProps would have returned notFound.
        // However, to maintain some robustness for dynamic client-side slug changes not triggering a new getStaticProps: setPost(null)
        setError('Article not found')
      }
    }
  }, [slug, initialPost])
  if (error) {
    return <div>{error}</div>
<<<<<<< HEAD
  }
  if (!post) {
    return <div>Article not found</div>
  }
  const articleLd = {
    author: post.author.name,
    publishedTime: post.publishedDate,
=======
=======
const BlogPostPage: React.FC < BlogPostPageProps> = ({ initial_post }) => {
  const router = use_router (),
  const { slug } = router.query,
  const [post, set_post] = React.useState < BlogPost | null>(initial_post),
  const [error, set_error] = React.useState < string | null>(null),
  React.useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      set_post (initial_post),
      set_error (null), // Clear any previous error;
    } else // Check condition
if ( {) {
  $2
}
      // This case handles if the slug changes and initial_post is not for the current slug;
      // Or if initial_post was null from getStaticProps (which shouldn't happen if not_found is true);
      // For now, we will rely on getStaticProps to provide the correct post or a 404.;
      // If initial_post is null and getStaticProps didn't return not_found, that's an inconsistent state.;
      // The previous logic tried a fallback here, but we aim to make getStaticProps authoritative.;
      const direct_fallback = BLOG_POSTS.find ((p) => p.slug === slug) || null,
      // Check condition
if ( {) {
  $2
}
        set_post (direct_fallback),
        set_error (null);
      } else {
        // If getStaticProps is working correctly, this path (slug exists, no initial_post, no fallback);
        // should ideally not be hit frequently, as getStaticProps would have returned not_found.;
        // However, to maintain some robustness for dynamic client - side slug changes not triggering a new getStaticProps: set_post (null),
        set_error ('Article not found');
      }
    }
  }, [slug, initial_post]),
  // Check condition
if ( {) {
  $2
}
    return <div>{error}</div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  // Check condition
if ( {) {
  $2
}
    return <div > Article not found</div>;
  }
<<<<<<< HEAD
  const articleLd = {
<<<<<<< HEAD
    author: post.author.name
    publishedTime: post.publishedDate
    tags: post.tags |[]}
  const body = (post as any).body |post.content
=======
=======
  const article_ld = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    author: post.author.name,
    published_time: post.published_date,
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    tags: post.tags || []},
  const body = (post as any).body || post.content;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  return (
    <>;
      <AdvancedSEO;
        title={post.title}
        description={post.excerpt}
<<<<<<< HEAD
        image={post.featuredImage}
        type="article"
        article={articleLd}
      />
      <main className="prose dark: prose-invert max-w-3xl mx-auto py-8">
        <h1>{post.title}</h1>
=======
        image={post.featured_image}
        type="article";
        article={article_ld}
      />;
      <main className="prose dark:prose - invert max - w-3xl mx - auto py - 8">;
        <h1>{post.title}</h1>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        {post.excerpt && <p className="lead">{post.excerpt}</p>}
        <div className="flex items - center gap - 3 mb - 6">;
          <img;
            src={post.author.avatar_url}
            alt={post.author.name}
<<<<<<< HEAD
            className="w-10 h-10 rounded-full"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement
              target.src = '/images/blog-placeholder.svg'
<<<<<<< HEAD
            }}
          />
          <div>
            <p className="m-0 font-medium">{post.author.name}</p>
            {post.author.title && (
              <p className="m-0 text-sm text-zion-slate-light">
                {post.author.title}
              </p>
            )}
          </div>
        </div>
        {post.featuredImage && (
          <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
            <img
              src={post.featuredImage}
=======
=======
            className="w - 10 h - 10 rounded - full";
            on_error={(e) => {
              const target = e.current_target as HTMLImageElement,
              target.src = '/images / blog - placeholder.svg';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            }}
          />;
          <div>;
            <p className="m - 0 font - medium">{post.author.name}</p>;
            {post.author.title && (
              <p className="m - 0 text - sm text - zion - slate - light">;
                {post.author.title}
              </p>)}
          </div>;
        </div>;
        {post.featured_image && (
          <div className="aspect-[16 / 9] w - full relative overflow - hidden rounded - lg mb - 6">;
            <img;
              src={post.featured_image}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              alt={post.title}
<<<<<<< HEAD
              className="object-cover w-full h-full"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/blog-placeholder.svg'
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
  )
}
export default BlogPostPage
export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join(process.cwd(), 'contentblog')
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))
  const paths = files.map((f) => ({
    params: { slug: f.replace(/\.md$/, '') }}))
  // Use `blocking` so new posts added after build can be generated on demand
  return { paths, fallback: 'blocking' }
}
export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params}: {
  params?: { slug?: string }
}) => {
  const slug = params?.slug as string
  // Validate slug to prevent malformed paths
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { notFound: true }
  }
  const filePath = path.join(process.cwd(), 'contentblog', `${slug}.md`)
  const post = parseMarkdown(filePath)
  if (!post) {
    return { notFound: true }
  }
  return { props: { initialPost: post }, revalidate: 60 }
<<<<<<< HEAD
=======
<<<<<<< HEAD
}

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
              className="object - cover w - full h - full";
              on_error={(e) => {
                const target = e.current_target as HTMLImageElement,
                target.src = '/images / blog - placeholder.svg';
              }}
            />;
          </div>)}
        <ReactMarkdown>{body}</ReactMarkdown>;
        <AuthorBio author={post.author} />;
        <SocialShareButtons title={post.title} />;
        <CommentsSection slug={post.slug} />;
      </main>;
    </>);
},
export default BlogPostPage,
export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join (process.cwd (), 'contentblog'),
  const files = fs.readdir_sync (dir).filter ((f) => f.ends_with ('.md')),
  const paths = files.map ((f) => ({
    params: { slug: f.replace (/\.md$/, '') }})),
  // Use `blocking` so new posts added after build can be generated on demand;
  return { paths, fallback: 'blocking' }
},
export const getStaticProps: GetStaticProps < BlogPostPageProps> = async ({
  params}: {
  params?: { slug?: string }
}) => {
  const slug = params?.slug as string,
  // Validate slug to prevent malformed paths;
  if () {) {
  $2
}
    return { not_found: true }
  }
  const file_path = path.join (process.cwd (), 'contentblog', `${slug}.md`),
  const post = parse_markdown (file_path),
  // Check condition
if ( {) {
  $2
}
    return { not_found: true }
  }
  return { props: { initial_post: post }, revalidate: 60 }
},
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
