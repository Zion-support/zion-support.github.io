import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AiContentModerationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Content Moderation - Zion Tech Group</title>
        <meta name="description" content="AI Content Moderation services by Zion Tech Group. Professional AI and IT solutions for content filtering and moderation." />
        <meta name="keywords" content="ai-content-moderation, AI solutions, IT services, content moderation, AI filtering" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Content Moderation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI content moderation services by Zion Tech Group. 
              AI-powered content filtering and moderation for platforms and communities.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're working on bringing you comprehensive AI content moderation solutions. 
              Contact us to learn more about our services.
            </p>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiContentModerationPage;