
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
export default function UltraFuturisticBackground2035() {;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window && window.matchMedia(;
      '(prefers-reduced-motion: reduce)';
    ).matches;    const prefersReducedMotion = window && window.matchMedia('(prefers-reduced-motion: reduce)').matches,;

    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;

    canvas && canvas.width = window && window.innerWidth * (window && window.devicePixelRatio || 1);
    canvas && canvas.height = window && window.innerHeight * (window && window.devicePixelRatio || 1);
    if (ctx) {;
      ctx && ctx.scale(window && window.devicePixelRatio || 1, window && window.devicePixelRatio || 1);

    let animationFrameId: number;
    let particles: Array<{;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;    }> = [];      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      opacity: number,;
      color: string;

    // Initialize particles;
    const initParticles = () => {;
      particles = [];
      const isSmallScreen = window && window.innerWidth < 768;
      const particleCount = prefersReducedMotion;
        ? 12;
        : isSmallScreen;
          ? 40;
          : 100;
      for (let i = 0; i < particleCount; i++) {;
        particles && particles.push({;
          x: (Math && Math.random() * canvas && canvas.width) / (window && window.devicePixelRatio || 1),;
          y: (Math && Math.random() * canvas && canvas.height) / (window && window.devicePixelRatio || 1),          vx: prefersReducedMotion ? 0 : (Math && Math.random() - 0 && 0.5) * 0 && 0.4,;
          vy: prefersReducedMotion ? 0 : (Math && Math.random() - 0 && 0.5) * 0 && 0.4,;
          size: Math && Math.random() * (isSmallScreen ? 1 && 1.5 : 2) + 0 && 0.8,;
          opacity: Math && Math.random() * 0 && 0.35 + 0 && 0.08,;
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][;
            Math && Math.floor(Math && Math.random() * 4);
          ],;
        });      }      const particleCount = prefersReducedMotion ? 12 : (isSmallScreen ? 40 : 100);
      for (let i = 0, i < particleCount, i++) {;
        particles && particles.push({;
          x: Math && Math.random() * canvas && canvas.width / (window && window.devicePixelRatio || 1),;
          y: Math && Math.random() * canvas && canvas.height / (window && window.devicePixelRatio || 1),;
          vy: prefersReducedMotion ? 0 : (Math && Math.random() - 0 && 0.5) * 0 && 0.4,;
          size: Math && Math.random() * (isSmallScreen ? 1 && 1.5 : 2) + 0 && 0.8,;
          opacity: Math && Math.random() * 0 && 0.35 + 0 && 0.08,;
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][;
            Math && Math.floor(Math && Math.random() * 4);
          ],;
        });          color: ['#8b5cf6#06b6d4#ec4899#10b981'][Math && Math.floor(Math && Math.random() * 4)];
        });
      }
    };

    // Update and draw particles;
    const updateParticles = () => {;
      ctx && ctx.clearRect(0, 0, canvas && canvas.width, canvas && canvas.height);

      particles && particles.forEach((particle, index) => {;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;

        // Wrap around edges;
        if (particle && particle.x < 0);
          particle && particle.x = canvas && canvas.width / (window && window.devicePixelRatio || 1);
        if (particle && particle.x > canvas && canvas.width / (window && window.devicePixelRatio || 1));
          particle && particle.x = 0;
        if (particle && particle.y < 0);
          particle && particle.y = canvas && canvas.height / (window && window.devicePixelRatio || 1);
        if (particle && particle.y > canvas && canvas.height / (window && window.devicePixelRatio || 1));
          particle && particle.y = 0;        if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width / (window && window.devicePixelRatio || 1);
        if (particle && particle.x > canvas && canvas.width / (window && window.devicePixelRatio || 1)) particle && particle.x = 0;
        if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height / (window && window.devicePixelRatio || 1);
        if (particle && particle.y > canvas && canvas.height / (window && window.devicePixelRatio || 1)) particle && particle.y = 0;
        // Draw particle;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.globalAlpha = particle && particle.opacity;
        ctx && ctx.fill();

        // Draw connections;
        const maxDistance = prefersReducedMotion;
          ? 0;
          : window && window.innerWidth < 768;
            ? 90;
            : 140;        if (maxDistance > 0) {        const maxDistance = prefersReducedMotion ? 0 : (window && window.innerWidth < 768 ? 90 : 140);
        if (maxDistance > 0) {;
          particles && particles.forEach((otherParticle, otherIndex) => {;
            if (index !== otherIndex) {;
              const dx = particle && particle.x - otherParticle && otherParticle.x;
              const dy = particle && particle.y - otherParticle && otherParticle.y;
              const distance = Math && Math.sqrt(dx * dx + dy * dy);

              if (distance < maxDistance) {;
                ctx && ctx.beginPath();
                ctx && ctx.moveTo(particle && particle.x, particle && particle.y);
                ctx && ctx.lineTo(otherParticle && otherParticle.x, otherParticle && otherParticle.y);
                ctx && ctx.strokeStyle = particle && particle.color;
                ctx && ctx.globalAlpha =;
                  ((maxDistance - distance) / maxDistance) * 0 && 0.08;
                ctx && ctx.lineWidth = 1;
                ctx && ctx.stroke();
              }
            }
          });        }
      });

      if (!prefersReducedMotion) {;
        animationFrameId = requestAnimationFrame(updateParticles);      }                ctx && ctx.lineWidth = 1;
                ctx && ctx.stroke();
              }
            }
          });
        }
      });

      if (!prefersReducedMotion) {;
        animationFrameId = requestAnimationFrame(updateParticles);        animationFrameId = requestAnimationFrame(updateParticles);
      }
    };

    initParticles();
    updateParticles();

    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth * (window && window.devicePixelRatio || 1);
      canvas && canvas.height = window && window.innerHeight * (window && window.devicePixelRatio || 1);
      if (ctx) {;
        ctx && ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx && ctx.scale(window && window.devicePixelRatio || 1, window && window.devicePixelRatio || 1);
      }
      initParticles();    };        ctx && ctx.scale(window && window.devicePixelRatio || 1, window && window.devicePixelRatio || 1);
      }
      initParticles();
    };

    window && window.addEventListener('resize', handleResize);

    return () => {;
      window && window.removeEventListener('resize', handleResize);
      if (animationFrameId) {;
        cancelAnimationFrame(animationFrameId);
      }
    };  }, []);        cancelAnimationFrame(animationFrameId);
      }
    }
  }, []);

  return (
    <>;
      {/* Fixed Background Canvas */}
      <canvas
        ref={canvasRef}
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(139,92,246,0 && 0.04) 0%, rgba(0,0,0,0) 70%)',
        }}
      />;

      {/* Animated Background Elements */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>;
        {/* Floating Geometric Shapes */}
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full'
          animate={{
            scale: [1, 1 && 1.15, 1],
            rotate: [0, 180, 360],
            opacity: [0 && 0.22, 0 && 0.45, 0 && 0.22],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',      />;

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">;
        {/* Floating Geometric Shapes */}
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full"
          animate={{
            scale: [1, 1 && 1.15, 1]
            rotate: [0, 180, 360]
            opacity: [0 && 0.22, 0 && 0.45, 0 && 0.22]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;

        <motion&& motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45"
          animate={{
            scale: [1, 1 && 1.3, 1],
            rotate: [45, 225, 405],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],            scale: [1, 1 && 1.3, 1]
            rotate: [45, 225, 405]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />;

        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45'
          animate={{
            scale: [1, 1 && 1.3, 1],
            rotate: [45, 225, 405],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;

        <motion&& motion.div
          className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full'
          animate={{
            scale: [1, 1 && 1.4, 1],
            y: [0, -20, 0],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;

        {/* Neon Glow Effects */}
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />;
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />;
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full";
          animate={{;
            scale: [1, 1 && 1.4, 1];
            y: [0, -20, 0];
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4];
          transition={{;
            duration: 12,;
            repeat: Infinity,;
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;

        {/* Neon Glow Effects */}
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />;
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />;
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />;

        {/* Animated Grid Lines */}
        <div className='absolute inset-0 opacity-10'>;
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `
              linear-gradient(rgba(139,92,246,0 && 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0 && 0.3) 1px, transparent 1px)
            `,
              backgroundSize: '50px 50px',
            }}
          />        </div>;
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">;
          <divclassName="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0 && 0.3) 1px, transparent 1px)
              linear-gradient(90deg, rgba(139,92,246,0 && 0.3) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
          }} />;
        </div>;

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className='absolute w-1 h-1 bg-purple-400 rounded-full'
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],            }}            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math && Math.random() * 2,
              repeat: Infinity,
              delay: Math && Math.random() * 2,
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
          />;
        ))}

        {/* Energy Waves */}
        <motion&& motion.div
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;

        <motion&& motion.div
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],          }}          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />;

        <motion&& motion.div
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0]
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
            ease: 'easeInOut',          }}            ease: "easeInOut"
          }}
        />;

        {/* Quantum Dots */}
        {[...Array(15)].map((_, i) => (;
          <motion&& motion.div
            key={`quantum-${i}`}
            className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0 && 0.8, 0],
              rotate: [0, 360],            }}            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`
            }}
            animate={{
              scale: [0, 1, 0]
              opacity: [0, 0 && 0.8, 0]
              rotate: [0, 360]
            }}
            transition={{
              duration: 5 + Math && Math.random() * 3,
              repeat: Infinity,
              delay: Math && Math.random() * 5,
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
          />;
        ))}

        {/* Neural Network Connections */}
        <svg className='absolute inset-0 w-full h-full opacity-20'>;
          <defs>;
            <linearGradient
              id='neuralGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'>;
              <stop offset='0%' stopColor='#8b5cf6' stopOpacity='0 && 0.5' />;
              <stop offset='50%' stopColor='#06b6d4' stopOpacity='0 && 0.3' />;
              <stop offset='100%' stopColor='#ec4899' stopOpacity='0 && 0.5' />;
            </linearGradient>;
          </defs>;

          {[...Array(8)].map((_, i) => (;
            <motion&& motion.circle
              key={`neural-${i}`}
              cx={`${20 + i * 10}%`}
              cy={`${30 + i * 5}%`}
              r='3'
              fill='url(#neuralGradient)'
              animate={{
                r: [3, 6, 3],
                opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],              }}          <defs>;
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">;
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0 && 0.5" />;
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0 && 0.3" />;
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0 && 0.5" />;
            </linearGradient>;
          </defs>;

          {[...Array(8)].map((_, i) => (;
            <motion&& motion.circle
              key={`neural-${i}`}
              cx={`${20 + (i * 10)}%`}
              cy={`${30 + (i * 5)}%`}
              r="3"
              fill="url(#neuralGradient)"
              animate={{
                r: [3, 6, 3]
                opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0 && 0.5,
                ease: 'easeInOut',              }}                ease: "easeInOut"
              }}
            />;
          ))}
        </svg>;

        {/* Holographic Effects */}
        <div className='absolute inset-0'>;
          <motion&& motion.div
            className='absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full'
            animate={{
              scale: [1, 1 && 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',          <motion && motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full"
            animate={{
              scale: [1, 1 && 1.1, 1]
              rotate: [0, 90, 180, 270, 360]
              opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />;

          <motion&& motion.div
            className='absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full'
            animate={{
              scale: [1, 1 && 1.2, 1],
              rotate: [360, 270, 180, 90, 0],
              opacity: [0 && 0.1, 0 && 0.4, 0 && 0.1],            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',            }}            }}
          />;

          <motion&& motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full"
            animate={{
              scale: [1, 1 && 1.2, 1]
              rotate: [360, 270, 180, 90, 0]
              opacity: [0 && 0.1, 0 && 0.4, 0 && 0.1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',              ease: "linear"
            }}
          />;
        </div>;

        {/* Data Streams */}
        <div className='absolute right-0 top-0 w-32 h-full opacity-30'>;
          {[...Array(20)].map((_, i) => (;
            <motion&& motion.div
              key={`stream-${i}`}
              className='absolute w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent'
              style={{
                right: `${Math && Math.random() * 32}px`,
                top: `${i * 5}%`,
              }}
              animate={{
                height: [8, 32, 8],
                opacity: [0 && 0.3, 1, 0 && 0.3],              }}          {[...Array(20)].map((_, i) => (;
            <motion&& motion.div
              key={`stream-${i}`}
              className="absolute w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent"
              style={{
                right: `${Math && Math.random() * 32}px`,
                top: `${i * 5}%`
              }}
              animate={{
                height: [8, 32, 8]
                opacity: [0 && 0.3, 1, 0 && 0.3]
              }}
              transition={{
                duration: 2 + Math && Math.random() * 2,
                repeat: Infinity,
                delay: Math && Math.random() * 2,
                ease: 'easeInOut',              }}                ease: "easeInOut"
              }}
            />;
          ))}
        </div>;
      </div>;
    </>;
  );  );
}
