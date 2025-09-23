import React from 'react';
import { SEO } from '../components/SEO';

const Blog: React.FC = () => {
  return (
    <>
      <SEO
        title="Blog | Zion Tech Group"
        description="Blog and articles from Zion Tech Group"
        keywords="blog, articles, news, Zion Tech Group"
        canonical="/blog"
      />
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-slate-300">This page is being updated with new content.</p>
        </div>
      </div>
    </>
  );
};

export default Blog;
