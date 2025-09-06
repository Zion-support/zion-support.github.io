

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

            className="w-10 h-10 rounded-full"
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
            <p className="m-0 font-medium">{post.author.name}</p>
            {post.author.title && (
              <p className="m-0 text-sm text-zion-slate-light">

          </div>
        </div>
        {post.featuredImage && (
          <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
            <img

              className="object-cover w-full h-full"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/blog-placeholder.svg'

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

