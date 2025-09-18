<<<<<<< HEAD
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

interface UltraFuturisticBackground2029Props {
  children: React.ReactNode;
}

export default function UltraFuturisticBackground2029({ children }: UltraFuturisticBackground2029Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

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

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const colors = [
        'rgba(147, 51, 234, 0.8)', // Purple
        'rgba(59, 130, 246, 0.8)', // Blue
        'rgba(16, 185, 129, 0.8)', // Green
        'rgba(245, 158, 11, 0.8)', // Yellow
        'rgba(239, 68, 68, 0.8)',  // Red
        'rgba(236, 72, 153, 0.8)'  // Pink
      ];

      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      particlesRef.current = particles;
    };

    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(15, 23, 42, 1)'); // Dark blue
      gradient.addColorStop(0.3, 'rgba(30, 41, 59, 0.8)'); // Slate
      gradient.addColorStop(0.7, 'rgba(51, 65, 85, 0.6)'); // Slate
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0.8)'); // Dark blue
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow effect
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        
        // Outer glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Inner glow
        ctx.shadowBlur = 10;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw floating geometric shapes
      const time = Date.now() * 0.001;
      const shapes = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, rotation: time * 0.5, size: 80 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, rotation: -time * 0.3, size: 60 },
        { x: canvas.width * 0.1, y: canvas.height * 0.8, rotation: time * 0.7, size: 100 },
        { x: canvas.width * 0.9, y: canvas.height * 0.2, rotation: -time * 0.4, size: 70 }
      ];

      shapes.forEach((shape, index) => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        
        // Draw hexagon
        ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 + Math.sin(time + index) * 0.1})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = 'rgba(147, 51, 234, 0.5)';
        ctx.shadowBlur = 15;
        
        ctx.beginPath();
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
        ctx.closePath();
        ctx.stroke();
        
        ctx.restore();
      });

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
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const UltraFuturisticBackground2029: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticBackground2029</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraFuturisticBackground2029;
