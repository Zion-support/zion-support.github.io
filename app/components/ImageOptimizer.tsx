<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
import { Box } from 'lucide-react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

interface ImageoptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Imageoptimizer({ className = '', children, ...props }: ImageoptimizerProps) {
  return (
    <div className={`imageoptimizer-component ${className}`} {...props}>
      {children}
    </div>
  );
}
