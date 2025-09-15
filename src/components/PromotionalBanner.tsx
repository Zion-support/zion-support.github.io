import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Gift,
  Rocket,
  Shield,
  X,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface PromotionalBannerProps {
  variant?: 'top' | 'floating' | 'inline';
  className?: string;
}

interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  icon: React.ComponentType<any>;
  color: string;
  badge?: string;
  discount?: string;
  expires?: string;
  featured?: boolean;
}

const promotions: Promotion[] = [
  {
    id: 'ai-transformation-2025',
    title: '🚀 AI Transformation 2025',
    subtitle: 'Transform your business with cutting-edge AI solutions. Get 30% off your first AI implementation!',
    cta: 'Start Your AI Journey',
    href: '/services/ai-transformation-consulting',
    icon: Brain,
    color: 'from-cyan-500 to-blue-600',
    badge: 'LIMITED TIME',
    discount: '30% OFF',
    expires: '2025-02-15',
    featured: true
  },
  {
    id: 'quantum-computing-platform',
    title: '⚡ Quantum Computing Platform',
    subtitle: 'Revolutionary quantum solutions for optimization and AI. Early access available now!',
    cta: 'Get Early Access',
    href: '/services/quantum-computing-platform',
    icon: Zap,
    color: 'from-purple-500 to-pink-600',
    badge: 'EARLY ACCESS',
    discount: '50% OFF',
    expires: '2025-02-28'
  },
  {
    id: 'cybersecurity-suite-2025',
    title: '🛡️ Advanced Cybersecurity Suite',
    subtitle: 'Protect your business with next-gen security. Free security audit included!',
    cta: 'Get Free Audit',
    href: '/services/cybersecurity-suite-2025',
    icon: Shield,
    color: 'from-red-500 to-orange-600',
    badge: 'FREE AUDIT',
    discount: 'FREE',
    expires: '2025-02-20'
  },
  {
    id: 'micro-saas-launch',
    title: '🎯 Micro-SaaS Solutions',
    subtitle: 'Affordable, specialized software for growing businesses. Starting at $99/month!',
    cta: 'Explore Solutions',
    href: '/services/micro-saas-solutions',
    icon: Rocket,
    color: 'from-green-500 to-emerald-600',
    badge: 'NEW',
    discount: '$99/MONTH',
    expires: '2025-03-15'
  }
];

export function PromotionalBanner({ variant = 'top', className = '' }: PromotionalBannerProps) {
  const [currentPromotion, setCurrentPromotion] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [dismissedBanners, setDismissedBanners] = useState<string[]>([]);

  // Rotate promotions every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Load dismissed banners from localStorage
  useEffect(() => {
    const dismissed = localStorage.getItem('dismissed-promotional-banners');
    if (dismissed) {
      setDismissedBanners(JSON.parse(dismissed));
    }
  }, []);

  const handleDismiss = (promotionId: string) => {
    const newDismissed = [...dismissedBanners, promotionId];
    setDismissedBanners(newDismissed);
    localStorage.setItem('dismissed-promotional-banners', JSON.stringify(newDismissed));
    setIsVisible(false);
  };

  const availablePromotions = promotions.filter(p => !dismissedBanners.includes(p.id));
  
  if (availablePromotions.length === 0) {
    return null;
  }

  const promotion = availablePromotions[currentPromotion];

  const bannerVariants = {
    top: 'fixed top-0 left-0 right-0 z-50',
    floating: 'fixed bottom-4 right-4 z-50 max-w-sm',
    inline: 'relative w-full'
  };

  const contentVariants = {
    top: 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-zion-cyan/30',
    floating: 'bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-zion-cyan/30 shadow-2xl',
    inline: 'bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700/50'
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`${bannerVariants[variant]} ${className}`}
          initial={{ opacity: 0, y: variant === 'top' ? -100 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: variant === 'top' ? -100 : 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className={`${contentVariants[variant]} backdrop-blur-md`}>
            {variant === 'top' && (
              <div className="px-4 py-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${promotion.color}`}>
                      <promotion.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-white font-semibold text-sm">{promotion.title}</h3>
                        {promotion.badge && (
                          <span className="px-2 py-1 bg-zion-cyan text-slate-900 text-xs font-bold rounded-full">
                            {promotion.badge}
                          </span>
                        )}
                        {promotion.discount && (
                          <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold rounded-full">
                            {promotion.discount}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-xs mt-1">{promotion.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Link
                      to={promotion.href}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-slate-900 font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-200 text-sm"
                    >
                      {promotion.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <button
                      onClick={() => handleDismiss(promotion.id)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label="Dismiss banner"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {variant === 'floating' && (
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${promotion.color}`}>
                    <promotion.icon className="w-6 h-6 text-white" />
                  </div>
                  <button
                    onClick={() => handleDismiss(promotion.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label="Dismiss banner"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-white font-bold text-lg">{promotion.title}</h3>
                    {promotion.badge && (
                      <span className="px-2 py-1 bg-zion-cyan text-slate-900 text-xs font-bold rounded-full">
                        {promotion.badge}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 text-sm">{promotion.subtitle}</p>
                  
                  {promotion.discount && (
                    <div className="flex items-center space-x-2">
                      <Gift className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-semibold text-sm">{promotion.discount}</span>
                    </div>
                  )}
                  
                  <Link
                    to={promotion.href}
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-slate-900 font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-200 text-sm"
                  >
                    {promotion.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            )}

            {variant === 'inline' && (
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${promotion.color}`}>
                      <promotion.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-white font-bold text-lg">{promotion.title}</h3>
                        {promotion.badge && (
                          <span className="px-2 py-1 bg-zion-cyan text-slate-900 text-xs font-bold rounded-full">
                            {promotion.badge}
                          </span>
                        )}
                        {promotion.discount && (
                          <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold rounded-full">
                            {promotion.discount}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm">{promotion.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Link
                      to={promotion.href}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-slate-900 font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-200"
                    >
                      {promotion.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <button
                      onClick={() => handleDismiss(promotion.id)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label="Dismiss banner"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Specialized promotional components for different sections
export function FeaturedPromotion() {
  const featuredPromotion = promotions.find(p => p.featured);
  
  if (!featuredPromotion) return null;

  return (
    <motion.section 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-blue-light p-8 md:p-12">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-zion-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-zion-purple/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${featuredPromotion.color}`}>
                    <featuredPromotion.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    {featuredPromotion.badge && (
                      <span className="inline-block px-3 py-1 bg-zion-cyan text-slate-900 text-sm font-bold rounded-full mb-2">
                        {featuredPromotion.badge}
                      </span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {featuredPromotion.title}
                    </h2>
                  </div>
                </div>
                
                <p className="text-xl text-gray-200 mb-6 max-w-2xl">
                  {featuredPromotion.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={featuredPromotion.href}
                    className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 text-lg"
                  >
                    {featuredPromotion.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-200 text-lg"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                {featuredPromotion.discount && (
                  <div className="text-center">
                    <div className="inline-flex flex-col items-center justify-center w-32 h-32 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                      <span className="text-3xl font-bold text-white">{featuredPromotion.discount}</span>
                      <span className="text-sm text-gray-200">Discount</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default PromotionalBanner;