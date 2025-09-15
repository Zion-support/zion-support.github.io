import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  X, 
  ArrowRight, 
  Star, 
  Zap, 
  Users, 
  Target,
  TrendingUp,
  Clock
} from 'lucide-react';

interface PromoItem {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: React.ComponentType<any>;
  badge?: string;
  color: string;
}

const PromotionalBanner: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalItems: PromoItem[] = [
    {
      id: 'ai-customer-success',
      title: 'AI-Powered Customer Success Platform',
      description: 'Reduce churn by 40% with predictive analytics and automated onboarding',
      link: '/services/ai-powered-customer-success-platform',
      icon: Users,
      badge: 'NEW',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation Suite',
      description: 'Boost conversions by 85% with intelligent targeting and multi-channel campaigns',
      link: '/services/ai-powered-marketing-automation',
      icon: Target,
      badge: 'POPULAR',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'ai-business-intelligence',
      title: 'Advanced AI Business Intelligence',
      description: 'Transform data into actionable insights with 95% prediction accuracy',
      link: '/services/ai-business-intelligence',
      icon: TrendingUp,
      badge: 'FEATURED',
      color: 'from-cyan-400 to-blue-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotionalItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm border-b border-zion-cyan/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${promotionalItems[currentPromo].color}`}>
                    {React.createElement(promotionalItems[currentPromo].icon, { className: 'w-5 h-5 text-white' })}
                  </div>
                  {promotionalItems[currentPromo].badge && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                      {promotionalItems[currentPromo].badge}
                    </span>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg">
                    {promotionalItems[currentPromo].title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {promotionalItems[currentPromo].description}
                  </p>
                </div>
              </div>

              <Link
                to={promotionalItems[currentPromo].link}
                className="hidden sm:flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200 font-semibold"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Promo indicators */}
              <div className="hidden sm:flex items-center space-x-2">
                {promotionalItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPromo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentPromo ? 'bg-zion-cyan w-6' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="sm:hidden mt-3">
            <Link
              to={promotionalItems[currentPromo].link}
              className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200 font-semibold"
            >
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromotionalBanner;