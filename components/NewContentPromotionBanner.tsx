import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ArrowRight, Star, Clock, Users, TrendingUp, 
  Brain, Atom, Rocket, Shield, CheckCircle, Sparkles 
} from 'lucide-react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'service' | 'webinar';
  href: string;
  featured: boolean;
  stats?: {
    views?: number;
    rating?: number;
    duration?: string;
  };
  icon: React.ComponentType<any>;
  color: string;
}

const NewContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const newContent: ContentItem[] = [
    {
      id: 'ai-quantum-revolution',
      title: 'The AI Quantum Revolution: How 2025 is Transforming Everything',
      description: 'Discover how quantum AI is revolutionizing industries with 85% faster operations and 94% accuracy rates.',
      type: 'blog',
      href: '/blog/ai-quantum-revolution-2025',
      featured: true,
      stats: { views: 12500, rating: 4.9, duration: '8 min read' },
      icon: Brain,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'quantum-ai-healthcare',
      title: 'Quantum AI Healthcare Transformation: 85% Faster Drug Discovery',
      description: 'Case study: How our quantum AI solutions revolutionized healthcare with breakthrough results.',
      type: 'case-study',
      href: '/case-studies/quantum-ai-healthcare-transformation',
      featured: true,
      stats: { views: 8900, rating: 5.0, duration: '12 min read' },
      icon: Atom,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'quantum-ai-consulting',
      title: 'Quantum AI Consulting 2025 - Transform Your Business',
      description: 'Expert quantum AI consulting services to revolutionize your business with cutting-edge solutions.',
      type: 'service',
      href: '/services/quantum-ai-consulting-2025',
      featured: true,
      stats: { views: 15600, rating: 4.8, duration: 'Service' },
      icon: Rocket,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'ai-implementation-masterclass',
      title: 'AI Implementation Masterclass 2025',
      description: 'Join our exclusive webinar and learn how to implement AI solutions that deliver real results.',
      type: 'webinar',
      href: '/webinars/ai-implementation-masterclass-2025',
      featured: false,
      stats: { views: 2300, rating: 4.9, duration: '2 hours' },
      icon: Shield,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const featuredContent = newContent.filter(item => item.featured);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('content-promotion-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate featured content
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('content-promotion-banner-dismissed', 'true');
  };

  const handleContentClick = (href: string) => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'content_promotion_click', {
        event_category: 'engagement',
        event_label: href
      });
    }
  };

  if (isDismissed || !isVisible) return null;

  const currentContent = featuredContent[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-purple-900 to-cyan-900 border-b border-cyan-400/30 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold text-sm">NEW CONTENT</span>
              </div>
              
              <div className="flex-1 max-w-2xl">
                <Link 
                  href={currentContent.href}
                  onClick={() => handleContentClick(currentContent.href)}
                  className="block group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${currentContent.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <currentContent.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors truncate">
                        {currentContent.title}
                      </h3>
                      <p className="text-gray-300 text-xs truncate">
                        {currentContent.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      {currentContent.stats?.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span>{currentContent.stats.rating}</span>
                        </div>
                      )}
                      {currentContent.stats?.views && (
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{currentContent.stats.views.toLocaleString()}</span>
                        </div>
                      )}
                      {currentContent.stats?.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{currentContent.stats.duration}</span>
                        </div>
                      )}
                    </div>
                    
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-2 ml-4">
              <Link href="/content-showcase">
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium px-3 py-1 rounded-lg hover:bg-cyan-400/10 transition-all">
                  View All
                </button>
              </Link>
              
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-700/50 transition-all"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className="mt-2 flex gap-1">
            {featuredContent.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-cyan-400 flex-1' 
                    : 'bg-gray-600 flex-1'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner;