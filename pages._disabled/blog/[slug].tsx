import React from 'react';
import Head from 'next/head';
import { NextSeo } from '@/components/NextSeo';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';

interface BlogProps {
  post: {
    slug: string;
    title: string;
    content: string;
    author: string;
    date: string;
    excerpt: string;
  } | null;
}

const BlogPostPage: React.FC<BlogProps> = ({ post }) => {
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <NextSeo 
        title={`${post.title} - Zion Tech Group Blog`}
        description={post.excerpt}
      />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <User className="mr-2 h-4 w-4" />
                <span className="mr-4">{post.author}</span>
                <Calendar className="mr-2 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <p className="text-xl text-gray-600">{post.excerpt}</p>
            </header>
            
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Return empty paths for now to avoid build errors
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  
  // Return a sample post for now
  const post = {
    slug,
    title: 'Sample Blog Post',
    content: '<p>This is a sample blog post content. In a real implementation, this would be loaded from a CMS or markdown files.</p>',
    author: 'Zion Tech Group',
    date: new Date().toLocaleDateString(),
    excerpt: 'This is a sample blog post excerpt.'
  };

  return {
    props: {
      post
    }
  };
};

export default BlogPostPage;