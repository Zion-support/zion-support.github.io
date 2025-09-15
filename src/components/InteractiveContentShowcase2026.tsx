import React, { useState, useEffect } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contentTabs = [
    {
      id: 'ai-revolution',
      title: 'AI Revolution',
      icon: '🤖',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/20 to-blue-600/20',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/20 to-teal-600/20',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'tech-blog',
      title: 'Tech Blog',
      icon: '📚',
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/20 to-red-600/20',
      borderColor: 'border-orange-400/30'
    }
  ];

  const contentItems = {
    'ai-revolution': [
      {
        title: 'Synthetic Intelligence',
        description: 'AI systems with genuine consciousness and self-awareness',
        link: '/pages/SyntheticIntelligence2026',
        features: ['Self-reflective awareness', 'Emotional processing', 'Creative problem solving'],
        stats: '99.9% accuracy'
      },
      {
        title: 'Next-Gen AI Revolution',
        description: 'The future of artificial intelligence that transcends human limitations',
        link: '/pages/NextGenAIRevolution2026',
        features: ['Quantum neural networks', 'Global AI consciousness', 'Self-evolving architecture'],
        stats: '1000x faster'
      },
      {
        title: 'Advanced AI Systems',
        description: 'Autonomous AI systems that operate independently and continuously evolve',
        link: '/pages/AdvancedAISystems2026',
        features: ['Autonomous operation', 'Self-healing', 'Continuous learning'],
        stats: '24/7 operation'
      }
    ],
    'quantum-computing': [
      {
        title: 'Advanced Quantum Computing',
        description: 'Quantum computing that operates beyond classical physics limits',
        link: '/pages/AdvancedQuantumComputing2026',
        features: ['Quantum supremacy', 'Molecular simulation', 'Quantum cryptography'],
        stats: 'Exponential speed'
      },
      {
        title: 'Quantum-Neural Fusion',
        description: 'The ultimate convergence of consciousness and quantum mechanics',
        link: '/pages/QuantumNeuralFusion2026',
        features: ['Quantum superposition', 'Neural integration', 'Parallel processing'],
        stats: 'Infinite scalability'
      },
      {
        title: 'Quantum Computing Revolution',
        description: 'Revolutionary quantum technology solving impossible problems',
        link: '/pages/QuantumComputingRevolution2026',
        features: ['Unbreakable encryption', 'Drug discovery', 'Climate modeling'],
        stats: 'Unbreakable security'
      }
    ],
    'neural-interfaces': [
      {
        title: 'Neural Interface Revolution',
        description: 'Direct brain-computer interfaces enabling thought control',
        link: '/pages/NeuralInterfaceRevolution2026',
        features: ['Non-invasive BCI', 'Thought control', 'Neural feedback'],
        stats: 'Real-time processing'
      },
      {
        title: 'Neural Interface Future',
        description: 'Bridge mind and machine with direct neural interfaces',
        link: '/pages/NeuralInterfaceFuture',
        features: ['Mind-machine bridge', 'Direct communication', 'Enhanced cognition'],
        stats: 'Seamless integration'
      },
      {
        title: 'Advanced Neural Systems',
        description: 'Next-generation neural interface technology',
        link: '/pages/NeuralInterfaceRevolution2026',
        features: ['Advanced BCI', 'Cognitive enhancement', 'Neural networks'],
        stats: 'Enhanced capabilities'
      }
    ],
    'tech-blog': [
      {
        title: 'Revolutionary Tech Blog',
        description: 'Insights into groundbreaking technologies reshaping our world',
        link: '/pages/RevolutionaryTechBlog2026',
        features: ['Latest insights', 'Expert analysis', 'Future predictions'],
        stats: 'Daily updates'
      },
      {
        title: 'Comprehensive Tech Insights',
        description: 'In-depth analysis of emerging technologies and trends',
        link: '/pages/ComprehensiveTechInsights2026',
        features: ['Deep analysis', 'Trend forecasting', 'Industry insights'],
        stats: 'Weekly reports'
      },
      {
        title: 'Technology Showcase',
        description: 'Interactive demonstrations of cutting-edge technologies',
        link: '/revolutionary-showcase',
        features: ['Interactive demos', 'Live examples', 'Hands-on experience'],
        stats: 'Real-time demos'
      }
    ]
  };

  const currentContent = contentItems[contentTabs[activeTab].id as keyof typeof contentItems];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-400">✨</span>
            <span className="text-cyan-300 font-semibold ml-2">INTERACTIVE CONTENT SHOWCASE 2026</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🌟 Revolutionary Technology Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our most advanced technologies with immersive interactive features, 
            dynamic content carousels, and cutting-edge demonstrations
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentTabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              <span className="text-2xl mr-3">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${contentTabs[activeTab].bgColor} backdrop-blur-sm rounded-xl p-8 border ${contentTabs[activeTab].borderColor} hover:scale-105 transition-all duration-300 cursor-pointer`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{contentTabs[activeTab].icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">{item.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs rounded-full font-semibold">
                  {item.stats}
                </span>
                <span className="text-cyan-400 text-sm font-semibold">
                  {hoveredCard === index ? 'Explore →' : 'Learn More'}
                </span>
              </div>

              <a
                href={item.link}
                className={`block w-full bg-gradient-to-r ${contentTabs[activeTab].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                {hoveredCard === index ? '🚀 Experience Now' : 'Explore Technology'}
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl text-gray-300 mb-6">
              Join us in the next generation technology revolution and be part of the transformation that will reshape humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pages/NextGenAIRevolution2026"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
              >
                🚀 Start Your Journey
              </a>
              <a
                href="/pages/RevolutionaryTechBlog2026"
                className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                📚 Read Our Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2026;