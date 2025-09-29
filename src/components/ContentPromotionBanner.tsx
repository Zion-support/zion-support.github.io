import React from 'react';

interface ContentPromotionBannerProps {
  variant?: 'info' | 'warning' | 'success';
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  dismissible?: boolean;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  variant = 'info',
  title,
  description,
  ctaText,
  ctaLink,
  dismissible = false
}) => {
  return (
    <div className={`bg-gradient-to-r ${
      variant === 'info' ? 'from-blue-500 to-blue-600' :
      variant === 'warning' ? 'from-yellow-500 to-orange-500' :
      'from-green-500 to-green-600'
    } text-white p-4 rounded-lg shadow-lg`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        <a
          href={ctaLink}
          className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;