import React, { useRef, useEffect } from 'react';

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

    // Animation variables
    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create animated gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `rgba(59, 130, 246, ${0.1 + Math.sin(time * 0.001) * 0.05})`);
      gradient.addColorStop(0.5, `rgba(147, 51, 234, ${0.1 + Math.sin(time * 0.001 + 1) * 0.05})`);
      gradient.addColorStop(1, `rgba(79, 70, 229, ${0.1 + Math.sin(time * 0.001 + 2) * 0.05})`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add floating particles
      for (let i = 0; i < 50; i++) {
        const x = (Math.sin(time * 0.001 + i) * canvas.width * 0.3) + canvas.width * 0.5;
        const y = (Math.cos(time * 0.0008 + i * 0.5) * canvas.height * 0.3) + canvas.height * 0.5;
        const size = Math.sin(time * 0.002 + i) * 2 + 1;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.sin(time * 0.003 + i) * 0.05})`;
        ctx.fill();
      }

      time += 16;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
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