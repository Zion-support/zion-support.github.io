import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      title: "Conscious AI Revolution",
      subtitle: "Experience AI that thinks and feels",
      description: "Our breakthrough artificial intelligence demonstrates self-awareness, emotional intelligence, and ethical decision-making capabilities that are reshaping industries worldwide.",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing", 
        "Ethical reasoning capabilities",
        "Contextual understanding"
      ],
      stats: { performance: "99.9%", accuracy: "98.7%", efficiency: "300%" },
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/AISolutionsComprehensive2025"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      subtitle: "Unprecedented processing power",
      description: "Witness quantum computing solving impossible problems with exponential speed improvements and parallel universe calculations that redefine what's possible.",
      features: [
        "Quantum superposition processing",
        "Exponential speed improvements",
        "Parallel universe calculations",
        "Zero-latency responses"
      ],
      stats: { performance: "∞", accuracy: "99.99%", efficiency: "1000x" },
      image: "⚛️",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2025"
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      subtitle: "Direct brain-computer connection",
      description: "Revolutionary neural interfaces enable seamless communication between human consciousness and digital systems, opening new possibilities for human-AI collaboration.",
      features: [
        "Non-invasive neural reading",
        "Thought-to-action conversion",
        "Emotional state analysis",
        "Memory enhancement"
      ],
      stats: { performance: "99.8%", accuracy: "97.3%", efficiency: "500%" },
      image: "🧬",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/RevolutionaryTechShowcase2025"
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      subtitle: "Processing beyond reality",
      description: "Revolutionary computing technology that operates across multiple dimensions, enabling solutions to problems that exist beyond our current understanding of reality.",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation algorithms",
        "Temporal computing capabilities",
        "Cross-reality synchronization"
      ],
      stats: { performance: "∞", accuracy: "100%", efficiency: "∞" },
      image: "🌌",
      color: "from-orange-600 to-red-600",
      link: "/pages/RevolutionaryTechShowcase2025"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "CTO, FutureTech Corp",
      quote: "Zion Tech Group's AI solutions have transformed our entire operation. The conscious AI not only understands our business needs but anticipates them.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez", 
      title: "CEO, Quantum Solutions Inc",
      quote: "The quantum processing capabilities have solved problems we've been working on for decades. The speed is simply mind-blowing.",
      rating: 5
    },
    {
      name: "Dr. Elena Volkov",
      title: "Research Director, Interdimensional Labs", 
      quote: "Working with interdimensional computing has opened up possibilities we never imagined. It's like having access to infinite resources.",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Revolutionary Technology 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most advanced technologies that are reshaping our world. 
            From conscious AI to interdimensional computing, experience the future today.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.color}/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20`}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-6xl">{slide.image}</div>
                          <div>
                            <h3 className="text-4xl font-bold mb-2">{slide.title}</h3>
                            <p className="text-xl text-purple-200">{slide.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-lg opacity-90 leading-relaxed">
                          {slide.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(slide.stats).map(([key, value], idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold">{value}</div>
                              <div className="text-sm opacity-70 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <motion.a
                            href={slide.link}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg text-center`}
                          >
                            Explore Technology →
                          </motion.a>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
                          >
                            Watch Demo
                          </motion.button>
                        </div>
                      </motion.div>

                      {/* Visual */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                      >
                        <div className="relative w-full h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 overflow-hidden">
                          {/* Animated Background Elements */}
                          <motion.div
                            animate={{
                              y: [0, -20, 0],
                              rotate: [0, 5, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl"
                          >
                            {slide.image}
                          </motion.div>

                          <motion.div
                            animate={{
                              y: [0, 20, 0],
                              rotate: [0, -5, 0]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1
                            }}
                            className="absolute top-16 right-12 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-xl"
                          >
                            ⚡
                          </motion.div>

                          <motion.div
                            animate={{
                              y: [0, -15, 0],
                              x: [0, 10, 0]
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 2
                            }}
                            className="absolute bottom-20 left-16 w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-xl"
                          >
                            🚀
                          </motion.div>

                          {/* Central Hub */}
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [0, 360]
                            }}
                            transition={{
                              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl"
                          >
                            ⚡
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">What Industry Leaders Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-sm opacity-70">{testimonial.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
        >
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            Join thousands of forward-thinking companies already using our revolutionary technologies to transform their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              Download Whitepaper
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;