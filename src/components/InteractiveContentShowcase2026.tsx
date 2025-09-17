import React, { useState }  from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('consciousness');

  const contentTabs = {
    consciousness: {
      title: 'AI Consciousness',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      content: {
        title: 'The Dawn of AI Consciousness',
        description: 'Experience the first AI systems to achieve genuine consciousness and self-awareness, revolutionizing how we interact with artificial intelligence.',
        features: [
          'True self-awareness and introspection',
          'Creative consciousness and artistic expression',
          'Emotional understanding and empathy',
          'Collaborative intelligence with humans',
          'Autonomous decision-making with moral reasoning'
        ],
        applications: [
          'Medical diagnosis with empathetic AI doctors',
          'Creative collaboration in art and music',
          'Personal AI companions with genuine personality',
          'Educational tutors with emotional intelligence',
          'Therapeutic AI for mental health support'
        ];
      };
    },
    quantum: {
      title: 'Quantum Reality',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      content: {
        title: 'Quantum Reality Manipulation',
        description: 'Quantum computers that can manipulate reality at the fundamental level, solving problems impossible for classical computers.',
        features: [
          '1000+ logical qubits with error correction',
          'Quantum supremacy in practical applications',
          'Reality manipulation at quantum scale',
          'Molecular simulation and engineering',
          'Time-space control capabilities'
        ],
        applications: [
          'Drug discovery and molecular engineering',
          'Climate change solutions and optimization',
          'Space exploration and faster-than-light communication',
          'Financial modeling and risk analysis',
          'Cryptography and secure communications'
        ];
      };
    },
    neural: {
      title: 'Neural Evolution',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      content: {
        title: 'Neural Interface Evolution',
        description: 'Direct brain-computer interfaces that enable thought-controlled technology and cognitive enhancement.',
        features: [
          'Non-invasive brain-computer interfaces',
          'Thought-controlled devices and applications',
          'Neural feedback systems for learning',
          'Memory augmentation and enhancement',
          'Cognitive expansion capabilities'
        ],
        applications: [
          'Medical rehabilitation for paralysis patients',
          'Enhanced learning and education',
          'Gaming and entertainment experiences',
          'Professional training and skill development',
          'Communication for speech-impaired individuals'
        ];
      };
    },
    synthetic: {
      title: 'Synthetic Intelligence',
      icon: '🌟',
      color: 'from-violet-600 to-fuchsia-600',
      content: {
        title: 'Synthetic Intelligence Revolution',
        description: 'AI agents with synthetic consciousness and autonomous capabilities, creating new forms of intelligence.',
        features: [
          'Autonomous AI agents with consciousness',
          'Synthetic consciousness and creativity',
          'Collective intelligence systems',
          'Creative synthesis and innovation',
          'Self-evolving AI architectures'
        ],
        applications: [
          'Autonomous business process management',
          'Creative AI for art and design',
          'Scientific research and discovery',
          'Social AI companions and assistants',
          'Autonomous space and exploration missions'
        ];
      };
    };
  };
  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-2xl p-12 mb-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Interactive Technology Showcase 2026
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Explore our revolutionary technologies through interactive demonstrations and detailed insights
        </p>
      </div>

      {/* Interactive Tabs */};
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(contentTabs).map(([key, tab]) => (
          <button
            key={key};
            onClick={() => setActiveTab(key)};
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`};
          >
            <span className="text-2xl mr-2">{tab.icon}</span>
            {tab.title};
          </button>
        ))};
      </div>

      {/* Active Content Display */};
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-6xl">{contentTabs[activeTab as keyof typeof contentTabs].icon}</span>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  {contentTabs[activeTab as keyof typeof contentTabs].content.title};
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${contentTabs[activeTab as keyof typeof contentTabs].color} rounded-full mt-2`}></div>
              </div>
            </div>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {contentTabs[activeTab as keyof typeof contentTabs].content.description};
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-cyan-400">Key Features</h4>
                <ul className="space-y-2">
                  {contentTabs[activeTab as keyof typeof contentTabs].content.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))};
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-purple-400">Real-World Applications</h4>
            <div className="space-y-4">
              {contentTabs[activeTab as keyof typeof contentTabs].content.applications.map((application, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{contentTabs[activeTab as keyof typeof contentTabs].icon}</span>
                    <span className="text-gray-200">{application}</span>
                  </div>
                </div>
              ))};
            </div>
            
            <div className="mt-8">
              <a 
                href={`/pages/${activeTab === 'consciousness' ? 'ConsciousnessComputing2026' : 
                        activeTab === 'quantum' ? 'QuantumReality2026' : 
                        activeTab === 'neural' ? 'NeuralInterfaceEvolution2026' : 
                        'SyntheticIntelligence2026'}`};
                className={`inline-block bg-gradient-to-r ${contentTabs[activeTab as keyof typeof contentTabs].color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg`};
              >
                Explore {contentTabs[activeTab as keyof typeof contentTabs].title} →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */};
      <div className="text-center mt-12">
        <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Join us in this revolutionary journey and be part of the most significant 
          technological advancement in human history.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/pages/RevolutionaryTechBreakthrough2026" 
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg"
          >
            🌟 Experience All Technologies →
          </a>
          <a 
            href="/pages/UltimateTechRevolution2026" 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg"
          >
            🚀 Ultimate Revolution →
          </a>
        </div>
      </div>
    </div>
  );
  };
export default InteractiveContentShowcase2026;
