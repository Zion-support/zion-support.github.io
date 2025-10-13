<<<<<<< HEAD
import React from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function FuturisticBackground({ children, className = '' }: FuturisticBackgroundProps) {
  return (
    <div className={`futuristic-background ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 opacity-90"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
=======
'use client';
import React, { useEffect, useRef } from 'react';

const FuturisticBackground: React.FC = () => {
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

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
    />
  );
};

export default FuturisticBackground;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
