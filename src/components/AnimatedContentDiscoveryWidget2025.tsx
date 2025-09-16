"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ArrowRightStarZapTrendingUpUsersAwardCheckCircleRocketBrainCpuTargetBarChart3SearchFilterClockEye

export default function AnimatedContentDiscoveryWidget2025() {
  const [currentContentsetCurrentContent] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);

  const contentItems = [
    {
      title: "AI 2025 Ultimate Breakthrough Showcase",
      description: "Discover revolutionary AI technologies delivering 2,500-15,000% ROI",
      category: "Showcase",
      roi: "15,000%",
      color: "from-purple-500 to-pink-500",
      icon: Brain,
      href: "/ai-2025-ultimate-breakthrough-showcase"
    },
    {
      title: "Global Transformation Success Story",
      description: "How a Fortune 500 company achieved 10,000% ROI through AI transformation",
      category: "Case Study",
      roi: "10,000%",
      color: "from-green-500 to-emerald-500",
      icon: TrendingUp,
      href: "/case-studies/ai-2025-global-transformation-breakthrough"
    },
    {
      title: "AI 2025 ROI Calculator",
      description: "Calculate your potential ROI with our interactive AI transformation calculator",
      category: "Tool",
      roi: "Custom",
      color: "from-blue-500 to-cyan-500",
      icon: BarChart3,
      href: "/tools/ai-2025-roi-calculator"
    },
    {
      title: "Quantum-Neural Fusion Technology",
      description: "Revolutionary fusion of quantum computing and neural networks",
      category: "Technology",
      roi: "15,000%",
      color: "from-indigo-500 to-purple-500",
      icon: Cpu,
      href: "/blog/quantum-neural-fusion-2026"
    },
    {
      title: "Autonomous AI Systems",
      description: "Self-managing AI systems that optimize operations automatically",
      category: "Solution",
      roi: "8,500%",
      color: "from-orange-500 to-red-500",
      icon: Rocket,
      href: "/solutions/autonomous-ai-systems"
    },
    {
      title: "Predictive Intelligence Platform",
      description: "Real-time analytics that forecast trends and optimize decisions",
      category: "Platform",
      roi: "5,000%",
      color: "from-teal-500 to-green-500",
      icon: Target,
      href: "/platforms/predictive-intelligence"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }4000);
    return () => clearInterval(interval);
  }[]);

  const currentItem = contentItems[currentContent];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🔍 DISCOVER CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Content
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Discovery</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our revolutionary AI content library. Discover breakthrough technologiesuccess storiesand tools that can transform your business.
          </p>
        </div>

        {/* Main Discovery Widget */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content Preview */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${currentItem.color} rounded-xl p-8 text-white transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <currentItem.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white/80">{currentItem.category}</div>
                      <div className="text-2xl font-bold">{currentItem.title}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-yellow-300">{currentItem.roi}</div>
                    <div className="text-sm text-white/80">ROI</div>
                  </div>
                </div>
                <p className="text-white/90 mb-6 text-lg">{currentItem.description}</p>
                <a 
                  href={currentItem.href}
                  className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
                >
                  Explore Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>

              {/* Content Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {contentItems.map((_index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentContent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentContent ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Featured Content</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  Auto-refresh every 4s
                </div>
              </div>

              {contentItems.map((itemindex) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                    index === currentContent
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                  onClick={() => setCurrentContent(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mr-4`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.category} • {item.roi} ROI</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Eye className="w-4 h-4 mr-2" />
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Smart Search</h3>
                <div className="text-sm text-gray-600">AI-powered content discovery</div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Find exactly what you need with our intelligent search that understands context and intent.
            </p>
            <a href="/search" className="text-purple-600 hover:text-purple-700 font-semibold">
              Try Smart Search →
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <Filter className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Advanced Filters</h3>
                <div className="text-sm text-gray-600">Refine your search</div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Filter content by ROIindustrytechnology typeand implementation timeline.
            </p>
            <a href="/filters" className="text-blue-600 hover:text-blue-700 font-semibold">
              Explore Filters →
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Personalized</h3>
                <div className="text-sm text-gray-600">AI recommendations</div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Get personalized content recommendations based on your industry and interests.
            </p>
            <a href="/recommendations" className="text-green-600 hover:text-green-700 font-semibold">
              Get Recommendations →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}