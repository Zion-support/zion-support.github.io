import React from 'react';
import { Link } from 'react-router-dom';

export interface BannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  href: string;
  badge?: {
    text: string;
    color: 'green' | 'blue' | 'purple' | 'yellow' | 'red' | 'cyan';
    animated?: boolean;
  };
  icon?: string;
  className?: string;
}

const colorClasses = {
  green: 'bg-gradient-to-r from-green-500 to-emerald-500',
  blue: 'bg-gradient-to-r from-blue-500 to-cyan-500',
  purple: 'bg-gradient-to-r from-purple-500 to-indigo-500',
  yellow: 'bg-gradient-to-r from-yellow-400 to-orange-500',
  red: 'bg-gradient-to-r from-red-500 to-orange-500',
  cyan: 'bg-gradient-to-r from-cyan-500 to-blue-500',
};

export const UnifiedBanner: React.FC<BannerProps> = ({
  title,
  subtitle,
  description,
  href,
  badge,
  icon,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            {icon && <span className="text-2xl">{icon}</span>}
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {badge && (
              <span className={`${colorClasses[badge.color]} text-white px-3 py-1 rounded-full text-xs font-semibold ${
                badge.animated ? 'animate-pulse' : ''
              }`}>
                {badge.text}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-sm text-gray-600 mb-2">{subtitle}</p>
          )}
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}
        </div>
        <Link
          to={href}
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default UnifiedBanner;