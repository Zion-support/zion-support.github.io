import React from "react";

interface ServiceWorkerRegistrationProps {
  children?: React.ReactNode;
  className?: string;
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
  children,
  className = "",
}) => {
  return <div className={className}>{children}</ServiceWorkerRegistrationProps>;
};

export default ServiceWorkerRegistration;
