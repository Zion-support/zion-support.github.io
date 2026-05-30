import React from 'react';

const V331V335Showcase: React.FC = () => {
  const engines = [
    {
      version: 'V331',
      name: 'Negotiation Assistant',
      icon: '🤝',
      description: 'Analyzes negotiation dynamics, suggests optimal counteroffers, tracks concessions, and predicts deal outcomes.',
      features: ['Deal Dynamics Analysis', 'Counteroffer Suggestions', 'Concession Tracking', 'Outcome Prediction', 'Strategy Recommendations'],
      benefits: ['Win better deals', 'Track all concessions', 'Predict outcomes accurately', 'Negotiate with confidence'],
      stats: { accuracy: '94%', deals: 'Tracked', strategy: 'AI-Powered' }
    },
    {
      version: 'V332',
      name: 'Search Intelligence',
      icon: '🔍',
      description: 'Advanced semantic search across all emails with natural language queries and context-aware results.',
      features: ['Semantic Search', 'Natural Language Queries', 'Context-Aware Results', 'Smart Filtering', 'Entity Extraction'],
      benefits: ['Find any email instantly', 'Natural language queries', 'Context-aware ranking', 'Never lose important info'],
      stats: { speed: '100ms', languages: '100+', accuracy: '96%' }
    },
    {
      version: 'V333',
      name: 'Performance Benchmarking',
      icon: '📈',
      description: 'Compare email metrics against industry standards and provide personalized improvement recommendations.',
      features: ['Industry Benchmarks', 'Gap Analysis', 'Performance Scoring', 'Improvement Recommendations', 'Trend Tracking'],
      benefits: ['Benchmark against industry', 'Identify improvement areas', 'Track performance trends', 'Optimize engagement'],
      stats: { benchmarks: '15+', metrics: 'Real-time', grade: 'A-F' }
    },
    {
      version: 'V334',
      name: 'Template Optimizer',
      icon: '🎨',
      description: 'AI-powered template creation and optimization with A/B testing and automatic improvements.',
      features: ['Template Builder', 'A/B Testing', 'Performance Tracking', 'Auto-Improvement', 'Element Analysis'],
      benefits: ['Create templates 10x faster', 'A/B test automatically', 'Track performance', 'Continuously optimize'],
      stats: { templates: 'Unlimited', optimization: 'Auto', grade: 'A-F' }
    },
    {
      version: 'V335',
      name: 'Security Guardian Pro',
      icon: '🛡️',
      description: 'Advanced threat detection with phishing analysis, malware scanning, and real-time protection.',
      features: ['Phishing Detection', 'Malware Scanning', 'Link Verification', 'Sender Authentication', 'Threat Scoring'],
      benefits: ['Block 99.9% of threats', 'Detect phishing instantly', 'Verify all links', 'Protect against zero-day attacks'],
      stats: { protection: '99.9%', scanning: 'Real-time', threats: 'Blocked' }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-6xl mb-4 block">🚀</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Email Intelligence V46
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five powerful engines that master negotiation, search, performance, templates, and security
            for enterprise email excellence.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">
              132 Total Engines
            </span>
            <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full font-medium">
              1,636 Services
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
              Reply-All Enforced
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {engines.map((engine) => (
            <div
              key={engine.version}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-5xl">{engine.icon}</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    {engine.version}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{engine.name}</h3>
                <p className="text-purple-100 text-sm">{engine.description}</p>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
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

                <div className="border-t pt-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(engine.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Email Intelligence?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations using Zion Tech Group's email intelligence platform
            to negotiate better, search smarter, and protect against threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
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
              View All 1,636 Services
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">132</div>
            <div className="text-sm text-gray-600">Email Engines</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-600 mb-2">1,636</div>
            <div className="text-sm text-gray-600">Total Services</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Threat Protection</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Security Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V331V335Showcase;
