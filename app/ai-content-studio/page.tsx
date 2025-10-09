import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIContentStudioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Content Studio - Zion Tech Group</title>
        <meta name="description" content="Complete AI-powered content creation suite with automated writing, design, and optimization tools." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            AI Content Studio
          </h1>
          <p className="text-xl text-cyan-400 mb-8">
            Complete content creation suite powered by AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Create high-quality content 10x faster with our AI-powered content studio. 
            From blog posts to social media content, we automate your entire content creation workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">AI Writing Assistant</h3>
            <p className="text-gray-300 mb-4">
              Generate blog posts, articles, and marketing copy with AI-powered writing that matches your brand voice.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $99/month</div>
          </div>

          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">Visual Content Creator</h3>
            <p className="text-gray-300 mb-4">
              Create stunning graphics, infographics, and social media visuals with AI-powered design tools.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $149/month</div>
          </div>

          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">Content Optimization</h3>
            <p className="text-gray-300 mb-4">
              Optimize your content for SEO, engagement, and conversion with AI-powered insights and recommendations.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $79/month</div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="cyber-button energy-pulse hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIContentStudioPage;