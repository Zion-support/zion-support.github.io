'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'enterprise-data-revolution',
      title: 'AI 2025: The Enterprise Data Revolution - Ultimate Guide',
      type: 'Blog Post',
      description: 'Discover how Fortune 500 companies are achieving 600% ROI with AI-powered data strategies. Complete implementation guide with real-world success stories.',
      url: '/blog/ai-2025-enterprise-data-revolution-ultimate-guide',
      metrics: {
        roi: '600%',
        savings: '$25-100M',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      tags: ['Data Revolution', 'Enterprise AI', 'ROI Guide', 'Fortune 500'],
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings in 8 Months',
      type: 'Case Study',
      description: 'Real-world success story of a Fortune 500 manufacturing company that achieved $2.8B in annual savings within just 8 months of AI implementation.',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '1,302%',
        savings: '$2.8B',
        timeframe: '8 months',
        efficiency: '156%'
      },
      tags: ['Fortune 500', 'Case Study', 'Manufacturing', 'Success Story'],
      readingTime: '20 min read',
      isNew: true
    },
    {
      id: 'ai-implementation-ultimate-guide',
      title: 'AI Implementation Ultimate Guide 2025: From Strategy to 800% ROI',
      type: 'Resource',
      description: 'Complete framework for AI implementation success. Based on analysis of 500+ enterprise implementations and $50B in AI investments.',
      url: '/resources/ai-implementation-ultimate-guide-2025-complete',
      metrics: {
        roi: '800%',
        successRate: '94%',
        timeframe: '18 months',
        projects: '500+'
      },
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Best Practices'],
      readingTime: '35 min read',
      isNew: true
    }
  ];

  const categories = ['All', 'Blog Posts', 'Case Studies', 'Resources'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredContent = selectedCategory === 'All' 
    ? featuredContent 
    : featuredContent.filter(item => 
        selectedCategory === 'Blog Posts' ? item.type === 'Blog Post' :
        selectedCategory === 'Case Studies' ? item.type === 'Case Study' :
        selectedCategory === 'Resources' ? item.type === 'Resource' : true
      );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredContent.length]);
=======
interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  description: string;
  metrics: {
    roi?: string;
    savings?: string;
    accuracy?: string;
    satisfaction?: string;
    efficiency?: string;
  };
  featured?: boolean;
  isNew?: boolean;
  readingTime?: string;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - The Ultimate Guide to 500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-guide',
      description: 'Transform your business with cutting-edge AI automation that delivers unprecedented results. Learn how Fortune 500 companies achieve 500% ROI through strategic implementation.',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      featured: true,
      isNew: true,
      readingTime: '25 min read'
    },
    {
      id: 'fortune-500-success-story',
      title: 'AI Automation Success Story: How a Fortune 500 Company Achieved 567% ROI in 18 Months',
      type: 'case-study',
      url: '/case-studies/ai-automation-fortune-500-success-story-2025',
      description: 'Real-world case study of AI automation transformation delivering extraordinary results. Discover the strategies that led to $2.8 billion in annual savings.',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        accuracy: '99.7%',
        satisfaction: '99.2%'
      },
      featured: true,
      isNew: true,
      readingTime: '18 min read'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Automation Implementation Roadmap 2025: Your Complete Guide to 500% ROI',
      type: 'resource',
      url: '/resources/ai-automation-implementation-roadmap-2025',
      description: 'Step-by-step roadmap for implementing AI automation that delivers extraordinary business results. Based on analysis of 500+ successful implementations.',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      featured: true,
      isNew: true,
      readingTime: '35 min read'
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      type: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      description: 'How quantum computing is revolutionizing business operations and delivering unprecedented competitive advantage with 1,200% faster processing.',
      metrics: {
        roi: '400-600%',
        savings: '$2.8B',
        accuracy: '99.97%',
        efficiency: '1,200%'
      },
      featured: true,
      isNew: true,
      readingTime: '15 min read'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);
>>>>>>> origin/cursor/create-and-deploy-new-content-b2b4

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover our latest AI insights, success stories, and implementation guides. 
            Featuring real-world results from Fortune 500 companies achieving 600-800% ROI.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-purple-900 shadow-lg'
                  : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((content, index) => (
            <div
              key={content.id}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 group"
            >
              {/* Content Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                  {content.type}
                </span>
                {content.isNew && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                {content.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {content.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(content.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
=======
    <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ultimate AI Content Collection 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI strategies, success stories, and implementation guides that are transforming businesses worldwide. 
            Join 500+ companies achieving extraordinary results.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.8B</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
            <div className="text-gray-600 font-medium">Efficiency Gain</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
        </div>

        {/* Content Showcase */}
        <div className="relative">
          {/* Main Content Display */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getTypeIcon(contentItems[currentSlide].type)}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(contentItems[currentSlide].type)}`}>
                    {contentItems[currentSlide].type.toUpperCase()}
                  </span>
                  {contentItems[currentSlide].isNew && (
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                      NEW
                    </span>
                  )}
                  {contentItems[currentSlide].featured && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  {contentItems[currentSlide].readingTime}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {contentItems[currentSlide].title}
              </h3>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {contentItems[currentSlide].description}
              </p>

              {/* Metrics Display */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {Object.entries(contentItems[currentSlide].metrics).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
>>>>>>> origin/cursor/create-and-deploy-new-content-b2b4
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {content.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Reading Time */}
              <div className="text-sm text-gray-400 mb-6">
                📖 {content.readingTime}
              </div>

              {/* CTA Button */}
              <Link
                href={content.url}
                className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-lg text-center hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                Read Full {content.type}
              </Link>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Proven Success Metrics Across All Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">800%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">$2.8B</div>
              <div className="text-gray-300">Highest Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">94%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">500+</div>
              <div className="text-gray-300">Success Stories</div>
            </div>
=======
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={contentItems[currentSlide].url}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center"
                >
                  Read Full Article →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 text-center"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Content Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Explore All Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentItems.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  index === currentSlide ? 'ring-2 ring-purple-600' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl">{getTypeIcon(item.type)}</span>
                    <div className="flex space-x-2">
                      {item.isNew && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                          NEW
                        </span>
                      )}
                      {item.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-500">{item.readingTime}</span>
                  </div>
                </div>
              </div>
            ))}
>>>>>>> origin/cursor/create-and-deploy-new-content-b2b4
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our team of AI experts has helped over 500 enterprises achieve remarkable success. 
            Let us help you implement the strategies that are driving 600-800% ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-8 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Explore Our Services
            </Link>
=======
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies achieving extraordinary results with AI automation. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-b2b4
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;