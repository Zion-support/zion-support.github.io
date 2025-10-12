

'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
'use client';

interface ContentPromotionBannerProps {
  title?: string;
  subtitle?: string;
  features?: string[];
  buttonText?: string;
 void;
  variant?: 'default' | 'premium' | 'limited';

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
    switch (variant) {
      case 'premium':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'limited':
        return 'bg-gradient-to-r from-red-600 to-orange-600';
      default: return 'bg-gradient-to-r from-blue-600 to-purple-600';
  };

  return (
      {/* Background Pattern */}

        </div></div>

            <h3 className="text-2 xl lg: text-3 xlfont-boldmb-2">{title}</h3>
            <p className="text-lgtext-white/90mb-4">{subtitle}</p>

 (
    
                  <span>{feature}</span>

              ))}

              {buttonText}

  );
};

export default ContentPromotionBanner;

