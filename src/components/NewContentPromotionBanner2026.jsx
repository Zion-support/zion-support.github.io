import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Clock, Users, Zap } from 'lucide-react';

const NewContentPromotionBanner2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 New AI Healthcare Revolution",
      subtitle: "Transform Patient Care with AI",
      description: "Discover our latest AI-powered healthcare solutions that improve patient outcomes by 40% and accelerate drug discovery by 300%.",
      stats: "40% Better Outcomes",
      color: "from-blue-600 to-purple-600",
      icon: <Zap className="w-8 h-8" />,
      cta: "Explore Healthcare AI"
    },
    {
      id: 2,
      title: "🌱 Sustainable Tech Solutions",
      subtitle: "Building a Greener Future",
      description: "Revolutionary green technology that reduces carbon emissions by 60% while increasing energy efficiency by 80%.",
      stats: "60% Less Emissions",
      color: "from-green-600 to-teal-600",
      icon: <TrendingUp className="w-8 h-8" />,
      cta: "View Green Tech"
    },
    {
      id: 3,
      title: "🏙️ Smart Cities 2026",
      subtitle: "The Urban Revolution",
      description: "AI and IoT technologies transforming cities with 45% less traffic congestion and 50% better air quality.",
      stats: "45% Less Traffic",
      color: "from-orange-600 to-red-600",
      icon: <Users className="w-8 h-8" />,
      cta: "Discover Smart Cities"
    },
    {
      id: 4,
      title: "💰 Fintech Revolution",
      subtitle: "The Future of Money",
      description: "AI-powered financial solutions processing $50B daily with 99.99% accuracy and 90% faster processing.",
      stats: "99.99% Accuracy",
      color: "from-purple-600 to-pink-600",
      icon: <Star className="w-8 h-8" />,
      cta: "Explore Fintech"
    },
    {
      id: 5,
      title: "🎓 Education Breakthrough",
      subtitle: "Personalized Learning Revolution",
      description: "AI-powered education that improves student performance by 65% while reducing learning time by 40%.",
      stats: "65% Better Performance",
      color: "from-indigo-600 to-blue-600",
      icon: <Clock className="w-8 h-8" />,
      cta: "Learn About EdTech"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentContent = promotionalContent[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent" />
      </div>

      {/* Floating particles */}
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
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm mb-4"
          >
            <Star className="w-4 h-4 mr-2" />
            NEW CONTENT 2026
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Revolutionary Tech
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Content & Solutions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover the latest AI innovations, cutting-edge technologies, and revolutionary solutions that are transforming industries worldwide.
          </motion.p>
        </div>

        {/* Main promotional carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${currentContent.color} text-white`}>
                      {currentContent.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{currentContent.title}</h3>
                      <p className="text-gray-300">{currentContent.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                    {currentContent.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                      <TrendingUp className="w-5 h-5" />
                      <span>{currentContent.stats}</span>
                    </div>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                      {currentContent.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <div className={`w-64 h-64 rounded-2xl bg-gradient-to-br ${currentContent.color} flex items-center justify-center text-white text-6xl`}>
                    {currentContent.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {promotionalContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { label: "New Blog Posts", value: "10+", icon: <Clock className="w-6 h-6" /> },
            { label: "AI Services", value: "15+", icon: <Zap className="w-6 h-6" /> },
            { label: "Industries", value: "12+", icon: <Users className="w-6 h-6" /> },
            { label: "Success Rate", value: "99%", icon: <Star className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Explore All Content
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300">
              View Services
            </button>
          </div>
        </motion.div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2026;