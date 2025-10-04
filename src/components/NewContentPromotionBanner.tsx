<<<<<<< HEAD
import React from "react";

const NewContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">NewContentPromotionBanner</h2>
      <p className="text-gray-400">NewContentPromotionBanner component</p>
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, BookOpen, TrendingUp, Sparkles, Zap } from 'lucide-react';

interface NewContentPromotionBannerProps {
  variant?: 'info' | 'success' | 'warning' | 'error' | 'default' | 'premium';
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  dismissible?: boolean;
  className?: string;
}

const NewContentPromotionBanner: React.FC<NewContentPromotionBannerProps> = ({
  variant = 'info',
  title = "🚀 NEW CONTENT: Fresh Insights & Expert Guides",
  description = "Discover our latest articles on real-time data pipelines, platform engineering, and GenAI operationalization.",
  ctaText = "Explore Latest Content",
  ctaLink = "/blog",
  dismissible = true,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const variantClasses = {
    info: "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-blue-100",
    success: "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/30 text-green-100",
    warning: "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400/30 text-yellow-100",
    error: "bg-gradient-to-r from-red-500/20 to-pink-500/20 border-red-400/30 text-red-100",
    default: "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-blue-100",
    premium: "bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 border-purple-400/30 text-purple-100",
  };

  const iconClasses = {
    info: "text-blue-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    error: "text-red-400",
    default: "text-blue-400",
    premium: "text-purple-300",
  };

  return (
    <div className={`relative overflow-hidden border rounded-xl p-6 mb-8 animate-fade-in ${variantClasses[variant]} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/5 rounded-full"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className={`w-5 h-5 ${iconClasses[variant]} animate-pulse`} />
                <span className="text-sm font-medium uppercase tracking-wider opacity-90">
                  Fresh Content
                </span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className={`w-4 h-4 ${iconClasses[variant]} animate-bounce`} />
                <span className="text-xs opacity-75">Trending</span>
              </div>
            </div>

            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              {title}
            </h3>

            <p className="text-sm opacity-90 mb-4 max-w-2xl">
              {description}
            </p>

            {/* Featured Content Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen className="w-3 h-3" />
                  <span className="text-xs font-medium">Data Engineering</span>
                </div>
                <div className="text-xs opacity-90">Real-Time Data Pipelines Guide</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-3 h-3" />
                  <span className="text-xs font-medium">Platform Engineering</span>
                </div>
                <div className="text-xs opacity-90">Scorecards That Drive Adoption</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span className="text-xs font-medium">GenAI</span>
                </div>
                <div className="text-xs opacity-90">Production Deployment Patterns</div>
              </div>
            </div>

            <Link
              to={ctaLink}
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 border border-white/30"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {dismissible && (
            <button
              onClick={handleDismiss}
              className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5 opacity-75 hover:opacity-100" />
            </button>
          )}
        </div>
      </div>
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
    </div>
  );
};

<<<<<<< HEAD
export default NewContentPromotionBanner;
=======
export default NewContentPromotionBanner;
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
