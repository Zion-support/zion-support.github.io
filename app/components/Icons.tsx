import React from 'react';

interface IconsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Icons({ className, children }: IconsProps) {
  return (
    <div className={}>
      {children || 'Icons Component'}
    </div>
  );
}
