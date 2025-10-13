<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
interface ServiceWorkerRegistrationProps;
  children?: React.ReactNode;
  className?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

<<<<<<< HEAD
interface ServiceWorkerRegistrationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceWorkerRegistration({ className = '', children }: ServiceWorkerRegistrationProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
<<<<<<< HEAD
const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = (
  children,
=======
const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
//   children,
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  className = "",
) => 
  return <div className="{className}">{children}</div>;
;
export default ServiceWorkerRegistration;
</ServiceWorkerRegistrationProps>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
