'use client';

import React from 'react';

export default function V356V360Showcase() {
  const engines = [
    {
      version: 'V356',
      name: 'Predictive Analytics Engine',
      icon: '📈',
      color: 'from-blue-500 to-cyan-500',
      capabilities: [
        'Predict email volume spikes 24-48 hours ahead',
        'Forecast response times based on historical patterns',
        'Identify optimal send times for maximum engagement',
        'Detect anomalies and unusual email activity',
        'Resource planning with workload predictions',
      ],
      benefits: [
        'Prepare for email surges proactively',
        'Optimize team scheduling and capacity',
        'Improve engagement with timing intelligence',
        'Early warning system for unusual patterns',
      ],
    },
    {
      version: 'V357',
      name: 'Multi-Channel Orchestration',
      icon: '🔀',
      color: 'from-purple-500 to-pink-500',
      capabilities: [
        'Coordinate email with Slack, Teams, SMS, and phone',
        'Unified conversation view across all channels',
        'Auto-escalate from email to voice/video when needed',
        'Cross-channel context preservation',
        'Omnichannel customer journey mapping',
      ],
      benefits: [
        'Seamless multi-platform communication',
        'Never lose context when switching channels',
        'Escalate to the right channel at the right time',
        'Complete customer interaction history',
      ],
    },
    {
      version: 'V358',
      name: 'Compliance Auto-Auditor',
      icon: '⚖️',
      color: 'from-green-500 to-emerald-500',
      capabilities: [
        'Continuous GDPR, HIPAA, SOX, PCI, CCPA monitoring',
        'Auto-generate compliance reports for auditors',
        'Detect policy violations in real-time',
        'Automated data retention enforcement',
        'Tamper-proof audit trail generation',
      ],
      benefits: [
        '100% compliance coverage without manual effort',
        'Audit-ready documentation on demand',
        'Prevent violations before they happen',
        'Reduce compliance costs by 75%',
      ],
    },
    {
      version: 'V359',
      name: 'AI Training Data Generator',
      icon: '🎓',
      color: 'from-orange-500 to-red-500',
      capabilities: [
        'Automatically label emails for ML training',
        'Generate synthetic examples for edge cases',
        'Balance training datasets across categories',
        'Quality scoring for training data',
        'Active learning suggestions for model improvement',
      ],
      benefits: [
        'Build better ML models with quality data',
        'Reduce manual labeling effort by 90%',
        'Handle edge cases with synthetic data',
        'Continuous model improvement loop',
      ],
    },
    {
      version: 'V360',
      name: 'Executive Briefing Generator',
      icon: '📊',
      color: 'from-indigo-500 to-purple-500',
      capabilities: [
        'Daily/weekly executive email summaries',
        'Highlight critical decisions and action items',
        'Track email-driven business metrics',
        'Competitive intelligence briefings',
        'Revenue impact dashboards from email data',
      ],
      benefits: [
        'Executives stay informed without inbox overload',
        'Never miss critical decisions or deadlines',
        'Data-driven insights from email patterns',
        'Strategic competitive awareness',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Email Intelligence V356-V360
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five breakthrough engines that transform email into a predictive, orchestrated, 
            compliant, intelligent, and executive-ready communication platform.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
            <span className="text-2xl">✅</span>
            <span>All engines enforce reply-all for multi-recipient emails</span>
          </div>
        </div>

        <div className="grid gap-8 mb-16">
          {engines.map((engine, idx) => (
            <div
              key={engine.version}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 ${
                idx % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="lg:flex">
                <div className={`lg:w-1/3 bg-gradient-to-br ${engine.color} p-8 text-white flex flex-col justify-center`}>
                  <div className="text-6xl mb-4">{engine.icon}</div>
                  <h3 className="text-3xl font-bold mb-2">{engine.version}</h3>
                  <p className="text-xl font-semibold">{engine.name}</p>
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">⚡</span>
                        Key Capabilities
                      </h4>
                      <ul className="space-y-3">
                        {engine.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                            <span className="text-gray-700 text-sm">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">💼</span>
                        Business Benefits
                      </h4>
                      <ul className="space-y-3">
                        {engine.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1 flex-shrink-0">★</span>
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            162 AI Engines. 1,766 Services. One Platform.
          </h3>
          <p className="text-xl mb-8 opacity-90">
            From predictive analytics to executive briefings, Zion Tech Group delivers 
            the world's most comprehensive email intelligence ecosystem.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">162</div>
              <div className="text-sm opacity-90">AI Engines</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">1,766</div>
              <div className="text-sm opacity-90">Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Reply-All Enforced</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Autonomous Operation</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Schedule a Demo
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Explore All Services
            </a>
          </div>
          <div className="mt-8 text-sm opacity-80">
            <p>📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </section>
  );
}
