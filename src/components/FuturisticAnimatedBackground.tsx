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

interface FuturisticAnimatedBackgroundProps {
  variant?: 'default' | 'minimal' | 'intense';
  intensity?: 'low' | 'medium' | 'high';
}

export const FuturisticAnimatedBackground: React.FC<FuturisticAnimatedBackgroundProps> = ({ 
  variant = 'default', 
  intensity = 'medium' 
}) => {
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

    // Initialize particles based on intensity
    const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 150 : 300;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (intensity === 'high' ? 1 : 0.5),
        vy: (Math.random() - 0.5) * (intensity === 'high' ? 1 : 0.5),
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: ['#22ddd2', '#8c15e9', '#2e73ea'][Math.floor(Math.random() * 3)]
      });
    }

    // Animation variables
    let animationId: number;
    let time = 0;

    // Create particles
    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.5 + 0.1;
      
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`
      });
    };

    // Update and draw particles
    const animate = () => {
      time += 0.01;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(2, 6, 23, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid only for default and intense variants
      if (variant !== 'minimal') {
        ctx.strokeStyle = 'rgba(34, 221, 210, 0.1)';
        ctx.lineWidth = 0.5;
        const gridSize = intensity === 'high' ? 30 : 50;

        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }

        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
      }

      // Draw floating geometric shapes
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.5)';
      ctx.lineWidth = 2;

      // Rotating triangle
      const centerX = canvas.width * 0.2;
      const centerY = canvas.height * 0.3;
      const triangleSize = 30;
      const rotation = time * 0.5;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, -triangleSize);
      ctx.lineTo(triangleSize * 0.866, triangleSize * 0.5);
      ctx.lineTo(-triangleSize * 0.866, triangleSize * 0.5);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      // Floating circle
      const circleX = canvas.width * 0.8;
      const circleY = canvas.height * 0.7;
      const circleSize = 20 + Math.sin(time * 2) * 10;

      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.beginPath();
      ctx.arc(circleX, circleY, circleSize, 0, Math.PI * 2);
      ctx.stroke();

      // Reset global alpha
      ctx.globalAlpha = 1;

      // Draw energy waves
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
      ctx.lineWidth = 3;
      
      for (let i = 0; i < 3; i++) {
        const waveOffset = (time * 50 + i * 100) % (canvas.width + 200);
        const waveY = canvas.height * 0.5 + Math.sin(time + i) * 50;
        
        ctx.beginPath();
        ctx.moveTo(waveOffset - 100, waveY);
        ctx.lineTo(waveOffset, waveY + 20);
        ctx.lineTo(waveOffset + 100, waveY);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap particles around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections for intense variant
        if (intensity === 'high') {
          particles.forEach((otherParticle, otherIndex) => {
            if (index === otherIndex) return;
            
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(34, 221, 210, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        }
      });

      // Create new particles if needed
      if (particles.length < particleCount) {
        createParticle();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: variant === 'minimal' 
            ? 'transparent' 
            : 'radial-gradient(ellipse at center, rgba(34, 221, 210, 0.05) 0%, transparent 70%)'
        }}
      />
      
      {/* Additional visual effects for intense variant */}
      {intensity === 'high' && variant !== 'minimal' && (
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}
    </div>
  );
};
