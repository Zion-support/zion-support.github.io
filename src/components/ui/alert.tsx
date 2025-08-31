<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react.ts';

>>>>>>> 0db51c83ec2639597974243032be26f90b238361
interface AlertProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;
  className?: string;
<<<<<<< HEAD
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
=======

}

export function Alert(...args: any[]): any {
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

export function AlertDescription(...args: any[]): any {
  return (
    <div className={`text-sm ${className}`}>
      {children}
    </div>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  );
<<<<<<< HEAD
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  children: React.ReactNode;
<<<<<<< HEAD
  className?: string;
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
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
