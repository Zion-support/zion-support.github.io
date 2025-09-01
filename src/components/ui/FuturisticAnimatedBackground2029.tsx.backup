<<<<<<< HEAD
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
      size: { min: 3, max: 12 },
      types: ['energy', 'quantum'] as const
    },
    cyberpunk: {
      count: intensity === 'intense' ? 220 : intensity === 'moderate' ? 140 : 70,
      speed: 0.6,
      size: { min: 2, max: 10 },
      types: ['data', 'energy'] as const
    },
    holographic: {
      count: intensity === 'intense' ? 160 : intensity === 'moderate' ? 100 : 50,
      speed: 0.4,
      size: { min: 2, max: 8 },
      types: ['quantum', 'neural'] as const
    }
  };

  // Initialize particles
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const config = particleConfig[variant];
    const newParticles: Particle[] = [];

    for (let i = 0; i < config.count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * config.speed,
        vy: (Math.random() - 0.5) * config.speed,
        size: Math.random() * (config.size.max - config.size.min) + config.size.min,
        opacity: Math.random() * 0.8 + 0.2,
        color: [currentColors.primary, currentColors.secondary, currentColors.accent][Math.floor(Math.random() * 3)],
        type: config.types[Math.floor(Math.random() * config.types.length)]
      });
    }

    setParticles(newParticles);
  }, [variant, intensity, dimensions, currentColors]);

  // Handle mouse movement for interactive effects
  useEffect(() => {
    if (!interactive || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      mouseX.set(x * 2 - 1);
      mouseY.set(y * 2 - 1);
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [interactive, mouseX, mouseY]);

  // Handle window resize
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
    if (!dimensions.width || !dimensions.height) return;

    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;

          // Bounce off boundaries
          if (newX <= 0 || newX >= dimensions.width) {
            particle.vx = -particle.vx;
            newX = particle.x;
          }
          if (newY <= 0 || newY >= dimensions.height) {
            particle.vy = -particle.vy;
            newY = particle.y;
          }

          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, [dimensions]);

  // Render particles on canvas
  useEffect(() => {
    if (!canvasRef.current || !dimensions.width || !dimensions.height) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Clear canvas
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // Draw particles
    particles.forEach(particle => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      
      // Create gradient for particle glow
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      );
      
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(0.5, particle.color + '80');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add particle type-specific effects
      if (particle.type === 'quantum') {
        ctx.strokeStyle = currentColors.glow;
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if (particle.type === 'neural') {
        ctx.strokeStyle = currentColors.accent;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      
      ctx.restore();
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
          ctx.strokeStyle = currentColors.glow + Math.floor(opacity * 255).toString(16).padStart(2, '0');
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      });
    });
  }, [particles, dimensions, currentColors]);

  // Background animation variants
  const backgroundVariants = {
    quantum: {
      background: `radial-gradient(ellipse at center, ${currentColors.primary}20 0%, ${currentColors.secondary}10 50%, transparent 100%)`,
      filter: 'blur(0px)'
    },
    neural: {
      background: `linear-gradient(45deg, ${currentColors.primary}15 0%, ${currentColors.secondary}10 50%, ${currentColors.accent}15 100%)`,
      filter: 'blur(1px)'
    },
    cosmic: {
      background: `radial-gradient(circle at 30% 20%, ${currentColors.primary}25 0%, ${currentColors.secondary}15 50%, ${currentColors.accent}10 100%)`,
      filter: 'blur(0.5px)'
    },
    cyberpunk: {
      background: `linear-gradient(135deg, ${currentColors.primary}20 0%, ${currentColors.secondary}15 50%, ${currentColors.accent}20 100%)`,
      filter: 'blur(0.8px)'
    },
    holographic: {
      background: `conic-gradient(from 0deg, ${currentColors.primary}20, ${currentColors.secondary}15, ${currentColors.accent}20, ${currentColors.primary}20)`,
      filter: 'blur(1.2px)'
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {/* Animated Background Layers */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: backgroundVariants[variant].background,
          filter: backgroundVariants[variant].filter
        }}
        animate={controls}
        style={{
          x: backgroundX,
          y: backgroundY
        }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              width: `${40 + i * 10}px`,
              height: `${40 + i * 10}px`,
              border: `2px solid ${currentColors.glow}30`,
              borderRadius: i % 2 === 0 ? '50%' : '0%',
              transform: `rotate(${i * 45}deg)`
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Energy Grid */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" style={{ zIndex: 2 }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke={currentColors.glow + '20'}
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Data Streams */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-current to-transparent"
            style={{
              left: `${i * 30}%`,
              top: `${20 + i * 20}%`,
              width: '200px',
              opacity: 0.3
            }}
            animate={{
              x: [0, 100, 0],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Quantum Fluctuations */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`quantum-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: currentColors.accent,
              boxShadow: `0 0 20px ${currentColors.accent}`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Interactive Glow Effect */}
      {interactive && (
        <motion.div
          className="absolute pointer-events-none rounded-full"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            width: 200,
            height: 200,
            background: `radial-gradient(circle, ${currentColors.glow}20 0%, transparent 70%)`,
            zIndex: 3
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
=======
import React, { useEffect, useRef } from 'react';

interface FuturisticAnimatedBackground2029Props {
  intensity?: number;
  theme?: 'cyberpunk' | 'holographic' | 'quantum';
}

const FuturisticAnimatedBackground2029: React.FC<FuturisticAnimatedBackground2029Props> = ({
  intensity = 0.8,
  theme = 'cyberpunk'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'particle' | 'wave' | 'grid';
    }> = [];

    const colors = {
      cyberpunk: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff'],
      holographic: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00']
    };

    const selectedColors = colors[theme];

    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: selectedColors[Math.floor(Math.random() * selectedColors.length)],
        type: Math.random() > 0.7 ? 'wave' : Math.random() > 0.5 ? 'grid' : 'particle'
      });
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

        // Draw based on type
        if (particle.type === 'particle') {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
        } else if (particle.type === 'wave') {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `${particle.color}${Math.floor(particle.opacity * 0.5 * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 2;
          ctx.stroke();
        } else if (particle.type === 'grid') {
          ctx.beginPath();
          ctx.rect(particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2);
          ctx.strokeStyle = `${particle.color}${Math.floor(particle.opacity * 0.3 * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `${particle.color}${Math.floor((1 - distance / 200) * 0.2 * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Add theme-specific effects
      if (theme === 'cyberpunk') {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        
        // Cyberpunk grid effect
        const time = Date.now() * 0.001;
        for (let i = 0; i < 10; i++) {
          const wave = Math.sin(time + i * 0.5) * 50;
          
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, 150 + wave, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 0, 128, ${0.1 * intensity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        
        ctx.restore();
      }

      if (theme === 'holographic') {
        ctx.save();
        ctx.globalCompositeOperation = 'overlay';
        
        // Holographic interference pattern
        for (let x = 0; x < canvas.width; x += 30) {
          for (let y = 0; y < canvas.height; y += 30) {
            const time = Date.now() * 0.001;
            const interference = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time);
            
            if (Math.abs(interference) > 0.5) {
              ctx.beginPath();
              ctx.arc(x, y, 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${0.3 * intensity})`;
              ctx.fill();
            }
          }
        }
        
        ctx.restore();
      }

      if (theme === 'quantum') {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        
        // Quantum entanglement effect
        const time = Date.now() * 0.001;
        for (let i = 0; i < 3; i++) {
          const wave1 = Math.sin(time + i) * 100;
          const wave2 = Math.cos(time + i) * 100;
          
          ctx.beginPath();
          ctx.ellipse(canvas.width / 2 + wave1, canvas.height / 2 + wave2, 80, 40, time, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.15 * intensity})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity, theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: intensity,
        filter: theme === 'cyberpunk' ? 'blur(0.3px)' : 'none'
      }}
    />
>>>>>>> cursor/expand-services-and-deploy-updates-7186
  );
};

export default FuturisticAnimatedBackground2029;