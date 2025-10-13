import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  children?: React.ReactNode;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ children }) => {
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
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      const colors = ['#00f5ff', '#ff00ff', '#00ff00', '#ffff00', '#ff4500', '#8b5cf6', '#06b6d4'];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.9 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1
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
        particle.life -= 0.002;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle if life is over
        if (particle.life <= 0) {
          particles[index] = createParticle();
        }

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Create glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color + Math.floor(particle.opacity * particle.life * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, particle.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections with enhanced effects
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 200) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              
              const alpha = (0.2 * (1 - distance / 200) * particle.life * otherParticle.life);
              ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
              ctx.lineWidth = 1.5;
              ctx.stroke();
            }
          }
        });
      });

      // Draw enhanced animated grid
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.15)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      const time = Date.now() * 0.001;

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

      // Draw animated circles with enhanced effects
      for (let i = 0; i < 8; i++) {
        const radius = 80 + Math.sin(time + i * 0.5) * 60;
        const x = canvas.width / 2 + Math.cos(time * 0.3 + i * 0.8) * 300;
        const y = canvas.height / 2 + Math.sin(time * 0.3 + i * 0.8) * 300;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(255, 0, 255, ${0.2 * Math.sin(time + i)})`);
        gradient.addColorStop(1, 'rgba(255, 0, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      // Add floating geometric shapes
      for (let i = 0; i < 6; i++) {
        const size = 20 + Math.sin(time + i) * 10;
        const x = canvas.width * 0.2 + Math.cos(time * 0.2 + i) * canvas.width * 0.6;
        const y = canvas.height * 0.3 + Math.sin(time * 0.2 + i) * canvas.height * 0.4;

        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x, y + size);
        ctx.lineTo(x - size, y);
        ctx.closePath();
        
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * Math.sin(time + i)})`;
        ctx.lineWidth = 2;
        ctx.stroke();
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