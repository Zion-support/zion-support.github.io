import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Zap } from "lucide-react";

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

  const getIcon = () => {
    switch (variant) {
      case "primary":
        return <Zap className="w-6 h-6" />;
      case "secondary":
        return <Star className="w-6 h-6" />;
      case "success":
        return <Star className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg p-8 text-white ${getVariantStyles()} ${className}`}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-4">{getIcon()}</div>
        <h2 className="text-3xl font-bold text-center mb-4">{title}</div>
        <p className="text-lg text-center mb-6 opacity-90 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="text-center">
          <Link
            to={ctaLink}
            className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 ml-2" />
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></Zap>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></Star>
  );
};

export default ContentPromotionBanner;
