import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const FuturisticAnimatedBackground: React.FC = () => {
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
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.opacity += (Math.random() - 0.5) * 0.02;
        this.opacity = Math.max(0.1, Math.min(0.8, this.opacity));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Grid system
    class Grid {
      spacing: number;
      opacity: number;

      constructor() {
        this.spacing = 50;
        this.opacity = 0.1;
      }

      draw() {
        ctx.save();
        ctx.strokeStyle = '#22ddd2';
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = 0.5;

        // Vertical lines
        for (let x = 0; x < canvas.width; x += this.spacing) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }

        // Horizontal lines
        for (let y = 0; y < canvas.height; y += this.spacing) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    // Create particles and grid
    const particles: Particle[] = Array.from({ length: 100 }, () => new Particle());
    const grid = new Grid();

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      grid.draw();

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      ctx.save();
      ctx.strokeStyle = '#22ddd2';
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />

      {/* Animated geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-40 right-32 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-500/20 border border-purple-400/30"
          animate={{
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/3 w-28 h-28 rounded-full bg-gradient-to-r from-green-400/20 to-teal-500/20 border border-green-400/30"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Geometric lines */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent"
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Hexagon patterns */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-16 h-16 border border-cyan-400/20 transform rotate-45" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-1/3"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-12 h-12 border border-purple-400/20 transform rotate-45" />
        </motion.div>

        {/* Pulse rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          <div className="w-4 h-4 rounded-full border border-cyan-400/40" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5
          }}
        >
          <div className="w-4 h-4 rounded-full border border-purple-400/40" />
        </motion.div>

        {/* Floating triangles */}
        <motion.div
          className="absolute top-20 right-20"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-cyan-400/30" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-32"
          animate={{
            y: [0, 15, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-purple-400/30" />
        </motion.div>

        {/* Data streams */}
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-cyan-400/60 to-transparent"
              style={{
                left: `${(i * 12.5) + 6.25}%`,
                top: '-20px'
              }}
              animate={{
                y: [0, window.innerHeight + 20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        {/* Energy waves */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-32"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 Q300,30 600,60 T1200,60 L1200,120 L0,120 Z"
              fill="url(#waveGradient)"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22ddd2" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#8c15e9" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#22ddd2" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Overlay gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 pointer-events-none z-0" />
    </>
  );
};