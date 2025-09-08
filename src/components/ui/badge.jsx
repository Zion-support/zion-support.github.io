import React from 'react';
import { cn } from '../../lib/utils';

const Badge = React.forwardRef(({ className, variant = 'default', children, ...props }, ref) => {
  const variantClasses = {
    default: 'border-transparent bg-zion-cyan text-white hover:bg-zion-cyan-dark',
    secondary: 'border-transparent bg-zion-slate text-white hover:bg-zion-slate-dark',
    destructive: 'border-transparent bg-red-600 text-white hover:bg-red-700',
    outline: 'border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white',
    success: 'border-transparent bg-green-600 text-white hover:bg-green-700',
    warning: 'border-transparent bg-yellow-600 text-white hover:bg-yellow-700',
    info: 'border-transparent bg-blue-600 text-white hover:bg-blue-700'
  };

  return (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Badge.displayName = 'Badge';

export { Badge };
