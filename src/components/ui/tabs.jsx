import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Tabs = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('w-full', className)} {...props}>
      {children}
    </div>
  );
});
Tabs.displayName = 'Tabs';

const TabsList = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md bg-zion-slate-dark p-1 text-zion-slate-light border border-zion-cyan/20',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
TabsList.displayName = 'TabsList';

const TabsTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-cyan focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-zion-cyan data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-zion-slate hover:text-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-cyan focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsContent };
