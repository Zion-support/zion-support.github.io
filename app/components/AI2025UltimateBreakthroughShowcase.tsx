'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, DollarSign, Users, Clock, CheckCircle, Award, Target } from 'lucide-react';

const AI2025UltimateBreakthroughShowcase = () => {
  const content = [
    {
      id: "ai-2025-enterprise-automation-revolution-ultimate-breakthrough-2025",
      type: "blog",
      title: "AI 2025: The Enterprise Automation Revolution",
      subtitle: "Ultimate Breakthrough Guide to 2,500% ROI",
      description: "Transform your business with cutting-edge AI automation that delivers unprecedented results. Learn the exact strategies, technologies, and implementation frameworks driving 2,500% ROI.",
      metrics: {
        roi: "2,500%",
        savings: "$3.2B+",
        efficiency: "95%",
        accuracy: "99.7%"
      },
      readingTime: "28 min read",
      tags: ["AI Automation", "Enterprise", "ROI", "Implementation", "Success Guide", "2025"],
      link: "/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough-2025",
      featured: true
    },
    {
      id: "fortune-500-ai-automation-2500-roi-success-story",
      type: "case-study",
      title: "Fortune 500 AI Automation Success Story",
      subtitle: "$3.2B Annual Savings - 2,500% ROI Achievement",
      description: "How a Fortune 100 manufacturing giant transformed operations with AI automation and achieved unprecedented results in just 18 months.",
      metrics: {
        roi: "2,500%",
        savings: "$3.2B",
        timeline: "18 months",
        efficiency: "340%"
      },
      readingTime: "22 min read",
      tags: ["Case Study", "Fortune 500", "AI Automation", "2,500% ROI", "Success Story", "Manufacturing"],
      link: "/case-studies/fortune-500-ai-automation-2500-roi-success-story",
      featured: true
    },
    {
      id: "ai-automation-implementation-ultimate-guide-2025",
      type: "resource",
      title: "AI Implementation Ultimate Guide 2025",
      subtitle: "Complete Roadmap to 2,500% ROI",
      description: "The definitive guide to implementing AI automation that delivers extraordinary results. Complete framework, technologies, and implementation strategies.",
      metrics: {
        roi: "2,500%",
        success: "500+",
        timeline: "18-24 months",
        savings: "$3.2B"
      },
      readingTime: "35 min read",
      tags: ["Implementation Guide", "AI Automation", "ROI", "Strategy", "Framework", "2025"],
      link: "/resources/ai-automation-implementation-ultimate-guide-2025",
      featured: true
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
      case 'blog': return 'bg-blue-500';
      case 'case-study': return 'bg-green-500';
      case 'resource': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">ULTIMATE BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI 2025: The Ultimate Breakthrough Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the revolutionary AI automation strategies that are delivering <span className="font-bold text-green-600">2,500% ROI</span> and transforming Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">2,500%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$3.2B+</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Success Stories</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">18</div>
            <div className="text-gray-600 font-medium">Months Timeline</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(item.type)}`}>
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                  {item.featured && (
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs font-medium">FEATURED</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-medium mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.readingTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>500+ Success Stories</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={item.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve 2,500% ROI?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies already transforming their business with AI automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateBreakthroughShowcase;