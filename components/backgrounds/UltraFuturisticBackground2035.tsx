import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function UltraFuturisticBackground2035() {
<<<<<<< HEAD
  const canvasRef = null;
                ease: "easeInOut"
=======
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
<<<<<<< HEAD
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
=======

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth * (window.devicePixelRatio |1);
    canvas.height = window.innerHeight * (window.devicePixelRatio |1);
    if (ctx) {
<<<<<<< HEAD
      ctx.scale(window.devicePixelRatio |1, window.devicePixelRatio |1);
    let animationFrameId: number;
=======
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    }
}

let animationFrameId: number;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
<<<<<<< HEAD
      color: string;    }> = [];      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
=======
      color: string;
    }> = [];

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    // Initialize particles
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
      const particleCount = prefersReducedMotion
        ? 12
        : isSmallScreen
          ? 40
          : 100;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
<<<<<<< HEAD
          x: (Math.random() * canvas.width) / (window.devicePixelRatio |1)
          y: (Math.random() * canvas.height) / (window.devicePixelRatio |1),          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4
          size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8
          opacity: Math.random() * 0.35 + 0.08
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][
            Math.floor(Math.random() * 4)
          ]
        });      }      const particleCount = prefersReducedMotion ? 12 : (isSmallScreen ? 40 : 100);
      for (let i = 0, i < particleCount, i++) {
        particles.push({
          x: Math.random() * canvas.width / (window.devicePixelRatio |1)
          y: Math.random() * canvas.height / (window.devicePixelRatio |1)
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4
          size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8
          opacity: Math.random() * 0.35 + 0.08
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][
            Math.floor(Math.random() * 4)
          ]
        });          color: ['#8b5cf6#06b6d4#ec4899#10b981'][Math.floor(Math.random() * 4)]
        })
=======
          x: (Math.random() * canvas.width) / (window.devicePixelRatio || 1),
          y: (Math.random() * canvas.height) / (window.devicePixelRatio || 1),
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8,
          opacity: Math.random() * 0.35 + 0.08,
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][
            Math.floor(Math.random() * 4)
          ],
        });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      }
    }
    // Update and draw particles
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges
        if (particle.x < 0)
          particle.x = canvas.width / (window.devicePixelRatio |1);
        if (particle.x > canvas.width / (window.devicePixelRatio |1))
          particle.x = 0;
        if (particle.y < 0)
<<<<<<< HEAD
          particle.y = canvas.height / (window.devicePixelRatio |1);
        if (particle.y > canvas.height / (window.devicePixelRatio |1))
          particle.y = 0;        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio |1);
        if (particle.x > canvas.width / (window.devicePixelRatio |1)) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio |1);
        if (particle.y > canvas.height / (window.devicePixelRatio |1)) particle.y = 0;
=======
          particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1))
          particle.y = 0;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        // Draw connections
        const maxDistance = prefersReducedMotion
          ? 0
          : window.innerWidth < 768
            ? 90
<<<<<<< HEAD
            : 140;        if (maxDistance > 0) {        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 90 : 140);
=======
            : 140;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
                ctx.globalAlpha =
                  ((maxDistance - distance) / maxDistance) * 0.08;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
<<<<<<< HEAD
          });        }
      });
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(updateParticles);      }                ctx.lineWidth = 1;
                ctx.stroke()
              }
            }
          })
=======
          });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        }
      });
      if (!prefersReducedMotion) {
<<<<<<< HEAD
        animationFrameId = requestAnimationFrame(updateParticles);        animationFrameId = requestAnimationFrame(updateParticles)
=======
        animationFrameId = requestAnimationFrame(updateParticles);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      }
    }
    initParticles();
    updateParticles();
    const handleResize = () => {
      canvas.width = window.innerWidth * (window.devicePixelRatio |1);
      canvas.height = window.innerHeight * (window.devicePixelRatio |1);
      if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
<<<<<<< HEAD
        ctx.scale(window.devicePixelRatio |1, window.devicePixelRatio |1);
      }
      initParticles();    };        ctx.scale(window.devicePixelRatio |1, window.devicePixelRatio |1)
      }
      initParticles()
    }
=======
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      }
      initParticles();
    };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
<<<<<<< HEAD
    };  }, []);        cancelAnimationFrame(animationFrameId)
      }
    }
