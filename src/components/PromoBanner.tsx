import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'default' | 'success' | 'warning' | 'info';

interface PromoBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: Variant;
  isVisible?: boolean;
}

export function PromoBanner({
  title = '🚀 New Content Just Dropped!',
  description = 'Fresh guides, case studies, and resources to help you execute faster.',
  ctaText = 'Explore Content',
  ctaHref = '/blog',
  variant = 'default',
  isVisible = true
}: PromoBannerProps) {
  if (!isVisible) return null;

  const variantToClasses: Record<Variant, { container: string; text: string; button: string }> = {
    default: {
      container: 'bg-gradient-to-r from-purple-500 to-pink-600',
      text: 'text-white',
      button: 'bg-white text-purple-600 hover:bg-gray-100'
    },
    success: {
      container: 'bg-gradient-to-r from-green-500 to-emerald-600',
      text: 'text-white',
      button: 'bg-white text-green-600 hover:bg-gray-100'
    },
    warning: {
      container: 'bg-gradient-to-r from-orange-500 to-red-500',
      text: 'text-white',
      button: 'bg-white text-orange-600 hover:bg-gray-100'
    },
    info: {
      container: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      text: 'text-white',
      button: 'bg-white text-blue-600 hover:bg-gray-100'
    }
  };

  const styles = variantToClasses[variant];

  return (
    <div className={`${styles.container} py-4 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center sm:text-left">
            <h3 className={`text-lg font-bold ${styles.text} mb-1`}>{title}</h3>
            <p className={`text-sm ${styles.text} opacity-90`}>{description}</p>
          </div>

          <div className="flex-shrink-0">
            <Link to={ctaHref} className={`${styles.button} px-6 py-2 rounded-lg font-semibold transition-colors text-sm`}>
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedContentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = window.innerHeight;
      setIsVisible(!isDismissed && y > h * 0.3);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div className="mx-auto max-w-xl rounded-xl shadow-2xl border border-white/20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="mb-1 text-sm font-medium bg-white/20 px-2 py-1 rounded-full inline-block">NEW</div>
              <h3 className="text-lg font-bold mb-1">Latest AI Articles Are Live</h3>
              <p className="text-sm opacity-90 mb-3">Read our newest posts on GenAI sales, secure RAG, and autonomous ops.</p>
              <div className="flex gap-2">
                <Link to="/blog" className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-sm">Read Now</Link>
                <button onClick={() => setIsDismissed(true)} className="border border-white/70 px-4 py-2 rounded-lg text-white/90 hover:bg-white/10 text-sm">Dismiss</button>
              </div>
            </div>
            <button onClick={() => setIsDismissed(true)} className="text-white/80 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

