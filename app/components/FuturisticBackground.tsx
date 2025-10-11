'use client';
import React, { useRef, useEffect } from 'react';

const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animated background
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create animated particles
      const time = Date.now() * 0.001;
      const particles = 50;
      
      for (let i = 0; i < particles; i++) {
        const x = (Math.sin(time + i) * canvas.width * 0.5) + canvas.width * 0.5;
        const y = (Math.cos(time * 0.5 + i) * canvas.height * 0.5) + canvas.height * 0.5;
        const size = Math.sin(time + i) * 3 + 3;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${Math.sin(time + i) * 0.5 + 0.5})`;
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
      style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
    />
  );
};

export default FuturisticBackground;
