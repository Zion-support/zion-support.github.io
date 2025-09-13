import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContentShowcaseBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const contentItems = [
    {
      title: "🧠 Neural Synthesis Technology",
      description: "99.7% accuracy in complex decision-making",
      roi: "15,000% ROI",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "⚛️ Quantum-Neural Fusion",
      description: "Revolutionary processing capabilities",
      roi: "25,000% ROI",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "🤖 Autonomous Decision Systems",
      description: "Self-evolving AI business optimization",
      roi: "8,500% ROI",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "🔮 Predictive Analytics Engine",
      description: "98.5% accurate forecasting",
      roi: "18,000% ROI",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      color: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black border-b border-gray-700">
      <div className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
              🚀 Revolutionary AI Content Showcase
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              Discover the most advanced AI breakthroughs and success stories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contentItems.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.color} p-4 rounded-lg border border-white/20 hover:scale-105 transition-transform cursor-pointer ${
                  index === currentContent ? 'ring-2 ring-yellow-400' : ''
                }`}
                onClick={() => window.location.href = item.link}
              >
                <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-white/90 text-xs mb-2">{item.description}</p>
                <div className="text-yellow-300 font-bold text-xs">{item.roi}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/ai-2025-ultimate-breakthrough-revolution"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full text-sm transition-all transform hover:scale-105"
              >
                Explore All Breakthroughs
              </Link>
              <Link
                href="/case-studies"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-full text-sm transition-all transform hover:scale-105"
              >
                View Success Stories
              </Link>
              <Link
                href="/blog"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-6 rounded-full text-sm transition-all transform hover:scale-105"
              >
                Read AI Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcaseBanner;