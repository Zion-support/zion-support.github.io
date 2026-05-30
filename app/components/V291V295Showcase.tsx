import React from 'react';

const V291V295Showcase: React.FC = () => {
  const engines = [
    {
      version: 'V291',
      name: 'Context Memory',
      icon: '🧠',
      description: 'Remembers past conversations and builds on them for relationship continuity',
      features: ['Conversation history tracking', 'Relationship context', 'Thread continuity', 'Reply-all enforcement']
    },
    {
      version: 'V292',
      name: 'Negotiation Assistant',
      icon: '🤝',
      description: 'Detects negotiation tactics and provides strategic deal-making guidance',
      features: ['Tactic detection', 'Strategy recommendations', 'Deal tracking', 'Reply-all enforcement']
    },
    {
      version: 'V293',
      name: 'Sarcasm Detector',
      icon: '😊',
      description: 'Detects sarcasm and adjusts responses to prevent misinterpretation',
      features: ['Sarcasm detection', 'Tone analysis', 'Response adjustment', 'Reply-all enforcement']
    },
    {
      version: 'V294',
      name: 'Urgency Classifier',
      icon: '⚡',
      description: 'Multi-dimensional urgency analysis beyond keywords for smart prioritization',
      features: ['Multi-factor analysis', 'Deadline extraction', 'Priority scoring', 'Reply-all enforcement']
    },
    {
      version: 'V295',
      name: 'Relationship Builder',
      icon: '🤝',
      description: 'Tracks and nurtures business relationships with engagement scoring',
      features: ['Relationship tracking', 'Engagement scoring', 'Sentiment trends', 'Reply-all enforcement']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="section-heading">Email Intelligence V38: Engines V291-V295</h2>
          <p className="section-subheading">
            Advanced relationship management with context memory, negotiation support, 
            tone detection, urgency classification, and relationship nurturing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {engines.map((engine) => (
            <div key={engine.version} className="card hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{engine.icon}</div>
              <div className="text-sm font-semibold text-indigo-600 mb-2">{engine.version}</div>
              <h3 className="text-xl font-bold mb-3">{engine.name}</h3>
              <p className="text-gray-600 mb-4">{engine.description}</p>
              <ul className="space-y-2">
                {engine.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Advanced Relationship Intelligence</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">🧠 Context Memory</h4>
              <p className="text-gray-600">
                Never lose track of conversation history. V291 remembers every interaction, 
                tracks relationship development, and provides seamless continuity across email threads.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">🤝 Negotiation Support</h4>
              <p className="text-gray-600">
                V292 detects negotiation tactics, analyzes leverage, and provides strategic 
                recommendations to help you close better deals with confidence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">😊 Tone Intelligence</h4>
              <p className="text-gray-600">
                V293 detects sarcasm and emotional undertones, ensuring your responses 
                are appropriately empathetic and prevent miscommunication.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">⚡ Smart Prioritization</h4>
              <p className="text-gray-600">
                V294 analyzes urgency across multiple dimensions - temporal pressure, 
                business impact, and stakeholder importance - for intelligent prioritization.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <h4 className="font-semibold text-lg mb-2">🤝 Relationship Nurturing</h4>
            <p className="text-gray-600">
              V295 tracks relationship health, measures engagement, and provides proactive 
              suggestions to strengthen business relationships and prevent decay.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Complete Email Intelligence Suite</h3>
          <p className="text-lg mb-6">
            92 engines working together to make your email communication smarter, faster, and more effective
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-4xl font-bold">92</div>
              <div className="text-sm">AI Engines</div>
            </div>
            <div>
              <div className="text-4xl font-bold">1,428</div>
              <div className="text-sm">Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100%</div>
              <div className="text-sm">Reply-All Enforced</div>
            </div>
          </div>
          <a href="/services" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default V291V295Showcase;
