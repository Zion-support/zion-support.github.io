import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FuturisticAnimatedBackground2029Props {
  children?: React.ReactNode;
  className?: string;
  intensity?: number;
  theme?: string;
}

export const FuturisticAnimatedBackground2029: React.FC<FuturisticAnimatedBackground2029Props> = ({ 
  children, 
  className = '',
  intensity = 1,
  theme = 'default'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

interface FuturisticAnimatedBackground2029Props {
  intensity?: number;
  theme?: 'cyberpunk' | 'holographic' | 'quantum';
}

const FuturisticAnimatedBackground2029: React.FC<FuturisticAnimatedBackground2029Props> = ({
  intensity = 0.8,
  theme = 'cyberpunk'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
=======

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
=======
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'particle' | 'energy' | 'data';
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() > 0.7 ? 'energy' : Math.random() > 0.5 ? 'data' : 'particle';
        let color: string;
        
        switch (type) {
          case 'energy':
            color = `hsl(${Math.random() * 60 + 180}, 80%, 70%)`;
            break;
          case 'data':
            color = `hsl(${Math.random() * 60 + 280}, 70%, 60%)`;
            break;
          default:
            color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
        }
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8 * intensity,
          vy: (Math.random() - 0.5) * 0.8 * intensity,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          color,
          type
        });
      }
    };
      type: 'particle' | 'wave' | 'grid';
    }> = [];

    const colors = {
      cyberpunk: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff'],
      holographic: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00']
    };

    const selectedColors = colors[theme];

    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: selectedColors[Math.floor(Math.random() * selectedColors.length)],
        type: Math.random() > 0.7 ? 'wave' : Math.random() > 0.5 ? 'grid' : 'particle'
      });
    }
=======

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create advanced gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      
      if (theme === 'quantum') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
        gradient.addColorStop(0.3, 'rgba(20, 20, 60, 0.9)');
        gradient.addColorStop(0.7, 'rgba(60, 20, 100, 0.9)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
        gradient.addColorStop(0.3, 'rgba(20, 20, 40, 0.9)');
        gradient.addColorStop(0.7, 'rgba(40, 20, 60, 0.9)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

=======
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle based on type
        ctx.beginPath();
        if (particle.type === 'energy') {
          // Draw energy particle as a star
          const spikes = 5;
          const outerRadius = particle.size;
          const innerRadius = particle.size * 0.5;
          
          for (let i = 0; i < spikes * 2; i++) {
            const angle = (i * Math.PI) / spikes;
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const x = particle.x + Math.cos(angle) * radius;
            const y = particle.y + Math.sin(angle) * radius;
            
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.closePath();
        } else if (particle.type === 'data') {
          // Draw data particle as a square
          const size = particle.size;
          ctx.rect(particle.x - size/2, particle.y - size/2, size, size);
        } else {
          // Draw regular particle as a circle
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        }
        
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connecting lines for nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
        // Draw based on type
        if (particle.type === 'particle') {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
        } else if (particle.type === 'wave') {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `${particle.color}${Math.floor(particle.opacity * 0.5 * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 2;
          ctx.stroke();
        } else if (particle.type === 'grid') {
          ctx.beginPath();
          ctx.rect(particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2);
          ctx.strokeStyle = `${particle.color}${Math.floor(particle.opacity * 0.3 * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
=======
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            let lineColor: string;
            if (particle.type === 'energy' || otherParticle.type === 'energy') {
              lineColor = `rgba(100, 200, 255, ${0.15 * (1 - distance / 120) * intensity})`;
            } else if (particle.type === 'data' || otherParticle.type === 'data') {
              lineColor = `rgba(200, 100, 255, ${0.12 * (1 - distance / 120) * intensity})`;
            } else {
              lineColor = `rgba(100, 150, 255, ${0.1 * (1 - distance / 120) * intensity})`;
            }
            
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.8;

          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `${particle.color}${Math.floor((1 - distance / 200) * 0.2 * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.5;
=======
            ctx.stroke();
          }
        });
      });

      // Draw advanced grid with perspective
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.08)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 80;
      const perspective = 0.3;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        const opacity = 1 - (x / canvas.width) * perspective;
        ctx.strokeStyle = `rgba(100, 150, 255, ${0.08 * opacity})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        const opacity = 1 - (y / canvas.height) * perspective;
        ctx.strokeStyle = `rgba(100, 150, 255, ${0.08 * opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw floating geometric shapes with advanced animations
      const time = Date.now() * 0.001;
      const shapes = [
        { 
          x: Math.sin(time * 0.3) * 250 + canvas.width / 2, 
          y: Math.cos(time * 0.4) * 200 + canvas.height / 2, 
          size: 35, 
          rotation: time * 0.15,
          type: 'hexagon'
        },
        { 
          x: Math.cos(time * 0.5) * 300 + canvas.width / 2, 
          y: Math.sin(time * 0.6) * 150 + canvas.height / 2, 
          size: 30, 
          rotation: -time * 0.2,
          type: 'octagon'
        },
        { 
          x: Math.sin(time * 0.7) * 350 + canvas.width / 2, 
          y: Math.cos(time * 0.2) * 250 + canvas.height / 2, 
          size: 40, 
          rotation: time * 0.25,
          type: 'diamond'
        }
      ];

      shapes.forEach(shape => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        
        ctx.beginPath();
        if (shape.type === 'hexagon') {
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = Math.cos(angle) * shape.size;
            const y = Math.sin(angle) * shape.size;
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
        } else if (shape.type === 'octagon') {
          for (let i = 0; i < 8; i++) {
            const angle = (i * Math.PI) / 4;
            const x = Math.cos(angle) * shape.size;
            const y = Math.sin(angle) * shape.size;
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
        } else if (shape.type === 'diamond') {
          const points = [
            [0, -shape.size],
            [shape.size, 0],
            [0, shape.size],
            [-shape.size, 0]
          ];
          points.forEach((point, i) => {
            if (i === 0) {
              ctx.moveTo(point[0], point[1]);
            } else {
              ctx.lineTo(point[0], point[1]);
            }
          });
        }
        
        ctx.closePath();
        ctx.strokeStyle = `rgba(100, 150, 255, ${0.25 * intensity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      // Add theme-specific effects
      if (theme === 'cyberpunk') {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        
        // Cyberpunk grid effect
        const time = Date.now() * 0.001;
        for (let i = 0; i < 10; i++) {
          const wave = Math.sin(time + i * 0.5) * 50;
          
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, 150 + wave, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 0, 128, ${0.1 * intensity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        
        ctx.restore();
      }

      if (theme === 'holographic') {
        ctx.save();
        ctx.globalCompositeOperation = 'overlay';
        
        // Holographic interference pattern
        for (let x = 0; x < canvas.width; x += 30) {
          for (let y = 0; y < canvas.height; y += 30) {
            const time = Date.now() * 0.001;
            const interference = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time);
            
            if (Math.abs(interference) > 0.5) {
              ctx.beginPath();
              ctx.arc(x, y, 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${0.3 * intensity})`;
              ctx.fill();
            }
          }
        }
        
        ctx.restore();
      }

      if (theme === 'quantum') {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        
        // Quantum entanglement effect
        const time = Date.now() * 0.001;
        for (let i = 0; i < 3; i++) {
          const wave1 = Math.sin(time + i) * 100;
          const wave2 = Math.cos(time + i) * 100;
          
          ctx.beginPath();
          ctx.ellipse(canvas.width / 2 + wave1, canvas.height / 2 + wave2, 80, 40, time, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.15 * intensity})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
=======
    };
  }, [intensity, theme]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-purple-900/20 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Floating elements with enhanced animations */}
      <motion.div
        className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full opacity-70"
        animate={{
          y: [0, -25, 0],
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-2 h-2 bg-cyan-400 rounded-full opacity-80"
        animate={{
          y: [0, 20, 0],
          opacity: [0.8, 1, 0.8],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-purple-400 rounded-full opacity-75"
        animate={{
          x: [0, 15, 0],
          opacity: [0.75, 1, 0.75],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-green-400 rounded-full opacity-60"
        animate={{
          y: [0, -15, 0],
          x: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: intensity,
        filter: theme === 'cyberpunk' ? 'blur(0.3px)' : 'none'
      }}
    />
=======
  );
};

export default FuturisticAnimatedBackground2029;