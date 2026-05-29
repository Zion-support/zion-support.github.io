'use client';

import { useState } from 'react';

export default function AdvancedIntelligenceShowcase() {
  const [activeTab, setActiveTab] = useState<'calendar' | 'document' | 'negotiation'>('calendar');

  const features = {
    calendar: {
      title: 'V96: Calendar Intelligence',
      icon: '📅',
      description: 'Automatically detect meeting requests, extract time proposals, resolve conflicts, and generate intelligent scheduling responses.',
      capabilities: [
        'Meeting request detection from natural language',
        'Time proposal extraction (dates, times, timezones)',
        'Calendar conflict detection and resolution',
        'Auto-scheduling with multiple time options',
        'Meeting prep summaries and agendas',
        'Attendee management and invite generation',
        'Time zone optimization for global teams',
        'Video call platform recommendations',
      ],
      useCases: [
        'Sales demos and discovery calls',
        'Client support meetings',
        'Partnership discussions',
        'Team standups and 1:1s',
      ],
      metrics: [
        { label: 'Meetings Scheduled', value: '3,247' },
        { label: 'Conflicts Resolved', value: '892' },
        { label: 'Back-and-Forth Prevented', value: '4,156' },
      ],
    },
    document: {
      title: 'V97: Document Intelligence',
      icon: '📄',
      description: 'Process email attachments with advanced analysis: contracts, invoices, spreadsheets, and more.',
      capabilities: [
        'Contract clause extraction and risk detection',
        'Invoice processing and payment tracking',
        'Document summarization and key points',
        'Spreadsheet analysis and validation',
        'PDF text extraction and parsing',
        'Risk level assessment (Low/Medium/High/Critical)',
        'Action item generation from documents',
        'Multi-format support (PDF, DOCX, XLSX)',
      ],
      useCases: [
        'Legal contract review',
        'Invoice processing automation',
        'Proposal analysis',
        'Financial document validation',
      ],
      metrics: [
        { label: 'Documents Analyzed', value: '12,847' },
        { label: 'Risks Detected', value: '1,234' },
        { label: 'Contracts Reviewed', value: '2,156' },
      ],
    },
    negotiation: {
      title: 'V98: Negotiation Intelligence',
      icon: '💼',
      description: 'Detect negotiation patterns, suggest counter-offers, track deal progression, and optimize pricing strategy.',
      capabilities: [
        'Negotiation phase detection (Inquiry → Closing)',
        'Price signal analysis and budget extraction',
        'Tactic detection (anchoring, scarcity, urgency, etc.)',
        'Objection handling and response generation',
        'Win probability scoring (0-100%)',
        'Counter-offer suggestions with optimal pricing',
        'Deal progression tracking across threads',
        'Pipeline value and weighted forecasting',
      ],
      useCases: [
        'Sales deal negotiations',
        'Pricing discussions',
        'Contract negotiations',
        'Vendor management',
      ],
      metrics: [
        { label: 'Deals Tracked', value: '847' },
        { label: 'Win Rate', value: '68%' },
        { label: 'Pipeline Value', value: '$2.4M' },
      ],
    },
  };

  const currentFeature = features[activeTab];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Email Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Next-generation AI engines that understand context, automate workflows, and deliver actionable insights
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          {(['calendar', 'document', 'negotiation'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{features[tab].icon}</span>
              {features[tab].title.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Feature Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{currentFeature.icon}</span>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{currentFeature.title}</h3>
              <p className="text-gray-600 mt-1">{currentFeature.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Capabilities */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Capabilities</h4>
              <ul className="space-y-2">
                {currentFeature.capabilities.map((capability, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases & Metrics */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Use Cases</h4>
              <ul className="space-y-2 mb-6">
                {currentFeature.useCases.map((useCase, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">→</span>
                    <span className="text-gray-700">{useCase}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Impact Metrics</h4>
              <div className="grid grid-cols-3 gap-4">
                {currentFeature.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Integration Highlight */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">All Engines Work Together</h3>
          <p className="text-lg mb-6">
            V96, V97, and V98 integrate seamlessly with V89-V95 for a complete email intelligence stack
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <div>
              <div className="font-semibold">Case-by-Case Analysis</div>
              <div className="opacity-80">Every email analyzed</div>
            </div>
            <div>
              <div className="font-semibold">100% Reply-All</div>
              <div className="opacity-80">Always enforced</div>
            </div>
            <div>
              <div className="font-semibold">Self-Improving</div>
              <div className="opacity-80">Learns from feedback</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
