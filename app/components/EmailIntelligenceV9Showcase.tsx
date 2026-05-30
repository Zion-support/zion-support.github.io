import React from 'react';

const EmailIntelligenceV9Showcase: React.FC = () => {
  const engines = [
    {
      id: 'v144',
      name: 'Tone Analyzer & Adapter',
      icon: '🎭',
      description: 'Detect emotional tone and adapt replies to match or de-escalate',
      features: [
        'Emotional tone detection (formal, casual, urgent, frustrated, enthusiastic)',
        'Empathy scoring and cultural tone adjustment',
        'De-escalation strategies for frustrated/urgent emails',
        'Reply-all enforcement for team communications'
      ],
      benefit: 'Improve customer satisfaction with tone-matched responses'
    },
    {
      id: 'v145',
      name: 'Auto-Responder with Context Memory',
      icon: '🧠',
      description: 'Smart auto-responder that remembers conversations and routes intelligently',
      features: [
        'Context memory per contact with conversation history',
        'Urgency-based routing to appropriate delegates',
        'Learning from response patterns',
        'Case-by-case routing decisions'
      ],
      benefit: 'Never lose context, always route to the right person'
    },
    {
      id: 'v146',
      name: 'Attachment Intelligence',
      icon: '📎',
      description: 'Analyze, summarize, and extract data from email attachments',
      features: [
        'OCR and contract clause extraction from PDFs',
        'Financial data parsing from spreadsheets',
        'Image description generation',
        'Malware scanning and security alerts'
      ],
      benefit: 'Extract insights from attachments automatically'
    },
    {
      id: 'v147',
      name: 'Meeting Minutes Generator',
      icon: '📝',
      description: 'Generate structured meeting minutes from email threads',
      features: [
        'Action items, decisions, owners, and deadlines extraction',
        'Follow-up email drafts to all participants',
        'Reply-all to all meeting participants',
        'Integration with calendar and task systems'
      ],
      benefit: 'Never miss an action item, always follow up'
    },
    {
      id: 'v148',
      name: 'SLA Enforcement Engine',
      icon: '⏱️',
      description: 'Track response time commitments and enforce SLA compliance',
      features: [
        'Response time tracking per contact/customer tier',
        'Escalation alerts before SLA breach',
        'SLA compliance reports and analytics',
        'Auto-prioritize inbox based on SLA urgency'
      ],
      benefit: 'Meet every SLA commitment, prevent breaches'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Email Intelligence Suite V9
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five new AI engines that make your email responses smarter, faster, and more effective.
            Every email analyzed case-by-case with guaranteed reply-all enforcement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {engines.map((engine) => (
            <div
              key={engine.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-4">{engine.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {engine.id.toUpperCase()}: {engine.name}
              </h3>
              <p className="text-gray-600 mb-4">{engine.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {engine.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4">
                <p className="text-sm font-semibold text-purple-900">
                  💡 {engine.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Case-by-Case Analysis with Reply-All Enforcement
          </h3>
          <p className="text-xl mb-6">
            Every email is analyzed individually to determine the most appropriate action.
            Reply-all is automatically enforced for team communications, escalations, and meeting follow-ups.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-purple-100">Reply-All Compliance</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-purple-100">New AI Engines</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-purple-100">Total Intelligence Engines</div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How It Works
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">📨</div>
              <h4 className="font-semibold mb-2">1. Email Received</h4>
              <p className="text-sm text-gray-600">
                Incoming email triggers the intelligence suite
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔍</div>
              <h4 className="font-semibold mb-2">2. Case Analysis</h4>
              <p className="text-sm text-gray-600">
                Each engine analyzes the email for its specialty
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2">3. Smart Action</h4>
              <p className="text-sm text-gray-600">
                Most appropriate action determined and executed
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h4 className="font-semibold mb-2">4. Reply-All Check</h4>
              <p className="text-sm text-gray-600">
                Ensures all relevant parties are included
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services/email-intelligence-v9"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Email Intelligence V9 →
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmailIntelligenceV9Showcase;
