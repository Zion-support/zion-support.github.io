import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
}

interface BlogProps {
  post: BlogPost | null;
}

const BlogPostPage: React.FC<BlogProps> = ({ post }) => {
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} - Zion Tech Group Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <p className="text-gray-600 mb-4">{post.date}</p>
              <p className="text-xl text-gray-700 dark:text-gray-300">{post.excerpt}</p>
            </header>
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // For now, return empty paths since we don't have blog posts
  return { paths: [], fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<BlogProps> = async ({ params }) => {
  const slug = params?.slug as string;
  
  // For now, return a sample blog post
  const post: BlogPost = {
    slug,
    title: 'Welcome to Zion Tech Group',
    excerpt: 'Discover our innovative technology solutions and services.',
    content: `
      <h2>Welcome to Zion Tech Group</h2>
      <p>We are a leading technology company specializing in AI solutions, cybersecurity, and enterprise automation.</p>
      <h3>Our Services</h3>
      <ul>
        <li>AI & Machine Learning Solutions</li>
        <li>Cybersecurity Services</li>
        <li>Cloud Infrastructure</li>
        <li>Enterprise Automation</li>
      </ul>
      <p>Contact us to learn more about how we can help transform your business.</p>
    `,
    date: new Date().toLocaleDateString()
  };

  return { props: { post } };
};

export default BlogPostPage;

