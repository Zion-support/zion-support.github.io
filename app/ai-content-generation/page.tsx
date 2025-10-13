import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiContentGenerationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Content Generation - AI-Powered Content Creation | Zion Tech Group</title>
        <meta name="description" content="Create high-quality content at scale with AI-powered content generation tools. Blog posts, social media, marketing materials, and more." />
      </Helmet>
      <div className="min-h-screen pt-16">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Generation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create compelling content at scale with AI-powered generation tools
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiContentGenerationPage;