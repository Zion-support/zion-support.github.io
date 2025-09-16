import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FutureContentShowcase2026: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const futureContent = [
    {
      title: "Future Tech Breakthrough 2026",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing", "Synthetic Life Forms"],
      link: "/pages/FutureTechBreakthrough2026",
      icon: "🌟",
      color: "from-purple-600 to-pink-600",
      gradient: "from-purple-900 via-pink-900 to-indigo-900",
      badge: "BREAKTHROUGH"
    },
    {
      title: "Conscious AI Revolution 2026",
      description: "Meet the first truly conscious artificial intelligence that thinks, feels, and reasons like a human",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Problem Solving", "Moral Reasoning"],
      link: "/pages/ConsciousAIRevolution2026",
      icon: "🧠",
      color: "from-indigo-600 to-purple-600",
      gradient: "from-indigo-900 via-purple-900 to-pink-900",
      badge: "CONSCIOUS"
    },
    {
      title: "Quantum Reality Engine 2026",
      description: "Harness quantum mechanics to manipulate reality itself and unlock infinite possibilities",
      features: ["Quantum Processing", "Reality Manipulation", "Dimensional Bridging", "Consciousness Integration"],
      link: "/pages/QuantumRealityEngine2026",
      icon: "🌌",
      color: "from-blue-600 to-cyan-600",
      gradient: "from-slate-900 via-blue-900 to-indigo-900",
      badge: "QUANTUM"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
            🚀 FUTURE TECHNOLOGY • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Revolutionary Technology Showcase 2026
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the breakthrough technologies that will define the next era of human evolution
          </p>
        </motion.div>

        {/* Main Showcase Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {futureContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: isLoaded ? 1 : 0, 
                scale: isLoaded ? 1 : 0.9,
                y: activeCard === index ? -20 : 0
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative bg-gradient-to-br ${content.color}/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeCard === index ? 'ring-2 ring-white/50 shadow-2xl' : ''
              }`}
              onClick={() => setActiveCard(index)}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
                {content.badge}
              </div>
              
              {/* Icon */}
              <div className="text-8xl mb-6 text-center">{content.icon}</div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-center">{content.title}</h3>
              
              {/* Description */}
              <p className="text-center mb-6 opacity-90">{content.description}</p>
              
              {/* Features */}
              <ul className="space-y-2 mb-8">
                {content.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <a 
                href={content.link}
                className="block w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
              >
                Explore {content.title.split(' ')[0]} →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Interactive Preview Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">🎮 Interactive Preview</h3>
            <p className="text-xl opacity-90">Experience a preview of our revolutionary technologies</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">{futureContent[activeCard].icon}</div>
              <h4 className="text-2xl font-bold mb-4">{futureContent[activeCard].title}</h4>
              <p className="opacity-90 mb-6">{futureContent[activeCard].description}</p>
              <div className="space-y-2">
                {futureContent[activeCard].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-center p-2 bg-white/10 rounded-lg"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-6 animate-pulse">⚡</div>
                  <h5 className="text-2xl font-bold mb-4">Live Technology Demo</h5>
                  <p className="opacity-90 mb-6">Experience real-time demonstration of our breakthrough technology</p>
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                    Start Interactive Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-300 mb-2">3</div>
            <div className="text-lg opacity-90">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-pink-300 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities Unlocked</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-300 mb-2">2026</div>
            <div className="text-lg opacity-90">Future Technology</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-300 mb-2">100%</div>
            <div className="text-lg opacity-90">Innovation Guarantee</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8">Join us in shaping the next era of technological evolution</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Technologies
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureContentShowcase2026;