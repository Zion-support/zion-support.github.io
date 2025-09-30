'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractivePromotionalSection() {
  const [activeTab, setActiveTab] = useState('ai-solutions');

  const tabs = [
    { id: 'ai-solutions', label: 'AI Solutions', icon: '🤖' },
    { id: 'automation', label: 'Automation', icon: '⚡' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'consulting', label: 'Consulting', icon: '💡' }
  ];

  const content = {
    'ai-solutions': {
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge AI technologies',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      cta: 'Explore AI Solutions',
      href: '/services'
    },
    'automation': {
      title: 'Intelligent Automation',
      description: 'Streamline operations with smart automation systems',
      features: [
        'Workflow Automation',
        'Process Optimization',
        'Smart Triggers',
        'Performance Monitoring'
      ],
      cta: 'View Automation Services',
      href: '/services/automation'
    },
    'analytics': {
      title: 'Advanced Analytics',
      description: 'Turn data into actionable insights with AI-powered analytics',
      features: [
        'Real-time Dashboards',
        'Predictive Modeling',
        'Data Visualization',
        'Business Intelligence'
      ],
      cta: 'Discover Analytics',
      href: '/services/analytics'
    },
    'consulting': {
      title: 'AI Consulting',
      description: 'Expert guidance for your AI transformation journey',
      features: [
        'Strategy Development',
        'Implementation Planning',
        'Change Management',
        'Ongoing Support'
      ],
      cta: 'Get Consultation',
      href: '/contact'
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Interactive Service Explorer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI solutions can transform your business. 
            Explore different service categories and find the perfect fit for your needs.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-0 px-6 py-4 text-center font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <span className="text-2xl mb-2 block">{tab.icon}</span>
                  <span className="text-sm">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {content[activeTab].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {content[activeTab].description}
                </p>
                <ul className="space-y-3 mb-8">
                  {content[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={content[activeTab].href}
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {content[activeTab].cta}
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">
                  {tabs.find(tab => tab.id === activeTab)?.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {content[activeTab].title}
                </h4>
                <p className="text-gray-600">
                  Ready to get started? Contact our experts for a personalized consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}