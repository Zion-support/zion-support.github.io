<<<<<<< HEAD
'use client';
import React from 'react';
=======
import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
interface ServiceWorkerRegistrationProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({ className, children }) => {
  return (
    <div className={className}>
=======

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
      {children}
    </div>
  );
};
<<<<<<< HEAD
export default ServiceWorkerRegistration;
=======

export default ServiceWorkerRegistration;
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
