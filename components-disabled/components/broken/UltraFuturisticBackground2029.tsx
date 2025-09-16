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
        opacity: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50
      });
    }

    const animate = () => {
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
            opacity: Math.random() * 0.8 + 0.2,
            life: Math.random() * 100 + 50
          };
        }

        // Draw particle with glow effect
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        
        // Outer glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.beginPath();
        ctx.fill();

        // Inner particle
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.fill();
        ctx.restore();
      });

      // Draw connecting lines between nearby particles
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
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
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
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Neural network connections */}
      <div className="absolute inset-0">
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`
            }}
            animate={{
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
          <motion.div
            key={i}
            className="absolute w-0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent"
            style={{
              left: `${15 + (i * 15)}%`,
              top: '-20px'
            }}
            animate={{
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