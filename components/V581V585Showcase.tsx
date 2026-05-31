import React from 'react';

const V581V585Showcase: React.FC = () => {
  const engines = [
    {
      version: 'V581',
      name: 'Email Tone Coach',
      icon: '🎯',
      description: 'Real-time coaching on email tone, professionalism, and cultural sensitivity with passive-aggressive language detection',
      features: ['Tone analysis', 'Passive-aggressive detection', 'Professionalism scoring']
    },
    {
      version: 'V582',
      name: 'Email Archive Search',
      icon: '🔍',
      description: 'AI-powered semantic search across email archives with natural language queries',
      features: ['Natural language queries', 'Semantic search', 'Smart filters']
    },
    {
      version: 'V583',
      name: 'Email Signature Optimizer',
      icon: '✍️',
      description: 'A/B test email signatures, track engagement, and optimize for conversions',
      features: ['A/B testing', 'Engagement tracking', 'Conversion optimization']
    },
    {
      version: 'V584',
      name: 'Email Blacklist Monitor',
      icon: '🛡️',
      description: 'Monitor email blacklist status across 100+ databases with real-time alerts',
      features: ['100+ database monitoring', 'Real-time alerts', 'Delisting assistance']
    },
    {
      version: 'V585',
      name: 'Email Template Marketplace',
      icon: '🎨',
      description: 'Curated marketplace of professional email templates with performance analytics',
      features: ['Template marketplace', 'Performance analytics', 'User ratings']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Email Intelligence Engines <span className="text-purple-400">V581-V585</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced email optimization with tone coaching, archive search, signature optimization, 
            blacklist monitoring, and template marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {engines.map((engine, index) => (
            <div
              key={engine.version}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{engine.icon}</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
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
              <div className="text-4xl font-bold text-purple-400 mb-2">385</div>
              <div className="text-gray-300">Total Engines</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">2,613</div>
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
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-[2px]">
            <div className="bg-slate-900 rounded-lg px-8 py-4">
              <p className="text-gray-300 text-lg">
                🚀 <span className="font-semibold text-white">All engines enforce reply-all</span> for intelligent email optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V581V585Showcase;
