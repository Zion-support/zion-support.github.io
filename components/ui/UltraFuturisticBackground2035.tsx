import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD

interface UltraFuturisticBackground2035Props {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?:
    | 'quantum-fusion'
    | 'neon-cyber'
    | 'holographic-matrix'
    | 'space-time';
=======
interface UltraFuturisticBackground2035Props {
  children: React.ReactNode,
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic-matrix' | 'space-time';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeonEffects?: boolean;
<<<<<<< HEAD
  enableSpaceTime?: boolean;

const UltraFuturisticBackground2035: React.FC<
  UltraFuturisticBackground2035Props
> = ({
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeonEffects = true,
  enableSpaceTime = true,
=======
  enableSpaceTime?: boolean
}

const UltraFuturisticBackground2035: React.FC<UltraFuturisticBackground2035Props> = ({
  intensity = 'medium';
  colorScheme = 'quantum-fusion';
  particleCount = 200;
  animationSpeed = 1.0;
  enableHolographic = true;
  enableQuantumEffects = true;
  enableNeonEffects = true;
  enableSpaceTime = true
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  const getColorScheme = () => {
    switch (colorScheme) {
      case 'quantum-fusion':
        return {
          primary: '#00ffff',
          secondary: '#ff00ff',
          accent: '#ffff00',
          background: 'rgba(0, 0, 0, 0.95)',
<<<<<<< HEAD
          glow: 'rgba(0, 255, 255, 0.3)',
=======
    glow: 'rgba(0, 255, 255, 0.3)'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        };
      case 'neon-cyber':
        return {
          primary: '#ff0080',
          secondary: '#00ff80',
          accent: '#8000ff',
          background: 'rgba(0, 0, 0, 0.9)',
<<<<<<< HEAD
          glow: 'rgba(255, 0, 128, 0.4)',
=======
    glow: 'rgba(255, 0, 128, 0.4)'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        };
      case 'holographic-matrix':
        return {
          primary: '#00ff41',
          secondary: '#ff0040',
          accent: '#0040ff',
          background: 'rgba(0, 0, 0, 0.92)',
<<<<<<< HEAD
          glow: 'rgba(0, 255, 65, 0.35)',
=======
    glow: 'rgba(0, 255, 65, 0.35)'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        };
      case 'space-time':
        return {
          primary: '#ff6b35',
          secondary: '#4ecdc4',
          accent: '#45b7d1',
          background: 'rgba(0, 0, 0, 0.88)',
<<<<<<< HEAD
          glow: 'rgba(255, 107, 53, 0.3)',
=======
    glow: 'rgba(255, 107, 53, 0.3)'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        };
      default:
        return {
          primary: '#00ffff',
          secondary: '#ff00ff',
          accent: '#ffff00',
          background: 'rgba(0, 0, 0, 0.95)',
<<<<<<< HEAD
          glow: 'rgba(0, 255, 255, 0.3)',
        };
=======
    glow: 'rgba(0, 255, 255, 0.3)'
        }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }
  };

  const colors = getColorScheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
<<<<<<< HEAD
      canvas.height = window.innerHeight;
=======
      canvas.height = window.innerHeight
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
<<<<<<< HEAD
      for (let i = 0; i < particleCount; i++) {
=======
      for (let i = 0, i < particleCount, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * animationSpeed,
          vy: (Math.random() - 0.5) * 2 * animationSpeed,
          size: Math.random() * 3 + 1,
          life: Math.random() * 100 + 50,
          maxLife: Math.random() * 100 + 50,
          type: Math.random() > 0.7 ? 'quantum' : 'normal',
<<<<<<< HEAD
          color: Math.random() > 0.5 ? colors.primary : colors.secondary,
        });
=======
          color: Math.random() > 0.5 ? colors.primary : colors.secondary
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }
    };

    initParticles();

    // Animation loop
    const animate = () => {
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Update life
        particle.life--;

        // Regenerate particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
<<<<<<< HEAD
          particle.type = Math.random() > 0.7 ? 'quantum' : 'normal';
=======
          particle.type = Math.random() > 0.7 ? 'quantum' : 'normal'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha;

        if (particle.type === 'quantum' && enableQuantumEffects) {
          // Quantum particle effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = colors.accent;
          ctx.fill();

          // Quantum glow
          ctx.shadowColor = colors.accent;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = colors.glow;
          ctx.fill();
<<<<<<< HEAD
          ctx.shadowBlur = 0;
=======
          ctx.shadowBlur = 0
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        } else {
          // Normal particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
<<<<<<< HEAD
          ctx.fill();
=======
          ctx.fill()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }
      });

      // Draw holographic grid
      if (enableHolographic) {
<<<<<<< HEAD
        drawHolographicGrid(ctx, colors);
=======
        drawHolographicGrid(ctx, colors)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }

      // Draw neon effects
      if (enableNeonEffects) {
<<<<<<< HEAD
        drawNeonEffects(ctx, colors);
=======
        drawNeonEffects(ctx, colors)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }

      // Draw space-time effects
      if (enableSpaceTime) {
<<<<<<< HEAD
        drawSpaceTimeEffects(ctx, colors);
      }

      animationRef.current = requestAnimationFrame(animate);
=======
        drawSpaceTimeEffects(ctx, colors)
      }

      animationRef.current = requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
<<<<<<< HEAD
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    particleCount,
    animationSpeed,
    colorScheme,
    enableHolographic,
    enableQuantumEffects,
    enableNeonEffects,
    enableSpaceTime,
  ]);
=======
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particleCount, animationSpeed, colorScheme, enableHolographic, enableQuantumEffects, enableNeonEffects, enableSpaceTime]);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  const drawHolographicGrid = (ctx: CanvasRenderingContext2D, colors: any) => {
    const gridSize = 50;
    const time = Date.now() * 0.001;
<<<<<<< HEAD

=======
    
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    ctx.strokeStyle = colors.primary;
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.3;

<<<<<<< HEAD
    for (let x = 0; x < ctx.canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, ctx.canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y < ctx.canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(ctx.canvas.width, y);
      ctx.stroke();
=======
    for (let x = 0, x < ctx.canvas.width, x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, ctx.canvas.height);
      ctx.stroke()
    }

    for (let y = 0, y < ctx.canvas.height, y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(ctx.canvas.width, y);
      ctx.stroke()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }

    // Animated diagonal lines
    ctx.strokeStyle = colors.secondary;
    ctx.globalAlpha = 0.2;
<<<<<<< HEAD
    for (let i = 0; i < 5; i++) {
=======
    for (let i = 0, i < 5, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      const offset = (time + i * 0.5) * 100;
      ctx.beginPath();
      ctx.moveTo(offset, 0);
      ctx.lineTo(offset + 200, ctx.canvas.height);
<<<<<<< HEAD
      ctx.stroke();
=======
      ctx.stroke()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }
  };

  const drawNeonEffects = (ctx: CanvasRenderingContext2D, colors: any) => {
    const time = Date.now() * 0.001;
<<<<<<< HEAD

    // Neon orbs
    for (let i = 0; i < 3; i++) {
=======
    
    // Neon orbs
    for (let i = 0, i < 3, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      const x = (Math.sin(time * 0.5 + i) * 0.3 + 0.5) * ctx.canvas.width;
      const y = (Math.cos(time * 0.3 + i) * 0.3 + 0.5) * ctx.canvas.height;
      const size = 30 + Math.sin(time + i) * 10;

      // Glow effect
      ctx.shadowColor = colors.primary;
      ctx.shadowBlur = 30;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = colors.glow;
      ctx.fill();

      // Core
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = colors.primary;
<<<<<<< HEAD
      ctx.fill();
=======
      ctx.fill()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }
  };

  const drawSpaceTimeEffects = (ctx: CanvasRenderingContext2D, colors: any) => {
    const time = Date.now() * 0.001;
<<<<<<< HEAD

=======
    
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    // Wormhole effect
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const maxRadius = Math.min(ctx.canvas.width, ctx.canvas.height) * 0.3;

<<<<<<< HEAD
    for (let i = 0; i < 20; i++) {
=======
    for (let i = 0, i < 20, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      const radius = (i / 20) * maxRadius;
      const angle = time * 2 + i * 0.3;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
<<<<<<< HEAD
      const alpha = 1 - i / 20;
=======
      const alpha = 1 - (i / 20);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

      ctx.globalAlpha = alpha * 0.5;
      ctx.fillStyle = colors.accent;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
<<<<<<< HEAD
      ctx.fill();
=======
      ctx.fill()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }
  };

  return (
<<<<<<< HEAD
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      <canvas
        ref={canvasRef}
        className='w-full h-full'
        style={{
          background: colors.background,
        }}
      />

      {/* Additional overlay effects */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Quantum energy field */}
        <motion.div
          className='absolute inset-0'
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 80%, ${colors.glow} 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`,
            ],
=======
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: colors.background}}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum energy field */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`;
              `radial-gradient(circle at 80% 80%, ${colors.glow} 0%, transparent 50%)`;
              `radial-gradient(circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`
            ]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'easeInOut',
          }}
        />

        {/* Holographic scan lines */}
        <div className='absolute inset-0 opacity-20'>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-full h-px bg-gradient-to-r from-transparent via-current to-transparent'
              style={{
                top: `${(i / 20) * 100}%`,
                color: colors.primary,
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0],
=======
            ease: "easeInOut"
          }}
        />
        
        {/* Holographic scan lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-current to-transparent"
              style={{
                top: `${(i / 20) * 100}%`,
                color: colors.primary
              }}
              animate={{
                opacity: [0, 1, 0];
                scaleX: [0, 1, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
<<<<<<< HEAD
                ease: 'easeInOut',
=======
                ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
              }}
            />
          ))}
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
};

export default UltraFuturisticBackground2035;
=======
  )
};

export default UltraFuturisticBackground2035;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
