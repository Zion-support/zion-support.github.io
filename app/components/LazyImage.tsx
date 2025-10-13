<<<<<<< HEAD
<<<<<<< HEAD
import { ImageIcon } from 'lucide-react';
=======
import React, { useState, useRef, useEffect } from 'react';

>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
interface LazyImageProps {
  src: string;
  alt: string;
=======
import { lazy } from 'react';
import React from 'react';

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
