import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Revolutionary2026ContentShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const contentItems = [
    {
      type: 'BREAKTHROUGH',
      title: 'AI Quantum Computing 2026',
      subtitle: '1000x Performance Gains',
      description: 'Revolutionary quantum-enhanced AI delivering unprecedented performance improvements for Fortune 500 companies.',
      metrics: [
        { value: '1000x', label: 'Performance' },
        { value: '99.9%', label: 'Accuracy' },
        { value: '$500M+', label: 'ROI' }
      ],
      href: '/blog/ai-quantum-computing-breakthrough-2026',
      gradient: 'from-purple-600 to-indigo-600',
      badge: '🔥 BREAKTHROUGH'
    },
    {
      type: 'AUTONOMOUS',
      title: 'AI Autonomous Enterprise 2026',
      subtitle: 'Self-Managing Organizations',
      description: 'Transform your organization into a fully autonomous enterprise with AI-driven self-management capabilities.',
      metrics: [
        { value: '95%', label: 'Automation' },
        { value: '300%', label: 'Efficiency' },
        { value: '$200M+', label: 'Savings' }
      ],
      href: '/blog/ai-autonomous-enterprise-2026',
      gradient: 'from-green-600 to-teal-600',
      badge: '🏢 AUTONOMOUS'
    },
    {
      type: 'SUCCESS',
      title: 'AI Mega Transformation',
      subtitle: '$150M ROI Success Story',
      description: 'How a Fortune 500 manufacturing company achieved unprecedented results through comprehensive AI transformation.',
      metrics: [
        { value: '$150M', label: 'ROI' },
        { value: '400%', label: 'Efficiency' },
        { value: '99.9%', label: 'Automation' }
      ],
      href: '/case-studies/ai-mega-transformation-success-2026',
      gradient: 'from-yellow-600 to-orange-600',
      badge: '🏆 SUCCESS STORY'
    }
  ];

  const tabs = [
    { id: 0, label: 'Quantum AI', icon: '⚡' },
    { id: 1, label: 'Autonomous', icon: '🤖' },
    { id: 2, label: 'Success Story', icon: '🏆' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full text-lg font-bold animate-pulse shadow-lg">
              🚀 REVOLUTIONARY 2026 CONTENT
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Game-Changing AI Innovations
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 block">
              Just Released Today
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the AI breakthroughs that are transforming Fortune 500 companies and delivering 
            unprecedented results: 1000x performance gains, 95% automation, and $150M+ ROI.
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-2 border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Showcase */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Content Header */}
            <div className={`bg-gradient-to-r ${contentItems[activeTab].gradient} p-8 text-white relative overflow-hidden`}>
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white to-transparent animate-pulse"></div>
                <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-white rounded-full animate-bounce"></div>
                <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-white rounded-full animate-bounce delay-500"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                    {contentItems[activeTab].badge}
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                    NEW TODAY
                  </span>
                </div>
                <h3 className="text-4xl font-bold mb-3">
                  {contentItems[activeTab].title}
                </h3>
                <p className="text-xl opacity-95 mb-6">
                  {contentItems[activeTab].subtitle}
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Description */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">What You'll Discover</h4>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {contentItems[activeTab].description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                      <span className="text-gray-700">Complete implementation roadmap</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                      <span className="text-gray-700">Real-world case studies and results</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                      <span className="text-gray-700">Proven strategies for enterprise adoption</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                      <span className="text-gray-700">ROI analysis and business impact</span>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Proven Results</h4>
                  <div className="grid grid-cols-1 gap-6">
                    {contentItems[activeTab].metrics.map((metric, index) => (
                      <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                        <div className="text-center">
                          <div className={`text-4xl font-bold bg-gradient-to-r ${contentItems[activeTab].gradient} bg-clip-text text-transparent mb-2`}>
                            {metric.value}
                          </div>
                          <div className="text-gray-600 font-semibold">{metric.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={contentItems[activeTab].href}
                    className={`bg-gradient-to-r ${contentItems[activeTab].gradient} text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all hover:scale-105 text-center`}
                  >
                    Read Full {contentItems[activeTab].type === 'SUCCESS' ? 'Case Study' : 'Article'} →
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all text-center"
                  >
                    📞 Call +1 302 464 0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">1000x</div>
            <div className="text-gray-600">Max Performance Gain</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Max Automation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$500M+</div>
            <div className="text-gray-600">Max ROI Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">18 mo</div>
            <div className="text-gray-600">Fastest Payback</div>
          </div>
        </div>
      </div>
    </section>
  );
}