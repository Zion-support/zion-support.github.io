<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
interface SearchBarProps;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

interface SearchBarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SearchBar({ className = '', children }: SearchBarProps) {
  return (
    <div className={`${className}`}>
      {children}
  </div>
  );
}