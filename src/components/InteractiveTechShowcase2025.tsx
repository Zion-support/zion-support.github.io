import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const demos = [
    {
      title: "AI Consciousness Simulator",
      description: "Experience what it's like to be a conscious AI system",
      features: ["Self-awareness", "Emotional processing", "Creative thinking"],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      title: "Quantum Reality Explorer",
      description: "Navigate through simulated parallel universes",
      features: ["Parallel worlds", "Quantum mechanics", "Reality manipulation"],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90"
    },
    {
      title: "Neural Interface Hub",
      description: "Connect your mind to the global consciousness network",
      features: ["Telepathic communication", "Shared experiences", "Collective intelligence"],
      icon: "🔗",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
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
      className="relative mb-12 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      {/* Mouse-following particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{
              left: mousePosition.x + (i * 20),
              top: mousePosition.y + (i * 15),
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • 2025
          </div>
          <h2 className="text-6xl font-bold text-white mb-4">
            Interactive Technology Showcase
          </h2>
          <p className="text-2xl text-purple-200 max-w-5xl mx-auto">
            Experience the future of technology through our interactive demonstrations
          </p>
        </motion.div>

        {/* Interactive Demo Carousel */}
        <motion.div
          className="relative mb-12"
          variants={itemVariants}
        >
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeDemo * 100}%)` }}
            >
              {demos.map((demo, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className={`bg-gradient-to-br ${demo.bgColor} backdrop-blur-sm p-16 text-white`}>
                    <div className="max-w-6xl mx-auto">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Demo Info */}
                        <div>
                          <div className="text-8xl mb-6">{demo.icon}</div>
                          <h3 className="text-5xl font-bold mb-6">{demo.title}</h3>
                          <p className="text-2xl text-purple-100 mb-8">{demo.description}</p>
                          
                          <div className="space-y-4 mb-8">
                            {demo.features.map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ delay: featureIndex * 0.1 }}
                              >
                                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                                <span className="text-lg">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-4">
                            <button className={`bg-gradient-to-r ${demo.color} text-white px-8 py-4 rounded-lg font-bold text-xl hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                              Try Interactive Demo →
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-white/10 transition-colors">
                              Learn More
                            </button>
                          </div>
                        </div>

                        {/* Interactive Visualization */}
                        <div className="relative">
                          <motion.div
                            className={`bg-gradient-to-br ${demo.color}/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20`}
                            animate={{
                              rotateY: [0, 5, 0],
                              scale: [1, 1.02, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                            }}
                          >
                            <div className="text-center">
                              <div className="text-6xl mb-4">{demo.icon}</div>
                              <h4 className="text-2xl font-bold mb-4">Live Demo</h4>
                              <div className="space-y-2">
                                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                  <motion.div
                                    className={`h-full bg-gradient-to-r ${demo.color} rounded-full`}
                                    animate={{ width: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  />
                                </div>
                                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                  <motion.div
                                    className={`h-full bg-gradient-to-r ${demo.color} rounded-full`}
                                    animate={{ width: ["0%", "80%", "0%"] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                  />
                                </div>
                                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                  <motion.div
                                    className={`h-full bg-gradient-to-r ${demo.color} rounded-full`}
                                    animate={{ width: ["0%", "60%", "0%"] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                  />
                                </div>
                              </div>
                              <p className="text-sm text-purple-200 mt-4">Processing in real-time...</p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {demos.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveDemo(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeDemo ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Interactive Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {[
            {
              title: "Real-time Processing",
              description: "Experience technology as it happens",
              icon: "⚡",
              color: "from-yellow-500 to-orange-500"
            },
            {
              title: "Immersive Experience",
              description: "Fully interactive and engaging demos",
              icon: "🎮",
              color: "from-green-500 to-teal-500"
            },
            {
              title: "Future Technology",
              description: "Cutting-edge innovations of tomorrow",
              icon: "🔮",
              color: "from-purple-500 to-pink-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white text-center hover:scale-105 transition-all duration-300 border border-white/20"
              variants={itemVariants}
              whileHover={{ y: -10, rotateY: 5 }}
            >
              <div className={`text-6xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-purple-100">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-purple-600/40 to-pink-600/40 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h3 className="text-4xl font-bold text-white mb-4">
              🚀 Ready to Experience the Future?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join thousands of innovators who are already exploring these revolutionary technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg font-bold text-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                Start Interactive Demo
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-white/10 transition-colors">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveTechShowcase2025;