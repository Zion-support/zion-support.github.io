<<<<<<< HEAD
import React, { useState, useCallback, useMemo } from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Navigation({ className = '', children, ...props }: NavigationProps) {
  return (
    <div className={`navigation-component ${className}`} {...props}>
      {children}
    </div>
  );
}
