import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIDesignAssistantPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Design Assistant - Zion Tech Group</title>
        <meta name="description" content="AI-powered design tool for logos, graphics, and visual content with automated brand consistency." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            AI Design Assistant
          </h1>
          <p className="text-xl text-cyan-400 mb-8">
            AI-powered design tool for visual content
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Create stunning logos, graphics, and visual content with our AI design assistant. 
            Maintain brand consistency across all your marketing materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">Logo Generation</h3>
            <p className="text-gray-300 mb-4">
              Create professional logos and brand identities with AI-powered design generation.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $79/month</div>
          </div>

          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">Social Media Graphics</h3>
            <p className="text-gray-300 mb-4">
              Generate engaging social media posts, banners, and marketing graphics automatically.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $59/month</div>
          </div>

          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">Brand Consistency</h3>
            <p className="text-gray-300 mb-4">
              Ensure all your designs follow your brand guidelines with AI-powered consistency checks.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $99/month</div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="cyber-button energy-pulse hover:scale-105 transition-all duration-300"
          >
            Start Designing
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIDesignAssistantPage;