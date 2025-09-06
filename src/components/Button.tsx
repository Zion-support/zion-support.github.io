import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

  };
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button
    >
      {loading && <LoadingSpinner size="sm" />}
      {children}
    </button>
  );
};

export default Button;