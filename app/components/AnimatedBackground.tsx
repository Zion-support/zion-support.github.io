import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'particles' | 'grid' | 'waves' | 'circuits' | 'matrix';
  intensity?: 'low' | 'medium' | 'high';
  color?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue';
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  variant = 'particles',
  intensity = 'medium',
  color = 'cyan',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const getColorValues = () => {
      switch (color) {
        case 'cyan':
          return { r: 34, g: 211, b: 238 };
        case 'purple':
          return { r: 147, g: 51, b: 234 };
        case 'pink':
          return { r: 236, g: 72, b: 153 };
        case 'green':
          return { r: 34, g: 197, b: 94 };
        case 'blue':
          return { r: 59, g: 130, b: 246 };
        default:
          return { r: 34, g: 211, b: 238 };
      }
    };

    const colorValues = getColorValues();
    const opacity = intensity === 'high' ? 0.8 : intensity === 'medium' ? 0.5 : 0.3;

    let animationId: number;

    if (variant === 'particles') {
      const particles: Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        opacity: number;
      }> = [];

      const particleCount = intensity === 'high' ? 100 : intensity === 'medium' ? 60 : 30;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * opacity
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${colorValues.r}, ${colorValues.g}, ${colorValues.b}, ${particle.opacity})`;
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
                ctx.strokeStyle = `rgba(${colorValues.r}, ${colorValues.g}, ${colorValues.b}, ${opacity * 0.3})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });
        });

        animationId = requestAnimationFrame(animate);
      };

      animate();
    } else if (variant === 'grid') {
      const gridSize = intensity === 'high' ? 20 : intensity === 'medium' ? 30 : 40;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const time = Date.now() * 0.001;
        
        for (let x = 0; x < canvas.width; x += gridSize) {
          for (let y = 0; y < canvas.height; y += gridSize) {
            const distance = Math.sqrt((x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2);
            const wave = Math.sin(distance * 0.01 - time * 2) * 0.5 + 0.5;
            
            ctx.beginPath();
            ctx.arc(x, y, wave * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${colorValues.r}, ${colorValues.g}, ${colorValues.b}, ${wave * opacity})`;
            ctx.fill();
          }
        }

        animationId = requestAnimationFrame(animate);
      };

      animate();
    } else if (variant === 'waves') {
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const time = Date.now() * 0.001;
        
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.moveTo(0, canvas.height / 2);
          
          for (let x = 0; x < canvas.width; x += 2) {
            const y = canvas.height / 2 + Math.sin(x * 0.01 + time + i * Math.PI / 3) * 50 * (i + 1);
            ctx.lineTo(x, y);
          }
          
          ctx.strokeStyle = `rgba(${colorValues.r}, ${colorValues.g}, ${colorValues.b}, ${opacity * (0.5 - i * 0.1)})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        animationId = requestAnimationFrame(animate);
      };

      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [variant, intensity, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
};

export default AnimatedBackground;