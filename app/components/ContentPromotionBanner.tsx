'use client';
import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Transform Your Business with AI",
  description = "Discover how our AI solutions can revolutionize your operations and drive growth.",
  features = [
    'Advanced AI capabilities',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ],
  ctaText = "Get Started Today",
  ctaLink = "/contact",
  className = ""
}) => {
  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-lg text-blue-100 mb-6">
              {description}
            </p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-blue-100">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-shrink-0">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
              {ctaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;