import React from 'react';

interface MicroSaasServicesProps {
  children: React.ReactNode;
}

export default function MicroSaasServices({ children }: MicroSaasServicesProps) {
  return (
    <div>
      {children}
    </div>
  );
}