'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Clock, 
  Zap, 
  Shield, 
  TrendingUp, 
  Target,
  Award,
  Users,
  BarChart3,
  Cpu,
  Globe,
  Smartphone
} from 'lucide-react';

const EdgeAIRevolutionShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const content = {
    overview: {
      title: 'The Edge AI Revolution is Here',
      subtitle: '450% ROI with Real-Time Intelligence',
      description: 'Transform your operations with edge computing that brings AI closer to your data, delivering unprecedented speed, privacy, and efficiency.',
      metrics: [
        { label: 'Average ROI', value: '450%', icon: TrendingUp, color: 'text-green-400' },
        { label: 'Latency Reduction', value: '67%', icon: Zap, color: 'text-blue-400' },
        { label: 'System Uptime', value: '99.5%', icon: Shield, color: 'text-purple-400' },
        { label: 'Cost Savings', value: '$1.2B', icon: BarChart3, color: 'text-yellow-400' }
      ]
    },
    features: {
      title: 'Revolutionary Edge AI Capabilities',
      subtitle: 'Real-Time Processing at Scale',
      description: 'Deploy AI systems that process data locally, make instant decisions, and operate independently of cloud connectivity.',
      items: [
        {
          title: 'Real-Time Processing',
          description: 'Process data locally with ultra-low latency for instant decision making',
          icon: Cpu,
          color: 'bg-blue-500'
        },
        {
          title: 'Enhanced Privacy',
          description: 'Keep sensitive data on local devices, reducing transmission risks',
          icon: Shield,
          color: 'bg-green-500'
        },
        {
          title: 'Offline Capability',
          description: 'Continue operations even without internet connectivity',
          icon: Globe,
          color: 'bg-purple-500'
        },
        {
          title: 'Scalable Deployment',
          description: 'Deploy across thousands of locations with centralized management',
          icon: Users,
          color: 'bg-orange-500'
        }
      ]
    },
    success: {
      title: 'Proven Success Stories',
      subtitle: 'Real Results from Real Companies',
      description: 'See how leading organizations are achieving extraordinary results with edge AI implementations.',
      stories: [
        {
          company: 'Retail Chain',
          industry: 'Retail',
          results: '$35M Annual Savings',
          roi: '500% ROI',
          description: '500+ stores with real-time inventory management and customer analytics',
          url: '/case-studies/retail-edge-ai-transformation-2025'
        },
        {
          company: 'Manufacturing Corp',
          industry: 'Manufacturing',
          results: '$12M Annual Savings',
          roi: '600% ROI',
          description: 'Quality control and predictive maintenance across production lines',
          url: '/case-studies/fortune-500-autonomous-ai-transformation-2025'
        }
      ]
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'features', label: 'Features', icon: Cpu },
    { id: 'success', label: 'Success Stories', icon: Award }
  ];

  const currentContent = content[activeTab as keyof typeof content];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">EDGE AI REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-blue-600 font-semibold mb-4">
            {currentContent.subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {activeTab === 'overview' && (
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {currentContent.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                    <metric.icon className={`w-8 h-8 mx-auto mb-3 ${metric.color}`} />
                    <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                      {metric.value}
                    </div>
                    <div className="text-gray-600 font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/blog/ai-2025-edge-computing-revolution"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Read Full Article
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {currentContent.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                    <div className={`p-3 rounded-lg ${item.color} text-white`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/resources/autonomous-ai-implementation-master-guide-2025"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Award className="w-5 h-5 mr-2" />
                  Get Implementation Guide
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'success' && (
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {currentContent.stories.map((story, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {story.company}
                        </h3>
                        <p className="text-blue-600 font-medium">{story.industry}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          {story.results}
                        </div>
                        <div className="text-lg font-semibold text-blue-600">
                          {story.roi}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {story.description}
                    </p>
                    <Link
                      href={story.url}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read Case Study
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Users className="w-5 h-5 mr-2" />
                  View All Case Studies
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Operations with Edge AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join hundreds of companies already achieving 450% ROI with edge AI implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Start Your Transformation
              </Link>
              <Link
                href="/resources/autonomous-ai-implementation-master-guide-2025"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Clock className="w-5 h-5 mr-2" />
                Download Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeAIRevolutionShowcase2025;