'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiContentGenerationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="Create high-quality content at scale with AI-powered content generation tools for blogs, social media, and marketing." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Content Generation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create engaging, high-quality content at scale with our advanced AI content generation platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Blog Content</h3>
              <p className="text-gray-600">Generate SEO-optimized blog posts and articles automatically.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <p className="text-gray-600">Create engaging social media posts and captions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Marketing Copy</h3>
              <p className="text-gray-600">Generate compelling marketing copy and ad content.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiContentGenerationPage;