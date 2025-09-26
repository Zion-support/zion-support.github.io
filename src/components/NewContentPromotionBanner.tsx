import React from 'react';

interface NewContentPromotionBannerProps {
  className?: string;
}

const NewContentPromotionBanner: React.FC<NewContentPromotionBannerProps> = ({ className = '' }) => {
  return (
    <div className={`ewcontentpromotionbanner ${className}`}>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">🚀 NewContentPromotionBanner</h3>
        <p className="text-sm opacity-90">
          Advanced AI-powered component for enhanced user experience and business automation.
        </p>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;