'use client';

import React from 'react';

const V376V380Showcase = () => {
  const engines = [
    {
      version: 'V376',
      name: 'Relationship Health',
      icon: '💚',
      color: 'from-emerald-500 to-green-600',
      description:
        'Track and score the health of every professional relationship — analyze communication frequency, sentiment trends, response patterns, and engagement depth to identify at-risk connections before they go cold.',
      capabilities: [
        'Per-contact relationship health scoring (0-100)',
        'Sentiment trend analysis across email history',
        'Communication frequency and recency tracking',
        'At-risk relationship alerts with suggested actions',
        'Relationship lifecycle stage mapping (prospect → partner)'
      ]
    },
    {
      version: 'V377',
      name: 'Meeting Intelligence',
      icon: '📅',
      color: 'from-blue-500 to-indigo-600',
      description:
        'Extract actionable intelligence from meeting invites and calendar emails — detect scheduling conflicts, summarize agendas, track action items, and auto-generate prep briefs from related email threads.',
      capabilities: [
        'Calendar conflict detection and resolution suggestions',
        'Agenda extraction from meeting invite bodies',
        'Pre-meeting brief generation from related email threads',
        'Action item tracking from meeting follow-up emails',
        'Meeting ROI scoring based on outcome-to-time ratio'
      ]
    },
    {
      version: 'V378',
      name: 'Data Governance',
      icon: '🏛️',
      color: 'from-amber-500 to-yellow-600',
      description:
        'Enforce data governance policies across all email communications — detect PII exposure, classify sensitive content, flag compliance risks, and maintain audit trails for regulatory requirements.',
      capabilities: [
        'PII and sensitive data detection in email bodies and attachments',
        'Auto-classification of emails by data sensitivity tier',
        'Compliance policy enforcement (GDPR, HIPAA, SOX)',
        'Retention and deletion policy automation',
        'Audit trail generation for regulatory reviews'
      ]
    },
    {
      version: 'V379',
      name: 'Cross-Reference',
      icon: '🔗',
      color: 'from-cyan-500 to-teal-600',
      description:
        'Automatically cross-reference emails with your knowledge base, CRM, project tools, and document repositories — surface related records, past conversations, and relevant context without leaving your inbox.',
      capabilities: [
        'Automatic linking to CRM records and contact profiles',
        'Knowledge base article surfacing based on email content',
        'Project management tool integration (Jira, Asana, Monday)',
        'Past conversation threading across multiple subjects',
        'Document repository linking with version awareness'
      ]
    },
    {
      version: 'V380',
      name: 'Response Quality',
      icon: '✨',
      color: 'from-pink-500 to-rose-600',
      description:
        'Score and improve every outgoing email response — evaluate clarity, tone, completeness, and professionalism in real-time, with AI-powered suggestions to elevate your communication quality.',
      capabilities: [
        'Real-time response quality scoring (clarity, tone, completeness)',
        'Tone calibration suggestions (formal ↔ casual spectrum)',
        'Completeness checker against incoming question points',
        'Grammar and style enhancement recommendations',
        'Response benchmarking against top-performing team members'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-300 text-sm font-semibold tracking-wide uppercase">
              New Release
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Email Intelligence V376-V380
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five new AI-powered engines that elevate every interaction —
            relationship health tracking, meeting intelligence, data governance, cross-referencing, and response quality assurance
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-purple-900/50 border border-purple-500/30 text-purple-200 px-4 py-2 rounded-full">
            <span className="text-sm font-semibold">
              ✓ All engines enforce reply-all for multi-recipient emails
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="bg-gray-800/60 border border-purple-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              182
            </p>
            <p className="text-gray-400 mt-1 font-medium">Total Engines</p>
          </div>
          <div className="bg-gray-800/60 border border-purple-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              1870+
            </p>
            <p className="text-gray-400 mt-1 font-medium">Services Available</p>
          </div>
          <div className="bg-gray-800/60 border border-purple-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              V199–V380
            </p>
            <p className="text-gray-400 mt-1 font-medium">Engine Range</p>
          </div>
          <div className="bg-gray-800/60 border border-purple-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              5
            </p>
            <p className="text-gray-400 mt-1 font-medium">New in This Release</p>
          </div>
        </div>

        {/* Engine Cards */}
        <div className="grid gap-8 max-w-7xl mx-auto">
          {engines.map((engine) => (
            <div
              key={engine.version}
              className="bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="lg:flex">
                <div
                  className={`lg:w-1/3 bg-gradient-to-br ${engine.color} p-8 text-white flex flex-col justify-center`}
                >
                  <div className="text-6xl mb-4">{engine.icon}</div>
                  <h3 className="text-3xl font-bold mb-2">{engine.version}</h3>
                  <p className="text-xl font-semibold">{engine.name}</p>
                </div>
                <div className="lg:w-2/3 p-8">
                  <p className="text-gray-300 text-lg mb-6">{engine.description}</p>
                  <div>
                    <h4 className="text-sm font-bold text-gray-100 mb-3 uppercase tracking-wide">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {engine.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-300">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 shadow-2xl shadow-purple-500/20">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Email Intelligence?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 10,000+ companies using Zion Tech Group&apos;s AI-powered email platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Schedule a Demo
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Explore All Services
              </a>
            </div>
            <div className="mt-6 text-sm opacity-80">
              <p>📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V376V380Showcase;
