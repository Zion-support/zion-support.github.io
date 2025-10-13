import React from 'react';
interface ContentPromotionBannerProps {
import React from "react"react-router-dom";
import { ArrowRight, Star, Zap } from ";
interface ContentPromotionBannerProps;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: "primary"secondary" | ";
  className?: string;
  children?: React.ReactNode;
}

export default function ContentPromotionBanner({ className = '', children }: ContentPromotionBannerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <div;
const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = (
  title = "Transform Your Business with AI"Discover how our cutting-edge AI solutions can revolutionize your operations and drive unprecedented growth.",
  ctaText = ",
  ctaLink = "/contact"primary",
  className = "primary":
}) => {
  const getVariantStyles = () => {
    switch (variant) {
//       case ":
        return "bg-gradient-to-r from-cyan-500 to-purple-600"secondary":
        return ";
//       case "success"bg-gradient-to-r from-green-500 to-emerald-600";
//       default:
      case ":
        return "bg-gradient-to-r from-green-500 to-emerald-600"bg-gradient-to-r from-cyan-500 to-purple-600";

;
  const getIcon = () =>
    switch (variant)
      case ":
        return <Zap className="w-6 h-6":
        return <Star className="w-6 h-6":
        return <Star className="w-6 h-6" />;</Zap>
  const getIcon = () => {
    switch (variant) {
//       case "primary"w-6 h-6"secondary"w-6 h-6"success"w-6 h-6"w-6 h-6"{`relative"{`relative"relative z-10"relative z-10"flex items-center justify-center mb-4"text-3 xl font-bold text-center mb-4"text-lg text-center mb-6 opacity-90 max-w-2 xl mx-auto"text-center"text-center"inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"w-5 h-5 ml-2"absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
</div>
className?: string;
  children?: React.ReactNode;
}

  );
