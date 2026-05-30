import React from 'react';

const V326V330Showcase: React.FC = () => {
  const engines = [
    {
      version: 'V326',
      name: 'Context Memory Engine',
      icon: '🧠',
      description: 'Advanced context tracking and relationship memory for intelligent email responses. Remembers conversations, tracks commitments, and builds relationship profiles.',
      features: [
        'Long-term conversation memory',
        'Relationship profile building',
        'Commitment tracking',
        'Follow-up automation',
        'Contextual suggestions'
      ],
      benefits: [
        'Never forget important context',
        'Build stronger relationships',
        'Track all commitments',
        'Intelligent follow-ups'
      ],
      stats: { accuracy: '95%', memory: 'Unlimited', relationships: '360°' }
    },
    {
      version: 'V327',
      name: 'Goal Alignment Tracker',
      icon: '🎯',
      description: 'Aligns every email to business objectives (OKRs/KPIs), tracks strategic vs tactical time, and prioritizes based on goal impact.',
      features: [
        'OKR/KPI mapping',
        'Strategic vs tactical classification',
        'Goal impact scoring',
        'Prioritization recommendations',
        'Time investment tracking'
      ],
      benefits: [
        'Focus on strategic work',
        'Align communications to goals',
        'Optimize time investment',
        'Track goal progress'
      ],
      stats: { alignment: '100%', impact: 'High', priority: 'Smart' }
    },
    {
      version: 'V328',
      name: 'Conversation Summarizer Pro',
      icon: '📊',
      description: 'Generates executive summaries of long email threads with decision points, action items, key participants, and timeline visualization.',
      features: [
        'Executive summaries',
        'Decision extraction',
        'Action item tracking',
        'Participant analysis',
        'Timeline visualization'
      ],
      benefits: [
        'Save hours reading threads',
        'Never miss key decisions',
        'Track all action items',
        'Quick context switching'
      ],
      stats: { speed: '10x faster', accuracy: '98%', insights: 'Complete' }
    },
    {
      version: 'V329',
      name: 'Productivity Optimizer',
      icon: '⚡',
      description: 'Analyzes email habits, identifies time-wasters, suggests batching strategies, and provides personalized productivity recommendations.',
      features: [
        'Habit analysis',
        'Time-waster detection',
        'Batching strategies',
        'Focus mode scheduling',
        'Productivity scoring'
      ],
      benefits: [
        'Reclaim 2+ hours daily',
        'Eliminate email overload',
        'Optimize processing time',
        'Measurable improvements'
      ],
      stats: { time_saved: '2+ hrs', efficiency: '85%', focus: 'Deep' }
    },
    {
      version: 'V330',
      name: 'Cultural Intelligence Engine',
      icon: '🌍',
      description: 'Detects cultural context, suggests appropriate language, adapts formality levels, and prevents cross-cultural misunderstandings for global teams.',
      features: [
        'Cultural context detection',
        'Language adaptation',
        'Formality adjustment',
        'Misunderstanding prevention',
        'Global team support'
      ],
      benefits: [
        'Prevent cultural faux pas',
        'Improve global communication',
        'Adapt to any culture',
        'Build international relationships'
      ],
      stats: { cultures: '100+', accuracy: '92%', adaptation: 'Real-time' }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-6xl mb-4 block">🚀</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Email Intelligence V45
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five revolutionary engines that master context memory, goal alignment, conversation summarization,
            productivity optimization, and cultural intelligence for enterprise communication excellence.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full font-medium">
              127 Total Engines
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
              1,610 Services
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
              Reply-All Enforced
            </span>
          </div>
        </div>

        {/* Engine Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {engines.map((engine) => (
            <div
              key={engine.version}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-5xl">{engine.icon}</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    {engine.version}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{engine.name}</h3>
                <p className="text-cyan-100 text-sm">{engine.description}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mr-2"></span>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {engine.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {engine.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="border-t pt-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(engine.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-bold text-cyan-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Email Intelligence?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations using Zion Tech Group's email intelligence platform
            to communicate more effectively, stay aligned with goals, and work across cultures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
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
              View All 1,610 Services
            </a>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-cyan-600 mb-2">127</div>
            <div className="text-sm text-gray-600">Email Engines</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">1,610</div>
            <div className="text-sm text-gray-600">Total Services</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Autonomous Operation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V326V330Showcase;
