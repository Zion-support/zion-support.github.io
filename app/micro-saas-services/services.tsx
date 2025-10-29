import React from 'react';

interface ServicesProps {
  children: React.ReactNode;
}

export default function Services({ children }: ServicesProps) {
  return (
    <div>
      {children}
    </div>
  );
}