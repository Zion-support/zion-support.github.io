"use client";
import React{ useStateuseEffect } from 'react';
import Link from 'next/link';
SearchFilterGridListStarClockTrendingUpArrowRightEyeBookOpenPlayDownload

const InteractiveContentDiscovery2026PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentContentsetCurrentContent] = useState(0);

  const contentTypes = [
    {
      title: 'AI Guides',
      description: 'Complete implementation guides',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      count: 342
    },
    {
      title: 'Interactive Demos',
      description: 'Hands-on experiences',
      icon: Play,
      color: 'from-purple-500 to-pink-500',
      count: 156
    },
    {
      title: 'Case Studies',
      description: 'Real-world success stories',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      count: 134
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step learning',
      icon: Download,
      color: 'from-orange-500 to-red-500',
      count: 289
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentTypes.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const currentContentData = contentTypes[currentContent];
  const IconComponent = currentContentData.icon;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 border border-indigo-500/30 rounded-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_50%)]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-200 text-sm font-medium mb-4">
              <Search className="w-4 h-4 text-indigo-400" />
              Interactive Content Discovery 2026
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Discover
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Amazing Content
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our vast library of cutting-edge contentutorialscase studiesand interactive experiences
            </p>
          </div>

          {/* Content Showcase */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Current Content Display */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-8 h-80 flex flex-col justify-center items-center text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${currentContentData.color} flex items-center justify-center mb-6 transform transition-all duration-500 hover:scale-110`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {currentContentData.title}
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  {currentContentData.description}
                </p>
                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-xl px-4 py-2 mb-4">
                  <span className="text-indigo-200 font-bold text-lg">
                    {currentContentData.count} Items
                  </span>
                </div>
                <div className="flex gap-2">
                  {contentTypes.map((_index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentContent ? 'bg-indigo-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content List */}
            <div className="space-y-4">
              {contentTypes.map((contentindex) => {
                const IconComponent = content.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      index === currentContent
                        ? 'bg-indigo-500/20 border-indigo-400/50'
                        : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-700/30'
                    }`}
                    onClick={() => setCurrentContent(index)}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${content.color} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">
                        {content.title}
                      </h4>
                      <p className="text-gray-400">
                        {content.description}
                      </p>
                    </div>
                    <div className="text-indigo-200 font-bold">
                      {content.count}
                    </div>
                    {index === currentContent && (
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1,247</div>
              <div className="text-gray-400">Total Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">7</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Monthly Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.9</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/interactive-content-discovery-2026"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
            >
              Explore Content Library
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2026PromotionBanner;