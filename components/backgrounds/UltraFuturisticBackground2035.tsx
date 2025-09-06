import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function UltraFuturisticBackground2035() {
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
      color: string
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
<<<<<<< HEAD
<<<<<<< HEAD
      const particleCount = prefersReducedMotion
        ? 12
        : isSmallScreen
          ? 40
          : 100;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: (Math.random() * canvas.width) / (window.devicePixelRatio || 1),
          y: (Math.random() * canvas.height) / (window.devicePixelRatio || 1),
=======
      const particleCount = prefersReducedMotion ? 12 : (isSmallScreen ? 40 : 100);
      for (let i = 0, i < particleCount, i++) {
        particles.push({
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      const particleCount = prefersReducedMotion ? 12 : (isSmallScreen ? 40 : 100);
      for (let i = 0, i < particleCount, i++) {
        particles.push({
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8,
          opacity: Math.random() * 0.35 + 0.08,
<<<<<<< HEAD
<<<<<<< HEAD
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][
            Math.floor(Math.random() * 4)
          ],
        });
=======
          color: ['#8b5cf6#06b6d4#ec4899#10b981'][Math.floor(Math.random() * 4)]
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          color: ['#8b5cf6#06b6d4#ec4899#10b981'][Math.floor(Math.random() * 4)]
        })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    };

    // Update and draw particles
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
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

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
<<<<<<< HEAD
<<<<<<< HEAD
        const maxDistance = prefersReducedMotion
          ? 0
          : window.innerWidth < 768
            ? 90
            : 140;
=======
        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 90 : 140);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 90 : 140);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        if (maxDistance > 0) {
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex) {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < maxDistance) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = particle.color;
<<<<<<< HEAD
<<<<<<< HEAD
                ctx.globalAlpha =
                  ((maxDistance - distance) / maxDistance) * 0.08;
=======
                ctx.globalAlpha = (maxDistance - distance) / maxDistance * 0.08;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                ctx.lineWidth = 1;
                ctx.stroke()
              }
            }
<<<<<<< HEAD
          });
=======
                ctx.globalAlpha = (maxDistance - distance) / maxDistance * 0.08;
                ctx.lineWidth = 1;
                ctx.stroke()
              }
            }
          })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          })
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

    initParticles();
    updateParticles();

    const handleResize = () => {
      canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
      canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
      if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
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
      {/* Fixed Background Canvas */}
      <canvas
        ref={canvasRef}
<<<<<<< HEAD
<<<<<<< HEAD
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)',
        }}
=======
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)' }}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full"
          animate={{
<<<<<<< HEAD
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
            opacity: [0.22, 0.45, 0.22],
=======
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)' }}
      />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full"
          animate={{
            scale: [1, 1.15, 1];
            rotate: [0, 180, 360];
            opacity: [0.22, 0.45, 0.22]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            scale: [1, 1.15, 1];
            rotate: [0, 180, 360];
            opacity: [0.22, 0.45, 0.22]
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
          className="absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45"
          animate={{
<<<<<<< HEAD
            scale: [1, 1.3, 1],
            rotate: [45, 225, 405],
            opacity: [0.2, 0.5, 0.2],
=======
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45"
          animate={{
            scale: [1, 1.3, 1];
            rotate: [45, 225, 405];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            scale: [1, 1.3, 1];
            rotate: [45, 225, 405];
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
          }}
        />

        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full'
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -20, 0],
            opacity: [0.4, 0.7, 0.4],
=======
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full"
          animate={{
            scale: [1, 1.4, 1];
            y: [0, -20, 0];
            opacity: [0.4, 0.7, 0.4]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full"
          animate={{
            scale: [1, 1.4, 1];
            y: [0, -20, 0];
            opacity: [0.4, 0.7, 0.4]
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
        />

        {/* Neon Glow Effects */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />
=======
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px);
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
<<<<<<< HEAD
            `,
              backgroundSize: '50px 50px',
            }}
          />
=======
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px);
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
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

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
<<<<<<< HEAD
<<<<<<< HEAD
            className='absolute w-1 h-1 bg-purple-400 rounded-full'
=======
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
<<<<<<< HEAD
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
=======
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              y: [0, -30, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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
        ))}

        {/* Energy Waves */}
        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
=======
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0];
            opacity: [0, 1, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0];
            opacity: [0, 1, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 4,
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
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
=======
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0];
            opacity: [0, 1, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0];
            opacity: [0, 1, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
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

        {/* Quantum Dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`quantum-${i}`}
<<<<<<< HEAD
<<<<<<< HEAD
            className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'
=======
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
<<<<<<< HEAD
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 360],
=======
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [0, 1, 0];
              opacity: [0, 0.8, 0];
              rotate: [0, 360]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              scale: [0, 1, 0];
              opacity: [0, 0.8, 0];
              rotate: [0, 360]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
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
        ))}

        {/* Neural Network Connections */}
<<<<<<< HEAD
<<<<<<< HEAD
        <svg className='absolute inset-0 w-full h-full opacity-20'>
=======
        <svg className="absolute inset-0 w-full h-full opacity-20">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={`neural-${i}`}
              cx={`${20 + (i * 10)}%`}
              cy={`${30 + (i * 5)}%`}
              r="3"
              fill="url(#neuralGradient)"
              animate={{
<<<<<<< HEAD
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3],
=======
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={`neural-${i}`}
              cx={`${20 + (i * 10)}%`}
              cy={`${30 + (i * 5)}%`}
              r="3"
              fill="url(#neuralGradient)"
              animate={{
                r: [3, 6, 3];
                opacity: [0.3, 0.8, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                r: [3, 6, 3];
                opacity: [0.3, 0.8, 0.3]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
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
          ))}
        </svg>

        {/* Holographic Effects */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='absolute inset-0'>
=======
        <div className="absolute inset-0">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full"
            animate={{
<<<<<<< HEAD
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.1, 0.3, 0.1],
=======
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1]
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
          />
          
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full"
            animate={{
<<<<<<< HEAD
              scale: [1, 1.2, 1],
              rotate: [360, 270, 180, 90, 0],
              opacity: [0.1, 0.4, 0.1],
=======
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1];
              rotate: [360, 270, 180, 90, 0];
              opacity: [0.1, 0.4, 0.1]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              scale: [1, 1.2, 1];
              rotate: [360, 270, 180, 90, 0];
              opacity: [0.1, 0.4, 0.1]
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
          />
        </div>

        {/* Data Streams */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='absolute right-0 top-0 w-32 h-full opacity-30'>
=======
        <div className="absolute right-0 top-0 w-32 h-full opacity-30">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent"
              style={{
                right: `${Math.random() * 32}px`,
                top: `${i * 5}%`
              }}
              animate={{
<<<<<<< HEAD
                height: [8, 32, 8],
                opacity: [0.3, 1, 0.3],
=======
        <div className="absolute right-0 top-0 w-32 h-full opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent"
              style={{
                right: `${Math.random() * 32}px`,
                top: `${i * 5}%`
              }}
              animate={{
                height: [8, 32, 8];
                opacity: [0.3, 1, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                height: [8, 32, 8];
                opacity: [0.3, 1, 0.3]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
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
          ))}
        </div>
      </div>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
