import React, { useEffect, useRef } from 'react';

const FuturisticBackgroundEnhanced = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

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

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'][Math.floor(Math.random() * 4)]
      });
    }

    // Neural network connections
    const connections: Array<{
      from: number;
      to: number;
      opacity: number;
    }> = [];

    // Create connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          connections.push({
            from: i,
            to: j,
            opacity: (150 - distance) / 150 * 0.3
          });
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + '20';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connections
      connections.forEach(connection => {
        const fromParticle = particles[connection.from];
        const toParticle = particles[connection.to];
        
        const dx = toParticle.x - fromParticle.x;
        const dy = toParticle.y - fromParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(fromParticle.x, fromParticle.y);
          ctx.lineTo(toParticle.x, toParticle.y);
          ctx.strokeStyle = `rgba(0, 255, 255, ${connection.opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Add pulsing grid
      const time = Date.now() * 0.001;
      ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + Math.sin(time) * 0.05})`;
      ctx.lineWidth = 1;
      
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Add floating geometric shapes
      const shapes = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 30, rotation: time * 0.5 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 25, rotation: -time * 0.3 },
        { x: canvas.width * 0.5, y: canvas.height * 0.1, size: 20, rotation: time * 0.7 },
        { x: canvas.width * 0.1, y: canvas.height * 0.8, size: 35, rotation: -time * 0.4 }
      ];

      shapes.forEach(shape => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.strokeStyle = `rgba(255, 0, 255, ${0.3 + Math.sin(time * 2) * 0.2})`;
        ctx.lineWidth = 2;
        
        // Draw hexagon
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const x = Math.cos(angle) * shape.size;
          const y = Math.sin(angle) * shape.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
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

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-slate-900/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-pink-500/10 z-20" />
      
      {/* Animated Neon Lines */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-40">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackgroundEnhanced;