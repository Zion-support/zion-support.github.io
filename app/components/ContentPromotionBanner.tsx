'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  stats?: Array<{
    icon: React.ComponentType<{ className?: string }>;
    value: string;
    label: string;
  }>;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Transform Your Business with AI",
  description = "Join thousands of companies already using our AI solutions to drive growth and innovation.",
  ctaText = "Get Started Today",
  ctaLink = "/contact",
  stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: TrendingUp, value: "300%", label: "Average Growth" },
    { icon: Star, value: "4.9/5", label: "Customer Rating" }
  ]
}) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            {description}
          </p>
          <Link
            to={ctaLink}
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-purple-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
