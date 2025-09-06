import React from 'react';

export function Button({ 
  children, 
  variant = 'default', 
  size = 'md', 
  asChild = false, 
  className = '', 
  onClick, 
  type = 'button', 
  disabled = false 
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 disabled:bg-gray-50',
    ghost: 'hover:bg-gray-100 disabled:bg-transparent',
    link: 'text-blue-600 underline-offset-4 hover:underline disabled:text-gray-400'
  };
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (asChild) {
    return React.cloneElement(children, { className: classes });
  }
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}