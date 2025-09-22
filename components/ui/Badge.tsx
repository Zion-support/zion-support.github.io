import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
}

const badgeVariants = {
  default: 'bg-blue-100 text-blue-800 border-blue-200',
  secondary: 'bg-gray-100 text-gray-800 border-gray-200',
  destructive: 'bg-red-100 text-red-800 border-red-200',
  outline: 'border border-gray-300 text-gray-700 bg-transparent',
};

export function Badge({ 
  children, 
  variant = 'default', 
  className = '' 
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border';
  const variantClasses = badgeVariants[variant];
  
  return (
    <span className={cn(baseClasses, variantClasses, className)}>
      {children}
    </span>
  );
}

export default Badge;