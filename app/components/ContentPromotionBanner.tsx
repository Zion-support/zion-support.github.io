'use client';
import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  variant?: 'primary' | 'secondary';
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Transform Your Business with AI",
  description = "Join thousands of companies already using our cutting-edge AI solutions to drive growth and innovation.",
  features = [
    "30-day free trial",
    "No setup fees",
    "24/7 expert support",
    "Cancel anytime"
  ],
  ctaText = "Start Free Trial",
  ctaLink = "/contact",
  variant = 'primary'
}) => {
  return (
    <div className={`${variant === 'primary' 
      ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
      : 'bg-gradient-to-r from-blue-600 to-purple-600'
    } text-white py-16 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold">Limited Time Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            {description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ctaLink}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
