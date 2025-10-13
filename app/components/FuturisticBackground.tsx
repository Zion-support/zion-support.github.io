'use client';
import React, { useRef, useEffect } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create animated particles
      const time = Date.now() * 0.001;
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(time + i * 0.1) * canvas.width * 0.3) + canvas.width * 0.5;
        const y = (Math.cos(time + i * 0.1) * canvas.height * 0.3) + canvas.height * 0.5;
        const size = Math.sin(time + i) * 2 + 3;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${Math.sin(time + i) * 0.3 + 0.4})`;
        ctx.fill();
      }

      // Add connecting lines
      for (let i = 0; i < particleCount; i += 2) {
        const x1 = (Math.sin(time + i * 0.1) * canvas.width * 0.3) + canvas.width * 0.5;
        const y1 = (Math.cos(time + i * 0.1) * canvas.height * 0.3) + canvas.height * 0.5;
        const x2 = (Math.sin(time + (i + 1) * 0.1) * canvas.width * 0.3) + canvas.width * 0.5;
        const y2 = (Math.cos(time + (i + 1) * 0.1) * canvas.height * 0.3) + canvas.height * 0.5;
        
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * (1 - distance / 150)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    drawParticles();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;