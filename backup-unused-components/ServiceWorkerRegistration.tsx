import React from 'react';
import React from "react";
interface ServiceWorkerRegistrationProps;
  children?: React.ReactNode;
  className?: string;

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
const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = (
  children,
const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
//   children,
  className = "",
) =>
  return <div className="{className}">{children}</div>;
;
export default ServiceWorkerRegistration;
</ServiceWorkerRegistrationProps>

