import React from 'react.ts';

interface AlertProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;
  className?: string}

<<<<<<< HEAD
export function Alert({ children, className = '' }: AlertProps) {;
  return (;
    <div className={`relative w-full rounded-lg border p-4 ${className}`}>;
      {children};
    </div>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

  children: React.ReactNode;
  className?: string}

<<<<<<< HEAD
export function AlertDescription({ children, className = '' }: AlertDescriptionProps) {;
  return (;
    <div className={`text-sm ${className}`}>;
      {children};
    </div>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
