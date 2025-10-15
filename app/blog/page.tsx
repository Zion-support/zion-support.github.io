import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates on AI and IT technology from Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends and insights in AI and IT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Future of AI in Business</h3>
              <p className="text-gray-600 mb-4">
                Exploring how artificial intelligence is transforming modern business operations.
              </p>
              <div className="text-sm text-blue-600">Read more →</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration Best Practices</h3>
              <p className="text-gray-600 mb-4">
                Essential tips for successfully migrating your infrastructure to the cloud.
              </p>
              <div className="text-sm text-blue-600">Read more →</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Transformation Guide</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to digital transformation for modern enterprises.
              </p>
              <div className="text-sm text-blue-600">Read more →</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;