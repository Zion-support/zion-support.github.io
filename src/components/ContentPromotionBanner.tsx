import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ContentPromotionBannerProps {
  variant?: "info" | "success" | "warning" | "danger";
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  dismissible?: boolean;
  className?: string;
}

export default function ContentPromotionBanner(props: ContentPromotionBannerProps): React.JSX.Element {
  const {
    variant = "info",
    title = "New content available",
    description,
    ctaText = "Learn more",
    ctaLink = "/blog",
    dismissible = false,
    className = ""
  } = props;

  const [hidden, setHidden] = useState(false);
  if (hidden) return <></>;

  const variantClasses: Record<string, string> = {
    info: "bg-blue-600 text-white",
    success: "bg-emerald-600 text-white",
    warning: "bg-amber-600 text-black",
    danger: "bg-rose-600 text-white",
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`} aria-label="Content Promotion Banner">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex-1">
          {title && <div className="font-semibold text-base md:text-lg">{title}</div>}
          {description && <div className="opacity-90 text-sm md:text-base">{description}</div>}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {ctaLink && (
            <Link to={ctaLink} className="bg-white/90 hover:bg-white text-current px-4 py-2 rounded-lg font-semibold text-sm">
              {ctaText}
            </Link>
          )}
          {dismissible && (
            <button onClick={() => setHidden(true)} className="/bg-white/20 border border-white/30 rounded-md px-3 py-2 text-sm">
              Dismiss
            </button>
          )}
        </div>
      </div>
    </div>
  );
}