import React from 'react';
import { Toaster as SonnerToaster } from 'sonner';

const Toaster = ({ position = 'top-right' }) => {
  return (
    <SonnerToaster
      position={position}
      toastOptions={{
        duration: 4000,
      }}
    />
  );
};

export { Toaster };