<<<<<<< HEAD
<<<<<<< HEAD
 canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
if (ctx) {
  

export default function UltraFuturisticBackground2035({
  children,
}: UltraFuturisticBackground2035Props) {
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2035Props {
  children: React.ReactNode
}

export default function UltraFuturisticBackground2035({ children }: UltraFuturisticBackground2035Props) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2035Props {
  children: React.ReactNode
}

export default function UltraFuturisticBackground2035({ children }: UltraFuturisticBackground2035Props) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

<<<<<<< HEAD
<<<<<<< HEAD
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
=======
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
    canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
    if (ctx) {
<<<<<<< HEAD
<<<<<<< HEAD
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
=======
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    let animationFrameId: number,
    let particles: Array<{
<<<<<<< HEAD
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'hologram' | 'neon' | 'energy';
      life: number;
      maxLife: number;
=======
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
    }

    let animationFrameId: number,
    let particles: Array<{
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      opacity: number,
      color: string,
      type: 'quantum' | 'hologram' | 'neon' | 'energy',
      life: number,
      maxLife: number
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }> = [];

    // Initialize particles with enhanced types
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
<<<<<<< HEAD
<<<<<<< HEAD
      const particleCount = prefersReducedMotion
        ? 15
        : isSmallScreen
          ? 60
          : 150;

      for (let i = 0; i < particleCount; i++) {
        const type = ['quantum', 'hologram', 'neon', 'energy'][
          Math.floor(Math.random() * 4)
        ] as any;
=======
      const particleCount = prefersReducedMotion ? 15 : (isSmallScreen ? 60 : 150);
      
      for (let i = 0, i < particleCount, i++) {
        const type = ['quantumhologramneonenergy'][Math.floor(Math.random() * 4)] as any;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        const maxLife = Math.random() * 200 + 100;
        
        particles.push({
<<<<<<< HEAD
          x: (Math.random() * canvas.width) / (window.devicePixelRatio || 1),
          y: (Math.random() * canvas.height) / (window.devicePixelRatio || 1),
=======
      const particleCount = prefersReducedMotion ? 15 : (isSmallScreen ? 60 : 150);
      
      for (let i = 0, i < particleCount, i++) {
        const type = ['quantumhologramneonenergy'][Math.floor(Math.random() * 4)] as any;
        const maxLife = Math.random() * 200 + 100;
        
        particles.push({
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.6,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.6,
          size: Math.random() * (isSmallScreen ? 2 : 3) + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: getColorForType(type),
<<<<<<< HEAD
<<<<<<< HEAD
          type,
          life: maxLife,
          maxLife,
        });
=======
          type;
          life: maxLife,
          maxLife
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          type;
          life: maxLife,
          maxLife
        })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    };

    // Get color based on particle type
    const getColorForType = (type: string) => {
      switch (type) {
        case 'quantum':
<<<<<<< HEAD
<<<<<<< HEAD
          return ['#8b5cf6', '#06b6d4', '#ec4899'][
            Math.floor(Math.random() * 3)
          ];
=======
          return ['#8b5cf6#06b6d4#ec4899'][Math.floor(Math.random() * 3)];
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        case 'hologram':
          return ['#10b981#f59e0b#ef4444'][Math.floor(Math.random() * 3)];
        case 'neon':
          return ['#f97316#eab308#a855f7'][Math.floor(Math.random() * 3)];
        case 'energy':
<<<<<<< HEAD
          return ['#dc2626', '#7c3aed', '#059669'][
            Math.floor(Math.random() * 3)
          ];
        default:
          return '#8b5cf6';
=======
          return ['#8b5cf6#06b6d4#ec4899'][Math.floor(Math.random() * 3)];
        case 'hologram':
          return ['#10b981#f59e0b#ef4444'][Math.floor(Math.random() * 3)];
        case 'neon':
          return ['#f97316#eab308#a855f7'][Math.floor(Math.random() * 3)];
        case 'energy':
          return ['#dc2626#7c3aed#059669'][Math.floor(Math.random() * 3)];
        default: return '#8b5cf6'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          return ['#dc2626#7c3aed#059669'][Math.floor(Math.random() * 3)];
        default: return '#8b5cf6'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    };

    // Update and draw particles with enhanced effects
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update particle life
        particle.life--;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
<<<<<<< HEAD
<<<<<<< HEAD
          particle.x =
            (Math.random() * canvas.width) / (window.devicePixelRatio || 1);
          particle.y =
            (Math.random() * canvas.height) / (window.devicePixelRatio || 1);
=======
          particle.x = Math.random() * canvas.width / (window.devicePixelRatio || 1);
          particle.y = Math.random() * canvas.height / (window.devicePixelRatio || 1)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          particle.x = Math.random() * canvas.width / (window.devicePixelRatio || 1);
          particle.y = Math.random() * canvas.height / (window.devicePixelRatio || 1)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
<<<<<<< HEAD
<<<<<<< HEAD
        if (particle.x < 0)
          particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1))
          particle.x = 0;
        if (particle.y < 0)
          particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1))
          particle.y = 0;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.y = 0;
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

        // Calculate opacity based on life
        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * lifeRatio;

        // Draw particle based on type
        drawParticle(ctx, particle, currentOpacity);

        // Draw connections with enhanced effects
<<<<<<< HEAD
<<<<<<< HEAD
        const maxDistance = prefersReducedMotion
          ? 0
          : window.innerWidth < 768
            ? 120
            : 180;
        if (maxDistance > 0) {
          drawConnections(ctx, particles, index, maxDistance, currentOpacity);
=======
        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 120 : 180);
        if (maxDistance > 0) {
          drawConnections(ctx, particles, index, maxDistance, currentOpacity)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 120 : 180);
        if (maxDistance > 0) {
          drawConnections(ctx, particles, index, maxDistance, currentOpacity)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
      });

      if (!prefersReducedMotion) {
<<<<<<< HEAD
<<<<<<< HEAD
        animationFrameId = requestAnimationFrame(updateParticles);
=======
        animationFrameId = requestAnimationFrame(updateParticles)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        animationFrameId = requestAnimationFrame(updateParticles)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    };

    // Enhanced particle drawing with different types
<<<<<<< HEAD
<<<<<<< HEAD
    const drawParticle = (
      ctx: CanvasRenderingContext2D,
      particle: any,
      opacity: number
    ) => {
=======
    const drawParticle = (ctx: CanvasRenderingContext2D, particle: any, opacity: number) => {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const drawParticle = (ctx: CanvasRenderingContext2D, particle: any, opacity: number) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      ctx.save();
      ctx.globalAlpha = opacity;

      switch (particle.type) {
        case 'quantum':
          drawQuantumParticle(ctx, particle);
          break;
        case 'hologram':
          drawHologramParticle(ctx, particle);
          break;
        case 'neon':
          drawNeonParticle(ctx, particle);
          break;
        case 'energy':
          drawEnergyParticle(ctx, particle);
<<<<<<< HEAD
<<<<<<< HEAD
          break;
=======
          break
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }

      ctx.restore()
    };

    // Quantum particle with wave-like effects
    const drawQuantumParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const time = Date.now() * 0.001;
      const wave = Math.sin(time + particle.x * 0.01) * 0.5;
<<<<<<< HEAD

=======
          break
      }

      ctx.restore()
    };

    // Quantum particle with wave-like effects
    const drawQuantumParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const time = Date.now() * 0.001;
      const wave = Math.sin(time + particle.x * 0.01) * 0.5;
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      ctx.beginPath();
      ctx.arc(particle.x, particle.y + wave, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Add quantum glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
<<<<<<< HEAD
<<<<<<< HEAD
      ctx.arc(
        particle.x,
        particle.y + wave,
        particle.size * 0.5,
        0,
        Math.PI * 2
      );
=======
      ctx.arc(particle.x, particle.y + wave, particle.size * 0.5, 0, Math.PI * 2);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      ctx.fill();
      ctx.shadowBlur = 0
    };

    // Hologram particle with transparency and distortion
    const drawHologramParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const time = Date.now() * 0.002;
      const distortion = Math.sin(time + particle.y * 0.02) * 2;
      
      ctx.globalAlpha *= 0.7;
      ctx.beginPath();
<<<<<<< HEAD
      ctx.arc(
        particle.x + distortion,
        particle.y,
        particle.size,
        0,
        Math.PI * 2
      );
=======
      ctx.arc(particle.x, particle.y + wave, particle.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0
    };

    // Hologram particle with transparency and distortion
    const drawHologramParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const time = Date.now() * 0.002;
      const distortion = Math.sin(time + particle.y * 0.02) * 2;
      
      ctx.globalAlpha *= 0.7;
      ctx.beginPath();
      ctx.arc(particle.x + distortion, particle.y, particle.size, 0, Math.PI * 2);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      ctx.arc(particle.x + distortion, particle.y, particle.size, 0, Math.PI * 2);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Add holographic effect
      ctx.globalAlpha *= 0.5;
      ctx.beginPath();
<<<<<<< HEAD
<<<<<<< HEAD
      ctx.arc(
        particle.x + distortion,
        particle.y,
        particle.size * 1.5,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      ctx.stroke();
=======
      ctx.arc(particle.x + distortion, particle.y, particle.size * 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      ctx.stroke()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      ctx.arc(particle.x + distortion, particle.y, particle.size * 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      ctx.stroke()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    // Neon particle with bright glow
    const drawNeonParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      // Bright core
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      // Neon glow
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
<<<<<<< HEAD
<<<<<<< HEAD
      ctx.shadowBlur = 0;
=======
      ctx.shadowBlur = 0
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    // Energy particle with pulsing effect
    const drawEnergyParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const time = Date.now() * 0.003;
      const pulse = Math.sin(time) * 0.3 + 0.7;
      const size = particle.size * pulse;
<<<<<<< HEAD

=======
      ctx.shadowBlur = 0
    };

    // Energy particle with pulsing effect
    const drawEnergyParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const time = Date.now() * 0.003;
      const pulse = Math.sin(time) * 0.3 + 0.7;
      const size = particle.size * pulse;
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Energy field effect
      ctx.globalAlpha *= 0.3;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
<<<<<<< HEAD
<<<<<<< HEAD
      ctx.fill();
    };

    // Enhanced connection drawing with different effects
    const drawConnections = (
      ctx: CanvasRenderingContext2D,
      particles: any[],
      currentIndex: number,
      maxDistance: number,
      opacity: number
    ) => {
=======
      ctx.fill()
    };

    // Enhanced connection drawing with different effects
    const drawConnections = (ctx: CanvasRenderingContext2D, particles: any[], currentIndex: number, maxDistance: number, opacity: number) => {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      ctx.fill()
    };

    // Enhanced connection drawing with different effects
    const drawConnections = (ctx: CanvasRenderingContext2D, particles: any[], currentIndex: number, maxDistance: number, opacity: number) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      particles.forEach((otherParticle, otherIndex) => {
        if (currentIndex !== otherIndex) {
          const dx = particles[currentIndex].x - otherParticle.x;
          const dy = particles[currentIndex].y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
<<<<<<< HEAD
<<<<<<< HEAD
            const connectionOpacity =
              ((maxDistance - distance) / maxDistance) * 0.15 * opacity;

=======
            const connectionOpacity = (maxDistance - distance) / maxDistance * 0.15 * opacity;
            
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            const connectionOpacity = (maxDistance - distance) / maxDistance * 0.15 * opacity;
            
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            // Different connection styles based on particle types
            if (particles[currentIndex].type === otherParticle.type) {
              // Same type - stronger connection
              ctx.globalAlpha = connectionOpacity * 1.5;
              ctx.strokeStyle = particles[currentIndex].color;
<<<<<<< HEAD
<<<<<<< HEAD
              ctx.lineWidth = 2;
=======
              ctx.lineWidth = 2
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              ctx.lineWidth = 2
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            } else {
              // Different types - weaker connection
              ctx.globalAlpha = connectionOpacity * 0.7;
              ctx.strokeStyle = '#ffffff';
<<<<<<< HEAD
<<<<<<< HEAD
              ctx.lineWidth = 1;
=======
              ctx.lineWidth = 1
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              ctx.lineWidth = 1
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }

            ctx.beginPath();
            ctx.moveTo(particles[currentIndex].x, particles[currentIndex].y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
<<<<<<< HEAD
<<<<<<< HEAD
            ctx.stroke();
          }
        }
      });
=======
            ctx.stroke()
          }
        }
      })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ctx.stroke()
          }
        }
      })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
      canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
      if (ctx) {
<<<<<<< HEAD
<<<<<<< HEAD
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      }
      initParticles();
=======
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
      }
      initParticles()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
      }
      initParticles()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    window.addEventListener('resize', handleResize);
    initParticles();
    updateParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
<<<<<<< HEAD
<<<<<<< HEAD
        cancelAnimationFrame(animationFrameId);
      }
    };
=======
        cancelAnimationFrame(animationFrameId)
      }
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        cancelAnimationFrame(animationFrameId)
      }
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='fixed inset-0 z-0 overflow-hidden'>
=======
      <div className="fixed inset-0 z-0 overflow-hidden">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {/* Enhanced background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
<<<<<<< HEAD
              'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
            ],
=======
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Enhanced background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)'
            ]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)'
            ]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut';
          }}
        />
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {/* Holographic grid effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
<<<<<<< HEAD
            `,
              backgroundSize: '50px 50px',
            }}
          />
=======
        
        {/* Holographic grid effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px'
          }} />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            `;
            backgroundSize: '50px 50px'
          }} />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </div>

        {/* Canvas for animated particles */}
        <canvas
          ref={canvasRef}
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute inset-0 w-full h-full'
=======
          className="absolute inset-0 w-full h-full"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute inset-0 w-full h-full"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          style={{ filter: 'blur(0.5px)' }}
        />

        {/* Floating neon orbs */}
        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
