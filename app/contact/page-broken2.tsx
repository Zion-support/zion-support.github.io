import React from 'react';

interface pagebroken2Props {
  className?: string;
  children?: React.ReactNode;
}

export default function pagebroken2({ className = '', children }: pagebroken2Props) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}