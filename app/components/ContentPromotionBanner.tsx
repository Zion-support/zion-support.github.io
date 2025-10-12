import React from 'react';
import { ArrowRight, X } from 'lucide-react';

interface ContentPromotionBannerProps {
  onClose?: () => void;
  showCloseButton?: boolean;
}

export default function ContentPromotionBanner({ 
  onClose, 
  showCloseButton = true 
}: ContentPromotionBannerProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold mb-1">
            🚀 Transform Your Business with AI & IT Solutions
          </h3>
          <p className="text-sm text-blue-100">
            Get started today and unlock the power of cutting-edge technology
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          
          {showCloseButton && onClose && (
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

