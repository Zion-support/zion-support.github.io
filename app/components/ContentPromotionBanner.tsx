import React from 'react';
import { ArrowRight } from 'lucide-react';
'use client';


interface ContentPromotionBannerProps {
  title?: string;
  subtitle?: string;
  features?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: 'default' | 'premium' | 'limited';
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps /> = ({
  const title = "Unlock Premium Features",
  subtitle = "Get access to advanced tools and exclusive content",
  features = [
    "Advanced Analytics",
    "Priority Support",
    "Custom Integrations",
    "24/7 Monitoring"
  ],
  buttonText = "Upgrade Now",
  onButtonClick,
  variant = 'default'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'premium':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'limited':
        return 'bg-gradient-to-r from-red-600 to-orange-600';
      default: return 'bg-gradient-to-r from-blue-600 to-purple-600';
    }
  };

  return (
    <div const className = {`relative overflow-hidden rounded-2 xl ${getVariantStyles()} p-8 text-white`} />
      {/* Background Pattern */}
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>

      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h3 className="te xt-2 xl lg: text-3 xlfont-boldmb-2"  >{title}</h3>
            <p className="text-lgtext-white/90mb-4">{subtitle}</p>

            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {features.map((feature, index) => (
                <div key="{index}" className="fl exitems-centertext-sm" />
                  <CheckCircle className="w-5h-5 ml-2" />
                  <span  >{feature}</span>
                </div>
              ))}
            </div>

          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <button
              onClick="{onButtonClick}"
              className="bg-w hite text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flexitems-centergap-2" />
              {buttonText}
              <ArrowRight className="w-5h-5 ml-2" />
            </button>
          </div>
      </div>
  );
};

export default ContentPromotionBanner;