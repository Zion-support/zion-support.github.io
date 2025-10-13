import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyber' | 'matrix' | 'holographic';
  intensity?: 'low' | 'medium' | 'high';
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ 
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

    const createParticle = () => {
      const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    };

    // Initialize particles based on intensity
    const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
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
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
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
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = (100 - distance) / 100 * 0.2;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });

      // Add variant-specific effects
      if (variant === 'cyber') {
        drawCyberGrid(ctx, canvas);
      } else if (variant === 'matrix') {
        drawMatrixRain(ctx, canvas);
      } else if (variant === 'holographic') {
        drawHolographicWaves(ctx, canvas);
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
  }, [variant, intensity]);

  const drawCyberGrid = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const gridSize = 50;
    const offsetX = (Date.now() * 0.01) % gridSize;
    const offsetY = (Date.now() * 0.005) % gridSize;

    ctx.strokeStyle = '#00ffff';
    ctx.globalAlpha = 0.3;
    ctx.lineWidth = 1;

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
  };

  const drawMatrixRain = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(0);

    for (let i = 0; i < drops.length; i++) {
      const char = String.fromCharCode(0x30A0 + Math.random() * 96);
      ctx.fillStyle = '#00ff00';
      ctx.globalAlpha = 0.8;
      ctx.font = '15px monospace';
      ctx.fillText(char, i * 20, drops[i] * 20);

      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  };

  const drawHolographicWaves = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const time = Date.now() * 0.001;
    
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.strokeStyle = `hsl(${(time * 50 + i * 60) % 360}, 100%, 50%)`;
      ctx.globalAlpha = 0.3;
      ctx.lineWidth = 2;

      for (let x = 0; x < canvas.width; x += 2) {
        const y = canvas.height / 2 + 
          Math.sin((x * 0.01) + time + i) * 50 +
          Math.sin((x * 0.02) + time * 2 + i) * 25;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;