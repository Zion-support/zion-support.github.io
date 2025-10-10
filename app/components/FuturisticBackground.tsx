'use client';
import React, { useEffect, useRef } from 'react';

const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Create particles
    const createParticles = () => {
      particles.length = 0;
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: ['#00ffff', '#8b5cf6', '#ec4899', '#10b981'][Math.floor(Math.random() * 4)]
        });
      }
    };

    // Update particles
    const updateParticles = () => {
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };

    // Draw particles
    const drawParticles = () => {
      particles.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    // Draw connections between nearby particles
    const drawConnections = () => {
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateParticles();
      drawConnections();
      drawParticles();
      
      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Gradient overlays */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-500/5 to-transparent" />
      </div>
      
      {/* Animated grid */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse" />
        </div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-500/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-purple-500/20 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-pink-500/20 rotate-12 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-green-500/20 rounded-lg animate-pulse" style={{ animationDuration: '4s' }} />
      </div>
    </>
  );
};

export default FuturisticBackground;