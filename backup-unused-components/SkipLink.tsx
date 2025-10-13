<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
interface SkipLinkProps;
  children?: React.ReactNode;
  className?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

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