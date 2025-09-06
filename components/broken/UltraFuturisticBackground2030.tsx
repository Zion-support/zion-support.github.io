
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
 canvas && canvas.width = window && window.innerWidth;
canvas && canvas.height = window && window.innerHeight;
let animationId: number;
let particles: Array< {;

const UltraFuturisticBackground2030: React.FC<;
  UltraFuturisticBackground2030Props;
> = ({ children }) => {  const canvasRef = useRef<HTMLCanvasElement>(null);import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2030Props {;
  children: React && React.ReactNode;
}

const UltraFuturisticBackground2030: React.FC<UltraFuturisticBackground2030Props> = ({ children }) => {;

  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;

    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;

    canvas && canvas.width = window && window.innerWidth;
    canvas && canvas.height = window && window.innerHeight;

    let animationId: number;
    let particles: Array<{;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;    }> = [];      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      opacity: number;

    // Initialize particles;
    const initParticles = () => {;
      particles = [];
      for (let i = 0; i < 150; i++) {        particles && particles.push({      for (let i = 0, i < 150, i++) {;
        particles && particles.push({;
          x: Math && Math.random() * canvas && canvas.width,;
          y: Math && Math.random() * canvas && canvas.height,;
          vx: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
          vy: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
          size: Math && Math.random() * 2 + 1,;
          color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][;
            Math && Math.floor(Math && Math.random() * 5);
          ],;
          opacity: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
        });      }          color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math && Math.floor(Math && Math.random() * 5)],;
          opacity: Math && Math.random() * 0 && 0.8 + 0 && 0.2;
        });
      }
    };

    const animate = () => {;
      ctx && ctx.fillStyle = 'rgba(0, 0, 0, 0 && 0.05)';
      ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);

      // Update and draw particles;
      particles && particles.forEach((particle, index) => {;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;

        // Wrap around edges;
        if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width;
        if (particle && particle.x > canvas && canvas.width) particle && particle.x = 0;
        if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height;
        if (particle && particle.y > canvas && canvas.height) particle && particle.y = 0;

        // Draw particle;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.globalAlpha = particle && particle.opacity;
        ctx && ctx.fill();

        // Draw connections;
        particles && particles.forEach((otherParticle, otherIndex) => {;
          if (index !== otherIndex) {;
            const distance = Math && Math.sqrt(;
              Math && Math.pow(particle && particle.x - otherParticle && otherParticle.x, 2) +;
                Math && Math.pow(particle && particle.y - otherParticle && otherParticle.y, 2)            );              Math && Math.pow(particle && particle.x - otherParticle && otherParticle.x, 2) + ;
              Math && Math.pow(particle && particle.y - otherParticle && otherParticle.y, 2);
            );
            if (distance < 100) {;
              ctx && ctx.beginPath();
              ctx && ctx.moveTo(particle && particle.x, particle && particle.y);
              ctx && ctx.lineTo(otherParticle && otherParticle.x, otherParticle && otherParticle.y);
              ctx && ctx.strokeStyle = particle && particle.color;
              ctx && ctx.globalAlpha = ((100 - distance) / 100) * 0 && 0.3;
              ctx && ctx.lineWidth = 0 && 0.5;
              ctx && ctx.stroke();
            }
          }
        });
      });

      ctx && ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);    };              ctx && ctx.lineWidth = 0 && 0.5;
              ctx && ctx.stroke();
            }
          }
        });
      });

      ctx && ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;
      initParticles();    };      initParticles();
    };

    window && window.addEventListener('resize', handleResize);

    return () => {;
      cancelAnimationFrame(animationId);
      window && window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='relative min-h-screen bg-black overflow-hidden'>;
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
        }}
      />;

      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-10'>;
        {/* Hexagon Grid */}
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30'
          style={{
            clipPath:
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',  }, [])

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">;
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />;

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">;
        {/* Hexagon Grid */}
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{
            rotate: 360,
            scale: [1, 1 && 1.1, 1]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]
          }}
          animate={{
            rotate: 360,
            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />;

        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30'
          style={{
            clipPath:
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
          animate={{
            rotate: -360,
            scale: [1, 0 && 0.9, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',          }}          }}
        />;

        <motion&& motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{
            rotate: -360,
            scale: [1, 0 && 0.9, 1]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}
        />;

        {/* Floating Circles */}
        <motion&& motion.div
          className='absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40'
          animate={{
            y: [0, -20, 0],
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;

        <motion&& motion.div
          className='absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40'
          animate={{
            y: [0, 20, 0],
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4],          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',          }}          className="absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40"
          animate={{
            y: [0, -20, 0]
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />;

        <motion&& motion.div
          className='absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40'
          animate={{
            y: [0, 20, 0],
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4],          className="absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40"
          animate={{
            y: [0, 20, 0]
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4]
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />;

        {/* Animated Lines */}
        <motion&& motion.div
          className='absolute top-32 left-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent'
          animate={{
            height: [32, 64, 32],
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;

        <motion&& motion.div
          className='absolute top-64 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent'
          animate={{
            height: [24, 48, 24],
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',          }}          className="absolute top-32 left-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent"
          animate={{
            height: [32, 64, 32]
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />;

        <motion&& motion.div
          className='absolute top-64 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent'
          animate={{
            height: [24, 48, 24],
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],          className="absolute top-64 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent"
          animate={{
            height: [24, 48, 24]
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3]
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />;
      </div>;

      {/* Gradient Overlays */}
      <div className='fixed inset-0 pointer-events-none z-20'>;
        {/* Top gradient */}
        <div className='absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent' />;

        {/* Bottom gradient */}
        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent' />;

        {/* Left gradient */}
        <div className='absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-indigo-900/20 via-transparent to-transparent' />;

        {/* Right gradient */}
        <div className='absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-pink-900/20 via-transparent to-transparent' />;
      </div>;

      {/* Content */}
      <div className='relative z-30'>{children}</div>;

      {/* Floating Particles */}
      <div className='fixed inset-0 pointer-events-none z-15'>;
        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className='absolute w-1 h-1 bg-cyan-400 rounded-full'
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],            }}        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />;

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent" />;

        {/* Left gradient */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-indigo-900/20 via-transparent to-transparent" />;

        {/* Right gradient */}
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-pink-900/20 via-transparent to-transparent" />;
      </div>;

      {/* Content */}
      <div className="relative z-30">;
        {children}
      </div>;

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-15">;
        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math && Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math && Math.random() * 10,
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
          />;
        ))}
      </div>;

      {/* Neon Glow Effects */}
      <div className='fixed inset-0 pointer-events-none z-25'>;
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl' />;
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl' />;
        <div className='absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl' />;
      </div>;
    </div>;
  );
};

export default UltraFuturisticBackground2030;      </div>;
    </div>;
  );
};

export default UltraFuturisticBackground2030;
