import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowRight, 
  BookOpen, 
  FileText, 
  TrendingUp,
  Star,
  Zap,
  Brain,
  CheckCircle,
  X,
  Sparkles,
  Target,
  Award
} from "lucide-react";

interface NewContentItem {
  id: string;
  type: 'blog' | 'case-study' | 'resource';
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
  icon: React.ComponentType<any>;
  gradient: string;
  featured: boolean;
  isNew?: boolean;
}

const newContentItems: NewContentItem[] = [
  {
    id: 'neural-architecture-revolution',
    type: 'blog',
    title: 'AI 2026: The Neural Architecture Revolution Reshaping Enterprise Computing',
    description: 'Discover the revolutionary neural architectures that are making advanced AI 300-500% faster and accessible to enterprises.',
    ctaText: 'Read Revolution',
    ctaLink: '/blog/ai-2026-neural-architecture-revolution',
    badge: 'Revolutionary',
    icon: Brain,
    gradient: 'from-purple-500 to-indigo-600',
    featured: true,
    isNew: true
  },
  {
    id: 'fortune-500-transformation',
    type: 'case-study',
    title: 'Fortune 500 Manufacturing: $2.4B Neural Architecture Transformation',
    description: 'See how a global manufacturing giant achieved 380% ROI and $2.4B in business value with neural architecture implementation.',
    ctaText: 'View Case Study',
    ctaLink: '/case-studies/fortune-500-neural-architecture-transformation-2026',
    badge: 'Success Story',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-600',
    featured: true,
    isNew: true
  },
  {
    id: 'neural-architecture-guide',
    type: 'resource',
    title: 'Complete Neural Architecture Implementation Guide 2026',
    description: 'Your comprehensive blueprint for implementing revolutionary neural architectures with proven methodologies and best practices.',
    ctaText: 'Download Guide',
    ctaLink: '/resources/ai-2026-neural-architecture-implementation-guide',
    badge: 'Expert Guide',
    icon: BookOpen,
    gradient: 'from-blue-500 to-cyan-600',
    featured: true,
    isNew: true
  },
  {
    id: 'quantum-ai-breakthrough',
    type: 'blog',
    title: 'Quantum-AI Fusion: The Breakthrough Revolutionizing Everything in 2025',
    description: 'Discover how quantum-AI fusion is creating unprecedented processing power and solving problems 1 billion times faster.',
    ctaText: 'Read Breakthrough',
    ctaLink: '/blog/quantum-ai-breakthrough-2025',
    badge: 'Revolutionary',
    icon: Zap,
    gradient: 'from-purple-500 to-indigo-600',
    featured: true,
    isNew: false
  },
  {
    id: 'healthcare-ai-success',
    type: 'case-study',
    title: 'Healthcare AI Transformation: MedTech Solutions Achieves 400% ROI',
    description: 'See how a regional healthcare network saved $13.2M annually and improved patient care quality dramatically.',
    ctaText: 'View Success Story',
    ctaLink: '/case-studies/healthcare-ai-transformation-success',
    badge: 'Success Story',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-600',
    featured: true,
    isNew: false
  },
  {
    id: 'ai-implementation-checklist',
    type: 'resource',
    title: 'AI Implementation Checklist 2025',
    description: 'Your complete roadmap to successful AI deployment with proven methodologies and best practices.',
    ctaText: 'Download Checklist',
    ctaLink: '/resources/ai-implementation-checklist-2025',
    badge: 'Free Resource',
    icon: CheckCircle,
    gradient: 'from-orange-500 to-red-600',
    featured: true,
    isNew: false
  }
];

export function NewContentPromotionBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('new-content-banner-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Auto-rotate content every 8 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newContentItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('new-content-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  const currentItem = newContentItems[currentIndex];
  const IconComponent = currentItem.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-400 opacity-30"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-purple-400 opacity-20"
            animate={{
              y: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 0.8, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-green-400 opacity-25"
            animate={{
              y: [0, -10, 0],
              opacity: [0.25, 0.5, 0.25],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Icon */}
              <div className={`p-3 rounded-xl bg-gradient-to-r ${currentItem.gradient} shadow-lg`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                    <Sparkles className="h-3 w-3 mr-1" />
                    New Content
                  </Badge>
                  <Badge className={`bg-gradient-to-r ${currentItem.gradient} text-white text-xs`}>
                    {currentItem.badge}
                  </Badge>
                  {currentItem.isNew && (
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs animate-pulse">
                      Just Released
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
                  {currentItem.title}
                </h3>
                <p className="text-sm text-slate-300 max-w-2xl line-clamp-1">
                  {currentItem.description}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Link to={currentItem.ctaLink}>
                <Button
                  className={`bg-gradient-to-r ${currentItem.gradient} hover:opacity-90 text-white border-0 shadow-lg`}
                >
                  {currentItem.ctaText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Close banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {newContentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Go to content ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function FeaturedNewContentSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h2 className="text-4xl font-bold text-white">
              Brand New Content
            </h2>
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30 animate-pulse">
              Just Released
            </Badge>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover our latest AI insights, breakthrough case studies, and comprehensive implementation guides
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newContentItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-50">
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
                </div>
                
                <div className="relative z-10 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Badges */}
                    <div className="flex flex-col gap-1">
                      <Badge className={`bg-gradient-to-r ${item.gradient} text-white text-xs w-fit`}>
                        {item.badge}
                      </Badge>
                      {item.isNew && (
                        <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs w-fit animate-pulse">
                          <Sparkles className="h-3 w-3 mr-1" />
                          New
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <Link to={item.ctaLink}>
                    <Button 
                      size="sm" 
                      className={`w-full bg-gradient-to-r ${item.gradient} hover:opacity-90 text-white border-0`}
                    >
                      {item.ctaText}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/resources">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
              Explore All Resources
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SuccessMetricsPromotionBanner() {
  return (
    <div className="relative overflow-hidden rounded-lg p-6 bg-gradient-to-r from-green-600 to-emerald-600 border border-green-500/30">
      {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
      
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Award className="h-6 w-6 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-white/20 text-white border-white/30 text-xs">
                <CheckCircle className="h-3 w-3 mr-1" />
                Proven Results
              </Badge>
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs">
                <Star className="h-3 w-3 mr-1" />
                Industry Leading
              </Badge>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2">
              Join 500+ Companies Achieving Exceptional Results
            </h3>
            
            <p className="text-green-100 text-sm mb-4">
              Our clients achieve an average of 300-400% ROI while transforming their operations with cutting-edge AI solutions.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-xl font-bold text-white">400%</div>
                <div className="text-green-100 text-xs">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">$2.3M</div>
                <div className="text-green-100 text-xs">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">90%</div>
                <div className="text-green-100 text-xs">Efficiency Gain</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <Link to="/case-studies">
                <Button size="sm" className="bg-white text-green-600 hover:bg-gray-100">
                  View Success Stories
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Get Your ROI Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}