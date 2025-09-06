<<<<<<< HEAD
<<<<<<< HEAD
 canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let animationId: number;
let particles: Array< {
  

const UltraFuturisticBackground2030: React.FC<
  UltraFuturisticBackground2030Props
> = ({ children }) => {
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2030Props {
  children: React.ReactNode
}

const UltraFuturisticBackground2030: React.FC<UltraFuturisticBackground2030Props> = ({ children }) => {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2030Props {
  children: React.ReactNode
}

const UltraFuturisticBackground2030: React.FC<UltraFuturisticBackground2030Props> = ({ children }) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

<<<<<<< HEAD
<<<<<<< HEAD
    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
=======
    let animationId: number,
    let particles: Array<{
=======
    let animationId: number,
    let particles: Array<{
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
<<<<<<< HEAD
<<<<<<< HEAD
      for (let i = 0; i < 150; i++) {
=======
      for (let i = 0, i < 150, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      for (let i = 0, i < 150, i++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
<<<<<<< HEAD
<<<<<<< HEAD
          color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][
            Math.floor(Math.random() * 5)
          ],
          opacity: Math.random() * 0.8 + 0.2,
        });
=======
          color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)],
          opacity: Math.random() * 0.8 + 0.2
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)],
          opacity: Math.random() * 0.8 + 0.2
        })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
<<<<<<< HEAD
<<<<<<< HEAD
              Math.pow(particle.x - otherParticle.x, 2) +
                Math.pow(particle.y - otherParticle.y, 2)
=======
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            );
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color;
<<<<<<< HEAD
<<<<<<< HEAD
              ctx.globalAlpha = ((100 - distance) / 100) * 0.3;
=======
              ctx.globalAlpha = (100 - distance) / 100 * 0.3;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              ctx.lineWidth = 0.5;
              ctx.stroke()
            }
          }
        })
      });

      ctx.globalAlpha = 1;
<<<<<<< HEAD
      animationId = requestAnimationFrame(animate);
=======
              ctx.globalAlpha = (100 - distance) / 100 * 0.3;
              ctx.lineWidth = 0.5;
              ctx.stroke()
            }
          }
        })
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      animationId = requestAnimationFrame(animate)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    initParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
<<<<<<< HEAD
<<<<<<< HEAD
      initParticles();
=======
      initParticles()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      initParticles()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
<<<<<<< HEAD
<<<<<<< HEAD
      window.removeEventListener('resize', handleResize);
    };
=======
      window.removeEventListener('resize', handleResize)
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Hexagon Grid */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{
            rotate: 360,
<<<<<<< HEAD
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
=======
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Hexagon Grid */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1];
            opacity: [0.3, 0.6, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            scale: [1, 1.1, 1];
            opacity: [0.3, 0.6, 0.3]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{
            rotate: -360,
<<<<<<< HEAD
            scale: [1, 0.9, 1],
            opacity: [0.3, 0.6, 0.3],
=======
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1];
            opacity: [0.3, 0.6, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            scale: [1, 0.9, 1];
            opacity: [0.3, 0.6, 0.3]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />

        {/* Floating Circles */}
        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40'
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
=======
          className="absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40"
          animate={{
            y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40"
          animate={{
            y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />

        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40'
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4],
=======
          className="absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40"
          animate={{
            y: [0, 20, 0];
            opacity: [0.4, 0.8, 0.4]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40"
          animate={{
            y: [0, 20, 0];
            opacity: [0.4, 0.8, 0.4]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />

        {/* Animated Lines */}
        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute top-32 left-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent'
          animate={{
            height: [32, 64, 32],
            opacity: [0.3, 0.8, 0.3],
=======
          className="absolute top-32 left-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent"
          animate={{
            height: [32, 64, 32];
            opacity: [0.3, 0.8, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute top-32 left-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent"
          animate={{
            height: [32, 64, 32];
            opacity: [0.3, 0.8, 0.3]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />

        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute top-64 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent'
          animate={{
            height: [24, 48, 24],
            opacity: [0.3, 0.8, 0.3],
=======
          className="absolute top-64 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent"
          animate={{
            height: [24, 48, 24];
            opacity: [0.3, 0.8, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute top-64 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent"
          animate={{
            height: [24, 48, 24];
            opacity: [0.3, 0.8, 0.3]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
      </div>

      {/* Gradient Overlays */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='fixed inset-0 pointer-events-none z-20'>
=======
      <div className="fixed inset-0 pointer-events-none z-20">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
<<<<<<< HEAD
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
=======
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              y: [0, -100, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
<<<<<<< HEAD
<<<<<<< HEAD
              ease: 'easeInOut',
=======
              ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
          />
        ))}
      </div>

      {/* Neon Glow Effects */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='fixed inset-0 pointer-events-none z-25'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl' />
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl' />
=======
      <div className="fixed inset-0 pointer-events-none z-25">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </div>
    </div>
  )
};

<<<<<<< HEAD
export default UltraFuturisticBackground2030;
=======
      <div className="fixed inset-0 pointer-events-none z-25">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />
      </div>
    </div>
  )
};

export default UltraFuturisticBackground2030;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default UltraFuturisticBackground2030;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
