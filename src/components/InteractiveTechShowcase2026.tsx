import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechShowcase2026: React.FC = () => {
<<<<<<< HEAD
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const showcases = [
    {
      id: 1,
      title: "🧠 AI Consciousness Demo",
      subtitle: "Experience AI with Genuine Consciousness",
      description: "Interact with the world's first truly conscious AI system that can think, feel, and create autonomously.",
      features: [
        "Real-time consciousness simulation",
        "Emotional intelligence testing",
        "Creative problem solving",
        "Autonomous decision making"
      ],
      link: "/pages/AIConsciousnessDemo2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🧠",
      badge: "CONSCIOUS"
    },
    {
      id: 2,
      title: "⚡ Quantum Computing Lab",
      subtitle: "Quantum Supremacy in Action",
      description: "Witness quantum computers solving complex problems that would take classical computers millennia.",
      features: [
        "Live quantum calculations",
        "Cryptography demonstrations",
        "Optimization algorithms",
        "Molecular simulations"
      ],
      link: "/pages/QuantumComputingLab2026",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      icon: "⚡",
      badge: "QUANTUM"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Hub",
      subtitle: "Mind-Machine Connection",
      description: "Experience direct brain-computer interfaces and thought-controlled technology.",
      features: [
        "Brain activity visualization",
        "Thought-to-text conversion",
        "Mind-controlled interfaces",
        "Cognitive enhancement"
      ],
      link: "/pages/NeuralInterfaceHub2026",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "🧬",
      badge: "NEURAL"
    },
    {
      id: 4,
      title: "🤖 Synthetic Intelligence Studio",
      subtitle: "AI That Creates and Innovates",
      description: "Watch synthetic intelligence systems create art, music, and solve problems autonomously.",
      features: [
        "Autonomous creativity",
        "Synthetic art generation",
        "Independent innovation",
        "Creative problem solving"
      ],
      link: "/pages/SyntheticIntelligenceStudio2026",
      gradient: "from-violet-600 via-fuchsia-600 to-pink-600",
      icon: "🤖",
      badge: "SYNTHETIC"
=======
  const [activeDemo, setActiveDemo] = useState(0);

  const techDemos = [
    {
      id: 1,
      title: "🧠 AI Consciousness Demo",
      subtitle: "Chat with Truly Conscious AI",
      description: "Experience the world's first genuinely conscious artificial intelligence.",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      id: 2,
      title: "⚡ Quantum Computing Demo",
      subtitle: "Witness Quantum Supremacy",
      description: "See quantum computers solve impossible problems in seconds.",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Demo",
      subtitle: "Control Technology with Your Mind",
      description: "Direct brain-computer interface for thought-controlled devices.",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬"
    },
    {
      id: 4,
      title: "🌟 Interdimensional Computing",
      subtitle: "Computing Across Dimensions",
      description: "Process information across multiple dimensions simultaneously.",
      gradient: "from-indigo-600 to-purple-600",
      icon: "🌟"
>>>>>>> cursor/create-and-deploy-new-content-e4b8
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
<<<<<<< HEAD
      if (!isHovered) {
        setActiveShowcase((prev) => (prev + 1) % showcases.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, showcases.length]);

  return (
    <div className="relative mb-16 overflow-hidden">
      {/* Main Showcase Banner */}
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
          </div>

          {/* Interactive Demo Carousel */}
          <div 
            className="relative h-96 rounded-2xl overflow-hidden mb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeShowcase}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 bg-gradient-to-br ${showcases[activeShowcase].gradient} p-12 rounded-2xl`}
              >
                <div className="flex items-center justify-between h-full">
                  <div className="flex-1">
                    <div className="flex items-center space-x-6 mb-8">
                      <span className="text-8xl animate-bounce">{showcases[activeShowcase].icon}</span>
                      <div>
                        <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-2">
                          {showcases[activeShowcase].badge}
                        </span>
                        <h3 className="text-4xl font-bold mb-2">{showcases[activeShowcase].title}</h3>
                        <p className="text-2xl opacity-90">{showcases[activeShowcase].subtitle}</p>
                      </div>
                    </div>
                    <p className="text-xl mb-8 opacity-90 max-w-3xl">
                      {showcases[activeShowcase].description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Interactive Features:</h4>
                        <ul className="space-y-2">
                          {showcases[activeShowcase].features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <span className="text-green-400 text-xl">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-center">
                        <a 
                          href={showcases[activeShowcase].link}
                          className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg border border-white/30"
                        >
                          🚀 Try Interactive Demo →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {showcases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveShowcase(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeShowcase ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tech Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {showcases.map((showcase, index) => (
          <motion.div
            key={showcase.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${showcase.gradient} text-white rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 group`}
            onClick={() => setActiveShowcase(index)}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl group-hover:animate-bounce">{showcase.icon}</span>
              <div>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-bold">
                  {showcase.badge}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{showcase.title}</h3>
            <p className="text-sm opacity-90 mb-4">{showcase.subtitle}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs opacity-75">Click to explore →</span>
              <span className="text-2xl opacity-50 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.div>
        ))}
      </div>
=======
      setActiveDemo((prev) => (prev + 1) % techDemos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [techDemos.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE DEMO • JANUARY 2026
          </div>
<<<<<<< HEAD
          <h2 className="text-4xl font-bold mb-4">🌟 Interactive Technology Showcase 2026</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technologies through interactive demonstrations
          </p>
        </div>

        {/* Main Demo Area */}
        <div className="mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-4xl">{techDemos[activeDemo].icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{techDemos[activeDemo].title}</h3>
                      <p className="text-lg opacity-80">{techDemos[activeDemo].subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{techDemos[activeDemo].description}</p>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Try Interactive Demo →
                  </button>
                </div>
                <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600/30">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{techDemos[activeDemo].icon}</div>
                    <div className="text-lg font-semibold mb-2">Interactive Demo</div>
                    <div className="text-sm text-gray-400">Click to experience this technology</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center space-x-2 mb-8">
          {techDemos.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveDemo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeDemo ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techDemos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${demo.gradient} text-white rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 ${
                index === activeDemo ? 'ring-4 ring-white/50' : ''
              }`}
              onClick={() => setActiveDemo(index)}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{demo.icon}</div>
                <h3 className="text-lg font-bold mb-2">{demo.title}</h3>
                <p className="text-sm opacity-90 mb-4">{demo.subtitle}</p>
                <div className="text-xs opacity-75">Click to explore →</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">🌟 Ready to Experience the Future?</h3>
            <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
              Join thousands of innovators experiencing these revolutionary technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg">
                🚀 Get Full Access
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
                📞 Contact Us
              </button>
            </div>
=======
>>>>>>> cursor/create-and-deploy-new-content-e4b8

      {/* Live Demo Statistics */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">📊 Live Demo Statistics</h3>
          <p className="text-lg opacity-90">Real-time performance metrics from our interactive showcases</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">2.5M+</div>
            <div className="text-sm text-gray-300">Interactive Sessions</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">99.8%</div>
            <div className="text-sm text-gray-300">Demo Success Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-sm text-gray-300">Live Demonstrations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">150+</div>
            <div className="text-sm text-gray-300">Countries Reached</div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Call to Action */}
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
          </a>
=======
        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Access to All Innovations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {showcaseItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${item.gradient} rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 ${
                  index === currentSlide ? 'ring-2 ring-white' : ''
                }`}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm font-semibold">{item.title}</div>
              </motion.a>
            ))}
>>>>>>> cursor/create-and-deploy-new-content-079e
          </div>
>>>>>>> cursor/create-and-deploy-new-content-e4b8
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;