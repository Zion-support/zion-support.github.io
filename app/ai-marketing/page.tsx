import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiMarketingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Marketing - Zion Tech Group | AI-Powered Marketing Solutions</title>
        <meta name="description" content="Revolutionary AI-powered marketing automation, ad optimization, and content generation. Transform your marketing with artificial intelligence." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center neon-text cyber-text">
              AI Marketing Solutions
            </h1>
            
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Revolutionize your marketing with AI-powered automation, intelligent ad optimization, 
              and automated content generation that drives real results.
            </p>

            <div className="cyber-card p-8 text-center">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                We're working on something amazing for AI marketing. Stay tuned for our comprehensive 
                AI-powered marketing solutions that will transform your business.
              </p>
              <a href="/contact" className="cyber-button">
                Get Notified When Available
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiMarketingPage;