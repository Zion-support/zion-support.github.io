import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'primary' | 'secondary';
  showStars?: boolean;
}

export default function ContentPromotionBanner({
  title = "Transform Your Business Today",
  description = "Join thousands of companies using our AI and blockchain solutions to drive growth and innovation.",
  ctaText = "Get Started",
  ctaLink = "/contact",
  variant = 'primary',
  showStars = true
}: ContentPromotionBannerProps) {
  const isPrimary = variant === 'primary';
  
  return (
    <div className={`py-16 ${isPrimary ? 'bg-gradient-to-r from-cyan-500 to-purple-600' : 'bg-slate-800'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          {showStars && (
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 mx-1" />
              ))}
            </div>
          )}
          
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isPrimary ? 'text-white' : 'text-white'}`}>
            {title}
          </h2>
          
          <p className={`text-lg mb-8 max-w-3xl mx-auto ${isPrimary ? 'text-white/90' : 'text-gray-300'}`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={ctaLink}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center mx-auto w-fit ${
                isPrimary
                  ? 'bg-white text-cyan-600 hover:bg-gray-100'
                  : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
              }`}
            >
              {ctaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}