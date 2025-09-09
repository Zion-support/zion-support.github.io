import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ 
  children, 
  className = "" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: `hsl(${Math.random() * 60 + 180}, 70%, 60%)`
      });
    }

    // Animation loop
    const animate = () => {
      time += 0.01;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw grid lines
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.1)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 50;
      const offsetX = (time * 20) % gridSize;
      const offsetY = (time * 15) % gridSize;

      for (let x = offsetX; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = offsetY; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw floating orbs
      for (let i = 0; i < 3; i++) {
        const x = Math.sin(time + i * 2) * 200 + canvas.width / 2;
        const y = Math.cos(time + i * 1.5) * 150 + canvas.height / 2;
        const size = Math.sin(time * 2 + i) * 20 + 40;
        
        // Glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
        gradient.addColorStop(0, `rgba(34, 211, 238, ${0.3})`);
        gradient.addColorStop(0.5, `rgba(34, 211, 238, ${0.1})`);
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
        
        ctx.beginPath();
        ctx.arc(x, y, size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Core
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.6)';
        ctx.fill();
      }

      // Draw wave effect
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.3)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y = Math.sin(x * 0.01 + time + i) * 50 + canvas.height / 2 + i * 100;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 1) 100%)' }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 z-10" />
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
      
      {/* Floating neon elements */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {/* Top left corner */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-cyan-400/30 rounded-lg opacity-50 animate-pulse">
          <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
        </div>
        
        {/* Top right corner */}
        <div className="absolute top-10 right-10 w-24 h-24 border border-blue-400/30 rounded-full opacity-50 animate-pulse">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-400 rounded-full animate-ping" />
        </div>
        
        {/* Bottom left corner */}
        <div className="absolute bottom-10 left-10 w-20 h-20 border border-purple-400/30 transform rotate-45 opacity-50 animate-pulse">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.7s' }} />
        </div>
        
        {/* Bottom right corner */}
        <div className="absolute bottom-10 right-10 w-28 h-28 border border-cyan-400/30 rounded-lg opacity-50 animate-pulse">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1.2s' }} />
        </div>
        
        {/* Center floating elements */}
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-16 h-16 border border-cyan-400/20 rounded-full opacity-30 animate-pulse">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
        </div>
        
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-12 h-12 border border-blue-400/20 rounded-full opacity-30 animate-pulse">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.8s' }} />
        </div>
      </div>
    </div>
  );
};