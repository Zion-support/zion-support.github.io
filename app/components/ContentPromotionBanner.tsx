<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface PromotionBanner {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor: string;
  textColor: string;
  icon: string;
  stats?: {
    value: string;
    label: string;
  }[];
}
=======
'use client'
import React from 'react'
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react'
import { Zap, ArrowRight } from 'lucide-react'
=======
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-280f
>>>>>>> a84aa0ca73271fd79488f8988ac94dcff4d9fb95

const ContentPromotionBanner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners: PromotionBanner[] = [
    {
      id: 'ai-transformation',
      title: '🚀 AI Enterprise Transformation Guide',
      subtitle: 'Learn how Fortune 500 companies achieve $50M+ annual savings with our proven AI strategies',
      ctaText: 'Read the Guide',
      ctaLink: '/blog/ai-enterprise-transformation-2025',
      backgroundColor: 'from-indigo-600 to-purple-600',
      textColor: 'text-white',
      icon: '💰',
      stats: [
        { value: '$50M+', label: 'Annual Savings' },
        { value: '95%', label: 'Process Automation' },
        { value: '300%', label: 'ROI' }
      ]
    },
    {
      id: 'ai-trends-2026',
      title: '🌟 AI 2026 Mega Trends Breakthrough',
      subtitle: 'Discover the revolutionary AI trends that will transform enterprise operations in 2026',
      ctaText: 'Explore Trends',
      ctaLink: '/blog/ai-2025-2026-mega-trends-breakthrough',
      backgroundColor: 'from-green-600 to-blue-600',
      textColor: 'text-white',
      icon: '🚀',
      stats: [
        { value: '$100B+', label: 'Market Value' },
        { value: '95%', label: 'Process Automation' },
        { value: '10x', label: 'Efficiency Gains' }
      ]
    },
    {
      id: 'autonomous-architecture',
      title: '🏗️ Autonomous Enterprise Architecture',
      subtitle: 'Revolutionary self-healing systems and predictive infrastructure for 99.9% uptime',
      ctaText: 'Learn More',
      ctaLink: '/blog/ai-2026-autonomous-enterprise-architecture',
      backgroundColor: 'from-purple-600 to-pink-600',
      textColor: 'text-white',
      icon: '🏗️',
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '90%', label: 'Cost Reduction' },
        { value: 'Real-time', label: 'Optimization' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 8000); // Change banner every 8 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const _banner = banners[currentBanner];

  return (
<<<<<<< HEAD
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
=======
    <>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ContentPromotionBanner
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced ContentPromotionBanner solution for modern businesses.
            </p>
          </div>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">{stats.map((stat, index) => (</div>
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
            </div>
          ))}
        </div>
<div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-2">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-purple-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Additional Benefits</h3>
              <ul className="space-y-2">
                {benefits.slice(4).map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-purple-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"></button>
              Get Started Today
          </div>
        </div>
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">{features.map((feature, index) => (</div>
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">We provide comprehensive AI and IT solutions that deliver real results for your business.</p>p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{/* Stats Section */}</div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">{stats.map((stat, index) => (</div>
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our Solutions?</h2>
          <div className="grid md:grid-cols-2 gap-4">{benefits.map((benefit, index) => (</div>
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join the future of business technology. Get started with our AI solutions today and see the difference.</p>p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
>>>>>>> a84aa0ca73271fd79488f8988ac94dcff4d9fb95
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
      </div>

      {/* Banner indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentBanner ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentPromotionBanner;