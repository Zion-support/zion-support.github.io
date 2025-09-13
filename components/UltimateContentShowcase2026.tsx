import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentShowcase2026() {
  const [activeTab, setActiveTab] = useState('predictions');

  const contentCategories = {
    predictions: {
      title: 'AI 2026 Predictions',
      description: 'Revolutionary technology forecasts',
      items: [
        {
          title: 'AI 2026 Ultimate Breakthrough Predictions',
          description: 'Quantum-neural fusion, consciousness breakthroughs, and 15,000% ROI opportunities',
          href: '/ai-2026-ultimate-breakthrough-predictions',
          badge: 'BREAKTHROUGH',
          color: 'purple',
          roi: '15,000%'
        },
        {
          title: 'Quantum Computing Breakthrough 2030',
          description: 'Error-corrected quantum computers, quantum internet, and 50,000% processing improvements',
          href: '/quantum-computing-breakthrough-2030',
          badge: 'REVOLUTIONARY',
          color: 'cyan',
          roi: '50,000%'
        }
      ]
    },
    caseStudies: {
      title: 'Success Stories',
      description: 'Proven ROI achievements',
      items: [
        {
          title: 'AI 2026 Enterprise Transformation - 50,000% ROI',
          description: 'Fortune 500 company achieving unprecedented returns through quantum-neural fusion',
          href: '/case-studies/ai-2026-enterprise-transformation-50000-roi',
          badge: 'SUCCESS',
          color: 'green',
          roi: '50,000%'
        }
      ]
    },
    technologies: {
      title: 'Revolutionary Tech',
      description: 'Breakthrough technologies',
      items: [
        {
          title: 'Quantum-Neural Fusion Technology',
          description: 'Revolutionary integration achieving 15,000% processing speed improvements',
          href: '/quantum-neural-fusion-technology',
          badge: 'BREAKTHROUGH',
          color: 'indigo',
          roi: '15,000%'
        }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'from-purple-500 to-pink-500',
      cyan: 'from-cyan-500 to-blue-500',
      green: 'from-green-500 to-emerald-500',
      indigo: 'from-indigo-500 to-purple-500'
    };
    return colors[color as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getBadgeColorClasses = (color: string) => {
    const colors = {
      purple: 'bg-purple-100 text-purple-800',
      cyan: 'bg-cyan-100 text-cyan-800',
      green: 'bg-green-100 text-green-800',
      indigo: 'bg-indigo-100 text-indigo-800'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 ULTIMATE CONTENT SHOWCASE 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI 2026
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Content Library
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI 2026 predictions, 
            case studies, and breakthrough technologies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 m-2 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCategories[activeTab as keyof typeof contentCategories].items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 overflow-hidden"
            >
              {/* Card Header */}
              <div className={`h-2 bg-gradient-to-r ${getColorClasses(item.color)}`}></div>
              
              {/* Card Content */}
              <div className="p-8">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColorClasses(item.color)}`}>
                    {item.badge}
                  </span>
                  <span className="text-2xl font-bold text-gray-900">{item.roi}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.description}
                </p>

                {/* CTA Button */}
                <Link
                  href={item.href}
                  className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${getColorClasses(item.color)} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Access Content
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-200 mb-6">
              Join thousands of enterprises achieving revolutionary ROI through AI 2026 implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}