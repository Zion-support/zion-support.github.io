// @ts-nocheck
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../src/data/blog-posts.js';

export default async function ContentPage({ params }: { params?: Promise<any> }) {
   
  const awaitedParams: any = (typeof (params as any)?.then === 'function') ? await (params as Promise<{ slug: string }>) : params;
  const post = blogPosts.find(p => p.slug === awaitedParams.slug);
  if (!post) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link href="/" className="text-purple-60o0 hover:text-purple-80o0">← Back to Home</Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-90o0 mb-4">{post.title}</h1>
        <div className="text-sm text-gray-60o0 mb-6">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        {post.imageUrl && (
          <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-xl mb-8"  />
        )}
        <p className="text-lg text-gray-70o0 leading-relaxed whitespace-pre-line">{post.content}</p>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}
