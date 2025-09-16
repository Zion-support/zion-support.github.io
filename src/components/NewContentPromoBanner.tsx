import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, Star, Clock, Users, TrendingUp } from 'lucide-react';

const NewContentPromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 New AI Content Just Dropped!",
      subtitle: "Discover cutting-edge AI solutions and autonomous business operations",
      cta: "Explore Now",
      link: "/blog",
      badge: "Latest",
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "🔒 Quantum Cybersecurity Revolution",
      subtitle: "Unbreakable encryption and next-gen threat detection",
      cta: "Learn More",
      link: "/services/cybersecurity",
      badge: "Hot",
      color: "from-green-600 to-teal-600"
    },
    {
      id: 3,
      title: "🌐 Metaverse Business Solutions",
      subtitle: "Build your digital empire in virtual worlds",
      cta: "Get Started",
      link: "/services/metaverse",
      badge: "Trending",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "⚡ Edge AI at the Source",
      subtitle: "Real-time intelligence for autonomous systems",
      cta: "Discover",
      link: "/services/edge-ai",
      badge: "Innovation",
      color: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentPromo = promotionalContent[currentSlide];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className={`relative overflow-hidden bg-gradient-to-r ${currentPromo.color} text-white`}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white">
                      {currentPromo.badge}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{currentPromo.title}</h3>
                      <p className="text-xs opacity-90">{currentPromo.subtitle}</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-6 text-xs">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>7 New Articles</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>Trending Now</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>10K+ Readers</span>
                  </div>
                </div>

                <motion.a
                  href={currentPromo.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-xs font-medium transition-colors"
                >
                  {currentPromo.cta}
                  <ChevronRight className="w-3 h-3 ml-1" />
                </motion.a>

                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <motion.div
            className="h-full bg-white/60"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            key={currentSlide}
          />
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-2 right-4 flex space-x-1">
          {promotionalContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromoBanner;