import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
<<<<<<< HEAD
      canvas.height = window.innerHeight;
=======
      canvas.height = window.innerHeight
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
<<<<<<< HEAD
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
      maxLife: number;

=======
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,
      life: number,
      maxLife: number,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
        this.alpha = Math.random() * 0.5 + 0.3;
        this.life = Math.random() * 100 + 50;
<<<<<<< HEAD
        this.maxLife = this.life;
=======
        this.maxLife = this.life
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
<<<<<<< HEAD
          this.y = Math.random() * canvas.height;
=======
          this.y = Math.random() * canvas.height
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
<<<<<<< HEAD
        ctx.restore();
=======
        ctx.restore()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }
    }

    // Create particles
    const particles: Particle[] = [];
<<<<<<< HEAD
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
=======
    for (let i = 0, i < 100, i++) {
      particles.push(new Particle())
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
<<<<<<< HEAD

=======
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
<<<<<<< HEAD
        particle.draw();
=======
        particle.draw()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      });

      // Draw connecting lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

=======
      
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
<<<<<<< HEAD
            ctx.stroke();
=======
            ctx.stroke()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }
        }
      }

<<<<<<< HEAD
      requestAnimationFrame(animate);
=======
      requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    };

    animate();

    return () => {
<<<<<<< HEAD
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
        />
=======
      window.removeEventListener('resize', resizeCanvas)
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)' }}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `;
          backgroundSize: '50px 50px'
        }} />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
<<<<<<< HEAD
        className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full'
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
=======
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1];
          opacity: [0.3, 0.6, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'linear',
=======
          ease: "linear"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
      />

      <motion.div
<<<<<<< HEAD
        className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 transform rotate-45'
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
=======
        className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 transform rotate-45"
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1];
          opacity: [0.2, 0.5, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'linear',
=======
          ease: "linear"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
      />

      <motion.div
<<<<<<< HEAD
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 rounded-lg'
        animate={{
          rotate: 360,
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.7, 0.4],
=======
        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 rounded-lg"
        animate={{
          rotate: 360,
          scale: [1, 1.4, 1];
          opacity: [0.4, 0.7, 0.4]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'linear',
=======
          ease: "linear"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
      />

      {/* Energy Orbs */}
      <motion.div
<<<<<<< HEAD
        className='absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm'
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3],
=======
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"
        animate={{
          y: [0, -20, 0];
          scale: [1, 1.2, 1];
          opacity: [0.3, 0.8, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'easeInOut',
=======
          ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
      />

      <motion.div
<<<<<<< HEAD
        className='absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm'
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.9, 0.4],
=======
        className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm"
        animate={{
          y: [0, 15, 0];
          scale: [1, 1.3, 1];
          opacity: [0.4, 0.9, 0.4]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'easeInOut',
          delay: 1,
=======
          ease: "easeInOut",
          delay: 1
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
      />

      {/* Quantum Field Lines */}
<<<<<<< HEAD
      <div className='absolute inset-0'>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent'
            style={{
              left: `${(i + 1) * 12.5}%`,
              top: '20%',
            }}
            animate={{
              height: [32, 64, 32],
              opacity: [0.2, 0.6, 0.2],
=======
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
            style={{
              left: `${(i + 1) * 12.5}%`,
              top: '20%'
            }}
            animate={{
              height: [32, 64, 32];
              opacity: [0.2, 0.6, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
<<<<<<< HEAD
              ease: 'easeInOut',
              delay: i * 0.2,
=======
              ease: "easeInOut",
              delay: i * 0.2
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            }}
          />
        ))}
      </div>

      {/* Holographic Rings */}
      <motion.div
<<<<<<< HEAD
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full'
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
=======
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1];
          opacity: [0.1, 0.3, 0.1]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'linear',
=======
          ease: "linear"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
      />

      <motion.div
<<<<<<< HEAD
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-400/20 rounded-full'
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
=======
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-400/20 rounded-full"
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1];
          opacity: [0.15, 0.35, 0.15]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'linear',
=======
          ease: "linear"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
      />

      {/* Neural Network Nodes */}
<<<<<<< HEAD
      <div className='absolute inset-0'>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-3 h-3 bg-green-400 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
=======
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-green-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [1, 1.5, 1];
              opacity: [0.3, 0.8, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
<<<<<<< HEAD
              ease: 'easeInOut',
              delay: Math.random() * 2,
=======
              ease: "easeInOut",
              delay: Math.random() * 2
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            }}
          />
        ))}
      </div>

      {/* Data Streams */}
<<<<<<< HEAD
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
              opacity: [0, 1, 0],
=======
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"
            style={{
              left: `${(i + 1) * 16.66}%`,
              top: '-20px'
            }}
            animate={{
              y: [0, window.innerHeight + 20];
              opacity: [0, 1, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
<<<<<<< HEAD
              ease: 'linear',
              delay: i * 1.5,
=======
              ease: "linear",
              delay: i * 1.5
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            }}
          />
        ))}
      </div>

      {/* Quantum Entanglement Effect */}
      <motion.div
<<<<<<< HEAD
        className='absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full'
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0.5)',
            '0 0 30px rgba(0, 255, 255, 0.8)',
            '0 0 10px rgba(0, 255, 255, 0.5)',
          ],
=======
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0.5)0 0 30px rgba(0, 255, 255, 0.8)0 0 10px rgba(0, 255, 255, 0.5)'
          ]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'easeInOut',
=======
          ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
      />

      <motion.div
<<<<<<< HEAD
        className='absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full'
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0.5)',
            '0 0 30px rgba(0, 255, 255, 0.8)',
            '0 0 10px rgba(0, 255, 255, 0.5)',
          ],
=======
        className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0.5)0 0 30px rgba(0, 255, 255, 0.8)0 0 10px rgba(0, 255, 255, 0.5)'
          ]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'easeInOut',
          delay: 1,
=======
          ease: "easeInOut",
          delay: 1
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
      />

      {/* Metaverse Portal Effect */}
      <motion.div
<<<<<<< HEAD
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400/30 rounded-full'
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
          opacity: [0.05, 0.15, 0.05],
=======
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400/30 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1];
          opacity: [0.05, 0.15, 0.05]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'linear',
=======
          ease: "linear"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
      />

      {/* AI Consciousness Waves */}
<<<<<<< HEAD
      <div className='absolute inset-0'>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-pink-400/20 rounded-full'
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
=======
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-pink-400/20 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`
            }}
            animate={{
              scale: [0.8, 1.2, 0.8];
              opacity: [0.1, 0.3, 0.1]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
<<<<<<< HEAD
              ease: 'easeInOut',
              delay: i * 0.8,
=======
              ease: "easeInOut",
              delay: i * 0.8
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            }}
          />
        ))}
      </div>
    </div>
<<<<<<< HEAD
  );
};

export default UltraFuturisticBackground2034;
=======
  )
};

export default UltraFuturisticBackground2034;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
