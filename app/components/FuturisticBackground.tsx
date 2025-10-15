import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let time = 0;

    const colors = [
      'rgba(6, 182, 212, 0.8)',    // cyan
      'rgba(139, 92, 246, 0.8)',   // purple
      'rgba(236, 72, 153, 0.8)',   // pink
      'rgba(16, 185, 129, 0.8)',   // green
      'rgba(59, 130, 246, 0.8)',   // blue
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 300 + 200,
      };
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push(createParticle());
      }
    };

    const updateParticle = (particle: Particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life++;

      // Add some wave motion
      particle.vx += Math.sin(time * 0.01 + particle.x * 0.01) * 0.01;
      particle.vy += Math.cos(time * 0.01 + particle.y * 0.01) * 0.01;

      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.8;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.8;

      // Fade out over time
      particle.opacity = Math.max(0, particle.opacity - 0.001);

      // Reset particle if it's too old or faded
      if (particle.life > particle.maxLife || particle.opacity <= 0) {
        Object.assign(particle, createParticle());
      }
    };

    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      
      // Create gradient for particle
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add glow effect
      ctx.shadowBlur = 20;
      ctx.shadowColor = particle.color;
      ctx.fill();
      
      ctx.restore();
    };

    const drawConnections = () => {
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (0.2 * (1 - distance / 150)) * Math.min(particle.opacity, otherParticle.opacity);
            
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });
    };

    const drawGrid = () => {
      ctx.save();
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 1;
      
      const gridSize = 50;
      const offsetX = (time * 0.5) % gridSize;
      const offsetY = (time * 0.3) % gridSize;
      
      for (let x = -offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = -offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw animated grid
      drawGrid();
      
      // Update and draw particles
      particles.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
      });
      
      // Draw connections
      drawConnections();
      
      // Add some floating geometric shapes
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < 5; i++) {
        const x = (canvas.width / 5) * i + Math.sin(time * 0.01 + i) * 50;
        const y = canvas.height / 2 + Math.cos(time * 0.008 + i) * 100;
        const size = 30 + Math.sin(time * 0.02 + i) * 10;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative min-h-screen cyber-grid-enhanced quantum-particles">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;
