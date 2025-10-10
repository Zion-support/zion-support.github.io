'use client';
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Star, CheckCircle } from 'lucide-react';

interface PromotionBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  features?: string[];
  rating?: number;
  reviewCount?: number;
  image?: string;
  backgroundColor?: string;
  textColor?: string;
  showCloseButton?: boolean;
  autoHide?: boolean;
  hideDelay?: number;
}

const ContentPromotionBanner: React.FC<PromotionBannerProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  features = [],
  rating = 4.9,
  reviewCount = 1000,
  image,
  backgroundColor = 'bg-gradient-to-r from-cyan-500 to-purple-500',
  textColor = 'text-white',
  showCloseButton = true,
  autoHide = false,
  hideDelay = 10000
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, hideDelay);

      return () => clearTimeout(timer);
    }
  }, [autoHide, hideDelay]);

  useEffect(() => {
    if (features.length > 1) {
      const interval = setInterval(() => {
        setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [features.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${backgroundColor} ${textColor} py-20 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
              <p className="text-xl mb-8">{description}</p>
            </div>

            {/* Features */}
            {features.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-lg font-semibold">
                    {features[currentFeatureIndex]}
                  </span>
                </div>
                {features.length > 1 && (
                  <div className="flex space-x-2">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentFeatureIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentFeatureIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      index < Math.floor(rating) ? 'fill-current' : ''
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">{rating}</span>
              <span className="text-lg">({reviewCount} reviews)</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={ctaLink}
                className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors text-center"
              >
                {ctaText}
              </a>
              <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            </div>
          )}
        </div>
      </div>

      {/* Close Button */}
      {showCloseButton && (
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ContentPromotionBanner;
