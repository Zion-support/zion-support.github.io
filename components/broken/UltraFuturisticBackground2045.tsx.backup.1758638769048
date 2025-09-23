<<<<<<< HEAD
"use client";
import React{ useEffectuseRef } from 'react';
=======
import React, { useEffect, useRef } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2045Props {
  children: React.ReactNode;
}

const UltraFuturisticBackground2045: React.FC<UltraFuturisticBackground2045Props> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
    }> = [];

    // Create initial particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
<<<<<<< HEAD
        color: `hsl(${Math.random() * 360}70%60%)`,
=======
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
>>>>>>> origin/auto/autonomy-17186719616
        alpha: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50
      });
    }

    // Animation loop
<<<<<<< HEAD



    const animate = () => {
      ctx.clearRect(0canvas.widthcanvas.height);

      // Update and draw particles
      particles.forEach((particleindex) => {
=======
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
>>>>>>> origin/auto/autonomy-17186719616
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
<<<<<<< HEAD
        ctx.arc(particle.xparticle.yparticle.size0Math.PI * 2);
=======
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
>>>>>>> origin/auto/autonomy-17186719616
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.restore();

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
<<<<<<< HEAD
            color: `hsl(${Math.random() * 360}70%60%)`,
=======
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
>>>>>>> origin/auto/autonomy-17186719616
            alpha: Math.random() * 0.8 + 0.2,
            life: Math.random() * 100 + 50
          };
        }
      });

      // Draw connecting lines between nearby particles
<<<<<<< HEAD
      particles.forEach((particle1i) => {
=======
      particles.forEach((particle1, i) => {
>>>>>>> origin/auto/autonomy-17186719616
        particles.slice(i + 1).forEach((particle2) => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.save();
            ctx.globalAlpha = (150 - distance) / 150 * 0.3;
            ctx.strokeStyle = '#00ffff';
            ctx.lineWidth = 1;
            ctx.beginPath();
<<<<<<< HEAD
            ctx.moveTo(particle1.xparticle1.y);
            ctx.lineTo(particle2.xparticle2.y);
=======
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
>>>>>>> origin/auto/autonomy-17186719616
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

<<<<<<< HEAD
    window.addEventListener(', 'resize', 'handleResize);
=======
    window.addEventListener('resize', handleResize);
>>>>>>> origin/auto/autonomy-17186719616

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
<<<<<<< HEAD
      window.removeEventListener(', 'resize', 'handleResize);
    };
  }[]);
=======
      window.removeEventListener('resize', handleResize);
    };
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
<<<<<<< HEAD
        style={{ background: 'radial-gradient(ellipse at center#0a0a0a 0%#000000 100%)' }}
=======
        style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)' }}
>>>>>>> origin/auto/autonomy-17186719616
      />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
<<<<<<< HEAD
              linear-gradient(rgba(02550.1) 1pxtransparent 1px),
              linear-gradient(90degrgba(02550.1) 1pxtransparent 1px)
=======
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
>>>>>>> origin/auto/autonomy-17186719616
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
<<<<<<< HEAD
            backgroundPosition: ['0px 0px'50px 50px']}}
=======
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
>>>>>>> origin/auto/autonomy-17186719616
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        {/* Floating Neon Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
          animate={{
<<<<<<< HEAD
            rotate: [0360],
            scale: [1.1],
            opacity: [0.30.60.3]}}
=======
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
>>>>>>> origin/auto/autonomy-17186719616
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
          animate={{
<<<<<<< HEAD
            rotate: [360],
            scale: [1.21],
            opacity: [0.30.70.3]}}
=======
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
>>>>>>> origin/auto/autonomy-17186719616
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/30 transform rotate-45"
          animate={{
<<<<<<< HEAD
            rotate: [45405],
            scale: [1.151],
            opacity: [0.30.50.3]}}
          transition={{

=======
            rotate: [45, 405],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
>>>>>>> origin/auto/autonomy-17186719616
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 rounded-full"
          animate={{
<<<<<<< HEAD
            y: [0-20],
            opacity: [0.20.50.2]}}
=======
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
>>>>>>> origin/auto/autonomy-17186719616
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 transform rotate-12"
          animate={{
<<<<<<< HEAD
            rotate: [12372],
            scale: [1.1]}}
=======
            rotate: [12, 372],
            scale: [1, 1.1, 1],
          }}
>>>>>>> origin/auto/autonomy-17186719616
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

        {/* Energy Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50"
          animate={{
<<<<<<< HEAD
            scale: [1.51],
            opacity: [0.510.5],
            y: [0-10]}}
=======
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
            y: [0, -10, 0],
          }}
>>>>>>> origin/auto/autonomy-17186719616
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-400/50"
          animate={{
<<<<<<< HEAD
            scale: [1.81],
            opacity: [0.40.90.4],
            x: [0150]}}
=======
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.9, 0.4],
            x: [0, 15, 0],
          }}
>>>>>>> origin/auto/autonomy-17186719616
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/5 via-transparent to-blue-900/5" />
      </div>

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>

      {/* Animated Border Effects */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <motion.div
          className="absolute inset-0 border border-transparent"
          style={{
<<<<<<< HEAD
            background: 'linear-gradient(90degtransparentrgba(02550.1)transparent)',
            backgroundSize: '200% 100%'
          }}
          animate={{
            backgroundPosition: ['-200% 0'200% 0']}}
=======
            background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent)',
            backgroundSize: '200% 100%'
          }}
          animate={{
            backgroundPosition: ['-200% 0', '200% 0'],
          }}
>>>>>>> origin/auto/autonomy-17186719616
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2045;
