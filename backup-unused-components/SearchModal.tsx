<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
interface SearchModalProps;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

interface SearchModalProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SearchModal({ className = '', children }: SearchModalProps) {
  return (
    <div className={`${className}`}>
      {children}
  </div>
  );
}