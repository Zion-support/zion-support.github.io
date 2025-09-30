'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2026ShowcaseBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      title: "AI Enterprise Automation Revolution 2026",
      description: "Complete implementation guide with 300% ROI strategies and real-world success stories",
      type: "Featured Article",
      readTime: "20 min read",
      href: "/blog/ai-2026-enterprise-automation-revolution",
      color: "blue",
      icon: "🚀"
    },
    {
      title: "AI Mega Trends 2026 Predictions",
      description: "Discover the top 10 AI trends shaping 2026. From quantum AI to autonomous enterprises",
      type: "Trend Analysis",
      readTime: "25 min read",
      href: "/blog/ai-2026-mega-trends-predictions",
      color: "purple",
      icon: "🔮"
    },
    {
      title: "AI Finance Automation Success Story",
      description: "95% process reduction & $3M annual savings with AI-powered finance automation",
      type: "Success Story",
      readTime: "15 min read",
      href: "/case-studies/ai-finance-automation-success-story",
      color: "green",
      icon: "💰"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-gradient-to-r from-blue-50 to-blue-100',
          border: 'border-blue-200',
          text: 'text-blue-800',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
      case 'purple':
        return {
          bg: 'bg-gradient-to-r from-purple-50 to-purple-100',
          border: 'border-purple-200',
          text: 'text-purple-800',
          button: 'bg-purple-600 hover:bg-purple-700'
        };
      case 'green':
        return {
          bg: 'bg-gradient-to-r from-green-50 to-green-100',
          border: 'border-green-200',
          text: 'text-green-800',
          button: 'bg-green-600 hover:bg-green-700'
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-gray-50 to-gray-100',
          border: 'border-gray-200',
          text: 'text-gray-800',
          button: 'bg-gray-600 hover:bg-gray-700'
        };
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            New Content Available
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our newest content featuring cutting-edge AI strategies, real-world case studies, and industry predictions for 2026.
          </p>
        </div>

        <div className="relative">
          {/* Main Content Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item, index) => {
                const colors = getColorClasses(item.color);
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8`}>
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-4xl">{item.icon}</span>
                            <div>
                              <span className={`${colors.text} px-3 py-1 rounded-full text-sm font-semibold bg-white/50`}>
                                {item.type}
                              </span>
                              <span className="text-gray-500 text-sm ml-3">{item.readTime}</span>
                            </div>
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            {item.title}
                          </h3>
                          <p className="text-lg text-gray-700 mb-6">
                            {item.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                              href={item.href}
                              className={`${colors.button} text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center`}
                            >
                              Read Full Article
                            </Link>
                            <Link
                              href="/blog"
                              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
                            >
                              View All Content
                            </Link>
                          </div>
                        </div>
                        <div className="lg:text-right">
                          <div className="inline-block bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                            <h4 className="text-lg font-bold text-gray-900 mb-4">Key Highlights</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                Proven implementation strategies
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Real-world case studies
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                ROI calculations & projections
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                Industry best practices
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More Featured Content
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/ai-enterprise-adoption-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">20 min read</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Enterprise Adoption 2025: Complete Implementation Guide
                </h4>
                <p className="text-gray-600 mb-4">
                  Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-trends-2025-predictions" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured Article
                  </span>
                  <span className="text-sm text-gray-500">15 min read</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Trends 2025: Top 10 Predictions & Industry Insights
                </h4>
                <p className="text-gray-600 mb-4">
                  Discover the top AI trends shaping 2025. From autonomous agents to edge computing.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-supply-chain-optimization-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">Manufacturing</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Supply Chain Optimization: 60% Cost Reduction
                </h4>
                <p className="text-gray-600 mb-4">
                  See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Latest AI Insights
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Get weekly updates on AI trends, case studies, and implementation strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Join 10,000+ professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026ShowcaseBanner;