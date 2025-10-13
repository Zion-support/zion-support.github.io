<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}
=======
'use client';
import React, { useEffect, useRef } from 'react';

const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

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
const FuturisticBackground: React.FC = () => {

<<<<<<< HEAD
    resizeCanvas();
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - distance / 100)})`;
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
export default FuturisticBackground;
=======
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      {children}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
=======
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simple animated background
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw some animated elements
      const time = Date.now() * 0.001;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw animated circles
      for (let i = 0; i < 5; i++) {
        const x = centerX + Math.cos(time + i) * 100;
        const y = centerY + Math.sin(time + i) * 100;
        const radius = 20 + Math.sin(time * 2 + i) * 10;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.fill();
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default FuturisticBackground;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
