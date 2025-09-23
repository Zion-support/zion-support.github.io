<<<<<<< HEAD
"use client";
import React{ useEffectuseRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2026Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'cyber' | 'neon';
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2026Props {
  children: React.ReactNode;
>>>>>>> origin/auto/autonomy-17186719616
  className?: string;
}

const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({ 
<<<<<<< HEAD
  children
  className = ', ' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Intersection Observer for performance
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Get intensity value
  const getIntensityValue = useCallback((intensity: string): number => {
    switch (intensity) {
      case 'low': return 0.3;
      case 'medium': return 0.6;
      case 'high': return 1.0;
      default: return 0.6;
    }
  }, []);

  // Get theme colors
  const getThemeColors = useCallback((theme: string): { primary: string; secondary: string; accent: string } => {
    switch (theme) {
      case 'quantum':
        return {
          primary: '#3b82f6',   // Blue
          secondary: '#8b5cf6',  // Purple
          accent: '#06b6d4'      // Cyan
        };
      case 'cyber':
        return {
          primary: '#10b981',    // Green
          secondary: '#f59e0b',  // Amber
          accent: '#ef4444'      // Red
        };
      case 'neon':
        return {
          primary: '#ec4899',    // Pink
          secondary: '#f97316',  // Orange
          accent: '#8b5cf6'      // Purple
        };
      default:
        return {
          primary: '#3b82f6',
          secondary: '#8b5cf6',
          accent: '#06b6d4'
        };
    }
  }, []);

  // Memoized particle system configuration
  const particleConfig = useMemo(() => ({
    maxParticles: isReducedMotion ? 50 : 150,
    particleSize: { min: 1, max: 3 },
    speed: { min: 0.5, max: 2.0 },
    opacity: { min: 0.1, max: 0.8 }
  }), [isReducedMotion]);

  // Initialize canvas and animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible || isReducedMotion) return;
=======
  children, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
>>>>>>> origin/auto/autonomy-17186719616

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

<<<<<<< HEAD
    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
=======
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Array<{
>>>>>>> origin/auto/autonomy-17186719616
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
<<<<<<< HEAD
      opacity: number;
      color: string;
=======
      color: string;
      alpha: number;
>>>>>>> origin/auto/autonomy-17186719616
      life: number;
      maxLife: number;
    }> = [];

    const colors = [
<<<<<<< HEAD
      '#00ffff'// Cyan
      '#ff00ff'// Magenta
      '#ffff00'// Yellow
      '#00ff00'// Green
      '#ff0080'// Pink
      '#8000ff'// Purple
      '#0080ff'// Blue
=======
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
      '#00ff00', // Green
      '#ff0080', // Pink
      '#8000ff', // Purple
      '#0080ff', // Blue
>>>>>>> origin/auto/autonomy-17186719616
      '#ff8000'  // Orange
    ];

    const createParticle = () => {
      const side = Math.floor(Math.random() * 4);
<<<<<<< HEAD
      let xyvxvy;
=======
      let x, y, vx, vy;
>>>>>>> origin/auto/autonomy-17186719616

      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width;
          y = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
          break;
        case 1: // Right
          x = canvas.width + 10;
          y = Math.random() * canvas.height;
          vx = -(Math.random() * 2 + 1);
          vy = (Math.random() - 0.5) * 2;
          break;
        case 2: // Bottom
          x = Math.random() * canvas.width;
          y = canvas.height + 10;
          vx = (Math.random() - 0.5) * 2;
          vy = -(Math.random() * 2 + 1);
          break;
        case 3: // Left
          x = -10;
          y = Math.random() * canvas.height;
          vx = Math.random() * 2 + 1;
          vy = (Math.random() - 0.5) * 2;
          break;
      }

      return {
        x,
        y,
        vx,
        vy,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.8 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100
      };
    };

<<<<<<< HEAD
    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleConfig.maxParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * particleConfig.speed.max * intensityValue,
          vy: (Math.random() - 0.5) * particleConfig.speed.max * intensityValue,
          size: Math.random() * (particleConfig.particleSize.max - particleConfig.particleSize.min) + particleConfig.particleSize.min,
          opacity: Math.random() * (particleConfig.opacity.max - particleConfig.opacity.min) + particleConfig.opacity.min,
          color: [colors.primary, colors.secondary, colors.accent][Math.floor(Math.random() * 3)],
          life: Math.random() * 100,
          maxLife: 100
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0canvas.widthcanvas.height);

      // Update and draw particles
      particles.forEach((particleindex) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Update life
        particle.life -= 0.5;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
=======
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        if (particle.life > particle.maxLife || 
            particle.x < -20 || particle.x > canvas.width + 20 ||
            particle.y < -20 || particle.y > canvas.height + 20) {
          particles[index] = createParticle();
>>>>>>> origin/auto/autonomy-17186719616
        }

        // Draw particle
        ctx.save();
<<<<<<< HEAD
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.xparticle.yparticle.size0Math.PI * 2);
=======
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
>>>>>>> origin/auto/autonomy-17186719616
        ctx.fill();

        // Draw glow effect
        const gradient = ctx.createRadialGradient(
<<<<<<< HEAD
          particle.xparticle.y0,
          particle.xparticle.yparticle.size * 3
        );
        gradient.addColorStop(0particle.color);
        gradient.addColorStop(1'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.xparticle.yparticle.size * 30Math.PI * 2);
        ctx.fill();
        ctx.restore();

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(02550.1)';
      ctx.lineWidth = 1;
      particles.forEach((particle1i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x2) + 
            Math.pow(particle1.y - particle2.y2)
          );
          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 100) * 0.3 * intensityValue;
            ctx.strokeStyle = colors.primary;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle1.xparticle1.y);
            ctx.lineTo(particle2.xparticle2.y);
            ctx.stroke();
            ctx.restore();
=======
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
>>>>>>> origin/auto/autonomy-17186719616
          }
        });
      });

      // Draw grid pattern
<<<<<<< HEAD
      ctx.strokeStyle = 'rgba(02550.05)';
=======
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
>>>>>>> origin/auto/autonomy-17186719616
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
<<<<<<< HEAD
        ctx.moveTo(x0);
        ctx.lineTo(xcanvas.height);
=======
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
>>>>>>> origin/auto/autonomy-17186719616
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
<<<<<<< HEAD
        ctx.moveTo(0y);
        ctx.lineTo(canvas.widthy);
=======
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
>>>>>>> origin/auto/autonomy-17186719616
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

<<<<<<< HEAD
    window.addEventListener(', 'resize', 'handleResize);
=======
    window.addEventListener('resize', handleResize);
>>>>>>> origin/auto/autonomy-17186719616
    initParticles();
    animate();

    return () => {
<<<<<<< HEAD
      window.removeEventListener(', 'resize', 'handleResize);
=======
      window.removeEventListener('resize', handleResize);
>>>>>>> origin/auto/autonomy-17186719616
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
<<<<<<< HEAD
  }[]);
=======
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
<<<<<<< HEAD
        style={{ background: 'linear-gradient(135deg#0a0a0a 0%#1a1a2e 50%#16213e 100%)' }}
=======
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
>>>>>>> origin/auto/autonomy-17186719616
      />
      
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{
            rotate: 360,
<<<<<<< HEAD
            scale: [1.21],
            opacity: [0.30.60.3]
=======
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
>>>>>>> origin/auto/autonomy-17186719616
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{
<<<<<<< HEAD
            y: [0-20],
            opacity: [0.20.50.2]
=======
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
>>>>>>> origin/auto/autonomy-17186719616
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={{
<<<<<<< HEAD
            rotate: [0180360],
            scale: [1.1]
=======
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
>>>>>>> origin/auto/autonomy-17186719616
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={{
<<<<<<< HEAD
            rotate: [0-180-360],
            opacity: [0.40.70.4]
=======
            rotate: [0, -180, -360],
            opacity: [0.4, 0.7, 0.4]
>>>>>>> origin/auto/autonomy-17186719616
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Energy Field Effects */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
          animate={{
<<<<<<< HEAD
            x: ['-100%'100%']
=======
            x: ['-100%', '100%']
>>>>>>> origin/auto/autonomy-17186719616
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
          animate={{
<<<<<<< HEAD
            y: ['-100%'100%']
=======
            y: ['-100%', '100%']
>>>>>>> origin/auto/autonomy-17186719616
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>

      {/* Holographic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent" />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2026;