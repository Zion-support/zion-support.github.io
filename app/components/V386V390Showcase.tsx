'use client';

import React from 'react';

const V386V390Showcase = () => {
  const engines = [
    {
      version: 'V386',
      name: 'Thread Context Memory',
      icon: '🧠',
      color: 'from-cyan-500 to-blue-600',
      description:
        'Maintain persistent contextual memory across email threads — remember prior decisions, referenced documents, participant roles, and conversation history to provide intelligent context-aware assistance that never loses the thread.',
      capabilities: [
        'Persistent memory store for multi-month email conversations',
        'Automatic context recall when composing replies to long-running threads',
        'Decision history tracking with timestamped reference points',
        'Participant role and relationship mapping across threads',
        'Contextual suggestion engine powered by historical thread intelligence'
      ]
    },
    {
      version: 'V387',
      name: 'Tone Adapter',
      icon: '🎭',
      color: 'from-pink-500 to-rose-600',
      description:
        'Dynamically adapt email tone and style to match recipient expectations — analyze communication patterns, cultural context, formality levels, and relationship history to craft messages that resonate with each unique audience.',
      capabilities: [
        'Recipient communication style profiling from historical exchanges',
        'Cultural context awareness for international correspondence',
        'Formality level calibration based on relationship hierarchy',
        'Real-time tone adjustment suggestions during email composition',
        'Brand voice consistency enforcement across team communications'
      ]
    },
    {
      version: 'V388',
      name: 'Attachment Analyzer',
      icon: '📎',
      color: 'from-teal-500 to-emerald-600',
      description:
        'Deep-analyze email attachments for actionable intelligence — extract key data from PDFs, spreadsheets, contracts, and presentations, cross-reference with email body content, and surface critical information that would otherwise remain buried in files.',
      capabilities: [
        'Multi-format document parsing (PDF, DOCX, XLSX, PPTX, images)',
        'Key clause and obligation extraction from contract attachments',
        'Financial data summarization from spreadsheet attachments',
        'Cross-reference validation between email claims and attachment data',
        'Attachment risk scanning for sensitive data exposure and compliance flags'
      ]
    },
    {
      version: 'V389',
      name: 'Follow-up Predictor',
      icon: '⏰',
      color: 'from-amber-500 to-orange-600',
      description:
        'Predict optimal follow-up timing and content for unanswered emails — analyze recipient behavior patterns, time zones, workload signals, and conversation urgency to schedule perfectly-timed follow-ups that maximize response rates.',
      capabilities: [
        'Response probability scoring based on recipient engagement history',
        'Time-zone-aware scheduling for global team communications',
        'Workload signal detection from calendar and email volume patterns',
        'Smart follow-up content generation referencing original message context',
        'Escalation path recommendation when follow-ups remain unanswered'
      ]
    },
    {
      version: 'V390',
      name: 'Compliance Guardian',
      icon: '⚖️',
      color: 'from-red-500 to-rose-700',
      description:
        'Real-time compliance monitoring for all outbound and inbound emails — enforce regulatory requirements (GDPR, HIPAA, SOX, FINRA), detect PII exposure, validate data handling policies, and prevent compliance violations before they happen.',
      capabilities: [
        'Multi-regulation compliance scanning (GDPR, HIPAA, SOX, FINRA, CCPA)',
        'PII and PHI detection with automatic redaction suggestions',
        'Data retention policy enforcement and auto-classification',
        'Audit trail generation for compliance reporting and legal discovery',
        'Pre-send compliance gate that blocks non-compliant emails from leaving'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-indigo-600/20 to-violet-600/20 border border-indigo-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-indigo-300 text-sm font-semibold tracking-wide uppercase">
              Latest Release
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
            Email Intelligence V386-V390
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five breakthrough engines that elevate email intelligence —
            thread context memory, tone adaptation, attachment analysis, follow-up prediction, and compliance guardianship
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 px-4 py-2 rounded-full">
            <span className="text-sm font-semibold">
              ✓ All engines enforce reply-all for multi-recipient emails
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="bg-gray-800/60 border border-indigo-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
              192
            </p>
            <p className="text-gray-400 mt-1 font-medium">Total Engines</p>
          </div>
          <div className="bg-gray-800/60 border border-indigo-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
              1924+
            </p>
            <p className="text-gray-400 mt-1 font-medium">Services Available</p>
          </div>
          <div className="bg-gray-800/60 border border-indigo-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
              V199–V390
            </p>
            <p className="text-gray-400 mt-1 font-medium">Engine Range</p>
          </div>
          <div className="bg-gray-800/60 border border-indigo-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
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
              className="bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
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
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl p-8 shadow-2xl shadow-indigo-500/20">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Email Intelligence?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 10,000+ companies using Zion Tech Group&apos;s AI-powered email platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
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

export default V386V390Showcase;
