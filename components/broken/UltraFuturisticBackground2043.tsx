import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const UltraFuturisticBackground2043: React.FC;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
      canvas.height = window.innerHeight;      canvas.height = window.innerHeight
    }
=======
      canvas.height = window.innerHeight;
    };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
<<<<<<< HEAD
      maxLife: number;    }> = [];      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      life: number
      maxLife: number
=======
      maxLife: number;
    }> = [];

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    // Create particles
    const createParticle = () => {
      const colors = [
        'rgba(0, 255, 255, 0.8)', // Cyan
        'rgba(138, 43, 226, 0.8)', // Blue violet
        'rgba(255, 20, 147, 0.8)', // Deep pink
        'rgba(0, 255, 127, 0.8)', // Spring green
<<<<<<< HEAD
        'rgba(255, 215, 0, 0.8)', // Gold      ];        'rgba(0, 255, 255, 0.8)',   // Cyan
        'rgba(138, 43, 226, 0.8)',  // Blue violet
        'rgba(255, 20, 147, 0.8)',  // Deep pink
        'rgba(0, 255, 127, 0.8)',   // Spring green
        'rgba(255, 215, 0, 0.8)',   // Gold
      return {
        x: Math.random() * canvas.width
        y: Math.random() * canvas.height
        vx: (Math.random() - 0.5) * 2
        vy: (Math.random() - 0.5) * 2
        size: Math.random() * 3 + 1
        opacity: Math.random() * 0.5 + 0.3
        color: colors[Math.floor(Math.random() * colors.length)]
        life: Math.random() * 100 + 50
        maxLife: Math.random() * 100 + 50
      }
    }
    // Initialize particles
    for (let i = 0; i < 100; i++) {      particles.push(createParticle());        maxLife: Math.random() * 100 + 50}
    }
    // Initialize particles
    for (let i = 0, i < 100, i++) {
=======
        'rgba(255, 215, 0, 0.8)', // Gold
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
        maxLife: Math.random() * 100 + 50,
      };
    };

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(createParticle());
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
        if (particle.x <= 0 |particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 |particle.y >= canvas.height) particle.vy *= -1;
        // Update life
        particle.life--;
        if (particle.life <= 0) {
<<<<<<< HEAD
          particles[index] = createParticle();        }          particles[index] = createParticle()
=======
          particles[index] = createParticle();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        }
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
<<<<<<< HEAD
        ctx.restore();      });        ctx.restore()
=======
        ctx.restore();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
            ctx.stroke();          }
        }
      }
      requestAnimationFrame(animate);    };          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke()
          }
        }
      }
      requestAnimationFrame(animate);      requestAnimationFrame(animate)
    }
=======
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    }
  }, []);
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      {/* Enhanced floating orbs */}
      <div className='absolute inset-0'>
        {/* Primary orb */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl'
          animate={{
<<<<<<< HEAD
            scale: [1, 1.2, 1]
            opacity: [0.3, 0.6, 0.3],  }, []);
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
            duration: 8
            repeat: Infinity
            ease: "easeInOut"
          }}
          transition={{
<<<<<<< HEAD
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
=======
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Secondary orb */}
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2]
            opacity: [0.4, 0.7, 0.4],          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.4, 0.7, 0.4]}}
          transition={{
<<<<<<< HEAD
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,            ease: "easeInOut"
            delay: 2
=======
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,          }}
        />
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Tertiary orb */}
        <motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.3, 1]
            opacity: [0.2, 0.5, 0.2],          animate={{
            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2]}}
          transition={{
<<<<<<< HEAD
            duration: 12
            repeat: Infinity
            ease: 'easeInOut'
            delay: 4,            ease: "easeInOut"
            delay: 4
=======
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut'
            delay: 4,          }}
        />
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Additional orbs */}
        <motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.3, 1, 1.3]
            opacity: [0.3, 0.6, 0.3]
          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
=======
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Secondary orb */}
        <motion.div
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
          }}
        />

        {/* Tertiary orb */}
        <motion.div
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
          }}
        />

        {/* Additional orbs */}
        <motion.div
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
          }}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        />
        <motion.div
          className='absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.4, 1]
            opacity: [0.4, 0.7, 0.4]
          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
<<<<<<< HEAD
            duration: 9
            repeat: Infinity
            ease: "easeInOut"
            delay: 1
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1];
            opacity: [0.4, 0.7, 0.4]}}
          transition={{
<<<<<<< HEAD
            duration: 11
            repeat: Infinity
            ease: 'easeInOut'
            delay: 3,            ease: "easeInOut"
            delay: 3
=======
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
          }}
          transition={{
            duration: 11
            repeat: Infinity
            ease: 'easeInOut'
            delay: 3,          }}
        />
      </div>
      {/* Enhanced grid pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
            `
=======
            `,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            backgroundSize: '50px 50px',          }}          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px'
=======
            `,
            backgroundSize: '50px 50px',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          }}
=======
<<<<<<< HEAD
            `,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            backgroundSize: '50px 50px',          }}

          }}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        />
      </div>
      {/* Floating geometric shapes */}
      <div className='absolute inset-0'>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Triangle */}
        <motion.div
          className='absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45'
          animate={{
<<<<<<< HEAD
            rotate: [45, 405]
            opacity: [0.2, 0.6, 0.2],        {/* Triangle */}
        <motion.div
          className="absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45"
          animate={{
            rotate: [45, 405];
            opacity: [0.2, 0.6, 0.2]}}
          transition={{
            duration: 20
            repeat: Infinity
            ease: "linear"
          }}
          transition={{
<<<<<<< HEAD
            duration: 20
            repeat: Infinity
            ease: 'linear',          }}
        />
=======
            duration: 20,
            repeat: Infinity,
            ease: 'linear',          }}
        />
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Square */}
        <motion.div
          className='absolute bottom-1/6 left-1/6 w-24 h-24 border border-purple-500/20'
          animate={{
            rotate: [0, 360]
            scale: [1, 1.2, 1]
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1]}}
          transition={{
<<<<<<< HEAD
            duration: 15
            repeat: Infinity
            ease: 'easeInOut',          }}
