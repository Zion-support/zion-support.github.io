import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface FuturisticAnimatedBackgroundProps {
  variant?: 'default' | 'cyberpunk' | 'quantum' | 'space';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}
export const FuturisticAnimatedBackground: React.FC<FuturisticAnimatedBackgroundProps> = ({
  variant = 'default',
  intensity = 'medium',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];
    // Initialize particles based on variant
    const initParticles = () => {
      particles.length = 0;
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 120 : 80;
      for (let i = 0; i < particleCount; i++) {
        const colors = getVariantColors(variant);
        particles({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };
    const getVariantColors = (variant: string) => {
      switch (variant) {
        case 'cyberpunk':
          return ['#ff00ff', '#00ffff', '#ffff00', '#ff0080', '#8000ff'];
        case 'quantum':
          return ['#22ddd2', '#8c15e9', '#2e73ea', '#00ff88', '#ff6b35'];
        case 'space':
          return ['#ffffff', '#22ddd2', '#8c15e9', '#2e73ea', '#ffd700'];
        default:
          return ['#22ddd2', '#8c15e9', '#2e73ea', '#00ff88', '#ff6b35'];
      }
    };
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
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
              Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
            );
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (100 - distance) / 100 * 0.3;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });
      // Draw grid pattern for cyberpunk variant
      if (variant === 'cyberpunk') {
        drawCyberpunkGrid(ctx, canvas);
      }
      // Draw quantum waves for quantum variant
      if (variant === 'quantum') {
        drawQuantumWaves(ctx, canvas);
      }
      // Draw space nebula for space variant
      if (variant === 'space') {
        drawSpaceNebula(ctx, canvas);
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    const drawCyberpunkGrid = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      const gridSize = 50;
      
      ctx.strokeStyle = '#ff00ff';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + Math.sin(time + x * 0.01) * 10, 0);
        ctx.lineTo(x + Math.sin(time + x * 0.01) * 10, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + Math.cos(time + y * 0.01) * 10);
        ctx.lineTo(canvas.width, y + Math.cos(time + y * 0.01) * 10);
        ctx.stroke();
      }
    };
    const drawQuantumWaves = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      
      ctx.strokeStyle = '#22ddd2';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.4;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 2) {
          const y = canvas.height / 2 + 
            Math.sin(x * 0.01 + time + i * Math.PI / 3) * 100 +
            Math.sin(x * 0.005 + time * 0.5) * 50;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };
    const drawSpaceNebula = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.0005;
      
      // Create gradient for nebula effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.cos(time) * 100,
        canvas.height / 2 + Math.sin(time) * 100,
        0,
        canvas.width / 2,
        canvas.height / 2,
        300
      );
      gradient.addColorStop(0, 'rgba(138, 21, 233, 0.3)');
      gradient.addColorStop(0.5, 'rgba(34, 221, 210, 0.2)');
      gradient.addColorStop(1, 'rgba(46, 115, 234, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    initParticles();
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity]);
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border border-zion-purple/30 transform rotate-45"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [45, 225, 405],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/3 w-20 h-20 border border-zion-blue/30 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          y: [0, -20, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Neon glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-60" />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-zion-blue to-transparent opacity-60" />
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-zion-cyan to-transparent opacity-60" />
      </div>
    </div>
  );
};
// Variant-specific background components
export const CyberpunkBackground: React.FC<{ className?: string }> = ({ className }) => (
  <FuturisticAnimatedBackground variant="cyberpunk" intensity="high" className={className} />
);
export const QuantumBackground: React.FC<{ className?: string }> = ({ className }) => (
  <FuturisticAnimatedBackground variant="quantum" intensity="medium" className={className} />
);
export const SpaceBackground: React.FC<{ className?: string }> = ({ className }) => (
  <FuturisticAnimatedBackground variant="space" intensity="low" className={className} />
);
export default FuturisticAnimatedBackground;