import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

const AdvancedAITransformation2025: React.FC = () => {
  const features = [
    {
      title: "Autonomous AI Agents",
      description: "Self-managing AI systems that operate independently, make complex decisions, and continuously evolve without human intervention.",
      icon: "🤖",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Intelligent Automation",
      description: "End-to-end business process automation powered by AI that learns, adapts, and optimizes operations in real-time.",
      icon: "⚡",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced AI models that predict future trends, customer behavior, and market changes with unprecedented accuracy.",
      icon: "🔮",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Natural Language Processing",
      description: "Revolutionary NLP capabilities that understand context, emotion, and intent for seamless human-AI interaction.",
      icon: "💬",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Computer Vision",
      description: "Advanced visual recognition systems that can interpret, analyze, and respond to visual data with human-level accuracy.",
      icon: "👁️",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Edge AI Computing",
      description: "Distributed AI processing that brings intelligence to the edge, enabling real-time decision-making and reduced latency.",
      icon: "🌐",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const benefits = [
    {
      metric: "300%",
      description: "Increase in operational efficiency",
      icon: "📈"
    },
    {
      metric: "85%",
      description: "Reduction in manual processes",
      icon: "⚙️"
    },
    {
      metric: "99.9%",
      description: "Accuracy in predictive analytics",
      icon: "🎯"
    },
    {
      metric: "24/7",
      description: "Continuous autonomous operation",
      icon: "🔄"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6">
            🤖 ADVANCED AI TRANSFORMATION 2025
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Transform Your Business with Advanced AI
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the next generation of artificial intelligence with autonomous agents, 
            intelligent automation, and AI systems that think, learn, and evolve independently.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start AI Transformation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-colors">
              View AI Demo
            </button>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className={`text-4xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <button className={`bg-gradient-to-r ${feature.color} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More →
              </button>
            </div>
          ))}
        </motion.div>

        {/* Implementation Process */}
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">AI Transformation Process</h2>
            <p className="text-xl text-gray-300">Our proven methodology for successful AI implementation</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
              <p className="text-gray-300">Comprehensive analysis of your current systems and AI readiness</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-white mb-3">Strategy</h3>
              <p className="text-gray-300">Custom AI strategy tailored to your business objectives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
              <p className="text-gray-300">Deploy AI solutions with minimal disruption to operations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-white mb-3">Optimization</h3>
              <p className="text-gray-300">Continuous monitoring and improvement of AI performance</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our advanced AI solutions to drive growth, 
            efficiency, and innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Get Started Today
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdvancedAITransformation2025;