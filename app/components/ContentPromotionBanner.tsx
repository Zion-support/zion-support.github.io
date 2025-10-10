'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  showRating?: boolean;
  rating?: number;
  reviewCount?: number;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Transform Your Business with AI",
  description = "Join thousands of companies already using our AI solutions to drive growth and innovation.",
  ctaText = "Get Started Today",
  ctaLink = "/contact",
  showRating = true,
  rating = 4.9,
  reviewCount = 1250
}) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm opacity-90">{description}</p>
          </div>
          
          {showRating && (
            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-current text-yellow-300" />
                <span className="font-medium">{rating}</span>
              </div>
              <span className="opacity-75">({reviewCount} reviews)</span>
            </div>
          )}
          
          <Link
            to={ctaLink}
            className="bg-white text-cyan-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;