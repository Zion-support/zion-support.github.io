import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star, Clock, Users, Zap } from 'lucide-react';

interface NewContentPromotionBanner2027Props {
  onClose?: () => void;
  className?: string;
}

const NewContentPromotionBanner2027: React.FC<NewContentPromotionBanner2027Props> = ({
  onClose,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const slides = [
    {
      id: 1,
      title: "🚀 New AI Transformation Guide 2027",
      subtitle: "Complete Business Transformation Framework",
      description: "Discover how to leverage AI for 300% efficiency gains and future-proof your business operations.",
      cta: "Read the Guide",
      link: "/ai-business-transformation-2027-guide",
      gradient: "from-blue-600 to-purple-600",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 2,
      title: "🔒 Quantum-Safe Security Solutions",
      subtitle: "Future-Proof Your Digital Assets",
      description: "Military-grade quantum-resistant security implementation for the post-quantum era.",
      cta: "Learn More",
      link: "/quantum-security-implementation",
      gradient: "from-emerald-600 to-teal-600",
      icon: <Star className="w-6 h-6" />
    },
    {
      id: 3,
      title: "⚡ Enterprise AI Automation Suite",
      subtitle: "Transform Operations with Intelligent Automation",
      description: "Reduce manual processes by 80% with our comprehensive AI-powered automation platform.",
      cta: "Explore Suite",
      link: "/ai-automation-suite",
      gradient: "from-orange-600 to-red-600",
      icon: <Users className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose?.(), 300);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-50 ${className}`}
        >
          <div className={`bg-gradient-to-r ${currentSlideData.gradient} text-white shadow-2xl`}>
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      {currentSlideData.icon}
                    </div>
                    <div>
                      <motion.h3
                        key={currentSlide}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-lg font-bold"
                      >
                        {currentSlideData.title}
                      </motion.h3>
                      <motion.p
                        key={`subtitle-${currentSlide}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-sm opacity-90"
                      >
                        {currentSlideData.subtitle}
                      </motion.p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block flex-1 max-w-md">
                    <motion.p
                      key={`desc-${currentSlide}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="text-sm opacity-95"
                    >
                      {currentSlideData.description}
                    </motion.p>
                  </div>

                  <motion.a
                    key={`cta-${currentSlide}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    href={currentSlideData.link}
                    className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span>{currentSlideData.cta}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Slide indicators */}
                  <div className="flex space-x-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-white' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleClose}
                    className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Mobile description */}
              <div className="md:hidden mt-3">
                <motion.p
                  key={`mobile-desc-${currentSlide}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm opacity-95"
                >
                  {currentSlideData.description}
                </motion.p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-white/20">
              <motion.div
                key={currentSlide}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-white"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner2027;