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

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      pulse: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    const colors = [
      '#00ffff', '#ff00ff', '#00ff00', '#ffff00', '#ff0080', '#8000ff', '#00ff80', '#ff8000'
    ];

    // Create enhanced particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.9 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw enhanced particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += 0.05;
        particle.rotation += particle.rotationSpeed;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Enhanced particle drawing with pulsing and rotation
        const pulseSize = particle.size + Math.sin(particle.pulse) * 2;
        const pulseOpacity = particle.opacity + Math.sin(particle.pulse * 0.5) * 0.3;

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);

        // Draw particle with gradient
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, pulseSize);
        gradient.addColorStop(0, particle.color + Math.floor(pulseOpacity * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, particle.color + '00');

        ctx.beginPath();
        ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(0, 0, pulseSize * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(pulseOpacity * 128).toString(16).padStart(2, '0');
        ctx.fill();

        ctx.restore();

        // Enhanced connections with varying opacity
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 200) {
              const connectionOpacity = (1 - distance / 200) * 0.6;
              const connectionWidth = (1 - distance / 200) * 2;

              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color + Math.floor(connectionOpacity * 255).toString(16).padStart(2, '0');
              ctx.lineWidth = connectionWidth;
              ctx.stroke();
            }
          }
        });
      });

      // Enhanced grid overlay for hero variant
      if (variant === 'hero') {
        const gridSize = 50;
        const time = Date.now() * 0.001;
        
        // Animated grid lines
        for (let x = 0; x < canvas.width; x += gridSize) {
          const alpha = 0.1 + Math.sin(time + x * 0.01) * 0.1;
          ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        
        for (let y = 0; y < canvas.height; y += gridSize) {
          const alpha = 0.1 + Math.sin(time + y * 0.01) * 0.1;
          ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        // Add scanning lines
        const scanY = (time * 100) % canvas.height;
        const gradient = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50);
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, scanY - 50, canvas.width, 100);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
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