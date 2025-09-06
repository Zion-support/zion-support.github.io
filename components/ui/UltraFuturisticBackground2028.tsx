<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
 canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Particle system const particles: Array< {
  // Wrap around edges if (particle.x < 0) particle.x = canvas.width;
if (particle.x > canvas.width) particle.x = 0;
if (particle.y < 0) particle.y = canvas.height;
if (particle.y > canvas.height) particle.y = 0;
// Draw particle requestAnimationFrame (animate) 
};
animate ();
// Handle resize window.addEventListener ('resize', handleResize);
/> {
  /* Floating Circles */ 
}<motion.div 

export default function UltraFuturisticBackground2028({
  children,
<<<<<<< HEAD
}: UltraFuturisticBackground2028Props) {  const canvasRef = useRef<HTMLCanvasElement>(null);
=======
}: UltraFuturisticBackground2028Props) {
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2028Props {
  children: React.ReactNode
}

export default function UltraFuturisticBackground2028({ children }: UltraFuturisticBackground2028Props) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2028Props {
  children: React.ReactNode
}

export default function UltraFuturisticBackground2028({ children }: UltraFuturisticBackground2028Props) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const canvasRef = useRef<HTMLCanvasElement>(null);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles: Array<{
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    // Create particles
<<<<<<< HEAD
    for (let i = 0; i < 100; i++) {      particles.push({
=======
    for (let i = 0; i < 100; i++) {
=======
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number
    }> = [];

    // Create particles
    for (let i = 0, i < 100, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number
    }> = [];

    // Create particles
    for (let i = 0, i < 100, i++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      particles.push({
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        color: ['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981'][
          Math.floor(Math.random() * 4)
        ],
        opacity: Math.random() * 0.5 + 0.3,
<<<<<<< HEAD
      });    }
=======
      });
=======
        color: ['#8b5cf6#3b82f6#06b6d4#10b981'][Math.floor(Math.random() * 4)],
        opacity: Math.random() * 0.5 + 0.3
      })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        color: ['#8b5cf6#3b82f6#06b6d4#10b981'][Math.floor(Math.random() * 4)],
        opacity: Math.random() * 0.5 + 0.3
      })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
