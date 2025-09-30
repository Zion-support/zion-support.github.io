import React, { useState } from 'react';

interface ContentPromotionBannerProps {
	variant?: "info" | "success" | "warning" | "danger";
	title?: string;
	description?: string;
	ctaText?: string;
	ctaLink?: string;
	dismissible?: boolean;
}

const variantStyles: Record<string, string> = {
  info: 'from-indigo-500/15 to-blue-500/15 border-indigo-400/30 text-indigo-100',
  success: 'from-emerald-500/15 to-teal-500/15 border-emerald-400/30 text-emerald-100',
  warning: 'from-amber-500/15 to-orange-500/15 border-amber-400/30 text-amber-100',
  danger: 'from-rose-500/15 to-red-500/15 border-rose-400/30 text-rose-100'
};

export default function ContentPromotionBanner(props: ContentPromotionBannerProps): React.JSX.Element {
  const {
    variant = 'info',
    title = 'New content just landed',
    description = 'Explore our latest articles, guides, and success stories.',
    ctaText = 'Read now',
    ctaLink = '/blog',
    dismissible = false,
    className = ''
  } = props;

  const [visible, setVisible] = useState(true);

  if (!visible) {
    return <></>;
  }

  return (
    <div className={`w-full`}>
      <div
        className={`mx-auto px-6 py-4 bg-gradient-to-r ${variantStyles[variant]} border rounded-none ${className}`}
        role="region"
        aria-label="Content Promotion Banner"
      >
        <div className="container mx-auto flex flex-col md:flex-row md:items-center gap-3 justify-between">
          <div className="flex-1">
            <div className="text-sm uppercase tracking-wide opacity-80">Latest</div>
            <div className="text-white font-semibold text-lg">{title}</div>
            <div className="text-white/80 text-sm">{description}</div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to={ctaLink}
              className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold text-sm"
            >
              {ctaText}
            </Link>
            {dismissible && (
              <button
                aria-label="Dismiss promotion"
                className="text-white/70 hover:text-white text-sm"
                onClick={() => setVisible(false)}
              >
                Dismiss
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}