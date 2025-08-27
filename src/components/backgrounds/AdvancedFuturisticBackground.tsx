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

interface QuantumField {
  x: number;
  y: number;
  radius: number;
  intensity: number;
  phase: number;
}

export const AdvancedFuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const quantumFieldsRef = useRef<QuantumField[]>([]);
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
      const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'];
      
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      particlesRef.current = particles;
    };

    // Initialize quantum fields
    const initQuantumFields = () => {
      const fields: QuantumField[] = [];
      
      for (let i = 0; i < 8; i++) {
        fields.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 200 + 100,
          intensity: Math.random() * 0.5 + 0.3,
          phase: Math.random() * Math.PI * 2
        });
      }
      quantumFieldsRef.current = fields;
    };

    // Draw quantum field
    const drawQuantumField = (field: QuantumField, time: number) => {
      const gradient = ctx.createRadialGradient(
        field.x, field.y, 0,
        field.x, field.y, field.radius
      );
      
      const alpha = Math.sin(time * 0.001 + field.phase) * 0.3 + 0.2;
      gradient.addColorStop(0, `rgba(0, 255, 255, ${alpha * field.intensity})`);
      gradient.addColorStop(0.5, `rgba(0, 255, 255, ${alpha * field.intensity * 0.5})`);
      gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(field.x, field.y, field.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    // Draw particle
    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 10;
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    // Draw connection lines
    const drawConnections = (particles: Particle[]) => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.3;
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw holographic grid
    const drawHolographicGrid = (time: number) => {
      const gridSize = 50;
      const offsetX = (time * 0.1) % gridSize;
      const offsetY = (time * 0.05) % gridSize;
      
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let x = offsetX; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = offsetY; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Draw energy waves
    const drawEnergyWaves = (time: number) => {
      const waveCount = 3;
      
      for (let i = 0; i < waveCount; i++) {
        const amplitude = 50 + i * 20;
        const frequency = 0.002 + i * 0.001;
        const speed = 0.5 + i * 0.2;
        const yOffset = canvas.height / 2 + i * 100;
        
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 - i * 0.1})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let x = 0; x < canvas.width; x++) {
          const y = yOffset + Math.sin(x * frequency + time * speed) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }
    };

    // Animation loop
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw quantum fields
      quantumFieldsRef.current.forEach(field => {
        field.phase += 0.01;
        drawQuantumField(field, time);
      });
      
      // Draw holographic grid
      drawHolographicGrid(time);
      
      // Draw energy waves
      drawEnergyWaves(time);
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        drawParticle(particle);
      });
      
      // Draw connections
      drawConnections(particlesRef.current);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initParticles();
    initQuantumFields();
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
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.95) 100%)'
        }}
      />
      
      {/* Overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-purple-900/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-cyan-900/5 to-pink-900/5" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-green-400/20 to-teal-600/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};