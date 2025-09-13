



import React from 'react',;
import ReactMarkdown from 'react-markdown',;
import { useRouter } from 'next/router',;
import AdvancedSEO from '@/components/seo/AdvancedSEO',;
import AdvancedSEO from '@/components/seo/AdvancedSEO',;
import { BLOG_POSTS } from '@/data/blog-posts',;
import { AuthorBio } from '@/components/blog/AuthorBio',;
import { AuthorBio } from '@/components/blog/AuthorBio',;
import { SocialShareButtons } from '@/components/blog/SocialShareButtons',;
import { SocialShareButtons } from '@/components/blog/SocialShareButtons',;
import { CommentsSection } from '@/components/blog/CommentsSection',;
import { CommentsSection } from '@/components/blog/CommentsSection',;
import type { BlogPost } from '@/types/blog',;
import type { GetStaticPaths, GetStaticProps } from 'next',;
import fs from 'fs',;
import path from 'path',;
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



const BlogPostPage: React.FC<BlogPostPageProps> = ({ initialPost }) => {
  const [post, setPost] = React.useState<BlogPost | null>(initialPost);

      }
    }
  }, [slug, initialPost]);

  if (error) {




    return <div>{error}</div>;
  }
  if (!post) {
    return <div>Article not found</div>;
  }


  const body = (post as any).body || post.content;
  return (
    <>
      <AdvancedSEO
        title={post.title}
        description={post.excerpt}
        image={post.featuredImage}
        type="article"
        article={articleLd}
      />
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <h1>{post.title}</h1>
        {post.excerpt && <p className="lead">{post.excerpt}</p>}
        <div className="flex items-center gap-3 mb-6">
          <img






          </div>
        </div>
        {post.featuredImage && (
          <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
            <img








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
  );
};

export default BlogPostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join(process.cwd(), 'content', 'blog');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  const paths = files.map((f) => ({
    params: { slug: f.replace(/\.md$/, '') },
  }));
  // Use `blocking` so new posts added after build can be generated on demand
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params,
}: {
  params?: { slug?: string };
}) => {
  const slug = params?.slug as string;
  // Validate slug to prevent malformed paths
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { notFound: true };
  }
  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
  const post = parseMarkdown(filePath);
  if (!post) {
    return { notFound: true };
  }


