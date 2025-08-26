import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, MessageCircle, ArrowRight, Zap } from 'lucide-react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Show CTA after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isMinimized ? (
        <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm p-6 max-w-sm animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Need Help?</h3>
                <p className="text-white/80 text-sm">Get expert advice</p>
              </div>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <p className="text-white/90 text-sm mb-4">
            Ready to transform your business with cutting-edge AI solutions? 
            Our experts are here to help you succeed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-white text-zion-purple px-4 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors group"
            >
              Start Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="flex items-center justify-center gap-2 border border-white/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              <Zap className="w-4 h-4" />
              Explore Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center justify-center gap-4 text-xs text-white/60">
              <span>✓ 24/7 Support</span>
              <span>✓ Free Consultation</span>
              <span>✓ No Obligation</span>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full shadow-2xl border border-white/20 flex items-center justify-center hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
}