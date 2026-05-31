'use client';

import React from 'react';

const V631V635Showcase: React.FC = () => {
  const engines = [
    {
      version: 'V631',
      name: 'Email Auto-Categorizer',
      icon: '📁',
      description: 'Automatically categorize emails into smart folders based on content analysis with 8 category types and confidence scoring.',
      features: ['8 smart categories', 'Sender pattern analysis', 'Auto-archive', 'Confidence scoring', 'Label suggestions'],
      benefit: 'Keep your inbox organized automatically with intelligent folder routing'
    },
    {
      version: 'V632',
      name: 'Attachment Security Scanner',
      icon: '🛡️',
      description: 'Scan email attachments for malware, suspicious extensions, macros, and security threats with quarantine recommendations.',
      features: ['Extension risk analysis', 'Size anomaly detection', 'Macro scanning', 'Pattern detection', 'Quarantine alerts'],
      benefit: 'Protect your organization from malicious attachments with multi-layer scanning'
    },
    {
      version: 'V633',
      name: 'Email Translation Engine',
      icon: '🌐',
      description: 'Translate emails between 40+ languages with context preservation, formality adaptation, and cultural notes.',
      features: ['40+ languages', 'Formality adaptation', 'Cultural notes', 'Confidence scoring', 'Auto-detection'],
      benefit: 'Communicate globally with culturally-aware translations that preserve context'
    },
    {
      version: 'V634',
      name: 'Email Template Optimizer',
      icon: '✨',
      description: 'Optimize email templates for engagement with subject line analysis, structure scoring, and A/B test recommendations.',
      features: ['Subject analysis', 'Body structure scoring', 'CTA optimization', 'Engagement prediction', 'A/B test recs'],
      benefit: 'Boost email engagement with data-driven template optimization'
    },
    {
      version: 'V635',
      name: 'Response Quality Coach',
      icon: '🎯',
      description: 'Real-time coaching on email responses with clarity, tone, completeness, and professionalism scoring.',
      features: ['4-dimension scoring', 'Issue detection', 'Improvement suggestions', 'Grade system (A-F)', 'Improved version'],
      benefit: 'Write better emails with AI coaching that improves clarity and professionalism'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-fuchsia-900 via-violet-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🚀 Email Intelligence V631-V635
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five breakthrough engines for auto-categorization, security scanning, translation, template optimization, and response coaching
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {engines.map((engine, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">{engine.icon}</div>
              <div className="inline-block px-3 py-1 bg-fuchsia-500 text-white text-sm font-bold rounded-full mb-3">
                {engine.version}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{engine.name}</h3>
              <p className="text-gray-300 mb-4 text-sm">{engine.description}</p>
              <ul className="space-y-2 mb-4">
                {engine.features.map((feature, fidx) => (
                  <li key={fidx} className="text-gray-300 text-sm flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/20">
                <p className="text-fuchsia-300 text-sm font-semibold">
                  💡 {engine.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 rounded-xl p-6 border border-fuchsia-400/30 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            📞 Contact Us for a Free Demo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-fuchsia-300 font-semibold">📱 Mobile</p>
              <p className="text-white">+1 302 464 0950</p>
            </div>
            <div>
              <p className="text-fuchsia-300 font-semibold">✉️ Email</p>
              <p className="text-white">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <p className="text-fuchsia-300 font-semibold">📍 Address</p>
              <p className="text-white">364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/services"
            className="inline-block px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-bold rounded-full hover:from-fuchsia-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All 435 Email Intelligence Engines →
          </a>
        </div>
      </div>
    </section>
  );
};

export default V631V635Showcase;
