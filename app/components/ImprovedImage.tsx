<<<<<<< HEAD
<<<<<<< HEAD
import { ImageIcon } from 'lucide-react';
=======
import React, { useState, useRef, useEffect } from 'react';
import { Cloud } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
=======
import React, { useRef, useState, useEffect } from 'react';
import { ImageIcon } from 'lucide-react';
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

interface ImprovedimageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Improvedimage({ className = '', children, ...props }: ImprovedimageProps) {
  return (
    <div className={`improvedimage-component ${className}`} {...props}>
      {children}
    </div>
  );
};

// Preload component for critical images
export const PreloadImage: React.FC<{ src: string; as?: string }> = ({ 
  src, 
  as = 'image' 
}) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = as;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [src, as]);

  return null;
};

// Image with blur placeholder
export const BlurImage: React.FC<ImprovedImageProps & { blurDataURL?: string }> = ({
  blurDataURL,
  ...props
}) => {
  return (
    <ImprovedImage
      {...props}
      placeholder={blurDataURL}
    />
  );
};

