'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // New content pieces with compelling metrics
  const contentPieces = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - The Ultimate Guide to 500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-guide',
      description: 'Transform your business with cutting-edge AI automation that delivers unprecedented results',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Digital Transformation']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $3.2B Company Achieves 650% ROI',
      type: 'case-study',
      url: '/case-studies/ai-transformation-fortune-500-ultimate-success-2025',
      description: 'How a global manufacturing leader transformed operations and achieved unprecedented results',
      metrics: {
        roi: '650%',
        savings: '$2.8B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      readingTime: '22 min read',
      featured: true,
      tags: ['Fortune 500', 'Case Study', 'ROI', 'Manufacturing']
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 800% ROI',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-roadmap-2025',
      description: 'The complete guide to transforming your organization with AI and achieving unprecedented results',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      readingTime: '35 min read',
      featured: true,
      tags: ['Implementation', 'Strategy', 'ROI', 'Roadmap']
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      description: 'How quantum computing is revolutionizing business operations and delivering unprecedented advantages',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        speed: '1,000x',
        accuracy: '99.97%'
      },
      readingTime: '28 min read',
      featured: true,
      tags: ['Quantum Computing', 'AI Revolution', 'Innovation', 'Technology']
    }
  ];

  // Auto-rotate content every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [contentPieces.length]);

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🚀 ULTIMATE AI 2025 CONTENT COLLECTION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content That Delivers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              800% ROI
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI implementation guides, success stories, and revolutionary insights that are transforming Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Main Content Showcase */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Preview */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  {currentContent.type.toUpperCase()}
                </div>
                <div className="flex items-center text-yellow-400">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{currentContent.readingTime}</span>
                </div>
                {currentContent.featured && (
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                {currentContent.title}
              </h3>

              <p className="text-lg opacity-90 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4 my-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm opacity-80 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {currentContent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 flex items-center justify-center group"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Success Statistics */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-center mb-8">Proven Results</h4>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white bg-opacity-10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                    <span className="text-3xl font-bold text-green-400">800%</span>
                  </div>
                  <div className="text-lg font-semibold mb-2">Average ROI</div>
                  <div className="text-sm opacity-80">Across all implementations following our guides</div>
                </div>

                <div className="bg-white bg-opacity-10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Users className="w-8 h-8 text-blue-400" />
                    <span className="text-3xl font-bold text-blue-400">500+</span>
                  </div>
                  <div className="text-lg font-semibold mb-2">Success Stories</div>
                  <div className="text-sm opacity-80">Fortune 500 companies transformed</div>
                </div>

                <div className="bg-white bg-opacity-10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <CheckCircle className="w-8 h-8 text-yellow-400" />
                    <span className="text-3xl font-bold text-yellow-400">99%</span>
                  </div>
                  <div className="text-lg font-semibold mb-2">Success Rate</div>
                  <div className="text-sm opacity-80">For organizations following our roadmap</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Navigation */}
        <div className="flex justify-center space-x-4 mb-8">
          {contentPieces.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white bg-opacity-40 hover:bg-opacity-60'
              }`}
            />
          ))}
        </div>

        {/* All Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentPieces.map((content) => (
            <div
              key={content.id}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 cursor-pointer group"
              onClick={() => setCurrentSlide(contentPieces.indexOf(content))}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                  {content.type.toUpperCase()}
                </div>
                {content.featured && (
                  <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
              </div>

              <h4 className="text-lg font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                {content.title}
              </h4>

              <p className="text-sm opacity-80 mb-4 line-clamp-3">
                {content.description}
              </p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-yellow-400">
                  <Clock className="w-4 h-4 mr-1" />
                  {content.readingTime}
                </div>
                <div className="text-yellow-400 font-bold">
                  {content.metrics.roi} ROI
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Join 500+ Fortune 500 companies achieving 800% ROI with our proven AI implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources"
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 flex items-center justify-center group"
              >
                Explore All Resources
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;