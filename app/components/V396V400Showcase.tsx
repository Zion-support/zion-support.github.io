'use client';

import React from 'react';

const V396V400Showcase = () => {
  const engines = [
    {
      version: 'V396',
      name: 'Sentiment Trend Analyzer',
      icon: '📊',
      color: 'from-emerald-500 to-green-600',
      description:
        'Track emotional trends across your entire inbox in real time — detect frustration, satisfaction, urgency, and disengagement patterns across conversations to prioritize responses and flag at-risk relationships before they escalate.',
      capabilities: [
        'Real-time sentiment scoring across every incoming and outgoing email',
        'Historical trend visualization showing emotional trajectory per contact',
        'Frustration and churn-risk alerts for at-risk client relationships',
        'Team sentiment dashboard aggregated by department and project',
        'Predictive emotional modeling to forecast relationship outcomes'
      ]
    },
    {
      version: 'V397',
      name: 'Spam Intelligence',
      icon: '🛡️',
      color: 'from-red-500 to-pink-600',
      description:
        'Go beyond basic spam filters with AI-powered threat intelligence — analyze sender reputation, detect sophisticated phishing attempts, identify social engineering patterns, and learn from your personal filtering preferences to achieve near-zero false positives.',
      capabilities: [
        'Deep-learning phishing detection with sender reputation graph analysis',
        'Social engineering pattern recognition across email headers and body text',
        'Adaptive filtering that learns from your manual spam/ham corrections',
        'Real-time threat intelligence feed integration with global spam databases',
        'Quarantine analytics with one-click false-positive recovery and rule tuning'
      ]
    },
    {
      version: 'V398',
      name: 'Response Time Optimizer',
      icon: '⚡',
      color: 'from-yellow-500 to-amber-600',
      description:
        'Slash your average response time with intelligent prioritization and workflow acceleration — analyze urgency signals, SLA commitments, sender importance, and conversation context to surface what needs your attention now versus what can wait.',
      capabilities: [
        'AI-driven urgency scoring from email content, sender, and context signals',
        'SLA-aware priority queue with countdown timers and escalation alerts',
        'Smart notification batching to minimize context-switching overhead',
        'Auto-acknowledgment templates for time-sensitive emails needing research',
        'Response time benchmarking against team averages and personal bests'
      ]
    },
    {
      version: 'V399',
      name: 'Content Extractor',
      icon: '📋',
      color: 'from-blue-500 to-indigo-600',
      description:
        'Automatically extract structured data from any email — dates, addresses, phone numbers, order IDs, invoice amounts, action items, and custom entities flow directly into your CRM, calendar, and project management tools without manual copy-paste.',
      capabilities: [
        'Named entity recognition for dates, contacts, amounts, and custom fields',
        'Action item extraction with assignee and deadline auto-detection',
        'Invoice and PO data parsing directly into accounting systems',
        'Meeting and event extraction with one-click calendar integration',
        'Custom extraction rules engine for industry-specific data patterns'
      ]
    },
    {
      version: 'V400',
      name: 'Workflow Automator',
      icon: '🔄',
      color: 'from-violet-500 to-purple-600',
      description:
        'Transform repetitive email tasks into automated workflows — trigger actions based on sender, subject, content, or labels to auto-forward, archive, tag, respond, create tickets, and orchestrate multi-step processes without writing a single line of code.',
      capabilities: [
        'Visual drag-and-drop workflow builder with 50+ pre-built templates',
        'Conditional logic engine supporting nested rules and branching paths',
        'Cross-platform integrations with CRM, helpdesk, and project management tools',
        'Scheduled and event-driven automation with audit trail logging',
        'Workflow performance analytics with optimization recommendations'
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
            Email Intelligence V396-V400
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five breakthrough engines that redefine email productivity —
            sentiment analysis, spam intelligence, response optimization, content extraction, and workflow automation
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
              202
            </p>
            <p className="text-gray-400 mt-1 font-medium">Total Engines</p>
          </div>
          <div className="bg-gray-800/60 border border-indigo-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
              1976+
            </p>
            <p className="text-gray-400 mt-1 font-medium">Services Available</p>
          </div>
          <div className="bg-gray-800/60 border border-indigo-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
              V199–V400
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

export default V396V400Showcase;
