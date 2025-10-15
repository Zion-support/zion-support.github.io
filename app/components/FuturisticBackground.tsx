import React, { useEffect, useRef } from 'react';
interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}
const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ children, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

const ctx = canvas.getContext('2d');
    if (!ctx) return;

const resizeCanvas = () => {
  return;
};
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

const colors = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    const animate = () => {
  return;
}
        });
      });
      requestAnimationFrame(animate);
    };
    animate();
  return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  return (
    <div className="{`relative" overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      ""
        <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
export default FuturisticBackground;"