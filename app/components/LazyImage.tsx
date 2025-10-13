<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

interface LazyimageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Lazyimage({ className = '', children, ...props }: LazyimageProps) {
  return (
    <div className={`lazyimage-component ${className}`} {...props}>
      {children}
    </div>
  );
}
