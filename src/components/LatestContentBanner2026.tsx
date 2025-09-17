import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const LatestContentBanner2026: React.FC = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const featuredContent = [
    {
      id: 'ai-2026-breakthrough',
      title: 'AI 2026: The Automation Breakthrough That Changes Everything',
      description: 'Revolutionary AI automation with 92% efficiency gains and 1200% ROI',
      category: 'AI Innovation',
      image: '🚀',
      link: '/content/ai-2026-automation-breakthrough'
    },
    {
      id: 'quantum-ai-fusion',
      title: 'Quantum AI Fusion 2026: The Next Computing Revolution',
      description: 'Exponential computational power through quantum-AI convergence',
      category: 'Quantum Computing',
      image: '⚡',
      link: '/content/quantum-ai-fusion-2026'
    },
    {
      id: 'autonomous-business',
      title: 'Autonomous Business Operations 2026: Running Without Humans',
      description: 'Complete operational autonomy with 24/7 intelligent management',
      category: 'Business Innovation',
      image: '🤖',
      link: '/content/autonomous-business-2026'
    },
    {
      id: 'conscious-ai',
      title: 'Conscious AI 2026: Ethics, Rights, and the Future of Intelligence',
      description: 'Exploring the ethical implications of truly conscious AI systems',
      category: 'AI Ethics',
      image: '🧠',
      link: '/content/conscious-ai-ethics-2026'
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredContent.length]);
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 border-b border-white/20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content Preview */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4">
              <span className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                NEW CONTENT 2026
              </span>
            </div>
            <div className="min-h-[120px] flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                {featuredContent[currentContent].title}
              </h2>
              <p className="text-lg text-gray-300 mb-4 max-w-2xl">
                {featuredContent[currentContent].description}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredContent[currentContent].category}
                </span>
                <Link
                  to={featuredContent[currentContent].link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Read Now
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Content Indicators */}
            <div className="flex justify-center lg:justify-start gap-2 mt-6">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentContent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentContent 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Visual Element */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-6xl transform rotate-12 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                {featuredContent[currentContent].image}
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">NEW</span>
              </div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
        {/* Additional Features */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-white font-semibold">Latest AI</div>
              <div className="text-gray-300 text-sm">Breakthroughs</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-white font-semibold">Quantum</div>
              <div className="text-gray-300 text-sm">Computing</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2">🧠</div>
              <div className="text-white font-semibold">Neural</div>
              <div className="text-gray-300 text-sm">Interfaces</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2">🤖</div>
              <div className="text-white font-semibold">Autonomous</div>
              <div className="text-gray-300 text-sm">Business</div>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-8 text-center">
          <Link
            to="/latest-content-2026"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore All 2026 Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );

};

export default LatestContentBanner2026;
