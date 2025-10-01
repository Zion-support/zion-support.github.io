import React from 'react';
import { X } from 'lucide-react';

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
  const [dismissed, setDismissed] = React.useState(false);

  if (dismissed) return null;

  const variantStyles = {
    info: 'bg-blue-600/20 border-blue-500/30 text-blue-100',
    warning: 'bg-yellow-600/20 border-yellow-500/30 text-yellow-100',
    success: 'bg-green-600/20 border-green-500/30 text-green-100'
  };

  return (
    <div className={`border-b border-white/10 ${variantStyles[variant]}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="font-semibold mb-1">{title}</div>
            <div className="text-sm opacity-90">{description}</div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={ctaLink}
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {ctaText}
            </a>
            {dismissible && (
              <button
                onClick={() => setDismissed(true)}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