=======
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"
          animate={{
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.4, 0.2];
            rotate: [0, 180, 360]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"
          animate={{
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.4, 0.2];
            rotate: [0, 180, 360]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: 'easeInOut'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20"
          animate={{
<<<<<<< HEAD
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0],
=======
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20"
          animate={{
            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2];
            rotate: [360, 180, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2];
            rotate: [360, 180, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: 'easeInOut'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: 'easeInOut'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />

        {/* Quantum energy waves */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='absolute inset-0 overflow-hidden'>
=======
        <div className="absolute inset-0 overflow-hidden">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{
<<<<<<< HEAD
              y: [-100, 100, -100],
              opacity: [0, 0.3, 0],
=======
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{
              y: [-100, 100, -100];
              opacity: [0, 0.3, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              y: [-100, 100, -100];
              opacity: [0, 0.3, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
              ease: 'easeInOut',
=======
              ease: 'easeInOut'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
          />
          <motion.div
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            animate={{
<<<<<<< HEAD
              y: [100, -100, 100],
              opacity: [0, 0.3, 0],
=======
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            animate={{
              y: [100, -100, 100];
              opacity: [0, 0.3, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              y: [100, -100, 100];
              opacity: [0, 0.3, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
              ease: 'easeInOut',
=======
              ease: 'easeInOut'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              ease: 'easeInOut'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
          />
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

      {/* Render children */}
      {children}
    </>
  );
=======
      
      {/* Render children */}
      {children}
    </>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
      {/* Render children */}
      {children}
    </>
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
