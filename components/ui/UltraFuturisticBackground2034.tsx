<<<<<<< HEAD
"use client";
import React{ useEffectuseRef } from 'react';
=======
import React, { useEffect, useRef } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
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
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
<<<<<<< HEAD
    window.addEventListener(', 'resize', 'resizeCanvas);
=======
    window.addEventListener('resize', resizeCanvas);
>>>>>>> origin/auto/autonomy-17186719616

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

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
<<<<<<< HEAD
        this.color = `hsl(${Math.random() * 60 + 180}70%60%)`;
=======
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
>>>>>>> origin/auto/autonomy-17186719616
        this.alpha = Math.random() * 0.5 + 0.3;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
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
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha * (this.life / this.maxLife);
        ctx.fillStyle = this.color;
        ctx.beginPath();
<<<<<<< HEAD
        ctx.arc(this.xthis.ythis.size0Math.PI * 2);
=======
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
>>>>>>> origin/auto/autonomy-17186719616
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas with gradient
<<<<<<< HEAD
      const gradient = ctx.createLinearGradient(00canvas.height);
      gradient.addColorStop(0'rgba(00.1)');
      gradient.addColorStop(1'rgba(00.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0canvas.widthcanvas.height);
=======
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
>>>>>>> origin/auto/autonomy-17186719616

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connecting lines
<<<<<<< HEAD
      ctx.strokeStyle = 'rgba(02550.1)';
=======
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
>>>>>>> origin/auto/autonomy-17186719616
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
<<<<<<< HEAD
            ctx.moveTo(particles[i].xparticles[i].y);
            ctx.lineTo(particles[j].xparticles[j].y);
=======
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
>>>>>>> origin/auto/autonomy-17186719616
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
<<<<<<< HEAD
      window.removeEventListener(', 'resize', 'resizeCanvas);
    };
  }[]);
=======
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
<<<<<<< HEAD
        style={{ background: 'radial-gradient(ellipse at centergba(00) 0%rgba(00.8) 100%)' }}
=======
        style={{ background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)' }}
>>>>>>> origin/auto/autonomy-17186719616
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
<<<<<<< HEAD
            linear-gradient(rgba(02550.1) 1pxtransparent 1px),
            linear-gradient(90degrgba(02550.1) 1pxtransparent 1px)
=======
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
>>>>>>> origin/auto/autonomy-17186719616
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full"
        animate={{
          rotate: 360,
<<<<<<< HEAD
          scale: [1.21],
          opacity: [0.30.60.3]
        }}
        transition={{

=======
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
>>>>>>> origin/auto/autonomy-17186719616
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 transform rotate-45"
        animate={{
          rotate: -360,
<<<<<<< HEAD
          scale: [1.31],
          opacity: [0.20.50.2]
=======
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
>>>>>>> origin/auto/autonomy-17186719616
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
<<<<<<< HEAD

        }}
      />
=======
        }}
      />

>>>>>>> origin/auto/autonomy-17186719616
      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 rounded-lg"
        animate={{
          rotate: 360,
<<<<<<< HEAD
          scale: [1.41],
          opacity: [0.40.70.4]
=======
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.7, 0.4]
>>>>>>> origin/auto/autonomy-17186719616
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Energy Orbs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"
        animate={{
<<<<<<< HEAD
          y: [0-20],
          scale: [1.21],
          opacity: [0.30.80.3]
=======
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3]
>>>>>>> origin/auto/autonomy-17186719616
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm"
        animate={{
<<<<<<< HEAD
          y: [0150],
          scale: [1.31],
          opacity: [0.40.90.4]
=======
          y: [0, 15, 0],
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.9, 0.4]
>>>>>>> origin/auto/autonomy-17186719616
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Quantum Field Lines */}
      <div className="absolute inset-0">
<<<<<<< HEAD
        {[...Array(8)].map((_i) => (
=======
        {[...Array(8)].map((_, i) => (
>>>>>>> origin/auto/autonomy-17186719616
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
            style={{
              left: `${(i + 1) * 12.5}%`,
              top: '20%'
            }}
            animate={{
<<<<<<< HEAD
              height: [326432],
              opacity: [0.20.60.2]
=======
              height: [32, 64, 32],
              opacity: [0.2, 0.6, 0.2]
>>>>>>> origin/auto/autonomy-17186719616
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      {/* Holographic Rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full"
        animate={{
          rotate: 360,
<<<<<<< HEAD
          scale: [1.1],
          opacity: [0.10.30.1]
=======
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1]
>>>>>>> origin/auto/autonomy-17186719616
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-400/20 rounded-full"
        animate={{
          rotate: -360,
<<<<<<< HEAD
          scale: [1.21],
          opacity: [0.150.350.15]
=======
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15]
>>>>>>> origin/auto/autonomy-17186719616
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Neural Network Nodes */}
      <div className="absolute inset-0">
<<<<<<< HEAD
        {[...Array(12)].map((_i) => (
=======
        {[...Array(12)].map((_, i) => (
>>>>>>> origin/auto/autonomy-17186719616
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-green-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
<<<<<<< HEAD
              scale: [1.51],
              opacity: [0.30.80.3]
=======
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
>>>>>>> origin/auto/autonomy-17186719616
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Data Streams */}
      <div className="absolute inset-0 overflow-hidden">
<<<<<<< HEAD
        {[...Array(6)].map((_i) => (
=======
        {[...Array(6)].map((_, i) => (
>>>>>>> origin/auto/autonomy-17186719616
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"
            style={{
              left: `${(i + 1) * 16.66}%`,
              top: '-20px'
            }}
            animate={{
<<<<<<< HEAD
              y: [0window.innerHeight + 20],
              opacity: [010]
=======
              y: [0, window.innerHeight + 20],
              opacity: [0, 1, 0]
>>>>>>> origin/auto/autonomy-17186719616
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
      </div>

      {/* Quantum Entanglement Effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          boxShadow: [
<<<<<<< HEAD
            '0 0 10px rgba(02550.5)',
            '0 0 30px rgba(02550.8)',
            '0 0 10px rgba(02550.5)'
=======
            '0 0 10px rgba(0, 255, 255, 0.5)',
            '0 0 30px rgba(0, 255, 255, 0.8)',
            '0 0 10px rgba(0, 255, 255, 0.5)'
>>>>>>> origin/auto/autonomy-17186719616
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          boxShadow: [
<<<<<<< HEAD
            '0 0 10px rgba(02550.5)',
            '0 0 30px rgba(02550.8)',
            '0 0 10px rgba(02550.5)'
          ]
        }}
        transition={{

=======
            '0 0 10px rgba(0, 255, 255, 0.5)',
            '0 0 30px rgba(0, 255, 255, 0.8)',
            '0 0 10px rgba(0, 255, 255, 0.5)'
          ]
        }}
        transition={{
>>>>>>> origin/auto/autonomy-17186719616
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Metaverse Portal Effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400/30 rounded-full"
        animate={{
          rotate: 360,
<<<<<<< HEAD
          scale: [1.051],
          opacity: [0.050.150.05]
=======
          scale: [1, 1.05, 1],
          opacity: [0.05, 0.15, 0.05]
>>>>>>> origin/auto/autonomy-17186719616
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* AI Consciousness Waves */}
      <div className="absolute inset-0">
<<<<<<< HEAD
        {[...Array(5)].map((_i) => (
=======
        {[...Array(5)].map((_, i) => (
>>>>>>> origin/auto/autonomy-17186719616
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-pink-400/20 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`
            }}
            animate={{
<<<<<<< HEAD
              scale: [0.81.20.8],
              opacity: [0.10.30.1]
=======
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1]
>>>>>>> origin/auto/autonomy-17186719616
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2034;