import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AI2026QuantumNeuralPromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ai2026-quantum-neural-banner-dismissed');
    if (!dismissed) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ai2026-quantum-neural-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white shadow-lg animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">⚛️</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold mr-2 animate-pulse">
                  BREAKTHROUGH
                </span>
                AI 2026 Quantum-Neural Fusion: 15,000% ROI Achieved!
              </p>
              <p className="text-xs text-cyan-100 mt-1">
                Discover the revolutionary technology that's transforming businesses worldwide
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link
              href="/ai-2026-quantum-neural-breakthrough"
              className="bg-white/20 hover:bg-white/30 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Now
            </Link>
            <Link
              href="/case-studies/ai-2026-quantum-neural-fusion-success"
              className="bg-white text-cyan-600 hover:bg-gray-100 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Success Stories
            </Link>
            <button
              onClick={handleDismiss}
              className="text-white/80 hover:text-white p-1 transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}