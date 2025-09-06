import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
interface UltraFuturisticBackground2026Props {
  children: React.ReactNode,
  className?: string
}

<<<<<<< HEAD
const UltraFuturisticBackground2026: React.FC<
  UltraFuturisticBackground2026Props
> = ({ children, className = '' }) => {
=======
interface UltraFuturisticBackground2026Props {
  children: React.ReactNode,
  className?: string
}

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({ 
  children;
  className = '' 
}) => {
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Array<{
<<<<<<< HEAD
<<<<<<< HEAD
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
      maxLife: number;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,
      life: number,
      maxLife: number
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }> = [];

    const colors = [
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
      '#00ff00', // Green
      '#ff0080', // Pink
      '#8000ff', // Purple
      '#0080ff', // Blue
<<<<<<< HEAD
<<<<<<< HEAD
      '#ff8000', // Orange
=======
      '#ff8000'  // Orange
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      '#ff8000'  // Orange
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    ];

    const createParticle = () => {
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;

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
<<<<<<< HEAD
<<<<<<< HEAD
          break;
      }

      return {
        x,
        y,
        vx,
        vy,
=======
          break
      }

      return {
=======
          break
      }

      return {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        x;
        y;
        vx;
        vy;
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.8 + 0.2,
        life: 0,
<<<<<<< HEAD
<<<<<<< HEAD
        maxLife: Math.random() * 200 + 100,
      };
=======
        maxLife: Math.random() * 200 + 100
      }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        maxLife: Math.random() * 200 + 100
      }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    const initParticles = () => {
      particles = [];
<<<<<<< HEAD
<<<<<<< HEAD
      for (let i = 0; i < 100; i++) {
        particles.push(createParticle());
=======
      for (let i = 0, i < 100, i++) {
        particles.push(createParticle())
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      for (let i = 0, i < 100, i++) {
        particles.push(createParticle())
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

<<<<<<< HEAD
<<<<<<< HEAD
        if (
          particle.life > particle.maxLife ||
          particle.x < -20 ||
          particle.x > canvas.width + 20 ||
          particle.y < -20 ||
          particle.y > canvas.height + 20
        ) {
          particles[index] = createParticle();
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        if (particle.life > particle.maxLife || 
            particle.x < -20 || particle.x > canvas.width + 20 ||
            particle.y < -20 || particle.y > canvas.height + 20) {
          particles[index] = createParticle()
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow effect
        const gradient = ctx.createRadialGradient(
<<<<<<< HEAD
<<<<<<< HEAD
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
=======
          particle.x, particle.y, 0;
          particle.x, particle.y, particle.size * 3
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          particle.x, particle.y, 0;
          particle.x, particle.y, particle.size * 3
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
<<<<<<< HEAD
<<<<<<< HEAD
        ctx.restore();
=======
        ctx.restore()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        ctx.restore()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const distance = Math.sqrt(
<<<<<<< HEAD
<<<<<<< HEAD
            Math.pow(particle1.x - particle2.x, 2) +
              Math.pow(particle1.y - particle2.y, 2)
=======
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
<<<<<<< HEAD
<<<<<<< HEAD
            ctx.stroke();
          }
        });
=======
            ctx.stroke()
          }
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ctx.stroke()
          }
        })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      });

      // Draw grid pattern
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
<<<<<<< HEAD
<<<<<<< HEAD
      for (let x = 0; x < canvas.width; x += gridSize) {
=======
      for (let x = 0, x < canvas.width, x += gridSize) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke()
      }
      for (let y = 0, y < canvas.height, y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke()
      }

<<<<<<< HEAD
      animationRef.current = requestAnimationFrame(animate);
=======
      for (let x = 0, x < canvas.width, x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke()
      }
      for (let y = 0, y < canvas.height, y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke()
      }

      animationRef.current = requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      animationRef.current = requestAnimationFrame(animate)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
<<<<<<< HEAD
<<<<<<< HEAD
      canvas.height = window.innerHeight;
=======
      canvas.height = window.innerHeight
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      canvas.height = window.innerHeight
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    window.addEventListener('resize', handleResize);
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
<<<<<<< HEAD
<<<<<<< HEAD
        cancelAnimationFrame(animationRef.current);
      }
    };
=======
        cancelAnimationFrame(animationRef.current)
      }
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        cancelAnimationFrame(animationRef.current)
      }
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
<<<<<<< HEAD
<<<<<<< HEAD
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        }}
=======
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      />
      
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{
            rotate: 360,
<<<<<<< HEAD
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
=======
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{
<<<<<<< HEAD
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
=======
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{
            y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={{
<<<<<<< HEAD
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
=======
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={{
            rotate: [0, 180, 360];
            scale: [1, 1.1, 1]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [0, 180, 360];
            scale: [1, 1.1, 1]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={{
<<<<<<< HEAD
            rotate: [0, -180, -360],
            opacity: [0.4, 0.7, 0.4],
=======
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={{
            rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
      </div>

      {/* Energy Field Effects */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='fixed inset-0 pointer-events-none z-20'>
=======
      <div className="fixed inset-0 pointer-events-none z-20">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
          animate={{
<<<<<<< HEAD
            x: ['-100%', '100%'],
=======
      <div className="fixed inset-0 pointer-events-none z-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
          animate={{
            x: ['-100%100%']
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            x: ['-100%100%']
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
          animate={{
<<<<<<< HEAD
            y: ['-100%', '100%'],
=======
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
          animate={{
            y: ['-100%100%']
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            y: ['-100%100%']
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
      </div>

      {/* Content */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='relative z-30'>{children}</div>
=======
      <div className="relative z-30">
        {children}
      </div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

      {/* Holographic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent" />
      </div>
    </div>
  )
};

<<<<<<< HEAD
export default UltraFuturisticBackground2026;
=======
      <div className="relative z-30">
        {children}
      </div>

      {/* Holographic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent" />
      </div>
    </div>
  )
};

export default UltraFuturisticBackground2026;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default UltraFuturisticBackground2026;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
