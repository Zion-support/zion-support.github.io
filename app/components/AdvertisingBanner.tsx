import React from 'react';

interface AdvertisingBannerProps {
  className?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

const AdvertisingBanner: React.FC<AdvertisingBannerProps> = ({
  className = "",
  title = "Ready to Get Started?",
  description = "Join thousands of businesses already using our solutions.",
  ctaText = "Get Started",
  ctaLink = "/contact"
}) => {
  return (
    <div className={`advertising-banner bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 opacity-90">{description}</p>
        <a
          href={ctaLink}
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {ctaText}
        </a>
      </div>
  );
};

export default AdvertisingBanner;