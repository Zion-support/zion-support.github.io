import React from 'react';
import { Link } from 'react-router-dom';

export const NewContentShowcaseBanner: React.FC = () => {
  const newContent = [
    {
      title: "🚀 AI 2026 Revolutionary Breakthroughs",
      description: "Quantum-enhanced neural networks and autonomous AI ecosystems",
      url: "/blog/ai-2026-revolutionary-breakthroughs-future",
      isNew: true,
      category: "AI Innovation"
    },
    {
      title: "🏆 $2.3B Enterprise Transformation",
      description: "Fortune 500 success story with 500% ROI in 6 months",
      url: "/case-studies/ai-2026-global-enterprise-transformation-breakthrough", 
      isNew: true,
      category: "Case Study"
    },
    {
      title: "🌟 AI Innovation Showcase 2026",
      description: "Cutting-edge technologies transforming industries worldwide",
      url: "/ai-innovation-showcase-2026",
      isNew: true,
      category: "Tech Showcase"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold mb-4">
            🎉 NEW CONTENT AVAILABLE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary Technology Solutions 2026
          </h2>
          <p className="text-lg text-purple-100 max-w-4xl mx-auto">
            Discover our latest comprehensive guides and showcases featuring cutting-edge AI, quantum computing, 
            and complete technology solutions with proven ROI and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {newContent.map((content, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  NEW
                </span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-semibold">
                  {content.category}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{content.title}</h3>
              <p className="text-purple-100 text-sm mb-4">{content.description}</p>
              <Link
                to={content.url}
                className="inline-flex items-center bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-sm"
              >
                Explore Now →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/ai-innovation-showcase-2026"
            className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-pink-400 text-black px-8 py-4 rounded-xl font-bold hover:from-cyan-300 hover:to-pink-300 transition-all duration-300 text-lg shadow-2xl transform hover:scale-105"
          >
            🌟 Explore All New Content
          </Link>
        </div>
      </div>
    </div>
  );
};