import React, { useRef, useEffect } from 'react';

interface FuturisticBackgroundProps {
  children?: React.ReactNode;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ children }) => {
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

    // Simple animated background
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw some animated elements
      const time = Date.now() * 0.001;
      
      // Gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.8)');
      gradient.addColorStop(0.5, 'rgba(88, 28, 135, 0.6)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0.8)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Animated particles
      for (let i = 0; i < 50; i++) {
        const x = (Math.sin(time + i) * canvas.width / 2) + canvas.width / 2;
        const y = (Math.cos(time * 0.5 + i) * canvas.height / 2) + canvas.height / 2;
        const size = Math.sin(time + i) * 2 + 2;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${0.3 + Math.sin(time + i) * 0.2})`;
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
    <div className="relative min-h-screen">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-slate-900/80" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;