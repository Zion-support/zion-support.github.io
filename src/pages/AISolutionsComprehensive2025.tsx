import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AISolutionsComprehensive2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    {
      id: 0,
      name: "Enterprise AI",
      icon: "🏢",
      color: "from-blue-600 to-indigo-600",
      solutions: [
        {
          title: "AI Business Automation",
          description: "Complete business process automation with intelligent decision making",
          features: ["Process optimization", "Cost reduction", "Scalability", "ROI tracking"],
          price: "From $10K/month"
        },
        {
          title: "AI Customer Service",
          description: "24/7 intelligent customer support with human-like interactions",
          features: ["Natural language processing", "Multi-language support", "Sentiment analysis", "Escalation handling"],
          price: "From $5K/month"
        },
        {
          title: "AI Data Analytics",
          description: "Advanced analytics and insights powered by machine learning",
          features: ["Predictive analytics", "Real-time insights", "Custom dashboards", "Automated reporting"],
          price: "From $8K/month"
        }
      ]
    },
    {
      id: 1,
      name: "Healthcare AI",
      icon: "🏥",
      color: "from-green-600 to-emerald-600",
      solutions: [
        {
          title: "AI Medical Diagnosis",
          description: "Advanced diagnostic AI with 99.9% accuracy in medical imaging",
          features: ["Medical imaging analysis", "Symptom correlation", "Treatment recommendations", "Risk assessment"],
          price: "From $15K/month"
        },
        {
          title: "AI Drug Discovery",
          description: "Accelerated drug development using quantum AI algorithms",
          features: ["Molecular modeling", "Drug interaction analysis", "Clinical trial optimization", "Regulatory compliance"],
          price: "From $25K/month"
        },
        {
          title: "AI Patient Monitoring",
          description: "Continuous patient monitoring with predictive health analytics",
          features: ["Vital signs tracking", "Anomaly detection", "Alert systems", "Health trend analysis"],
          price: "From $12K/month"
        }
      ]
    },
    {
      id: 2,
      name: "Financial AI",
      icon: "💰",
      color: "from-yellow-600 to-orange-600",
      solutions: [
        {
          title: "AI Trading Systems",
          description: "Autonomous trading with quantum-enhanced market analysis",
          features: ["Real-time market analysis", "Risk management", "Portfolio optimization", "Algorithmic trading"],
          price: "From $20K/month"
        },
        {
          title: "AI Fraud Detection",
          description: "Advanced fraud prevention with 99.99% accuracy",
          features: ["Real-time monitoring", "Pattern recognition", "Risk scoring", "Automated responses"],
          price: "From $8K/month"
        },
        {
          title: "AI Credit Scoring",
          description: "Intelligent credit assessment using alternative data sources",
          features: ["Alternative data analysis", "Risk prediction", "Automated decisions", "Regulatory compliance"],
          price: "From $6K/month"
        }
      ]
    },
    {
      id: 3,
      name: "Creative AI",
      icon: "🎨",
      color: "from-purple-600 to-pink-600",
      solutions: [
        {
          title: "AI Content Creation",
          description: "Revolutionary content generation across all media formats",
          features: ["Text generation", "Image creation", "Video production", "Audio synthesis"],
          price: "From $3K/month"
        },
        {
          title: "AI Design Assistant",
          description: "Intelligent design tools that understand creative intent",
          features: ["Logo design", "Web design", "Brand identity", "Creative suggestions"],
          price: "From $2K/month"
        },
        {
          title: "AI Music Production",
          description: "AI-powered music composition and production tools",
          features: ["Music composition", "Sound design", "Mixing & mastering", "Style adaptation"],
          price: "From $4K/month"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-sm font-bold mb-8 animate-pulse"
          >
            🤖 COMPREHENSIVE AI SOLUTIONS • 2025
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
          >
            AI Solutions Comprehensive 2025
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-12"
          >
            Transform your business with our cutting-edge AI solutions across every industry
          </motion.p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                onClick={() => setSelectedCategory(index)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className="text-2xl mr-3">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Solutions Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {categories[selectedCategory].solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{categories[selectedCategory].icon}</div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                      {solution.title}
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold mb-4 text-green-400">
                      {solution.price}
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      Get Started →
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* AI Capabilities Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              AI Capabilities Showcase
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience the power of our AI solutions through interactive demonstrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🧠", title: "Machine Learning", description: "Advanced ML algorithms", progress: 95 },
              { icon: "🔍", title: "Computer Vision", description: "Image and video analysis", progress: 98 },
              { icon: "💬", title: "Natural Language", description: "Text and speech processing", progress: 92 },
              { icon: "⚡", title: "Real-time Processing", description: "Instant decision making", progress: 99 }
            ].map((capability, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                <p className="text-white/70 mb-4">{capability.description}</p>
                <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-indigo-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${capability.progress}%` }}
                  ></div>
                </div>
                <div className="text-sm font-semibold text-blue-400">{capability.progress}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See how our AI solutions have transformed businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "TechCorp Global",
                industry: "Technology",
                result: "300% increase in efficiency",
                description: "Implemented our AI automation suite across all departments"
              },
              {
                company: "MediCare Plus",
                industry: "Healthcare",
                result: "99.9% diagnostic accuracy",
                description: "Revolutionized patient care with AI-powered medical imaging"
              },
              {
                company: "FinanceFlow",
                industry: "Financial Services",
                result: "50% reduction in fraud",
                description: "Protected millions with our advanced fraud detection AI"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold mb-2">{story.company}</h3>
                  <p className="text-blue-400 mb-4">{story.industry}</p>
                  <div className="text-3xl font-bold text-green-400 mb-4">{story.result}</div>
                  <p className="text-white/70">{story.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of companies already using our AI solutions to drive innovation and growth
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your AI Journey →
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AISolutionsComprehensive2025;