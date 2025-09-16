import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AISolutionsComprehensive2025: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState('enterprise');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = {
    enterprise: {
      title: "Enterprise AI Solutions",
      description: "Comprehensive AI solutions designed for large-scale enterprise operations",
      features: [
        "Autonomous Business Process Automation",
        "Advanced Predictive Analytics",
        "Intelligent Document Processing",
        "AI-Powered Customer Service",
        "Real-time Decision Support Systems"
      ],
      benefits: [
        "40% reduction in operational costs",
        "300% increase in productivity",
        "99.9% accuracy in predictions",
        "24/7 automated operations",
        "Seamless integration with existing systems"
      ],
      pricing: "Custom Enterprise Pricing",
      icon: "🏢"
    },
    startup: {
      title: "Startup AI Accelerator",
      description: "AI solutions tailored for startups and growing businesses",
      features: [
        "Rapid AI Model Deployment",
        "Scalable Cloud Infrastructure",
        "Pre-built AI Templates",
        "Cost-Effective Solutions",
        "Expert AI Consultation"
      ],
      benefits: [
        "50% faster time to market",
        "80% cost reduction vs custom development",
        "Proven AI frameworks",
        "Flexible scaling options",
        "Dedicated support team"
      ],
      pricing: "Starting at $999/month",
      icon: "🚀"
    },
    research: {
      title: "AI Research & Development",
      description: "Cutting-edge AI research and custom development services",
      features: [
        "Custom AI Model Development",
        "Advanced Research Capabilities",
        "Quantum AI Integration",
        "Neural Network Optimization",
        "Breakthrough Technology Development"
      ],
      benefits: [
        "State-of-the-art AI models",
        "Patent-worthy innovations",
        "Research publication support",
        "Exclusive technology access",
        "Collaborative research partnerships"
      ],
      pricing: "Project-based Pricing",
      icon: "🔬"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <motion.div
        className="relative py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-8 animate-pulse"
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
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-12"
            variants={itemVariants}
          >
            Transform your business with our comprehensive AI solutions. 
            From enterprise automation to cutting-edge research, we have the perfect AI solution for you.
          </motion.p>
        </div>
      </motion.div>

      {/* Solution Tabs */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div
          className="flex justify-center space-x-4 mb-12"
          variants={itemVariants}
        >
          {Object.keys(solutions).map((solution) => (
            <button
              key={solution}
              onClick={() => setSelectedSolution(solution)}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                selectedSolution === solution
                  ? 'bg-white text-blue-900 shadow-lg scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {solutions[solution as keyof typeof solutions].icon} {solutions[solution as keyof typeof solutions].title}
            </button>
          ))}
        </motion.div>

        {/* Selected Solution Details */}
        <motion.div
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          variants={itemVariants}
        >
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">
              {solutions[selectedSolution as keyof typeof solutions].icon}
            </div>
            <h2 className="text-4xl font-bold mb-4">
              {solutions[selectedSolution as keyof typeof solutions].title}
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {solutions[selectedSolution as keyof typeof solutions].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
              {solutions[selectedSolution as keyof typeof solutions].features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Benefits */}
            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-6">Proven Benefits</h3>
              {solutions[selectedSolution as keyof typeof solutions].benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-400/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pricing */}
          <motion.div
            className="text-center mt-12 p-8 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl border border-blue-400/30"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4">Pricing</h3>
            <p className="text-3xl font-bold text-blue-200 mb-4">
              {solutions[selectedSolution as keyof typeof solutions].pricing}
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started Today
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* AI Capabilities Showcase */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-4">Advanced AI Capabilities</h2>
          <p className="text-xl opacity-90">
            Our AI solutions leverage the latest breakthroughs in artificial intelligence
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {[
            {
              title: "Machine Learning",
              description: "Advanced algorithms that learn and improve over time",
              icon: "🧠",
              stats: "99.9% Accuracy"
            },
            {
              title: "Natural Language Processing",
              description: "Understand and generate human-like text and speech",
              icon: "💬",
              stats: "50+ Languages"
            },
            {
              title: "Computer Vision",
              description: "Analyze and understand visual information",
              icon: "👁️",
              stats: "Real-time Processing"
            },
            {
              title: "Predictive Analytics",
              description: "Forecast future trends and outcomes",
              icon: "📊",
              stats: "95% Precision"
            },
            {
              title: "Robotic Process Automation",
              description: "Automate repetitive tasks and workflows",
              icon: "🤖",
              stats: "24/7 Operation"
            },
            {
              title: "Quantum AI",
              description: "Next-generation quantum-enhanced AI processing",
              icon: "⚛️",
              stats: "Exponential Speed"
            }
          ].map((capability, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="text-6xl mb-4 text-center">{capability.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{capability.title}</h3>
              <p className="text-center opacity-90 mb-4">{capability.description}</p>
              <div className="text-center text-blue-200 font-semibold">{capability.stats}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Success Stories */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl opacity-90">
            See how our AI solutions have transformed businesses worldwide
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {[
            {
              company: "TechCorp Global",
              industry: "Technology",
              result: "300% increase in efficiency",
              description: "Implemented our enterprise AI solution and achieved unprecedented operational efficiency."
            },
            {
              company: "FinanceFlow Inc",
              industry: "Financial Services",
              result: "60% cost reduction",
              description: "Automated their entire customer service operation with our AI-powered chatbots."
            },
            {
              company: "HealthTech Solutions",
              industry: "Healthcare",
              result: "99.9% diagnostic accuracy",
              description: "Revolutionized patient diagnosis with our advanced medical AI systems."
            }
          ].map((story, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-2">{story.company}</h3>
              <p className="text-blue-200 mb-4">{story.industry}</p>
              <div className="text-3xl font-bold text-green-400 mb-4">{story.result}</div>
              <p className="opacity-90">{story.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already using our comprehensive AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AISolutionsComprehensive2025;