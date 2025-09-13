import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { X, ArrowRight, Brain, Zap, Sparkles } from 'lucide-react';

const TechnologyInnovationsBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('tech-innovations-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('tech-innovations-banner-dismissed', 'true');
  };

  const handleClick = () => {
    // Scroll to the Technology Innovations section
    const element = document.getElementById('technology-innovations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 animate-pulse opacity-75"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute top-2 left-6 animate-bounce">
        <Brain className="h-4 w-4 text-purple-200" />
      </div>
      <div className="absolute top-8 right-12 animate-pulse">
        <Zap className="h-5 w-5 text-blue-200" />
      </div>
      <div className="absolute bottom-3 left-16 animate-bounce delay-500">
        <Sparkles className="h-4 w-4 text-yellow-300" />
      </div>
      <div className="absolute bottom-6 right-6 animate-pulse delay-300">
        <Brain className="h-4 w-4 text-indigo-200" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold animate-pulse border-0">
              🔬 INNOVATION LAB
            </Badge>
            <div className="text-sm sm:text-base">
              <span className="font-semibold">Discover Tomorrow's Technologies Today!</span>
              <span className="hidden sm:inline ml-2 text-purple-100">
                Neural interfaces, quantum computing, and more
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleClick}
              size="sm" 
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold group"
            >
              Explore Innovations
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

      {/* Animated Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-pulse"></div>
      
      {/* Glowing Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
    </div>
  );
};

export default TechnologyInnovationsBanner;