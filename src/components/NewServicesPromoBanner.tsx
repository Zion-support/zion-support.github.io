import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Shield, Globe, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { newServices } from '../content/new-services';

interface NewServicesPromoBannerProps {
  className?: string;
  variant?: 'default' | 'premium' | 'showcase';
  showCount?: number;
  featuredOnly?: boolean;
}

export default function NewServicesPromoBanner({
  className = '',
  variant = 'default',
  showCount = 3,
  featuredOnly = false
}: NewServicesPromoBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  
  const services = featuredOnly 
    ? newServices.filter(service => service.featured).slice(0, showCount)
    : newServices.slice(0, showCount);

  if (!isVisible || services.length === 0) {
    return null;
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'premium':
        return {
          container: 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 border-emerald-400/30',
          text: 'text-white',
          accent: 'text-emerald-200',
          button: 'bg-white text-emerald-600 hover:bg-emerald-50',
          buttonSecondary: 'border-white text-white hover:bg-white hover:text-emerald-600',
          card: 'bg-white/10 backdrop-blur-sm border-white/20'
        };
      case 'showcase':
        return {
          container: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 border-purple-400/30',
          text: 'text-white',
          accent: 'text-purple-200',
          button: 'bg-white text-purple-600 hover:bg-purple-50',
          buttonSecondary: 'border-white text-white hover:bg-white hover:text-purple-600',
          card: 'bg-white/10 backdrop-blur-sm border-white/20'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-400/30',
          text: 'text-white',
          accent: 'text-blue-200',
          button: 'bg-white text-blue-600 hover:bg-blue-50',
          buttonSecondary: 'border-white text-white hover:bg-white hover:text-blue-600',
          card: 'bg-white/10 backdrop-blur-sm border-white/20'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`${styles.container} ${className} border rounded-xl p-6 mb-8 relative overflow-hidden`}>
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-shimmer"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className={`text-lg font-bold ${styles.text}`}>
              🚀 NEW SERVICES LAUNCH
            </span>
            <TrendingUp className="w-5 h-5 animate-bounce" />
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className={`${styles.accent} hover:${styles.text} transition-colors`}
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>

        {/* Main Content */}
        <div className="mb-6">
          <h3 className={`text-xl font-bold ${styles.text} mb-2`}>
            🎯 Revolutionary AI Services That Will Transform Your Business
          </h3>
          <p className={`${styles.accent} text-sm mb-4`}>
            Discover our newest AI-powered services: Autonomous Operations, Quantum Optimization, 
            AI Cybersecurity Suite, Edge AI Platform, and Content Generation Platform.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {services.map((service) => (
            <div key={service.id} className={`${styles.card} rounded-lg p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{service.icon}</span>
                  <div>
                    <h4 className={`font-semibold ${styles.text} text-sm mb-1`}>
                      {service.title}
                    </h4>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                </div>
                {service.newBadge && (
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    NEW
                  </span>
                )}
              </div>
              
              <p className={`${styles.accent} text-xs mb-3 line-clamp-2`}>
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${styles.text} text-sm`}>
                    {service.pricing.starting}
                  </span>
                  {service.pricing.popular && (
                    <span className="bg-green-400 text-black px-2 py-1 rounded text-xs font-medium">
                      POPULAR
                    </span>
                  )}
                </div>
                {service.pricing.discount && (
                  <span className="bg-red-400 text-white px-2 py-1 rounded text-xs font-medium">
                    {service.pricing.discount}
                  </span>
                )}
              </div>

              {/* Key Benefits */}
              <div className="mb-3">
                {service.benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                    <span className={`${styles.accent} text-xs`}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Link
                  to={`/services/${service.id}`}
                  className={`${styles.button} px-3 py-2 rounded text-xs font-semibold inline-flex items-center gap-1 transition-all duration-300 hover:scale-105 flex-1 justify-center`}
                >
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/services"
            className={`${styles.button} px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-105`}
          >
            <Zap className="w-4 h-4" />
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className={`${styles.buttonSecondary} border px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
          >
            Get Free Consultation
          </Link>
        </div>

        {/* Special Offer */}
        <div className="mt-4 p-3 bg-white/10 rounded-lg border border-white/20">
          <div className="text-center">
            <p className={`${styles.text} font-semibold text-sm mb-1`}>
              🔥 Limited Time Offer: Get 50% OFF Your First 3 Months
            </p>
            <p className={`${styles.accent} text-xs`}>
              Plus FREE AI Strategy Consultation • Valid until March 31, 2025
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {['AI Autonomous Ops', 'Quantum Computing', 'AI Security', 'Edge AI', 'Content Generation', 'Customer Insights'].map((tag) => (
            <span key={tag} className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}