import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          Latest insights and updates from our team.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;