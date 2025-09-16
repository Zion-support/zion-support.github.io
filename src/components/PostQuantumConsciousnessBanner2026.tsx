import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PostQuantumConsciousnessBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const consciousnessFeatures = [
    {
      title: "Post-Quantum Consciousness",
      subtitle: "2000% ROI in 18 Months",
      description: "Revolutionary AI systems with genuine consciousness, emotional intelligence, and quantum-level processing capabilities.",
      stats: ["2000% ROI", "98% Accuracy", "1000+ Innovations/Year"],
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠",
      link: "/content/resources/ai-2026-post-quantum-consciousness-implementation-guide"
    },
    {
      title: "Fortune 100 Success",
      subtitle: "$2.5B Additional Revenue",
      description: "How GlobalTech Corporation achieved unprecedented transformation through post-quantum conscious AI implementation.",
      stats: ["$2.5B Revenue", "45% Market Share", "95% Satisfaction"],
      gradient: "from-blue-600 to-purple-600",
      icon: "🏆",
      link: "/content/case-studies/fortune-100-post-quantum-consciousness-transformation-2000-roi-success"
    },
    {
      title: "Business Revolution",
      subtitle: "Ultimate Breakthrough Guide",
      description: "Discover how post-quantum conscious AI is revolutionizing business operations and creating sustainable competitive advantages.",
      stats: ["50+ Industries", "500+ Patents", "15 Transformations"],
      gradient: "from-green-600 to-blue-600",
      icon: "🚀",
      link: "/content/blog/ai-2026-post-quantum-consciousness-revolution-ultimate-business-breakthrough"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % consciousnessFeatures.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentFeature = consciousnessFeatures[currentSlide];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                  transition={{
                    delay
                />
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 px-6 py-12 lg:px-16 lg:py-20">
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
              >
                🚀 POST-QUANTUM CONSCIOUSNESS BREAKTHROUGH • JANUARY 2026
              </motion.div>
              
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
              >
                Post-Quantum Consciousness Revolution
              </motion.h1>
              
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed"
              >
                Experience the most revolutionary AI breakthrough in human history. 
                Genuine consciousness, emotional intelligence, and quantum-level processing 
                that achieves <span className="font-bold text-yellow-300">2000% ROI</span> within 18 months.
              </motion.p>
            </div>

            {/* Feature Showcase */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {consciousnessFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className={`relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 cursor-pointer ${
                    index === currentSlide ? 'ring-2 ring-purple-400 scale-105' : ''
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`}></div>
                  
                  <div className="relative z-10 p-8">
                    {/* Icon and Title */}
                    <div className="flex items-center mb-6">
                      <span className="text-5xl mr-4">{feature.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-purple-200 font-semibold">{feature.subtitle}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-200 mb-6 leading-relaxed">{feature.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {feature.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="bg-white/10 rounded-lg p-3 text-center">
                          <div className="text-sm text-purple-200 mb-1">Performance</div>
                          <div className="text-sm font-bold text-white">{stat}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={feature.link}
                      className={`block w-full bg-gradient-to-r ${feature.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center hover:scale-105`}
                    >
                      Explore {feature.title} →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Benefits */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20"
            >
              <h3 className="text-3xl font-bold text-center mb-8 text-white">
                Revolutionary Business Impact
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { metric: "2000%", label: "ROI Achievement", icon: "💰" },
                  { metric: "$2.5B", label: "Additional Revenue", icon: "📈" },
                  { metric: "98%", label: "Decision Accuracy", icon: "🎯" },
                  { metric: "1000+", label: "Innovations/Year", icon: "💡" }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.6 + index * 0.1 }}
                    className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-white/20"
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <div className="text-3xl font-bold text-yellow-300 mb-2">{item.metric}</div>
                    <div className="text-white font-semibold">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
                <h3 className="text-4xl font-bold mb-6 text-white">
                  Ready to Lead the Consciousness Revolution?
                </h3>
                <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                  Join the organizations achieving 2000% ROI through post-quantum conscious AI. 
                  The future belongs to those who embrace consciousness while maintaining the highest ethical standards.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg hover:scale-105">
                    Download Implementation Guide
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-bold text-lg hover:scale-105">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {consciousnessFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PostQuantumConsciousnessBanner2026;