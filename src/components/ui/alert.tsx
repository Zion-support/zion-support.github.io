<<<<<<< HEAD
import React from 'react';
import { cn } from '../../lib/utils';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
=======
<<<<<<< HEAD
interface AlertProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;
  className?: string;
=======
import React from 'react.ts';

interface AlertProps extends React.PropsWithChildren<{
}> {

  children: React.ReactNode;
  className?: string}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

<<<<<<< HEAD
export function Alert(...args: any[]): any {;
  return (;
    <div className={`relative w-full rounded-lg border p-4 ${className}`}>;
      {children};
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
}

interface AlertTitleProps {
  children: React.ReactNode;
  className?: string;
<<<<<<< HEAD
=======
=======
  className?: string}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

<<<<<<< HEAD
export function AlertDescription(...args: any[]): any {;
  return (;
    <div className={`text-sm ${className}`}>;
      {children};
    </div>;
  );
<<<<<<< HEAD
}}}}
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
}

interface AlertDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function Alert({ children, className = '' }: AlertProps) {
  return (
    <div className={cn('relative w-full rounded-lg border p-4', className)}>
      {children}
    </div>
  );
}

export function AlertTitle({ children, className = '' }: AlertTitleProps) {
  return (
    <h5 className={cn('mb-1 font-medium leading-none tracking-tight', className)}>
      {children}
    </h5>
  );
}

export function AlertDescription({ children, className = '' }: AlertDescriptionProps) {
  return (
    <div className={cn('text-sm', className)}>
      {children}
    </div>
  );
}
