'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, DollarSign, Clock, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const EdgeComputingRevolutionShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const content = [
    {
      id: 'overview',
      title: 'Edge Computing Revolution',
      subtitle: '450% ROI with 67% Latency Reduction',
      description: 'Discover how edge computing is transforming AI deployment with 450% ROI, 67% latency reduction, and 89% cost savings.',
      metrics: [
        { label: 'ROI', value: '450%', icon: TrendingUp },
        { label: 'Latency Reduction', value: '67%', icon: Zap },
        { label: 'Cost Savings', value: '$2.3M', icon: DollarSign },
        { label: 'Uptime', value: '99.7%', icon: Clock }
      ],
      features: [
        'Sub-10ms response time for critical applications',
        '89% reduction in data transmission costs',
        '45% improvement in energy efficiency',
        '78% reduction in data exposure'
      ],
      cta: 'Read Ultimate Guide',
      link: '/blog/ai-2025-edge-computing-revolution-ultimate-guide'
    },
    {
      id: 'case-study',
      title: 'Manufacturing Success Story',
      subtitle: '$9.4M Annual Savings with 520% ROI',
      description: 'How a global automotive manufacturer achieved 520% ROI and $9.4M annual savings through edge computing implementation.',
      metrics: [
        { label: 'ROI', value: '520%', icon: TrendingUp },
        { label: 'Annual Savings', value: '$9.4M', icon: DollarSign },
        { label: 'Quality Speed', value: '2 seconds', icon: Zap },
        { label: 'Efficiency', value: '45%', icon: TrendingUp }
      ],
      features: [
        '78% reduction in latency for quality control',
        '67% improvement in production efficiency',
        '89% reduction in bandwidth costs',
        '95% improvement in real-time decision making'
      ],
      cta: 'View Case Study',
      link: '/case-studies/ai-2025-edge-computing-manufacturing-success-520-roi'
    }
  ];

  const currentContent = content.find(item => item.id === activeTab) || content[0];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <Zap className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">EDGE COMPUTING REVOLUTION 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Business with Edge Computing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Achieve 450% ROI with edge computing solutions that deliver real-time processing, 
            reduced latency, and significant cost savings.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Ultimate Guide
            </button>
            <button
              onClick={() => setActiveTab('case-study')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'case-study'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Success Story
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentContent.title}
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  {currentContent.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {currentContent.metrics.map((metric, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <metric.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h4>
                <ul className="space-y-3">
                  {currentContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={currentContent.link}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {currentContent.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-8 text-white">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Edge Computing Advantages</h4>
                <p className="text-blue-100 mb-8">
                  Process data closer to the source for faster insights and better performance
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="w-5 h-5 text-green-300" />
                    <span className="font-semibold">Enhanced Security</span>
                  </div>
                  <p className="text-sm text-blue-100">
                    78% reduction in data exposure through local processing
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="w-5 h-5 text-green-300" />
                    <span className="font-semibold">Real-time Processing</span>
                  </div>
                  <p className="text-sm text-blue-100">
                    Sub-10ms response time for critical applications
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <DollarSign className="w-5 h-5 text-green-300" />
                    <span className="font-semibold">Cost Savings</span>
                  </div>
                  <p className="text-sm text-blue-100">
                    89% reduction in bandwidth costs and data transmission
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-300" />
                    <span className="font-semibold">Scalability</span>
                  </div>
                  <p className="text-sm text-blue-100">
                    300% improvement in processing capacity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Links */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Predictive Analytics</h4>
            <p className="text-gray-600 mb-4">
              Achieve 750% ROI with AI-powered predictive analytics solutions.
            </p>
            <Link
              href="/blog/ai-2025-predictive-analytics-revolution-ultimate-guide"
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Implementation Guide</h4>
            <p className="text-gray-600 mb-4">
              Complete roadmap from strategy to 450% ROI with edge computing.
            </p>
            <Link
              href="/resources/ai-2025-predictive-analytics-implementation-master-guide"
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              Get Guide →
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Free Consultation</h4>
            <p className="text-gray-600 mb-4">
              Get personalized recommendations for your edge computing strategy.
            </p>
            <Link
              href="/contact"
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              Schedule Call →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdgeComputingRevolutionShowcase2025;