<<<<<<< HEAD
import React, { useRef, useEffect, ReactNode } from 'react';

const FuturisticBackground = ({ children }: { children: ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
=======
import React from 'react';

interface FuturisticbackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristicbackground({ className = '', children, ...props }: FuturisticbackgroundProps) {
>>>>>>> origin/main
  return (
    <div className={`futuristicbackground-component ${className}`} {...props}>
      {children}
    </div>
  );
<<<<<<< HEAD
};

export default FuturisticBackground;
=======
}
>>>>>>> origin/main
