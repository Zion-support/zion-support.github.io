import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyber' | 'neon' | 'matrix' | 'holographic';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({
  children,
  variant = 'default',
  intensity = 'medium',
  className = ''
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
      color: string;
      alpha: number;
      life: number;
    }> = [];

    const createParticle = () => {
      const colors = ['#00ffff', '#8b5cf6', '#ec4899', '#3b82f6', '#10b981'];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.8 + 0.2,
        life: 1
      };
    };

    // Initialize particles based on intensity
    const particleCount = intensity === 'low' ? 20 : intensity === 'medium' ? 50 : 100;
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.01;
        particle.alpha = particle.life;

        // Reset particle if it's dead or out of bounds
        if (particle.life <= 0 || particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
          particles[index] = createParticle();
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
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
        });
      });

      // Add variant-specific effects
      switch (variant) {
        case 'cyber':
          drawCyberGrid(ctx, canvas);
          break;
        case 'matrix':
          drawMatrixEffect(ctx, canvas);
          break;
        case 'holographic':
          drawHolographicEffect(ctx, canvas);
          break;
        case 'neon':
          drawNeonEffect(ctx, canvas);
          break;
        default:
          break;
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
    const gridSize = 40;
    const offsetX = (Date.now() * 0.01) % gridSize;
    const offsetY = (Date.now() * 0.01) % gridSize;

    ctx.save();
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.3;

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

    ctx.restore();
  };

  const drawMatrixEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(0);

    ctx.save();
    ctx.fillStyle = '#0f0';
    ctx.font = '15px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = String.fromCharCode(0x30A0 + Math.random() * 33);
      ctx.fillText(text, i * 20, drops[i] * 20);

      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    ctx.restore();
  };

  const drawHolographicEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const time = Date.now() * 0.001;
    
    ctx.save();
    ctx.globalAlpha = 0.1;
    
    for (let i = 0; i < 5; i++) {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time + i) * 100,
        canvas.height / 2 + Math.cos(time + i) * 100,
        0,
        canvas.width / 2 + Math.sin(time + i) * 100,
        canvas.height / 2 + Math.cos(time + i) * 100,
        200
      );
      
      gradient.addColorStop(0, `hsl(${(time * 50 + i * 60) % 360}, 100%, 50%)`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    ctx.restore();
  };

  const drawNeonEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const time = Date.now() * 0.001;
    
    ctx.save();
    ctx.globalAlpha = 0.2;
    
    // Draw pulsing circles
    for (let i = 0; i < 3; i++) {
      const x = canvas.width / 2 + Math.sin(time + i * 2) * 200;
      const y = canvas.height / 2 + Math.cos(time + i * 2) * 200;
      const radius = 50 + Math.sin(time * 2 + i) * 20;
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `hsl(${(time * 100 + i * 120) % 360}, 100%, 50%)`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.restore();
  };

  return (
    <div className={`relative ${className}`}>
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

export default FuturisticBackground;