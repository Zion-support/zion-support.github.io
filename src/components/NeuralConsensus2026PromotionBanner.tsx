"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NeuralConsensus2026PromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "🧠 Neural Consensus Revolution",
      subtitle: "Multiple AI systems collaborating for unprecedented accuracy",
      description: "Experience 99.2% diagnostic accuracy with collective AI intelligence",
      link: "/blog/ai-2026-neural-consensus-revolution",
      gradient: "from-purple-600 to-indigo-600",
      bgGradient: "from-purple-900/30 to-indigo-900/30"
    },
    {
      title: "🔬 Synthetic Intelligence Breakthrough",
      subtitle: "AI that thinks beyond human cognitive limits",
      description: "Discover novel reasoning patterns that solve impossible problems",
      link: "/blog/ai-2026-synthetic-intelligence-breakthrough",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/30 to-blue-900/30"
    },
    {
      title: "🏥 Healthcare Transformation",
      subtitle: "Revolutionary medical diagnosis and treatment optimization",
      description: "See how Neural Consensus transformed healthcare outcomes",
      link: "/case-studies/neural-consensus-healthcare-transformation",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/30 to-teal-900/30"
    },
    {
      title: "📚 Implementation Guide 2026",
      subtitle: "Complete roadmap to Neural Consensus success",
      description: "Step-by-step guide to implementing collective AI intelligence",
      link: "/guides/neural-consensus-implementation-guide-2026",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/30 to-red-900/30"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [features.length]);

  const stats = [
    { value: "99.2%", label: "Diagnostic Accuracy", color: "text-green-400" },
    { value: "40-60%", label: "Improvement Over Individual AI", color: "text-blue-400" },
    { value: "$1.8B", label: "Annual Cost Savings", color: "text-purple-400" },
    { value: "85%", label: "Rare Disease Detection", color: "text-orange-400" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5 animate-pulse"></div>
      
      {/* Floating Neural Network Nodes */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-cyan-500 rounded-full opacity-30 animate-bounce delay-1000"></div>
      <div className="absolute bottom-32 left-40 w-20 h-20 bg-indigo-500 rounded-full opacity-25 animate-bounce delay-2000"></div>
      <div className="absolute bottom-20 right-20 w-14 h-14 bg-emerald-500 rounded-full opacity-35 animate-bounce delay-3000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6"
          >
            <span className="text-sm font-medium">🚀 NEW 2026 BREAKTHROUGH</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Neural Consensus
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolution 2026
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the future of artificial intelligence where multiple AI systems collaborate, 
            debate, and reach consensus for unprecedented problem-solving capabilities
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Feature Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-r ${features[currentFeature].bgGradient} rounded-2xl p-8 border border-white border-opacity-20`}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-xl opacity-90 mb-4">
                    {features[currentFeature].subtitle}
                  </p>
                  <p className="text-lg opacity-80 mb-6">
                    {features[currentFeature].description}
                  </p>
                  <motion.a
                    href={features[currentFeature].link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${features[currentFeature].gradient} rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Explore Now
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </div>
                
                <div className="flex-1">
                  <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-6xl mb-4">
                        {currentFeature === 0 && "🧠"}
                        {currentFeature === 1 && "🔬"}
                        {currentFeature === 2 && "🏥"}
                        {currentFeature === 3 && "📚"}
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, delay: 0.5 }}
                          />
                        </div>
                        <div className="text-sm opacity-70">
                          Revolutionary AI Technology
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Feature Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentFeature 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the Neural Consensus revolution and unlock the power of collective AI intelligence 
            for unprecedented problem-solving capabilities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/guides/neural-consensus-implementation-guide-2026"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Implementation Guide
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="/case-studies/neural-consensus-healthcare-transformation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Success Stories
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NeuralConsensus2026PromotionBanner;