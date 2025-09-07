import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticNeonBackgroundProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'zion' | 'quantum' | 'consciousness' | 'multi';
  children?: React.ReactNode;
}

export const UltraFuturisticNeonBackground: React.FC<UltraFuturisticNeonBackgroundProps> = ({
  className = '',
  intensity = 'medium',
  colorScheme = 'zion',
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Color schemes for different themes
  const colorSchemes = {
    zion: {
      primary: '#22ddd2',
      secondary: '#8c15e9',
      accent: '#2e73ea',
      neon: '#7aeae4'
    },
    quantum: {
      primary: '#00ffff',
      secondary: '#8000ff',
      accent: '#0080ff',
      neon: '#40ffff'
    },
    consciousness: {
      primary: '#ff00ff',
      secondary: '#00ff80',
      accent: '#ff8000',
      neon: '#ff40ff'
    },
    multi: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#00ff00',
      neon: '#ffff00'
    }
  };

  const colors = colorSchemes[colorScheme];
  const particleCount = intensity === 'low' ? 75 : intensity === 'medium' ? 150 : 300;

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
      life: number;
      maxLife: number;
      type: 'quantum' | 'neon' | 'consciousness';
      connectionDistance: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.8 + 0.2,
        color: Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)],
        life: Math.random() * 100,
        maxLife: 100,
        type: ['quantum', 'neon', 'consciousness'][Math.floor(Math.random() * 3)] as any,
        connectionDistance: Math.random() * 150 + 50
      });
    }

    // Grid system
    const gridSize = 60;
    const gridOpacity = intensity === 'low' ? 0.05 : intensity === 'medium' ? 0.1 : 0.15;

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw quantum grid
      ctx.strokeStyle = `${colors.primary}${Math.floor(gridOpacity * 255).toString(16).padStart(2, '0')}`;
      ctx.lineWidth = 1;

      // Vertical lines with wave effect
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        for (let y = 0; y < canvas.height; y += 5) {
          const wave = Math.sin(y * 0.01 + Date.now() * 0.001) * 3;
          ctx.lineTo(x + wave, y);
        }
        ctx.stroke();
      }

      // Horizontal lines with wave effect
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        for (let x = 0; x < canvas.width; x += 5) {
          const wave = Math.sin(x * 0.01 + Date.now() * 0.001) * 3;
          ctx.lineTo(x, y + wave);
        }
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position with mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.1;
          particle.vy += (dy / distance) * force * 0.1;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges with quantum tunneling effect
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1;
          // Quantum tunneling - small chance to appear on opposite side
          if (Math.random() < 0.01) {
            particle.x = particle.x <= 0 ? canvas.width : 0;
          }
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1;
          if (Math.random() < 0.01) {
            particle.y = particle.y <= 0 ? canvas.height : 0;
          }
        }

        // Update life
        particle.life--;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Draw particle with neon glow
        const alpha = (particle.life / particle.maxLife) * particle.opacity;
        const hexAlpha = Math.floor(alpha * 255).toString(16).padStart(2, '0');
        
        // Inner glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        gradient.addColorStop(0, `${particle.color}${hexAlpha}`);
        gradient.addColorStop(0.5, `${particle.color}${Math.floor(alpha * 100).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core particle
        ctx.fillStyle = `${particle.color}${hexAlpha}`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Neon outline
        ctx.strokeStyle = `${particle.color}${hexAlpha}`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size + 2, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Draw connections between nearby particles
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < Math.min(particle1.connectionDistance, particle2.connectionDistance)) {
            const opacity = Math.max(0, 1 - distance / 150);
            const hexAlpha = Math.floor(opacity * 100).toString(16).padStart(2, '0');
            
            ctx.strokeStyle = `${colors.neon}${hexAlpha}`;
            ctx.lineWidth = opacity * 2;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      // Draw consciousness waves
      if (colorScheme === 'consciousness' || colorScheme === 'multi') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 3; i++) {
          const waveRadius = (time * 50 + i * 200) % (Math.max(canvas.width, canvas.height) * 2);
          const opacity = Math.max(0, 1 - waveRadius / (Math.max(canvas.width, canvas.height) * 2));
          
          if (opacity > 0.1) {
            ctx.strokeStyle = `${colors.secondary}${Math.floor(opacity * 100).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = opacity * 3;
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, waveRadius, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity, colorScheme, colors, particleCount, mousePosition]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}
      />
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40 pointer-events-none z-10" />
      
      {/* Neon border effect */}
      <div className="absolute inset-0 border border-transparent bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-border pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 animate-pulse" />
      </div>

      {/* Floating neon orbs */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-zion-cyan rounded-full shadow-lg shadow-zion-cyan/50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-3 h-3 bg-zion-purple rounded-full shadow-lg shadow-zion-purple/50"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-5 h-5 bg-zion-cyan rounded-full shadow-lg shadow-zion-cyan/50"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>
    </div>
  );
};