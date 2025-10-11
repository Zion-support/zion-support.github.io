'use client';

import React from 'react';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            Latest insights and updates from our team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
