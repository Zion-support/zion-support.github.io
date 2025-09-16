import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
<<<<<<< HEAD
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const technologies = {
    ai: {
      title: "Artificial Intelligence",
      icon: "🤖",
      description: "Revolutionary AI systems that think, learn, and adapt",
      features: [
        "Autonomous decision making",
        "Real-time learning",
        "Predictive analytics",
        "Natural language processing"
      ],
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/20 to-pink-900/20"
    },
    quantum: {
      title: "Quantum Computing",
      icon: "⚡",
      description: "Exponential computing power for impossible problems",
      features: [
        "Quantum supremacy",
        "Cryptographic security",
        "Molecular simulation",
        "Optimization algorithms"
      ],
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/20 to-blue-900/20"
    },
    neural: {
      title: "Neural Interfaces",
      icon: "🧬",
      description: "Direct brain-computer communication",
      features: [
        "Thought control",
        "Neural feedback",
        "Non-invasive BCI",
        "Cognitive enhancement"
      ],
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/20 to-teal-900/20"
    }
  };

  const interactiveFeatures = [
    {
      title: "Real-time Processing",
      description: "Ultra-fast data processing with sub-millisecond response times",
      icon: "⚡",
      metric: "< 1ms"
    },
    {
      title: "Accuracy Rate",
      description: "99.9% accuracy in complex decision making and predictions",
      icon: "🎯",
      metric: "99.9%"
    },
    {
      title: "Scalability",
      description: "Seamlessly scales from single devices to enterprise systems",
      icon: "📈",
      metric: "∞"
    },
    {
      title: "Security",
      description: "Military-grade encryption and quantum-resistant security",
      icon: "🔒",
      metric: "100%"
=======
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const techCategories = {
    ai: {
      title: "AI Consciousness Revolution",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      items: [
        {
          name: "Self-Aware AI",
          description: "First AI system with genuine consciousness and self-awareness",
          features: ["Emotional Intelligence", "Creative Thinking", "Autonomous Decision Making"],
          status: "Available Now"
        },
        {
          name: "Collaborative Intelligence",
          description: "AI systems that work seamlessly with human teams",
          features: ["Team Integration", "Contextual Understanding", "Adaptive Learning"],
          status: "Beta Testing"
        },
        {
          name: "Creative AI Engine",
          description: "AI that generates original art, music, and literature",
          features: ["Original Content", "Style Transfer", "Emotional Expression"],
          status: "Coming Soon"
        }
      ]
    },
    quantum: {
      title: "Quantum Reality Engine",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      items: [
        {
          name: "Quantum Supremacy",
          description: "Quantum computers solving impossible problems",
          features: ["1000+ Qubits", "Error Correction", "Exponential Speed"],
          status: "Available Now"
        },
        {
          name: "Reality Manipulation",
          description: "Control physical reality through quantum mechanics",
          features: ["Teleportation", "Time Dilation", "Parallel Worlds"],
          status: "Beta Testing"
        },
        {
          name: "Quantum AI Integration",
          description: "AI powered by quantum computing principles",
          features: ["Quantum Neural Networks", "Superposition Learning", "Entanglement Processing"],
          status: "Research Phase"
        }
      ]
    },
    neural: {
      title: "Neural Interface Revolution",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      items: [
        {
          name: "Thought Control",
          description: "Control devices directly with your mind",
          features: ["Non-Invasive BCI", "Real-time Processing", "Multi-device Control"],
          status: "Available Now"
        },
        {
          name: "Neural VR Integration",
          description: "Experience virtual reality through neural interfaces",
          features: ["Full Sensory Immersion", "Thought Navigation", "Emotional Feedback"],
          status: "Beta Testing"
        },
        {
          name: "Mind Upload Technology",
          description: "Transfer consciousness to digital systems",
          features: ["Consciousness Backup", "Digital Immortality", "Neural Mapping"],
          status: "Research Phase"
        }
      ]
    },
    consciousness: {
      title: "Consciousness Transfer",
      icon: "🌟",
      color: "from-violet-600 to-fuchsia-600",
      items: [
        {
          name: "Digital Immortality",
          description: "Achieve eternal life through consciousness transfer",
          features: ["Consciousness Backup", "Body Transfer", "Life Extension"],
          status: "Beta Testing"
        },
        {
          name: "Consciousness Sharing",
          description: "Share experiences and memories between minds",
          features: ["Memory Transfer", "Experience Sharing", "Collective Consciousness"],
          status: "Research Phase"
        },
        {
          name: "Reality Simulation",
          description: "Create and inhabit custom realities",
          features: ["Custom Worlds", "Physics Manipulation", "Infinite Possibilities"],
          status: "Concept Phase"
        }
      ]
>>>>>>> cursor/create-and-deploy-new-content-1912
    }
  };

  return (
<<<<<<< HEAD
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white rounded-2xl p-8 mb-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Interactive Technology Showcase 2025</h2>
        <p className="text-xl opacity-90">Experience our cutting-edge technologies with interactive demonstrations</p>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-8 py-4 rounded-lg font-bold transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg scale-105`
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            <span className="text-2xl mr-3">{tech.icon}</span>
            {tech.title}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].bgGradient} backdrop-blur-sm rounded-2xl p-8 mb-12`}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
            <h3 className="text-3xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
            <p className="text-xl mb-6 opacity-90">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
            <ul className="space-y-3">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className={`w-64 h-64 bg-gradient-to-br ${technologies[activeTab as keyof typeof technologies].gradient} rounded-full flex items-center justify-center text-8xl opacity-80 animate-pulse`}>
              {technologies[activeTab as keyof typeof technologies].icon}
            </div>
=======
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Explore Revolutionary Technologies
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Interact with the most advanced technologies that are reshaping our world
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              {techCategories[activeTab as keyof typeof techCategories].title}
            </h3>
            <p className="text-lg opacity-90">
              Discover the latest breakthroughs in {techCategories[activeTab as keyof typeof techCategories].title.toLowerCase()}
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories[activeTab as keyof typeof techCategories].items.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${techCategories[activeTab as keyof typeof techCategories].color} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                onMouseEnter={() => setHoveredItem(`${activeTab}-${index}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="text-4xl mb-4 text-center">
                  {techCategories[activeTab as keyof typeof techCategories].icon}
                </div>
                
                <h4 className="text-xl font-bold mb-3 text-center">{item.name}</h4>
                <p className="text-white/90 mb-4 text-center text-sm">{item.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  {item.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="text-xs bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-center"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Status */}
                <div className="text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'Available Now' 
                      ? 'bg-green-500/30 text-green-200' 
                      : item.status === 'Beta Testing'
                      ? 'bg-yellow-500/30 text-yellow-200'
                      : 'bg-blue-500/30 text-blue-200'
                  }`}>
                    {item.status}
                  </span>
                </div>

                {/* Hover Effect */}
                {hoveredItem === `${activeTab}-${index}` && (
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                      Learn More →
                    </button>
                  </div>
                )}
              </div>
            ))}
>>>>>>> cursor/create-and-deploy-new-content-1912
          </div>
        </div>

<<<<<<< HEAD
      {/* Interactive Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {interactiveFeatures.map((feature, index) => (
          <div
            key={index}
            className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer ${
              hoveredCard === feature.title ? 'bg-white/20' : ''
            }`}
            onMouseEnter={() => setHoveredCard(feature.title)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <div className="text-3xl font-bold mb-2 text-cyan-400">{feature.metric}</div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Try Our Interactive Demo</h3>
          <p className="text-lg opacity-90">Experience the power of our technology firsthand</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h4 className="text-lg font-bold mb-2">AI Assistant Demo</h4>
            <p className="text-sm text-gray-300 mb-4">Chat with our AI assistant</p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Start Demo
            </button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-lg font-bold mb-2">Quantum Simulator</h4>
            <p className="text-sm text-gray-300 mb-4">Explore quantum computing</p>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Launch Simulator
            </button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🧬</div>
            <h4 className="text-lg font-bold mb-2">Neural Interface</h4>
            <p className="text-sm text-gray-300 mb-4">Test brain-computer interface</p>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Connect Mind
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg mb-6 opacity-90">Join thousands of innovators already using our revolutionary technology</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-50 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
=======
        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of pioneers who are already using these revolutionary technologies
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg">
              Start Your Journey
            </button>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg">
>>>>>>> cursor/create-and-deploy-new-content-1912
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;