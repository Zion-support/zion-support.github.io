'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load performance and monitoring components
const ServiceWorkerRegistration = dynamic(() => import('./ServiceWorkerRegistration'), {
  ssr: false,
  loading: () => null
});

interface ClientComponentsProps {
  children: React.ReactNode;
}

const ClientComponents: React.FC<ClientComponentsProps> = ({ children }) => {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <ServiceWorkerRegistration />
      </Suspense>
    </>
  );
};

export default ClientComponents;