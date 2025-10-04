import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog & Insights - Zion Tech Group | AI & Technology Expertise</title>
        <meta name="description" content="Stay updated with the latest insights on AI technology trends, case studies, and industry best practices from Zion Tech Group experts." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Blog & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with the latest insights on AI technology trends, case studies, and industry best practices from our team of experts.
            </p>
          </div>
          
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                We're working on bringing you the latest insights and articles. Check back soon for updates!
              </p>
              <div className="text-4xl mb-4">📝</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
