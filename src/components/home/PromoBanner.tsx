import React from 'react';
import { getLatestPosts } from '@/data/posts';

export function PromoBanner() {
  const [latest] = getLatestPosts(1);

  if (!latest) return null;

  return (
    <section className="bg-primary/10 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex-1">
          <div className="text-xs text-muted-foreground uppercase tracking-wider">New on the blog</div>
          <a href={`/blog/${latest.slug}`} className="block">
            <div className="font-semibold">{latest.title}</div>
            <div className="text-sm text-muted-foreground">{latest.excerpt}</div>
          </a>
        </div>
        <div>
          <a
            href={`/blog/${latest.slug}`}
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Read now
          </a>
        </div>
      </div>
    </section>
  );
}

