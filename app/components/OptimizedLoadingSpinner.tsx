import React, { memo, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface OptimizedLoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars';
  text?: string;
  className?: string;
  showContactButton?: boolean;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(({
  size = 'md',
  variant = 'spinner',
  text = 'Loading...',
  className = '',
  showContactButton = true
}) => {
  const sizeClasses = useMemo(() => ({
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }), []);

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeClasses[size]} bg-cyan-400 rounded-full animate-bounce`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        );
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-cyan-400 rounded-full animate-pulse`} />
        );
      case 'skeleton':
        return (
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse w-1/2"></div>
          </div>
        );
      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1 bg-cyan-400 animate-pulse`}
                style={{ 
                  height: `${(i + 1) * 8}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        );
      default: // spinner
        return (
          <div className={`${sizeClasses[size]} border-2 border-cyan-400 border-t-transparent rounded-full animate-spin`} />
        );
    }
  };

  return (
    <div className={`optimized-loading-spinner ${className}`}>
      <Helmet>
        <title>Loading | Zion Tech Group</title>
        <meta name="description" content="Loading content, please wait..." />
      </Helmet>
      
      <div className="flex flex-col items-center justify-center space-y-4">
        {renderSpinner()}
        {text && <p className="text-white text-lg">{text}</p>}
        {showContactButton && (
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
});

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';

export default OptimizedLoadingSpinner;