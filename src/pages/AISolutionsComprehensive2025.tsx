import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AISolutionsComprehensive2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('enterprise');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = {
    enterprise: {
      title: "Enterprise AI Solutions",
      description: "Transform your business with comprehensive AI solutions designed for enterprise scale",
      solutions: [
        {
          name: "AI Business Process Automation",
          description: "Automate complex business processes with intelligent AI agents",
          features: ["Workflow Optimization", "Decision Automation", "Process Intelligence"],
          pricing: "Custom"
        },
        {
          name: "AI Customer Service Platform",
          description: "Revolutionary customer service powered by conscious AI",
          features: ["24/7 Support", "Emotional Intelligence", "Multi-language Support"],
          pricing: "$500/month"
        },
        {
          name: "AI Data Analytics Suite",
          description: "Advanced analytics and insights powered by machine learning",
          features: ["Predictive Analytics", "Real-time Insights", "Automated Reporting"],
          pricing: "$1,000/month"
        }
      ]
    },
    healthcare: {
      title: "Healthcare AI Solutions",
      description: "Revolutionary AI applications transforming healthcare delivery and patient outcomes",
      solutions: [
        {
          name: "AI Diagnostic Assistant",
          description: "Advanced diagnostic support with 99.9% accuracy",
          features: ["Medical Imaging Analysis", "Symptom Analysis", "Treatment Recommendations"],
          pricing: "$2,000/month"
        },
        {
          name: "AI Drug Discovery Platform",
          description: "Accelerate drug discovery with quantum-enhanced AI",
          features: ["Molecular Analysis", "Clinical Trial Optimization", "Side Effect Prediction"],
          pricing: "Custom"
        },
        {
          name: "AI Patient Monitoring",
          description: "Continuous patient monitoring with predictive health insights",
          features: ["Vital Signs Analysis", "Risk Assessment", "Early Warning System"],
          pricing: "$800/month"
        }
      ]
    },
    finance: {
      title: "Financial AI Solutions",
      description: "Cutting-edge AI solutions for financial services and investment management",
      solutions: [
        {
          name: "AI Trading Platform",
          description: "Autonomous trading with quantum-enhanced algorithms",
          features: ["Real-time Analysis", "Risk Management", "Portfolio Optimization"],
          pricing: "$3,000/month"
        },
        {
          name: "AI Fraud Detection",
          description: "Advanced fraud detection with 99.99% accuracy",
          features: ["Real-time Monitoring", "Pattern Recognition", "Anomaly Detection"],
          pricing: "$1,500/month"
        },
        {
          name: "AI Credit Scoring",
          description: "Revolutionary credit assessment using alternative data",
          features: ["Alternative Data Analysis", "Real-time Scoring", "Risk Prediction"],
          pricing: "$500/month"
        }
      ]
    }
  };

  const currentCategory = categories[selectedCategory as keyof typeof categories];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-bold mb-6">
            🤖 COMPREHENSIVE AI SOLUTIONS • 2025
          </div>
          <h1 className="text-5xl font-bold mb-6">
            AI Solutions Comprehensive 2025
          </h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover our complete suite of AI solutions designed to transform industries and drive unprecedented business value
          </p>
        </div>
      </motion.div>

      {/* Category Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 py-8"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {category === 'enterprise' && '🏢 Enterprise'}
              {category === 'healthcare' && '🏥 Healthcare'}
              {category === 'finance' && '💰 Finance'}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Solutions Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentCategory.title}</h2>
          <p className="text-xl text-gray-600">{currentCategory.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {currentCategory.solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{solution.name}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-900">Key Features:</h4>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">{solution.pricing}</div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Capabilities Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Advanced AI Capabilities</h2>
            <p className="text-xl opacity-90">Our AI solutions are powered by cutting-edge technology</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">Conscious AI</h3>
              <p className="opacity-90">AI systems with emotional intelligence and self-awareness</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Quantum Processing</h3>
              <p className="opacity-90">Exponential processing power with quantum computing</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🔮</div>
              <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
              <p className="opacity-90">Advanced forecasting and predictive modeling</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Secure & Ethical</h3>
              <p className="opacity-90">Built with security and ethical AI principles</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Success Stories */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-7xl mx-auto px-4 py-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">See how our AI solutions are transforming businesses</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-2">Fortune 500 Company</h3>
            <p className="text-gray-600 mb-4">Increased operational efficiency by 300% with our AI automation solutions</p>
            <div className="text-2xl font-bold text-green-600">+300% Efficiency</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-2">Financial Institution</h3>
            <p className="text-gray-600 mb-4">Reduced fraud by 99.9% and saved $50M annually with our AI detection system</p>
            <div className="text-2xl font-bold text-green-600">$50M Saved</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-bold mb-2">Healthcare Provider</h3>
            <p className="text-gray-600 mb-4">Improved diagnostic accuracy by 40% and reduced patient wait times by 60%</p>
            <div className="text-2xl font-bold text-green-600">+40% Accuracy</div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already using our AI solutions to drive innovation and growth
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AISolutionsComprehensive2025;