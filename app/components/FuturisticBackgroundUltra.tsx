import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundUltraProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyber' | 'neon' | 'holographic' | 'matrix';
  intensity?: 'low' | 'medium' | 'high';
}

const FuturisticBackgroundUltra: React.FC<FuturisticBackgroundUltraProps> = ({
  children,
  variant = 'default',
  intensity = 'medium'
}) => {
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

    const colors = [
      '#06b6d4', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'
    ];

    const createParticle = () => {
      const intensityMultiplier = intensity === 'high' ? 1.5 : intensity === 'medium' ? 1 : 0.5;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * intensityMultiplier,
        vy: (Math.random() - 0.5) * 2 * intensityMultiplier,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    };

    // Initialize particles based on intensity
    const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 100 : 50;
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
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
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.save();
              ctx.globalAlpha = (100 - distance) / 100 * 0.2;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });

      // Add variant-specific effects
      if (variant === 'cyber') {
        drawCyberGrid(ctx, canvas);
      } else if (variant === 'neon') {
        drawNeonLines(ctx, canvas);
      } else if (variant === 'holographic') {
        drawHolographicWaves(ctx, canvas);
      } else if (variant === 'matrix') {
        drawMatrixRain(ctx, canvas);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawCyberGrid = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const gridSize = 50;
      const opacity = 0.1;

      ctx.save();
      ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawNeonLines = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      
      ctx.save();
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#06b6d4';

      // Draw animated neon lines
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2 + Math.sin(time + i) * 100);
        ctx.lineTo(canvas.width, canvas.height / 2 + Math.sin(time + i + 1) * 100);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawHolographicWaves = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.002;
      
      ctx.save();
      
      for (let i = 0; i < 3; i++) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, `rgba(6, 182, 212, ${0.1 - i * 0.03})`);
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${0.1 - i * 0.03})`);
        gradient.addColorStop(1, `rgba(236, 72, 153, ${0.1 - i * 0.03})`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x < canvas.width; x += 10) {
          const y = canvas.height / 2 + Math.sin((x * 0.01) + time + i) * (50 + i * 20);
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    };

    const drawMatrixRain = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.01;
      
      ctx.save();
      ctx.fillStyle = '#06b6d4';
      ctx.font = '14px monospace';

      for (let i = 0; i < 50; i++) {
        const x = (i * canvas.width) / 50;
        const y = (time * 10 + i * 20) % (canvas.height + 20);
        
        ctx.globalAlpha = Math.max(0, 1 - (y / canvas.height));
        ctx.fillText(String.fromCharCode(0x30A0 + Math.random() * 96), x, y);
      }

      ctx.restore();
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackgroundUltra;