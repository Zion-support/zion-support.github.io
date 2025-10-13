<<<<<<< HEAD

import React, { useState, useRef, useEffect } from 'react';
import { Box } from 'lucide-react';

=======
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function Imageoptimizer({ className = '', children, ...props }: ImageoptimizerProps) {
  return (
    <div className={`imageoptimizer-component ${className}`} {...props}>
      {children}
    </div>
  );
};

