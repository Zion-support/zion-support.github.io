import React, { useEffect, useRef } from 'react';

const FuturisticBackgroundEnhanced: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

    const colors = ['#00d4ff', '#8b5cf6', '#ec4899', '#f97316', '#10b981'];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color + Math.floor((1 - distance / 100) * 50).toString(16).padStart(2, '0');
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      // Draw animated grid
      ctx.strokeStyle = '#00d4ff20';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      const time = Date.now() * 0.001;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + Math.sin(time + x * 0.01) * 10, 0);
        ctx.lineTo(x + Math.sin(time + x * 0.01) * 10, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + Math.cos(time + y * 0.01) * 10);
        ctx.lineTo(canvas.width, y + Math.cos(time + y * 0.01) * 10);
        ctx.stroke();
      }

      // Draw floating orbs
      const orbCount = 3;
      for (let i = 0; i < orbCount; i++) {
        const orbX = canvas.width * (0.2 + i * 0.3) + Math.sin(time + i) * 50;
        const orbY = canvas.height * 0.5 + Math.cos(time + i) * 30;
        const orbSize = 100 + Math.sin(time * 2 + i) * 20;

        // Outer glow
        const gradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbSize);
        gradient.addColorStop(0, colors[i % colors.length] + '40');
        gradient.addColorStop(1, colors[i % colors.length] + '00');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orbX, orbY, orbSize, 0, Math.PI * 2);
        ctx.fill();

        // Inner core
        ctx.fillStyle = colors[i % colors.length] + '80';
        ctx.beginPath();
        ctx.arc(orbX, orbY, orbSize * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }

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
    <div className="relative min-h-screen">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackgroundEnhanced;