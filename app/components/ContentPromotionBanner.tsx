import React from "react";

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Transform Your Business with AI",
  description = "Discover how our AI solutions can revolutionize your operations and drive growth.",
  ctaText = "Get Started",
  ctaLink = "/contact",
  className = ""
}) => {
  return (
    <div className={`bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-12 px-4 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {description}
        </p>
        <a
          href={ctaLink}
          className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;