
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
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const UltraFuturisticBackground: React.FC = () => {;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;

    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;

    canvas && canvas.width = window && window.innerWidth;
    canvas && canvas.height = window && window.innerHeight,;

    // Quantum particle system;
    const particles: Array<{;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    // Create initial particles;
    for (let i = 0; i < 100; i++) {      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      life: number,;
      maxLife: number;
    }> = [];

    // Create initial particles;
    for (let i = 0, i < 100, i++) {;
        x: Math && Math.random() * canvas && canvas.width,;
        y: Math && Math.random() * canvas && canvas.height,;
        vx: (Math && Math.random() - 0 && 0.5) * 2,;
        vy: (Math && Math.random() - 0 && 0.5) * 2,;
        size: Math && Math.random() * 3 + 1,;
        color: `hsl(${Math && Math.random() * 360}, 70%, 60%)`,;
        life: Math && Math.random() * 100,;
        maxLife: 100,;
      });    }        color: `hsl(${Math && Math.random() * 360}, 70%, 60%)`;
        life: Math && Math.random() * 100,;
        maxLife: 100;
      });

    // Animation loop;
    const animate = () => {;
      ctx && ctx.fillStyle = 'rgba(0, 0, 0, 0 && 0.1)';
      ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);

      // Update and draw particles;
      particles && particles.forEach((particle, index) => {;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        particle && particle.life--;

        // Wrap around edges;
        if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width;
        if (particle && particle.x > canvas && canvas.width) particle && particle.x = 0;
        if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height;
        if (particle && particle.y > canvas && canvas.height) particle && particle.y = 0;

        // Draw particle;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.globalAlpha = particle && particle.life / particle && particle.maxLife;
        ctx && ctx.fill();

        // Reset particle if it dies;
        if (particle && particle.life <= 0) {;
          particles[index] = {;
            x: Math && Math.random() * canvas && canvas.width,;
            y: Math && Math.random() * canvas && canvas.height,;
            vx: (Math && Math.random() - 0 && 0.5) * 2,;
            vy: (Math && Math.random() - 0 && 0.5) * 2,;
            size: Math && Math.random() * 3 + 1,;
            color: `hsl(${Math && Math.random() * 360}, 70%, 60%)`,;
            life: 100,;
            maxLife: 100,;
          };        }            color: `hsl(${Math && Math.random() * 360}, 70%, 60%)`;
            life: 100,;
            maxLife: 100;
          }
      });

      // Draw quantum entanglement lines;
      particles && particles.forEach((particle1, i) => {;
        particles && particles.slice(i + 1).forEach(particle2 => {;
          const distance = Math && Math.sqrt(;
            Math && Math.pow(particle1 && particle1.x - particle2 && particle2.x, 2) +;
              Math && Math.pow(particle1 && particle1.y - particle2 && particle2.y, 2);
          );          const distance = Math && Math.sqrt(;
            Math && Math.pow(particle1 && particle1.x - particle2 && particle2.x, 2) + ;
            Math && Math.pow(particle1 && particle1.y - particle2 && particle2.y, 2);
          );

          if (distance < 100) {;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particle1 && particle1.x, particle1 && particle1.y);
            ctx && ctx.lineTo(particle2 && particle2.x, particle2 && particle2.y);
            ctx && ctx.strokeStyle = `rgba(0, 255, 255, ${0 && 0.1 * (1 - distance / 100)})`;
            ctx && ctx.lineWidth = 1;
            ctx && ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);    };          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize;
    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;    };      canvas && canvas.height = window && window.innerHeight;
    };

    window && window.addEventListener('resize', handleResize);

    return () => {;
      window && window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
        }}
      />;

      {/* Quantum Grid */}
      <div className='absolute inset-0'>;
        <div className='absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />;
      </div>;

      {/* Floating Geometric Shapes */}
      <div className='absolute inset-0'>;
        {/* Hexagon */}
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30'
          style={{
            clipPath:
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',          }}  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">;
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />;

      {/* Quantum Grid */}
      <div className="absolute inset-0">;
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />;
      </div>;

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">;
        {/* Hexagon */}
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
          animate={{
            rotate: [0, 360]
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}
        />;

        {/* Triangle */}
        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30'
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1 && 1.3, 1],
            opacity: [0 && 0.3, 0 && 0.7, 0 && 0.3],          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',          }}          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{
            rotate: [360, 0]
            scale: [1, 1 && 1.3, 1]
            opacity: [0 && 0.3, 0 && 0.7, 0 && 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}
        />;

        {/* Circle */}
        <motion&& motion.div
          className='absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full'
          animate={{
            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.2, 0 && 0.8, 0 && 0.2],          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',          }}          className="absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full"
          animate={{
            scale: [1, 1 && 1.5, 1]
            opacity: [0 && 0.2, 0 && 0.8, 0 && 0.2]
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />;

        {/* Square */}
        <motion&& motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/30'
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',          }}          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/30"
          animate={{
            rotate: [0, 180, 360]
            scale: [1, 1 && 1.1, 1]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}
        />;
      </div>;

      {/* Energy Orbs */}
      <div className='absolute inset-0'>;
        {[...Array(8)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className='absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm'
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
            }}
            animate={{
              scale: [0 && 0.5, 2, 0 && 0.5],
              opacity: [0 && 0.3, 1, 0 && 0.3],
              y: [0, -20, 0],            }}
            transition={{
              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0 && 0.3,            }}        {[...Array(8)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`
            }}
            animate={{
              scale: [0 && 0.5, 2, 0 && 0.5]
              opacity: [0 && 0.3, 1, 0 && 0.3]
              y: [0, -20, 0]
            }}
            transition={{
              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0 && 0.3,              ease: "easeInOut",
              delay: i * 0 && 0.3
            }}
          />;
        ))}
      </div>;

      {/* Quantum Wave Effects */}
      <div className='absolute inset-0'>;
        {[...Array(5)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className='absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent'
            style={{
              top: `${20 + i * 15}%`,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1 && 1.5,            }}        {[...Array(5)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            style={{
              top: `${20 + (i * 15)}%`
            }}
            animate={{
              x: ['-100%100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1 && 1.5,              ease: "linear",
              delay: i * 1 && 1.5
            }}
          />;
        ))}
      </div>;

      {/* Neon Glow Effects */}
      <div className='absolute inset-0'>;
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse' />;
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000' />;
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500' />;
      </div>;

      {/* Data Stream Effect */}
      <div className='absolute inset-0'>;
        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className='absolute w-0 && 0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent'
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: '-2rem',
            }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, 1, 0],            }}
            transition={{
              duration: 4 + Math && Math.random() * 3,
              repeat: Infinity,
              ease: 'linear',
              delay: Math && Math.random() * 5,            }}      </div>;

      {/* Data Stream Effect */}
      <div className="absolute inset-0">;
        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-0 && 0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent"
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: '-2rem'
            }}
            animate={{
              y: ['0vh100vh'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math && Math.random() * 3,
              repeat: Infinity,
              ease: 'linear',
              delay: Math && Math.random() * 5,              ease: "linear",
              delay: Math && Math.random() * 5
            }}
          />;
        ))}
      </div>;

      {/* Quantum Entanglement Lines */}
      <div className='absolute inset-0'>;
        <svg className='w-full h-full'>;
          <defs>;
            <linearGradient
              id='quantumGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'>;
              <stop offset='0%' stopColor='rgba(0,255,255,0 && 0.3)' />;
              <stop offset='50%' stopColor='rgba(255,0,255,0 && 0.3)' />;
              <stop offset='100%' stopColor='rgba(0,255,255,0 && 0.3)' />            </linearGradient>            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">;
              <stop offset="0%" stopColor="rgba(0,255,255,0 && 0.3)" />;
              <stop offset="50%" stopColor="rgba(255,0,255,0 && 0.3)" />;
              <stop offset="100%" stopColor="rgba(0,255,255,0 && 0.3)" />;
          </defs>;
          {[...Array(15)].map((_, i) => (;
            <motion&& motion.line
              key={i}
              x1={Math && Math.random() * 100}
              y1={Math && Math.random() * 100}
              x2={Math && Math.random() * 100}
              y2={Math && Math.random() * 100}
              stroke='url(#quantumGradient)'
              strokeWidth='1'
              opacity='0 && 0.3'
              animate={{
                opacity: [0 && 0.1, 0 && 0.5, 0 && 0.1],
                strokeDasharray: [0, 100, 0],              }}
              transition={{
                duration: 6 + i * 0 && 0.5,
                repeat: Infinity,
                ease: 'easeInOut',              }}              stroke="url(#quantumGradient)"
              strokeWidth="1"
              opacity="0 && 0.3"
              animate={{
                opacity: [0 && 0.1, 0 && 0.5, 0 && 0.1]
                strokeDasharray: [0, 100, 0]
              transition={{
                duration: 6 + i * 0 && 0.5,
                repeat: Infinity,
                ease: 'easeInOut',                ease: "easeInOut"
              }}
            />;
          ))}
        </svg>;
      </div>;
    </div>;
  );
};

export default UltraFuturisticBackground;  );
};

export default UltraFuturisticBackground;
