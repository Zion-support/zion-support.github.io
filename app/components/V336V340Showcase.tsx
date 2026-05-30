'use client';

import React from 'react';

export default function V336V340Showcase() {
  const engines = [
    {
      version: 'V336',
      name: 'Sentiment Intelligence',
      icon: '💭',
      description: 'Advanced sentiment analysis with emotional intelligence, tone detection, empathy scoring, and emotional context understanding.',
      features: ['Emotional Intelligence', 'Tone Detection', 'Empathy Scoring', 'Emotion Analysis', 'Response Strategy'],
      benefits: ['Understand emotions instantly', 'Respond with empathy', 'Improve relationships', 'Track sentiment trends']
    },
    {
      version: 'V337',
      name: 'Priority Optimizer',
      icon: '🎯',
      description: 'Intelligent priority scoring and inbox organization with smart categorization, urgency detection, and automated priority assignment.',
      features: ['Priority Scoring', 'Smart Categorization', 'Urgency Detection', 'Inbox Organization', 'Action Suggestions'],
      benefits: ['Focus on what matters', 'Organize inbox automatically', 'Never miss urgent emails', 'Optimize response time']
    },
    {
      version: 'V338',
      name: 'Thread Analyzer',
      icon: '🧵',
      description: 'Deep thread analysis with conversation mapping, participant tracking, decision extraction, and thread health assessment.',
      features: ['Thread Mapping', 'Participant Tracking', 'Decision Extraction', 'Action Items', 'Thread Health'],
      benefits: ['Understand complex threads', 'Track all participants', 'Extract key decisions', 'Monitor thread health']
    },
    {
      version: 'V339',
      name: 'Response Time Optimizer',
      icon: '⏰',
      description: 'Optimal response timing based on recipient patterns, timezone analysis, and engagement data for maximum impact.',
      features: ['Timezone Detection', 'Pattern Analysis', 'Engagement Prediction', 'Optimal Timing', 'Urgency Assessment'],
      benefits: ['Send at perfect time', 'Maximize engagement', 'Respect timezones', 'Improve response rates']
    },
    {
      version: 'V340',
      name: 'Accessibility Enhancer',
      icon: '♿',
      description: 'Ensure emails are accessible to all users with screen reader optimization, WCAG compliance, and readability scoring.',
      features: ['Screen Reader Optimization', 'WCAG Compliance', 'Readability Scoring', 'Alt Text Suggestions', 'Structure Analysis'],
      benefits: ['Reach all users', 'Meet WCAG standards', 'Improve readability', 'Ensure inclusivity']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Email Intelligence V47
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five groundbreaking engines that master sentiment, priority, threads, timing, and accessibility
            for emotionally intelligent and inclusive communication.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold">
              137 Engines Total
            </div>
            <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-semibold">
              1,662 Services
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Reply-All Enforced
            </div>
          </div>
        </div>

        {/* Engine Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {engines.map((engine, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-5xl">{engine.icon}</span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    {engine.version}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{engine.name}</h3>
                <p className="text-emerald-100 text-sm">{engine.description}</p>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {engine.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {engine.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-teal-600 mr-2 font-bold">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
              to communicate with emotional intelligence, perfect timing, and full accessibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
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
                View All 1,662 Services
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">137</div>
            <div className="text-sm text-gray-600">Email Engines</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">1,662</div>
            <div className="text-sm text-gray-600">Total Services</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Autonomous Operation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
