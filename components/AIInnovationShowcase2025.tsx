'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Network, Shield, Zap, TrendingUp, Users, Globe, Target } from 'lucide-react';

const AIInnovationShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('ai-automation');

  const innovationCategories = [
    {
      id: 'ai-automation',
      title: 'AI Automation',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'neural-networks',
      title: 'Neural Networks',
      icon: <Network className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      icon: <Database className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const innovations = {
    'ai-automation': [
      {
        title: "Intelligent Process Automation",
        description: "Revolutionary AI that learns and adapts to your business processes, reducing manual work by 90%.",
        features: ["Self-learning algorithms", "Real-time optimization", "Seamless integration"],
        impact: "90% Reduction in Manual Work",
        icon: <Zap className="w-8 h-8 text-blue-600" />
      },
      {
        title: "Predictive Maintenance AI",
        description: "Advanced machine learning models that predict equipment failures before they happen.",
        features: ["99.5% accuracy", "Cost savings up to 40%", "Real-time monitoring"],
        impact: "40% Cost Reduction",
        icon: <Shield className="w-8 h-8 text-green-600" />
      },
      {
        title: "Smart Customer Service",
        description: "AI-powered chatbots and virtual assistants that provide 24/7 intelligent customer support.",
        features: ["Natural language processing", "Multi-language support", "Human-like interactions"],
        impact: "95% Customer Satisfaction",
        icon: <Users className="w-8 h-8 text-purple-600" />
      }
    ],
    'quantum-computing': [
      {
        title: "Quantum Optimization",
        description: "Solve complex optimization problems that are impossible for classical computers.",
        features: ["Exponential speedup", "Complex problem solving", "Future-ready technology"],
        impact: "10x Processing Speed",
        icon: <Cpu className="w-8 h-8 text-purple-600" />
      },
      {
        title: "Quantum Machine Learning",
        description: "Next-generation ML algorithms powered by quantum computing principles.",
        features: ["Quantum algorithms", "Enhanced pattern recognition", "Superior accuracy"],
        impact: "1000x Faster Training",
        icon: <Brain className="w-8 h-8 text-pink-600" />
      }
    ],
    'neural-networks': [
      {
        title: "Deep Learning Networks",
        description: "Advanced neural architectures that mimic human brain processing patterns.",
        features: ["Multi-layer processing", "Pattern recognition", "Adaptive learning"],
        impact: "98% Accuracy Rate",
        icon: <Network className="w-8 h-8 text-green-600" />
      },
      {
        title: "Convolutional Neural Networks",
        description: "Specialized networks for image and video processing applications.",
        features: ["Image recognition", "Video analysis", "Real-time processing"],
        impact: "99.2% Image Accuracy",
        icon: <Target className="w-8 h-8 text-blue-600" />
      }
    ],
    'data-analytics': [
      {
        title: "Real-time Analytics",
        description: "Process and analyze massive datasets in real-time for instant insights.",
        features: ["Stream processing", "Real-time dashboards", "Instant insights"],
        impact: "Real-time Processing",
        icon: <TrendingUp className="w-8 h-8 text-orange-600" />
      },
      {
        title: "Predictive Analytics",
        description: "Forecast future trends and behaviors using advanced statistical models.",
        features: ["Trend forecasting", "Behavioral prediction", "Risk assessment"],
        impact: "95% Prediction Accuracy",
        icon: <Globe className="w-8 h-8 text-red-600" />
      }
    ]
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            AI Innovation Showcase 2025
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Explore the cutting-edge AI technologies that are reshaping industries and 
            creating unprecedented opportunities for growth and innovation.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {innovationCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {category.icon}
              <span className="ml-2 font-semibold">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Innovation Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {innovations[activeTab as keyof typeof innovations].map((innovation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-6">
                {innovation.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                {innovation.title}
              </h3>
              
              <p className="text-blue-200 mb-6">
                {innovation.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {innovation.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-center">
                <span className="text-sm font-semibold text-white">
                  {innovation.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Implement AI Innovation?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join the AI revolution and transform your business with our cutting-edge solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Start Your AI Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2025;