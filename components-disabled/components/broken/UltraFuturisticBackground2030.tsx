import { motion } from 'framer-motion';

interface UltraFuturisticBackground2030Props {
  children: React.ReactNode;
}

const UltraFuturisticBackground2030: React.FC<UltraFuturisticBackground2030Props> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2
        });
      }
    };

    const animate = () => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (100 - distance) / 100 * 0.3;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };


  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Hexagon Grid */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Circles */}
        <motion.div
          className="absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40"
          animate={{
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40"
          animate={{
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Animated Lines */}
        <motion.div
          className="absolute top-32 left-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent"
          animate={{
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-64 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent"
          animate={{
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none z-20">
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent" />
        
        {/* Left gradient */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-indigo-900/20 via-transparent to-transparent" />
        
        {/* Right gradient */}
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-pink-900/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-15">
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Neon Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-25">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2030;