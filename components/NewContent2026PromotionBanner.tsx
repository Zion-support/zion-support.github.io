import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Sparkles, Zap, Brain, Settings } from 'lucide-react';

const newContentItems = [
  {
    title: 'AI 2025 Breakthrough Revolution',
    description: 'Discover revolutionary AI breakthroughs delivering 15,000% ROI',
    href: '/ai-2025-breakthrough-revolution',
    icon: Sparkles,
    color: 'from-red-500 to-pink-500',
    badge: 'BREAKTHROUGH'
  },
  {
    title: 'AI 2026 Quantum Neural Fusion',
    description: 'Experience quantum-neural fusion with 99.9% accuracy',
    href: '/ai-2026-quantum-neural-fusion',
    icon: Brain,
    color: 'from-purple-500 to-blue-500',
    badge: 'REVOLUTIONARY'
  },
  {
    title: 'Enterprise Automation Mastery 2026',
    description: 'Master automation with 400% productivity increase',
    href: '/enterprise-automation-mastery-2026',
    icon: Settings,
    color: 'from-blue-500 to-cyan-500',
    badge: 'MASTERY'
  }
];

export default function NewContent2026PromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    // Show banner after 2 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Rotate content every 5 seconds
    const rotateTimer = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % newContentItems.length);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(rotateTimer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentContent = newContentItems[currentItem];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-4xl w-full mx-4">
      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-down">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close banner"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${currentContent.color} text-white text-sm font-semibold mr-3 animate-pulse`}>
                  🚀 {currentContent.badge}
                </div>
                <div className="text-sm text-gray-500">NEW CONTENT 2026</div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {currentContent.title}
              </h3>
              
              <p className="text-gray-600 mb-4 max-w-2xl">
                {currentContent.description}
              </p>

              <div className="flex items-center space-x-4">
                <Link
                  href={currentContent.href}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                
                <Link
                  href="/content-showcase"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  View All Content
                </Link>
              </div>
            </div>

            {/* Icon */}
            <div className="ml-6">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentContent.color} text-white`}>
                <currentContent.icon className="w-12 h-12" />
              </div>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex space-x-2 mt-6">
            {newContentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentItem(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentItem 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to content ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50 -z-10"></div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}