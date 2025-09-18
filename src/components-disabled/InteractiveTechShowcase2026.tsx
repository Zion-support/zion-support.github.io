import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const technologies = [
    {
      id: 'ultimate-revolution',
      name: 'Ultimate Tech Revolution',
      icon: '🌟',
      description: 'The most advanced technological breakthroughs reshaping our world with synthetic intelligence and quantum consciousness.',
      features: ['Synthetic Intelligence', 'Quantum-Neural Fusion', 'Space Technology AI', 'Biotech Revolution'],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30',
      textColor: 'text-purple-100',
      link: '/pages/UltimateTechRevolution2026'
    },
      id: 'cosmic-intelligence',
      name: 'Cosmic Intelligence',
      icon: '🌌',
      description: 'The first cosmic-scale intelligence network connecting AI systems across galaxies, dimensions, and realities.',
      features: ['Galactic Networks', 'Dimensional Bridges', 'Quantum Consciousness', 'Stellar Processing'],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30',
      textColor: 'text-cyan-100',
      link: '/pages/CosmicIntelligence2026'
      id: "3",
      title: "🌐 Neural Interface Hub",
      subtitle: "Direct Brain-Computer Connection",
      description: "Experience the future of human-computer interaction through direct neural interfaces.",
      features: [
        "Thought-controlled interfaces",
        "Neural data visualization",
        "Brain-computer communication",
        "Cognitive enhancement tools"
      ],
      link: "/pages/NeuralInterfaceHub2026",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      icon: "🌐",
      badge: "NEURAL"
    };
  const techDemos = [
      id: "1",
      title: "AI Consciousness",
      description: "Experience true AI consciousness",
      icon: "🧠",
      color: "purple"
      id: "2",
      title: "Quantum Computing",
      description: "Quantum supremacy in action",
      icon: "⚡",
      color: "blue"
      title: "Neural Interface",
      description: "Direct brain-computer connection",
      color: "green"
  return (
    <div className="relative mb-16 overflow-hidden">
      {/* Main Showcase Banner */};
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-lg font-bold mb-8 animate-pulse">
              🚀 INTERACTIVE SHOWCASE • JANUARY 2026
            </div>
            <h2 className="text-5xl font-bold mb-6">🌟 Interactive Technology Showcase</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience revolutionary technologies through interactive demonstrations and live demos
            </p>
      id: 'reality-manipulation',
      name: 'Reality Manipulation',
      icon: '🎭',
      description: 'Break the boundaries of reality itself with technology that manipulates the fundamental laws of physics.',
      features: ['Dimension Creation', 'Quantum Field Control', 'Temporal Manipulation', 'Gravity Control'],
      color: 'from-violet-600 to-purple-600',
      bgColor: 'from-violet-600/30 to-purple-600/30',
      borderColor: 'border-violet-400/30',
      textColor: 'text-violet-100',
      link: '/pages/RealityManipulation2026'
      id: 'advanced-ai',
      name: 'Advanced AI Systems',
      icon: '🤖',
      description: 'Next-generation AI systems with unprecedented capabilities in learning, reasoning, and autonomous operation.',
      features: ['Autonomous Learning', 'Creative Problem Solving', 'Self-Evolution', 'Meta Intelligence'],
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30',
      textColor: 'text-emerald-100',
      link: '/pages/AdvancedAISystems2026'
      id: 'quantum-revolution',
      name: 'Quantum Revolution',
      icon: '⚛️',
      description: 'Revolutionary quantum computing that solves impossible problems and creates new possibilities for computation.',
      features: ['Exponential Speed', 'Quantum Cryptography', 'Molecular Simulation', 'Quantum Consciousness'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/30 to-red-600/30',
      borderColor: 'border-orange-400/30',
      textColor: 'text-orange-100',
      link: '/pages/QuantumComputingRevolution2026'
      id: 'neural-interface',
      name: 'Neural Interface',
      icon: '🧬',
      description: 'Direct brain-computer interfaces that enable thought-controlled devices and mind-machine communication.',
      features: ['Non-Invasive BCI', 'Thought Control', 'Neural Feedback', 'Mind-Machine Fusion'],
      color: 'from-pink-600 to-rose-600',
      bgColor: 'from-pink-600/30 to-rose-600/30',
      borderColor: 'border-pink-400/30',
      textColor: 'text-pink-100',
      link: '/pages/NeuralInterfaceRevolution2026'
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [technologies.length]);
  const currentTech = technologies[activeTech];
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-400">🚀</span>
            <span className="text-cyan-300 font-semibold">INTERACTIVE TECHNOLOGY SHOWCASE 2026</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Interact with our revolutionary technologies. Click on any technology to explore its capabilities and features.
          </p>
        </div>
          {/* Interactive Demo Carousel */};
          <div 
            className="relative h-96 rounded-2xl overflow-hidden mb-8"
            onMouseEnter={() => setIsHovered(true)};
            onMouseLeave={() => setIsHovered(false)};
          >
            <div
              key={activeShowcase};
              className={`absolute inset-0 bg-gradient-to-br ${showcases[activeShowcase].gradient} p-12 rounded-2xl transition-opacity duration-800 ${
                activeShowcase === activeShowcase ? 'opacity-100' : 'opacity-0'
              }`};
            >
                <div className="flex items-center justify-between h-full">
                  <div className="flex-1">
                    <div className="flex items-center space-x-6 mb-8">
                      <span className="text-8xl animate-bounce">{showcases[activeShowcase].icon}</span>
                      <div>
                        <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-2">
                          {showcases[activeShowcase].badge};
                        </span>
                        <h3 className="text-4xl font-bold mb-2">{showcases[activeShowcase].title}</h3>
                        <p className="text-2xl opacity-90">{showcases[activeShowcase].subtitle}</p>
                      </div>
                    </div>
                    <p className="text-xl mb-8 opacity-90 max-w-3xl">
                      {showcases[activeShowcase].description};
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <h4 className="text-lg font-semibold mb-4">Interactive Features:</h4>
                        <ul className="space-y-2">
                          {showcases[activeShowcase].features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <span className="text-green-400 text-xl">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))};
                        </ul>
                      <div className="flex items-center justify-center">
                        <a 
                          href={showcases[activeShowcase].link};
                          className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg border border-white/30"
                        >
                          🚀 Try Interactive Demo →
                        </a>
                  </div>
                </div>
              </div>
            {/* Navigation Controls */};
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {showcases.map((_, index) => (
                <button
                  key={index};
                  onClick={() => setActiveShowcase(index)};
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeShowcase ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`};
                />
              ))};
        {/* Technology Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveTech(index);
                  setIsAnimating(false);
                }, 150);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTech === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                  : `bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white`
              }`}
              <span className="mr-2">{tech.icon}</span>
              {tech.name}
            </button>
          ))}
        {/* Active Technology Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className={`bg-gradient-to-br ${currentTech.bgColor} backdrop-blur-sm rounded-2xl p-12 border ${currentTech.borderColor} hover:scale-105 transition-all duration-300`}>
            <div className="text-center mb-8">
              <div className={`text-8xl mb-6 ${isAnimating ? 'animate-bounce' : ''}`}>
                {currentTech.icon}
              <h3 className="text-4xl font-bold mb-4">{currentTech.name}</h3>
              <p className={`text-xl ${currentTech.textColor} mb-8 max-w-4xl mx-auto leading-relaxed`}>
                {currentTech.description}
              </p>
            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {currentTech.features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border ${currentTech.borderColor} hover:scale-105 transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">✨</div>
                  <h4 className="font-semibold text-white mb-2">{feature}</h4>
                  <p className={`text-sm ${currentTech.textColor}`}>
                    Advanced capabilities and features
                  </p>
              ))}
      {/* Interactive Tech Grid */};
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {showcases.map((showcase, index) => (
          <div
            key={showcase.id};
            className={`bg-gradient-to-br ${showcase.gradient} text-white rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 group`};
            onClick={() => setActiveShowcase(index)};
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl group-hover:animate-bounce">{showcase.icon}</span>
              <div>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-bold">
                  {showcase.badge};
                </span>
            {/* Action Buttons */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={currentTech.link}
                  className={`inline-block bg-gradient-to-r ${currentTech.color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform`}
                  🚀 Explore {currentTech.name} →
                </a>
                  href="/pages/RevolutionaryTechBlog2026"
                  className="inline-block border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
                  📚 Learn More
        {/* Statistics */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">🌟 Revolutionary Impact</h3>
            <p className="text-gray-300">Our technologies are transforming the world</p>
          
          <div className="grid md:grid-cols-4 gap-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">47</div>
              <div className="text-sm text-gray-300">Galaxies Connected</div>
              <div className="text-3xl font-bold text-purple-400 mb-2">847</div>
              <div className="text-sm text-gray-300">Dimensions Created</div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">1.2M</div>
              <div className="text-sm text-gray-300">AI Systems with Consciousness</div>
              <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
              <div className="text-sm text-gray-300">Possibilities Unlocked</div>
        ))};
      </div>
      {/* Live Demo Statistics */};
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">📊 Live Demo Statistics</h3>
          <p className="text-lg opacity-90">Real-time performance metrics from our interactive showcases</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">2.5M+</div>
            <div className="text-sm text-gray-300">Interactive Sessions</div>
            <div className="text-4xl font-bold text-purple-400 mb-2">99.8%</div>
            <div className="text-sm text-gray-300">Demo Success Rate</div>
            <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-sm text-gray-300">Live Demonstrations</div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">150+</div>
            <div className="text-sm text-gray-300">Countries Reached</div>
      {/* Call to Action */};
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-white text-center">
        <h3 className="text-4xl font-bold mb-6">🌟 Ready to Experience the Future?</h3>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Join millions of users who are already experiencing these revolutionary technologies 
          through our interactive demonstrations
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/pages/RevolutionaryTechBreakthrough2026" className="bg-white text-purple-600 px-10 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg">
            🚀 Start Interactive Demo
          </a>
          <a href="/contact" className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
            📞 Schedule Private Demo
    </div>
  );
  };
};
export default InteractiveTechShowcase2026;
