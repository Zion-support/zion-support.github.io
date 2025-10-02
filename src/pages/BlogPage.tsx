import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in AI and technology.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're working on bringing you valuable content about AI, technology, and business insights.
          </p>
          <a 
            href="/contact" 
            className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block"
          >
            Subscribe for Updates
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;