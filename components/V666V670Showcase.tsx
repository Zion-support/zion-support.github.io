'use client';

import React from 'react';

const V666V670Showcase: React.FC = () => {
  const engines = [
    {
      id: 'V666',
      icon: '❤️',
      title: 'Email Emotional Intelligence Coach',
      description: 'Detects emotional tone, empathy gaps, and provides real-time coaching for difficult conversations. Navigate sensitive topics with emotional awareness.',
      features: [
        '6 emotion detection (joy, anger, sadness, fear, surprise, disgust)',
        'Empathy gap identification with 5 empathy categories',
        'Difficult conversation coaching (bad news, conflict, feedback)',
        'Relationship preservation recommendations',
        'Tone adjustment suggestions with examples',
        'Readiness-to-send assessment'
      ],
      color: 'from-rose-500 to-pink-500'
    },
    {
      id: 'V667',
      icon: '📅',
      title: 'Email Meeting Scheduler AI',
      description: 'Automatically find optimal meeting times across multiple calendars with timezone intelligence and meeting fatigue prevention.',
      features: [
        'Multi-timezone meeting optimization (15+ timezones)',
        'Meeting type classification (quick sync, standard, workshop, etc.)',
        'Meeting fatigue detection with scoring (0-100)',
        'Back-to-back meeting detection',
        'Scheduling conflict resolution with smart alternatives',
        'Urgency-based meeting prioritization'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'V668',
      icon: '📄',
      title: 'Email Document Intelligence',
      description: 'Extract, classify, and track document versions and approvals from email attachments. Full lifecycle management and compliance tracking.',
      features: [
        '10 document type classifications (contract, invoice, proposal, etc.)',
        'Version tracking with deduplication detection',
        'Approval workflow detection (request, granted, revision, pending)',
        'Compliance checking (encryption, retention, PII)',
        'Sensitivity classification (low, medium, high, critical)',
        'Document retention policy tracking'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'V669',
      icon: '🏢',
      title: 'Email Vendor Management',
      description: 'Track vendor communications, SLA compliance, contract renewals, and performance metrics. Full vendor relationship intelligence.',
      features: [
        'Vendor identification and categorization (6 categories)',
        'SLA compliance monitoring with breach detection',
        'Contract renewal alerts with date extraction',
        'Vendor performance scoring (positive/neutral/negative)',
        'Vendor risk assessment (0-100 scoring)',
        'Communication pattern analysis'
      ],
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'V670',
      icon: '💡',
      title: 'Email Innovation Tracker',
      description: 'Identify and track innovative ideas, suggestions, and improvement opportunities from email conversations with impact assessment.',
      features: [
        'Innovation idea extraction (5 indicator types)',
        '6 category classification (product, process, technology, etc.)',
        'Impact potential assessment (high/medium/low)',
        'Implementation feasibility scoring',
        'Collaboration opportunity detection',
        'Innovation pipeline management'
      ],
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-rose-900 to-orange-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Email Intelligence Engines V666-V670
          </h2>
          <p className="text-xl text-rose-200 max-w-3xl mx-auto">
            Human-centered email intelligence: emotional coaching, smart scheduling, document management,
            vendor tracking, and innovation capture — all with reply-all enforcement.
          </p>
          <div className="mt-6 inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-white font-semibold">470 Total Engines</span>
            <span className="text-rose-300 mx-2">•</span>
            <span className="text-white font-semibold">2,998 Services</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {engines.map((engine) => (
            <div
              key={engine.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${engine.color} flex items-center justify-center text-3xl mb-4`}>
                {engine.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{engine.title}</h3>
              <p className="text-rose-200 mb-4 text-sm">{engine.description}</p>
              <ul className="space-y-2">
                {engine.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-rose-100">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Human-Centered Intelligence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <span className="text-2xl mr-3">❤️</span>
              <div>
                <h4 className="font-semibold text-white">Emotional Awareness</h4>
                <p className="text-rose-200 text-sm">Navigate difficult conversations with empathy</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">📅</span>
              <div>
                <h4 className="font-semibold text-white">Smart Scheduling</h4>
                <p className="text-rose-200 text-sm">Global timezone + fatigue prevention</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">📄</span>
              <div>
                <h4 className="font-semibold text-white">Document Lifecycle</h4>
                <p className="text-rose-200 text-sm">Version tracking + compliance monitoring</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">🏢</span>
              <div>
                <h4 className="font-semibold text-white">Vendor Intelligence</h4>
                <p className="text-rose-200 text-sm">SLA tracking + risk assessment</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">💡</span>
              <div>
                <h4 className="font-semibold text-white">Innovation Capture</h4>
                <p className="text-rose-200 text-sm">Never lose a great idea from email</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">🔄</span>
              <div>
                <h4 className="font-semibold text-white">Reply-All Enforcement</h4>
                <p className="text-rose-200 text-sm">100% multi-recipient coverage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-rose-600 to-orange-600 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for Human-Centered Email Intelligence?</h3>
            <p className="text-rose-100 mb-6">Contact us to learn more about V666-V670</p>
            <div className="text-white space-y-2">
              <p className="font-semibold">📱 Mobile: +1 302 464 0950</p>
              <p className="font-semibold">📧 Email: kleber@ziontechgroup.com</p>
              <p className="font-semibold">📍 Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V666V670Showcase;
