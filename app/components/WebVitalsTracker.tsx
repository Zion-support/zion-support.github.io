import React from 'react';
interface WebvitalstrackerProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Webvitalstracker({ className = '', children, ...props }: WebvitalstrackerProps) {
  return (
    <div className={`webvitalstracker-component ${className}`} {...props}>
      {children}
    </div>
  );
}