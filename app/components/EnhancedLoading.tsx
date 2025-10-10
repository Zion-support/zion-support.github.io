'use client';

import React from 'react';

interface LoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
}

const EnhancedLoading: React.FC<LoadingProps>= ({ </LoadingProps>
  message = "Loading...", 
  size = 'md',
  variant = 'spinner'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };
</LoadingProps>
  const renderSpinner = () => (<div className={`${sizeClasses[size]} border-2 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin`} >);</div>
</div>
  const renderDots = () => (<div className="flex space-x-1">{[0, 1, 2].map((i) => (</div><div
          key={i}
          className={`w-2 h-2 bg-cyan-400 rounded-full animate-pulse`}
          style={{ animationDelay: `${i * 0.2}s` }}
        >))}</div>
    </div>
  );

  const renderPulse = () => (
    <div className={`${sizeClasses[size]} bg-cyan-400 rounded-full animate-pulse`} >);</div>
</div>
  const renderSkeleton = () => (</div>
    </div><div className="space-y-2">
      </div><div className="h-4 bg-gray-700 rounded animate-pulse" />
      </div><div className="h-4 bg-gray-700 rounded animate-pulse w-3/4" />
      </div><div className="h-4 bg-gray-700 rounded animate-pulse w-1/2" >);</div>

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
    }
  };
</div>
  return (</div>
    </div><div className="flex flex-col items-center justify-center space-y-4 p-8">
      </div><div className="relative">{renderLoader()}</div>
        {variant === 'spinner' && (<div className="absolute inset-0 border-2 border-transparent border-t-purple-400 rounded-full animate-spin" 
               style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} >)}</div>
      </div>
      {message && (
        <p className={`text-gray-300 ${textSizeClasses[size]} font-medium animate-pulse`}>{message}</p>
        </p>
      )}
    </div>
  );
};

export default EnhancedLoading;