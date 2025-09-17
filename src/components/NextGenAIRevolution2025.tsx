import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Globe, Shield, Cpu, Database, Network, Sparkles } from 'lucide-react';
const NextGenAIRevolution2025: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Conscious AI Systems",
      description: "Revolutionary AI with self-awareness and emotional intelligence capabilities",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Quantum-Powered Processing",
      description: "Lightning-fast quantum computing integration for unprecedented AI performance",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Neural Network",
      description: "Worldwide interconnected AI systems sharing knowledge and capabilities",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Advanced Security AI",
      description: "Next-generation cybersecurity powered by self-evolving AI algorithms",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Cpu,
      title: "Edge AI Computing",
      description: "Distributed AI processing at the edge for real-time decision making",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Database,
      title: "Autonomous Data Management",
      description: "Self-managing databases with intelligent optimization and scaling",
      color: "from-teal-500 to-blue-500"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-12 w-12 text-yellow-400 mr-4" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Next-Gen AI Revolution 2025
            </h1>
            <Sparkles className="h-12 w-12 text-yellow-400 ml-4" />
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of artificial intelligence with our groundbreaking suite of 
            next-generation AI technologies that are reshaping industries and transforming the way we work.
          </p>
        </motion.div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(135deg, ${feature.color.split(' ')[1]} 0%, ${feature.color.split(' ')[3]} 100%)` }} />
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already using our AI revolution to 
              achieve unprecedented growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start Your AI Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500K+", label: "AI Models Deployed" },
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "50x", label: "Performance Boost" },
            { number: "24/7", label: "AI Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );

export default NextGenAIRevolution2025;