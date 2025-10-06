import React from 'react';

const UnifiedContentPromotion: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unified Content Promotion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest content and resources designed to help you succeed with AI and technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Latest Articles</h3>
            <p className="text-gray-600 mb-4">
              Stay updated with the latest trends in AI and technology.
            </p>
            <a href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
              Read More →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
            <p className="text-gray-600 mb-4">
              Learn from real-world implementations and success stories.
            </p>
            <a href="/case-studies" className="text-blue-600 hover:text-blue-800 font-medium">
              View Cases →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <p className="text-gray-600 mb-4">
              Access our comprehensive library of tools and guides.
            </p>
            <a href="/resources" className="text-blue-600 hover:text-blue-800 font-medium">
              Explore →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedContentPromotion;