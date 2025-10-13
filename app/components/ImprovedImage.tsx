<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b6b8

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
