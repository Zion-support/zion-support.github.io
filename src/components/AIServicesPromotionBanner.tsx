import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { X, ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';

const AIServicesPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ai-services-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ai-services-banner-dismissed', 'true');
  };

  const handleClick = () => {
    // Scroll to the AI Services section
    const element = document.getElementById('ai-services-showcase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-pulse opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-2 left-4 animate-bounce">
        <Sparkles className="h-4 w-4 text-yellow-300" />
      </div>
      <div className="absolute top-6 right-8 animate-pulse">
        <Zap className="h-5 w-5 text-blue-200" />
      </div>
      <div className="absolute bottom-2 left-12 animate-bounce delay-300">
        <TrendingUp className="h-4 w-4 text-green-300" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Badge className="bg-white text-blue-600 font-semibold animate-pulse">
              🚀 NEW 2025
            </Badge>
            <div className="text-sm sm:text-base">
              <span className="font-semibold">Revolutionary AI Services Now Available!</span>
              <span className="hidden sm:inline ml-2 text-blue-100">
                Transform your business with cutting-edge AI solutions
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleClick}
              size="sm" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold group"
            >
              Explore Services
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={handleDismiss}
              size="sm" 
              variant="ghost"
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse"></div>
    </div>
  );
};

export default AIServicesPromotionBanner;