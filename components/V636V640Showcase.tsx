'use client';

import React from 'react';

const V636V640Showcase: React.FC = () => {
  const engines = [
    {
      version: 'V636',
      name: 'Email Scheduling Optimizer',
      icon: '⏰',
      description: 'Find the optimal time to send emails based on recipient behavior, timezone analysis, and engagement patterns.',
      features: ['Timezone optimization', 'Engagement prediction', 'Day-of-week scoring', 'Urgency detection', 'A/B send testing'],
      benefit: 'Boost open rates by 25% with AI-optimized send timing'
    },
    {
      version: 'V637',
      name: 'Attachment Preview Engine',
      icon: '👁️',
      description: 'Generate instant previews and thumbnails of email attachments without downloading - PDFs, images, spreadsheets, and code.',
      features: ['PDF page preview', 'Image thumbnails', 'Spreadsheet preview', 'Code syntax highlight', 'Metadata extraction'],
      benefit: 'Preview attachments instantly without leaving your inbox'
    },
    {
      version: 'V638',
      name: 'Email Archival Compliance',
      icon: '📜',
      description: 'Ensure email archival meets GDPR, HIPAA, SOX, and FINRA requirements with automated retention policies.',
      features: ['Multi-regulation support', 'Retention policies', 'Encryption detection', 'Audit trail', 'Auto-remediation'],
      benefit: 'Stay compliant with automated regulatory archival management'
    },
    {
      version: 'V639',
      name: 'Thread Summarizer Pro',
      icon: '📝',
      description: 'Advanced multi-thread summarization with cross-reference analysis, decision extraction, and executive briefs.',
      features: ['Executive briefs', 'Decision extraction', 'Action item tracking', 'Sentiment arc', 'Cross-references'],
      benefit: 'Catch up on long threads in seconds with AI-powered summaries'
    },
    {
      version: 'V640',
      name: 'Sentiment-Aware Auto-Responder',
      icon: '💬',
      description: 'Generate contextually appropriate auto-responses based on sender sentiment, urgency, and email type.',
      features: ['Sentiment detection', 'Tone adaptation', 'Topic extraction', 'Personalization', 'Follow-up triggers'],
      benefit: 'Respond intelligently to every email with sentiment-aware automation'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-sky-900 via-blue-900 to-cyan-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🚀 Email Intelligence V636-V640
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five breakthrough engines for scheduling optimization, attachment previews, compliance archival, thread summarization, and sentiment-aware responses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {engines.map((engine, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">{engine.icon}</div>
              <div className="inline-block px-3 py-1 bg-sky-500 text-white text-sm font-bold rounded-full mb-3">
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
                <p className="text-sky-300 text-sm font-semibold">
                  💡 {engine.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-sky-500/20 to-cyan-500/20 rounded-xl p-6 border border-sky-400/30 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            📞 Contact Us for a Free Demo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sky-300 font-semibold">📱 Mobile</p>
              <p className="text-white">+1 302 464 0950</p>
            </div>
            <div>
              <p className="text-sky-300 font-semibold">✉️ Email</p>
              <p className="text-white">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <p className="text-sky-300 font-semibold">📍 Address</p>
              <p className="text-white">364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/services"
            className="inline-block px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-600 text-white font-bold rounded-full hover:from-sky-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All 440 Email Intelligence Engines →
          </a>
        </div>
      </div>
    </section>
  );
};

export default V636V640Showcase;
