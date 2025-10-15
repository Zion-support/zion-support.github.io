import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIContentModeratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Content Moderator - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content moderation solutions to automatically filter and moderate user-generated content with high accuracy." />
        <meta name="keywords" content="AI content moderation, automated moderation, content filtering, machine learning, user-generated content" />
        <meta property="og:title" content="AI Content Moderator - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered content moderation solutions to automatically filter and moderate user-generated content with high accuracy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-content-moderator" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-content-moderator" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Content Moderator</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI-powered content moderation solutions to automatically filter and moderate user-generated content with high accuracy and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Text Moderation</h3>
              <p className="text-gray-600 mb-4">
                Automatically detect and filter inappropriate text content including hate speech, spam, and offensive language using advanced NLP models.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Hate speech detection</li>
                <li>• Spam filtering</li>
                <li>• Profanity detection</li>
                <li>• Sentiment analysis</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Image Moderation</h3>
              <p className="text-gray-600 mb-4">
                Analyze and moderate images and videos to detect inappropriate content, violence, nudity, and other policy violations.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• NSFW content detection</li>
                <li>• Violence detection</li>
                <li>• Object recognition</li>
                <li>• Brand safety filtering</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Processing</h3>
              <p className="text-gray-600 mb-4">
                Process content in real-time with low latency to provide immediate moderation decisions for live platforms.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Sub-second response times</li>
                <li>• High throughput processing</li>
                <li>• Scalable infrastructure</li>
                <li>• 99.9% uptime guarantee</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Multi-language Support</h3>
                <p className="text-gray-600">Supports content moderation in over 50 languages with high accuracy.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Custom Rules Engine</h3>
                <p className="text-gray-600">Create custom moderation rules tailored to your platform's specific needs.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">API Integration</h3>
                <p className="text-gray-600">Easy integration with REST APIs and webhooks for seamless workflow.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">Comprehensive analytics and reporting on moderation activity and trends.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </a>
              <a href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIContentModeratorPage;
