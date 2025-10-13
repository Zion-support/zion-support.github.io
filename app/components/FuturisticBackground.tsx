<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}
=======
'use client';
import React, { useEffect, useRef } from 'react';

const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

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
const FuturisticBackground: React.FC = () => {

<<<<<<< HEAD
    resizeCanvas();
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - distance / 100)})`;
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
export default FuturisticBackground;
=======
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      {children}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
=======
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
<<<<<<< HEAD
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simple animated background
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw some animated elements
      const time = Date.now() * 0.001;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw animated circles
      for (let i = 0; i < 5; i++) {
        const x = centerX + Math.cos(time + i) * 100;
        const y = centerY + Math.sin(time + i) * 100;
        const radius = 20 + Math.sin(time * 2 + i) * 10;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.fill();
      }
      
=======

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Quantum particles
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
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#00ffff' : '#8b5cf6'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color + '20';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
<<<<<<< HEAD
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
=======
      className="fixed inset-0 pointer-events-none z-0"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      style={{ background: 'transparent' }}
    />
  );
};

export default FuturisticBackground;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
