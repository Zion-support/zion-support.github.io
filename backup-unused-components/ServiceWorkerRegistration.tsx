<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
interface ServiceWorkerRegistrationProps;
  children?: React.ReactNode;
  className?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

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