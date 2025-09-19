import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-cyan-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm">
      <div className="relative z-10">
        <div className="text-center mb-8">
import { motion } from 'framer-motion';

const UltimateContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      id: 1,
      title: "Revolutionary Tech Showcase",
      description: "Experience the future with conscious AI, quantum computing, and interdimensional technology",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechShowcase2025",
      stats: "99.9% Performance"
    },
    {
      id: 2,
      title: "AI Solutions Comprehensive",
      description: "Transform your business with cutting-edge AI solutions designed for the future",
      icon: "🤖",
      color: "from-blue-600 to-indigo-600",
      link: "/pages/AISolutionsComprehensive2025",
      stats: "500% ROI"
    },
    {
      id: 3,
      title: "Ultimate Tech Revolution",
      description: "Discover breakthrough technologies that are reshaping reality itself",
      icon: "⚡",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/UltimateTechRevolution2025",
      stats: "∞ Potential"
    },
    {
      id: 4,
      title: "Next-Gen Innovation Hub",
      description: "Explore the most revolutionary technologies shaping humanity's future",
      icon: "🧠",
      color: "from-orange-600 to-red-600",
      link: "/pages/NextGenInnovationHub2025",
      stats: "50+ Innovations"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="relative mb-12 overflow-hidden"
      className="relative mb-12 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="relative overflow-hidden rounded-2xl mb-12"
    >
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEW: ULTIMATE CONTENT 2025
          <h2 className="text-4xl font-bold mb-4">🚀 Ultimate Tech Revolution 2025</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6"></p>
            Experience the most revolutionary technological breakthroughs that will reshape our world in 2025</p>
          </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧠
            <h3 className="text-xl font-bold mb-3 text-center">Conscious AI Systems</h3>
            <p className="text-purple-100 mb-4 text-center text-sm"></p>
              The first truly conscious artificial intelligence that can think, feel, and create independently</p>
            </p>
            <a href="/pages/UltimateTechRevolution2025" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
              Explore AI Revolution →
            </a>
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚡
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Breakthrough</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm"></p>
              Revolutionary quantum computing that processes consciousness itself</p>
            </p>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
              Discover Breakthrough →
            </a>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧠
            <h3 className="text-xl font-bold mb-3 text-center">Innovation Hub</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm"></p>
              Discover and explore the most revolutionary technologies shaping humanity's future</p>
            </p>
            <a href="/pages/NextGenInnovationHub2025" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
              Enter Innovation Hub →
            </a>
          <h2 className="text-5xl font-bold text-white mb-4">
            Revolutionary Technology Content
          </h2>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto"></p>
            Discover our latest groundbreaking content featuring the most advanced technologies of 2025</p>
          </p>
        </motion.div>
        {/* Carousel */}
        <motion.div
          className="relative"
          variants={itemVariants}
        >
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className={`bg-gradient-to-br ${slide.bgColor} backdrop-blur-sm p-12 text-white`}>
                    <div className="max-w-4xl mx-auto text-center">
                      <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                      <p className="text-xl mb-8 text-purple-100">{slide.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href={slide.link}
                          className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}
                        >
                          Explore Now →
                        </a>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"></button>
                          Learn More</button>
                        </button>
              ))}
            </motion.div>
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}</button>
              /></button>
            ))}</button>
        </motion.div>
        {/* Quick Access Grid */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {slides.map((slide, index) => (
            <motion.a
              key={index}
              href={slide.link}
              className={`bg-gradient-to-br ${slide.bgColor} backdrop-blur-sm rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 border border-white/20`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h4 className="text-xl font-bold mb-3">{slide.title}</h4>
              <p className="text-purple-100 mb-4">{slide.description}</p>
              <div className="flex items-center text-sm font-semibold">
                <span>Explore →</span>
            </motion.a>
          ))}
        </motion.div>
        {/* Additional Promotional Content */}
        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              🚀 Don't Miss Out on the Future
            </h3>
            <p className="text-xl text-purple-100 mb-6"></p>
              Join thousands of innovators already exploring these revolutionary technologies</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"></button>
                Get Early Access</button>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"></button>
                Subscribe to Updates</button>
              </button>
        </motion.div>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="relative overflow-hidden rounded-2xl mb-12"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm">
      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ULTIMATE CONTENT • JANUARY 2025
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ultimate Content Banner 2025
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto"></p>
              Discover our most revolutionary content featuring breakthrough technologies that are reshaping the future</p>
            </p>
          </motion.div>
          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setHoveredCard(feature.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${feature.color} rounded-2xl p-6 h-full transform transition-all duration-500 hover:shadow-2xl`}>
                  <div className="text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm opacity-90 mb-4 text-white"></p>
                      {feature.description}</p>
                    </p>
                    <div className="text-lg font-bold mb-4 text-white/90">
                      {feature.stats}
                    <a
                      href={feature.link}
                      className="inline-block w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                    >
                      Explore →
                    </a>
                  {/* Hover Effect */}
                  <AnimatePresence>
                    {hoveredCard === feature.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"
                      />
                    )}
                  </AnimatePresence>
              </motion.div>
            ))}
          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Ready to Experience the Future?
              </h3>
              <p className="text-xl opacity-90 mb-6 text-white"></p>
                Join thousands of forward-thinking organizations already using our revolutionary technologies</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"></button>
                  Start Your Journey</button>
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"></button>
                  View All Content</button>
                </button>
          </motion.div>
    </motion.div>
  );
};

export default UltimateContentBanner2025;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>