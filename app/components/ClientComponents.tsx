import React from 'react';

interface ClientComponentsProps {
  children: React.ReactNode;
}

export default function ClientComponents({ children }: ClientComponentsProps) {
  return (
    <div>
      {children}
    </div>
  );
}