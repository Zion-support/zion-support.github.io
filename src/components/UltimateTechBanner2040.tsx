import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Rocket, Shield, Globe } from 'lucide-react';

const UltimateTechBanner2040: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const features = [
    {
      title: "Consciousness Transfer",
      description: "Achieve digital immortality with perfect consciousness backup",
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
      title: "Reality Manipulation",
      description: "Engineer reality at the quantum level",
      icon: "🌌",
      color: "from-cyan-600 to-blue-600"
      title: "Interdimensional Access",
      description: "Connect with infinite parallel universes",
      icon: "⚡",
      color: "from-emerald-600 to-teal-600"
      title: "Synthetic Universes",
      description: "Create and manage entire virtual realities",
      icon: "🚀",
      color: "from-orange-600 to-red-600"
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('ultimate-tech-banner-2040');
    if (element) {
      observer.observe(element);
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  return (
    <div
      id="ultimate-tech-banner-2040"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 md:p-12 mb-12 border border-purple-500/30"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
          />
        ))}
      </div>
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE BREAKTHROUGH • JANUARY 2040
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Ultimate Tech Revolution 2040
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Experience the most revolutionary technologies that will reshape reality itself. 
            From consciousness transfer to interdimensional computing, witness the future today.
          </p>
        </motion.div>
        {/* Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Side - Feature Display */}
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-8xl mb-6">{features[currentFeature].icon}</div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {features[currentFeature].title}
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                  {features[currentFeature].description}
                </p>
                <div className={`inline-block px-6 py-3 bg-gradient-to-r ${features[currentFeature].color} rounded-full text-white font-semibold`}>
                  Learn More
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Right Side - Feature List */}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
            {features.map((feature, index) => (
                key={index}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  currentFeature === index
                    ? `bg-gradient-to-r ${feature.color} bg-opacity-30 border-white/50`
                    : 'bg-white/5 border-white/20 hover:bg-white/10'
                }`}
                onClick={() => setCurrentFeature(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                <div className="flex items-center">
                  <div className="text-4xl mr-4">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <ArrowRight className={`w-6 h-6 ${
                      currentFeature === index ? 'text-white' : 'text-gray-400'
                    }`} />
            ))}
        </div>
        {/* Statistics */}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">2.3M+</div>
            <div className="text-gray-300 text-sm">Consciousness Transfers</div>
            <div className="text-4xl font-bold text-white mb-2">847K+</div>
            <div className="text-gray-300 text-sm">Reality Modifications</div>
            <div className="text-4xl font-bold text-white mb-2">156</div>
            <div className="text-gray-300 text-sm">Dimension Connections</div>
            <div className="text-4xl font-bold text-white mb-2">12</div>
            <div className="text-gray-300 text-sm">Synthetic Universes</div>
        {/* Call to Action */}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of pioneers who are already using these revolutionary technologies 
              to transform their businesses and lives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center">
                Get Started Today <ArrowRight className="ml-2" />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                Schedule Demo
    </div>
  );
};
export default UltimateTechBanner2040;
