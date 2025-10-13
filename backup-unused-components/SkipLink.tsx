<<<<<<< HEAD
import React from 'react';
import React from "react";
interface SkipLinkProps;
  children?: React.ReactNode;
  className?: string;

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
interface SkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SkipLink({ className = '', children }: SkipLinkProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
