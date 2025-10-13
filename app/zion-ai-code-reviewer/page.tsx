import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiCodeReviewerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Ai Code Reviewer - Coming Soon</title>
        <meta name="description" content="Zion Ai Code Reviewer - Advanced AI-powered solution coming soon." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Zion Ai Code Reviewer
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Coming Soon - Advanced AI-powered ai code reviewer solution
          </p>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-gray-300">
              This innovative AI service is currently in development. 
              Contact us to learn more about upcoming features and early access.
            </p>
            <div className="mt-6">
              <a 
                href="tel:+13024640950" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors mr-6"
              >
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiCodeReviewerPage;
