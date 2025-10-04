<<<<<<< HEAD
import React from "react";

const LatestContentBanner: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">LatestContentBanner</h2>
      <p className="text-gray-400">LatestContentBanner component</p>
=======
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
                🔥 New Today: Runtime Scorecards · Edge A/B &lt;100ms · Agent Guardrails v2
              </h3>
              <p className="text-sm opacity-90">
                Now live: 3 new guides + dozens of updated insights
              </p>
            </div>
          </div>
          <Link
            to="/blog"
            className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2 flex-shrink-0"
          >
            <TrendingUp className="w-4 h-4" />
            Explore Now
          </Link>
        </div>
      </div>
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
    </div>
  );
};

<<<<<<< HEAD
export default LatestContentBanner;
=======
export default LatestContentBanner;
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
