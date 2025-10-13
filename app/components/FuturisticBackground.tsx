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

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      const colors = ['#00f5ff', '#ff00ff', '#00ff00', '#ffff00', '#ff4500', '#8b5cf6', '#06b6d4', '#f59e0b'];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.9 + 0.1,
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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Create new particles occasionally
      if (Math.random() < 0.02) {
        particles.push(createParticle());
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Attract to mouse
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += dx * force * 0.01;
          particle.vy += dy * force * 0.01;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Fade out over time
        const lifeRatio = particle.life / particle.maxLife;
        particle.opacity = (1 - lifeRatio) * 0.9;

        // Remove old particles
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

            if (distance < 200) {
              ctx.save();
              ctx.shadowBlur = 5;
              ctx.shadowColor = '#00f5ff';
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(0, 245, 255, ${0.2 * (1 - distance / 200)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });

      // Draw animated grid with neon effect
      ctx.save();
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00f5ff';
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.15)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      const offsetX = (time * 20) % gridSize;
      const offsetY = (time * 15) % gridSize;

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

      // Draw animated neon circles
      for (let i = 0; i < 8; i++) {
        const radius = 80 + Math.sin(time * 0.8 + i * 0.5) * 60;
        const x = canvas.width / 2 + Math.cos(time * 0.3 + i * 0.8) * 300;
        const y = canvas.height / 2 + Math.sin(time * 0.3 + i * 0.8) * 300;

        ctx.save();
        ctx.shadowBlur = 30;
        ctx.shadowColor = i % 2 === 0 ? '#ff00ff' : '#00f5ff';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${i % 2 === 0 ? '255, 0, 255' : '0, 245, 255'}, ${0.15 * Math.sin(time + i)})`;
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();
      }

      // Draw pulsing center orb
      const centerRadius = 50 + Math.sin(time * 2) * 20;
      ctx.save();
      ctx.shadowBlur = 50;
      ctx.shadowColor = '#00f5ff';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, centerRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 245, 255, ${0.1 * Math.sin(time * 3)})`;
      ctx.fill();
      ctx.restore();

      // Draw energy waves
      for (let i = 0; i < 3; i++) {
        const waveRadius = (time * 100 + i * 200) % (canvas.width + canvas.height);
        ctx.save();
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#ff00ff';
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, waveRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 0, 255, ${0.3 * Math.sin(time * 2 + i)})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
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

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
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