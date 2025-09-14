import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentRevolutionShowcase = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: '🧠',
      title: 'Quantum-Neural Fusion',
      description: 'Revolutionary AI processing that combines quantum computing with neural networks for unprecedented speed and accuracy.',
      stats: '1000x faster processing'
    },
    {
      icon: '🎯',
      title: 'Autonomous Content Creation',
      description: 'AI systems that independently generate, optimize, and distribute content without human intervention.',
      stats: '98% automation rate'
    },
    {
      icon: '🌍',
      title: 'Global Multilingual Support',
      description: 'Seamlessly create and adapt content for 47 countries and 23 languages with cultural context awareness.',
      stats: '47 countries, 23 languages'
    },
    {
      icon: '📈',
      title: 'Real-time Optimization',
      description: 'Continuous performance monitoring and automatic content optimization based on audience behavior.',
      stats: '2,500% engagement increase'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance with global data protection standards.',
      stats: '99.9% security uptime'
    },
    {
      icon: '⚡',
      title: 'Edge Computing Integration',
      description: 'Global content delivery network with edge computing for instant performance worldwide.',
      stats: '50ms global response time'
    }
  ];

  const caseStudies = [
    {
      company: 'Global Tech Corporation',
      industry: 'Technology',
      roi: '5,000%',
      duration: '6 months',
      description: 'Fortune 500 company achieved 5,000% ROI with complete content automation across 47 countries.',
      link: '/case-studies/ai-2025-ultimate-content-revolution-5000-roi-success'
    },
    {
      company: 'Healthcare Innovation Leader',
      industry: 'Healthcare',
      roi: '2,000%',
      duration: '4 months',
      description: 'Leading healthcare company transformed patient engagement with AI-powered content personalization.',
      link: '/case-studies/ai-2025-healthcare-transformation-ultimate-success'
    },
    {
      company: 'Manufacturing Giant',
      industry: 'Manufacturing',
      roi: '3,500%',
      duration: '8 months',
      description: 'Global manufacturer automated content creation for 23 languages with zero human intervention.',
      link: '/case-studies/ai-2025-manufacturing-transformation-ultimate-success'
    }
  ];

  const testimonials = [
    {
      quote: "The AI 2025 Ultimate Content Revolution Platform has completely transformed our business. We've achieved a 5,000% ROI in just 6 months, and our content now reaches audiences in 47 countries with zero additional effort.",
      author: "Sarah Johnson",
      position: "CMO, Global Tech Corporation",
      company: "Fortune 500"
    },
    {
      quote: "This is the future of content creation. The quantum-neural fusion technology is unlike anything we've seen before. Our engagement rates have increased by 2,500%.",
      author: "Michael Chen",
      position: "VP of Marketing, Tech Innovations Inc.",
      company: "Fortune 1000"
    },
    {
      quote: "The autonomous content creation capabilities have freed up our team to focus on strategy while the AI handles all routine content. It's revolutionary.",
      author: "Emily Rodriguez",
      position: "Head of Content, Digital Solutions Ltd.",
      company: "Enterprise"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold text-white">🚀 ULTIMATE SHOWCASE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Ultimate Content Revolution
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the breakthrough technology that's transforming businesses worldwide with 
            unprecedented efficiency and results.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'features', label: 'Revolutionary Features', icon: '⚡' },
              { id: 'cases', label: 'Success Stories', icon: '🏆' },
              { id: 'testimonials', label: 'Client Testimonials', icon: '💬' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                  >
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-3">
                      <span className="text-sm font-bold text-purple-700">{feature.stats}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'cases' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{study.company}</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                        {study.roi} ROI
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{study.industry} • {study.duration}</p>
                    <p className="text-gray-700 mb-6 leading-relaxed">{study.description}</p>
                    <Link
                      href={study.link}
                      className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                    >
                      Read Full Case Study →
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                  >
                    <div className="text-4xl text-purple-500 mb-4">"</div>
                    <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-xs text-purple-600 font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Join the Revolution?</h3>
          <p className="text-xl mb-8 opacity-90">
            Transform your content strategy with the AI 2025 Ultimate Content Revolution Platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentRevolutionShowcase;