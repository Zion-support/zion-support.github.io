import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AISolutionsComprehensive2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Solutions', icon: '🌟' },
    { id: 'enterprise', name: 'Enterprise AI', icon: '🏢' },
    { id: 'automation', name: 'Automation', icon: '🤖' },
    { id: 'analytics', name: 'Analytics', icon: '📊' },
    { id: 'customer', name: 'Customer Experience', icon: '👥' },
    { id: 'security', name: 'AI Security', icon: '🛡️' }
  ];

  const solutions = [
    {
      id: 1,
      title: "AI Enterprise Copilot",
      category: "enterprise",
      description: "Revolutionary AI assistant that understands your business context and provides intelligent recommendations for strategic decisions.",
      features: [
        "Natural language business queries",
        "Real-time market analysis",
        "Strategic decision support",
        "Multi-language support"
      ],
      pricing: "Custom",
      icon: "🧭",
      color: "from-blue-600 to-indigo-600",
      stats: { clients: "500+", satisfaction: "99%", efficiency: "+300%" }
    },
    {
      id: 2,
      title: "Autonomous Process Automation",
      category: "automation",
      description: "Self-learning automation system that continuously optimizes business processes without human intervention.",
      features: [
        "Self-optimizing workflows",
        "Predictive maintenance",
        "Intelligent error handling",
        "Zero-touch operations"
      ],
      pricing: "$2,999/month",
      icon: "⚡",
      color: "from-purple-600 to-pink-600",
      stats: { clients: "1,200+", satisfaction: "98%", efficiency: "+400%" }
    },
    {
      id: 3,
      title: "Predictive Analytics Engine",
      category: "analytics",
      description: "Advanced AI system that predicts future trends and behaviors with 99.7% accuracy using quantum-enhanced algorithms.",
      features: [
        "Quantum-enhanced predictions",
        "Real-time data processing",
        "Multi-dimensional analysis",
        "Automated insights generation"
      ],
      pricing: "$1,499/month",
      icon: "🔮",
      color: "from-cyan-600 to-blue-600",
      stats: { clients: "800+", satisfaction: "97%", efficiency: "+250%" }
    },
    {
      id: 4,
      title: "AI Customer Experience Platform",
      category: "customer",
      description: "Comprehensive platform that creates personalized, empathetic customer interactions using advanced AI and emotional intelligence.",
      features: [
        "Emotional intelligence AI",
        "Personalized interactions",
        "Multi-channel support",
        "Sentiment analysis"
      ],
      pricing: "$999/month",
      icon: "💬",
      color: "from-emerald-600 to-teal-600",
      stats: { clients: "2,000+", satisfaction: "99%", efficiency: "+350%" }
    },
    {
      id: 5,
      title: "Quantum Security Suite",
      category: "security",
      description: "Next-generation security system using quantum cryptography and AI threat detection to protect against advanced cyber attacks.",
      features: [
        "Quantum cryptography",
        "AI threat detection",
        "Zero-trust architecture",
        "Real-time protection"
      ],
      pricing: "$3,499/month",
      icon: "🛡️",
      color: "from-red-600 to-orange-600",
      stats: { clients: "300+", satisfaction: "100%", efficiency: "+500%" }
    },
    {
      id: 6,
      title: "Neural Interface Development Kit",
      category: "enterprise",
      description: "Revolutionary development platform for creating brain-computer interfaces and neural network applications.",
      features: [
        "Neural signal processing",
        "Brain-computer interfaces",
        "Real-time neural feedback",
        "Development tools & APIs"
      ],
      pricing: "$4,999/month",
      icon: "🧠",
      color: "from-violet-600 to-purple-600",
      stats: { clients: "150+", satisfaction: "98%", efficiency: "+600%" }
    }
  ];

  const filteredSolutions = selectedCategory === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🤖 COMPREHENSIVE AI SOLUTIONS • 2025
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI Solutions Comprehensive 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Transform your business with our cutting-edge AI solutions. From enterprise automation 
              to quantum security, we provide everything you need to succeed in the AI revolution.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Solutions
              </button>
              <button className="border border-blue-400 text-blue-200 px-8 py-4 rounded-lg hover:bg-blue-500/20 transition-colors font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
              <span className="text-xl mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-blue-100 mb-6">{solution.description}</p>
                <div className="text-3xl font-bold text-yellow-400 mb-4">{solution.pricing}</div>
              </div>
              
              <div className="space-y-3 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                    <span className="text-blue-200">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-400">{solution.stats.clients}</div>
                  <div className="text-sm text-blue-200">Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">{solution.stats.satisfaction}</div>
                  <div className="text-sm text-blue-200">Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">{solution.stats.efficiency}</div>
                  <div className="text-sm text-blue-200">Efficiency</div>
                </div>
              </div>
              
              <button className={`w-full bg-gradient-to-r ${solution.color} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Get Started →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Success Stories */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-12 border border-blue-400/30"
        >
          <h2 className="text-4xl font-bold text-center mb-12">🏆 Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4">Fortune 500 Company</h3>
              <p className="text-blue-200 mb-4">
                "Our AI Enterprise Copilot increased operational efficiency by 300% and reduced decision-making time by 80%."
              </p>
              <div className="text-yellow-400 font-bold">+300% Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Global Bank</h3>
              <p className="text-blue-200 mb-4">
                "The Quantum Security Suite prevented 99.9% of cyber attacks and saved us millions in potential losses."
              </p>
              <div className="text-green-400 font-bold">99.9% Protection</div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Tech Startup</h3>
              <p className="text-blue-200 mb-4">
                "Neural Interface Development Kit helped us create breakthrough applications that revolutionized our industry."
              </p>
              <div className="text-purple-400 font-bold">+600% Innovation</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our AI solutions to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border border-blue-400 text-blue-200 px-8 py-4 rounded-lg hover:bg-blue-500/20 transition-colors font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AISolutionsComprehensive2025;