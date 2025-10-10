'use client';
import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  features?: string[];
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Transform Your Business with AI",
  description = "Discover how our AI solutions can revolutionize your operations and drive growth.",
  ctaText = "Get Started Today",
  ctaLink = "/contact",
  features = [
    "Advanced AI Technology",
    "Real-time Analytics",
    "Enterprise Security",
    "24/7 Support"
  ],
  className = ""
}) => {
  return (
    <div className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
              <span className="text-purple-100">{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white text-purple-600 hover:bg-purple-50 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
            {ctaText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;