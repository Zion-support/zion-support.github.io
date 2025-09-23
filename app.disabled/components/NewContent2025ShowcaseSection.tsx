'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Users, Star, Clock, ArrowRight, Filter, Search, ArrowRight } from 'lucide-react';

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
    timeframe?: string;
  };
  readingTime: string;
  tags: string[];
  description: string;
}

const NewContent2025ShowcaseSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const newContent: ContentItem[] = [
    {
      id: "advanced-automation-revolution",
      title: "AI 2025: The Advanced Automation Revolution - Ultimate Guide to 750% ROI",
      type: "blog",
      url: "/blog/ai-2025-advanced-automation-revolution-ultimate-guide",
      metrics: {
        roi: "750%",
        savings: "$3.2M annually",
        efficiency: "340%",
        accuracy: "99.7%",
        timeframe: "18 months"
      },
      readingTime: "22 min read",
      tags: ["AI Automation", "Enterprise Transformation", "ROI", "Process Optimization", "Fortune 500"],
      description: "Discover how Fortune 500 companies are achieving 750% ROI through advanced AI automation, with proven strategies for process optimization and operational excellence."
    },
    {
      id: "manufacturing-transformation-900-roi",
      title: "AI 2025 Manufacturing Transformation: $3.8B Company Achieves 900% ROI in 15 Months",
      type: "case-study",
      url: "/case-studies/ai-2025-manufacturing-transformation-900-roi-success",
      metrics: {
        roi: "900%",
        savings: "$4.2M annually",
        efficiency: "450%",
        accuracy: "99.8%",
        timeframe: "15 months"
      },
      readingTime: "18 min read",
      tags: ["Manufacturing AI", "Case Study", "ROI Success", "Enterprise Transformation", "Predictive Analytics"],
      description: "Real-world case study of a $3.8B manufacturing company that achieved 900% ROI through comprehensive AI transformation, including detailed implementation strategies and results."
    },
    {
      id: "implementation-ultimate-roadmap",
      title: "AI 2025 Implementation Ultimate Roadmap: From Strategy to 1,000% ROI in 18 Months",
      type: "resource",
      url: "/resources/ai-2025-implementation-ultimate-roadmap",
      metrics: {
        roi: "1,000%",
        savings: "$4.2M annually",
        efficiency: "450%",
        accuracy: "94%",
        timeframe: "18 months"
      },
      readingTime: "20 min read",
      tags: ["AI Implementation", "ROI Roadmap", "Enterprise Transformation", "Strategic Planning", "Change Management"],
      description: "Comprehensive roadmap based on 500+ successful enterprise implementations, providing step-by-step guidance to achieve 1,000% ROI through strategic AI transformation."
    },
    {
      id: "edge-computing-revolution",
      title: "AI 2025: The Edge Computing Revolution - Ultimate Guide to 450% ROI",
      type: "blog",
      url: "/blog/ai-2025-edge-computing-revolution-ultimate-guide",
      metrics: {
        roi: "450%",
        savings: "$2.3M annually",
        efficiency: "67%",
        accuracy: "99.7%",
        timeframe: "12 months"
      },
      readingTime: "18 min read",
      tags: ["Edge Computing", "AI", "ROI", "Latency", "Security", "Cost Optimization"],
      description: "Learn how edge computing is revolutionizing enterprise AI with 67% latency reduction, 89% cost savings, and 450% ROI through real-time processing capabilities."
    }
  ];

  const filteredContent = newContent.filter(item => {
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesType && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <TrendingUp className="w-5 h-5" />;
      case 'case-study':
        return <Users className="w-5 h-5" />;
      case 'resource':
        return <Star className="w-5 h-5" />;
      default:
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'resource':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Blog Post';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Resource Guide';
      default:
        return type;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-700 uppercase tracking-wide">NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That Delivers
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Extraordinary Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI strategies, case studies, and implementation guides that are helping Fortune 500 companies achieve 450% to 1,000% ROI.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedType === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Content
            </button>
            <button
              onClick={() => setSelectedType('blog')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedType === 'blog'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Blog Posts
            </button>
            <button
              onClick={() => setSelectedType('case-study')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedType === 'case-study'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => setSelectedType('resource')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedType === 'resource'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Resources
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span>{getTypeLabel(item.type)}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3">
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
                    <div className="text-lg font-semibold text-gray-900">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Annual Savings</div>
                  </div>
                </div>

                {item.metrics.efficiency && (
                  <div className="flex justify-between items-center text-sm mb-3">
                    <span className="text-gray-600">Efficiency Improvement:</span>
                    <span className="font-medium text-gray-900">{item.metrics.efficiency}</span>
                  </div>
                )}

                {item.metrics.accuracy && (
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-gray-600">Accuracy:</span>
                    <span className="font-medium text-gray-900">{item.metrics.accuracy}</span>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white text-gray-700 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white text-gray-500 border border-gray-200">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors group"
                >
                  Read {getTypeLabel(item.type)}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Enterprise with AI?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join 500+ companies that have achieved extraordinary ROI through our proven AI implementation strategies and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025ShowcaseSection;