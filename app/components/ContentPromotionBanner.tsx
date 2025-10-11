'use client';
import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  features?: string[];
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Transform Your Business with AI",
  description = "Discover how our cutting-edge AI solutions can revolutionize your operations and drive unprecedented growth.",
  ctaText = "Get Started Today",
  ctaLink = "/contact",
  features = [
    "Advanced AI Technology",
    "24/7 Expert Support",
    "Proven Results"
  ]
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">{description}</p>
        
        {features.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        )}
        
        <a
          href={ctaLink}
          className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;