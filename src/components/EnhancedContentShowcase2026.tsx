import React, { useState, useEffect } from 'react';

const EnhancedContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentTabs = [
    {
      id: 'ai-revolution',
      title: 'AI Revolution',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      content: {
        title: 'The AI Revolution is Here',
        description: 'Experience the next generation of artificial intelligence that thinks, learns, and creates like never before.',
        features: [
          'Conscious AI systems with emotional intelligence',
          'Self-evolving algorithms that improve continuously',
          'Quantum-enhanced processing capabilities',
          'Natural language understanding at human level'
        ],
        stats: {
          'Processing Speed': '1000x faster',
          'Accuracy': '99.7%',
          'Learning Rate': 'Exponential',
          'Applications': 'Unlimited'
        }
      }
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      content: {
        title: 'Quantum Supremacy Achieved',
        description: 'Breakthrough quantum computers that solve impossible problems in seconds.',
        features: [
          '10,000+ qubit quantum processors',
          'Exponential speed advantages',
          'Quantum cryptography and security',
          'Molecular simulation capabilities'
        ],
        stats: {
          'Qubits': '10,000+',
          'Speed Advantage': '10^15x',
          'Security Level': 'Unbreakable',
          'Applications': 'Revolutionary'
        }
      }
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      content: {
        title: 'Mind-Machine Connection',
        description: 'Direct neural interfaces that bridge the gap between human thought and digital systems.',
        features: [
          '1,024 neural channels for precise control',
          'Thought-based device operation',
          'Enhanced cognitive capabilities',
          'Seamless human-AI collaboration'
        ],
        stats: {
          'Neural Channels': '1,024',
          'Accuracy': '99.7%',
          'Response Time': 'Instant',
          'Applications': 'Limitless'
        }
      }
    },
    {
      id: 'space-tech',
      title: 'Space Technology',
      icon: '🚀',
      color: 'from-orange-600 to-red-600',
      content: {
        title: 'Interplanetary Future',
        description: 'Advanced space technologies enabling human colonization of other planets.',
        features: [
          'Mars colonization missions',
          'Asteroid mining operations',
          'Space habitat construction',
          'Interplanetary travel systems'
        ],
        stats: {
          'Mars Missions': '12',
          'Success Rate': '95%',
          'Distance Covered': '225M km',
          'Colonists': '1,000+'
        }
      }
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">🌟 Revolutionary Technology 2026</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Experience the most advanced technologies that are reshaping our world
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {contentTabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {contentTabs[activeTab].content.title}
              </h3>
              <p className="text-purple-200 text-lg mb-6">
                {contentTabs[activeTab].content.description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white mb-3">Key Features:</h4>
                {contentTabs[activeTab].content.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-purple-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Performance Metrics:</h4>
              <div className="space-y-4">
                {Object.entries(contentTabs[activeTab].content.stats).map(([key, value], index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-purple-200 font-medium">{key}</span>
                      <span className="text-white font-bold text-lg">{value}</span>
                    </div>
                    <div className="w-full bg-purple-200/20 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${contentTabs[activeTab].color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${Math.min(100, (index + 1) * 25)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a 
              href={`/pages/${contentTabs[activeTab].title.replace(/\s+/g, '')}2026`}
              className={`inline-block bg-gradient-to-r ${contentTabs[activeTab].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
            >
              Explore {contentTabs[activeTab].title} →
            </a>
          </div>
        </div>
      </div>

      {/* Additional Showcase Sections */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
          <div className="text-4xl mb-4">🔮</div>
          <h3 className="text-2xl font-bold text-white mb-4">Predictive Intelligence</h3>
          <p className="text-cyan-200 mb-6">
            AI systems that can predict future events with unprecedented accuracy, helping businesses and individuals make better decisions.
          </p>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-cyan-300">Prediction Accuracy</span>
              <span className="text-white font-semibold">94%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-cyan-300">Time Horizon</span>
              <span className="text-white font-semibold">10 Years</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
          <div className="text-4xl mb-4">🌐</div>
          <h3 className="text-2xl font-bold text-white mb-4">Metaverse 2.0</h3>
          <p className="text-emerald-200 mb-6">
            Fully immersive virtual worlds with photorealistic graphics and seamless integration between physical and digital realities.
          </p>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-emerald-300">Active Users</span>
              <span className="text-white font-semibold">2.5B</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-emerald-300">Realism Level</span>
              <span className="text-white font-semibold">98%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Timeline */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8">
        <h3 className="text-3xl font-bold text-white text-center mb-8">🚀 Innovation Timeline</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">2024</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">AI Breakthrough</h4>
            <p className="text-purple-200 text-sm">First conscious AI systems</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">2025</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Quantum Leap</h4>
            <p className="text-purple-200 text-sm">Quantum supremacy achieved</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">2026</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Neural Integration</h4>
            <p className="text-purple-200 text-sm">Direct brain-computer interfaces</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">2027</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Space Colonization</h4>
            <p className="text-purple-200 text-sm">First Mars settlement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2026;