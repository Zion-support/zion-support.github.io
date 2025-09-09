import React from 'react';
import { cn } from '@/lib/utils';

export function Form({ className, children }) {
  return (
    <form className={cn('space-y-6', className)}>
      {children}
    </form>
  );
}

export function FormField({ name, children }) {
  return (
    <div className="space-y-2">
      {children}
    </div>
  );
}

export function FormItem({ className, children }) {
  return (
    <div className={cn('space-y-2', className)}>
      {children}
    </div>
  );
}

export function FormLabel({ className, children }) {
  return (
    <label className={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}>
      {children}
    </label>
  );
}

export function FormControl({ children }) {
  return (
    <div className="space-y-2">
      {children}
    </div>
  );
}

export function FormMessage({ className, children }) {
  return (
    <p className={cn('text-sm text-red-500', className)}>
      {children}
    </p>
  );
}