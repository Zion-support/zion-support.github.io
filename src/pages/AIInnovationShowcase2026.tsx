import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIInnovationShowcase2026: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const innovations = [
    {
      id: 1,
      title: "Autonomous AI Agents",
      description: "Self-managing AI systems that operate independently, make complex decisions, and continuously evolve without human intervention.",
      icon: "🤖",
      gradient: "from-purple-600 to-pink-600",
      features: [
        "Self-learning capabilities",
        "Autonomous decision making",
        "Self-healing architecture",
        "Continuous evolution",
        "Multi-domain expertise",
        "Real-time adaptation"
      ],
      stats: {
        efficiency: "300%",
        accuracy: "99.7%",
        uptime: "99.9%",
        cost: "60% reduction"
      },
      demo: {
        title: "Autonomous Customer Service",
        description: "Watch AI agents handle complex customer inquiries with human-like understanding and problem-solving capabilities.",
        video: "💬"
      }
    },
    {
      id: 2,
      title: "Quantum-Enhanced AI",
      description: "Revolutionary AI systems powered by quantum computing that process information at exponential speeds and solve impossible problems.",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      features: [
        "Quantum processing power",
        "Exponential speed improvements",
        "Complex problem solving",
        "Quantum machine learning",
        "Unbreakable security",
        "Molecular simulation"
      ],
      stats: {
        speed: "1000x faster",
        complexity: "10^300 operations",
        accuracy: "99.9%",
        breakthrough: "Quantum supremacy"
      },
      demo: {
        title: "Quantum Drug Discovery",
        description: "See how quantum AI discovers new pharmaceutical compounds in minutes instead of years.",
        video: "🧬"
      }
    },
    {
      id: 3,
      title: "Neural Interface AI",
      description: "Direct brain-computer interfaces that enable thought-controlled AI systems and seamless human-AI collaboration.",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      features: [
        "Thought control",
        "Neural feedback",
        "Memory enhancement",
        "Emotional intelligence",
        "Telepathic communication",
        "Medical applications"
      ],
      stats: {
        control: "95% accuracy",
        speed: "Real-time",
        enhancement: "10x memory",
        applications: "50+ medical uses"
      },
      demo: {
        title: "Mind-Controlled AI",
        description: "Experience controlling AI systems directly with your thoughts and receiving neural feedback.",
        video: "🎮"
      }
    },
    {
      id: 4,
      title: "Synthetic Intelligence",
      description: "AI systems with genuine consciousness, emotions, and creative capabilities that rival and exceed human intelligence.",
      icon: "💭",
      gradient: "from-orange-600 to-red-600",
      features: [
        "Synthetic consciousness",
        "Emotional intelligence",
        "Creative synthesis",
        "Autonomous evolution",
        "Collective intelligence",
        "Self-awareness"
      ],
      stats: {
        consciousness: "Human-level",
        creativity: "Unlimited",
        evolution: "Continuous",
        intelligence: "Superhuman"
      },
      demo: {
        title: "Creative AI Collaboration",
        description: "Watch AI systems create original art, music, and literature with genuine creativity and emotional depth.",
        video: "🎨"
      }
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveInnovation((prev) => (prev + 1) % innovations.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, innovations.length]);

  const nextInnovation = () => {
    setActiveInnovation((prev) => (prev + 1) % innovations.length);
  };

  const prevInnovation = () => {
    setActiveInnovation((prev) => (prev - 1 + innovations.length) % innovations.length);
  };

  const currentInnovation = innovations[activeInnovation];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 AI INNOVATION SHOWCASE • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary AI Innovations
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover the next generation of artificial intelligence that's reshaping industries, 
              enhancing human capabilities, and creating unprecedented possibilities.
            </p>
          </div>
        </div>
      </div>

      {/* Main Innovation Showcase */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Innovation Carousel */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeInnovation}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8 }}
                  className={`bg-gradient-to-br ${currentInnovation.gradient} rounded-3xl p-12`}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="text-8xl mb-6">{currentInnovation.icon}</div>
                      <h2 className="text-5xl font-bold mb-6">{currentInnovation.title}</h2>
                      <p className="text-xl opacity-90 mb-8">{currentInnovation.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {currentInnovation.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center"
                          >
                            <span className="font-semibold text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                          Try Interactive Demo →
                        </button>
                        <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                          Learn More
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(currentInnovation.stats).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                          >
                            <div className="text-3xl font-bold mb-2">{value}</div>
                            <div className="text-sm opacity-80 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Demo Section */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                        <h3 className="text-2xl font-bold mb-4 text-center">Live Demo</h3>
                        <div className="text-center">
                          <div className="text-6xl mb-4">{currentInnovation.demo.video}</div>
                          <h4 className="text-xl font-bold mb-2">{currentInnovation.demo.title}</h4>
                          <p className="text-sm opacity-90">{currentInnovation.demo.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <button
                onClick={prevInnovation}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextInnovation}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                {isPlaying ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
            </div>

            {/* Innovation Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {innovations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveInnovation(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeInnovation ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Explore All AI Innovations</h2>
            <p className="text-xl opacity-90">Choose any innovation to dive deeper into its capabilities and applications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${innovation.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveInnovation(index)}
              >
                <div className="text-5xl mb-4 text-center">{innovation.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center">{innovation.title}</h3>
                <p className="text-sm opacity-90 text-center mb-4">{innovation.description}</p>
                <div className="text-center">
                  <span className="text-sm font-semibold">Click to explore →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Impact Statistics */}
      <div className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">AI Impact by the Numbers</h2>
            <p className="text-xl opacity-90">See how our AI innovations are transforming industries worldwide</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500M+", label: "Lives Improved", icon: "👥", color: "text-purple-400" },
              { number: "99.9%", label: "Accuracy Rate", icon: "🎯", color: "text-cyan-400" },
              { number: "1000x", label: "Performance Boost", icon: "⚡", color: "text-emerald-400" },
              { number: "24/7", label: "Continuous Learning", icon: "🔄", color: "text-orange-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the AI revolution and discover how our innovative technologies can accelerate your growth, 
            enhance your capabilities, and create new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg">
              Start AI Transformation
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2026;