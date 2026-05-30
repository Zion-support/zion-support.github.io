'use client';

import React from 'react';

const V341V345Showcase = () => {
  const engines = [
    {
      version: 'V341',
      name: 'Tone Adaptation Engine',
      icon: '🎭',
      description: 'Automatically adapts email tone based on recipient relationship, cultural context, and communication history.',
      features: [
        'Relationship-based tone matching',
        'Cultural context awareness',
        'Formality level adjustment',
        'Emotional tone calibration'
      ],
      benefit: 'Build stronger relationships through appropriate communication',
      stats: { accuracy: '94%', cultures: '50+', relationships: '∞' }
    },
    {
      version: 'V342',
      name: 'Analytics Dashboard Pro',
      icon: '📊',
      description: 'Comprehensive email performance analytics with engagement metrics, response time tracking, and team benchmarking.',
      features: [
        'Real-time engagement metrics',
        'Response time analytics',
        'Team performance dashboards',
        'Custom report generation'
      ],
      benefit: 'Data-driven email optimization for 45% productivity improvement',
      stats: { metrics: '50+', reports: '∞', accuracy: '99%' }
    },
    {
      version: 'V343',
      name: 'Workflow Automation Engine',
      icon: '⚙️',
      description: 'Automate complex email workflows with trigger-based actions, intelligent routing, and approval workflows.',
      features: [
        'Trigger-based automation',
        'Intelligent email routing',
        'Approval workflows',
        'Conditional logic engine'
      ],
      benefit: 'Automate 80% of repetitive tasks and save 10+ hours/week',
      stats: { automations: '∞', accuracy: '95%', timeSaved: '10h/wk' }
    },
    {
      version: 'V344',
      name: 'Learning System',
      icon: '🧠',
      description: 'Self-improving email system that learns from every interaction to optimize response quality and personalization.',
      features: [
        'Continuous learning algorithms',
        'Pattern recognition',
        'Performance optimization',
        'Adaptive response generation'
      ],
      benefit: 'System gets smarter over time with 55% quality improvement',
      stats: { learningRate: '24/7', improvement: '55%', patterns: '∞' }
    },
    {
      version: 'V345',
      name: 'Collaboration Hub',
      icon: '🤝',
      description: 'Transform email into a collaborative workspace with shared drafts, comments, approvals, and real-time coordination.',
      features: [
        'Shared email drafts',
        'Collaborative editing',
        'Team comments',
        'Real-time coordination'
      ],
      benefit: 'Reduce email back-and-forth by 60% and accelerate team responses',
      stats: { collaboration: '∞', efficiency: '+60%', teams: '∞' }
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Email Intelligence V48
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five revolutionary engines that master tone adaptation, analytics, automation, 
            learning, and collaboration for enterprise email excellence.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">
              142 Total Engines
            </span>
            <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full font-medium">
              1,688 Services
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
              Reply-All Enforced
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {engines.map((engine, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-5xl">{engine.icon}</span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    {engine.version}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{engine.name}</h3>
                <p className="text-purple-100 text-sm">{engine.description}</p>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {engine.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <svg className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefit */}
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <p className="text-sm text-gray-700 font-medium">
                    💡 {engine.benefit}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(engine.stats).map(([key, value], idx) => (
                    <div key={idx} className="border-r last:border-r-0 border-gray-200">
                      <div className="text-xl font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Email Intelligence?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations using Zion Tech Group's email intelligence platform
              to communicate with perfect tone, data-driven insights, and seamless collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-all"
              >
                View All 1,688 Services
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">142</div>
            <div className="text-sm text-gray-600">Email Engines</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-600 mb-2">1,688</div>
            <div className="text-sm text-gray-600">Total Services</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Autonomous Operation</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">
            <strong>Contact Us:</strong> 📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com
          </p>
          <p className="text-sm">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </div>
    </section>
  );
};

export default V341V345Showcase;
