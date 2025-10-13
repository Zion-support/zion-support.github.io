import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'cyber' | 'neural' | 'matrix' | 'holographic' | 'particles';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({
  children,
  variant = 'cyber',
  intensity = 'medium',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (variant === 'particles' && canvasRef.current) {
      const canvas = canvasRef.current;
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

      const colors = ['#06b6d4', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];
      const particleCount = intensity === 'high' ? 100 : intensity === 'medium' ? 50 : 25;

      // Initialize particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
          // Update position
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

              if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = particle.color;
                ctx.globalAlpha = (150 - distance) / 150 * 0.2;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          });
        });

        ctx.globalAlpha = 1;
        animationRef.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener('resize', resizeCanvas);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [variant, intensity]);

  const getBackgroundClass = () => {
    const baseClass = 'relative min-h-screen overflow-hidden';
    const variantClass = {
      cyber: 'cyber-grid',
      neural: 'neural-network-bg',
      matrix: 'matrix-rain',
      holographic: 'holographic',
      particles: ''
    }[variant];
    
    const intensityClass = {
      low: 'opacity-30',
      medium: 'opacity-60',
      high: 'opacity-90'
    }[intensity];

    return `${baseClass} ${variantClass} ${intensityClass} ${className}`.trim();
  };

  return (
    <div className={getBackgroundClass()}>
      {variant === 'particles' && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        />
      )}
      
      {/* Additional visual effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Scan lines */}
        <div className="absolute inset-0 scan-lines"></div>
        
        {/* Glitch effect overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;