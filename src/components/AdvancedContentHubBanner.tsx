import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { X, ArrowRight, BookOpen, Video, Podcast, Star } from 'lucide-react';

const AdvancedContentHubBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('advanced-content-hub-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('advanced-content-hub-banner-dismissed', 'true');
  };

  const handleClick = () => {
    // Scroll to the Advanced Content Hub section
    const element = document.getElementById('advanced-content-hub');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-pulse opacity-75"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      </div>
      
      {/* Floating Content Icons */}
      <div className="absolute top-2 left-8 animate-bounce">
        <BookOpen className="h-4 w-4 text-blue-200" />
      </div>
      <div className="absolute top-6 right-12 animate-pulse">
        <Video className="h-5 w-5 text-purple-200" />
      </div>
      <div className="absolute bottom-2 left-16 animate-bounce delay-300">
        <Podcast className="h-4 w-4 text-pink-200" />
      </div>
      <div className="absolute bottom-4 right-8 animate-pulse delay-500">
        <Star className="h-4 w-4 text-yellow-200" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Badge className="bg-white text-purple-600 font-semibold animate-pulse border-0">
              📚 PREMIUM CONTENT
            </Badge>
            <div className="text-sm sm:text-base">
              <span className="font-semibold">Advanced Content Hub Now Live!</span>
              <span className="hidden sm:inline ml-2 text-purple-100">
                500+ premium articles, videos, and tutorials
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
              Explore Content Hub
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

      {/* Content Types Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse"></div>
      
      {/* Premium Content Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-pulse"></div>
    </div>
  );
};

export default AdvancedContentHubBanner;