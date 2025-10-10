'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Leaf, Cloud, Target, BarChart, Shield, Zap } from 'lucide-react';

const AIClimateSolutionsProPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      icon: Leaf,
      title: 'Carbon Footprint Tracking',
      description: 'AI-powered carbon footprint monitoring and reduction strategies for businesses.',
      benefits: [
        'Real-time carbon tracking',
        'Automated reduction recommendations',
        'Industry-specific benchmarks',
        'Regulatory compliance monitoring'
      ]
    },
    {
      icon: Cloud,
      title: 'Climate Prediction',
      description: 'Advanced AI models for accurate weather and climate predictions.',
      benefits: [
        '95% accuracy in weather predictions',
        'Extreme weather early warning',
        'Climate trend analysis',
        'Long-term forecasting'
      ]
    },
    {
      icon: Target,
      title: 'Sustainability Planning',
      description: 'AI-driven sustainability roadmaps and green initiative optimization.',
      benefits: [
        'Custom sustainability roadmaps',
        'ROI analysis for green initiatives',
        'Resource optimization',
        'Progress tracking & reporting'
      ]
    },
    {
      icon: BarChart,
      title: 'Emission Monitoring',
      description: 'Real-time emission tracking and compliance management systems.',
      benefits: [
        'Real-time emission monitoring',
        'Automated compliance reporting',
        'Predictive emission modeling',
        'Regulatory compliance tracking'
      ]
    },
    {
      icon: Shield,
      title: 'Environmental Risk Assessment',
      description: 'AI-powered environmental risk analysis and mitigation strategies.',
      benefits: [
        'Risk identification & analysis',
        'Mitigation strategy recommendations',
        'Environmental impact assessment',
        'Compliance risk monitoring'
      ]
    },
    {
      icon: Zap,
      title: 'Green Energy Optimization',
      description: 'AI optimization for renewable energy systems and green infrastructure.',
      benefits: [
        'Energy efficiency optimization',
        'Renewable energy integration',
        'Smart grid management',
        'Cost reduction strategies'
      ]
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'features', label: 'Features', icon: '⚡' },
    { id: 'benefits', label: 'Benefits', icon: '🎯' },
    { id: 'pricing', label: 'Pricing', icon: '💰' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Solutions Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered climate solutions for businesses. Carbon tracking, climate prediction, sustainability planning, and environmental risk assessment." />
        <meta name="keywords" content="AI climate solutions, carbon tracking, climate prediction, sustainability, environmental AI, green technology, climate tech" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Climate Solutions
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered climate solutions for businesses. Carbon tracking, climate prediction, sustainability planning, and environmental risk assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                Get Started
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'overview' && (
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Comprehensive Climate Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                  Our AI Climate Solutions Pro platform provides end-to-end climate management tools for businesses of all sizes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                    <div className="text-4xl mb-4">🌍</div>
                    <h3 className="text-xl font-bold text-white mb-4">Global Impact</h3>
                    <p className="text-gray-300">Track and reduce your global carbon footprint with AI-powered insights.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                    <div className="text-4xl mb-4">📈</div>
                    <h3 className="text-xl font-bold text-white mb-4">Data-Driven</h3>
                    <p className="text-gray-300">Make informed decisions with real-time climate data and predictions.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-xl font-bold text-white mb-4">Goal-Oriented</h3>
                    <p className="text-gray-300">Achieve your sustainability goals with AI-optimized strategies.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Advanced Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Powerful AI capabilities for comprehensive climate management
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      {feature.benefits && (
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose Our Climate Solutions?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                  Proven results that drive environmental impact and business value
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                    <div className="text-4xl mb-4">📊</div>
                    <h3 className="text-xl font-bold text-white mb-4">Reduce Carbon Footprint by 40%</h3>
                    <p className="text-gray-300">Average carbon reduction achieved by our clients within the first year.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                    <div className="text-4xl mb-4">💰</div>
                    <h3 className="text-xl font-bold text-white mb-4">Save $2M+ Annually</h3>
                    <p className="text-gray-300">Average cost savings through optimized resource usage and efficiency.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-bold text-white mb-4">95% Prediction Accuracy</h3>
                    <p className="text-gray-300">Industry-leading accuracy in climate and weather predictions.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Flexible Pricing Plans
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                  Choose the plan that fits your climate management needs
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                    <div className="text-4xl font-bold text-green-400 mb-4">$99/month</div>
                    <ul className="space-y-2 text-gray-300 mb-8">
                      <li>Basic carbon tracking</li>
                      <li>Monthly reports</li>
                      <li>Email support</li>
                    </ul>
                    <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-green-500">
                    <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                    <div className="text-4xl font-bold text-green-400 mb-4">$299/month</div>
                    <ul className="space-y-2 text-gray-300 mb-8">
                      <li>Advanced analytics</li>
                      <li>Real-time monitoring</li>
                      <li>Priority support</li>
                      <li>Custom dashboards</li>
                    </ul>
                    <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                    <div className="text-4xl font-bold text-green-400 mb-4">Custom</div>
                    <ul className="space-y-2 text-gray-300 mb-8">
                      <li>Full platform access</li>
                      <li>Custom integrations</li>
                      <li>Dedicated support</li>
                      <li>On-premise deployment</li>
                    </ul>
                    <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Make a Climate Impact?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your climate journey today with our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIClimateSolutionsProPage;