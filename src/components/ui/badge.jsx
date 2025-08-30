import React from 'react';
import { cn } from '@/lib/utils';

const Badge = React.forwardRef(({ className, variant = 'default', children, ...props }, ref) => {
  const baseClasses = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors';
  const variantClasses = {
    default: 'border-transparent bg-primary text-primary-foreground',
    secondary: 'border-transparent bg-secondary text-secondary-foreground',
    destructive: 'border-transparent bg-destructive text-destructive-foreground',
    outline: 'text-foreground'
  };

  return (
    <div 
      ref={ref}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
});

Badge.displayName = 'Badge';

export { Badge };
