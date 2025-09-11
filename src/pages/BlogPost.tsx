import React from 'react';
import { SEO } from '../components/SEO';

const BlogPost: React.FC = () => {
  return (
    <>
      <SEO 
        title="Blog Post - Zion Tech Group"
        description="Read our latest blog post."
        keywords="blog post, tech insights, latest updates"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Blog Post</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Read our latest insights and updates from the world of technology.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;