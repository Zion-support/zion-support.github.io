<<<<<<< HEAD
import React from 'react';
=======
import React from 'react';';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
interface LatestContentBannerProps {
variant?: 'info' | 'success' | 'warning';,
autoRotate?: boolean;,
rotationInterval?: number;,
className?: string;
}

<<<<<<< HEAD
const LatestContentBanner: React.FC<LatestContentBannerProps> = ({
  variant = 'info'
  className = ''
}) => {
  const variantStyles = {
    info: 'bg-gradient-to-r from-blue-600 to-indigo-600',',
    success: 'bg-gradient-to-r from-green-600 to-emerald-600',',
    warning: 'bg-gradient-to-r from-yellow-600 to-orange-600};

  return (
    <div className={`${variantStyles[variant]} text-white p-4 ${className}`}>`;
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 animate-pulse/>
            <div>
              <h3 className="font-bold text-lg">
                🔥 New Today: Runtime Scorecards · Edge A/B &lt;100ms · Agent Guardrails v2,
              </h3>
              <p className="text-sm opacity-90">
=======
const LatestContentBanner: React.FC<LatestContentBannerProps> = ({,
  variant = 'info',';
  className = ''
}) => {
  const variantStyles = {
    info: 'bg-gradient-to-r from-blue-600 to-indigo-600',';,
    success: 'bg-gradient-to-r from-green-600 to-emerald-600',';,
    warning: 'bg-gradient-to-r from-yellow-600 to-orange-600',
  };

  return (
    <div className={`${variantStyles[variant]} text-white p-4 ${className}`}>`;
      <div className="container mx-auto px-6">";
        <div className="flex items-center justify-between flex-wrap gap-4">";
          <div className="flex items-center gap-3">";
            <Sparkles className="w-6 h-6 animate-pulse" />";
            <div>
              <h3 className="font-bold text-lg">";
                🔥 New Today: Runtime Scorecards · Edge A/B &lt;100ms · Agent Guardrails v2,
              </h3>
              <p className="text-sm opacity-90">";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
                Now live: 3 new guides + dozens of updated insights,
              </p>
            </div>
          </div>
          <Link
            to="/blog"
            className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover: bg-opacity-90 transition-all flex items-center gap-2 flex-shrink-0",
          >
<<<<<<< HEAD
            <TrendingUp className="w-4 h-4/>
=======
            <TrendingUp className="w-4 h-4" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestContentBanner;