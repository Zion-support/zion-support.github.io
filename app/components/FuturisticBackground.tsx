import React, { useRef, useEffect } from 'react';

const FuturisticBackground = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Enhanced particle system
    const particles: Array<{
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

    const createParticle = () => {
      const colors = [
        'rgba(6, 182, 212, 0.8)',   // cyan
        'rgba(147, 51, 234, 0.8)',  // purple
        'rgba(236, 72, 153, 0.8)',  // pink
        'rgba(34, 197, 94, 0.8)',   // green
        'rgba(249, 115, 22, 0.8)',  // orange
      ];
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 300 + 200,
      };
    };

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
        
        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Fade out over time
        particle.opacity = Math.max(0, 1 - (particle.life / particle.maxLife));
        
        // Remove dead particles and create new ones
        if (particle.life >= particle.maxLife) {
          particles[i] = createParticle();
        }
        
        // Draw particle with glow effect
        ctx.save();
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.globalAlpha = particle.opacity;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        ctx.restore();
      }
      
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.stroke();
          }
        }
      }
      
      // Draw animated grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 50;
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
      
      // Draw pulsing center orb
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const orbSize = 50 + Math.sin(time * 2) * 20;
      
      ctx.save();
      ctx.shadowBlur = 50;
      ctx.shadowColor = 'rgba(6, 182, 212, 0.5)';
      ctx.globalAlpha = 0.3;
      
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, orbSize);
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.8)');
      gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbSize, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_40%_40%,rgba(236,72,153,0.2),transparent_50%)]"></div>
      </div>
      
      {/* Enhanced canvas animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Neon border effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse"></div>
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;