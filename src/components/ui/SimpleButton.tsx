import React from 'react';
import { Link } from 'react-router-dom';
interface SimpleButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'default' | 'outline';
  className?: string;
  onClick?: () => void;
}
const SimpleButton: React.FC<SimpleButtonProps> = ({ 
  children, 
  href,
  variant = 'default',
  className = '',
  onClick
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2';
  
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500'
  };
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default SimpleButton;