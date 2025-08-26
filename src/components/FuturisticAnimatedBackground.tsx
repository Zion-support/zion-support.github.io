import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const FuturisticAnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number>();

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
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
        this.life = Math.random() * 100;
        this.maxLife = 100;
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
        ctx.globalAlpha = this.opacity * (this.life / this.maxLife);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particlesRef.current.push(new Particle());
    }

    // Grid system
    const gridSize = 50;
    const gridPoints: { x: number; y: number; opacity: number }[] = [];

    for (let x = 0; x < canvas.width; x += gridSize) {
      for (let y = 0; y < canvas.height; y += gridSize) {
        gridPoints.push({
          x,
          y,
          opacity: Math.random() * 0.3 + 0.1
        });
      }
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(23, 7, 43, 0.1)');
      gradient.addColorStop(0.5, 'rgba(69, 21, 130, 0.1)');
      gradient.addColorStop(1, 'rgba(34, 132, 130, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = 'rgba(34, 221, 210, 0.1)';
      ctx.lineWidth = 0.5;
      ctx.shadowColor = 'rgba(34, 221, 210, 0.3)';
      ctx.shadowBlur = 5;

      gridPoints.forEach(point => {
        ctx.globalAlpha = point.opacity;
        ctx.beginPath();
        ctx.moveTo(point.x, 0);
        ctx.lineTo(point.x, canvas.height);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, point.y);
        ctx.lineTo(canvas.width, point.y);
        ctx.stroke();
      });

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw floating orbs
      const time = Date.now() * 0.001;
      for (let i = 0; i < 5; i++) {
        const x = Math.sin(time + i) * 200 + canvas.width / 2;
        const y = Math.cos(time + i * 0.7) * 150 + canvas.height / 2;
        const size = Math.sin(time + i) * 20 + 40;
        const opacity = Math.sin(time + i) * 0.3 + 0.1;

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = 'rgba(34, 221, 210, 0.1)';
        ctx.shadowColor = 'rgba(34, 221, 210, 0.5)';
        ctx.shadowBlur = 30;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw energy waves
      for (let i = 0; i < 3; i++) {
        const waveTime = time + i * 2;
        const waveRadius = (waveTime * 50) % 300;
        const waveOpacity = Math.max(0, 1 - (waveRadius / 300));

        ctx.save();
        ctx.globalAlpha = waveOpacity * 0.3;
        ctx.strokeStyle = 'rgba(34, 221, 210, 0.5)';
        ctx.lineWidth = 2;
        ctx.shadowColor = 'rgba(34, 221, 210, 0.8)';
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, waveRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark/80 via-zion-slate/60 to-zion-slate-light/80" />
      
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border border-zion-purple/20 rounded-full"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 border border-zion-cyan/20 transform rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating tech icons */}
      <motion.div
        className="absolute top-1/3 right-1/4 text-zion-cyan/20 text-4xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ⚡
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3 text-zion-purple/20 text-3xl"
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🔮
      </motion.div>

      {/* Canvas for particle system */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />

      {/* Additional neon glow effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-cyan/30 to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-zion-purple/30 to-transparent"
          animate={{
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }} />
      </div>
    </div>
  );
};