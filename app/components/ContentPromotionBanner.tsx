import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'primary' | 'secondary';
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Transform Your Business Today",
  description = "Discover how our AI solutions can revolutionize your operations and drive growth.",
  ctaText = "Get Started",
  ctaLink = "/contact",
  variant = "primary"
}) => {
  const isPrimary = variant === 'primary';
  
  return (
    <div className={`relative overflow-hidden rounded-lg ${
      isPrimary 
        ? 'bg-gradient-to-r from-cyan-500 to-purple-600' 
        : 'bg-gradient-to-r from-gray-800 to-gray-900'
    }`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative p-8 text-center">
        <div className="flex justify-center mb-4">
          <Star className={`w-8 h-8 ${isPrimary ? 'text-white' : 'text-cyan-400'}`} />
        </div>
        
        <h2 className={`text-3xl font-bold mb-4 ${isPrimary ? 'text-white' : 'text-white'}`}>
          {title}
        </h2>
        
        <p className={`text-lg mb-6 max-w-2xl mx-auto ${
          isPrimary ? 'text-cyan-100' : 'text-gray-300'
        }`}>
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={ctaLink}
            className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
              isPrimary
                ? 'bg-white text-cyan-600 hover:bg-gray-100'
                : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
            }`}
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          
          <Link
            to="/about"
            className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
              isPrimary
                ? 'border-2 border-white text-white hover:bg-white/10'
                : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
            }`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;