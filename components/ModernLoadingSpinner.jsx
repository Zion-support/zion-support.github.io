import React from 'react';

const ModernLoadingSpinner = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`${sizeClasses[size]} relative`}>
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full animate-spin" 
             style={{ borderTopColor: 'transparent' }}></div>
        
        {/* Inner ring */}
        <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin" 
             style={{ 
               borderTopColor: 'currentColor',
               animationDirection: 'reverse',
               animationDuration: '0.75s'
             }}></div>
        
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {text && (
        <p className="text-sm text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default ModernLoadingSpinner;