=======
    };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }, []);
  return (
    <>
      {/* Fixed Background Canvas */}
      <canvas
        ref={canvasRef}
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)'
        }}
      />
      {/* Animated Background Elements */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>
        {/* Floating Geometric Shapes */}
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full'
          animate={{
<<<<<<< HEAD
            scale: [1, 1.15, 1]
            rotate: [0, 180, 360]
            opacity: [0.22, 0.45, 0.22],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',      />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full"
          animate={{
            scale: [1, 1.15, 1];
            rotate: [0, 180, 360];
            opacity: [0.22, 0.45, 0.22]
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45"
          animate={{
            scale: [1, 1.3, 1]
            rotate: [45, 225, 405]
            opacity: [0.2, 0.5, 0.2],            scale: [1, 1.3, 1];
            rotate: [45, 225, 405];
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
=======
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
            opacity: [0.22, 0.45, 0.22],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45'
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, 225, 405],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          }}
        />
        <motion.div
<<<<<<< HEAD
          className='absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45'
          animate={{
            scale: [1, 1.3, 1]
            rotate: [45, 225, 405]
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
        <motion.div
          className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full'
          animate={{
            scale: [1, 1.4, 1]
            y: [0, -20, 0]
            opacity: [0.4, 0.7, 0.4],          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
        {/* Neon Glow Effects */}
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full"
          animate={{
            scale: [1, 1.4, 1];
            y: [0, -20, 0];
            opacity: [0.4, 0.7, 0.4]
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
=======
          className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full'
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -20, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          }}
        />
        {/* Neon Glow Effects */}
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />
        {/* Animated Grid Lines */}
        <div className='absolute inset-0 opacity-10'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px)
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `
              backgroundSize: '50px 50px'
            }}
<<<<<<< HEAD
          />        </div>
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px);
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px'
          }} />
=======
          />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        </div>
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-purple-400 rounded-full'
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
            }}
            animate={{
<<<<<<< HEAD
              y: [0, -30, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0],            }}            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2
              repeat: Infinity
              delay: Math.random() * 2
              ease: 'easeInOut',            }}              ease: "easeInOut"
=======
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            }}
          />
        ))}
        {/* Energy Waves */}
        <motion.div
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'
          animate={{
<<<<<<< HEAD
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0],          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',          }}
=======
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        />
        <motion.div
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{
<<<<<<< HEAD
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0],          }}          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0];
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />
        <motion.div
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0],          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0];
            opacity: [0, 1, 0]
          transition={{
            duration: 4
            repeat: Infinity
            delay: 2
            ease: 'easeInOut',          }}            ease: "easeInOut"
=======
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
            ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          }}
        />
        {/* Quantum Dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`quantum-${i}`}
            className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
            }}
            animate={{
<<<<<<< HEAD
              scale: [0, 1, 0]
              opacity: [0, 0.8, 0]
              rotate: [0, 360],            }}            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [0, 1, 0];
              opacity: [0, 0.8, 0];
              rotate: [0, 360]
            }}
            transition={{
              duration: 5 + Math.random() * 3
              repeat: Infinity
              delay: Math.random() * 5
              ease: 'easeInOut',            }}              ease: "easeInOut"
=======
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            }}
          />
        ))}
        {/* Neural Network Connections */}
        <svg className='absolute inset-0 w-full h-full opacity-20'>
          <defs>
            <linearGradient
              id='neuralGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#8b5cf6' stopOpacity='0.5' />
              <stop offset='50%' stopColor='#06b6d4' stopOpacity='0.3' />
              <stop offset='100%' stopColor='#ec4899' stopOpacity='0.5' />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={`neural-${i}`}
              cx={`${20 + i * 10}%`}
              cy={`${30 + i * 5}%`}
              r='3'
              fill='url(#neuralGradient)'
              animate={{
<<<<<<< HEAD
                r: [3, 6, 3]
                opacity: [0.3, 0.8, 0.3],              }}          <defs>
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
              }}
              transition={{
                duration: 4
                repeat: Infinity
                delay: i * 0.5
                ease: 'easeInOut',              }}                ease: "easeInOut"
=======
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              }}
            />
          ))}
        </svg>
        {/* Holographic Effects */}
        <div className='absolute inset-0'>
          <motion.div
            className='absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full'
            animate={{
<<<<<<< HEAD
              scale: [1, 1.1, 1]
              rotate: [0, 90, 180, 270, 360]
              opacity: [0.1, 0.3, 0.1],            }}
            transition={{
              duration: 20
              repeat: Infinity
              ease: 'linear',          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 20
              repeat: Infinity
              ease: 'linear'
=======
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            }}
          />
          <motion.div
            className='absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full'
            animate={{
<<<<<<< HEAD
              scale: [1, 1.2, 1]
              rotate: [360, 270, 180, 90, 0]
              opacity: [0.1, 0.4, 0.1],            }}
            transition={{
              duration: 15
              repeat: Infinity
              ease: 'linear',            }}            }}
          />
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1];
              rotate: [360, 270, 180, 90, 0];
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 15
              repeat: Infinity
              ease: 'linear',              ease: "linear"
=======
              scale: [1, 1.2, 1],
              rotate: [360, 270, 180, 90, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            }}
          />
        </div>
        {/* Data Streams */}
        <div className='absolute right-0 top-0 w-32 h-full opacity-30'>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className='absolute w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent'
              style={{
                right: `${Math.random() * 32}px`
                top: `${i * 5}%`
              }}
              animate={{
<<<<<<< HEAD
                height: [8, 32, 8]
                opacity: [0.3, 1, 0.3],              }}          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent"
              style={{
                right: `${Math.random() * 32}px`
                top: `${i * 5}%`
              }}
              animate={{
                height: [8, 32, 8];
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 2 + Math.random() * 2
                repeat: Infinity
                delay: Math.random() * 2
                ease: 'easeInOut',              }}                ease: "easeInOut"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
                height: [8, 32, 8],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              }}
            />
          ))}
        </div>
      </div>
    </>
<<<<<<< HEAD
);  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
