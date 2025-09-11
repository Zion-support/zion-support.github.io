import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { blogPosts } from '@/data/posts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Link className="text-primary underline" to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${post.title} - Zion Tech Group`}
        description={post.excerpt}
        canonical={`https://ziontechgroup.com/blog/${post.slug}`}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 prose dark:prose-invert">
        <h1>{post.title}</h1>
        <p className="text-sm text-muted-foreground">{new Date(post.publishedAt).toLocaleDateString()} • {post.tags.join(' • ')}</p>
        <p>{post.content}</p>
      </article>
    </div>
  );
}

