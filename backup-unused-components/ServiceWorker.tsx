<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
interface ServiceWorkerProps;
  children?: React.ReactNode;
  className?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

<<<<<<< HEAD
interface ServiceWorkerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceWorker({ className = '', children }: ServiceWorkerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
<<<<<<< HEAD
const ServiceWorker: React.FC<ServiceWorkerProps> = (
  children,
=======
const ServiceWorker: React.FC<ServiceWorkerProps> = ({
//   children,
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  className = "",
) => 
  return <div className="{className}">{children}</div>;
;
export default ServiceWorker;
</ServiceWorkerProps>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
