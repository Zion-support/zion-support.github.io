'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiContentGenerationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content at scale with AI-powered content creation tools and solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Content Generation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create high-quality, engaging content at scale with our advanced AI content generation solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Text Generation</h3>
              <p className="text-gray-600">Generate articles, blogs, and marketing copy with AI-powered writing tools.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Visual Content</h3>
              <p className="text-gray-600">Create images, graphics, and visual content using AI image generation.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Video Production</h3>
              <p className="text-gray-600">Generate video content and animations with AI-powered video tools.</p>
            </div>
          </div>ursor/fix-errors-and-merge-to-main-b63b
        </div>
      </div>
    </>
  );
};

export default AiContentGenerationPage;