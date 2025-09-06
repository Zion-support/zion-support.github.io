<<<<<<< HEAD
<<<<<<< HEAD


=======


=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from 'react',;
import ReactMarkdown from 'react-markdown',;
import { useRouter } from 'next/router',;
import AdvancedSEO from '@/components/seo/AdvancedSEO',;
import { BLOG_POSTS } from '@/data/blog-posts',;
import { AuthorBio } from '@/components/blog/AuthorBio',;
import { SocialShareButtons } from '@/components/blog/SocialShareButtons',;
import { CommentsSection } from '@/components/blog/CommentsSection',;
import type { BlogPost } from '@/types/blog',;
import type { GetStaticPaths, GetStaticProps } from 'next',;
import fs from 'fs',;
import path from 'path',;
function parseMarkdown(filePath: string): BlogPost | null {
  if (!fs.existsSync(filePath)) {
    return null
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import AdvancedSEO from '@/components/seo/AdvancedSEO';
import { BLOG_POSTS } from '@/data/blog-posts';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { SocialShareButtons } from '@/components/blog/SocialShareButtons';
import { CommentsSection } from '@/components/blog/CommentsSection';
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { BlogPost } from '@/types/blog';
import type { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
function parseMarkdown(filePath: string): BlogPost | null {
  if (!fs.existsSync(filePath)) {
    return null
  }
<<<<<<< HEAD
const raw = fs.readFileSync(filePath, 'utf8')
=======

  const raw = fs.readFileSync(filePath, 'utf8')
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const match = raw.match(/---\n([\s\S]+?)\n---\n([\s\S]*)/)
  if (!match |!match[1] |!match[2]) return null
  const meta = JSON.parse(match[1])
  const content = match[2].trim()
  const slug = path.basename(filePath).replace(/\.md$/, '')
  return { ...meta, id: slug, slug, content } as BlogPost
}
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface BlogPostPageProps {
<<<<<<< HEAD
  /**;
  * Preloaded blog post for static generation. Can be null if not found.;
  */;
  initial_post: BlogPost | null;
}
<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const BlogPostPage: React.FC<BlogPostPageProps> = ({ initialPost }) => {
  const router = useRouter()
  const { slug } = router.query
  const [post, setPost] = React.useState<BlogPost | null>(initialPost)
  const [error, setError] = React.useState<string | null>(null)
  React.useEffect(() => {
    if (initialPost && initialPost.slug === slug) {
<<<<<<< HEAD


=======
      setPost(initialPost);
}

interface BlogPostPageProps {_/**
=======
  /**
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
   * Preloaded blog post for static generation. Can be null if not found.
   */
  initialPost: BlogPost | null
}
<<<<<<< HEAD

const BlogPostPage: React.FC<BlogPostPageProps> = ({ initialPost }) => {
  const router = useRouter()
  const { slug } = router.query
  const [post, setPost] = React.useState<BlogPost | null>(initialPost),
  const [error, setError] = React.useState<string | null>(null),

  React.useEffect(() => {
    if (initialPost && initialPost.slug === slug) {
      setPost(initialPost),

=======
const BlogPostPage: React.FC<BlogPostPageProps> = ({ initialPost }) => {
  const router = useRouter()
  const { slug } = router.query
  const [post, setPost] = React.useState<BlogPost | null>(initialPost)
  const [error, setError] = React.useState<string | null>(null)
  React.useEffect(() => {
    if (initialPost && initialPost.slug === slug) {
      setPost(initialPost)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
const directFallback = BLOG_POSTS.find((p) => p.slug === slug) || null;
      if (directFallback) {
        setPost(directFallback);
=======
      const directFallback = BLOG_POSTS.find((p) => p.slug === slug) |null
      if (directFallback) {
        setPost(directFallback)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        setError(null)
      } else {
        // If getStaticProps is working correctly, this path (slug exists, no initialPost, no fallback)
        // should ideally not be hit frequently, as getStaticProps would have returned notFound.
<<<<<<< HEAD
// However, to maintain some robustness for dynamic client-side slug changes not triggering a new getStaticProps: setPost(null)
=======
        // However, to maintain some robustness for dynamic client-side slug changes not triggering a new getStaticProps: setPost(null)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        setError('Article not found')
      }
    }
  }, [slug, initialPost])
<<<<<<< HEAD
  if (error) {
    return <div>{error}</div>

=======
=======
<<<<<<< HEAD
  if (error) {
    return <div>{error}</div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const BlogPostPage: React.FC < BlogPostPageProps> = ({ initial_post }) => {
  const router = use_router (),
  const { slug } = router.query,
  const [post, set_post] = React.useState < BlogPost | null>(initial_post),
  const [error, set_error] = React.useState < string | null>(null),
  React.useEffect (() => {
    // Check condition
if ( {) {
  $2
=======

function parseMarkdown(filePath: string): BlogPost | null {;
  if (!fs.existsSync(filePath)) {;
    return null;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }

}
      set_post (initial_post),
      set_error (null), // Clear any previous error;
    } else // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
;
interface BlogPostPageProps {;
  /**;
   * Preloaded blog post for static generation. Can be null if not found.;
   */;
  initialPost: BlogPost | null;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
}
;
const BlogPostPage: React.FC<BlogPostPageProps> = ({ initialPost }) => {;
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = React.useState<BlogPost | null>(initialPost);
  const [error, setError] = React.useState<string | null>(null);
  React.useEffect(() => {;
    if (initialPost && initialPost.slug === slug) {;
      setPost(initialPost);
      setError(null), // Clear any previous error;
    } else if (slug) {;
      // This case handles if the slug changes and initialPost is not for the current slug;
      // Or if initialPost was null from getStaticProps (which shouldn't happen if notFound is true);
=======
      // This case handles if the slug changes and initial_post is not for the current slug;
      // Or if initial_post was null from getStaticProps (which shouldn't happen if not_found is true);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
  }
<<<<<<< HEAD

=======
  // Check condition
if ( {) {
  $2
}
    return <div > Article not found</div>;
  }
<<<<<<< HEAD

=======
  const article_ld = {

=======
  const article_ld = {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    author: post.author.name,
    published_time: post.published_date,
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    tags: post.tags || []},
  const body = (post as any).body || post.content;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <>;
      <AdvancedSEO;
        title={post.title}
        description={post.excerpt}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        image={post.featured_image}
        type="article";
        article={article_ld}
      />;
      <main className="prose dark:prose - invert max - w-3xl mx - auto py - 8">;
        <h1>{post.title}</h1>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {post.excerpt && <p className="lead">{post.excerpt}</p>}
        <div className="flex items - center gap - 3 mb - 6">;
          <img;
            src={post.author.avatar_url}
            alt={post.author.name}
<<<<<<< HEAD


}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [slug, initialPost]),;
  if (error) {;
    return <div>{error}</div>;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (!post) {;
    return <div>Article not found</div>;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const articleLd = {;
    author: post.author.name;
    publishedTime: post.publishedDate;
    tags: post.tags || []};
  const body = (post as any).body || post.content;
  return (;
    <>;
      <AdvancedSEO;
        title={post.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        description={post.excerpt  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        image={post.featuredImage  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        type="article"
        article={articleLd  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      />
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <h1>{post.title}</h1>
        {post.excerpt && <p className="lead">{post.excerpt}</p>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={post.author.avatarUrl  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            alt={post.author.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            className="w-10 h-10 rounded-full"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement
              target.src = '/images/blog-placeholder.svg'
<<<<<<< HEAD
            }  } catch (error) {
=======


                {post.author.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </p>;
            )  } catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
          />
          <div>
            <p className="m-0 font-medium">{post.author.name}</p>
            {post.author.title && (
              <p className="m-0 text-sm text-zion-slate-light">

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          </div>
        </div>
        {post.featuredImage && (
          <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
            <img

<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="w - 10 h - 10 rounded - full";
            on_error={(e) => {
              const target = e.current_target as HTMLImageElement,
              target.src = '/images / blog - placeholder.svg';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              alt={post.title}


              src={post.featuredImage  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              alt={post.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              className="object-cover w-full h-full"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/blog-placeholder.svg'

<<<<<<< HEAD
}
=======

=======
=======
              alt={post.title}
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className="object - cover w - full h - full";
              on_error={(e) => {
                const target = e.current_target as HTMLImageElement,
                target.src = '/images / blog - placeholder.svg';
              }}
            />;
          </div>)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <ReactMarkdown>{body}</ReactMarkdown>;
        <AuthorBio author={post.author} />;
        <SocialShareButtons title={post.title} />;
        <CommentsSection slug={post.slug} />;
      </main>;
<<<<<<< HEAD
    </>;
  );
};
export default BlogPostPage,;
export const getStaticPaths: GetStaticPaths = async () => {;
  const dir = path.join(process.cwd(), 'contentblog'),;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  const paths = files.map((f) => ({;
    params: { slug: f.replace(/\.md$/, '') }})),;
  // Use `blocking` so new posts added after build can be generated on demand;
  return { paths, fallback: 'blocking'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
},;
export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({;
  params}: {;
  params?: { slug?: string   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}) => {;
  const slug = params?.slug as string;
  // Validate slug to prevent malformed paths;
  if (!/^[a-z0-9-]+$/.test(slug)) {;
    return { notFound: true   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const filePath = path.join(process.cwd(), 'contentblog', `${slug}.md`),;
  const post = parseMarkdown(filePath);
  if (!post) {;
    return { notFound: true   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return { props: { initialPost: post }, revalidate: 60   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};

=======
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

=======
    }
  }, [slug, initialPost]),

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  if (error) {
    return <div>{error}</div>
=======
function parseMarkdown(filePath: string): BlogPost | null {;
  if (!fs.existsSync(filePath)) {;
    return null;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/---\n([\s\S]+?)\n---\n([\s\S]*)/);
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const slug = path.basename(filePath).replace(/\.md$/, '');
  return { ...meta, id: slug, slug, content } as BlogPost;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
interface BlogPostPageProps {;
  /**;
   * Preloaded blog post for static generation. Can be null if not found.;
   */;
  initialPost: BlogPost | null;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
;
const BlogPostPage: React.FC<BlogPostPageProps> = ({ initialPost }) => {;
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = React.useState<BlogPost | null>(initialPost);
  const [error, setError] = React.useState<string | null>(null);
  React.useEffect(() => {;
    if (initialPost && initialPost.slug === slug) {;
      setPost(initialPost);
      setError(null), // Clear any previous error;
    } else if (slug) {;
      // This case handles if the slug changes and initialPost is not for the current slug;
      // Or if initialPost was null from getStaticProps (which shouldn't happen if notFound is true);
      // For now, we will rely on getStaticProps to provide the correct post or a 404.;
      // If initialPost is null and getStaticProps didn't return notFound, that's an inconsistent state.;
      // The previous logic tried a fallback here, but we aim to make getStaticProps authoritative.;
      const directFallback = BLOG_POSTS.find((p) => p.slug === slug) || null;
      if (directFallback) {;
        setPost(directFallback);
        setError(null);
      } else {;
        // If getStaticProps is working correctly, this path (slug exists, no initialPost, no fallback);
        // should ideally not be hit frequently, as getStaticProps would have returned notFound.;
        // However, to maintain some robustness for dynamic client-side slug changes not triggering a new getStaticProps: setPost(null);
        setError('Article not found');
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
  const articleLd = {
<<<<<<< HEAD
    author: post.author.name,
    publishedTime: post.publishedDate,
    tags: post.tags || []},
  const body = (post as any).body || post.content
=======
    author: post.author.name
    publishedTime: post.publishedDate
    tags: post.tags |[]}
  const body = (post as any).body |post.content
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <>
      <AdvancedSEO
        title={post.title}
        description={post.excerpt}
        image={post.featuredImage}
<<<<<<< HEAD
        type=&quot;article&quot;
        article={articleLd}
      />
      <main className=&quot;prose dark:prose-invert max-w-3xl mx-auto py-8&quot;>
        <h1>{post.title}</h1>
        {post.excerpt && <p className=&quot;lead&quot;>{post.excerpt}</p>}
        <div className=&quot;flex items-center gap-3 mb-6&quot;>
          <img
            src={post.author.avatarUrl}
            alt={post.author.name}
            className=&quot;w-10 h-10 rounded-full&quot;
=======
        type="article"
        article={articleLd}
      />
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <h1>{post.title}</h1>
        {post.excerpt && <p className="lead">{post.excerpt}</p>}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={post.author.avatarUrl}
            alt={post.author.name}
=======
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [slug, initialPost]),;
  if (error) {;
    return <div>{error}</div>;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (!post) {;
    return <div>Article not found</div>;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const articleLd = {;
    author: post.author.name;
    publishedTime: post.publishedDate;
    tags: post.tags || []};
  const body = (post as any).body || post.content;
  return (;
    <>;
      <AdvancedSEO;
        title={post.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        description={post.excerpt  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        image={post.featuredImage  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        type="article"
        article={articleLd  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      />
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <h1>{post.title}</h1>
        {post.excerpt && <p className="lead">{post.excerpt}</p>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={post.author.avatarUrl  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            alt={post.author.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            className="w-10 h-10 rounded-full"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement
              target.src = '/images/blog-placeholder.svg'
            }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          />
          <div>
<<<<<<< HEAD
            <p className=&quot;m-0 font-medium&quot;>{post.author.name}</p>
            {post.author.title && (
              <p className=&quot;m-0 text-sm text-zion-slate-light&quot;>
=======
            <p className="m-0 font-medium">{post.author.name}</p>
            {post.author.title && (
              <p className="m-0 text-sm text-zion-slate-light">
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {post.author.title}
              </p>
            )}
=======
                {post.author.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </p>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          </div>
        </div>
        {post.featuredImage && (
<<<<<<< HEAD
          <div className=&quot;aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6&quot;>
            <img
              src={post.featuredImage}
              alt={post.title}
              className=&quot;object-cover w-full h-full&quot;
=======
          <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
            <img
<<<<<<< HEAD
              src={post.featuredImage}
              alt={post.title}
=======
              src={post.featuredImage  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              alt={post.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              className="object-cover w-full h-full"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/blog-placeholder.svg'
<<<<<<< HEAD
              }}
            />
          </div>
        )}
<<<<<<< HEAD
        <ReactMarkdown>{_body}</ReactMarkdown>
        <AuthorBio author={_post.author} />
        <SocialShareButtons title={_post.title} />
        <CommentsSection slug={_post.slug} />
      </main>
    </>
  )
},

export default BlogPostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join(process.cwd(), 'contentblog'),
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))
  const paths = files.map((f) => ({
    params: { slug: f.replace(/\.md$/, '') }})),
  // Use `blocking` so new posts added after build can be generated on demand
  return { paths, fallback: 'blocking' }
},

=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params}: {
  params?: { slug?: string }
}) => {
  const slug = params?.slug as string
  // Validate slug to prevent malformed paths
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { notFound: true }
  }
<<<<<<< HEAD
  const filePath = path.join(process.cwd(), 'contentblog', `${slug}.md`),
=======
  const filePath = path.join(process.cwd(), 'contentblog', `${slug}.md`)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const post = parseMarkdown(filePath)
  if (!post) {
    return { notFound: true }
  }
  return { props: { initialPost: post }, revalidate: 60 }
<<<<<<< HEAD
},

=======
}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />;
          </div>;
        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  return { props: { initialPost: post }, revalidate: 60 }
},;
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
        <ReactMarkdown>{body}</ReactMarkdown>;
        <AuthorBio author={post.author} />;
        <SocialShareButtons title={post.title} />;
        <CommentsSection slug={post.slug} />;
      </main>;
    </>;
  );
};
export default BlogPostPage,;
export const getStaticPaths: GetStaticPaths = async () => {;
  const dir = path.join(process.cwd(), 'contentblog'),;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  const paths = files.map((f) => ({;
    params: { slug: f.replace(/\.md$/, '') }})),;
  // Use `blocking` so new posts added after build can be generated on demand;
  return { paths, fallback: 'blocking'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
},;
export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({;
  params}: {;
  params?: { slug?: string   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}) => {;
  const slug = params?.slug as string;
  // Validate slug to prevent malformed paths;
  if (!/^[a-z0-9-]+$/.test(slug)) {;
    return { notFound: true   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const filePath = path.join(process.cwd(), 'contentblog', `${slug}.md`),;
  const post = parseMarkdown(filePath);
  if (!post) {;
    return { notFound: true   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return { props: { initialPost: post }, revalidate: 60   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
