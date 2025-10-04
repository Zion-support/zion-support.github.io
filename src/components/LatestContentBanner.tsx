import React from 'react';
<<<<<<< HEAD
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
=======

interface LatestContentBannerProps {
  className?: string;
  children?: React.ReactNode;
}

const LatestContentBanner: React.FC<LatestContentBannerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`latestcontentbanner-component ${className}`}>
      {children || (
        <div className="p-4 text-center text-gray-600">
          <h3 className="text-lg font-semibold mb-2">LatestContentBanner</h3>
          <p>Component placeholder - implementation needed</p>
        </div>
      )}
>>>>>>> cursor/fix-errors-and-merge-to-main-8d57
    </div>
  );
};

<<<<<<< HEAD
export default LatestContentBanner;
=======
export default LatestContentBanner;
>>>>>>> cursor/fix-errors-and-merge-to-main-8d57
