



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


interface BlogPostPageProps {
  /**;
  * Preloaded blog post for static generation. Can be null if not found.;
  */;
  initial_post: BlogPost | null;
}



const BlogPostPage: React.FC<BlogPostPageProps> = ({ initialPost }) => {
  const router = useRouter()
  const { slug } = router.query
  const [post, setPost] = React.useState<BlogPost | null>(initialPost)
  const [error, setError] = React.useState<string | null>(null)
  React.useEffect(() => {
    if (initialPost && initialPost.slug === slug) {


      setError(null), // Clear any previous error
    } else if (slug) {
      // This case handles if the slug changes and initialPost is not for the current slug
      // Or if initialPost was null from getStaticProps (which shouldn't happen if notFound is true)
      // For now, we will rely on getStaticProps to provide the correct post or a 404.
      // If initialPost is null and getStaticProps didn't return notFound, that's an inconsistent state.
      // The previous logic tried a fallback here, but we aim to make getStaticProps authoritative.


        setError(null)
      } else {
        // If getStaticProps is working correctly, this path (slug exists, no initialPost, no fallback)
        // should ideally not be hit frequently, as getStaticProps would have returned notFound.
// However, to maintain some robustness for dynamic client-side slug changes not triggering a new getStaticProps: setPost(null)
        // However, to maintain some robustness for dynamic client-side slug changes not triggering a new getStaticProps: setPost(null)
        setError('Article not found')
      }
    }
  }, [slug, initialPost])
  if (error) {
    return <div>{error}</div>

const BlogPostPage: React.FC < BlogPostPageProps> = ({ initial_post }) => {
  const router = use_router (),
  const { slug } = router.query,
  const [post, set_post] = React.useState < BlogPost | null>(initial_post),
  const [error, set_error] = React.useState < string | null>(null),
  React.useEffect (() => {
    // Check condition
if ( {) {
  $2

function parseMarkdown(filePath: string): BlogPost | null {;
  if (!fs.existsSync(filePath)) {;
    return null;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }

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
  }
  // Check condition
if ( {) {
  $2
}
    return <div > Article not found</div>;
  }

  const article_ld = {

    author: post.author.name,
    published_time: post.published_date,
    tags: post.tags || []},
  const body = (post as any).body || post.content;
  return (
    <>;
      <AdvancedSEO;
        title={post.title}
        description={post.excerpt}

        image={post.featured_image}
        type="article";
        article={article_ld}
      />;
      <main className="prose dark:prose - invert max - w-3xl mx - auto py - 8">;
        <h1>{post.title}</h1>;

        {post.excerpt && <p className="lead">{post.excerpt}</p>}
        <div className="flex items - center gap - 3 mb - 6">;
          <img;
            src={post.author.avatar_url}
            alt={post.author.name}


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


            className="w-10 h-10 rounded-full"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement
              target.src = '/images/blog-placeholder.svg'


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


          </div>
        </div>
        {post.featuredImage && (
          <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
            <img

            className="w - 10 h - 10 rounded - full";
            on_error={(e) => {
              const target = e.current_target as HTMLImageElement,
              target.src = '/images / blog - placeholder.svg';

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


              className="object-cover w-full h-full"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/blog-placeholder.svg'


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

import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/
import AdvancedSEO from '@/components/seo/
import { BLOG_POSTS } from '@/data/
import { AuthorBio } from '@/components/blog/
import { SocialShareButtons } from '@/components/blog/
import { CommentsSection } from '@/components/blog/
import type { BlogPost } from '@/types/
  const slug = path.basename(filePath).replace(/\.md$/
import { use_router } from 'next /
import AdvancedSEO from '@/components / seo /
import { BLOG_POSTS } from '@/data /
import { AuthorBio } from '@/components / blog /
import { SocialShareButtons } from '@/components / blog /
import { CommentsSection } from '@/components / blog /
import type { BlogPost } from '@/types /
  const slug = path.basename (file_path).replace (/\.md$/
      //
      //
