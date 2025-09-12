import React from 'react';
import { SEO } from '@/components/SEO';
import { blogPosts } from '@/data/posts';

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog - Zion Tech Group"
        description="Insights on AI, Green IT, and Micro‑SaaS from Zion Tech Group."
        canonical="https://ziontechgroup.com/blog"
      />

      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-lg border border-border p-6 hover:bg-muted transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-muted-foreground mb-3">{new Date(post.publishedAt).toLocaleDateString()}</p>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

