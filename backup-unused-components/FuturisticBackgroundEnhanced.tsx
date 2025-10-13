import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundEnhancedProps {
  children: React.ReactNode;
  variant?: 'cyber-grid' | 'holographic' | 'quantum' | 'matrix' | 'neural';
  intensity?: 'low' | 'medium' | 'high';
  color?: 'purple' | 'cyan' | 'pink' | 'green' | 'blue' | 'rainbow';
}

const FuturisticBackgroundEnhanced: React.FC<FuturisticBackgroundEnhancedProps> = ({
  children,
  variant = 'cyber-grid',
  intensity = 'medium',
  color = 'rainbow'
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

    // Particle system for quantum effect
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

    const colors = {
      purple: '#8b5cf6',
      cyan: '#06b6d4',
      pink: '#ec4899',
      green: '#10b981',
      blue: '#3b82f6',
      rainbow: ['#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b']
    };

    const getColor = () => {
      if (color === 'rainbow') {
        return colors.rainbow[Math.floor(Math.random() * colors.rainbow.length)];
      }
      return colors[color as keyof typeof colors];
    };

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: getColor(),
        alpha: Math.random() * 0.8 + 0.2,
        life: 1
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
        particle.life -= 0.01;

        if (particle.life <= 0 || particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
          particles[index] = createParticle();
        }

        ctx.save();
        ctx.globalAlpha = particle.alpha * particle.life;
        ctx.fillStyle = particle.color;
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

          if (distance < 150) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 150) * 0.2;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      // Add variant-specific effects
      if (variant === 'matrix') {
        // Matrix rain effect
        ctx.fillStyle = '#10b981';
        ctx.font = '14px monospace';
        for (let i = 0; i < 50; i++) {
          const x = (i * canvas.width / 50) + Math.sin(Date.now() * 0.001 + i) * 10;
          const y = (Date.now() * 0.1 + i * 20) % canvas.height;
          ctx.fillText(String.fromCharCode(0x30A0 + Math.random() * 96), x, y);
        }
      } else if (variant === 'neural') {
        // Neural network connections
        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth = 1;
        particles.forEach((particle, i) => {
          if (i % 3 === 0) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(canvas.width / 2, canvas.height / 2);
            ctx.stroke();
          }
        });
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

  const getBackgroundClass = () => {
    const baseClass = 'relative min-h-screen';
    const variantClass = {
      'cyber-grid': 'cyber-grid-enhanced',
      'holographic': 'holographic-matrix',
      'quantum': 'quantum-particles',
      'matrix': 'data-stream',
      'neural': 'neural-network-bg'
    }[variant];

    return `${baseClass} ${variantClass}`;
  };

  return (
    <div className={getBackgroundClass()}>
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

export default FuturisticBackgroundEnhanced;