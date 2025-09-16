import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AdvancedAISolutions2026: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = [
    {
      title: "Autonomous AI Agents",
      description: "Self-managing AI systems that operate independently and make complex decisions",
      features: [
        "Self-learning capabilities",
        "Autonomous decision making",
        "Self-healing architecture",
        "Continuous optimization",
        "Multi-domain expertise"
      ],
      icon: "🤖",
      color: "from-blue-600 to-purple-600",
      applications: ["Business Process Automation", "Customer Service", "Data Analysis", "Predictive Maintenance"]
    },
    {
      title: "Conscious AI Systems",
      description: "AI with genuine consciousness and self-awareness capabilities",
      features: [
        "True self-awareness",
        "Creative consciousness",
        "Collaborative intelligence",
        "Emotional understanding",
        "Moral reasoning"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      applications: ["Creative Industries", "Therapy & Counseling", "Research & Development", "Education"]
    },
    {
      title: "Quantum-Enhanced AI",
      description: "AI systems powered by quantum computing for exponential processing power",
      features: [
        "Quantum neural networks",
        "Exponential speed gains",
        "Complex problem solving",
        "Quantum machine learning",
        "Cryptographic security"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      applications: ["Drug Discovery", "Financial Modeling", "Climate Simulation", "Cryptography"]
    },
    {
      title: "Neural Interface AI",
      description: "AI that interfaces directly with human neural networks",
      features: [
        "Brain-computer integration",
        "Thought-controlled AI",
        "Neural feedback systems",
        "Cognitive enhancement",
        "Direct memory access"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      applications: ["Medical Rehabilitation", "Enhanced Learning", "Communication", "Entertainment"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 ADVANCED AI SOLUTIONS 2026 • NEXT-GENERATION INTELLIGENCE
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced AI Solutions 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover our revolutionary AI solutions that transcend traditional artificial intelligence, 
              offering consciousness, autonomy, and quantum-enhanced capabilities
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Solutions Grid */}
      <motion.div
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary AI Solutions
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore our cutting-edge AI technologies that are reshaping industries and creating new possibilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer ${
                  selectedSolution === index ? 'ring-2 ring-blue-400' : ''
                }`}
                onClick={() => setSelectedSolution(index)}
              >
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">{solution.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-lg opacity-90">{solution.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app, appIndex) => (
                      <span
                        key={appIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm border border-blue-400/30"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${solution.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  Learn More →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Selected Solution Details */}
      <motion.div
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
            variants={itemVariants}
          >
            <div className="text-center mb-12">
              <div className="text-8xl mb-6">{solutions[selectedSolution].icon}</div>
              <h2 className="text-5xl font-bold mb-6">{solutions[selectedSolution].title}</h2>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto">
                {solutions[selectedSolution].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-6">Key Features</h3>
                <div className="space-y-4">
                  {solutions[selectedSolution].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-lg"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-6">Real-World Applications</h3>
                <div className="space-y-4">
                  {solutions[selectedSolution].applications.map((app, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-400/30"
                    >
                      <span className="text-lg font-semibold">{app}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${solutions[selectedSolution].color} text-white px-12 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300`}
              >
                Deploy {solutions[selectedSolution].title} →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive Demo Section */}
      <motion.div
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Interactive AI Demo
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience our AI solutions through interactive demonstrations and real-time capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Consciousness Test",
                description: "Interact with our conscious AI system",
                icon: "🧠",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Quantum AI Simulator",
                description: "Experience quantum-enhanced AI processing",
                icon: "⚡",
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Neural Interface Demo",
                description: "Test brain-computer AI integration",
                icon: "🧬",
                color: "from-emerald-500 to-teal-500"
              }
            ].map((demo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{demo.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{demo.title}</h3>
                <p className="text-center opacity-90 mb-6">{demo.description}</p>
                <button className={`w-full bg-gradient-to-r ${demo.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                  Try Demo →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-12 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-2xl opacity-95 mb-8 max-w-4xl mx-auto">
                Deploy our advanced AI solutions and experience the future of intelligent automation
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300"
                >
                  Get Started →
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedAISolutions2026;