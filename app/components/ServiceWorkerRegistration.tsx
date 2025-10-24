<<<<<<< HEAD
'use client';
import React from 'react';
=======
import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
interface ServiceWorkerRegistrationProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default ServiceWorkerRegistration;
=======

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'serviceworkerregistration ' + className}>
      {children || <p>ServiceWorkerRegistration component</p>}
    </div>
  );
};

export default ServiceWorkerRegistration;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
