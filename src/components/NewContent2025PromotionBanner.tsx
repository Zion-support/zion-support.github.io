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
  Award,
  Rocket,
  Users,
  DollarSign
} from "lucide-react";

interface ContentItem {
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
  stats?: {
    value: string;
    label: string;
  };
}

const newContentItems: ContentItem[] = [
  {
    id: 'autonomous-systems-revolution',
    type: 'blog',
    title: 'AI 2025: The Next Generation Autonomous Systems Revolution',
    description: 'Discover how next-generation autonomous systems are reshaping business operations with 300-500% ROI and unprecedented efficiency gains.',
    ctaText: 'Read Revolution',
    ctaLink: '/blog/ai-2025-next-generation-autonomous-systems-revolution',
    badge: 'Revolutionary',
    icon: Brain,
    gradient: 'from-purple-500 to-indigo-600',
    featured: true,
    isNew: true,
    stats: {
      value: '500%',
      label: 'ROI Potential'
    }
  },
  {
    id: 'global-enterprise-success',
    type: 'case-study',
    title: 'Global Enterprise AI Transformation: $2.8B Ultimate Success Story',
    description: 'See how TechGlobal Corp achieved $2.8B in savings and 450% ROI through comprehensive AI transformation with Zion Tech Group.',
    ctaText: 'View Case Study',
    ctaLink: '/case-studies/global-enterprise-ai-transformation-2025-ultimate-success',
    badge: 'Success Story',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-600',
    featured: true,
    isNew: true,
    stats: {
      value: '$2.8B',
      label: 'Cost Savings'
    }
  },
  {
    id: 'autonomous-systems-guide',
    type: 'resource',
    title: 'AI 2025 Autonomous Systems Implementation Master Guide',
    description: 'Your complete roadmap to implementing next-generation autonomous systems with proven methodologies for 300-500% ROI.',
    ctaText: 'Download Guide',
    ctaLink: '/resources/ai-2025-autonomous-systems-implementation-master-guide',
    badge: 'Expert Guide',
    icon: BookOpen,
    gradient: 'from-blue-500 to-cyan-600',
    featured: true,
    isNew: true,
    stats: {
      value: '18 Mo',
      label: 'Payback Period'
    }
  }
];

export function NewContent2025PromotionBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('new-content-2025-banner-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Auto-rotate content every 10 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newContentItems.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('new-content-2025-banner-dismissed', 'true');
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
        className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 border-b border-purple-700 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-blue-400 opacity-30"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-purple-400 opacity-25"
            animate={{
              y: [0, 20, 0],
              opacity: [0.25, 0.6, 0.25],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-green-400 opacity-30"
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-yellow-400 opacity-20"
            animate={{
              y: [0, 25, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.4, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Icon */}
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentItem.gradient} shadow-xl`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-sm font-semibold">
                    <Rocket className="h-4 w-4 mr-2" />
                    Brand New 2025
                  </Badge>
                  <Badge className={`bg-gradient-to-r ${currentItem.gradient} text-white text-sm font-semibold`}>
                    {currentItem.badge}
                  </Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-sm font-semibold animate-pulse">
                    <Sparkles className="h-4 w-4 mr-1" />
                    Just Released
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                  {currentItem.title}
                </h3>
                <p className="text-base text-purple-100 max-w-3xl line-clamp-2 mb-3">
                  {currentItem.description}
                </p>
                
                {/* Stats */}
                {currentItem.stats && (
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 font-bold text-lg">{currentItem.stats.value}</span>
                      <span className="text-purple-200 text-sm">{currentItem.stats.label}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-purple-200 text-sm ml-2">5.0 Rating</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Link to={currentItem.ctaLink}>
                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${currentItem.gradient} hover:opacity-90 text-white border-0 shadow-xl font-semibold px-8 py-3`}
                >
                  {currentItem.ctaText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="p-3 text-purple-300 hover:text-white transition-colors rounded-lg hover:bg-purple-800/30"
                aria-label="Close banner"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {newContentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-purple-600 hover:bg-purple-400'
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

export function NewContent2025ShowcaseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Rocket className="w-8 h-8 text-yellow-400" />
            <h2 className="text-5xl font-bold text-white">
              Revolutionary 2025 Content
            </h2>
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30 animate-pulse text-lg px-4 py-2">
              Just Released
            </Badge>
          </div>
          <p className="text-2xl text-purple-100 max-w-4xl mx-auto mb-8">
            Discover the breakthrough insights, success stories, and implementation guides that are transforming businesses worldwide
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">500%</div>
              <div className="text-purple-200">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">$2.8B</div>
              <div className="text-purple-200">Total Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">18 Mo</div>
              <div className="text-purple-200">Payback Period</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.7%</div>
              <div className="text-purple-200">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newContentItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/40 transition-all duration-500 backdrop-blur-sm"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-50">
                  <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                </div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start gap-4 mb-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Badges */}
                    <div className="flex flex-col gap-2">
                      <Badge className={`bg-gradient-to-r ${item.gradient} text-white text-sm font-semibold w-fit px-3 py-1`}>
                        {item.badge}
                      </Badge>
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-sm w-fit animate-pulse px-3 py-1">
                        <Sparkles className="h-3 w-3 mr-1" />
                        New 2025
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-purple-200 text-base mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Stats */}
                  {item.stats && (
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-5 w-5 text-green-400" />
                        <span className="text-green-400 font-bold text-xl">{item.stats.value}</span>
                        <span className="text-purple-300 text-sm">{item.stats.label}</span>
                      </div>
                    </div>
                  )}
                  
                  <Link to={item.ctaLink}>
                    <Button 
                      size="lg" 
                      className={`w-full bg-gradient-to-r ${item.gradient} hover:opacity-90 text-white border-0 font-semibold py-3 text-base`}
                    >
                      {item.ctaText}
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/resources">
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-800 hover:text-white px-8 py-3 text-base">
                Explore All Resources
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white border-0 px-8 py-3 text-base">
                View Success Stories
                <Users className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}