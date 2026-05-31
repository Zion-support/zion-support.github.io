import React from 'react';

const V591V595Showcase: React.FC = () => {
  const engines = [
    {
      version: 'V591',
      name: 'Email Priority Scorer',
      icon: '🎯',
      description: 'AI-powered priority scoring based on sender, content, context, and urgency detection',
      features: ['Smart priority scoring', 'Urgency detection', 'Context analysis', 'Custom priority rules']
    },
    {
      version: 'V592',
      name: 'Follow-up Automation',
      icon: '🔄',
      description: 'Automated follow-up sequences with smart timing and personalized templates',
      features: ['Auto follow-up sequences', 'Smart timing optimization', 'Response tracking', 'Template personalization']
    },
    {
      version: 'V593',
      name: 'Signature A/B Testing',
      icon: '✍️',
      description: 'A/B test email signatures to optimize engagement and click-through rates',
      features: ['A/B testing', 'Engagement tracking', 'Performance analytics', 'Winner auto-selection']
    },
    {
      version: 'V594',
      name: 'Archive Intelligence',
      icon: '📚',
      description: 'AI-powered search across email archives with smart categorization and insights',
      features: ['Semantic search', 'Smart categorization', 'Pattern analysis', 'Quick retrieval']
    },
    {
      version: 'V595',
      name: 'Deliverability Optimizer',
      icon: '📧',
      description: 'Monitor and optimize email deliverability with spam scoring and authentication checks',
      features: ['Spam score checking', 'Authentication setup', 'Deliverability monitoring', 'Optimization tips']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Email Intelligence Engines <span className="text-teal-400">V591-V595</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced email management with priority scoring, follow-up automation, signature testing, 
            archive intelligence, and deliverability optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {engines.map((engine, index) => (
            <div
              key={engine.version}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-teal-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{engine.icon}</span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm font-semibold">
                  {engine.version}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{engine.name}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{engine.description}</p>
              <ul className="space-y-2">
                {engine.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">395</div>
              <div className="text-gray-300">Total Engines</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">2,688</div>
              <div className="text-gray-300">Total Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-300">Reply-All Enforced</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">5</div>
              <div className="text-gray-300">New Engines</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg p-[2px]">
            <div className="bg-slate-900 rounded-lg px-8 py-4">
              <p className="text-gray-300 text-lg">
                🚀 <span className="font-semibold text-white">All engines enforce reply-all</span> for intelligent email management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V591V595Showcase;
