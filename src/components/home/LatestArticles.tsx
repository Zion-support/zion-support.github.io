import React from 'react';
import { getLatestPosts } from '@/data/posts';

export function LatestArticles() {
  const latest = getLatestPosts(3);
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">From the Blog</h2>
        <a href="/blog" className="text-primary underline">View all</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {latest.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="rounded-lg border border-border p-4 hover:bg-muted transition-colors">
            <div className="text-sm text-muted-foreground mb-1">{new Date(post.publishedAt).toLocaleDateString()}</div>
            <div className="font-medium mb-2">{post.title}</div>
            <div className="text-sm text-muted-foreground">{post.excerpt}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

