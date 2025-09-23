<<<<<<< HEAD
"use client";
import React{ useEffectuseRef } from 'react';
import { motion } from 'framer-motion';

export default function UltraFuturisticBackground2035() {
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2035Props {
  children: React.ReactNode;
}

export default function UltraFuturisticBackground2035({ children }: UltraFuturisticBackground2035Props) {
>>>>>>> origin/auto/autonomy-17186719616
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
    canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
    if (ctx) {
<<<<<<< HEAD
      ctx.scale(window.devicePixelRatio || 1);
=======
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
      const particleCount = prefersReducedMotion ? 12 : (isSmallScreen ? 40 : 100);
      for (let i = 0; i < particleCount; i++) {
        const type = [', 'quantum', 'hologram', 'neon', 'energy'][Math.floor(Math.random() * 4)] as any;
=======
      type: 'quantum' | 'hologram' | 'neon' | 'energy';
      life: number;
      maxLife: number;
    }> = [];

    // Initialize particles with enhanced types
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
      const particleCount = prefersReducedMotion ? 15 : (isSmallScreen ? 60 : 150);
      
      for (let i = 0; i < particleCount; i++) {
        const type = ['quantum', 'hologram', 'neon', 'energy'][Math.floor(Math.random() * 4)] as any;
>>>>>>> origin/auto/autonomy-17186719616
        const maxLife = Math.random() * 200 + 100;
        
        particles.push({
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
<<<<<<< HEAD
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8,
          opacity: Math.random() * 0.35 + 0.08,
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][Math.floor(Math.random() * 4)]
=======
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.6,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.6,
          size: Math.random() * (isSmallScreen ? 2 : 3) + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: getColorForType(type),
          type,
          life: maxLife,
          maxLife
>>>>>>> origin/auto/autonomy-17186719616
        });
      }
    };

    // Get color based on particle type
    const getColorForType = (type: string) => {
      switch (type) {
        case 'quantum':
<<<<<<< HEAD
          return ['#8b5cf6'#06b6d4'#ec4899'][Math.floor(Math.random() * 3)];
        case 'hologram':
          return ['#10b981'#f59e0b'#ef4444'][Math.floor(Math.random() * 3)];
        case 'neon':
          return ['#f97316'#eab308'#a855f7'][Math.floor(Math.random() * 3)];
        case 'energy':
          return ['#dc2626'#7c3aed'#059669'][Math.floor(Math.random() * 3)];
=======
          return ['#8b5cf6', '#06b6d4', '#ec4899'][Math.floor(Math.random() * 3)];
        case 'hologram':
          return ['#10b981', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 3)];
        case 'neon':
          return ['#f97316', '#eab308', '#a855f7'][Math.floor(Math.random() * 3)];
        case 'energy':
          return ['#dc2626', '#7c3aed', '#059669'][Math.floor(Math.random() * 3)];
>>>>>>> origin/auto/autonomy-17186719616
        default:
          return '#8b5cf6';
      }
    };

    // Update and draw particles with enhanced effects
    const updateParticles = () => {
<<<<<<< HEAD
      ctx.clearRect(0canvas.widthcanvas.height);

      particles.forEach((particleindex) => {
=======
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
>>>>>>> origin/auto/autonomy-17186719616
        // Update particle life
        particle.life--;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width / (window.devicePixelRatio || 1);
          particle.y = Math.random() * canvas.height / (window.devicePixelRatio || 1);
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.y = 0;

<<<<<<< HEAD
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw particle based on type
        drawParticle(ctxparticlecurrentOpacity);
=======
        // Calculate opacity based on life
        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * lifeRatio;

        // Draw particle based on type
        drawParticle(ctx, particle, currentOpacity);
>>>>>>> origin/auto/autonomy-17186719616

        // Draw connections with enhanced effects
        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 120 : 180);
        if (maxDistance > 0) {
<<<<<<< HEAD
          drawConnections(ctxparticlesindexmaxDistancecurrentOpacity);
=======
          drawConnections(ctx, particles, index, maxDistance, currentOpacity);
>>>>>>> origin/auto/autonomy-17186719616
        }
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(updateParticles);
      }
    };

    // Enhanced particle drawing with different types
<<<<<<< HEAD
    const drawParticle = (ctx: CanvasRenderingContext2Dparticle: anyopacity: number) => {
=======
    const drawParticle = (ctx: CanvasRenderingContext2D, particle: any, opacity: number) => {
>>>>>>> origin/auto/autonomy-17186719616
      ctx.save();
      ctx.globalAlpha = opacity;

      switch (particle.type) {
        case 'quantum':
<<<<<<< HEAD
          drawQuantumParticle(ctxparticle);
          break;
        case 'hologram':
          drawHologramParticle(ctxparticle);
          break;
        case 'neon':
          drawNeonParticle(ctxparticle);
          break;
        case 'energy':
          drawEnergyParticle(ctxparticle);
=======
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
>>>>>>> origin/auto/autonomy-17186719616
          break;
      }

      ctx.restore();
    };

    // Quantum particle with wave-like effects
<<<<<<< HEAD
    const drawQuantumParticle = (ctx: CanvasRenderingContext2Dparticle: any) => {
=======
    const drawQuantumParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
>>>>>>> origin/auto/autonomy-17186719616
      const time = Date.now() * 0.001;
      const wave = Math.sin(time + particle.x * 0.01) * 0.5;
      
      ctx.beginPath();
<<<<<<< HEAD
      ctx.arc(particle.xparticle.y + waveparticle.size0Math.PI * 2);
=======
      ctx.arc(particle.x, particle.y + wave, particle.size, 0, Math.PI * 2);
>>>>>>> origin/auto/autonomy-17186719616
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Add quantum glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
<<<<<<< HEAD
      ctx.arc(particle.xparticle.y + waveparticle.size * 0.50Math.PI * 2);
=======
      ctx.arc(particle.x, particle.y + wave, particle.size * 0.5, 0, Math.PI * 2);
>>>>>>> origin/auto/autonomy-17186719616
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    // Hologram particle with transparency and distortion
<<<<<<< HEAD
    const drawHologramParticle = (ctx: CanvasRenderingContext2Dparticle: any) => {
=======
    const drawHologramParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
>>>>>>> origin/auto/autonomy-17186719616
      const time = Date.now() * 0.002;
      const distortion = Math.sin(time + particle.y * 0.02) * 2;
      
      ctx.globalAlpha *= 0.7;
      ctx.beginPath();
<<<<<<< HEAD
      ctx.arc(particle.x + distortionparticle.yparticle.size0Math.PI * 2);
=======
      ctx.arc(particle.x + distortion, particle.y, particle.size, 0, Math.PI * 2);
>>>>>>> origin/auto/autonomy-17186719616
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Add holographic effect
      ctx.globalAlpha *= 0.5;
      ctx.beginPath();
<<<<<<< HEAD
      ctx.arc(particle.x + distortionparticle.yparticle.size * 1.50Math.PI * 2);
=======
      ctx.arc(particle.x + distortion, particle.y, particle.size * 1.5, 0, Math.PI * 2);
>>>>>>> origin/auto/autonomy-17186719616
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    // Neon particle with bright glow
<<<<<<< HEAD
    const drawNeonParticle = (ctx: CanvasRenderingContext2Dparticle: any) => {
      // Bright core
      ctx.beginPath();
      ctx.arc(particle.xparticle.yparticle.size0Math.PI * 2);
=======
    const drawNeonParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      // Bright core
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
>>>>>>> origin/auto/autonomy-17186719616
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      // Neon glow
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 15;
      ctx.beginPath();
<<<<<<< HEAD
      ctx.arc(particle.xparticle.yparticle.size * 0.80Math.PI * 2);
=======
      ctx.arc(particle.x, particle.y, particle.size * 0.8, 0, Math.PI * 2);
>>>>>>> origin/auto/autonomy-17186719616
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    // Energy particle with pulsing effect
<<<<<<< HEAD
    const drawEnergyParticle = (ctx: CanvasRenderingContext2Dparticle: any) => {
=======
    const drawEnergyParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
>>>>>>> origin/auto/autonomy-17186719616
      const time = Date.now() * 0.003;
      const pulse = Math.sin(time) * 0.3 + 0.7;
      const size = particle.size * pulse;
      
      ctx.beginPath();
<<<<<<< HEAD
      ctx.arc(particle.xparticle.ysize0Math.PI * 2);
=======
      ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
>>>>>>> origin/auto/autonomy-17186719616
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Energy field effect
      ctx.globalAlpha *= 0.3;
      ctx.beginPath();
<<<<<<< HEAD
      ctx.arc(particle.xparticle.ysize * 20Math.PI * 2);
=======
      ctx.arc(particle.x, particle.y, size * 2, 0, Math.PI * 2);
>>>>>>> origin/auto/autonomy-17186719616
      ctx.fillStyle = particle.color;
      ctx.fill();
    };

    // Enhanced connection drawing with different effects
<<<<<<< HEAD
    const drawConnections = (ctx: CanvasRenderingContext2Dparticles: any[]currentIndex: numbermaxDistance: numberopacity: number) => {
      particles.forEach((otherParticleotherIndex) => {
=======
    const drawConnections = (ctx: CanvasRenderingContext2D, particles: any[], currentIndex: number, maxDistance: number, opacity: number) => {
      particles.forEach((otherParticle, otherIndex) => {
>>>>>>> origin/auto/autonomy-17186719616
        if (currentIndex !== otherIndex) {
          const dx = particles[currentIndex].x - otherParticle.x;
          const dy = particles[currentIndex].y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const connectionOpacity = (maxDistance - distance) / maxDistance * 0.15 * opacity;
            
            // Different connection styles based on particle types
            if (particles[currentIndex].type === otherParticle.type) {
              // Same type - stronger connection
              ctx.globalAlpha = connectionOpacity * 1.5;
              ctx.strokeStyle = particles[currentIndex].color;
              ctx.lineWidth = 2;
            } else {
              // Different types - weaker connection
              ctx.globalAlpha = connectionOpacity * 0.7;
              ctx.strokeStyle = '#ffffff';
              ctx.lineWidth = 1;
            }

            ctx.beginPath();
<<<<<<< HEAD
            ctx.moveTo(particles[currentIndex].xparticles[currentIndex].y);
            ctx.lineTo(otherParticle.xotherParticle.y);
=======
            ctx.moveTo(particles[currentIndex].x, particles[currentIndex].y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
>>>>>>> origin/auto/autonomy-17186719616
            ctx.stroke();
          }
        }
      });
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
      canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
      if (ctx) {
<<<<<<< HEAD
        ctx.scale(window.devicePixelRatio || 1);
=======
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
>>>>>>> origin/auto/autonomy-17186719616
      }
      initParticles();
    };

<<<<<<< HEAD
    window.addEventListener(', 'resize', 'handleResize);
=======
    window.addEventListener('resize', handleResize);
>>>>>>> origin/auto/autonomy-17186719616
    initParticles();
    updateParticles();

    return () => {
<<<<<<< HEAD
      window.removeEventListener(', 'resize', 'handleResize);
=======
      window.removeEventListener('resize', handleResize);
>>>>>>> origin/auto/autonomy-17186719616
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
<<<<<<< HEAD
  }[]);

  return (
    <>
      {/* Fixed Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)' }}
      />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%rgba(1392460.3) 0%transparent 50%)',
              'radial-gradient(circle at 80% 20%rgba(6182120.3) 0%transparent 50%)',
              'radial-gradient(circle at 40% 40%rgba(236721530.3) 0%transparent 50%)',
              'radial-gradient(circle at 20% 80%rgba(1392460.3) 0%transparent 50%)'
=======
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Enhanced background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)'
>>>>>>> origin/auto/autonomy-17186719616
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, 225, 405],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -20, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Neon Glow Effects */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(1392460.1) 1pxtransparent 1px),
              linear-gradient(90degrgba(1392460.1) 1pxtransparent 1px)
=======
            ease: 'easeInOut'
          }}
        />
        
        {/* Holographic grid effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
>>>>>>> origin/auto/autonomy-17186719616
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Canvas for animated particles */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ filter: 'blur(0.5px)' }}
        />

<<<<<<< HEAD

=======
>>>>>>> origin/auto/autonomy-17186719616
        {/* Floating neon orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"
          animate={{
<<<<<<< HEAD
            scale: [1.21],
            opacity: [0.20.40.2],
            rotate: [0180360]
=======
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
>>>>>>> origin/auto/autonomy-17186719616
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20"
          animate={{
<<<<<<< HEAD
            scale: [1.31],
            opacity: [0.20.50.2],
            rotate: [360180]
=======
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0]
>>>>>>> origin/auto/autonomy-17186719616
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Quantum energy waves */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
<<<<<<< HEAD
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [-100-100],
              opacity: [0.30]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Energy Waves */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
        />

        {/* Quantum Dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`quantum-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [100-100],
              opacity: [0.30]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Neural Network Connections */}
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
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>

        {/* Holographic Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 270, 180, 90, 0],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Data Streams */}
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
                height: [8, 32, 8],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
=======
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{
              y: [-100, 100, -100],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            animate={{
              y: [100, -100, 100],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      </div>
      
      {/* Render children */}
      {children}
>>>>>>> origin/auto/autonomy-17186719616
    </>
  );
}