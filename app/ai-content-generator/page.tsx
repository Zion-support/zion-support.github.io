import React from "react";
import { Helmet } from "react-helmet-async";

const AIContentGeneratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Content Generator - Zion Tech Group</title>
        <meta
          name="description"
          content="Generate high-quality content automatically with our AI-powered content generation tools."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Content Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generate high-quality content automatically with AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Text Generation
              </h3>
              <p className="text-gray-600">
                Generate articles, blog posts, and other written content using
                advanced AI models.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Content Optimization
              </h3>
              <p className="text-gray-600">
                Optimize your content for SEO and engagement using AI-powered
                analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIContentGeneratorPage;
