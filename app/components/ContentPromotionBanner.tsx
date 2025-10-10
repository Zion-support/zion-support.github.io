'use client';

import React from 'react';
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  stats?: Array<{
    value: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Transform Your Business with AI",
  description = "Join thousands of companies already using our AI solutions to drive growth and efficiency.",
  ctaText = "Get Started Today",
  ctaLink = "/contact",
  stats = [
    { value: "500+", label: "Happy Clients", icon: Users },
    { value: "99%", label: "Satisfaction Rate", icon: Star },
    { value: "50%", label: "Average Growth", icon: TrendingUp }
  ],
  className = ""
}) => {
  return (
    <div className={`bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-lg text-purple-100 mb-8">
              {description}
            </p>
            <a
              href={ctaLink}
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {ctaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;