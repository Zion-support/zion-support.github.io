'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NeuralInterfaceShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const content = {
    overview: {
      title: "Neural Interface AI Revolution 2025",
      subtitle: "Transforming Enterprise Operations with Brain-Computer Interfaces",
      description: "Discover how leading enterprises are achieving 850% ROI through direct neural interfaces that enable real-time data processing, enhanced decision-making, and unprecedented productivity gains.",
      metrics: [
        { label: "Average ROI", value: "850%", color: "text-green-600" },
        { label: "Annual Savings", value: "$5.2B", color: "text-blue-600" },
        { label: "Productivity Increase", value: "300%", color: "text-purple-600" },
        { label: "Quality Achievement", value: "99.7%", color: "text-yellow-600" }
      ]
    },
    technology: {
      title: "Cutting-Edge Technology",
      subtitle: "Advanced Neural Interface Systems",
      description: "Our neural interface AI combines advanced brain-computer interfaces with sophisticated AI algorithms to create seamless human-machine collaboration.",
      features: [
        {
          icon: "🧠",
          title: "Direct Neural Processing",
          description: "Real-time analysis of neural patterns with sub-millisecond response times"
        },
        {
          icon: "⚡",
          title: "Enhanced Cognitive Capabilities",
          description: "AI-augmented decision making and predictive intelligence"
        },
        {
          icon: "🔄",
          title: "Instant Knowledge Transfer",
          description: "Direct upload of expertise and data with 95% retention rate"
        },
        {
          icon: "🎯",
          title: "Predictive Thought Processing",
          description: "AI anticipation of user needs and proactive assistance"
        }
      ]
    },
    success: {
      title: "Proven Success Stories",
      subtitle: "Real-World Results from Fortune 500 Companies",
      description: "Leading enterprises across industries are achieving exceptional results with neural interface AI implementation.",
      caseStudies: [
        {
          company: "Fortune 100 Manufacturing Giant",
          industry: "Advanced Manufacturing",
          results: {
            roi: "850%",
            savings: "$1.2B annually",
            productivity: "320% increase",
            quality: "99.7% defect-free"
          },
          description: "Integrated neural interface AI across 47 manufacturing facilities, enabling operators to achieve unprecedented productivity and quality."
        },
        {
          company: "Top 5 Global Investment Bank",
          industry: "Financial Services",
          results: {
            roi: "920%",
            trading: "450% improvement",
            risk: "89% reduction",
            revenue: "$2.8B additional"
          },
          description: "Implemented neural interface AI for trading and risk management, achieving exceptional performance and client satisfaction."
        }
      ]
    },
    implementation: {
      title: "Implementation Roadmap",
      subtitle: "From Strategy to 850% ROI",
      description: "Our proven methodology ensures successful implementation with minimal risk and maximum return on investment.",
      phases: [
        {
          phase: "Phase 1: Foundation",
          duration: "Months 1-6",
          scope: "3-5 pilot locations, 100-200 users",
          investment: "25% of total budget",
          focus: "Technology validation, initial training, baseline establishment",
          results: "200%+ productivity increase, 90%+ user satisfaction"
        },
        {
          phase: "Phase 2: Expansion",
          duration: "Months 7-12",
          scope: "15-25 locations, 500-1,000 users",
          investment: "40% of total budget",
          focus: "Scaling deployment, system optimization, advanced features",
          results: "300%+ productivity increase, 95%+ user satisfaction"
        },
        {
          phase: "Phase 3: Full Deployment",
          duration: "Months 13-18",
          scope: "All locations, 2,000+ users",
          investment: "35% of total budget",
          focus: "Full deployment, advanced optimization, continuous improvement",
          results: "320%+ productivity increase, 94%+ user satisfaction"
        }
      ]
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'technology', label: 'Technology', icon: '🔬' },
    { id: 'success', label: 'Success Stories', icon: '🏆' },
    { id: 'implementation', label: 'Implementation', icon: '🚀' }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🧠 NEURAL INTERFACE AI REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Future of Human-Computer Interaction
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your enterprise with direct brain-computer interfaces delivering unprecedented ROI, 
            productivity gains, and competitive advantages.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 mb-4 mx-2 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {content.overview.title}
                  </h3>
                  <p className="text-xl text-purple-600 font-semibold mb-6">
                    {content.overview.subtitle}
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {content.overview.description}
                  </p>
                  <div className="space-y-4">
                    {content.overview.metrics.map((metric, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-700 font-medium">{metric.label}</span>
                        <span className={`text-2xl font-bold ${metric.color}`}>{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-6">Why Neural Interface AI?</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs">✓</span>
                      </div>
                      <div>
                        <div className="font-semibold">Direct Brain-Computer Interface</div>
                        <div className="text-sm opacity-90">Eliminate traditional input methods</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs">✓</span>
                      </div>
                      <div>
                        <div className="font-semibold">Real-Time Neural Processing</div>
                        <div className="text-sm opacity-90">Sub-millisecond response times</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs">✓</span>
                      </div>
                      <div>
                        <div className="font-semibold">AI-Augmented Decision Making</div>
                        <div className="text-sm opacity-90">Enhanced cognitive capabilities</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs">✓</span>
                      </div>
                      <div>
                        <div className="font-semibold">Predictive Intelligence</div>
                        <div className="text-sm opacity-90">Anticipate user needs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Technology Tab */}
          {activeTab === 'technology' && (
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {content.technology.title}
                </h3>
                <p className="text-xl text-purple-600 font-semibold mb-6">
                  {content.technology.subtitle}
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {content.technology.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.technology.features.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{feature.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Success Stories Tab */}
          {activeTab === 'success' && (
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {content.success.title}
                </h3>
                <p className="text-xl text-purple-600 font-semibold mb-6">
                  {content.success.subtitle}
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {content.success.description}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {content.success.caseStudies.map((study, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h4>
                      <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {study.industry}
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6">{study.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="bg-white rounded-lg p-4 text-center">
                          <div className="text-lg font-bold text-green-600 mb-1">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Implementation Tab */}
          {activeTab === 'implementation' && (
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {content.implementation.title}
                </h3>
                <p className="text-xl text-purple-600 font-semibold mb-6">
                  {content.implementation.subtitle}
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {content.implementation.description}
                </p>
              </div>
              <div className="space-y-8">
                {content.implementation.phases.map((phase, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h4>
                        <div className="text-purple-600 font-semibold mb-4">{phase.duration}</div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div><strong>Scope:</strong> {phase.scope}</div>
                          <div><strong>Investment:</strong> {phase.investment}</div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Focus Areas</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">{phase.focus}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Expected Results</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">{phase.results}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
              Join Fortune 500 companies achieving 850% ROI with Neural Interface AI. 
              Get your free consultation and implementation strategy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services/neural-interface-ai"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Learn More</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-neural-interface-revolution-ultimate-guide" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">📖</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Ultimate Enterprise Guide
                </h4>
                <p className="text-gray-600 mb-4">
                  Comprehensive guide covering neural interface technology, implementation strategies, and achieving 800% ROI.
                </p>
                <div className="text-sm text-purple-600 font-semibold group-hover:text-purple-700">
                  Read Guide →
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/neural-interface-ai-transformation-2025-success-story" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏭</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Fortune 500 Success Story
                </h4>
                <p className="text-gray-600 mb-4">
                  Real-world case study of achieving 850% ROI and $1.2B in annual savings.
                </p>
                <div className="text-sm text-purple-600 font-semibold group-hover:text-purple-700">
                  View Case Study →
                </div>
              </div>
            </Link>
            
            <Link href="/resources/neural-interface-ai-implementation-master-guide-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">📋</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Implementation Master Guide
                </h4>
                <p className="text-gray-600 mb-4">
                  Complete implementation roadmap from strategy to 850% ROI achievement.
                </p>
                <div className="text-sm text-purple-600 font-semibold group-hover:text-purple-700">
                  Get Guide →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceShowcase2025;