<<<<<<< HEAD
      particles.forEach(particle => {        particle.x += particle.vx;
=======
<<<<<<< HEAD
<<<<<<< HEAD
      particles.forEach(particle => {
=======
      particles.forEach((particle) => {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      particles.forEach((particle) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        particle.x += particle.vx;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
        particles.forEach(otherParticle => {          const dx = particle.x - otherParticle.x;
=======
<<<<<<< HEAD
<<<<<<< HEAD
        particles.forEach(otherParticle => {
=======
        particles.forEach((otherParticle) => {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        particles.forEach((otherParticle) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          const dx = particle.x - otherParticle.x;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
<<<<<<< HEAD
            ctx.globalAlpha = ((100 - distance) / 100) * 0.1;
=======
<<<<<<< HEAD
<<<<<<< HEAD
            ctx.globalAlpha = ((100 - distance) / 100) * 0.1;
=======
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

<<<<<<< HEAD
      requestAnimationFrame(animate);    };
=======
<<<<<<< HEAD
      requestAnimationFrame(animate);
=======
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.lineWidth = 1;
            ctx.stroke()
          }
        })
      });

      requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      requestAnimationFrame(animate)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
<<<<<<< HEAD
      canvas.height = window.innerHeight;    };
=======
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    window.addEventListener('resize', handleResize);

    return () => {
<<<<<<< HEAD
      window.removeEventListener('resize', handleResize);
    };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      window.removeEventListener('resize', handleResize);
    };
=======
      window.removeEventListener('resize', handleResize)
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }, []);

  return (
    <div className='relative min-h-screen bg-black overflow-hidden'>
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
<<<<<<< HEAD
        className='absolute inset-0 w-full h-full pointer-events-none'        style={{ zIndex: 0 }}
      />

      {/* Gradient Overlays */}
=======
<<<<<<< HEAD
        className='absolute inset-0 w-full h-full pointer-events-none'
=======
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        className="absolute inset-0 w-full h-full pointer-events-none"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        style={{ zIndex: 0 }}
      />

      {/* Gradient Overlays */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div
        className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20'
        style={{ zIndex: 1 }}
      />
      <div
        className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.15),transparent_50%)]'
        style={{ zIndex: 1 }}
      />
      <div
        className='absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.15),transparent_50%)]'
        style={{ zIndex: 1 }}
      />
      <div
        className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]'
        style={{ zIndex: 1 }}
      />
<<<<<<< HEAD
=======
=======
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.15),transparent_50%)]" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.15),transparent_50%)]" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" style={{ zIndex: 1 }} />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      {/* Floating Geometric Shapes */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{ zIndex: 2 }}
      >
        {/* Animated Hexagons */}
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-purple-500/30 rotate-45'
          animate={{
<<<<<<< HEAD
            rotate: [45, 405],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
=======
<<<<<<< HEAD
            rotate: [45, 405],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
=======
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.15),transparent_50%)]" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.15),transparent_50%)]" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" style={{ zIndex: 1 }} />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {/* Animated Hexagons */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/30 rotate-45"
          animate={{
            rotate: [45, 405];
            scale: [1, 1.1, 1];
            opacity: [0.3, 0.6, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [45, 405];
            scale: [1, 1.1, 1];
            opacity: [0.3, 0.6, 0.3]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 8,
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
          className="absolute top-40 right-32 w-24 h-24 border border-blue-500/30 rotate-45"
          animate={{
<<<<<<< HEAD
            rotate: [45, -315],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
=======
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-blue-500/30 rotate-45"
          animate={{
            rotate: [45, -315];
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [45, -315];
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          }}
        />

        <motion.div
<<<<<<< HEAD
          className='absolute top-40 right-32 w-24 h-24 border border-blue-500/30 rotate-45'
          animate={{
            rotate: [45, -315],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />

        <motion.div
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          className='absolute bottom-32 left-1/4 w-40 h-40 border border-cyan-500/30 rotate-45'
          animate={{
            rotate: [45, 405],
            scale: [1, 1.15, 1],
<<<<<<< HEAD
            opacity: [0.25, 0.55, 0.25],          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',          }}
=======
            opacity: [0.25, 0.55, 0.25],
=======
          className="absolute bottom-32 left-1/4 w-40 h-40 border border-cyan-500/30 rotate-45"
          animate={{
            rotate: [45, 405];
            scale: [1, 1.15, 1];
            opacity: [0.25, 0.55, 0.25]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute bottom-32 left-1/4 w-40 h-40 border border-cyan-500/30 rotate-45"
          animate={{
            rotate: [45, 405];
            scale: [1, 1.15, 1];
            opacity: [0.25, 0.55, 0.25]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        />

        {/* Floating Circles */}
        <motion.div
<<<<<<< HEAD
          className='absolute top-1/3 left-1/3 w-16 h-16 border border-purple-400/40 rounded-full'
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />

        <motion.div
          className='absolute top-2/3 right-1/4 w-20 h-20 border border-blue-400/40 rounded-full'
          animate={{
            y: [0, 25, 0],
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />

        <motion.div
          className='absolute bottom-1/3 right-1/3 w-12 h-12 border border-cyan-400/40 rounded-full'
          animate={{
            y: [0, -15, 0],
            opacity: [0.25, 0.55, 0.25],          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',          }}
=======
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute top-1/3 left-1/3 w-16 h-16 border border-purple-400/40 rounded-full'
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
=======
          className="absolute top-1/3 left-1/3 w-16 h-16 border border-purple-400/40 rounded-full"
          animate={{
            y: [0, -20, 0];
            opacity: [0.3, 0.6, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute top-1/3 left-1/3 w-16 h-16 border border-purple-400/40 rounded-full"
          animate={{
            y: [0, -20, 0];
            opacity: [0.3, 0.6, 0.3]
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />

        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute top-2/3 right-1/4 w-20 h-20 border border-blue-400/40 rounded-full'
          animate={{
            y: [0, 25, 0],
            opacity: [0.2, 0.5, 0.2],
=======
          className="absolute top-2/3 right-1/4 w-20 h-20 border border-blue-400/40 rounded-full"
          animate={{
            y: [0, 25, 0];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute top-2/3 right-1/4 w-20 h-20 border border-blue-400/40 rounded-full"
          animate={{
            y: [0, 25, 0];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />

        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute bottom-1/3 right-1/3 w-12 h-12 border border-cyan-400/40 rounded-full'
          animate={{
            y: [0, -15, 0],
            opacity: [0.25, 0.55, 0.25],
=======
          className="absolute bottom-1/3 right-1/3 w-12 h-12 border border-cyan-400/40 rounded-full"
          animate={{
            y: [0, -15, 0];
            opacity: [0.25, 0.55, 0.25]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute bottom-1/3 right-1/3 w-12 h-12 border border-cyan-400/40 rounded-full"
          animate={{
            y: [0, -15, 0];
            opacity: [0.25, 0.55, 0.25]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        />
      </div>

      {/* Energy Waves */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div
        className='absolute inset-0 pointer-events-none'
        style={{ zIndex: 3 }}
      >
<<<<<<< HEAD
=======
=======
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <motion.div
          className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent'
          animate={{
<<<<<<< HEAD
            y: [0, 1000],
            opacity: [0, 1, 0],          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
=======
<<<<<<< HEAD
            y: [0, 1000],
            opacity: [0, 1, 0],
=======
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          animate={{
            y: [0, 1000];
            opacity: [0, 1, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            y: [0, 1000];
            opacity: [0, 1, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 4,
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
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
<<<<<<< HEAD
            y: [0, 1000],
            opacity: [0, 1, 0],
=======
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            y: [0, 1000];
            opacity: [0, 1, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            y: [0, 1000];
            opacity: [0, 1, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
            delay: 2,
=======
            ease: "linear",
            delay: 2
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "linear",
            delay: 2
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          }}
        />

        <motion.div
<<<<<<< HEAD
          className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent'
          animate={{
            y: [0, 1000],
            opacity: [0, 1, 0],          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
            delay: 2,          }}
        />

        <motion.div
          className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent'
          animate={{
            y: [0, 1000],
            opacity: [0, 1, 0],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
            delay: 4,          }}
=======
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent'
          animate={{
            y: [0, 1000],
            opacity: [0, 1, 0],
=======
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{
            y: [0, 1000];
            opacity: [0, 1, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{
            y: [0, 1000];
            opacity: [0, 1, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
            delay: 4,
=======
            ease: "linear",
            delay: 4
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "linear",
            delay: 4
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        />
      </div>

      {/* Quantum Particles */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div
        className='absolute inset-0 pointer-events-none'
        style={{ zIndex: 4 }}
      >
<<<<<<< HEAD
=======
=======
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 4 }}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-purple-400 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
<<<<<<< HEAD
              scale: [0, 1, 0],
              opacity: [0, 1, 0],            }}
=======
<<<<<<< HEAD
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
=======
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 4 }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [0, 1, 0];
              opacity: [0, 1, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              scale: [0, 1, 0];
              opacity: [0, 1, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
<<<<<<< HEAD
              ease: 'easeInOut',            }}
=======
<<<<<<< HEAD
<<<<<<< HEAD
              ease: 'easeInOut',
=======
              ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          />
        ))}
      </div>

      {/* Content */}
<<<<<<< HEAD
      <div className='relative' style={{ zIndex: 10 }}>        {children}
      </div>

      {/* Bottom Glow */}
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='relative' style={{ zIndex: 10 }}>
=======
      <div className="relative" style={{ zIndex: 10 }}>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="relative" style={{ zIndex: 10 }}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {children}
      </div>

      {/* Bottom Glow */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div
        className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none'
        style={{ zIndex: 5 }}
      />
    </div>
<<<<<<< HEAD
  );
=======
  );
=======
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" style={{ zIndex: 5 }} />
    </div>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" style={{ zIndex: 5 }} />
    </div>
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
