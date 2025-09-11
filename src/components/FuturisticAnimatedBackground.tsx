import React, { useEffect, useRef } from 'react';

export const FuturisticAnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
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

    // Animation variables
    let animationId: number;
    let time = 0;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    // Create particles
    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.5 + 0.1;
      
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1,
        color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`,
        life: 1,
        maxLife: Math.random() * 100 + 50
      });
    };

    // Update and draw particles
    const animate = () => {
      time += 0.01;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(2, 6, 23, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new particles
      if (particles.length < 100) {
        createParticle();
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 1;

        // Remove dead particles
        if (particle.life > particle.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle with glow effect
        const alpha = 1 - (particle.life / particle.maxLife);
        const size = particle.size * (1 - alpha * 0.5);

        // Outer glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = alpha * 0.3;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Inner particle
        ctx.shadowBlur = 10;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw grid pattern
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.1)';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;
      
      const gridSize = 50;
      const offsetX = (time * 10) % gridSize;
      const offsetY = (time * 5) % gridSize;

      // Vertical lines
      for (let x = offsetX; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = offsetY; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw floating geometric shapes
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.5)';
      ctx.lineWidth = 2;

      // Rotating triangle
      const centerX = canvas.width * 0.2;
      const centerY = canvas.height * 0.3;
      const triangleSize = 30;
      const rotation = time * 0.5;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, -triangleSize);
      ctx.lineTo(triangleSize * 0.866, triangleSize * 0.5);
      ctx.lineTo(-triangleSize * 0.866, triangleSize * 0.5);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      // Floating circle
      const circleX = canvas.width * 0.8;
      const circleY = canvas.height * 0.7;
      const circleSize = 20 + Math.sin(time * 2) * 10;

      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.beginPath();
      ctx.arc(circleX, circleY, circleSize, 0, Math.PI * 2);
      ctx.stroke();

      // Reset global alpha
      ctx.globalAlpha = 1;

      // Draw energy waves
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
      ctx.lineWidth = 3;
      
      for (let i = 0; i < 3; i++) {
        const waveOffset = (time * 50 + i * 100) % (canvas.width + 200);
        const waveY = canvas.height * 0.5 + Math.sin(time + i) * 50;
        
        ctx.beginPath();
        ctx.moveTo(waveOffset - 100, waveY);
        ctx.lineTo(waveOffset, waveY + 20);
        ctx.lineTo(waveOffset + 100, waveY);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'radial-gradient(1200px 600px at 10% -10%, rgba(56,189,248,0.05), transparent 60%), radial-gradient(900px 500px at 110% 10%, rgba(168,85,247,0.03), transparent 60%)' }}
    />
  );
};

export default FuturisticAnimatedBackground;
