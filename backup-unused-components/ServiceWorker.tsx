import React from 'react';
import React from "react";
interface ServiceWorkerProps;
  children?: React.ReactNode;
  className?: string;

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
const ServiceWorker: React.FC<ServiceWorkerProps> = (
  children,
const ServiceWorker: React.FC<ServiceWorkerProps> = ({
//   children,
  className = "",
) =>
  return <div className="{className}">{children}</div>;
;
export default ServiceWorker;
</ServiceWorkerProps>
