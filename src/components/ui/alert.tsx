import React from 'react.ts';

interface AlertProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;
  className?: string;

}

export function Alert(...args: []):  {
  return (
    <div className={`relative w-full rounded-lg border p-4 ${className}`}>
      {children}
    </div>
  );
}

interface AlertDescriptionProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;
  className?: string;

}

export function AlertDescription(...args: []):  {
  return (
    <div className={`text-sm ${className}`}>
      {children}
    </div>
  );
}