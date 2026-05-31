import React from 'react';

export default function V521V525Showcase() {
  const engines = [
    {
      version: 'V521',
      name: 'Thread Summarizer Pro',
      icon: '📋',
      description: 'Automatically summarize long email threads into concise executive summaries',
      features: ['Thread analysis', 'Decision extraction', 'Action item tracking', 'Participant ID'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      version: 'V522',
      name: 'Attachment Intelligence',
      icon: '📎',
      description: 'Analyze email attachments to extract key information and data points',
      features: ['File type detection', 'Content extraction', 'Data identification', 'Multi-format'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      version: 'V523',
      name: 'Workflow Automation Builder',
      icon: '⚙️',
      description: 'Create automated email workflows based on triggers, conditions, and actions',
      features: ['Visual builder', 'Trigger conditions', 'Automated actions', 'Templates'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      version: 'V524',
      name: 'Language Translation Engine',
      icon: '🌐',
      description: 'Real-time translation of emails across 50+ languages with cultural context',
      features: ['50+ languages', 'Cultural context', 'Auto-detection', 'Formality levels'],
      color: 'from-orange-500 to-red-500'
    },
    {
      version: 'V525',
      name: 'Performance Analytics Dashboard',
      icon: '📊',
      description: 'Comprehensive analytics on email response times, engagement, and productivity',
      features: ['Response metrics', 'Engagement rates', 'Productivity tracking', 'Custom reports'],
      color: 'from-indigo-500 to-violet-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            V521-V525: Advanced Email Automation & Analytics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thread summarization, attachment intelligence, workflow automation, multilingual translation, and performance analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {engines.map((engine, idx) => (
            <div
              key={engine.version}
              className={`bg-gradient-to-br ${engine.color} p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300`}
            >
              <div className="text-5xl mb-4">{engine.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {engine.version}: {engine.name}
              </h3>
              <p className="text-gray-100 mb-4 text-sm">{engine.description}</p>
              <ul className="space-y-2">
                {engine.features.map((feature, i) => (
                  <li key={i} className="text-gray-200 text-sm flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 rounded-xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            🏆 Platform Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">325+</div>
              <div className="text-gray-300">Email Engines</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2,371+</div>
              <div className="text-gray-300">Total Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Languages Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">5</div>
              <div className="text-gray-300">File Types Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-gray-300">Reply-All Enforced</div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Email Intelligence?
          </h3>
          <p className="text-gray-100 mb-6">
            325 engines. 2,371 services. Infinite possibilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white text-sm">
            <div>📞 +1 302 464 0950</div>
            <div>✉️ kleber@ziontechgroup.com</div>
            <div>📍 364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </div>
      </div>
    </section>
  );
}
