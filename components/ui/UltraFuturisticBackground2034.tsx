import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2034: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;

    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
      maxLife: number;
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,
      life: number,
      maxLife: number,

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
        this.alpha = Math.random() * 0.5 + 0.3;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;      }

      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (this.life <= 0) {
          this.life = this.maxLife;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;        }

        }

      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha * (this.life / this.maxLife);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();      }
    }

    // Create particles

      }
    }

    // Create particles

    const particles: Particle[] = [];
    for (let i = 0; i < 100; i++) {

    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();      });

      });

      // Draw connecting lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();          }
        }
      }

      requestAnimationFrame(animate);    };

          }
        }
      }

    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };

  }, []);

  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      />

      {/* Animated Grid */}
      <div className='absolute inset-0 opacity-20'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '50px 50px',
          }}
        />      </div>

      {/* Floating Geometric Shapes */}
      <motion.div

      </div>

      {/* Floating Geometric Shapes */}
      <motion.div

        }}
        transition={{
          duration: 20,
          repeat: Infinity,

        }}
      />

      <motion.div

        }}
        transition={{
          duration: 25,
          repeat: Infinity,

        }}
      />

      <motion.div

        }}
        transition={{
          duration: 18,
          repeat: Infinity,

        }}

      />

      {/* Energy Orbs */}
      <motion.div
        className='absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm'
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3],        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',        }}
      />

      <motion.div

        }}
        transition={{
          duration: 4,
          repeat: Infinity,

        }}
      />

      <motion.div

        }}
        transition={{
          duration: 5,
          repeat: Infinity,

        }}
      />

      {/* Quantum Field Lines */}

            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,

            }}

          />
        ))}
      </div>

      {/* Holographic Rings */}
      <motion.div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full'
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',        }}
      />

      <motion.div

        }}
        transition={{
          duration: 30,
          repeat: Infinity,

        }}
      />

      <motion.div

        }}
        transition={{
          duration: 25,
          repeat: Infinity,

        }}
      />

      {/* Neural Network Nodes */}

            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,

            }}

          />
        ))}
      </div>

      {/* Data Streams */}
      <div className='absolute inset-0 overflow-hidden'>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent'
            style={{
              left: `${(i + 1) * 16.66}%`,
              top: '-20px',
            }}
            animate={{
              y: [0, window.innerHeight + 20],
              opacity: [0, 1, 0],            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,            }}

            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,

            }}

          />
        ))}
      </div>

      {/* Quantum Entanglement Effect */}
      <motion.div
        className='absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full'
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0.5)',
            '0 0 30px rgba(0, 255, 255, 0.8)',
            '0 0 10px rgba(0, 255, 255, 0.5)',
          ],        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',        }}
      />

      <motion.div

        }}
        transition={{
          duration: 2,
          repeat: Infinity,

        }}
      />

      <motion.div

        }}
        transition={{
          duration: 2,
          repeat: Infinity,

        }}

      />

      {/* Metaverse Portal Effect */}
      <motion.div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400/30 rounded-full'
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
          opacity: [0.05, 0.15, 0.05],        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',        }}
      />

      {/* AI Consciousness Waves */}
      <div className='absolute inset-0'>

        }}
        transition={{
          duration: 40,
          repeat: Infinity,

        }}
      />

      {/* AI Consciousness Waves */}

            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,

            }}

          />
        ))}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2034;