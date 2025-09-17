import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Tech Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and breakthroughs in technology and AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3">
              AI Innovation Hub
            </h3>
            <p className="text-gray-300 mb-4">
              Explore the latest developments in artificial intelligence and machine learning.
            </p>
            <a href="/ai-innovation-hub-2025" className="text-blue-400 hover:text-blue-300">
              Read More →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3">
              Advanced AI Solutions
            </h3>
            <p className="text-gray-300 mb-4">
              Discover cutting-edge AI solutions transforming industries worldwide.
            </p>
            <a href="/advanced-ai-solutions-2025" className="text-blue-400 hover:text-blue-300">
              Read More →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-3">
              Revolutionary Tech
            </h3>
            <p className="text-gray-300 mb-4">
              Learn about revolutionary technologies shaping the future.
            </p>
            <a href="/revolutionary-tech-2025" className="text-blue-400 hover:text-blue-300">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;