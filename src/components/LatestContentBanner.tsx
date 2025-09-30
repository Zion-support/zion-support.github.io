import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp } from 'lucide-react';

interface LatestContentBannerProps {
  variant?: 'info' | 'success' | 'warning';
  autoRotate?: boolean;
  rotationInterval?: number;
  className?: string;
}

const LatestContentBanner: React.FC<LatestContentBannerProps> = ({
  variant = 'info',
  className = ''
}) => {
  const variantStyles = {
    info: 'bg-gradient-to-r from-blue-600 to-indigo-600',
    success: 'bg-gradient-to-r from-green-600 to-emerald-600',
    warning: 'bg-gradient-to-r from-yellow-600 to-orange-600'
  };

  return (
    <div className={`${variantStyles[variant]} text-white p-4 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <div>
              <h3 className="font-bold text-lg">
                🔥 New: Self‑Healing Platforms · Private Personalization · Eval Scorecards
              </h3>
              <p className="text-sm opacity-90">
                Read AI 2029 Self‑Healing, Edge 2028 Personalization, and GenAI 2028 Eval Scorecards
              </p>
            </div>
          </div>
          <Link
            to="/blog/ai-2029-self-healing-platforms"
            className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2 flex-shrink-0"
          >
            <TrendingUp className="w-4 h-4" />
            Read Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestContentBanner;