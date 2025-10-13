<<<<<<< HEAD
import React, { useMemo } from "react";
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Footer({ className = '', children, ...props }: FooterProps) {
  return (
    <div className={`footer-component ${className}`} {...props}>
      {children}
    </div>
  );
}
