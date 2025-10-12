'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  subtitle?: string;
  features?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: 'default' | 'premium' | 'limited';
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Unlock Premium Features",
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
      default:
        return 'bg-gradient-to-r from-blue-600 to-purple-600';
    }
  };

  return (
    <div>
      </ContentPromotionBannerProps>
      </CheckCircle>
      </ArrowRight>
      {/* Background Pattern */}
      <div>
        <div></div>
      </div>

      <div>
        <div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">{title}</h3>
            <p className="text-lg text-white/90 mb-4">{subtitle}</p>

            <div>
              {features.map((feature, index) => (
                <div>
                  <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <button;
onClick={onButtonClick}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;