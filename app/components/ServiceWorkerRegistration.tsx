import React from 'react';

interface ServiceWorkerRegistrationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceWorkerRegistration({ 
  className = '',
  children 
}: ServiceWorkerRegistrationProps) {
  return (
    <div className={`bg-gray-800 rounded-lg p-4 ${className}`}>
      <h3 className="text-white font-semibold mb-2">ServiceWorkerRegistration</h3>
      {children && <div className="text-gray-300">{children}</div>}
    </div>
  );
}
