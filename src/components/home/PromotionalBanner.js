import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Sparkles, Zap, Shield, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PromotionalBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "🚀 AI Autonomous Operations 2025!",
      subtitle: "Transform your business with 500% revenue growth",
      description: "Read our latest case study: Enterprise AI transformation success",
      cta: "Read Case Study",
      link: "/case-studies/enterprise-ai-transformation-2025-success",
      bgColor: "from-purple-500 to-indigo-600",
      icon: <Brain className="w-6 h-6" />,
      badge: "New Content"
    },
    {
      id: 2,
      title: "⚡ Quantum Neural Networks Breakthrough",
      subtitle: "10,000x performance improvement over classical AI",
      description: "Discover the 2025 quantum-AI fusion revolution",
      cta: "Learn More",
      link: "/blog/quantum-neural-networks-2025-breakthrough",
      bgColor: "from-cyan-500 to-blue-600",
      icon: <Zap className="w-6 h-6" />,
      badge: "Breakthrough"
    },
    {
      id: 3,
      title: "🔒 AI Implementation Master Guide",
      subtitle: "Complete roadmap to enterprise AI success",
      description: "Free comprehensive guide with proven strategies",
      cta: "Download Guide",
      link: "/resources/ai-implementation-master-guide-2025",
      bgColor: "from-red-500 to-pink-600",
      icon: <Shield className="w-6 h-6" />,
      badge: "Free Guide"
    },
    {
      id: 4,
      title: "🌟 AI ROI Calculator 2025",
      subtitle: "Measure your AI investment returns",
      description: "Calculate ROI with our proven framework and formulas",
      cta: "Calculate ROI",
      link: "/resources/ai-roi-calculator-guide-2025",
      bgColor: "from-green-500 to-emerald-600",
      icon: <Sparkles className="w-6 h-6" />,
      badge: "ROI Tool"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-zion-blue-dark to-zion-slate border-b border-zion-cyan/30"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Promotional Content */}
            <motion.div
              key={currentPromo}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4 flex-1"
            >
              <div className={`p-2 rounded-lg bg-gradient-to-r ${promotions[currentPromo].bgColor}`}>
                {promotions[currentPromo].icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-white font-semibold text-lg">
                    {promotions[currentPromo].title}
                  </span>
                  <span className="bg-zion-cyan text-zion-blue-dark text-xs px-2 py-1 rounded-full font-medium">
                    {promotions[currentPromo].badge}
                  </span>
                </div>
                <p className="text-zion-slate-light text-sm">
                  {promotions[currentPromo].subtitle} - {promotions[currentPromo].description}
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              key={`cta-${currentPromo}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to={promotions[currentPromo].link}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-2 rounded-lg font-medium hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-zion-cyan/25"
              >
                <span>{promotions[currentPromo].cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="ml-4 p-2 text-zion-slate-light hover:text-white transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex space-x-1 mt-3">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromo(index)}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  index === currentPromo
                    ? 'bg-zion-cyan'
                    : 'bg-zion-slate/30 hover:bg-zion-slate/50'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromotionalBanner;