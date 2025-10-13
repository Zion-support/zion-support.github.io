<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect, useRef } from 'react';
import FuturisticBackground from "../components/FuturisticBackground";
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f

interface FuturisticbackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristicbackground({ className = '', children, ...props }: FuturisticbackgroundProps) {
  return (
    <div className={`futuristicbackground-component ${className}`} {...props}>
      {children}
    </div>
  );
}
