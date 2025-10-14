import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'matrix' | 'cyber' | 'hologram' | 'neon';
  intensity?: 'low' | 'medium' | 'high';
  color?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green' | 'orange' | 'red';
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children,
  variant = 'default',
  intensity = 'medium',
  color = 'cyan'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const colorMap = {
    cyan: { primary: '#00d4ff', secondary: '#0099cc', accent: '#66e0ff' },
    purple: { primary: '#8b5cf6', secondary: '#7c3aed', accent: '#a78bfa' },
    pink: { primary: '#ec4899', secondary: '#db2777', accent: '#f472b6' },
    blue: { primary: '#3b82f6', secondary: '#2563eb', accent: '#60a5fa' },
    green: { primary: '#10b981', secondary: '#059669', accent: '#34d399' },
    orange: { primary: '#f59e0b', secondary: '#d97706', accent: '#fbbf24' },
    red: { primary: '#ef4444', secondary: '#dc2626', accent: '#f87171' }
  };

  const intensityMap = {
    low: { particles: 20, speed: 0.5, opacity: 0.3 },
    medium: { particles: 50, speed: 1, opacity: 0.5 },
    high: { particles: 100, speed: 1.5, opacity: 0.7 }
  };

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

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = colorMap[color];
    const config = intensityMap[intensity];

    // Initialize particles
    for (let i = 0; i < config.particles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * config.speed,
        vy: (Math.random() - 0.5) * config.speed,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * config.opacity,
        color: Math.random() > 0.5 ? colors.primary : colors.secondary
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
              ctx.strokeStyle = colors.accent;
              ctx.globalAlpha = (100 - distance) / 100 * 0.2;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });

      // Add variant-specific effects
      if (variant === 'matrix') {
        drawMatrixEffect(ctx, canvas, colors);
      } else if (variant === 'cyber') {
        drawCyberGrid(ctx, canvas, colors);
      } else if (variant === 'hologram') {
        drawHologramEffect(ctx, canvas, colors);
      } else if (variant === 'neon') {
        drawNeonEffect(ctx, canvas, colors);
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
  }, [variant, intensity, color]);

  const drawMatrixEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, colors: any) => {
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(0);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = colors.primary;
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = String.fromCharCode(0x30A0 + Math.random() * 96);
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  };

  const drawCyberGrid = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, colors: any) => {
    const gridSize = 50;
    const offsetX = (Date.now() * 0.01) % gridSize;
    const offsetY = (Date.now() * 0.01) % gridSize;

    ctx.strokeStyle = colors.primary;
    ctx.lineWidth = 1;
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
  };

  const drawHologramEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, colors: any) => {
    const time = Date.now() * 0.001;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Draw holographic rings
    for (let i = 0; i < 5; i++) {
      const radius = 50 + i * 100;
      const alpha = 0.1 - i * 0.02;
      
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 2;
      ctx.globalAlpha = alpha;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + Math.sin(time + i) * 10, 0, Math.PI * 2);
      ctx.stroke();
    }
  };

  const drawNeonEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, colors: any) => {
    const time = Date.now() * 0.002;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Draw neon lines
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + time;
      const x1 = centerX + Math.cos(angle) * 100;
      const y1 = centerY + Math.sin(angle) * 100;
      const x2 = centerX + Math.cos(angle) * 200;
      const y2 = centerY + Math.sin(angle) * 200;

      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 3;
      ctx.globalAlpha = 0.6;
      ctx.shadowBlur = 10;
      ctx.shadowColor = colors.primary;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
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

export default EnhancedFuturisticBackground;