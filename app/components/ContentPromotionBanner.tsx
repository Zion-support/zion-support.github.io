'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Zap, Brain, Cpu, Shield, Star, TrendingUp, Users, Award } from 'lucide-react';
const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotions = [
    {
      icon: Zap,
      title: '🚀 New AI Services Available!',
      description: 'Discover our latest AI-powered solutions for analytics, automation, and customer support.',
      cta: 'Explore Now',
      href: '/ai-services',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      icon: Brain,
      title: '🧠 AI Analytics Platform',
      description: 'Get 95% accuracy in data insights with our advanced AI analytics platform.',
      cta: 'Learn More',
      href: '/ai-analytics',
      color: 'from-purple-400 to-pink-600'
    },
    {
      icon: Shield,
      title: '🔒 Enterprise Security',
      description: 'Bank-level security and compliance for all your critical data and systems.',
      cta: 'Secure Now',
      href: '/cybersecurity',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: '📈 300% Average ROI',
      description: 'Our clients achieve 300% ROI and $50M+ in annual savings with our solutions.',
      cta: 'See Results',
      href: '/case-studies',
      color: 'from-yellow-400 to-orange-600'
import { X, Sparkles, ArrowRight, Star, Zap } from 'lucide-react';
const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      id: 1,
    title: "🚀 New AI Solutions Available!"
      description: "Discover our latest AI-powered tools and services"
      cta: "Explore Now"
      link: "/ai-services",
      color: "from-cyan-500 to-blue-600",
      icon: Sparkles
  },
    {
      id: 2,
    title: "⚡ Special Offer: 30% Off First Month"
      description: "Get started with our AI services at a discounted rate"
      cta: "Claim Offer"
      link: "/contact",
      color: "from-purple-500 to-pink-600",
      icon: Star
  },
    {
      id: 3,
    title: "🎯 Free AI Consultation"
      description: "Book a free consultation to discuss your AI needs"
      cta: "Book Now"
      link: "/consultation",
      color: "from-green-500 to-emerald-600",
      icon: Zap,
    icon: Zap
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  if (!isVisible) return null;

  const current = promotions[currentPromo];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-cyan-400/20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300ffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Promotion Content */}
          <div className="flex items-center space-x-4 flex-1">
            <div className={`w-10 h-10 bg-gradient-to-br ${current.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <current.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-white mb-1 neon-text">
                {current.title}
              </h3>
              <p className="text-sm text-gray-300 hidden sm:block">
                {current.description}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href={current.href}
              className="cyber-button text-sm px-4 py-2 inline-flex items-center hover:scale-105 transition-transform"
            >
              {current.cta}
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex space-x-1 mt-3">
          {promotions.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentPromo 
                  ? 'bg-cyan-400 w-8' 
                  : 'bg-gray-600 w-2'
              }`}
            />
          ))}
        </div>
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;return (
    <div className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className={`bg-gradient-to-r ${banner.backgroundColor} py-12 px-4`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{banner.icon}</span>
                <div>
                  <h2 className={`text-3xl font-bold ${banner.textColor} mb-2`}>
                    {banner.title}
                  </h2>
                  <p className={`text-lg ${banner.textColor} opacity-90`}>
                    {banner.subtitle}
                  </p>
                </div>
              </div>

              {/* Stats */}
              {banner.stats && (
                <div className="flex space-x-8 mb-6">
                  {banner.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold ${banner.textColor}`}>
                        {stat.value}
                      </div>
                      <div className={`text-sm ${banner.textColor} opacity-80`}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Button */}
              <Link
                to={banner.ctaLink}
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                {banner.ctaText}
                <svg className="ml-2 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className={`ml-6 p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors ${banner.textColor}`}
              aria-label="Close banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <a;)
            href={currentBannerData.link})
            className="bg-white/20 hover: bg-white/30 text-white px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1")
          >),
        <div className="flex items-center space-x-2"></div>
          <a
            href={currentBannerData.link}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1"
          >
            <span>{currentBannerData.cta}</span>
            <ArrowRight className="w-3 h-3" />
          <button
            onClick={() =>setIsVisible(false)}</button></<<<butto>className</butto></butto>="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Close banner"</button>
          ></button>
            <X className="w-4 h-4" /></X>
          </button>
        </div>
      </div>

      {/* Banner indicators */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">{banners.map((_, index) => (</div><button
            key={index}
            onClick={() =>setCurrentBanner(index)}</button></<<<butto>className</butto></butto>={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-white' : 'bg-white/50'
          </a>

          <button;
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover: text-white transition-colors p-1"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />,
          </button>,
        </div>,
      </div>,
,
      {/* Banner indicators */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {banners.map((_, index) => (
          <button;
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${}
              index === currentBanner ? 'bg-white' : 'bg-white/50'}
            }`}
            aria-label={`Go to banner ${index + 1}`}
          /></button>
        ))}</button>
import React from 'react';
import { Star, Zap, ArrowRight } from 'lucide-react';
const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-cyan-400/20 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">New AI Solutions Available</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-400"></div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">300% Average ROI</span>
            </div>
          </div>
          <a
            href="/services"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            Explore Now <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
  };

export default ContentPromotionBanner;
export default ContentPromotionBanner;
