'use client';
import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'hero' | 'services' | 'contact';
}

export default function FuturisticBackground({ children, variant = 'default' }: FuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

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
      life: number;
      maxLife: number;
      type: 'glow' | 'sparkle' | 'trail';
    }> = [];

    const colors = [
      '#00ffff', '#ff00ff', '#00ff00', '#ffff00', '#ff0080', '#8000ff', '#00ff80', '#ff8000'
    ];

    // Create enhanced particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100,
        maxLife: 100,
        type: ['glow', 'sparkle', 'trail'][Math.floor(Math.random() * 3)] as 'glow' | 'sparkle' | 'trail'
      });
    }

    // Add floating geometric shapes
    const shapes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      color: string;
      opacity: number;
      type: 'triangle' | 'square' | 'hexagon';
    }> = [];

    for (let i = 0; i < 15; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 20 + 10,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.1,
        type: ['triangle', 'square', 'hexagon'][Math.floor(Math.random() * 3)] as 'triangle' | 'square' | 'hexagon'
      });
    }

    const animate = () => {
      timeRef.current += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.5;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle if life is over
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.color = colors[Math.floor(Math.random() * colors.length)];
        }

        const currentOpacity = particle.opacity * (particle.life / particle.maxLife);

        // Draw particle based on type
        if (particle.type === 'glow') {
          // Glowing particle with multiple layers
          const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3);
          gradient.addColorStop(0, particle.color + Math.floor(currentOpacity * 255).toString(16).padStart(2, '0'));
          gradient.addColorStop(1, particle.color + '00');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'sparkle') {
          // Sparkling particle
          ctx.fillStyle = particle.color + Math.floor(currentOpacity * 255).toString(16).padStart(2, '0');
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Add sparkle effect
          ctx.strokeStyle = particle.color + Math.floor(currentOpacity * 128).toString(16).padStart(2, '0');
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x - particle.size * 2, particle.y);
          ctx.lineTo(particle.x + particle.size * 2, particle.y);
          ctx.moveTo(particle.x, particle.y - particle.size * 2);
          ctx.lineTo(particle.x, particle.y + particle.size * 2);
          ctx.stroke();
        } else if (particle.type === 'trail') {
          // Particle with trail
          ctx.fillStyle = particle.color + Math.floor(currentOpacity * 255).toString(16).padStart(2, '0');
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw connections with enhanced effects
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              const connectionOpacity = (1 - distance / 150) * currentOpacity * 0.3;
              const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y);
              gradient.addColorStop(0, particle.color + Math.floor(connectionOpacity * 255).toString(16).padStart(2, '0'));
              gradient.addColorStop(1, otherParticle.color + Math.floor(connectionOpacity * 255).toString(16).padStart(2, '0'));
              
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.5 + (1 - distance / 150) * 1.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      // Update and draw floating shapes
      shapes.forEach((shape) => {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;

        // Wrap around screen
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;

        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.globalAlpha = shape.opacity;

        // Draw different shapes
        ctx.strokeStyle = shape.color;
        ctx.lineWidth = 1;
        ctx.beginPath();

        if (shape.type === 'triangle') {
          ctx.moveTo(0, -shape.size);
          ctx.lineTo(-shape.size * 0.866, shape.size * 0.5);
          ctx.lineTo(shape.size * 0.866, shape.size * 0.5);
          ctx.closePath();
        } else if (shape.type === 'square') {
          ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
        } else if (shape.type === 'hexagon') {
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = Math.cos(angle) * shape.size;
            const y = Math.sin(angle) * shape.size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
        }

        ctx.stroke();
        ctx.restore();
      });

      // Add animated grid overlay for hero variant
      if (variant === 'hero') {
        ctx.strokeStyle = '#00ffff' + Math.floor(Math.sin(timeRef.current) * 50 + 50).toString(16).padStart(2, '0');
        ctx.lineWidth = 0.5;
        const gridSize = 50;
        const offset = (timeRef.current * 10) % gridSize;
        
        for (let x = -offset; x < canvas.width + gridSize; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        
        for (let y = -offset; y < canvas.height + gridSize; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        // Add animated corner brackets
        const bracketSize = 50;
        const bracketThickness = 3;
        ctx.strokeStyle = '#00ffff' + Math.floor(Math.sin(timeRef.current * 2) * 100 + 155).toString(16).padStart(2, '0');
        ctx.lineWidth = bracketThickness;

        // Top-left bracket
        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.lineTo(20 + bracketSize, 20);
        ctx.moveTo(20, 20);
        ctx.lineTo(20, 20 + bracketSize);
        ctx.stroke();

        // Top-right bracket
        ctx.beginPath();
        ctx.moveTo(canvas.width - 20, 20);
        ctx.lineTo(canvas.width - 20 - bracketSize, 20);
        ctx.moveTo(canvas.width - 20, 20);
        ctx.lineTo(canvas.width - 20, 20 + bracketSize);
        ctx.stroke();

        // Bottom-left bracket
        ctx.beginPath();
        ctx.moveTo(20, canvas.height - 20);
        ctx.lineTo(20 + bracketSize, canvas.height - 20);
        ctx.moveTo(20, canvas.height - 20);
        ctx.lineTo(20, canvas.height - 20 - bracketSize);
        ctx.stroke();

        // Bottom-right bracket
        ctx.beginPath();
        ctx.moveTo(canvas.width - 20, canvas.height - 20);
        ctx.lineTo(canvas.width - 20 - bracketSize, canvas.height - 20);
        ctx.moveTo(canvas.width - 20, canvas.height - 20);
        ctx.lineTo(canvas.width - 20, canvas.height - 20 - bracketSize);
        ctx.stroke();
      }

      // Add pulsing energy waves
      if (variant === 'services') {
        const waveCount = 3;
        for (let i = 0; i < waveCount; i++) {
          const waveRadius = (timeRef.current * 50 + i * 100) % (Math.max(canvas.width, canvas.height) + 200);
          const waveOpacity = Math.max(0, 1 - waveRadius / (Math.max(canvas.width, canvas.height) + 200)) * 0.3;
          
          ctx.strokeStyle = '#ff00ff' + Math.floor(waveOpacity * 255).toString(16).padStart(2, '0');
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, waveRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
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
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}