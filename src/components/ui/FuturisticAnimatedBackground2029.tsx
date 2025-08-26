import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

interface FuturisticAnimatedBackground2029Props {
  variant?: 'quantum' | 'neural' | 'cosmic' | 'cyberpunk' | 'holographic';
  intensity?: 'subtle' | 'moderate' | 'intense';
  colorScheme?: 'blue-purple' | 'green-cyan' | 'red-orange' | 'purple-pink' | 'multi-spectral';
  interactive?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'energy' | 'data' | 'quantum' | 'neural';
}

const FuturisticAnimatedBackground2029: React.FC<FuturisticAnimatedBackground2029Props> = ({
  variant = 'quantum',
  intensity = 'moderate',
  colorScheme = 'blue-purple',
  interactive = true,
  className = '',
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const controls = useAnimation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position for parallax effects
  const backgroundX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const backgroundY = useTransform(mouseY, [-1, 1], [-20, 20]);

  // Color schemes for different variants
  const colorSchemes = {
    'blue-purple': {
      primary: '#3B82F6',
      secondary: '#8B5CF6',
      accent: '#06B6D4',
      glow: '#60A5FA'
    },
    'green-cyan': {
      primary: '#10B981',
      secondary: '#06B6D4',
      accent: '#84CC16',
      glow: '#34D399'
    },
    'red-orange': {
      primary: '#EF4444',
      secondary: '#F97316',
      accent: '#F59E0B',
      glow: '#FB7185'
    },
    'purple-pink': {
      primary: '#8B5CF6',
      secondary: '#EC4899',
      accent: '#F472B6',
      glow: '#C084FC'
    },
    'multi-spectral': {
      primary: '#3B82F6',
      secondary: '#10B981',
      accent: '#F59E0B',
      glow: '#8B5CF6'
    }
  };

  const currentColors = colorSchemes[colorScheme];

  // Particle system configuration
  const particleConfig = {
    quantum: {
      count: intensity === 'intense' ? 150 : intensity === 'moderate' ? 100 : 50,
      speed: 0.5,
      size: { min: 2, max: 8 },
      types: ['quantum', 'energy'] as const
    },
    neural: {
      count: intensity === 'intense' ? 200 : intensity === 'moderate' ? 120 : 60,
      speed: 0.3,
      size: { min: 1, max: 6 },
      types: ['neural', 'data'] as const
    },
    cosmic: {
      count: intensity === 'intense' ? 180 : intensity === 'moderate' ? 110 : 55,
      speed: 0.4,
      size: { min: 3, max: 10 },
      types: ['energy', 'quantum'] as const
    },
    cyberpunk: {
      count: intensity === 'intense' ? 120 : intensity === 'moderate' ? 80 : 40,
      speed: 0.6,
      size: { min: 1, max: 5 },
      types: ['data', 'energy'] as const
    },
    holographic: {
      count: intensity === 'intense' ? 160 : intensity === 'moderate' ? 100 : 50,
      speed: 0.2,
      size: { min: 2, max: 8 },
      types: ['neural', 'quantum'] as const
    }
  };

  // Initialize particles
  useEffect(() => {
    const config = particleConfig[variant];
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < config.count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * (dimensions.width || window.innerWidth),
        y: Math.random() * (dimensions.height || window.innerHeight),
        vx: (Math.random() - 0.5) * config.speed,
        vy: (Math.random() - 0.5) * config.speed,
        size: Math.random() * (config.size.max - config.size.min) + config.size.min,
        opacity: Math.random() * 0.8 + 0.2,
        color: Object.values(currentColors)[Math.floor(Math.random() * Object.values(currentColors).length)],
        type: config.types[Math.floor(Math.random() * config.types.length)]
      });
    }
    
    setParticles(newParticles);
  }, [variant, intensity, colorScheme, dimensions]);

  // Handle mouse movement for interactive effects
  useEffect(() => {
    if (!interactive) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [interactive, mouseX, mouseY]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate particles
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width || window.innerWidth;
    canvas.height = dimensions.height || window.innerHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
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
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 2;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      
      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `${currentColors.primary}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, [particles, dimensions, currentColors]);

  // Variant-specific animations
  useEffect(() => {
    if (variant === 'quantum') {
      controls.start({
        scale: [1, 1.1, 1],
        rotate: [0, 360],
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }
      });
    } else if (variant === 'neural') {
      controls.start({
        y: [0, -10, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      });
    }
  }, [variant, controls]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        transform: `translate(${backgroundX}px, ${backgroundY}px)`
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          filter: variant === 'cyberpunk' ? 'blur(0.5px)' : 'none'
        }}
      />
      
      {variant === 'quantum' && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={controls}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${currentColors.glow}20 0%, transparent 70%)`
          }}
        />
      )}
      
      {variant === 'neural' && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={controls}
          style={{
            background: `linear-gradient(45deg, ${currentColors.primary}10 0%, ${currentColors.secondary}10 100%)`
          }}
        />
      )}
      
      {children}
    </div>
  );
};

export default FuturisticAnimatedBackground2029;