=======
            duration: 15,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'easeInOut',

          }}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
            ease: 'easeInOut',          }}
=======
            ease: 'easeInOut',

          }}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          transition={{
            duration: 15
            repeat: Infinity
            ease: 'easeInOut',          }}
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1]}}
          transition={{
            duration: 15
            repeat: Infinity
            ease: "easeInOut"
=======
            rotate: [45, 405],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Square */}
        <motion.div
          className='absolute bottom-1/6 left-1/6 w-24 h-24 border border-purple-500/20'
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          }}
        />
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Circle */}
        <motion.div
          className='absolute top-1/2 right-1/4 w-20 h-20 border border-emerald-500/20 rounded-full'
          animate={{
<<<<<<< HEAD
            scale: [1, 1.5, 1]
            opacity: [0.3, 0.8, 0.3],          animate={{
            scale: [1, 1.5, 1];
            opacity: [0.3, 0.8, 0.3]}}
          transition={{
<<<<<<< HEAD
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,            ease: "easeInOut"
            delay: 2
=======
<<<<<<< HEAD
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,          }}
        />
      </div>
      {/* Energy waves */}
      <div className='absolute inset-0'>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute inset-0 border border-cyan-500/10 rounded-full'
            animate={{
<<<<<<< HEAD
              scale: [1, 1.5, 2, 2.5]
              opacity: [0.3, 0.2, 0.1, 0],        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-cyan-500/10 rounded-full"
            animate={{
              scale: [1, 1.5, 2, 2.5];
              opacity: [0.3, 0.2, 0.1, 0]}}
            transition={{
              duration: 6
              repeat: Infinity
              ease: "easeOut"
              delay: i * 2
=======
              scale: [1, 1.5, 2, 2.5],
              opacity: [0.3, 0.2, 0.1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeOut',
              delay: i * 2,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            }}
            transition={{
<<<<<<< HEAD
              duration: 6
              repeat: Infinity
              ease: 'easeOut'
=======
              duration: 6,
              repeat: Infinity,
              ease: 'easeOut',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              delay: i * 2,            }}
          />
        ))}
      </div>
<<<<<<< HEAD
      {/* Quantum particles */}
      <div className='absolute inset-0'>
=======

      {/* Quantum particles */}
      <div className='absolute inset-0'>

        {[...Array(15)].map((_, i) => (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-cyan-400/60 rounded-full'
            animate={{
<<<<<<< HEAD
              x: [0, Math.random() * 200 - 100]
              y: [0, Math.random() * 200 - 100]
              opacity: [0, 1, 0]
              scale: [0, 1, 0]
            }}            transition={{
              duration: 4 + Math.random() * 4
              repeat: Infinity
              delay: Math.random() * 4,              x: [0, Math.random() * 200 - 100];
              y: [0, Math.random() * 200 - 100];
              opacity: [0, 1, 0];
              scale: [0, 1, 0]}}
<<<<<<< HEAD
<<<<<<< HEAD
              duration: 4 + Math.random() * 4
              repeat: Infinity
              delay: Math.random() * 4
              ease: 'easeInOut'
=======
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
<<<<<<< HEAD
              ease: 'easeInOut',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            }}
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
            }}          />              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`}}
=======
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        ))}
      </div>
      {/* Consciousness energy field */}
      <div className='absolute inset-0'>
=======
<<<<<<< HEAD

            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

          />

        ))}
      </div>

      {/* Consciousness energy field */}
      <div className='absolute inset-0'>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5'
          animate={{
<<<<<<< HEAD
            opacity: [0.3, 0.6, 0.3],        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5"
          animate={{
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 10
            repeat: Infinity
            ease: "easeInOut"
=======
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          }}
          transition={{
<<<<<<< HEAD
            duration: 10
            repeat: Infinity
=======
            duration: 10,
            repeat: Infinity,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            ease: 'easeInOut',          }}
        />
      </div>
    </div>
  );
<<<<<<< HEAD
};export default UltraFuturisticBackground2043;  )
}
=======
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default UltraFuturisticBackground2043;

<<<<<<< HEAD
<<<<<<< HEAD
=======
export default UltraFuturisticBackground2043;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
export default UltraFuturisticBackground2043;

}
}
}
}
}
}
}
}
=======
export default UltraFuturisticBackground2043;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
