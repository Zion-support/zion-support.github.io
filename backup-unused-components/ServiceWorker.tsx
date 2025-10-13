<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
interface ServiceWorkerProps;
  children?: React.ReactNode;
  className?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

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