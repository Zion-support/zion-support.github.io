<<<<<<< HEAD
import React from "react";
import { cn } from "../../lib/utils";
=======
import React from 'react';
import { cn } from '../../lib/utils';
>>>>>>> da3c549c14ad0d2a580007f3c8b06256cb24f4aa

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
}

<<<<<<< HEAD
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, variant = 'default', className, ...props }, ref) => {
    const variantClasses = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
=======
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

>>>>>>> da3c549c14ad0d2a580007f3c8b06256cb24f4aa
export default Badge;