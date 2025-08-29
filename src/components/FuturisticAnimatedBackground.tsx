import React, { useEffect, useRef, useState } from 'react';
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
  variant?: 'minimal' | 'standard' | 'intense';
  intensity?: 'low' | 'medium' | 'high';
}

export const FuturisticAnimatedBackground: React.FC<FuturisticAnimatedBackgroundProps> = ({
  variant = 'standard',
  intensity = 'medium'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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

    // Create particles
    const createParticle = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`
      });
    };


    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
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
