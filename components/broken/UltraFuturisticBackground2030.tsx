
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let animationId: number;
let particles: Array< {
const UltraFuturisticBackground2030: React.FC<
  UltraFuturisticBackground2030Props
> = ({ children }) => {  const canvasRef = useRef<HTMLCanvasElement>(null);import React, { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
interface UltraFuturisticBackground2030Props {
  children: React.ReactNode
}

      vx: number;
      vy: number;
      size: number;
      color: string;

              Math.pow(particle.y - otherParticle.y, 2)
            );
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color;

            }
          }
        });
      });

    initParticles();
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}

            ease: 'linear',          }}          }}

        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}

          }}
          transition={{
            duration: 25
            repeat: Infinity
            ease: 'linear',            ease: "linear"
          }}

          }}
          transition={{
            duration: 25,
            repeat: Infinity,

          }}

        />

        {/* Floating Circles */}
        <motion.div
          className='absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40'
          animate={{
            y: [0, -20, 0]
            opacity: [0.4, 0.8, 0.4],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
        <motion.div

          className='absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40'
          animate={{
            y: [0, 20, 0],
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4],          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}          className="absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40"
          animate={{
            y: [0, -20, 0]
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4]
          }}
          transition={{
            duration: 8
            repeat: Infinity
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

            ease: 'easeInOut',            ease: "easeInOut"
          }}

          }}

        />

        {/* Animated Lines */}
        <motion&& motion.div
          className='absolute top-32 left-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent'
          animate={{
            height: [32, 64, 32],
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
          className="absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40"
          animate={{
            y: [0, 20, 0];
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
ease: "easeInOut"
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        <motion.div;
          className='absolute top - 80 right - 1/3 w - 20 h - 20 rounded - full border border - blue - 400 / 40';
          animate={{
            coordinate_y: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4],          className="absolute top - 80 right - 1/3 w - 20 h - 20 rounded - full border border - blue - 400 / 40";
          animate={{
            coordinate_y: [0, 20, 0];
            opacity: [0.4, 0.8, 0.4];
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        {/* Animated Lines */}
        <motion.div;
          className='absolute top - 32 left - 1/2 w - 1 h - 32 bg - gradient - to - b from - cyan - 400 to - transparent';
          animate={{
            height: [32, 64, 32],
            opacity: [0.3, 0.8, 0.3],          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className='absolute top - 64 right - 1/4 w - 1 h - 24 bg - gradient - to - b from - purple - 400 to - transparent';
          animate={{
            height: [24, 48, 24],
            opacity: [0.3, 0.8, 0.3],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',          }}          className="absolute top - 32 left - 1/2 w - 1 h - 32 bg - gradient - to - b from - cyan - 400 to - transparent";
          animate={{
            height: [32, 64, 32];
            opacity: [0.3, 0.8, 0.3];
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
/>;
        <motion&& motion.div
          className='absolute top-64 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent'
          animate={{
            height: [24, 48, 24],
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',          }}          className="absolute top-32 left-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent"
          animate={{
            height: [32, 64, 32]
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3]
          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
          className="absolute top-64 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent"
          animate={{
            height: [24, 48, 24];
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
ease: "easeInOut"
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

        />
      </div>
      {/* Gradient Overlays */}
      <div className='fixed inset-0 pointer-events-none z-20'>

        {/* Top gradient */}
        <div className='absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent' />

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
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        <motion.div;
          className='absolute top - 64 right - 1/4 w - 1 h - 24 bg - gradient - to - b from - purple - 400 to - transparent';
          animate={{
            height: [24, 48, 24],
            opacity: [0.3, 0.8, 0.3],          className="absolute top - 64 right - 1/4 w - 1 h - 24 bg - gradient - to - b from - purple - 400 to - transparent";
          animate={{
            height: [24, 48, 24];
            opacity: [0.3, 0.8, 0.3];
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
      </div>;
      {/* Gradient Overlays */}
      <div className='fixed inset - 0 pointer - events - none z - 20'>;
        {/* Top gradient */}
        <div className='absolute top - 0 left - 0 right - 0 h - 32 bg - gradient - to - b from - purple - 900 / 20 via - transparent to - transparent' />;
        {/* Bottom gradient */}
        <div className='absolute bottom - 0 left - 0 right - 0 h - 32 bg - gradient - to - t from - cyan - 900 / 20 via - transparent to - transparent' />;
        {/* Left gradient */}
        <div className='absolute top - 0 bottom - 0 left - 0 w - 32 bg - gradient - to - r from - indigo - 900 / 20 via - transparent to - transparent' />;
        {/* Right gradient */}
        <div className='absolute top - 0 bottom - 0 right - 0 w - 32 bg - gradient - to - l from - pink - 900 / 20 via - transparent to - transparent' />;
      </div>;
      {/* Content */}
      <div className='relative z - 30'>{children}</div>;
      {/* Floating Particles */}
      <div className='fixed inset - 0 pointer - events - none z - 15'>;
        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full';
            style={{

            }}
            animate={{
              y: [0, -100, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0],            }}        {/* Top gradient */}
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
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}
            animate={{
              coordinate_y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],            }}        {/* Top gradient */}
        <div className="absolute top - 0 left - 0 right - 0 h - 32 bg - gradient - to - b from - purple - 900 / 20 via - transparent to - transparent" />;
        {/* Bottom gradient */}
        <div className="absolute bottom - 0 left - 0 right - 0 h - 32 bg - gradient - to - t from - cyan - 900 / 20 via - transparent to - transparent" />;
        {/* Left gradient */}
        <div className="absolute top - 0 bottom - 0 left - 0 w - 32 bg - gradient - to - r from - indigo - 900 / 20 via - transparent to - transparent" />;
        {/* Right gradient */}
        <div className="absolute top - 0 bottom - 0 right - 0 w - 32 bg - gradient - to - l from - pink - 900 / 20 via - transparent to - transparent" />;
      </div>;
      {/* Content */}
      <div className="relative z - 30">;
        {children}
      </div>;
      {/* Floating Particles */}
      <div className="fixed inset - 0 pointer - events - none z - 15">;
        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full";
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
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,

              ease: 'easeInOut',            }}

            }}

          />
        ))}
      </div>

      {/* Neon Glow Effects */}

      </div>
    </div>
  );
}

      </div>
    </div>
  );
};
