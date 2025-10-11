import React from 'react';
interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';}
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
  }
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',}const colorClasses = {primary: 'text-indigo-600',
    secondary: 'text-gray-600',
    white: 'text-white'
  }
    </div>;
  );
};

export default LoadingSpinner;
