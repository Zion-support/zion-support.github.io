import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: "primary" | "secondary" | "success";
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Transform Your Business with AI",
  description = "Discover how our cutting-edge AI solutions can revolutionize your operations and drive unprecedented growth.",
  ctaText = "Get Started Today",
  ctaLink = "/contact",
  variant = "primary",
  className = "",
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-cyan-500 to-purple-600";
      case "secondary":
        return "bg-gradient-to-r from-blue-500 to-indigo-600";
      case "success":
        return "bg-gradient-to-r from-green-500 to-emerald-600";
      default:
        return "bg-gradient-to-r from-cyan-500 to-purple-600";
    }
  };

  return (
    <div className={`${getVariantStyles()} text-white rounded-lg p-8 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          {description}
        </p>
        <Link
          to={ctaLink}
          className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;