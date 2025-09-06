import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const UltraFuturisticBackground2029: React.FC;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
const UltraFuturisticBackground2029: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
<<<<<<< HEAD
    canvas.height = window.innerHeight
=======
    canvas.height = window.innerHeight;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    let animationFrameId: number;
    const particles: Array<{
<<<<<<< HEAD
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      opacity: number
      life: number
    }> = [];
    // Initialize particles
    for (let i = 0; i < 50; i++) {    for (let i = 0, i < 50, i++) {
      particles.push({
        x: Math.random() * canvas.width
        y: Math.random() * canvas.height
        vx: (Math.random() - 0.5) * 0.5
        vy: (Math.random() - 0.5) * 0.5
        size: Math.random() * 3 + 1
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][
          Math.floor(Math.random() * 5)
        ]
        opacity: Math.random() * 0.8 + 0.2
        life: Math.random() * 100 + 50
      });    }        color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)]
        opacity: Math.random() * 0.8 + 0.2
        life: Math.random() * 100 + 50
      })
=======
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
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][
          Math.floor(Math.random() * 5)
        ],
        opacity: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50,
      });
    }

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        if (particle.life <= 0) {
          particles[index] = {
<<<<<<< HEAD
            x: Math.random() * canvas.width
            y: Math.random() * canvas.height
            vx: (Math.random() - 0.5) * 0.5
            vy: (Math.random() - 0.5) * 0.5
            size: Math.random() * 3 + 1
            color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][
              Math.floor(Math.random() * 5)
            ]
            opacity: Math.random() * 0.8 + 0.2
            life: Math.random() * 100 + 50
          };        }            color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)]
            opacity: Math.random() * 0.8 + 0.2
            life: Math.random() * 100 + 50
          }
        // Draw particle with glow effect
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
=======
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
          };
        }

        // Draw particle with glow effect
        ctx.save();
        ctx.globalCompositeOperation = 'screen';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
        ctx.restore();      });        ctx.restore()
=======
        ctx.restore();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      ctx.globalCompositeOperation = 'screen';
<<<<<<< HEAD
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {          const dx = particles[i].x - particles[j].x;      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
=======

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.globalAlpha = ((100 - distance) / 100) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
<<<<<<< HEAD
            ctx.stroke();          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);    };            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke()
        }
      }
      animationFrameId = requestAnimationFrame(animate);      animationFrameId = requestAnimationFrame(animate)
    }
=======
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
<<<<<<< HEAD
      canvas.height = window.innerHeight;    };      canvas.height = window.innerHeight
    }
=======
      canvas.height = window.innerHeight;
    };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    }
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
<<<<<<< HEAD
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
              'radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
              'radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
            ],          }}
          transition={{
            duration: 20
            repeat: Infinity
            ease: 'easeInOut',          }}  }, []);
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
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
            duration: 20
            repeat: Infinity
=======
            duration: 20,
            repeat: Infinity,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            ease: 'easeInOut',            ease: "easeInOut";
=======
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          }}
        />
      </div>
=======
<<<<<<< HEAD
            duration: 20,
            repeat: Infinity,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

          }}

        />
      </div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Floating geometric shapes */}
      <motion.div
        className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg'
        animate={{
<<<<<<< HEAD
          rotate: [0, 360]
          scale: [1, 1.1, 1]
          opacity: [0.3, 0.6, 0.3],        }}
        transition={{
          duration: 15
          repeat: Infinity
          ease: 'linear',        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
        animate={{
          rotate: [0, 360];
          scale: [1, 1.1, 1];
          opacity: [0.3, 0.6, 0.3]
        transition={{
          duration: 15
          repeat: Infinity
          ease: 'linear'
=======
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        }}
      />
      <motion.div
        className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full'
        animate={{
<<<<<<< HEAD
          y: [0, -20, 0]
          opacity: [0.2, 0.5, 0.2],        }}
        transition={{
          duration: 8
          repeat: Infinity
          ease: 'easeInOut',        }}      />
      <motion.div
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45'
        animate={{
          rotate: [45, 405]
          scale: [1, 1.2, 1],        }}
        transition={{
<<<<<<< HEAD
          duration: 12
          repeat: Infinity
=======
          duration: 12,
          repeat: Infinity,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          ease: 'linear',        }}
      />
      {/* Animated grid lines */}
      <div className='absolute inset-0 opacity-20'>          y: [0, -20, 0];
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
<<<<<<< HEAD
          duration: 8
          repeat: Infinity
          ease: 'easeInOut',          ease: "easeInOut"
        }}
      />
      <motion.div
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45'
        animate={{
          rotate: [45, 405]
          scale: [1, 1.2, 1],        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45"
        animate={{
          rotate: [45, 405];
          scale: [1, 1.2, 1]
        transition={{
<<<<<<< HEAD
          duration: 12
          repeat: Infinity
=======
          duration: 12,
          repeat: Infinity,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          ease: 'linear',          ease: "linear"
=======
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45'
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        }}
      />
      {/* Animated grid lines */}
      <div className='absolute inset-0 opacity-20'>
        <motion.div
          className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
=======
          duration: 12,
          repeat: Infinity,

        }}
      />

      {/* Animated grid lines */}

          }}
          transition={{
            duration: 30,
            repeat: Infinity,

          }}

        />
      </div>

      {/* Quantum energy waves */}
      <div className='absolute inset-0'>

        <motion.div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          }}
          animate={{
<<<<<<< HEAD
            backgroundPosition: ['0px 0px', '50px 50px'],          }}
          transition={{
<<<<<<< HEAD
            duration: 30
            repeat: Infinity
            ease: 'linear',          }}        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px50px 50px']
          }}
          transition={{
            duration: 30
            repeat: Infinity
            ease: 'linear',            ease: "linear"
<<<<<<< HEAD
=======
            backgroundPosition: ['0px 0px', '50px 50px'],
=======
<<<<<<< HEAD
=======
=======

        }}
      />

      {/* Animated grid lines */}

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'linear',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
          }}
        />
      </div>
      {/* Quantum energy waves */}
      <div className='absolute inset-0'>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <motion.div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)'
          }}
          animate={{
<<<<<<< HEAD
            scale: [1, 1.5, 1]
            opacity: [0.1, 0.3, 0.1],          }}
          transition={{
<<<<<<< HEAD
            duration: 8
            repeat: Infinity
=======
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            ease: 'easeInOut',          }}        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.5, 1];
            opacity: [0.1, 0.3, 0.1]
<<<<<<< HEAD
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
=======
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          }}
        />
      </div>
=======
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',          }}

=======
=======
            ease: 'easeInOut',          }}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
=======
<<<<<<< HEAD
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />
      </div>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

          }}

        />
      </div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Holographic elements */}
      <motion.div
        className='absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full'
        animate={{
<<<<<<< HEAD
          rotate: [0, 360]
          scale: [1, 1.2, 1]
          opacity: [0.1, 0.3, 0.1],        }}
        transition={{
          duration: 25
          repeat: Infinity
          ease: 'linear',        }}
      />
      <motion.div        className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full"
        animate={{
          rotate: [0, 360];
          scale: [1, 1.2, 1];
          opacity: [0.1, 0.3, 0.1]
        transition={{
          duration: 25
          repeat: Infinity
          ease: 'linear',          ease: "linear"
=======
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        }}
      />
      <motion.div
        className='absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full'
        animate={{
<<<<<<< HEAD
          rotate: [360, 0]
          scale: [1.2, 1, 1.2]
          opacity: [0.2, 0.4, 0.2],        }}
        transition={{
<<<<<<< HEAD
<<<<<<< HEAD
          duration: 20
          repeat: Infinity
=======
          duration: 20,
          repeat: Infinity,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          ease: 'linear',        }}
      />
      {/* Neural network connections */}
      <div className='absolute inset-0'>        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full"
        animate={{
          rotate: [360, 0];
          scale: [1.2, 1, 1.2];
          opacity: [0.2, 0.4, 0.2]
        transition={{
          duration: 20
          repeat: Infinity
          ease: 'linear',          ease: "linear"
=======
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        }}
      />
      {/* Neural network connections */}
      <div className='absolute inset-0'>
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-cyan-400/40 rounded-full'
            style={{
              left: `${20 + i * 10}%`
              top: `${30 + i * 5}%`
            }}
            animate={{
<<<<<<< HEAD
              scale: [0, 1, 0]
              opacity: [0, 1, 0],            }}        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${20 + (i * 10)}%`
              top: `${30 + (i * 5)}%`
            }}
            animate={{
              scale: [0, 1, 0];
              opacity: [0, 1, 0]
            }}
<<<<<<< HEAD
            transition={{
              duration: 3
              repeat: Infinity
              delay: i * 0.3
              ease: 'easeInOut',            }}              ease: "easeInOut"
=======
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            }}
          />
        ))}
      </div>
      {/* Data streams */}
      <div className='absolute inset-0 overflow-hidden'>
=======
          duration: 20,
          repeat: Infinity,
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

        }}
      />

      {/* Neural network connections */}

            }}

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
<<<<<<< HEAD
=======
<<<<<<< HEAD
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      {/* Data streams */}
      <div className='absolute inset-0 overflow-hidden'>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              ease: 'easeInOut',            }}

            }}

          />
        ))}
      </div>

      {/* Data streams */}
      <div className='absolute inset-0 overflow-hidden'>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent'
            style={{
<<<<<<< HEAD
              left: `${15 + i * 15}%`
              top: '-20px'
=======
              left: `${15 + i * 15}%`,
              top: '-20px',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            }}
            animate={{
<<<<<<< HEAD
              y: [0, window.innerHeight + 20],            }}        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent"
            style={{
              left: `${15 + (i * 15)}%`
              top: '-20px'
            }}
            animate={{
              y: [0, window.innerHeight + 20]
            }}
<<<<<<< HEAD
<<<<<<< HEAD
            transition={{
              duration: 4
              repeat: Infinity
              delay: i * 0.8
              ease: 'linear',            }}              ease: "linear"
=======
              y: [0, window.innerHeight + 20],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'linear',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            }}
=======

=======
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
<<<<<<< HEAD
=======
<<<<<<< HEAD
              ease: 'linear',            }}              ease: "linear"
            }}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              ease: 'linear',            }}

            }}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          />
        ))}
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default UltraFuturisticBackground2029;  )
}
export default UltraFuturisticBackground2029;
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
};
}

export default UltraFuturisticBackground2029;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

<<<<<<< HEAD
=======
export default UltraFuturisticBackground2029;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
}
=======
export default UltraFuturisticBackground2029;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
