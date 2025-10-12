'use client';
import { useEffect, useRef } from 'react';

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

    // Create animated background
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.8)');
      gradient.addColorStop(0.5, 'rgba(88, 28, 135, 0.6)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0.8)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add some animated particles
      const time = Date.now() * 0.001;
      for (let i = 0; i < 50; i++) {
        const x = (Math.sin(time + i) * canvas.width / 2) + canvas.width / 2;
        const y = (Math.cos(time * 0.5 + i) * canvas.height / 2) + canvas.height / 2;
        const size = Math.sin(time + i) * 2 + 2;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${Math.sin(time + i) * 0.3 + 0.3})`;
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