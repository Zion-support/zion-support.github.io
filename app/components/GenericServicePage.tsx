import React from 'react';

interface GenericServicePageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GenericServicePage({ className, children }: GenericServicePageProps) {
  return (
    <div className={}>
      {children || 'GenericServicePage Component'}
    </div>
  );
}
