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

    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      const colors = ['#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 300 + 200
      };
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push(createParticle());
      }
    };

    const createExplosion = (x: number, y: number) => {
      for (let i = 0; i < 20; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 50,
          y: y + (Math.random() - 0.5) * 50,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          size: Math.random() * 6 + 2,
          opacity: 1,
          color: '#06b6d4',
          life: 0,
          maxLife: 100
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Apply mouse attraction
        if (isMouseMoving) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 200) {
            const force = (200 - distance) / 200;
            particle.vx += (dx / distance) * force * 0.1;
            particle.vy += (dy / distance) * force * 0.1;
          }
        }

        // Fade out over time
        particle.opacity = Math.max(0, 1 - (particle.life / particle.maxLife));

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Remove dead particles
        if (particle.life > particle.maxLife) {
          particles.splice(index, 1);
          return;
        }

        // Draw particle with glow effect
        ctx.save();
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        ctx.restore();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.save();
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              const alpha = (0.2 * (1 - distance / 120)) * particle.opacity * otherParticle.opacity;
              ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.shadowBlur = 5;
              ctx.shadowColor = '#06b6d4';
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });

      // Draw animated cyber grid
      ctx.save();
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      const offsetX = (time * 10) % gridSize;
      const offsetY = (time * 5) % gridSize;

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

      // Draw animated energy orbs
      for (let i = 0; i < 8; i++) {
        const radius = 80 + Math.sin(time * 0.8 + i * 0.5) * 40;
        const x = canvas.width / 2 + Math.cos(time * 0.3 + i * 0.8) * (canvas.width * 0.3);
        const y = canvas.height / 2 + Math.sin(time * 0.3 + i * 0.8) * (canvas.height * 0.3);

        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        const alpha = 0.1 * Math.sin(time + i);
        ctx.strokeStyle = `rgba(236, 72, 153, ${alpha})`;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 30;
        ctx.shadowColor = '#ec4899';
        ctx.stroke();
        ctx.restore();
      }

      // Draw neural network connections
      ctx.save();
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 20; i++) {
        const x1 = Math.sin(time * 0.1 + i) * canvas.width * 0.5 + canvas.width * 0.5;
        const y1 = Math.cos(time * 0.1 + i) * canvas.height * 0.5 + canvas.height * 0.5;
        const x2 = Math.sin(time * 0.1 + i + Math.PI) * canvas.width * 0.5 + canvas.width * 0.5;
        const y2 = Math.cos(time * 0.1 + i + Math.PI) * canvas.height * 0.5 + canvas.height * 0.5;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      ctx.restore();

      // Draw data streams
      ctx.save();
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 5; i++) {
        const streamY = (time * 50 + i * 100) % (canvas.height + 100);
        ctx.beginPath();
        ctx.moveTo(0, streamY);
        ctx.lineTo(canvas.width, streamY);
        ctx.stroke();
      }
      ctx.restore();

      // Draw quantum field
      ctx.save();
      ctx.fillStyle = 'rgba(139, 92, 246, 0.02)';
      for (let i = 0; i < 50; i++) {
        const x = Math.sin(time * 0.2 + i * 0.1) * canvas.width * 0.5 + canvas.width * 0.5;
        const y = Math.cos(time * 0.2 + i * 0.1) * canvas.height * 0.5 + canvas.height * 0.5;
        const size = 20 + Math.sin(time + i) * 10;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Add new particles occasionally
      if (Math.random() < 0.02) {
        particles.push(createParticle());
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      
      // Create explosion on mouse movement
      if (Math.random() < 0.1) {
        createExplosion(mouseX, mouseY);
      }
    };

    const handleMouseLeave = () => {
      isMouseMoving = false;
    };

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative min-h-screen cyber-grid">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-slate-900/80" style={{ zIndex: 2 }} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;