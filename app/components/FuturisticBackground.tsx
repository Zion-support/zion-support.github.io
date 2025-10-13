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
      const colors = ['#00f5ff', '#ff00ff', '#00ff00', '#ffff00', '#ff4500', '#ff1493', '#00bfff', '#ff69b4'];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.9 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 200 + 100
      };
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.8)');
      gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.6)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Mouse interaction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx += dx * force * 0.002;
          particle.vy += dy * force * 0.002;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Fade out old particles
        if (particle.life > particle.maxLife) {
          particles[index] = createParticle();
          return;
        }

        // Draw particle with glow effect
        ctx.save();
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.globalAlpha = particle.opacity * (1 - particle.life / particle.maxLife);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.restore();

        // Draw connections with enhanced effects
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.save();
              ctx.globalAlpha = (120 - distance) / 120 * 0.3;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1;
              ctx.shadowBlur = 5;
              ctx.shadowColor = particle.color;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });

      // Draw animated neon grid
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00f5ff';
      const gridSize = 60;
      const gridOffset = (time * 20) % gridSize;

      for (let x = -gridOffset; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = -gridOffset; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw animated energy rings
      for (let i = 0; i < 3; i++) {
        const radius = 150 + Math.sin(time * 0.8 + i * 2) * 80;
        const x = canvas.width / 2 + Math.cos(time * 0.3 + i * 1.5) * 300;
        const y = canvas.height / 2 + Math.sin(time * 0.3 + i * 1.5) * 300;

        ctx.save();
        ctx.strokeStyle = `rgba(255, 0, 255, ${0.2 * Math.sin(time + i)})`;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ff00ff';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Draw floating geometric shapes
      for (let i = 0; i < 6; i++) {
        const size = 20 + Math.sin(time * 0.5 + i) * 10;
        const x = canvas.width / 4 + Math.cos(time * 0.2 + i) * 200;
        const y = canvas.height / 4 + Math.sin(time * 0.2 + i) * 200;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(time * 0.1 + i);
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * Math.sin(time + i)})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00ffff';
        ctx.beginPath();
        ctx.moveTo(-size, -size);
        ctx.lineTo(size, -size);
        ctx.lineTo(size, size);
        ctx.lineTo(-size, size);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }

      // Draw energy waves
      for (let i = 0; i < 4; i++) {
        const waveHeight = 20 + Math.sin(time * 2 + i) * 15;
        const waveLength = 100;
        const y = canvas.height / 2 + i * 100;

        ctx.save();
        ctx.strokeStyle = `rgba(0, 255, 0, ${0.4 * Math.sin(time + i)})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00ff00';
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const waveY = y + Math.sin((x / waveLength) * Math.PI * 2 + time * 2) * waveHeight;
          if (x === 0) {
            ctx.moveTo(x, waveY);
          } else {
            ctx.lineTo(x, waveY);
          }
        }
        ctx.stroke();
        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
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

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      {/* Particle system canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Neon grid overlay */}
      <div className="absolute inset-0 opacity-20" style={{ zIndex: 2 }}>
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 3 }}>
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-pink-400/30 transform rotate-45 animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-cyan-400/30 rounded-lg animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 border border-purple-400/30 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-10 w-14 h-14 border border-pink-400/30 transform rotate-45 animate-bounce-slow"></div>
      </div>

      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 4 }}>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/50 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400/50 to-transparent animate-pulse delay-2000"></div>
      </div>

      {/* Neon glow effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;