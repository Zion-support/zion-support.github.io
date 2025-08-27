import React from 'react';

const Badge = ({ children, className = '', variant = 'default' }) => {
<<<<<<< HEAD
  const baseClasses = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors';
  const variantClasses = {
    default: 'border-transparent bg-primary text-primary-foreground',
    secondary: 'border-transparent bg-secondary text-secondary-foreground',
    destructive: 'border-transparent bg-destructive text-destructive-foreground',
    outline: 'text-foreground'
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
=======
    const baseClasses = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors';
    const variantClasses = {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        outline: 'text-foreground'
    };
    return (<div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
      {children}
    </div>);
};

export { Badge };
