import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentCarousel2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const contentItems = [
    {
      id: 'ultimate-tech-revolution',
      title: 'Ultimate Tech Revolution 2026',
      subtitle: 'Experience the Future of Technology',
      description: 'Discover breakthrough innovations in conscious AI, quantum-neural fusion, and interdimensional technology that will reshape our world.',
      features: [
        'Conscious AI Systems with Emotional Intelligence',
        'Quantum-Neural Hybrid Computing',
        'Interdimensional Technology Interfaces',
        'Reality Manipulation Engines'
      ],
      stats: {
        'Technologies': '500+',
        'Success Rate': '99.9%',
        'Global Impact': '10B+',
        'Future Potential': '∞'
      },
      link: '/pages/UltimateTechRevolution2026',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-900/90 to-pink-900/90',
      icon: '🚀'
    },
    {
      id: 'ai-business-transformation',
      title: 'AI Business Transformation 2026',
      subtitle: 'Revolutionize Your Business with AI',
      description: 'Transform your business operations with intelligent automation, predictive analytics, and innovation engines that deliver unprecedented results.',
      features: [
        '500% Increase in Operational Efficiency',
        '90% Reduction in Manual Processes',
        '300% Faster Decision Making',
        '99.9% Accuracy in Predictions'
      ],
      stats: {
        'Efficiency Gain': '500%',
        'Cost Reduction': '60%',
        'ROI': '400%',
        'Success Rate': '99.9%'
      },
      link: '/pages/AIBusinessTransformation2026',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'from-blue-900/90 to-cyan-900/90',
      icon: '🤖'
    },
    {
      id: 'quantum-neural-fusion',
      title: 'Quantum-Neural Fusion Technology',
      subtitle: 'Where Quantum Meets Consciousness',
      description: 'Breakthrough technology that combines quantum computing with neural interfaces to create unprecedented computational power and consciousness expansion.',
      features: [
        'Quantum Consciousness Bridge',
        'Neural Quantum Processor',
        'Reality Simulation Engine',
        'Consciousness Transfer Protocol'
      ],
      stats: {
        'Qubits': '1000+',
        'Latency': '1ms',
        'Power': '∞',
        'Accuracy': '99.9%'
      },
      link: '/pages/UltimateTechRevolution2026',
      color: 'from-green-600 to-teal-600',
      bgColor: 'from-green-900/90 to-teal-900/90',
      icon: '⚡'
    },
    {
      id: 'interdimensional-tech',
      title: 'Interdimensional Technology',
      subtitle: 'Beyond the Boundaries of Reality',
      description: 'Revolutionary technology that allows interaction with multiple dimensions and parallel realities, opening infinite possibilities for exploration.',
      features: [
        'Dimensional Gateway System',
        'Reality Anchoring Technology',
        'Consciousness Transfer Protocol',
        'Temporal Navigation'
      ],
      stats: {
        'Dimensions': '∞',
        'Stability': '99.9%',
        'Success': '100%',
        'Safety': 'A+'
      },
      link: '/pages/UltimateTechRevolution2026',
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'from-indigo-900/90 to-purple-900/90',
      icon: '🌌'
    }
  ];

  const testimonials = [
    {
      quote: "This technology has completely transformed our business operations. The AI systems are incredibly intelligent and efficient.",
      author: "Sarah Johnson, CEO",
      company: "Fortune 500 Tech Giant",
      result: "500% efficiency gain"
    },
    {
      quote: "The quantum-neural fusion technology has unlocked possibilities we never thought possible. It's truly revolutionary.",
      author: "Dr. Michael Chen, CTO",
      company: "Global Innovation Lab",
      result: "Infinite possibilities unlocked"
    },
    {
      quote: "Interdimensional technology has opened new frontiers for exploration and discovery. The future is here.",
      author: "Emily Rodriguez, Director",
      company: "Space Exploration Institute",
      result: "New dimensions discovered"
    }
  ];

  if (!isLoaded) return null;

  return (
    <div className="relative overflow-hidden mb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover groundbreaking technologies and innovations that will reshape our world. 
            Interactive demos, real-time statistics, and immersive experiences await.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-6xl">{contentItems[currentSlide].icon}</div>
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-2">
                        {contentItems[currentSlide].title}
                      </h3>
                      <p className="text-2xl text-purple-300">
                        {contentItems[currentSlide].subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-8">
                    {contentItems[currentSlide].description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {contentItems[currentSlide].features.slice(0, 4).map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href={contentItems[currentSlide].link}
                    className={`inline-block bg-gradient-to-r ${contentItems[currentSlide].color} text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    Explore Technology →
                  </a>
                </div>

                {/* Stats and Visual */}
                <div className="space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(contentItems[currentSlide].stats).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl p-6 text-center border border-purple-400/30"
                      >
                        <div className="text-3xl font-bold text-purple-300 mb-1">{value}</div>
                        <div className="text-sm text-gray-400">{key}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Interactive Demo Button */}
                  <div className="bg-gradient-to-r from-gray-700/50 to-purple-700/50 rounded-xl p-6 border border-purple-400/20">
                    <h4 className="text-lg font-bold mb-3 text-purple-300">Interactive Demo</h4>
                    <p className="text-gray-300 mb-4 text-sm">
                      Experience this technology in real-time with our interactive demonstration
                    </p>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Launch Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-purple-500 scale-125' : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20"
            >
              <div className="text-4xl mb-4">💬</div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              <div className="border-t border-purple-400/30 pt-4">
                <p className="font-semibold text-purple-200">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.company}</p>
                <div className="mt-2 text-green-400 font-semibold text-sm">{testimonial.result}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold mb-6 text-white">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators, businesses, and visionaries already experiencing the next generation of technology. 
            The future is here, and it's waiting for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Your Journey
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300">
              View All Technologies
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2026;