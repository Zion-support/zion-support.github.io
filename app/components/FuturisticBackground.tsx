'use client';
import React, { useEffect, useRef } from 'react';

const FuturisticBackground: React.FC = () => {
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

    // Enhanced quantum particles
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
      pulse: number;
      trail: Array<{x: number, y: number, opacity: number}>;
    }> = [];

    const colors = ['#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6', '#f97316', '#eab308'];
    const time = { start: Date.now() };

    // Create enhanced particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 1000 + 500,
        pulse: Math.random() * Math.PI * 2,
        trail: []
      });
    }

    // Matrix rain effect
    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const matrixDrops: Array<{
      x: number;
      y: number;
      speed: number;
      char: string;
      opacity: number;
    }> = [];

    // Initialize matrix drops
    for (let i = 0; i < 50; i++) {
      matrixDrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    const animate = () => {
      const currentTime = Date.now() - time.start;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw matrix rain
      matrixDrops.forEach((drop, index) => {
        drop.y += drop.speed;
        drop.opacity = Math.sin(currentTime * 0.001 + index) * 0.3 + 0.4;
        
        if (drop.y > canvas.height) {
          drop.y = -20;
          drop.x = Math.random() * canvas.width;
          drop.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        }

        ctx.fillStyle = `rgba(0, 255, 0, ${drop.opacity})`;
        ctx.font = '12px monospace';
        ctx.fillText(drop.char, drop.x, drop.y);
      });

      // Update and draw enhanced particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 16;
        particle.pulse += 0.1;

        // Add to trail
        particle.trail.push({
          x: particle.x,
          y: particle.y,
          opacity: particle.opacity
        });

        // Limit trail length
        if (particle.trail.length > 10) {
          particle.trail.shift();
        }

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle if life expired
        if (particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.trail = [];
        }

        // Draw particle trail
        particle.trail.forEach((point, trailIndex) => {
          const trailOpacity = (point.opacity * (trailIndex / particle.trail.length)) * 0.3;
          ctx.beginPath();
          ctx.arc(point.x, point.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = trailOpacity;
          ctx.fill();
        });

        // Draw main particle with pulse effect
        const pulseSize = particle.size + Math.sin(particle.pulse) * 2;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulseSize
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.7, particle.color + '80');
        gradient.addColorStop(1, particle.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw particle glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * 0.2;
        ctx.fill();

        // Draw connections with enhanced effects
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              const connectionOpacity = (150 - distance) / 150 * 0.3;
              const connectionWidth = (150 - distance) / 150 * 2;
              
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              
              // Create gradient for connection
              const connectionGradient = ctx.createLinearGradient(
                particle.x, particle.y,
                otherParticle.x, otherParticle.y
              );
              connectionGradient.addColorStop(0, particle.color);
              connectionGradient.addColorStop(1, otherParticle.color);
              
              ctx.strokeStyle = connectionGradient;
              ctx.globalAlpha = connectionOpacity;
              ctx.lineWidth = connectionWidth;
              ctx.stroke();
            }
          }
        });
      });

      // Draw enhanced cyber grid
      ctx.globalAlpha = 0.15;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 0.5;

      // Animated grid
      const gridOffset = (currentTime * 0.05) % 20;
      
      for (let x = -gridOffset; x < canvas.width + 20; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = -gridOffset; y < canvas.height + 20; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw energy waves
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 3; i++) {
        const waveY = (canvas.height / 3) * (i + 1) + Math.sin(currentTime * 0.002 + i) * 20;
        ctx.beginPath();
        ctx.moveTo(0, waveY);
        
        for (let x = 0; x < canvas.width; x += 10) {
          const y = waveY + Math.sin((x + currentTime * 0.01) * 0.01) * 10;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Draw quantum field
      ctx.globalAlpha = 0.05;
      ctx.fillStyle = '#00ffff';
      
      for (let i = 0; i < 5; i++) {
        const fieldX = (canvas.width / 5) * i + Math.sin(currentTime * 0.001 + i) * 50;
        const fieldY = canvas.height / 2 + Math.cos(currentTime * 0.001 + i) * 30;
        const fieldSize = 100 + Math.sin(currentTime * 0.002 + i) * 50;
        
        ctx.beginPath();
        ctx.arc(fieldX, fieldY, fieldSize, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      {/* Additional CSS-based effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="futuristic-bg-enhanced"></div>
        <div className="cyber-grid-enhanced"></div>
        <div className="neural-network-bg-enhanced"></div>
        <div className="matrix-rain-enhanced"></div>
        <div className="quantum-energy-field"></div>
      </div>
    </>
  );
};

export default FuturisticBackground;