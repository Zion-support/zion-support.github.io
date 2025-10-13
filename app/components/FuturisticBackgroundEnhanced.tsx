import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundEnhancedProps {
  children: React.ReactNode;
  variant?: 'cyber-grid' | 'quantum-field' | 'matrix-rain' | 'particle-system' | 'holographic';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const FuturisticBackgroundEnhanced: React.FC<FuturisticBackgroundEnhancedProps> = ({
  children,
  variant = 'cyber-grid',
  intensity = 'medium',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (variant === 'particle-system' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let animationId: number;
      const particles: Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        color: string;
        opacity: number;
      }> = [];

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      const createParticle = () => {
        const colors = [
          'rgba(139, 92, 246, 0.6)',
          'rgba(236, 72, 153, 0.6)',
          'rgba(6, 182, 212, 0.6)',
          'rgba(16, 185, 129, 0.6)',
          'rgba(59, 130, 246, 0.6)'
        ];

        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.8 + 0.2
        };
      };

      const initParticles = () => {
        const particleCount = intensity === 'low' ? 20 : intensity === 'medium' ? 50 : 100;
        for (let i = 0; i < particleCount; i++) {
          particles.push(createParticle());
        }
      };

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity;
          ctx.fill();

          // Connect nearby particles
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex) {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`;
                ctx.lineWidth = 1;
                ctx.globalAlpha = 0.3;
                ctx.stroke();
              }
            }
          });
        });

        animationId = requestAnimationFrame(animate);
      };

      resizeCanvas();
      initParticles();
      animate();

      window.addEventListener('resize', resizeCanvas);

      return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationId);
      };
    }
  }, [variant, intensity]);

  const getBackgroundClass = () => {
    const baseClass = 'min-h-screen relative';
    const variantClass = {
      'cyber-grid': 'cyber-grid-enhanced',
      'quantum-field': 'quantum-field',
      'matrix-rain': 'matrix-rain-enhanced',
      'particle-system': 'particle-system',
      'holographic': 'holographic-enhanced'
    }[variant];

    const intensityClass = {
      'low': 'opacity-30',
      'medium': 'opacity-60',
      'high': 'opacity-90'
    }[intensity];

    return `${baseClass} ${variantClass} ${intensityClass} ${className}`.trim();
  };

  return (
    <div className={getBackgroundClass()}>
      {variant === 'particle-system' && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackgroundEnhanced;