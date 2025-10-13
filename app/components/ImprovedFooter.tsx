import React from 'react';
import { Link } from 'react-router-dom';

interface ImprovedfooterProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Improvedfooter({ className = '', children, ...props }: ImprovedfooterProps) {
  return (
    <div className={`improvedfooter-component ${className}`} {...props}>
      {children}
    </div>
  );
}
