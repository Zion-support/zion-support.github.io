 canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
if (ctx) {
  

export default function UltraFuturisticBackground2035({
  children,
}: UltraFuturisticBackground2035Props) {  const canvasRef = useRef<HTMLCanvasElement>(null);
=======
import React, { useEffect, useRef } from 'react';
import {motion} from 'framer-motion';
interface UltraFuturisticBackground2035Props {
  children: React.ReactNode
}

export default function UltraFuturisticBackground2035({ children }: UltraFuturisticBackground2035Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
=======
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
    canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
    if (ctx) {
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'hologram' | 'neon' | 'energy';
      life: number;
      maxLife: number;    }> = [];
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }> = [];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    // Initialize particles with enhanced types
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
      const particleCount = prefersReducedMotion
        ? 15
        : isSmallScreen
          ? 60
          : 150;

      for (let i = 0; i < particleCount; i++) {
        const type = ['quantum', 'hologram', 'neon', 'energy'][
          Math.floor(Math.random() * 4)
        ] as any;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        const maxLife = Math.random() * 200 + 100;

        particles.push({
          x: (Math.random() * canvas.width) / (window.devicePixelRatio || 1),
          y: (Math.random() * canvas.height) / (window.devicePixelRatio || 1),          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.6,
=======
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.6,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.6,
          size: Math.random() * (isSmallScreen ? 2 : 3) + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: getColorForType(type),
          type,
          life: maxLife,
          maxLife,
        });      }
=======
          type;
          life: maxLife,
          maxLife
        })
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };

    // Get color based on particle type
    const getColorForType = (type: string) => {
      switch (type) {
        case 'quantum':
          return ['#8b5cf6', '#06b6d4', '#ec4899'][
            Math.floor(Math.random() * 3)
          ];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        case 'hologram':
          return ['#10b981', '#f59e0b', '#ef4444'][
            Math.floor(Math.random() * 3)
          ];
        case 'neon':
          return ['#f97316', '#eab308', '#a855f7'][
            Math.floor(Math.random() * 3)
          ];
        case 'energy':
          return ['#dc2626', '#7c3aed', '#059669'][
            Math.floor(Math.random() * 3)
          ];
        default:
          return '#8b5cf6';      }
=======
          return ['#dc2626#7c3aed#059669'][Math.floor(Math.random() * 3)];
        default: return '#8b5cf6'
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };

    // Update and draw particles with enhanced effects
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update particle life
        particle.life--;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x =
            (Math.random() * canvas.width) / (window.devicePixelRatio || 1);
          particle.y =
            (Math.random() * canvas.height) / (window.devicePixelRatio || 1);        }
=======
          particle.x = Math.random() * canvas.width / (window.devicePixelRatio || 1);
          particle.y = Math.random() * canvas.height / (window.devicePixelRatio || 1)
        }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0)
          particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1))
          particle.x = 0;
        if (particle.y < 0)
          particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1))
          particle.y = 0;
        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.y = 0;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        // Calculate opacity based on life
        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * lifeRatio;

        // Draw particle based on type
        drawParticle(ctx, particle, currentOpacity);

        // Draw connections with enhanced effects
        const maxDistance = prefersReducedMotion
          ? 0
          : window.innerWidth < 768
            ? 120
            : 180;
        if (maxDistance > 0) {
          drawConnections(ctx, particles, index, maxDistance, currentOpacity);        }
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(updateParticles);      }
    };

    // Enhanced particle drawing with different types
=======
        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 120 : 180);
        if (maxDistance > 0) {
          drawConnections(ctx, particles, index, maxDistance, currentOpacity)
        }
      });

      if (!prefersReducedMotion) {
<<<<<<< HEAD
        animationFrameId = requestAnimationFrame(updateParticles);
=======
        animationFrameId = requestAnimationFrame(updateParticles)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    };

    // Enhanced particle drawing with different types
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const drawParticle = (
      ctx: CanvasRenderingContext2D,
      particle: any,
      opacity: number
<<<<<<< HEAD
    ) => {      ctx.save();
=======
    const drawParticle = (ctx: CanvasRenderingContext2D, particle: any, opacity: number) => {
      ctx.save();
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
          break;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      }

      ctx.restore();
    };

    // Quantum particle with wave-like effects
    const drawQuantumParticle = (
      ctx: CanvasRenderingContext2D,
      particle: any
    ) => {
      const time = Date.now() * 0.001;
      const wave = Math.sin(time + particle.x * 0.01) * 0.5;
=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      ctx.beginPath();
      ctx.arc(particle.x, particle.y + wave, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Add quantum glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(
        particle.x,
        particle.y + wave,
        particle.size * 0.5,
        0,
        Math.PI * 2
      );
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    // Hologram particle with transparency and distortion
    const drawHologramParticle = (
      ctx: CanvasRenderingContext2D,
      particle: any
    ) => {
      const time = Date.now() * 0.002;
      const distortion = Math.sin(time + particle.y * 0.02) * 2;

      ctx.globalAlpha *= 0.7;
      ctx.beginPath();
      ctx.arc(
        particle.x + distortion,
        particle.y,
        particle.size,
        0,
        Math.PI * 2
      );      ctx.fillStyle = particle.color;
=======
      ctx.arc(particle.x + distortion, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      ctx.fill();

      // Add holographic effect
      ctx.globalAlpha *= 0.5;
      ctx.beginPath();
      ctx.arc(
        particle.x + distortion,
        particle.y,
        particle.size * 1.5,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      ctx.stroke();    };
=======
      ctx.arc(particle.x + distortion, particle.y, particle.size * 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      ctx.stroke()
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    // Neon particle with bright glow
    const drawNeonParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      // Bright core
      ctx.beginPath(),
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
      ctx.shadowBlur = 0;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };

    // Energy particle with pulsing effect
    const drawEnergyParticle = (
      ctx: CanvasRenderingContext2D,
      particle: any
    ) => {
      const time = Date.now() * 0.003;
      const pulse = Math.sin(time) * 0.3 + 0.7;
      const size = particle.size * pulse;
=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Energy field effect
      ctx.globalAlpha *= 0.3;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    };

    // Enhanced connection drawing with different effects
    const drawConnections = (
      ctx: CanvasRenderingContext2D,
      particles: any[],
      currentIndex: number,
      maxDistance: number,
      opacity: number
    ) => {      particles.forEach((otherParticle, otherIndex) => {
=======
      ctx.fill()
    };

    // Enhanced connection drawing with different effects
    const drawConnections = (ctx: CanvasRenderingContext2D, particles: any[], currentIndex: number, maxDistance: number, opacity: number) => {
      particles.forEach((otherParticle, otherIndex) => {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        if (currentIndex !== otherIndex) {
          const dx = particles[currentIndex].x - otherParticle.x;
          const dy = particles[currentIndex].y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const connectionOpacity =
              ((maxDistance - distance) / maxDistance) * 0.15 * opacity;
=======
            const connectionOpacity = (maxDistance - distance) / maxDistance * 0.15 * opacity;
            
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            // Different connection styles based on particle types
            if (particles[currentIndex].type === otherParticle.type) {
              // Same type - stronger connection
              ctx.globalAlpha = connectionOpacity * 1.5;
              ctx.strokeStyle = particles[currentIndex].color;
              ctx.lineWidth = 2;            } else {
              // Different types - weaker connection
              ctx.globalAlpha = connectionOpacity * 0.7;
              ctx.strokeStyle = '#ffffff';
              ctx.lineWidth = 1;            }
=======
              ctx.lineWidth = 2
            } else {
              // Different types - weaker connection
              ctx.globalAlpha = connectionOpacity * 0.7;
              ctx.strokeStyle = '#ffffff';
<<<<<<< HEAD
              ctx.lineWidth = 1;
=======
              ctx.lineWidth = 1
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

            ctx.beginPath();
            ctx.moveTo(particles[currentIndex].x, particles[currentIndex].y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });    };
=======
            ctx.stroke()
          }
        }
      })
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
      canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
      if (ctx) {
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      }
      initParticles();    };
=======
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
      }
      initParticles()
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    window.addEventListener('resize', handleResize);
    initParticles();
    updateParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };  }, []);

  return (
    <>
      <div className='fixed inset-0 z-0 overflow-hidden'>
=======
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, []);

  return (
    <>
<<<<<<< HEAD
      <div className='fixed inset-0 z-0 overflow-hidden'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {/* Enhanced background layers */}
        <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black' />

        {/* Animated gradient overlay */}
        <motion.div
          className='absolute inset-0 opacity-30'
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
            ],          }}
=======
              'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)'
            ]
          }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {/* Holographic grid effect */}
        <div className='absolute inset-0 opacity-20'>
          <div
            className='h-full w-full'
            style={{
              backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: '50px 50px',
            }}
          />        </div>
=======
            `;
            backgroundSize: '50px 50px'
          }} />
        </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        {/* Canvas for animated particles */}
        <canvas
          ref={canvasRef}
          className='absolute inset-0 w-full h-full'          style={{ filter: 'blur(0.5px)' }}
=======
          className="absolute inset-0 w-full h-full"
          style={{ filter: 'blur(0.5px)' }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        />

        {/* Floating neon orbs */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
=======
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"
          animate={{
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.4, 0.2];
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'easeInOut',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          }}
        />

        <motion.div
          className='absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />

        {/* Quantum energy waves */}
        <div className='absolute inset-0 overflow-hidden'>
=======
            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2];
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: 'easeInOut'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />

        {/* Quantum energy waves */}
<<<<<<< HEAD
        <div className='absolute inset-0 overflow-hidden'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <motion.div
            className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent'
            animate={{
              y: [-100, 100, -100],
              opacity: [0, 0.3, 0],            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
=======
              y: [-100, 100, -100];
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
<<<<<<< HEAD
              ease: 'easeInOut',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            }}
          />
          <motion.div
            className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent'
            animate={{
              y: [100, -100, 100],
              opacity: [0, 0.3, 0],            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',            }}
          />
        </div>
      </div>
=======
              y: [100, -100, 100];
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
<<<<<<< HEAD
              ease: 'easeInOut',
=======
              ease: 'easeInOut'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
          />
        </div>
      </div>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      {/* Render children */}
      {children}
    </>
<<<<<<< HEAD
  );
=======
      
      {/* Render children */}
      {children}
    </>
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
