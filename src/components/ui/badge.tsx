<<<<<<< HEAD
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'default', 
  className = '' ;
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors';
  
  const variantClasses = {
    default: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    destructive: 'bg-red-100 text-red-800 hover:bg-red-200',
    outline: 'border border-gray-200 text-gray-800 hover:bg-gray-50';
};
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <span className={classes}>
      {children}
    </span>
  );
}
=======
import React from 'react'; interface BadgeProps { children: React.ReactNode; variant?: 'default' | 'secondary' | 'destructive' | 'outline'; className? string, } export function Badge({ children, variant = 'default', className = '' }: BadgeProps) { const baseClasses = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors'; const variantClasses = { default: 'bg-blue-100 text-blue-800 hoverbg-blue-200', secondary: 'bg-gray-100 text-gray-800 hoverbg-gray-200', destructive: 'bg-red-100 text-red-800 hoverbg-red-200', outline: 'border border-gray-200 text-gray-800 hoverbg-gray-50' }; const classes = `${baseClasses} ${variantClasses[variant]} ${className}`; return ( <span className="{classes}"> {children} </span> ); }
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
