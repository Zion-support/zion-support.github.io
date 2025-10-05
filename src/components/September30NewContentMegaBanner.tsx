import React from 'react';
import { Link } from 'react-router-dom';

const September30NewContentMegaBanner: React.FC = () => {
  const newArticles = [
    {
      title: "AI Neural Coding Breakthrough",
      description: "Programming at the speed of thought with 99.7% accuracy",
      link: "/blog/ai-neural-coding-breakthrough",
      category: "Artificial Intelligence",
      readTime: "8 min read"
    },
    {
      title: "Quantum Consciousness Integration",
      description: "Revolutionary AI achieving true consciousness through quantum mechanics",
      link: "/blog/quantum-consciousness-integration",
      category: "Quantum Computing",
      readTime: "12 min read"
    },
    {
      title: "Autonomous Business Ecosystems",
      description: "Self-managing enterprises with zero human intervention",
      link: "/blog/autonomous-business-ecosystems",
      category: "Automation",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 Revolutionary Content - September 30, 2025
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, and autonomous systems 
            that are reshaping the future of technology and business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {article.title}
                </h3>
                <p className="text-white/80 mb-4">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">{article.readTime}</span>
                  <Link
                    to={article.link}
                    className="text-white font-semibold hover:text-blue-200 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Explore All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default September30NewContentMegaBanner;