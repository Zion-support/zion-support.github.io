<<<<<<< HEAD
"use client";
import React{ useEffectuseRef } from 'react';
=======
import React, { useEffect, useRef } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import { motion } from 'framer-motion';

const UltraFuturisticBackground2029: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      life: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
<<<<<<< HEAD
        color: ['#00ffff'#ff00ff'#ffff00'#00ff00'#ff0080'][Math.floor(Math.random() * 5)],
=======
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][Math.floor(Math.random() * 5)],
>>>>>>> origin/auto/autonomy-17186719616
        opacity: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50
      });
    }

    const animate = () => {
<<<<<<< HEAD
      ctx.clearRect(0canvas.widthcanvas.height);

      // Update and draw particles
      particles.forEach((particleindex) => {
=======
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
>>>>>>> origin/auto/autonomy-17186719616
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        if (particle.life <= 0) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
<<<<<<< HEAD
            color: ['#00ffff'#ff00ff'#ffff00'#00ff00'#ff0080'][Math.floor(Math.random() * 5)],
=======
            color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][Math.floor(Math.random() * 5)],
>>>>>>> origin/auto/autonomy-17186719616
            opacity: Math.random() * 0.8 + 0.2,
            life: Math.random() * 100 + 50
          };
        }

<<<<<<< HEAD

=======
>>>>>>> origin/auto/autonomy-17186719616
        // Draw particle with glow effect
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        
        // Outer glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.beginPath();
<<<<<<< HEAD
        ctx.arc(particle.xparticle.yparticle.size * 20Math.PI * 2);
=======
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
>>>>>>> origin/auto/autonomy-17186719616
        ctx.fill();

        // Inner particle
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 10;
        ctx.beginPath();
<<<<<<< HEAD
        ctx.arc(particle.xparticle.yparticle.size0Math.PI * 2);
=======
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
>>>>>>> origin/auto/autonomy-17186719616
        ctx.fill();
        ctx.restore();
      });

      // Draw connecting lines between nearby particles
<<<<<<< HEAD
      ctx.strokeStyle = 'rgba(02550.1)';
=======
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
>>>>>>> origin/auto/autonomy-17186719616
      ctx.lineWidth = 0.5;
      ctx.globalCompositeOperation = 'screen';

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.beginPath();
<<<<<<< HEAD
            ctx.moveTo(particles[i].xparticles[i].y);
            ctx.lineTo(particles[j].xparticles[j].y);
=======
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
>>>>>>> origin/auto/autonomy-17186719616
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

<<<<<<< HEAD
    window.addEventListener(', 'resize', 'handleResize);

    return () => {
      window.removeEventListener(', 'resize', 'handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }[]);
=======
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
<<<<<<< HEAD
              'radial-gradient(circle at 20% 80%rgba(12011980.3) 0%transparent 50%)',
              'radial-gradient(circle at 80% 20%rgba(12011980.3) 0%transparent 50%)',
              'radial-gradient(circle at 40% 40%rgba(12011980.3) 0%transparent 50%)',
              'radial-gradient(circle at 20% 80%rgba(12011980.3) 0%transparent 50%)'
=======
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
>>>>>>> origin/auto/autonomy-17186719616
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
        animate={{
<<<<<<< HEAD
          rotate: [0360],
          scale: [1.1],
          opacity: [0.30.60.3]
=======
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
>>>>>>> origin/auto/autonomy-17186719616
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
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
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45"
        animate={{
<<<<<<< HEAD
          rotate: [45405],
          scale: [1.21]
=======
          rotate: [45, 405],
          scale: [1, 1.2, 1]
>>>>>>> origin/auto/autonomy-17186719616
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
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
            backgroundPosition: ['0px 0px'50px 50px']
=======
            backgroundPosition: ['0px 0px', '50px 50px']
>>>>>>> origin/auto/autonomy-17186719616
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Quantum energy waves */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
<<<<<<< HEAD
            background: 'radial-gradient(ellipse at centergba(02550.1) 0%transparent 70%)'
          }}
          animate={{
            scale: [1.51],
            opacity: [0.10.30.1]
=======
            background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
>>>>>>> origin/auto/autonomy-17186719616
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Holographic elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full"
        animate={{
<<<<<<< HEAD
          rotate: [0360],
          scale: [1.21],
          opacity: [0.10.30.1]
=======
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
>>>>>>> origin/auto/autonomy-17186719616
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full"
        animate={{
<<<<<<< HEAD
          rotate: [360],
          scale: [1.21.2],
          opacity: [0.20.40.2]
=======
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
>>>>>>> origin/auto/autonomy-17186719616
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Neural network connections */}
      <div className="absolute inset-0">
<<<<<<< HEAD
        {Array.from({ length: 8 }).map((_i) => (
=======
        {Array.from({ length: 8 }).map((_, i) => (
>>>>>>> origin/auto/autonomy-17186719616
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`
            }}
            animate={{
<<<<<<< HEAD
              scale: [010],
              opacity: [010]
=======
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
>>>>>>> origin/auto/autonomy-17186719616
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Data streams */}
      <div className="absolute inset-0 overflow-hidden">
<<<<<<< HEAD
        {Array.from({ length: 5 }).map((_i) => (
=======
        {Array.from({ length: 5 }).map((_, i) => (
>>>>>>> origin/auto/autonomy-17186719616
          <motion.div
            key={i}
            className="absolute w-0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent"
            style={{
              left: `${15 + (i * 15)}%`,
              top: '-20px'
            }}
            animate={{
<<<<<<< HEAD
              y: [0window.innerHeight + 20]
=======
              y: [0, window.innerHeight + 20]
>>>>>>> origin/auto/autonomy-17186719616
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2029;