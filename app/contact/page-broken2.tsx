import React from 'react';

interface PageBroken2Props {
  className?: string;
  children?: React.ReactNode;
}

export default function PageBroken2({ className = '', children }: PageBroken2Props) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}