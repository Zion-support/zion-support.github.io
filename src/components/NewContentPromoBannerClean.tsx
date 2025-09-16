import React from 'react';
import { getRecentBlogPosts } from '../data/blog-posts';

const NewContentPromoBannerClean: React.FC = () => {
  const recent = getRecentBlogPosts(3);

  return (
    <div className="mb-12 rounded-2xl p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="uppercase tracking-wider text-xs font-bold opacity-90 mb-1">New</div>
          <h3 className="text-2xl font-extrabold">Fresh Content: Just Published</h3>
          <p className="opacity-90">Explore our latest insights on guardrails, RAG, reliability, and FinOps.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 w-full md:w-auto">
          {recent.map((post) => (
            <a key={post.slug} href={`/pages/BlogPost2025?slug=${post.slug}`} className="group block bg-white/10 rounded-xl p-4 hover:bg-white/15 transition">
              <div className="text-sm font-semibold mb-1 line-clamp-2">{post.title}</div>
              <div className="text-xs opacity-80">{post.readTime} • {post.category}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContentPromoBannerClean;

