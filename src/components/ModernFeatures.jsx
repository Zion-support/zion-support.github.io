import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Modern Features Component
const ModernFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('modern-features');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Real-time insights and predictive analytics powered by advanced AI algorithms",
      icon: "📊",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Blockchain Integration",
      description: "Secure, decentralized solutions with smart contract capabilities",
      icon: "⛓️",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation computing power for complex problem solving",
      icon: "⚛️",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Edge Computing",
      description: "Ultra-low latency processing at the network edge",
      icon: "🌐",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "IoT Solutions",
      description: "Connected devices and smart infrastructure management",
      icon: "🏠",
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "AR/VR Development",
      description: "Immersive experiences and virtual reality applications",
      icon: "🥽",
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section id="modern-features" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Next-Generation
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of cutting-edge technologies to transform your business
            and stay ahead of the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative group cursor-pointer`}
              onClick={() => setActiveFeature(index)}
            >
              <div className={`bg-gradient-to-br ${feature.color} p-8 rounded-2xl shadow-2xl transform transition-all duration-300 ${
                activeFeature === index ? 'ring-4 ring-white ring-opacity-50' : ''
              }`}>
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-100 text-lg leading-relaxed">{feature.description}</p>
                
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Feature Showcase */}
        <AnimatePresence>
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                {features[activeFeature].description}
              </p>
              
              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ModernFeatures;