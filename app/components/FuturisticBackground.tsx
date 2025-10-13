import React, { useEffect, useRef } from 'react';

const FuturisticBackground = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      const colors = ['#00f5ff', '#ff00ff', '#00ff00', '#ffff00', '#ff4500', '#8b5cf6', '#ec4899'];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.9 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 300 + 100
      };
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Fade out over time
        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * (1 - lifeRatio);

        // Draw particle with glow effect
        ctx.save();
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(currentOpacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        ctx.restore();

        // Reset particle when life ends
        if (particle.life >= particle.maxLife) {
          particles[index] = createParticle();
        }

        // Draw connections with dynamic opacity
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 200) {
              const connectionOpacity = (0.2 * (1 - distance / 200)) * currentOpacity;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(0, 245, 255, ${connectionOpacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });

      // Draw animated grid with pulsing effect
      const time = Date.now() * 0.001;
      const gridOpacity = 0.1 + Math.sin(time * 2) * 0.05;
      ctx.strokeStyle = `rgba(0, 245, 255, ${gridOpacity})`;
      ctx.lineWidth = 1;
      const gridSize = 60;

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

      // Draw animated energy rings
      for (let i = 0; i < 8; i++) {
        const radius = 80 + Math.sin(time * 0.8 + i * 0.5) * 60;
        const x = canvas.width / 2 + Math.cos(time * 0.3 + i * 0.8) * 300;
        const y = canvas.height / 2 + Math.sin(time * 0.3 + i * 0.8) * 300;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * Math.sin(time + i)})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner ring
        ctx.beginPath();
        ctx.arc(x, y, radius * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.1 * Math.sin(time + i + 1)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw data streams
      for (let i = 0; i < 3; i++) {
        const streamX = (canvas.width / 4) * (i + 1);
        const streamHeight = canvas.height;
        const streamY = (time * 100 + i * 200) % (streamHeight + 100) - 50;

        ctx.beginPath();
        ctx.moveTo(streamX, streamY);
        ctx.lineTo(streamX, streamY + 50);
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.8})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Stream glow
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Draw quantum field effects
      for (let i = 0; i < 5; i++) {
        const fieldX = Math.random() * canvas.width;
        const fieldY = Math.random() * canvas.height;
        const fieldSize = 20 + Math.sin(time + i) * 10;

        ctx.beginPath();
        ctx.arc(fieldX, fieldY, fieldSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${0.1 * Math.sin(time * 2 + i)})`;
        ctx.fill();

        // Field connections
        particles.forEach(particle => {
          const dx = fieldX - particle.x;
          const dy = fieldY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(fieldX, fieldY);
            ctx.lineTo(particle.x, particle.y);
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.05 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;