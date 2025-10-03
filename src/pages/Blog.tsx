import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Latest insights and updates from Zion Tech Group.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              The Future of AI
            </h3>
            <p className="text-gray-600 mb-6">
              Exploring AI trends and innovations.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;