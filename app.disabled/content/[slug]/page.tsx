// @ts-nocheck
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { BLOG_POSTS } from '../../../src/data/blog-posts.js';

export default function ContentPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link href="/" className="text-purple-600 hover:text-purple-800">← Back to Home</Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="text-sm text-gray-600 mb-6">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        {post.imageUrl && (
          <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-xl mb-8" />
        )}
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</p>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return BLOG_POSTS.map(post => ({ slug: post.slug }));
}
