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
        alpha: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50
      });
    }

    // Animation loop
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
            alpha: Math.random() * 0.8 + 0.2,
            life: Math.random() * 100 + 50
          };
        }
      });

      // Draw connecting lines between nearby particles
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


    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
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
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
          animate={{
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/30 transform rotate-45"
          animate={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 rounded-full"
          animate={{
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 transform rotate-12"
          animate={{
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
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-400/50"
          animate={{
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
