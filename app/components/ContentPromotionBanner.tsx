import React from "react";
import { ArrowRight } from "lucide-react";

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: "primary" | "secondary" | "success";
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Special Offer",
  description = "Get started with our AI solutions today and transform your business.",
  ctaText = "Learn More",
  ctaLink = "/contact",
  variant = "primary",
  className = ""
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-blue-600 to-purple-600 text-white";
      case "secondary":
        return "bg-slate-800 text-white";
      case "success":
        return "bg-green-600 text-white";
      default:
        return "bg-gradient-to-r from-blue-600 to-purple-600 text-white";
    }
  };

  return (
    <div className={`${getVariantStyles()} rounded-lg p-6 ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        <a
          href={ctaLink}
          className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors group"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;