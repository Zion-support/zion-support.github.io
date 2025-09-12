import React from 'react';
import { getLatestPosts } from '@/data/posts';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const PromoBanner: React.FC = () => {
  const latest = getLatestPosts(1)[0];
  if (!latest) return null;

  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <Sparkles className="w-4 h-4" />
          <span className="font-medium">New:</span>
          <Link to={`/blog/${latest.slug}`} className="underline-offset-2 hover:underline">
            {latest.title}
          </Link>
        </div>
        <Link
          to={`/blog/${latest.slug}`}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-md px-3 py-1.5 text-sm"
        >
          Read now
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export const FeaturedContentBanner: React.FC = () => {
  const latest = getLatestPosts(3);
  if (latest.length === 0) return null;

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Latest from the Blog</h3>
          <Link to="/blog" className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {latest.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group rounded-lg border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow"
            >
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
              <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 line-clamp-2">
                {post.title}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                {post.excerpt}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

