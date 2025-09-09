import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface GridPoint {
  x: number;
  y: number;
  opacity: number;
  pulse: number;
}

export function FuturisticAnimatedBackground2026() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const gridPointsRef = useRef<GridPoint[]>([]);
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

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const colors = ['#22ddd2', '#8c15e9', '#7aeae4', '#b971f2'];
      
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      particlesRef.current = particles;
    };

    // Initialize grid points
    const initGridPoints = () => {
      const points: GridPoint[] = [];
      const spacing = 80;
      
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          points.push({
            x,
            y,
            opacity: Math.random() * 0.3 + 0.1,
            pulse: Math.random() * Math.PI * 2
          });
        }
      }
      gridPointsRef.current = points;
    };

    // Update and draw particles
    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
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
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    // Update and draw grid
    const updateGrid = () => {
      gridPointsRef.current.forEach(point => {
        point.pulse += 0.02;
        const pulseOpacity = (Math.sin(point.pulse) + 1) * 0.5 * point.opacity;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 221, 210, ${pulseOpacity})`;
        ctx.fill();
      });
    };

    // Draw connecting lines between nearby particles
    const drawConnections = () => {
      const maxDistance = 150;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(34, 221, 210, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    // Draw energy waves
    const drawEnergyWaves = (time: number) => {
      const waveCount = 3;
      
      for (let i = 0; i < waveCount; i++) {
        const waveOffset = (time * 0.001 + i * Math.PI * 2 / waveCount) % (Math.PI * 2);
        const waveRadius = (time * 0.1 + i * 100) % (Math.max(canvas.width, canvas.height) * 0.8);
        
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, waveRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34, 221, 210, ${0.1 * Math.sin(waveOffset) + 0.1})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    // Main animation loop
    const animate = (time: number) => {
      // Clear canvas with gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(23, 7, 43, 0.1)');
      gradient.addColorStop(0.5, 'rgba(23, 7, 43, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw all elements
      updateParticles();
      updateGrid();
      drawConnections();
      drawEnergyWaves(time);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initParticles();
    initGridPoints();
    animate(0);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Overlay gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate/20 via-transparent to-zion-slate-dark/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-zion-cyan/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 border border-zion-purple/20 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-neon/20 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Scanning line effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zion-cyan to-transparent"
        animate={{
          y: [0, window.innerHeight]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          boxShadow: '0 0 20px rgba(34, 221, 210, 0.5)'
        }}
      />
      
      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r from-zion-cyan to-transparent"></div>
      <div className="absolute top-0 left-0 w-0.5 h-32 bg-gradient-to-b from-zion-cyan to-transparent"></div>
      
      <div className="absolute top-0 right-0 w-32 h-0.5 bg-gradient-to-l from-zion-purple to-transparent"></div>
      <div className="absolute top-0 right-0 w-0.5 h-32 bg-gradient-to-b from-zion-purple to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-32 h-0.5 bg-gradient-to-r from-zion-neon to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-0.5 h-32 bg-gradient-to-t from-zion-neon to-transparent"></div>
      
      <div className="absolute bottom-0 right-0 w-32 h-0.5 bg-gradient-to-l from-zion-cyan to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-0.5 h-32 bg-gradient-to-t from-zion-cyan to-transparent"></div>
    </div>
  );
}

// Additional utility components for enhanced effects
export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-zion-cyan rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  );
}

export function DataStream() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-zion-cyan/20 font-mono text-xs"
          style={{
            left: `${i * 12.5}%`,
            top: '-20px'
          }}
          animate={{
            y: [0, window.innerHeight + 20]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5
          }}
        >
          {Math.random().toString(16).substring(2, 8).toUpperCase()}
        </motion.div>
      ))}
    </div>
  );
}

export function PulseRings() {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 flex items-center justify-center">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-zion-cyan/30 rounded-full"
          style={{
            width: 100 + i * 100,
            height: 100 + i * 100
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 0.1, 0.5]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  );
}