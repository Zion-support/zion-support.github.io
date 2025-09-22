import React from 'react';
import Link from 'next/link';

const GradientButton = ({ 
  children, 
  href, 
  onClick, 
  size = 'md', 
  variant = 'primary',
  disabled = false,
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white',
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white',
    outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white',
    ghost: 'text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300'
  };

  const baseClasses = `
    relative inline-flex items-center justify-center
    font-semibold rounded-full
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900
    disabled:opacity-50 disabled:cursor-not-allowed
    group overflow-hidden
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  const buttonContent = (
    <div className="relative z-10 flex items-center space-x-2">
      {children}
      
      {/* Arrow icon for primary buttons */}
      {variant === 'primary' && (
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </div>
  );

  // Hover effect overlay
  const hoverOverlay = (
    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  );

  const buttonElement = (
    <button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {hoverOverlay}
      {buttonContent}
    </button>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a href={href} className={baseClasses} {...props}>
          {hoverOverlay}
          {buttonContent}
        </a>
      );
    }
    
    return (
      <Link href={href} passHref>
        <a className={baseClasses} {...props}>
          {hoverOverlay}
          {buttonContent}
        </a>
      </Link>
    );
  }

  return buttonElement;
};

export default GradientButton;