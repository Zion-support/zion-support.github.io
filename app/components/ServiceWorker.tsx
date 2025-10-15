import React from "react"
interface ServiceWorkerProps {
  // TODO: Implement
}
  children?: React.ReactNode
  className?: string
}
;
const ServiceWorker: React.FC<ServiceWorkerProps> = ({;
  children, className = "", }) => {;
  return <div className={className}>{children}</div>;
};

export default ServiceWorker;
