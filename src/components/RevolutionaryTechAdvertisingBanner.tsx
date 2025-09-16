import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechAdvertisingBanner: React.FC = () => {
  const features = [
    {
      icon: "🚀",
      title: "AI-Powered Automation",
      description: "Transform your business with intelligent automation systems",
      cta: "Learn More"
    },
    {
      icon: "⚡",
      title: "Quantum Computing Solutions",
      description: "Unlock unprecedented computational power for complex problems",
      cta: "Explore Now"
    },
    {
      icon: "🧠",
      title: "Neural Interface Technology",
      description: "Direct brain-computer communication for seamless interaction",
      cta: "Discover"
    },
    {
      icon: "🧬",
      title: "Biotech AI Revolution",
      description: "Personalized medicine powered by artificial intelligence",
      cta: "Get Started"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY SOLUTIONS • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Transform Your Future Today
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Join thousands of forward-thinking companies already leveraging our revolutionary technology solutions. 
            Experience unprecedented growth, efficiency, and innovation with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation →
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              View Case Studies
            </button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{feature.description}</p>
              <button className="text-purple-400 hover:text-white transition-colors font-semibold text-sm">
                {feature.cta} →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Join Our Success Stories</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See how leading companies are transforming their operations with our revolutionary technology solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500%</div>
              <div className="text-gray-300">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support Available</div>
            </div>
          </div>
        </motion.div>

        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-6 text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-2xl animate-pulse">⚡</span>
            <h4 className="text-2xl font-bold">Limited Time Offer</h4>
            <span className="text-2xl animate-pulse">⚡</span>
          </div>
          <p className="text-lg mb-4">
            Get 50% off your first month of revolutionary technology solutions. 
            Transform your business before your competitors do!
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Claim Your Discount Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechAdvertisingBanner;