<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
interface ThemeToggleProps;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

interface ThemeToggleProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ThemeToggle({ className = '', children }: ThemeToggleProps) {
  return (
    <div className={`${className}`}>
      {children}
  </div>
  );
}