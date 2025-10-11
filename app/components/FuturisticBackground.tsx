'use client'
import React, { useEffect, useRef } from 'react'

const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Simple animated background
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw some animated elements
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < 50; i++) {
        const x = (Math.sin(time + i) * canvas.width / 2) + canvas.width / 2;
        const y = (Math.cos(time + i * 0.5) * canvas.height / 2) + canvas.height / 2;
        const size = Math.sin(time + i) * 3 + 2;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${0.1 + Math.sin(time + i) * 0.1})`;
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