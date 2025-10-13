<<<<<<< HEAD
import React from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function FuturisticBackground({ children, className = '' }: FuturisticBackgroundProps) {
  return (
    <div className={`futuristic-background ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 opacity-90"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
=======
'use client';
import React, { useEffect, useRef } from 'react';

<<<<<<< HEAD
const FuturisticBackground: React.FC = () => {
=======
const FuturisticBackground = ({ children }: { children: React.ReactNode }) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

<<<<<<< HEAD
=======
    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

<<<<<<< HEAD
    resizeCanvas();
=======
    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
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
        ctx.fillStyle = `rgba(6, 182, 212, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
<<<<<<< HEAD
=======
      cancelAnimationFrame(animationId);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
    };
  }, []);

  return (
<<<<<<< HEAD
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
    />
=======
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      {children}
    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
  );
};

export default FuturisticBackground;
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
