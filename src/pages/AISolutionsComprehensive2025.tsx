import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AISolutionsComprehensive2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Solutions', icon: '🌟' },
    { id: 'enterprise', name: 'Enterprise AI', icon: '🏢' },
    { id: 'consumer', name: 'Consumer AI', icon: '👥' },
    { id: 'research', name: 'Research AI', icon: '🔬' },
    { id: 'creative', name: 'Creative AI', icon: '🎨' }
  ];

  const aiSolutions = [
    {
      id: 1,
      title: "Autonomous Business Operations",
      description: "Complete business automation using AI agents that handle complex decision-making and operations management.",
      category: 'enterprise',
      features: [
        "24/7 autonomous operations",
        "Intelligent decision making",
        "Process optimization",
        "Cost reduction up to 60%"
      ],
      pricing: "Custom",
      icon: "🤖",
      color: "from-blue-600 to-indigo-600",
      stats: { clients: "500+", satisfaction: "99.2%" }
    },
    {
      id: 2,
      title: "AI-Powered Content Creation",
      description: "Revolutionary content generation that creates high-quality, engaging content across all media formats.",
      category: 'creative',
      features: [
        "Multi-format content generation",
        "Brand voice consistency",
        "SEO optimization",
        "Real-time collaboration"
      ],
      pricing: "$299/month",
      icon: "✍️",
      color: "from-purple-600 to-pink-600",
      stats: { clients: "1200+", satisfaction: "98.7%" }
    },
    {
      id: 3,
      title: "Predictive Analytics Engine",
      description: "Advanced machine learning models that predict future trends and behaviors with unprecedented accuracy.",
      category: 'research',
      features: [
        "95%+ prediction accuracy",
        "Real-time data processing",
        "Custom model training",
        "API integration"
      ],
      pricing: "$599/month",
      icon: "📊",
      color: "from-green-600 to-emerald-600",
      stats: { clients: "800+", satisfaction: "99.1%" }
    },
    {
      id: 4,
      title: "Personal AI Assistant",
      description: "Intelligent personal assistant that understands context and provides personalized recommendations.",
      category: 'consumer',
      features: [
        "Natural language processing",
        "Context awareness",
        "Learning capabilities",
        "Privacy-first design"
      ],
      pricing: "$49/month",
      icon: "👤",
      color: "from-orange-600 to-red-600",
      stats: { clients: "5000+", satisfaction: "97.8%" }
    },
    {
      id: 5,
      title: "AI Security Suite",
      description: "Comprehensive security solution using AI to detect and prevent cyber threats in real-time.",
      category: 'enterprise',
      features: [
        "Real-time threat detection",
        "Automated response",
        "Behavioral analysis",
        "Zero-day protection"
      ],
      pricing: "$899/month",
      icon: "🛡️",
      color: "from-red-600 to-pink-600",
      stats: { clients: "300+", satisfaction: "99.5%" }
    },
    {
      id: 6,
      title: "Quantum AI Processing",
      description: "Next-generation AI processing using quantum computing for exponential performance gains.",
      category: 'research',
      features: [
        "Quantum neural networks",
        "Exponential speedup",
        "Complex problem solving",
        "Research collaboration"
      ],
      pricing: "Contact Us",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      stats: { clients: "50+", satisfaction: "100%" }
    }
  ];

  const filteredSolutions = selectedCategory === 'all' 
    ? aiSolutions 
    : aiSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
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
            className="text-center mt-16"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of companies already using our AI solutions to drive innovation and growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AISolutionsComprehensive2025;