'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Users, Award, Clock, ArrowRight, Filter, Search } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  roi: string;
  savings: string;
  readingTime: string;
  featured: boolean;
  tags: string[];
  metrics: {
    roi: string;
    savings: string;
    accuracy?: string;
    efficiency?: string;
    satisfaction?: string;
  };
}

const UltimateContentShowcase2025: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentItems: ContentItem[] = [
    {
      id: 'advanced-analytics-revolution',
      title: 'AI 2025: The Advanced Analytics Revolution - Ultimate Guide to 750% ROI',
      type: 'blog',
      url: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
      roi: '750%',
      savings: '$50M+',
      readingTime: '22 min read',
      featured: true,
      tags: ['Advanced Analytics', 'AI', 'ROI', 'Data Intelligence'],
      metrics: {
        roi: '750%',
        savings: '$50M+',
        accuracy: '99.2%',
        efficiency: '1,500% faster'
      }
    },
    {
      id: 'manufacturing-transformation-900-roi',
      title: 'AI 2025 Manufacturing Transformation: $3.2B Company Achieves 900% ROI in 15 Months',
      type: 'case-study',
      url: '/case-studies/ai-2025-manufacturing-transformation-900-roi-success',
      roi: '900%',
      savings: '$280M annually',
      readingTime: '18 min read',
      featured: true,
      tags: ['Manufacturing', 'AI Transformation', 'ROI', 'Case Study'],
      metrics: {
        roi: '900%',
        savings: '$280M annually',
        efficiency: '450%',
        quality: '99.7%'
      }
    },
    {
      id: 'implementation-ultimate-roadmap-comprehensive',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 1,000% ROI in 18 Months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-comprehensive',
      roi: '1,000%',
      savings: '$4.2M annually',
      readingTime: '35 min read',
      featured: true,
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Roadmap'],
      metrics: {
        roi: '1,000%',
        savings: '$4.2M annually',
        efficiency: '89% success rate'
      }
    },
    {
      id: 'customer-experience-revolution',
      title: 'AI 2025: The Customer Experience Revolution - Ultimate Guide to 650% ROI',
      type: 'blog',
      url: '/blog/ai-2025-customer-experience-revolution-ultimate-guide',
      roi: '650%',
      savings: '78% cost reduction',
      readingTime: '20 min read',
      featured: true,
      tags: ['Customer Experience', 'AI', 'ROI', 'Personalization'],
      metrics: {
        roi: '650%',
        savings: '78% cost reduction',
        satisfaction: '99.8%',
        efficiency: '89% faster'
      }
    },
    {
      id: 'logistics-transformation-800-roi',
      title: 'AI 2025 Logistics Transformation: $1.8B Company Achieves 800% ROI in 12 Months',
      type: 'case-study',
      url: '/case-studies/ai-2025-logistics-transformation-800-roi-success',
      roi: '800%',
      savings: '$180M annually',
      readingTime: '16 min read',
      featured: true,
      tags: ['Logistics', 'AI Transformation', 'ROI', 'Case Study'],
      metrics: {
        roi: '800%',
        savings: '$180M annually',
        efficiency: '450%',
        satisfaction: '99.9% on-time'
      }
    },
    {
      id: 'edge-computing-revolution',
      title: 'AI 2025: The Edge Computing Revolution - Ultimate Guide to 450% ROI',
      type: 'blog',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      roi: '450%',
      savings: '$2.3M annually',
      readingTime: '18 min read',
      featured: true,
      tags: ['Edge Computing', 'AI', 'ROI', 'Latency'],
      metrics: {
        roi: '450%',
        savings: '$2.3M annually',
        efficiency: '67% latency reduction'
      }
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
        return <Award className="w-5 h-5" />;
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

  const getROIColor = (roi: string) => {
    const roiValue = parseInt(roi.replace('%', ''));
    if (roiValue >= 1000) return 'text-red-600 bg-red-50';
    if (roiValue >= 800) return 'text-orange-600 bg-orange-50';
    if (roiValue >= 600) return 'text-yellow-600 bg-yellow-50';
    return 'text-green-600 bg-green-50';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            NEW CONTENT 2025
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That Delivers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Extraordinary Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI strategies, case studies, and implementation guides that have helped 
            companies achieve 450% to 1,000% ROI in record time.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            {['all', 'blog', 'case-study', 'resource'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedType === type
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                {type === 'all' ? 'All Content' : type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-2 capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${getROIColor(item.metrics.roi)}`}>
                    {item.metrics.roi} ROI
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{item.readingTime}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                {item.metrics.accuracy && (
                  <div className="text-center mb-4">
                    <div className="text-lg font-semibold text-purple-600">{item.metrics.accuracy}</div>
                    <div className="text-xs text-gray-600">Accuracy</div>
                  </div>
                )}

                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Read Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join over 500 companies that have achieved extraordinary results with our proven AI strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200"
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

export default UltimateContentShowcase2025;