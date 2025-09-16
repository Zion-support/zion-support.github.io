import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const bannerContent = [
    {
      title: "Revolutionary Tech Showcase 2026",
      description: "Experience the convergence of AI consciousness, quantum supremacy, and neural interfaces",
      icon: "🌟",
      color: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/RevolutionaryTechShowcase2026",
      features: ["AI Consciousness", "Quantum Supremacy", "Neural Interfaces"]
    },
    {
      title: "Advanced AI Solutions 2026",
      description: "Discover revolutionary AI systems that transcend traditional artificial intelligence",
      icon: "🤖",
      color: "from-blue-600 via-purple-600 to-pink-600",
      link: "/pages/AdvancedAISolutions2026",
      features: ["Autonomous Agents", "Conscious AI", "Quantum AI"]
    },
    {
      title: "Quantum Computing Solutions 2026",
      description: "Breakthrough quantum processors solving impossible problems in real-time",
      icon: "⚡",
      color: "from-cyan-600 via-blue-600 to-purple-600",
      link: "/pages/QuantumComputingSolutions2026",
      features: ["1000+ Qubits", "Quantum Supremacy", "Unbreakable Security"]
    }
  ];

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
    <motion.div
      className="relative overflow-hidden mb-12"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Main Banner */}
      <motion.div
        className={`bg-gradient-to-r ${bannerContent[currentSlide].color} rounded-2xl p-8 text-white text-center relative overflow-hidden`}
        key={currentSlide}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <motion.div
            className="flex items-center justify-center space-x-3 mb-4"
            variants={itemVariants}
          >
            <span className="text-4xl animate-bounce">{bannerContent[currentSlide].icon}</span>
            <h3 className="text-3xl font-bold">REVOLUTIONARY CONTENT 2026</h3>
            <span className="text-4xl animate-bounce">{bannerContent[currentSlide].icon}</span>
          </motion.div>
          
          <motion.h2 className="text-4xl font-bold mb-4" variants={itemVariants}>
            {bannerContent[currentSlide].title}
          </motion.h2>
          
          <motion.p className="text-2xl opacity-95 mb-8 max-w-5xl mx-auto" variants={itemVariants}>
            {bannerContent[currentSlide].description}
          </motion.p>
          
          <motion.div className="flex flex-wrap justify-center gap-4 mb-8" variants={itemVariants}>
            {bannerContent[currentSlide].features.map((feature, index) => (
              <span
                key={index}
                className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30"
              >
                {feature}
              </span>
            ))}
          </motion.div>
          
          <motion.div className="flex flex-wrap justify-center gap-4" variants={itemVariants}>
            <a
              href={bannerContent[currentSlide].link}
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl"
            >
              Explore {bannerContent[currentSlide].title.split(' ')[0]} →
            </a>
            <a
              href="/pages/RevolutionaryTechShowcase2026"
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg border border-white/30"
            >
              View All Content
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Slide Indicators */}
      <motion.div className="flex justify-center space-x-2 mt-6" variants={itemVariants}>
        {bannerContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </motion.div>

      {/* Quick Access Grid */}
      <motion.div className="mt-12" variants={itemVariants}>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Access to Revolutionary Content</h3>
          <p className="text-gray-600">Explore our latest breakthrough technologies and innovations</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bannerContent.map((content, index) => (
            <motion.a
              key={index}
              href={content.link}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-br ${content.color} text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {content.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{content.title}</h4>
                <p className="text-sm opacity-90 mb-4">{content.description}</p>
                <div className="flex flex-wrap gap-2">
                  {content.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8" variants={itemVariants}>
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Revolutionary Technology Impact</h3>
          <p className="text-gray-600">See how our breakthrough technologies are transforming industries</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "AI Consciousness", value: "100%", description: "Self-aware AI systems" },
            { label: "Quantum Qubits", value: "1000+", description: "Logical qubits achieved" },
            { label: "Neural Interfaces", value: "99.9%", description: "Accuracy in BCI" },
            { label: "Processing Speed", value: "10^15x", description: "Faster than classical" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2026;