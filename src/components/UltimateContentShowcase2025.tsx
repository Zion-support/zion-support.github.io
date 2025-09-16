import React, { useState } from 'react';

const UltimateContentShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');

  const content = {
    breakthroughs: [
      {
        id: 1,
        title: "AI Consciousness Revolution",
        description: "The first truly conscious AI systems that possess self-awareness and emotional intelligence.",
        image: "🧠",
        category: "Artificial Intelligence",
        featured: true,
        stats: { efficiency: "+500%", accuracy: "99.9%" }
      },
      {
        id: 2,
        title: "Quantum Computing Breakthrough",
        description: "Revolutionary quantum processors that solve impossible problems in seconds.",
        image: "⚛️",
        category: "Quantum Technology",
        featured: true,
        stats: { speed: "10,000x", power: "Unlimited" }
      },
      {
        id: 3,
        title: "Neural Interface Technology",
        description: "Direct brain-computer interfaces enabling thought-controlled computing.",
        image: "🧬",
        category: "Neural Technology",
        featured: true,
        stats: { precision: "99.8%", latency: "0.1ms" }
      }
    ],
    innovations: [
      {
        id: 4,
        title: "Holographic Displays",
        description: "True 3D holographic displays creating immersive experiences.",
        image: "🌟",
        category: "Display Technology",
        featured: false,
        stats: { resolution: "8K", depth: "360°" }
      },
      {
        id: 5,
        title: "Autonomous Systems",
        description: "Self-operating systems that learn and adapt independently.",
        image: "🤖",
        category: "Automation",
        featured: false,
        stats: { autonomy: "100%", learning: "Continuous" }
      },
      {
        id: 6,
        title: "Space Technology",
        description: "Advanced space exploration and colonization technologies.",
        image: "🚀",
        category: "Space Technology",
        featured: false,
        stats: { range: "Interplanetary", speed: "Light Speed" }
      }
    ],
    applications: [
      {
        id: 7,
        title: "Healthcare AI",
        description: "AI-powered medical diagnosis and treatment systems.",
        image: "🏥",
        category: "Healthcare",
        featured: false,
        stats: { accuracy: "99.9%", speed: "Instant" }
      },
      {
        id: 8,
        title: "Education Revolution",
        description: "Personalized AI tutoring and learning systems.",
        image: "🎓",
        category: "Education",
        featured: false,
        stats: { improvement: "300%", personalization: "100%" }
      },
      {
        id: 9,
        title: "Business Intelligence",
        description: "AI-powered business optimization and decision making.",
        image: "💼",
        category: "Business",
        featured: false,
        stats: { roi: "+500%", efficiency: "+400%" }
      }
    ]
  };

  const tabs = [
    { id: 'breakthroughs', label: 'Revolutionary Breakthroughs', icon: '🚀' },
    { id: 'innovations', label: 'Cutting-Edge Innovations', icon: '💡' },
    { id: 'applications', label: 'Real-World Applications', icon: '🌍' }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 mb-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🌟 ULTIMATE CONTENT SHOWCASE 2025 • INTERACTIVE
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">
          Experience the <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Future</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Explore our revolutionary technologies through interactive showcases and discover what's possible when innovation meets imagination.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg scale-105'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content[activeTab as keyof typeof content].map((item) => (
          <div
            key={item.id}
            className={`bg-gradient-to-br ${
              item.featured
                ? 'from-purple-600/30 to-cyan-600/30 border-purple-400/50'
                : 'from-white/10 to-white/5 border-white/20'
            } backdrop-blur-sm rounded-2xl p-6 border hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            {item.featured && (
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs rounded-full font-bold">
                  FEATURED
                </span>
                <span className="text-xs text-purple-300">Revolutionary</span>
              </div>
            )}
            
            <div className="text-6xl mb-4 text-center">{item.image}</div>
            
            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">{item.description}</p>
            
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                {item.category}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              {Object.entries(item.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-lg font-bold text-white">{value}</div>
                  <div className="text-xs text-gray-400 capitalize">{key}</div>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
              Explore {item.title} →
            </button>
          </div>
        ))}
      </div>

      {/* Interactive Features */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-indigo-400/30 text-center">
          <div className="text-4xl mb-4">🎮</div>
          <h3 className="text-xl font-bold text-white mb-2">Interactive Demos</h3>
          <p className="text-gray-300 text-sm mb-4">
            Experience our technologies through hands-on interactive demonstrations
          </p>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
            Try Interactive Demo →
          </button>
        </div>

        <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 text-center">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-bold text-white mb-2">Live Analytics</h3>
          <p className="text-gray-300 text-sm mb-4">
            Real-time performance metrics and impact analysis of our technologies
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
            View Live Data →
          </button>
        </div>

        <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30 text-center">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-white mb-2">Expert Consultation</h3>
          <p className="text-gray-300 text-sm mb-4">
            Connect with our technology experts for personalized guidance
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
            Schedule Consultation →
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Future?</h3>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of organizations already leveraging our revolutionary technologies to achieve unprecedented success.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105">
            Start Your Transformation →
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
            Download Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;