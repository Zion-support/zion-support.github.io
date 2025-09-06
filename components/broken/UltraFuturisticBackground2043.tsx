import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
const UltraFuturisticBackground2043: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
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

    // Particle system
    const particles: Array<{
<<<<<<< HEAD
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
      maxLife: number;
=======
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      opacity: number,
      color: string,
      life: number,
      maxLife: number
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }> = [];

    // Create particles
    const createParticle = () => {
      const colors = [
<<<<<<< HEAD
        'rgba(0, 255, 255, 0.8)', // Cyan
        'rgba(138, 43, 226, 0.8)', // Blue violet
        'rgba(255, 20, 147, 0.8)', // Deep pink
        'rgba(0, 255, 127, 0.8)', // Spring green
        'rgba(255, 215, 0, 0.8)', // Gold
=======
        'rgba(0, 255, 255, 0.8)',   // Cyan
        'rgba(138, 43, 226, 0.8)',  // Blue violet
        'rgba(255, 20, 147, 0.8)',  // Deep pink
        'rgba(0, 255, 127, 0.8)',   // Spring green
        'rgba(255, 215, 0, 0.8)',   // Gold
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      ];

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100 + 50,
<<<<<<< HEAD
        maxLife: Math.random() * 100 + 50,
      };
    };

    // Initialize particles
    for (let i = 0; i < 100; i++) {
=======
        maxLife: Math.random() * 100 + 50}
    };

    // Initialize particles
    for (let i = 0, i < 100, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      particles.push(createParticle());
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Update life
        particle.life--;
        if (particle.life <= 0) {
<<<<<<< HEAD
          particles[index] = createParticle();
=======
          particles[index] = createParticle()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
<<<<<<< HEAD
        ctx.restore();
=======
        ctx.restore()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.globalAlpha = ((100 - distance) / 100) * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
=======
      
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }
        }
      }

<<<<<<< HEAD
      requestAnimationFrame(animate);
=======
      requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    };

    animate();

    return () => {
<<<<<<< HEAD
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
        }}
      />

      {/* Enhanced floating orbs */}
      <div className='absolute inset-0'>
        {/* Primary orb */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
=======
      window.removeEventListener('resize', resizeCanvas)
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Enhanced floating orbs */}
      <div className="absolute inset-0">
        {/* Primary orb */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
        />

        {/* Secondary orb */}
        <motion.div
<<<<<<< HEAD
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
=======
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.4, 0.7, 0.4]}}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
        />

        {/* Tertiary orb */}
        <motion.div
<<<<<<< HEAD
          className='absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
=======
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2]}}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
        />

        {/* Additional orbs */}
        <motion.div
<<<<<<< HEAD
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
=======
          className="absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
        />

        <motion.div
<<<<<<< HEAD
          className='absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
=======
          className="absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1];
            opacity: [0.4, 0.7, 0.4]}}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
        />
      </div>

      {/* Enhanced grid pattern */}
<<<<<<< HEAD
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
=======
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
        />
      </div>

      {/* Floating geometric shapes */}
<<<<<<< HEAD
      <div className='absolute inset-0'>
        {/* Triangle */}
        <motion.div
          className='absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45'
          animate={{
            rotate: [45, 405],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
=======
      <div className="absolute inset-0">
        {/* Triangle */}
        <motion.div
          className="absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45"
          animate={{
            rotate: [45, 405];
            opacity: [0.2, 0.6, 0.2]}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
        />

        {/* Square */}
        <motion.div
<<<<<<< HEAD
          className='absolute bottom-1/6 left-1/6 w-24 h-24 border border-purple-500/20'
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
=======
          className="absolute bottom-1/6 left-1/6 w-24 h-24 border border-purple-500/20"
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1]}}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
        />

        {/* Circle */}
        <motion.div
<<<<<<< HEAD
          className='absolute top-1/2 right-1/4 w-20 h-20 border border-emerald-500/20 rounded-full'
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
=======
          className="absolute top-1/2 right-1/4 w-20 h-20 border border-emerald-500/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1];
            opacity: [0.3, 0.8, 0.3]}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
        />
      </div>

      {/* Energy waves */}
<<<<<<< HEAD
      <div className='absolute inset-0'>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute inset-0 border border-cyan-500/10 rounded-full'
            animate={{
              scale: [1, 1.5, 2, 2.5],
              opacity: [0.3, 0.2, 0.1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeOut',
              delay: i * 2,
=======
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-cyan-500/10 rounded-full"
            animate={{
              scale: [1, 1.5, 2, 2.5];
              opacity: [0.3, 0.2, 0.1, 0]}}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 2
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            }}
          />
        ))}
      </div>

      {/* Quantum particles */}
<<<<<<< HEAD
      <div className='absolute inset-0'>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-cyan-400/60 rounded-full'
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
=======
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100];
              y: [0, Math.random() * 200 - 100];
              opacity: [0, 1, 0];
              scale: [0, 1, 0]}}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
<<<<<<< HEAD
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
=======
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`}}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          />
        ))}
      </div>

      {/* Consciousness energy field */}
<<<<<<< HEAD
      <div className='absolute inset-0'>
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5'
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
=======
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5"
          animate={{
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
        />
      </div>
    </div>
<<<<<<< HEAD
  );
};
=======
  )
};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
export default UltraFuturisticBackground2043;
