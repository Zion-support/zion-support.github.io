'use client';
import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'hero' | 'services' | 'contact';
}

export default function FuturisticBackground({ children, variant = 'default' }: FuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let isAnimating = true;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system with reduced count for better performance
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = [
      '#00ffff', '#ff00ff', '#00ff00', '#ffff00', '#ff0080', '#8000ff'
    ];

    // Create particles (reduced from 100 to 50 for better performance)
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      if (!isAnimating) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Draw connections (optimized to reduce calculations)
        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex++) {
          const otherParticle = particles[otherIndex];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color + Math.floor((1 - distance / 150) * 80).toString(16).padStart(2, '0');
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      // Add grid overlay for hero variant
      if (variant === 'hero') {
        ctx.strokeStyle = '#00ffff20';
        ctx.lineWidth = 0.5;
        const gridSize = 50;
        
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isAnimating = false;
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [variant]);

  const getBackgroundClass = () => {
    switch (variant) {
      case 'hero':
        return 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900';
      case 'services':
        return 'bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-800';
      case 'contact':
        return 'bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900';
      default:
        return 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900';
    }
  };

  return (
    <div className={`relative min-h-screen ${getBackgroundClass()}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}