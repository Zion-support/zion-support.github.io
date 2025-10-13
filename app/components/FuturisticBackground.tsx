import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ children, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4';
        this.life = 0;
        this.maxLife = Math.random() * 200 + 100;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          this.vx += (dx / distance) * force * 0.1;
          this.vy += (dy / distance) * force * 0.1;
        }

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Fade out over time
        this.opacity = Math.max(0, 1 - (this.life / this.maxLife));
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].j;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.strokeStyle = '#8b5cf6';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove dead particles
        if (particle.life >= particle.maxLife) {
          particles.splice(index, 1);
          particles.push(new Particle());
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Initialize
    handleResize();
    initParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ background: 'transparent' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;