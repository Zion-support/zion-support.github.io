import React, { useEffect, useRef } from 'react';

interface FuturisticAnimatedBackground2029Props {
  className?: string;
}

export default function FuturisticAnimatedBackground2029({ className = '' }: FuturisticAnimatedBackground2029Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect((: unknown) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simple particle animation
    let particles: Array<{x: number, y: number, vx: number, vy: number, size: number, life: number}> = [];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        life: Math.random() * 100 + 50
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        
        if (particle.life <= 0) {
          particle.life = Math.random() * 100 + 50;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
        
        ctx.fillStyle = `rgba(100, 150, 255, ${particle.life / 100})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and draw particles
      particles.forEach((particle: unknown, index: unknown) => {
        particle.update();
        particle.draw();

        if (particle.isDead()) {
          particles[index] = new Particle();
        }
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const alpha = 1 - distance / 100;
            ctx.strokeStyle = `rgba(100, 200, 255, ${alpha * 0.1})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Add floating geometric shapes
      const time = Date.now() * 0.001;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(time * 0.1);

      // Draw rotating hexagon
      ctx.strokeStyle = 'rgba(255, 100, 200, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = Math.cos(angle) * 150;
        const y = Math.sin(angle) * 150;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();

      // Draw inner triangle
      ctx.strokeStyle = 'rgba(100, 255, 200, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3 + time * 0.5;
        const x = Math.cos(angle) * 100;
        const y = Math.sin(angle) * 100;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();

      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
}
