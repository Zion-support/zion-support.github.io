import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react';

interface ContentPromotionBannerProps {
  variant?: 'success' | 'warning' | 'info' | 'error';
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  dismissible?: boolean;
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  variant = 'info',
  title,
  description,
  ctaText,
  ctaLink,
  dismissible = false,
  className = ''
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const variantStyles = {
    success: 'bg-green-50 border-green-200 text-green-900',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    error: 'bg-red-50 border-red-200 text-red-900'
  };

  const iconComponents = {
    success: CheckCircle,
    warning: AlertTriangle,
    info: Info,
    error: AlertCircle
  };

  const IconComponent = iconComponents[variant];

  return (
    <div className={`border rounded-lg p-4 ${variantStyles[variant]} ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <IconComponent className="w-6 h-6 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1">{title}</h3>
            <p className="text-sm opacity-90">{description}</p>
            {ctaText && ctaLink && (
              <Link
                to={ctaLink}
                className="inline-block mt-3 font-semibold underline hover:no-underline"
              >
                {ctaText}
              </Link>
            )}
          </div>
        </div>
        {dismissible && (
          <button
            onClick={() => setIsDismissed(true)}
            className="ml-2 hover:opacity-70 transition-opacity"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentPromotionBanner;