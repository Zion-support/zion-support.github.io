import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AISolutionsComprehensive2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

const AISolutionsComprehensive2025: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🤖 COMPREHENSIVE AI SOLUTIONS • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI Solutions Comprehensive 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover our complete suite of artificial intelligence solutions designed to transform your business and accelerate innovation
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Solutions Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredSolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${solution.color}/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{solution.icon}</div>
                    <div className="text-right">
                      <div className="text-sm opacity-70">{solution.stats.clients} clients</div>
                      <div className="text-sm opacity-70">{solution.stats.satisfaction} satisfaction</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-white/80 mb-4 text-sm">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6 text-sm">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{solution.pricing}</div>
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">📈 Our Impact in Numbers</h2>
              <p className="text-xl opacity-90">
                See how our AI solutions are transforming businesses worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">10,000+</div>
                <div className="text-lg opacity-80">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-lg opacity-80">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">99.2%</div>
                <div className="text-lg opacity-80">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-400 mb-2">$2.5B</div>
                <div className="text-lg opacity-80">Cost Savings</div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            </div>
          </motion.div>
        </div>
      </div>
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
      </div>
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
    </div>
      </motion.div>
    </div>
  );
};

export default AISolutionsComprehensive2025;