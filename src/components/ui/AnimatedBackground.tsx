import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'particles' | 'grid' | 'waves' | 'nebula';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  variant = 'particles',
  intensity = 'medium',
  className = ''
}) => {
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

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      color: `hsl(${Math.random() * 60 + 180}, 70%, 60%)`
    });

    // Initialize particles
    const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity]);

  if (variant === 'particles') {
    return (
      <div className={`fixed inset-0 pointer-events-none ${className}`}>
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ background: 'transparent' }}
        />
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`fixed inset-0 pointer-events-none ${className}`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M0 0h60v60H0z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5" />
      </div>
    );
  }

  if (variant === 'waves') {
    return (
      <div className={`fixed inset-0 pointer-events-none ${className}`}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0.1)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.05)" />
              <stop offset="50%" stopColor="rgba(236, 72, 153, 0.05)" />
              <stop offset="100%" stopColor="rgba(34, 211, 238, 0.05)" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,600 Q300,500 600,600 T1200,600 L1200,800 L0,800 Z"
            fill="url(#wave1)"
            initial={{ d: "M0,600 Q300,500 600,600 T1200,600 L1200,800 L0,800 Z" }}
            animate={{
              d: [
                "M0,600 Q300,500 600,600 T1200,600 L1200,800 L0,800 Z",
                "M0,600 Q300,400 600,600 T1200,600 L1200,800 L0,800 Z",
                "M0,600 Q300,500 600,600 T1200,600 L1200,800 L0,800 Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M0,650 Q300,550 600,650 T1200,650 L1200,800 L0,800 Z"
            fill="url(#wave2)"
            initial={{ d: "M0,650 Q300,550 600,650 T1200,650 L1200,800 L0,800 Z" }}
            animate={{
              d: [
                "M0,650 Q300,550 600,650 T1200,650 L1200,800 L0,800 Z",
                "M0,650 Q300,450 600,650 T1200,650 L1200,800 L0,800 Z",
                "M0,650 Q300,550 600,650 T1200,650 L1200,800 L0,800 Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'nebula') {
    return (
      <div className={`fixed inset-0 pointer-events-none ${className}`}>
        <div className="absolute inset-0 bg-gradient-radial from-zion-cyan/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial from-zion-purple/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial from-zion-blue/10 via-transparent to-transparent" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-radial from-zion-cyan/30 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-radial from-zion-purple/30 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-radial from-zion-blue/20 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  return null;
};

export const FloatingParticles: React.FC<{ count?: number; className?: string }> = ({
  count = 20,
  className = ''
}) => {
  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-zion-cyan rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

export const NeonGlow: React.FC<{ 
  children: React.ReactNode; 
  color?: string; 
  intensity?: number;
  className?: string;
}> = ({ 
  children, 
  color = 'zion-cyan', 
  intensity = 1,
  className = '' 
}) => {
  return (
    <div 
      className={`${className}`}
      style={{
        textShadow: `
          0 0 ${5 * intensity}px rgb(var(--${color})),
          0 0 ${10 * intensity}px rgb(var(--${color})),
          0 0 ${15 * intensity}px rgb(var(--${color})),
          0 0 ${20 * intensity}px rgb(var(--${color}))
        `,
        filter: `drop-shadow(0 0 ${8 * intensity}px rgb(var(--${color})))`
      }}
    >
      {children}
    </div>
  );
};

export const GradientText: React.FC<{
  children: React.ReactNode;
  from: string;
  via?: string;
  to: string;
  className?: string;
}> = ({ children, from, via, to, className = '' }) => {
  const gradientClass = via 
    ? `bg-gradient-to-r from-${from} via-${via} to-${to}`
    : `bg-gradient-to-r from-${from} to-${to}`;
    
  return (
    <span className={`${gradientClass} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};