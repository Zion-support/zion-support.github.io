import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const UltraFuturisticBackground2029: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

<<<<<<< HEAD
    let animationFrameId: number;

    const particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number,
      life: number
    }> = [];

    // Initialize particles
    for (let i = 0; i < 50; i++) {
=======
    for (let i = 0, i < 50, i++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][
          Math.floor(Math.random() * 5)
        ],
        opacity: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50,
      });    }
=======
        color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)],
        opacity: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50
      })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
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
            color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][
              Math.floor(Math.random() * 5)
            ],
            opacity: Math.random() * 0.8 + 0.2,
            life: Math.random() * 100 + 50,
          };        }
=======
            color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)],
            opacity: Math.random() * 0.8 + 0.2,
            life: Math.random() * 100 + 50
          }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        // Draw particle with glow effect
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        // Outer glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Inner particle
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();      });
=======
        ctx.restore()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      ctx.globalCompositeOperation = 'screen';

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {          const dx = particles[i].x - particles[j].x;
=======
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          const dx = particles[i].x - particles[j].x;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.globalAlpha = ((100 - distance) / 100) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);    };
=======
            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }
        }
      }

<<<<<<< HEAD
      animationFrameId = requestAnimationFrame(animate);
=======
      animationFrameId = requestAnimationFrame(animate)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;    };
=======
      canvas.height = window.innerHeight
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }, []);

  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden z-0'>
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ background: 'transparent' }}
      />

      {/* Animated gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black'>
        <motion.div
          className='absolute inset-0 opacity-30'
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
            ],          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',          }}
=======
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
            ]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg'
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
=======
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
        animate={{
          rotate: [0, 360];
          scale: [1, 1.1, 1];
          opacity: [0.3, 0.6, 0.3]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'linear',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        }}
      />

      <motion.div
        className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full'
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',        }}
      />

      <motion.div
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45'
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',        }}
      />

      {/* Animated grid lines */}
      <div className='absolute inset-0 opacity-20'>
=======
          y: [0, -20, 0];
          opacity: [0.2, 0.5, 0.2]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'easeInOut',
=======
          ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }}
      />

      <motion.div
<<<<<<< HEAD
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45'
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],
=======
        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45"
        animate={{
          rotate: [45, 405];
          scale: [1, 1.2, 1]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'linear',
=======
          ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }}
      />

      {/* Animated grid lines */}
<<<<<<< HEAD
      <div className='absolute inset-0 opacity-20'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <motion.div
          className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',          }}
=======
            backgroundPosition: ['0px 0px50px 50px']
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        />
      </div>

      {/* Quantum energy waves */}
      <div className='absolute inset-0'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <motion.div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',          }}
=======
            scale: [1, 1.5, 1];
            opacity: [0.1, 0.3, 0.1]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        />
      </div>

      {/* Holographic elements */}
      <motion.div
        className='absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full'
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',        }}
      />

      <motion.div
=======
        className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full"
        animate={{
          rotate: [0, 360];
          scale: [1, 1.2, 1];
          opacity: [0.1, 0.3, 0.1]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'linear',
=======
          ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }}
      />

      <motion.div
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        className='absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full'
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
<<<<<<< HEAD
          opacity: [0.2, 0.4, 0.2],        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',        }}
      />

      {/* Neural network connections */}
      <div className='absolute inset-0'>
=======
        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full"
        animate={{
          rotate: [360, 0];
          scale: [1.2, 1, 1.2];
          opacity: [0.2, 0.4, 0.2]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'linear',
=======
          ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }}
      />

      {/* Neural network connections */}
<<<<<<< HEAD
      <div className='absolute inset-0'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-cyan-400/40 rounded-full'
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],            }}
=======
              scale: [0, 1, 0];
              opacity: [0, 1, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',            }}
=======
              ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          />
        ))}
      </div>

      {/* Data streams */}
      <div className='absolute inset-0 overflow-hidden'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent'
            style={{
              left: `${15 + i * 15}%`,
              top: '-20px',
            }}
            animate={{
              y: [0, window.innerHeight + 20],            }}
=======
              y: [0, window.innerHeight + 20]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'linear',            }}
=======
              ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          />
        ))}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2029;
=======
  )
};

export default UltraFuturisticBackground2029;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
