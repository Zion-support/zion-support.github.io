import React from 'react';

interface ContentPromotionBannerProps {
  variant?: string;
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
    <div className={`bg-${variant === 'info' ? 'blue' : 'green'}-600 text-white py-4 px-6`}>
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        <a href={ctaLink} className="bg-white text-gray-900 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
