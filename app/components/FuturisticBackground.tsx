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

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create animated particles
      const time = Date.now() * 0.001;
      const particles = 50;
      
      for (let i = 0; i < particles; i++) {
        const x = (Math.sin(time + i * 0.1) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.5 + i * 0.1) * 0.5 + 0.5) * canvas.height;
        const size = Math.sin(time + i) * 2 + 3;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${0.1 + Math.sin(time + i) * 0.1})`;
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
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/20 rounded-full animate-ping animation-delay-500"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400/25 rounded-full animate-ping animation-delay-2000"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;
