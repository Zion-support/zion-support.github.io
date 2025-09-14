'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency?: string;
    accuracy?: string;
    satisfaction?: string;
    time?: string;
  };
  readingTime: string;
  tags: string[];
  featured: boolean;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: "advanced-automation-revolution",
      title: "AI 2025: The Advanced Automation Revolution - Ultimate Guide to 600% ROI",
      type: "blog",
      url: "/blog/ai-2025-advanced-automation-revolution-ultimate-guide",
      metrics: {
        roi: "600%",
        savings: "$2.8M annually",
        efficiency: "89%",
        accuracy: "99.7%",
        satisfaction: "98%"
      },
      readingTime: "22 min read",
      tags: ["AI Automation", "ROI", "Enterprise", "Advanced Technology"],
      featured: true
    },
    {
      id: "enterprise-transformation-ultimate",
      title: "AI 2025 Enterprise Transformation: $2.1B Company Achieves 650% ROI in 15 Months",
      type: "case-study",
      url: "/case-studies/ai-2025-enterprise-transformation-ultimate-success-story",
      metrics: {
        roi: "650%",
        savings: "$325M",
        efficiency: "94%",
        satisfaction: "99.8%",
        time: "15 months"
      },
      readingTime: "18 min read",
      tags: ["Case Study", "Enterprise Transformation", "AI Implementation", "ROI"],
      featured: true
    },
    {
      id: "implementation-ultimate-roadmap",
      title: "AI 2025 Implementation Ultimate Roadmap: From Strategy to 700% ROI in 12 Months",
      type: "resource",
      url: "/resources/ai-2025-implementation-ultimate-roadmap-comprehensive-guide",
      metrics: {
        roi: "700%",
        savings: "$4.2M annually",
        success_rate: "94%",
        time_to_value: "78% faster",
        satisfaction: "99.7%"
      },
      readingTime: "35 min read",
      tags: ["Implementation Guide", "AI Strategy", "ROI", "Roadmap"],
      featured: true
    },
    {
      id: "quantum-computing-breakthrough",
      title: "AI 2025: Quantum Computing Breakthrough - Enterprise Solutions Achieving 800% ROI",
      type: "blog",
      url: "/blog/ai-2025-quantum-computing-breakthrough-enterprise-solutions",
      metrics: {
        roi: "800%",
        savings: "$180M annually",
        speed: "1,200%",
        accuracy: "99.97%",
        market: "$100B"
      },
      readingTime: "20 min read",
      tags: ["Quantum Computing", "AI", "Enterprise Solutions", "ROI"],
      featured: true
    },
    {
      id: "autonomous-systems-revolution",
      title: "AI 2025 Autonomous Systems Revolution: $1.8B Company Achieves 900% ROI with Self-Managing Operations",
      type: "case-study",
      url: "/case-studies/ai-2025-autonomous-systems-revolution-success-story",
      metrics: {
        roi: "900%",
        savings: "$750M",
        automation: "95%",
        satisfaction: "99.8%",
        time: "14 months"
      },
      readingTime: "16 min read",
      tags: ["Case Study", "Autonomous Systems", "AI Revolution", "ROI"],
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const currentItem = contentItems[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ultimate AI Content Showcase 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive AI content library featuring 600-900% ROI success stories, 
            implementation guides, and breakthrough technologies that are transforming enterprise operations.
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Featured Content</h3>
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{getTypeIcon(currentItem.type)}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentItem.type)}`}>
                  {currentItem.type.replace('-', ' ').toUpperCase()}
                </span>
              </div>
              
              <h4 className="text-2xl font-bold mb-4 leading-tight">
                {currentItem.title}
              </h4>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {currentItem.tags.slice(0, 4).map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center text-sm opacity-90 mb-6">
                <span>⏱️ {currentItem.readingTime}</span>
              </div>

              <Link
                href={currentItem.url}
                className="inline-flex items-center bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Full Article →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {currentItem.metrics.roi}
                </div>
                <div className="text-sm opacity-90">ROI</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">
                  {currentItem.metrics.savings}
                </div>
                <div className="text-sm opacity-90">Savings</div>
              </div>
              {currentItem.metrics.efficiency && (
                <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">
                    {currentItem.metrics.efficiency}
                  </div>
                  <div className="text-sm opacity-90">Efficiency</div>
                </div>
              )}
              {currentItem.metrics.accuracy && (
                <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    {currentItem.metrics.accuracy}
                  </div>
                  <div className="text-sm opacity-90">Accuracy</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contentItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center mb-4">
                <span className="text-xl mr-2">{getTypeIcon(item.type)}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                  {item.type.replace('-', ' ').toUpperCase()}
                </span>
              </div>
              
              <h5 className="text-lg font-bold mb-3 leading-tight">
                {item.title}
              </h5>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm opacity-90">⏱️ {item.readingTime}</span>
                <span className="text-sm font-bold text-yellow-400">
                  {item.metrics.roi} ROI
                </span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-white bg-opacity-20 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={item.url}
                className="inline-flex items-center text-sm font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join 500+ companies that have achieved 600-900% ROI through strategic AI implementation. 
              Get your free consultation and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;