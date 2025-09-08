





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





const BlogPostPage: React.FC<BlogPostPageProps> = ({ initialPost }) => {

  const router = useRouter()
  const { slug } = router.query;
  const [post, setPost] = React.useState<BlogPost | null>(initialPost)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (initialPost && initialPost.slug === slug) {

    } else if (slug) {
      // This case handles if the slug changes and initialPost is not for the current slug

      // Or if initialPost was null from getStaticProps (which shouldn't happen if notFound is true)
      // For now, we will rely on getStaticProps to provide the correct post or a 404.'
      // If initialPost is null and getStaticProps didn't return notFound, that's an inconsistent state.
      // The previous logic tried a fallback here, but we aim to make getStaticProps authoritative.



        setError('Article not found')

      }
    }
  }, [slug, initialPost])



function parseMarkdown(filePath: string): BlogPost | null {;
  if (!fs.existsSync(filePath)) {;
    return null;
    } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });

      set_post (initial_post),
      set_error (null), // Clear any previous error;
    } else // Check condition;
if ( {) {}
  $2;
}
      // For now, we will rely on getStaticProps to provide the correct post or a 404.;'
      // If initial_post is null and getStaticProps didn't return not_found, that's an inconsistent state.;
      // The previous logic tried a fallback here, but we aim to make getStaticProps authoritative.;
      const direct_fallback = BLOG_POSTS.find ((p) => p.slug === slug) || null,
      // Check condition;
if ( {) {}
  $2;
}
        set_post (direct_fallback),
        set_error (null);
      } else {}
        // If getStaticProps is working correctly, this path (slug exists, no initial_post, no fallback);
        // should ideally not be hit frequently, as getStaticProps would have returned not_found.;
        // However, to maintain some robustness for dynamic client - side slug changes not triggering a new getStaticProps: set_post (null),'
        set_error ('Article not found');
      }
    }
  }, [slug, initial_post]),
  // Check condition;
if ( {) {}
  $2;
}

    return <div>{error}</div>;
  }
  // Check condition
if ( {) {
  $2
}
    return <div > Article not found</div>;
  }


  return (
    <>;
      <AdvancedSEO;
        title={post.title}
        description={post.excerpt}



        {post.excerpt && <p className="lead">{post.excerpt}</p>}

        <div className="flex items - center gap - 3 mb - 6">;
          <img;
            src={post.author.avatar_url}
            alt={post.author.name}


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

            className="w-10 h-10 rounded-full"
            onError={(e) => {}
              const target = e.currentTarget as HTMLImageElement'
              target.src = '/images/blog-placeholder.svg'


                {post.author.title  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}
              </p>;

    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>
        </div>
        {post.featuredImage && ("
          <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">

              alt={post.title}

          </div>
        </div>
        {post.featuredImage && (
<div className='aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6'>
            <img



    return res.status(500).json({ error: "Internal server error" });
  }
}
              alt={post.title  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

              className="object-cover w-full h-full"

              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/blog-placeholder.svg'

              }  } catch (error) {
    console.error("Error:", error);



            />;
          </div>;
        )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

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



    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }



