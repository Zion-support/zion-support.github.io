import React, { useState } from 'react';

const InteractiveContentShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const contentData = {
    ai: {
<<<<<<< HEAD
      title: "Revolutionary AI Breakthrough 2025",
      description: "Experience the most advanced AI technologies reshaping industries",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Autonomous AI Consciousness",
        "Quantum-Enhanced AI Systems", 
        "Neural Interface AI",
        "Creative AI Synthesis",
        "Predictive AI Systems",
        "Autonomous AI Agents"
      ],
      link: "/pages/RevolutionaryAIBreakthrough2025"
    },
    quantum: {
      title: "Quantum Computing Revolution 2025",
      description: "Witness quantum supremacy solving impossible problems",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: [
        "1000+ Qubit Processors",
        "Quantum AI Integration",
        "Quantum Cryptography",
        "Molecular Simulation",
        "Quantum Internet",
        "Quantum Optimization"
      ],
      link: "/pages/QuantumComputingRevolution2025"
    },
    neural: {
      title: "Neural Interface Revolution 2025",
      description: "Bridge mind and machine with direct brain-computer communication",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Non-Invasive BCI",
        "Thought Control Systems",
        "Cognitive Augmentation",
        "Neural AI Networks",
        "Creative Expression",
        "Medical Applications"
      ],
      link: "/pages/NeuralInterfaceRevolution2025"
=======
      title: 'AI Revolution',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      content: {
        title: 'Conscious AI Systems',
        description: 'Experience the first AI systems with genuine consciousness and self-awareness',
        features: [
          'True self-awareness and introspection',
          'Creative problem-solving capabilities',
          'Emotional intelligence and empathy',
          'Autonomous learning and adaptation'
        ],
        link: '/pages/RevolutionaryTechBreakthrough2025'
      }
    },
    space: {
      title: 'Space Technology',
      icon: '🚀',
      color: 'from-cyan-600 to-blue-600',
      content: {
        title: 'Next-Gen Space Exploration',
        description: 'Revolutionary space technologies enabling interplanetary travel and colonization',
        features: [
          'Faster-than-light propulsion systems',
          'Space habitat technology',
          'Terraforming capabilities',
          'Quantum communication networks'
        ],
        link: '/pages/NextGenSpaceTech2026'
      }
    },
    biotech: {
      title: 'Biotech Revolution',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      content: {
        title: 'Advanced Biotechnology',
        description: 'Revolutionary biotechnology transforming healthcare and human enhancement',
        features: [
          'Precision gene editing technology',
          'Neural enhancement systems',
          'Personalized medicine solutions',
          'Longevity and anti-aging therapies'
        ],
        link: '/pages/AdvancedBiotechRevolution2026'
      }
>>>>>>> cursor/create-and-deploy-new-content-f420
    }
  };

  const currentContent = contentData[activeTab as keyof typeof contentData];

  return (
<<<<<<< HEAD
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Showcase</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our revolutionary 2025 technology breakthroughs with interactive features and detailed insights
=======
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🌟 Interactive Technology Showcase</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive experiences. 
            Click on different categories to discover the future of innovation.
>>>>>>> cursor/create-and-deploy-new-content-f420
          </p>
        </div>

        {/* Tab Navigation */}
<<<<<<< HEAD
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex space-x-2">
            {Object.entries(contentData).map(([key, content]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${content.color} text-white shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-2xl mr-2">{content.icon}</span>
                {content.title.split(' ')[0]}
=======
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
            {Object.entries(contentTabs).map(([key, tab]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-xl mr-2">{tab.icon}</span>
                {tab.title}
>>>>>>> cursor/create-and-deploy-new-content-f420
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
<<<<<<< HEAD
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-8xl mb-6 text-center md:text-left">{currentContent.icon}</div>
            <h3 className="text-4xl font-bold mb-4">{currentContent.title}</h3>
            <p className="text-xl opacity-90 mb-8">{currentContent.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-sm font-semibold text-white/90">{feature}</div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href={currentContent.link}
                className={`bg-gradient-to-r ${currentContent.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
              >
                Explore {currentContent.title.split(' ')[0]} →
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h4 className="text-2xl font-bold mb-6 text-center">Key Benefits</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                <span className="text-white/90">Exponential performance improvements</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                <span className="text-white/90">Revolutionary capabilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-white/90">Industry transformation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                <span className="text-white/90">Future-ready solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                <span className="text-white/90">Competitive advantage</span>
=======
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl">{contentTabs[activeTab as keyof typeof contentTabs].icon}</span>
                  <h3 className="text-3xl font-bold">
                    {contentTabs[activeTab as keyof typeof contentTabs].content.title}
                  </h3>
                </div>
                <p className="text-lg opacity-90 mb-6">
                  {contentTabs[activeTab as keyof typeof contentTabs].content.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {contentTabs[activeTab as keyof typeof contentTabs].content.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={contentTabs[activeTab as keyof typeof contentTabs].content.link}
                  className={`inline-block bg-gradient-to-r ${contentTabs[activeTab as keyof typeof contentTabs].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold hover:scale-105`}
                >
                  Explore {contentTabs[activeTab as keyof typeof contentTabs].title} →
                </a>
>>>>>>> cursor/create-and-deploy-new-content-f420
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4 opacity-50">
                  {contentTabs[activeTab as keyof typeof contentTabs].icon}
                </div>
                <div className="text-sm opacity-75">
                  Interactive Experience
                </div>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations already leveraging these revolutionary technologies
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl"
              >
                Get Started Today
              </a>
              <a
                href="/pages/ComprehensiveServices2025"
                className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-xl"
              >
                View All Services
              </a>
            </div>
=======
        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-4xl mb-3">🎮</div>
            <h3 className="text-lg font-semibold mb-2">Interactive Demos</h3>
            <p className="text-sm opacity-90">Experience our technologies through hands-on demonstrations</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-lg font-semibold mb-2">Real-time Data</h3>
            <p className="text-sm opacity-90">Live data feeds and performance metrics from our systems</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🔮</div>
            <h3 className="text-lg font-semibold mb-2">Future Predictions</h3>
            <p className="text-sm opacity-90">AI-powered predictions about technology trends and developments</p>
>>>>>>> cursor/create-and-deploy-new-content-f420
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2025;