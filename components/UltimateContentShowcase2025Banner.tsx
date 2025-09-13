import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const contentFeatures = [
    {
      title: "Revolutionary AI Innovations",
      description: "Explore breakthrough technologies",
      link: "/ai-innovations-2025-ultimate",
      icon: "🚀"
    },
    {
      title: "Comprehensive AI Tools",
      description: "Powerful solutions for every need",
      link: "/ai-tools-ultimate-showcase-2025",
      icon: "⚡"
    },
    {
      title: "Proven Success Stories",
      description: "Real results from real organizations",
      link: "/ai-success-stories-2025",
      icon: "🏆"
    }
  ];

  return (
    <div className={`w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-pink-900/80 backdrop-blur-lg border border-indigo-500/30 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive collection of revolutionary AI innovations, powerful tools, and inspiring success stories that are transforming industries worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {contentFeatures.map((feature, index) => (
            <Link 
              key={index}
              href={feature.link}
              className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 hover:from-slate-700/80 hover:to-slate-600/80 p-6 rounded-xl border border-slate-600/30 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
                <div className="mt-4 text-indigo-400 font-semibold group-hover:text-cyan-400 transition-colors">
                  Explore Now →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/ai-innovations-2025-ultimate"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
          >
            View All Innovations
          </Link>
          <Link 
            href="/ai-success-stories-2025"
            className="border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-8 py-3 rounded-xl font-bold transition-all duration-300"
          >
            See Success Stories
          </Link>
        </div>

        <div className="mt-6 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-green-900/50 to-emerald-900/50 px-4 py-2 rounded-full border border-green-500/30">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-green-400 text-sm font-semibold">
              New content added weekly • Over 500+ organizations transformed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025Banner;