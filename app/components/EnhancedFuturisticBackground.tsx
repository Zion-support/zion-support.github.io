import React, { useEffect, useRef } from 'react';

interface EnhancedFuturisticBackgroundProps {
  children?: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'cyber' | 'neon' | 'holographic' | 'matrix';
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children,
  intensity = 'medium',
  theme = 'cyber'
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
      const colors = ['#06b6d4', '#8b5cf6', '#ec4899', '#3b82f6', '#10b981'];
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

        // Draw connections
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

      // Add theme-specific effects
      if (theme === 'matrix') {
        drawMatrixEffect(ctx, canvas);
      } else if (theme === 'holographic') {
        drawHolographicEffect(ctx, canvas);
      } else if (theme === 'neon') {
        drawNeonEffect(ctx, canvas);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawMatrixEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const columns = Math.floor(canvas.width / 20);
      const drops: number[] = new Array(columns).fill(0);

      for (let i = 0; i < drops.length; i++) {
        if (Math.random() < 0.05) {
          drops[i] = 0;
        }

        ctx.save();
        ctx.fillStyle = '#06b6d4';
        ctx.globalAlpha = 0.1;
        ctx.fillText('01', i * 20, drops[i] * 20);
        ctx.restore();

        drops[i]++;
      }
    };

    const drawHolographicEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.1)');
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0.1)');

      ctx.save();
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    };

    const drawNeonEffect = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      // Draw neon grid
      ctx.save();
      ctx.strokeStyle = '#06b6d4';
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
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
  }, [intensity, theme]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Additional CSS-based effects */}
      <div className="absolute inset-0 futuristic-bg">
        <div className="particle-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Theme-specific overlays */}
        {theme === 'cyber' && (
          <div className="cyber-grid absolute inset-0" />
        )}
        
        {theme === 'matrix' && (
          <div className="matrix-rain absolute inset-0" />
        )}
        
        {theme === 'holographic' && (
          <div className="holographic-bg absolute inset-0" />
        )}
      </div>
      
      {children}
    </div>
  );
};

export default EnhancedFuturisticBackground;