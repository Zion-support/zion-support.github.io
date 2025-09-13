import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { X, ArrowRight, TrendingUp, Award, Star } from 'lucide-react';

const SuccessStoriesBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('success-stories-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('success-stories-banner-dismissed', 'true');
  };

  const handleClick = () => {
    // Scroll to the Success Stories section
    const element = document.getElementById('success-stories-showcase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 animate-pulse opacity-75"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      </div>
      
      {/* Floating Success Icons */}
      <div className="absolute top-2 left-8 animate-bounce">
        <Award className="h-4 w-4 text-yellow-300" />
      </div>
      <div className="absolute top-6 right-10 animate-pulse">
        <TrendingUp className="h-5 w-5 text-green-200" />
      </div>
      <div className="absolute bottom-2 left-14 animate-bounce delay-300">
        <Star className="h-4 w-4 text-yellow-200" />
      </div>
      <div className="absolute bottom-4 right-8 animate-pulse delay-500">
        <Award className="h-4 w-4 text-emerald-200" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Badge className="bg-white text-green-600 font-semibold animate-pulse border-0">
              🏆 SUCCESS STORIES
            </Badge>
            <div className="text-sm sm:text-base">
              <span className="font-semibold">See Real Results from Real Companies!</span>
              <span className="hidden sm:inline ml-2 text-green-100">
                300% average ROI achieved by our clients
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleClick}
              size="sm" 
              variant="secondary"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold group"
            >
              View Success Stories
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

      {/* Success Metrics Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-green-400 animate-pulse"></div>
      
      {/* Achievement Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-pulse"></div>
    </div>
  );
};

export default SuccessStoriesBanner;