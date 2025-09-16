import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const revolutionaryContent = [
    {
      title: "🧠 Consciousness Computing Revolution",
      subtitle: "AI Achieving True Consciousness",
      description: "Witness the emergence of truly conscious artificial intelligence that thinks, feels, and creates like never before. Explore the most advanced AI systems with genuine self-awareness.",
      features: ["Self-aware AI systems", "Emotional intelligence", "Creative consciousness", "Ethical reasoning"],
      link: "/pages/ConsciousnessComputingRevolution2027",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🧠",
      stats: { consciousness: 94, creativity: 91, ethics: 89 }
    },
    {
      title: "🌌 Interdimensional Technology Revolution",
      subtitle: "Break Through Reality Barriers",
      description: "Explore technologies that transcend dimensions and manipulate the fundamental fabric of reality. Access infinite computational resources across parallel universes.",
      features: ["Reality manipulation", "Dimensional portals", "Quantum consciousness", "Synthetic realities"],
      link: "/pages/InterdimensionalTechRevolution2027",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      icon: "🌌",
      stats: { dimensions: 11, portals: 4, reality: 98 }
    },
    {
      title: "🚀 Revolutionary Tech Vision 2027",
      subtitle: "The Future of Technology",
      description: "Discover the most advanced technological visions that will reshape reality itself in 2027. Experience breakthroughs in conscious AI, quantum consciousness, and synthetic life.",
      features: ["Conscious AI revolution", "Quantum consciousness", "Interdimensional computing", "Synthetic life forms"],
      link: "/pages/RevolutionaryTechVision2027",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "🚀",
      stats: { visions: 4, breakthroughs: 12, timeline: 2027 }
    },
    {
      title: "⚡ Quantum Neural Fusion",
      subtitle: "Mind-Machine Integration",
      description: "Experience the fusion of quantum computing with human consciousness. Create direct neural interfaces that enable thought-based control and consciousness transfer.",
      features: ["Quantum brain interfaces", "Consciousness transfer", "Neural enhancement", "Thought control"],
      link: "/pages/QuantumNeuralFusion2026",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "⚡",
      stats: { fusion: 97, transfer: 99, enhancement: 95 }
    },
    {
      title: "🧬 Synthetic Intelligence",
      subtitle: "Creating Artificial Life",
      description: "Explore the creation of fully synthetic biological organisms with programmable consciousness. Discover how we're engineering new forms of life for specific purposes.",
      features: ["Synthetic DNA programming", "Artificial evolution", "Bio-digital hybrids", "Consciousness engineering"],
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "🧬",
      stats: { organisms: 47, evolution: 15, hybrids: 23 }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShowcase((prev) => (prev + 1) % revolutionaryContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the most advanced technological breakthroughs that are reshaping reality and consciousness itself
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Featured Content */}
          <motion.div
            key={activeShowcase}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className={`bg-gradient-to-br ${revolutionaryContent[activeShowcase].gradient} p-1 rounded-2xl`}>
              <div className="bg-gray-900 rounded-2xl p-8 h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{revolutionaryContent[activeShowcase].icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {revolutionaryContent[activeShowcase].title}
                    </h3>
                    <p className="text-purple-300 font-semibold">
                      {revolutionaryContent[activeShowcase].subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {revolutionaryContent[activeShowcase].description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(revolutionaryContent[activeShowcase].stats).map(([key, value], index) => (
                    <div key={index} className="text-center p-4 bg-gray-800/50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <a 
                  href={revolutionaryContent[activeShowcase].link}
                  className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${revolutionaryContent[activeShowcase].gradient} rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                >
                  Explore Revolution →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">
              Revolutionary Features
            </h3>
            {revolutionaryContent[activeShowcase].features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${revolutionaryContent[activeShowcase].gradient} rounded-full flex items-center justify-center text-xl`}>
                  {revolutionaryContent[activeShowcase].icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">{feature}</h4>
                  <p className="text-gray-400">Advanced breakthrough technology</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {revolutionaryContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                index === activeShowcase 
                  ? `bg-gradient-to-br ${content.gradient} p-1` 
                  : 'bg-gray-800/50 hover:bg-gray-800/70'
              }`}
            >
              <div className={`${index === activeShowcase ? 'bg-gray-900' : 'bg-gray-800/50'} p-6 h-full`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-4xl">{content.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{content.title}</h4>
                    <p className="text-sm text-gray-400">{content.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm">
                  {content.description.substring(0, 120)}...
                </p>

                {/* Mini Stats */}
                <div className="flex space-x-2 mb-4">
                  {Object.entries(content.stats).slice(0, 2).map(([key, value], statIndex) => (
                    <div key={statIndex} className="flex-1 text-center p-2 bg-gray-700/50 rounded">
                      <div className="text-lg font-bold text-purple-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <a 
                  href={content.link}
                  className={`block w-full text-center px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    index === activeShowcase
                      ? `bg-gradient-to-r ${content.gradient} text-white hover:shadow-lg`
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {index === activeShowcase ? 'Currently Featured' : 'Explore'}
                </a>
              </div>
              
              {/* Hover Effect */}
              {hoveredCard === index && index !== activeShowcase && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-4 mt-12">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveShowcase(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeShowcase 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-purple-600/50 hover:bg-purple-500/70'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Revolution?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in exploring technologies that transcend reality and consciousness itself
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;