import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundEnhancedProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyber' | 'neon' | 'holographic' | 'matrix';
  intensity?: 'low' | 'medium' | 'high';
}

const FuturisticBackgroundEnhanced: React.FC<FuturisticBackgroundEnhancedProps> = ({
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

    // Particle system for different variants
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    const createParticle = () => {
      const colors = {
        default: ['#00d4ff', '#8b5cf6', '#ec4899'],
        cyber: ['#00ff88', '#00d4ff', '#8b5cf6'],
        neon: ['#ff0080', '#00ff80', '#8000ff'],
        holographic: ['#00ffff', '#ff00ff', '#ffff00'],
        matrix: ['#00ff00', '#00ff88', '#88ff00']
      };

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[variant][Math.floor(Math.random() * colors[variant].length)],
        life: 0,
        maxLife: Math.random() * 200 + 100
      };
    };

    // Initialize particles
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
        particle.life++;
        particle.opacity = Math.max(0, particle.opacity - 0.005);

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle if it's dead
        if (particle.life > particle.maxLife || particle.opacity <= 0) {
          particles[index] = createParticle();
          return;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw connections between nearby particles
      if (variant === 'cyber' || variant === 'matrix') {
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.save();
              ctx.globalAlpha = (1 - distance / 100) * 0.3;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1;
              ctx.shadowBlur = 10;
              ctx.shadowColor = particle.color;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          });
        });
      }

      // Add special effects based on variant
      if (variant === 'holographic') {
        // Add holographic scan lines
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 1;
        for (let i = 0; i < canvas.height; i += 20) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i);
          ctx.stroke();
        }
        ctx.restore();
      }

      if (variant === 'matrix') {
        // Add matrix-style falling characters
        ctx.save();
        ctx.fillStyle = '#00ff00';
        ctx.font = '12px monospace';
        ctx.globalAlpha = 0.3;
        for (let i = 0; i < 20; i++) {
          const x = (canvas.width / 20) * i;
          const y = (Date.now() * 0.1 + i * 50) % canvas.height;
          ctx.fillText(String.fromCharCode(0x30A0 + Math.random() * 96), x, y);
        }
        ctx.restore();
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

  const getBackgroundClass = () => {
    const baseClass = 'min-h-screen relative overflow-hidden';
    const variantClasses = {
      default: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      cyber: 'bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 cyber-grid',
      neon: 'bg-gradient-to-br from-slate-900 via-pink-900 to-purple-900',
      holographic: 'bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900',
      matrix: 'bg-gradient-to-br from-black via-green-900 to-black'
    };
    return `${baseClass} ${variantClasses[variant]}`;
  };

  return (
    <div className={getBackgroundClass()}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      {/* Particle system canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Additional visual effects */}
      {variant === 'neon' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      )}

      {variant === 'holographic' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackgroundEnhanced;