'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, TrendingUp, Star, Shield, Clock, DollarSign } from 'lucide-react';

const QuantumComputingShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('quantum-computing');

  const quantumContent = [
    {
      id: 'quantum-computing-enterprise-breakthrough',
      title: 'Quantum Computing Enterprise Breakthrough 2027',
      description: 'Explore revolutionary quantum computing applications transforming enterprise operations with 1000x faster processing.',
      metrics: {
        roi: '1000%',
        speed: '1000x faster',
        accuracy: '99.9%',
        optimization: '60-80%'
      },
      link: '/blog/quantum-computing-enterprise-breakthrough-2027',
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      category: 'Blog Post',
      readingTime: '22 min read'
    },
    {
      id: 'quantum-supply-chain-optimization',
      title: 'Quantum Computing Supply Chain Optimization',
      description: 'Global logistics company achieves 1500% ROI through quantum-powered supply chain optimization.',
      metrics: {
        roi: '1500%',
        savings: '$4.8B annually',
        timeframe: '12 months',
        efficiency: '60%'
      },
      link: '/case-studies/quantum-computing-supply-chain-optimization-1500-roi-success',
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      category: 'Case Study',
      readingTime: '20 min read'
    }
  ];

  const aiContent = [
    {
      id: 'ai-2027-autonomous-ecosystems',
      title: 'AI 2027: Autonomous Business Ecosystems Revolution',
      description: 'Discover how autonomous AI ecosystems will revolutionize enterprise operations with self-managing systems.',
      metrics: {
        roi: '2000%',
        automation: '95%',
        efficiency: '80%',
        costReduction: '60%'
      },
      link: '/blog/ai-2027-autonomous-business-ecosystems-revolution',
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      category: 'Blog Post',
      readingTime: '25 min read'
    },
    {
      id: 'ai-2027-autonomous-transformation',
      title: 'AI 2027 Autonomous Enterprise Transformation',
      description: 'Fortune 500 company achieves 2000% ROI through comprehensive AI-driven autonomous transformation.',
      metrics: {
        roi: '2000%',
        savings: '$9.2B annually',
        timeframe: '18 months',
        automation: '95%'
      },
      link: '/case-studies/ai-2027-autonomous-enterprise-transformation-2000-roi-success',
      icon: <Star className="w-8 h-8 text-orange-600" />,
      category: 'Case Study',
      readingTime: '18 min read'
    }
  ];

  const content = activeTab === 'quantum-computing' ? quantumContent : aiContent;

  const tabs = [
    { id: 'quantum-computing', label: 'Quantum Computing 2027', count: quantumContent.length },
    { id: 'ai-2027', label: 'AI 2027 Breakthrough', count: aiContent.length }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            🚀 NEW 2027 BREAKTHROUGH TECHNOLOGIES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge AI and quantum computing breakthroughs that are transforming enterprise operations with unprecedented ROI results.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {content.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                        {item.category}
                      </span>
                      <p className="text-sm text-gray-500">{item.readingTime}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      {item.metrics.roi}
                    </div>
                    <div className="text-sm text-gray-500">ROI</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    key !== 'roi' && (
                      <div key={key} className="bg-gray-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-sm text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    )
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  href={item.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Explore Content</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Statistics */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            2027 Breakthrough Technology Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1500-2000%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$14B+</div>
              <div className="text-gray-600">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">12-18</div>
              <div className="text-gray-600">Months Timeline</div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Automation Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with 2027 Technologies?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join the revolution and achieve unprecedented ROI with cutting-edge AI and quantum computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputingShowcase2027;