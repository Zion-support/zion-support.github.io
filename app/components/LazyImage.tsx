import React, { useState, useRef, useEffect } from 'react';

interface LazyimageProps {
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
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
