'use client';

import React, { useState } from 'react';
import { Star, Clock, ArrowRight, Search } from 'lucide-react';

const UltimateContentShowcase2025: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');

  const contentItems = [
    {
      id: 'advanced-automation-revolution-ultimate-guide',
      title: 'AI 2025: The Advanced Automation Revolution - Ultimate Guide to 1,500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      roi: '1,500%',
      savings: '$8.2M annually',
      reading_time: '28 min read',
      tags: ['Advanced Automation', 'AI', 'ROI', 'Fortune 500']
    },
    {
      id: 'intelligent-automation-breakthrough',
      title: 'AI 2025: The Intelligent Automation Breakthrough - 2,000% ROI Through Smart Systems',
      type: 'blog',
      url: '/blog/ai-2025-intelligent-automation-breakthrough',
      roi: '2,000%',
      savings: '$15.8M annually',
      reading_time: '20 min read',
      tags: ['Intelligent Automation', 'AI', 'ROI', 'Smart Systems']
    },
    {
      id: 'fortune-500-ai-automation-1500-roi-success',
      title: 'Fortune 500 AI Automation Success: $4.2B Company Achieves 1,500% ROI in 8 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-automation-1500-roi-success-story',
      roi: '1,500%',
      savings: '$8.2M annually',
      reading_time: '22 min read',
      tags: ['Case Study', 'Fortune 500', 'AI Automation', 'ROI']
    },
    {
      id: 'ai-intelligent-automation-2000-roi-success',
      title: 'AI Intelligent Automation Success: $3.8B Company Achieves 2,000% ROI in 12 Months',
      type: 'case-study',
      url: '/case-studies/ai-intelligent-automation-2000-roi-success',
      roi: '2,000%',
      savings: '$15.8M annually',
      reading_time: '18 min read',
      tags: ['Case Study', 'Intelligent Automation', 'ROI', 'Logistics']
    },
    {
      id: 'ai-automation-implementation-master-guide-2025',
      title: 'AI Automation Implementation Master Guide 2025: From Strategy to 1,500% ROI',
      type: 'resource',
      url: '/resources/ai-automation-implementation-master-guide-2025',
      roi: '1,500%',
      savings: '97% success rate',
      reading_time: '35 min read',
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices']
    }
  ];

  const filteredContent = contentItems.filter(item => 
    selectedType === 'all' || item.type === selectedType
  );

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-900">Revolutionary 2025 Content</h2>
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI automation strategies and success stories. 
            Learn how Fortune 500 companies are achieving up to 2,000% ROI.
          </p>
        </div>

        <div className="flex justify-center space-x-2 mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">
                    {item.type === 'blog' ? '📝' : item.type === 'case-study' ? '📊' : '📚'}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.reading_time}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">ROI</span>
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-green-50 text-green-600">
                      {item.roi}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Savings</span>
                    <span className="text-sm font-semibold text-green-600">
                      {item.savings}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={item.url}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Read Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of Fortune 500 companies achieving unprecedented ROI through AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resources"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Resources
              </a>
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;