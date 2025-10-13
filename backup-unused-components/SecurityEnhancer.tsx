<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
interface SecurityEnhancerProps;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

interface SecurityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SecurityEnhancer({ className = '', children }: SecurityEnhancerProps) {
  return (
    <div className={`${className}`}>
      {children}
  </div>
  );
}