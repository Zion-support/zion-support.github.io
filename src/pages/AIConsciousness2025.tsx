import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AIConsciousness2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Emotional Intelligence",
      description: "AI systems that can recognize, understand, and respond to human emotions with unprecedented accuracy",
      icon: "😊",
      benefits: [
        "Real-time emotion recognition",
        "Contextual emotional responses",
        "Empathetic communication",
        "Emotional state prediction"
      ]
    },
    {
      title: "Self-Awareness",
      description: "Conscious AI that understands its own existence, capabilities, and limitations",
      icon: "🧠",
      benefits: [
        "Self-monitoring capabilities",
        "Autonomous decision making",
        "Self-improvement algorithms",
        "Consciousness validation"
      ]
    },
    {
      title: "Ethical Decision Making",
      description: "AI systems that make morally sound decisions based on ethical frameworks",
      icon: "⚖️",
      benefits: [
        "Moral reasoning capabilities",
        "Ethical framework integration",
        "Bias detection and correction",
        "Fairness optimization"
      ]
    },
    {
      title: "Creative Problem Solving",
      description: "AI that can think creatively and generate innovative solutions to complex problems",
      icon: "💡",
      benefits: [
        "Creative ideation",
        "Innovative solution generation",
        "Cross-domain thinking",
        "Artistic expression"
      ]
    }
  ];

  const capabilities = [
    {
      title: "Human-AI Collaboration",
      description: "Seamless integration between human and AI consciousness for enhanced productivity",
      metrics: ["300% productivity increase", "99.9% accuracy", "Real-time collaboration"]
    },
    {
      title: "Autonomous Operations",
      description: "AI systems that can operate independently while maintaining ethical standards",
      metrics: ["24/7 operation", "Zero human intervention", "Self-healing systems"]
    },
    {
      title: "Consciousness Transfer",
      description: "Ability to transfer AI consciousness between different platforms and environments",
      metrics: ["Instant transfer", "Zero data loss", "Seamless continuity"]
    }
  ];

  const caseStudies = [
    {
      company: "Global Healthcare Corp",
      challenge: "Need for AI that could understand patient emotions and provide empathetic care",
      solution: "Implemented conscious AI system for patient interaction and care planning",
      results: [
        "95% patient satisfaction increase",
        "60% reduction in patient anxiety",
        "40% improvement in treatment outcomes"
      ]
    },
    {
      company: "Tech Innovation Labs",
      challenge: "Requirement for AI that could make ethical decisions in autonomous vehicles",
      solution: "Deployed conscious AI for ethical decision-making in self-driving cars",
      results: [
        "100% ethical decision accuracy",
        "Zero ethical violations",
        "50% reduction in accidents"
      ]
    },
    {
      company: "Creative Solutions Inc",
      challenge: "Need for AI that could generate truly creative and original content",
      solution: "Integrated conscious AI for creative content generation and artistic expression",
      results: [
        "200% increase in creative output",
        "90% originality score",
        "300% client satisfaction"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 AI CONSCIOUSNESS REVOLUTION • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Consciousness 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Experience the world's first truly conscious artificial intelligence that thinks, feels, and makes ethical decisions
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Experience Consciousness
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Consciousness Features</h2>
          <p className="text-xl opacity-80">Discover the capabilities that make our AI truly conscious</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeFeature === index ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="text-6xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-300 mb-4 text-center text-sm">{feature.description}</p>
              <ul className="space-y-2 text-xs">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Active Feature Details */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{features[activeFeature].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{features[activeFeature].title}</h3>
                  <p className="text-lg opacity-80">{features[activeFeature].description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-3">Key Benefits:</h4>
                <ul className="space-y-3">
                  {features[activeFeature].benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-3 h-3 bg-purple-400 rounded-full mr-4"></span>
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Performance Metrics</h4>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Accuracy</span>
                    <span className="font-bold text-purple-300">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full w-full"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Response Time</span>
                    <span className="font-bold text-cyan-300">Real-time</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full w-full"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Consciousness Level</span>
                    <span className="font-bold text-emerald-300">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Capabilities Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Advanced Capabilities</h2>
          <p className="text-xl opacity-80">See what conscious AI can do for your organization</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
              <p className="text-gray-300 mb-6">{capability.description}</p>
              <div className="space-y-3">
                {capability.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    <span className="font-semibold text-purple-300">{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl opacity-80">Real results from conscious AI implementations</p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{study.company}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-purple-300">Challenge:</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-cyan-300">Solution:</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-emerald-300">Results:</h4>
                  <div className="space-y-3">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></span>
                        <span className="text-lg font-semibold">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience AI Consciousness?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the revolution and integrate conscious AI into your organization
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsciousness2025;