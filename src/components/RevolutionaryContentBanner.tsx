import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';

interface RevolutionaryContentBannerProps {
  onClose?: () => void;
}

export const RevolutionaryContentBanner: React.FC<RevolutionaryContentBannerProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Show banner after a short delay
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-rotate slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🔥 AI 2025: Generative Intelligence Revolution",
      description: "Complete implementation guide with 60% faster drug discovery and 99.7% fraud detection accuracy",
      href: "/blog/ai-2025-generative-intelligence-revolution-complete-guide",
      icon: Sparkles,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "⚡ Quantum AI Superintelligence Implementation",
      description: "Master guide with 1000x ML training speedup and 99.9% simulation accuracy",
      href: "/resources/quantum-ai-superintelligence-implementation-master-guide-2025",
      icon: Zap,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "💰 Fortune 500: $5.2B ROI Transformation",
      description: "Complete case study of unprecedented quantum AI success in just 18 months",
      href: "/case-studies/fortune-500-quantum-ai-transformation-2025-ultimate-success-story-5-billion-roi",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const currentSlideData = slides[currentSlide];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-cyan-500/30 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              {/* Slide indicators */}
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              {/* Current slide content */}
              <div className="flex items-center space-x-4 flex-1">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${currentSlideData.color}`}>
                  <currentSlideData.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm">
                    {currentSlideData.title}
                  </h3>
                  <p className="text-gray-300 text-xs">
                    {currentSlideData.description}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={currentSlideData.href}
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Close button */}
            {onClose && (
              <button
                onClick={onClose}
                className="ml-4 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RevolutionaryContentBanner;