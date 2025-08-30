import React from 'react';
import { cn } from '../../lib/utils';

const Badge = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2',
        {
          'border-transparent bg-zion-cyan text-white hover:bg-zion-cyan-dark': variant === 'default',
          'border-transparent bg-zion-slate text-white hover:bg-zion-slate-dark': variant === 'secondary',
          'border-transparent bg-red-600 text-white hover:bg-red-700': variant === 'destructive',
          'border-zion-cyan text-zion-cyan bg-transparent': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
});

Badge.displayName = 'Badge';

export { Badge };
