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
        cost: "-60%"
      },
      demo: {
        title: "Live AI Agent Demo",
        description: "Watch an AI agent solve complex problems in real-time",
        status: "Active"
      }
    },
    {
      id: 2,
      title: "Quantum-Enhanced AI",
      description: "Revolutionary AI systems powered by quantum computing that process information at exponential speeds.",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      features: [
        "Quantum processing power",
        "Exponential speed improvements",
        "Complex pattern recognition",
        "Quantum machine learning",
        "Advanced optimization",
        "Breakthrough insights"
      ],
      stats: {
        speed: "1000x",
        accuracy: "99.9%",
        capacity: "Unlimited",
        breakthrough: "Daily"
      },
      demo: {
        title: "Quantum AI Processing",
        description: "Experience quantum-enhanced AI solving impossible problems",
        status: "Processing"
      }
    },
    {
      id: 3,
      title: "Neural Interface AI",
      description: "Direct brain-computer interfaces that enable thought-controlled AI systems and enhanced cognitive capabilities.",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      features: [
        "Thought control",
        "Memory enhancement",
        "Cognitive augmentation",
        "Neural feedback",
        "Mind-machine fusion",
        "Telepathic communication"
      ],
      stats: {
        control: "95%",
        enhancement: "10x",
        speed: "Instant",
        accuracy: "99.5%"
      },
      demo: {
        title: "Neural AI Interface",
        description: "Control AI systems with your thoughts",
        status: "Connected"
      }
    },
    {
      id: 4,
      title: "Synthetic Intelligence",
      description: "AI systems with synthetic consciousness that can create, innovate, and think creatively like humans.",
      icon: "🧠",
      gradient: "from-orange-600 to-red-600",
      features: [
        "Synthetic consciousness",
        "Creative thinking",
        "Emotional intelligence",
        "Moral reasoning",
        "Artistic creation",
        "Philosophical insights"
      ],
      stats: {
        creativity: "Unlimited",
        consciousness: "Synthetic",
        innovation: "Continuous",
        empathy: "Human-level"
      },
      demo: {
        title: "Synthetic Mind Demo",
        description: "Interact with AI that thinks and feels",
        status: "Awake"
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

  const currentInnovation = innovations[activeInnovation];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 AI INNOVATION SHOWCASE • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              The AI Revolution is Here
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced AI innovations that are transforming industries, 
              enhancing human capabilities, and reshaping our understanding of intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* Main Innovation Showcase */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Revolutionary AI Innovations</h2>
          <p className="text-xl opacity-90">Discover the cutting edge of artificial intelligence</p>
        </div>

        {/* Innovation Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInnovation}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${currentInnovation.gradient} p-12 rounded-2xl`}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-8xl mb-6">{currentInnovation.icon}</div>
                    <h3 className="text-4xl font-bold mb-6">{currentInnovation.title}</h3>
                    <p className="text-xl opacity-90 mb-8">{currentInnovation.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {currentInnovation.features.map((feature, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                          <span className="text-sm font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                        Try Demo →
                      </button>
                      <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                        Learn More
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    {/* Stats Grid */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-2xl font-bold mb-4 text-center">Performance Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(currentInnovation.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-3xl font-bold text-white">{value}</div>
                            <div className="text-sm opacity-80 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Live Demo Status */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-2xl font-bold mb-4 text-center">Live Demo</h4>
                      <div className="text-center">
                        <div className="text-4xl mb-4">{currentInnovation.icon}</div>
                        <h5 className="text-xl font-bold mb-2">{currentInnovation.demo.title}</h5>
                        <p className="text-sm opacity-90 mb-4">{currentInnovation.demo.description}</p>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-sm font-semibold">{currentInnovation.demo.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={() => setActiveInnovation((prev) => (prev - 1 + innovations.length) % innovations.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setActiveInnovation((prev) => (prev + 1) % innovations.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeInnovation ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* AI Applications Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">AI Applications</h2>
          <p className="text-xl opacity-90">See how our AI innovations are transforming industries</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Healthcare Revolution",
              description: "AI-powered diagnosis, treatment, and drug discovery",
              icon: "🏥",
              color: "from-green-600 to-emerald-600"
            },
            {
              title: "Financial Intelligence",
              description: "Quantum-enhanced trading and risk management",
              icon: "💰",
              color: "from-yellow-600 to-orange-600"
            },
            {
              title: "Smart Cities",
              description: "Autonomous urban management and optimization",
              icon: "🏙️",
              color: "from-blue-600 to-cyan-600"
            },
            {
              title: "Space Exploration",
              description: "AI-guided missions and extraterrestrial research",
              icon: "🚀",
              color: "from-purple-600 to-pink-600"
            },
            {
              title: "Climate Solutions",
              description: "AI-driven environmental protection and sustainability",
              icon: "🌍",
              color: "from-teal-600 to-green-600"
            },
            {
              title: "Education Transformation",
              description: "Personalized learning and knowledge synthesis",
              icon: "🎓",
              color: "from-indigo-600 to-purple-600"
            }
          ].map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${app.color} p-8 rounded-xl hover:scale-105 transition-all duration-300`}
            >
              <div className="text-5xl mb-4 text-center">{app.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{app.title}</h3>
              <p className="text-center opacity-90 mb-6">{app.description}</p>
              <button className="w-full bg-white/20 text-white py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                Explore Application
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform with AI?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the AI revolution and discover how our innovations can transform your business, 
            enhance your capabilities, and unlock new possibilities.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg">
              Start Your AI Journey
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