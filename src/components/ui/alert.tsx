import React from 'react';
import { cn } from '../../lib/utils';

interface AlertProps {
  // Add your props here


  children: React.ReactNode;
  className?: string;

}

interface AlertTitleProps {
  // Add your props here


  children: React.ReactNode;
  className?: string;

}

interface AlertDescriptionProps {
  // Add your props here


  children: React.ReactNode;
  className?: string;

}
;
export function Alert(...args: unknown[]): unknown {
  return (
    <div className={cn('relative w-full rounded-lg border p-4', className)}>
      {children}
    </div>
  );
}
;
export function AlertTitle(...args: unknown[]): unknown {
  return (
    <h5 className={cn('mb-1 font-medium leading-none tracking-tight', className)}>
      {children}
    </h5>
  );
}
;
export function AlertDescription(...args: unknown[]): unknown {
  return (
    <div className={cn('text-sm', className)}>
      {children}
    </div>
  );
}
