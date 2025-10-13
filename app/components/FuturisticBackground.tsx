import React, { useEffect, useRef } from 'react';

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

    // Advanced animated background with multiple effects
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
    }> = [];

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: ['#06b6d4', '#8b5cf6', '#ec4899', '#10b981'][Math.floor(Math.random() * 4)],
        alpha: Math.random() * 0.5 + 0.2,
        life: Math.random() * 100 + 50
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      
      // Draw animated grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 1;
      const gridSize = 50;
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
      
      // Draw neural network connections
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
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
            ctx.stroke();
          }
        }
      }
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        
        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + '20';
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(i, 1);
          // Add new particle
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            color: ['#06b6d4', '#8b5cf6', '#ec4899', '#10b981'][Math.floor(Math.random() * 4)],
            alpha: Math.random() * 0.5 + 0.2,
            life: Math.random() * 100 + 50
          });
        }
      }
      
      // Draw floating orbs
      for (let i = 0; i < 3; i++) {
        const angle = time * 0.5 + i * Math.PI * 2 / 3;
        const radius = 100 + i * 50;
        const x = canvas.width / 2 + Math.cos(angle) * radius;
        const y = canvas.height / 2 + Math.sin(angle) * radius;
        
        // Create gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 50);
        gradient.addColorStop(0, `rgba(6, 182, 212, ${0.3 - i * 0.1})`);
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2);
        ctx.fill();
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative min-h-screen particle-system">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      {/* Additional CSS-based effects */}
      <div className="absolute inset-0 cyber-grid-enhanced pointer-events-none" style={{ zIndex: -1 }}></div>
      <div className="absolute inset-0 matrix-rain-enhanced pointer-events-none" style={{ zIndex: -1 }}></div>
      {children}
    </div>
  );
};

export default FuturisticBackground;