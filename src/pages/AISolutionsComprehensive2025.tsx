import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AISolutionsComprehensive2025: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiSolutions = [
    {
      id: 1,
      title: "Autonomous AI Agents",
      description: "Self-managing AI systems that operate independently and make intelligent decisions",
      features: [
        "24/7 autonomous operation",
        "Self-learning capabilities",
        "Multi-task processing",
        "Intelligent decision making"
      ],
      icon: "🤖",
      color: "from-blue-600 to-indigo-600",
      applications: ["Customer Service", "Data Analysis", "Process Automation", "Predictive Analytics"]
    },
    {
      id: 2,
      title: "Generative AI 2.0",
      description: "Next-generation AI that creates original content, designs, and solutions",
      features: [
        "Creative content generation",
        "Original design creation",
        "Code generation",
        "Artistic expression"
      ],
      icon: "🎨",
      color: "from-purple-600 to-pink-600",
      applications: ["Content Creation", "Design", "Software Development", "Marketing"]
    },
    {
      id: 3,
      title: "Edge AI Computing",
      description: "AI processing at the edge for real-time, low-latency intelligent applications",
      features: [
        "Real-time processing",
        "Low latency response",
        "Offline capabilities",
        "Privacy protection"
      ],
      icon: "⚡",
      color: "from-green-600 to-teal-600",
      applications: ["IoT Devices", "Mobile Apps", "Real-time Analytics", "Autonomous Vehicles"]
    },
    {
      id: 4,
      title: "Quantum AI Integration",
      description: "AI systems enhanced with quantum computing for exponential processing power",
      features: [
        "Quantum speed processing",
        "Complex problem solving",
        "Exponential scalability",
        "Advanced optimization"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      applications: ["Scientific Research", "Financial Modeling", "Drug Discovery", "Climate Simulation"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
              variants={itemVariants}
            >
              🤖 COMPREHENSIVE AI SOLUTIONS • 2025
            </motion.div>
            <motion.h1
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              AI Solutions Comprehensive 2025
            </motion.h1>
            <motion.p
              className="text-2xl opacity-90 max-w-4xl mx-auto mb-8"
              variants={itemVariants}
            >
              Transform your business with our comprehensive suite of artificial intelligence solutions
            </motion.p>
            <motion.div
              className="flex justify-center space-x-4"
              variants={itemVariants}
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Solutions
              </button>
              <button className="border border-blue-400 text-blue-200 px-8 py-4 rounded-lg hover:bg-blue-500/20 transition-colors font-semibold text-lg">
                Request Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* AI Solutions Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">🚀 AI Solutions Portfolio</h2>
          <p className="text-xl opacity-80">Comprehensive AI technologies for every business need</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aiSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className={`bg-gradient-to-br ${solution.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedSolution(index)}
            >
              <div className="text-6xl mb-4 text-center">{solution.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{solution.title}</h3>
              <p className="text-sm opacity-80 mb-6 text-center">{solution.description}</p>
              <div className="space-y-2 text-sm">
                <h4 className="font-semibold text-blue-200">Key Features:</h4>
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detailed Solution View */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🎯 {aiSolutions[selectedSolution].title}</h2>
            <p className="text-xl opacity-80">{aiSolutions[selectedSolution].description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Applications</h3>
                <div className="grid grid-cols-2 gap-2">
                  {aiSolutions[selectedSolution].applications.map((app, idx) => (
                    <div key={idx} className="bg-blue-500/20 rounded-lg p-3 text-center">
                      {app}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                <p className="opacity-80 mb-4">Ready-to-deploy AI solutions with comprehensive support and training.</p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4 animate-pulse">{aiSolutions[selectedSolution].icon}</div>
                <h3 className="text-2xl font-bold mb-2">Live Demo</h3>
                <p className="opacity-80">Interactive demonstration of {aiSolutions[selectedSolution].title}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Stories */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">🏆 Success Stories</h2>
          <p className="text-xl opacity-80">Real results from our AI implementations</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-br from-green-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            variants={itemVariants}
          >
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3">300% Efficiency Increase</h3>
            <p className="opacity-80 mb-4">Fortune 500 company achieved 300% efficiency gains with our autonomous AI agents.</p>
            <div className="text-sm opacity-60">Manufacturing Industry</div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            variants={itemVariants}
          >
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3">$2M Cost Savings</h3>
            <p className="opacity-80 mb-4">Financial services firm saved $2M annually through AI-powered process automation.</p>
            <div className="text-sm opacity-60">Financial Services</div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            variants={itemVariants}
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">99.9% Uptime</h3>
            <p className="opacity-80 mb-4">Healthcare provider achieved 99.9% uptime with our edge AI computing solutions.</p>
            <div className="text-sm opacity-60">Healthcare Industry</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">Let our AI solutions revolutionize your operations and drive unprecedented growth</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your AI Journey
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AISolutionsComprehensive2025;