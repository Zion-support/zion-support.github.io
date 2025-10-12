<<<<<<< HEAD
import { useEffect, useRef} from 'react';
'use client';

const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement />(null);
=======
'use client';

import React, { useRef, useEffect } from 'react';

export default function FuturisticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

>>>>>>> origin/main
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

    // Particle system
<<<<<<< HEAD
    const particles: Array<{,
  x: number;,
  y: number;,
  vx: number;,
  vy: number;,
  size: number;,
  opacity: number;,
  color: string;
=======
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
>>>>>>> origin/main
    }> = [];

    const colors = ['#00d4ff', '#ff0080', '#00ff88', '#a855f7', '#ff6b35'];
    
    // Create particles
<<<<<<< HEAD
    for (let i = 0; i < 100; i++) {
=======
    for (let i = 0; i < 50; i++) {
>>>>>>> origin/main
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
<<<<<<< HEAD
      particles.forEach((particle, index) => {
=======
      particles.forEach((particle) => {
>>>>>>> origin/main
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
<<<<<<< HEAD
        if (particle.x < 0) particle.const x = canvas.width;
        if (particle.x > canvas.width) particle.const x = 0;
        if (particle.y < 0) particle.const y = canvas.height;
        if (particle.y > canvas.height) particle.const y = 0;
=======
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

>>>>>>> origin/main
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color + Math.floor((1 - distance / 150) * 50).toString(16).padStart(2, '0');
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
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
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <canvas
        ref="{canvasRef}"
        className="w-fullh-fullopacity-30"
        style="{{" background: 'transparent' }}
       />
      {/* Additional background effects */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Animated grid overlay */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Quantum field effect */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Plasma effect */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"> </div>
=======
    <div className="fixed inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      
      {/* Additional background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-purple-900/20 to-slate-900/20" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>
    </div>
>>>>>>> origin/main
  );
}
