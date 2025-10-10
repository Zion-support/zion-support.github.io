'use client';
import React, { useEffect, useRef, memo } from 'react';

const FuturisticBackground: React.FC = memo(() => {
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

    const drawGrid = () => {
      const gridSize = 50;
      const offsetX = (Date.now() * 0.01) % gridSize;
      const offsetY = (Date.now() * 0.005) % gridSize;

      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;

      for (let x = -offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = -offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawParticles = () => {
      const particleCount = 50;
      const time = Date.now() * 0.001;

      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(time + i * 0.1) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.7 + i * 0.15) * 0.5 + 0.5) * canvas.height;
        const size = Math.sin(time + i) * 2 + 3;

        ctx.fillStyle = `rgba(0, 255, 255, ${Math.sin(time + i) * 0.3 + 0.4})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
});

FuturisticBackground.displayName = 'FuturisticBackground';

export default FuturisticBackground;