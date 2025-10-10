'use client';

import React from 'react';
import { ArrowRight, Zap, Star, Users, CheckCircle } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  features?: string[];
  showStats?: boolean;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Transform Your Business with AI Solutions",
  subtitle = "Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.",
  ctaText = "Get Started Today",
  ctaLink = "/contact",
  features = [
    "Advanced AI Technology",
    "24/7 Expert Support",
    "Scalable Solutions",
    "Proven Results"
  ],
  showStats = true
}) => {
  const stats = [
    { label: "Happy Clients", value: "10,000+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Success Rate", value: "99%" },
    { label: "Years Experience", value: "10+" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              <Zap className="w-5 h-5" />
              {ctaText}
            </button>
            <button className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {showStats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonial Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-300 mb-4">
              "Zion Tech Group transformed our business operations with their AI solutions. The results exceeded our expectations and our productivity increased by 300%."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div className="text-left">
                <div className="text-white font-semibold">Sarah Johnson</div>
                <div className="text-gray-400 text-sm">CEO, TechCorp Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;