import React from 'react';
import { Helmet } from 'react-helmet-async';

const AISEOOptimizerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI SEO Optimizer - Zion Tech Group</title>
        <meta name="description" content="Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            AI SEO Optimizer
          </h1>
          <p className="text-xl text-cyan-400 mb-8">
            Automated SEO analysis and optimization
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Boost your search rankings with our AI-powered SEO tools. Get automated keyword research, 
            content optimization, and performance tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">Keyword Research</h3>
            <p className="text-gray-300 mb-4">
              Discover high-value keywords with AI-powered research and competitor analysis.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $79/month</div>
          </div>

          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">Content Optimization</h3>
            <p className="text-gray-300 mb-4">
              Optimize your content for search engines with AI-powered suggestions and improvements.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $99/month</div>
          </div>

          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">Rank Tracking</h3>
            <p className="text-gray-300 mb-4">
              Monitor your search rankings and track performance with detailed analytics and reports.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $59/month</div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="cyber-button energy-pulse hover:scale-105 transition-all duration-300"
          >
            Optimize Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AISEOOptimizerPage;