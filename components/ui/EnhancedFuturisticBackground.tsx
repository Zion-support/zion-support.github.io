import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  intensity?: number;
  variant?: 'quantum' | 'neural' | 'cyberpunk' | 'holographic' | 'quantum-matrix';
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children,
  intensity = 1.0,
  variant = 'quantum'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  const colorSchemes = {
    quantum: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'rgba(0, 0, 0, 0.85)',
      particles: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'],
      glow: '#00ffff'
    },
    cyberpunk: {
      primary: '#ff0080',
      secondary: '#00ffff',
      accent: '#ffff00',
      background: 'rgba(20, 0, 40, 0.9)',
      particles: ['#ff0080', '#00ffff', '#ffff00', '#ff4000', '#8000ff', '#00ff80'],
      glow: '#ff0080'
    },
    holographic: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'rgba(0, 20, 40, 0.85)',
      particles: ['#00ffff', '#ff00ff', '#ffff00', '#00ff80', '#ff8000', '#8000ff'],
      glow: '#00ffff'
    },
    neural: {
      primary: '#00ff80',
      secondary: '#ff0080',
      accent: '#ffff00',
      background: 'rgba(0, 40, 20, 0.9)',
      particles: ['#00ff80', '#ff0080', '#ffff00', '#00ffff', '#ff8000', '#8000ff'],
      glow: '#00ff80'
    },
    cosmic: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1',
      background: 'rgba(10, 10, 30, 0.9)',
      particles: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'],
      glow: '#4ecdc4'
    }
  };

  const intensitySettings = {
    low: { particleCount: 40, speed: 0.45, size: 2, opacity: 0.25 },
    medium: { particleCount: 90, speed: 0.9, size: 3, opacity: 0.45 },
    high: { particleCount: 160, speed: 1.25, size: 3.5, opacity: 0.6 }
  };

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

    const colors = colorSchemes[colorScheme];
    const settings = intensitySettings[intensity];

    // Enhanced particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      type: 'quantum' | 'neural' | 'cyberpunk' | 'holographic';
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],
      neural: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
      cyberpunk: ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5'],
      holographic: ['#ffd700', '#ff69b4', '#00ffff', '#ff1493']
    };

    const currentColors = colors[variant] || colors.quantum;

    // Initialize particles
    for (let i = 0; i < 100 * intensity; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * intensity,
        vy: (Math.random() - 0.5) * 2 * intensity,
        size: Math.random() * 3 * intensity + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: currentColors[Math.floor(Math.random() * currentColors.length)],
        type: variant as any
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
      gradient.addColorStop(0.5, 'rgba(20, 20, 40, 0.9)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw quantum grid
      if (variant === 'quantum' || variant === 'quantum-matrix') {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
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

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 100 * intensity) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `${particle.color}${Math.floor((1 - distance / 100) * 0.3 * 255).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });

        // Add quantum effects
        if (variant === 'quantum' || variant === 'quantum-matrix') {
          if (Math.random() < 0.01 * intensity) {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
            ctx.strokeStyle = `${particle.color}${Math.floor(particle.opacity * 0.5 * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      // Draw neural network connections for neural variant
      if (variant === 'neural') {
        ctx.strokeStyle = 'rgba(255, 107, 107, 0.2)';
        ctx.lineWidth = 1;
        
        particles.forEach((particle, index) => {
          if (index % 3 === 0) {
            const nextIndex = (index + 1) % particles.length;
            const nextParticle = particles[nextIndex];
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(nextParticle.x, nextParticle.y);
            ctx.stroke();
          }
        });
      }

      // Draw cyberpunk effects
      if (variant === 'cyberpunk') {
        ctx.strokeStyle = 'rgba(255, 0, 110, 0.3)';
        ctx.lineWidth = 2;
        
        for (let i = 0; i < 5; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const length = Math.random() * 200 + 100;
          
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + length, y);
          ctx.stroke();
        }
      }

      // Draw holographic effects
      if (variant === 'holographic') {
        ctx.strokeStyle = 'rgba(255, 215, 0, 0.4)';
        ctx.lineWidth = 1;
        
        particles.forEach((particle) => {
          if (Math.random() < 0.1) {
            ctx.beginPath();
            ctx.moveTo(particle.x - 20, particle.y - 20);
            ctx.lineTo(particle.x + 20, particle.y + 20);
            ctx.moveTo(particle.x + 20, particle.y - 20);
            ctx.lineTo(particle.x - 20, particle.y + 20);
            ctx.stroke();
          }
        });
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
  }, [intensity, variant]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ zIndex: 0 }}
      />
      
      {/* Animated overlay elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400 rounded-full opacity-30"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [360, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400 rounded-full opacity-25"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -360],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;