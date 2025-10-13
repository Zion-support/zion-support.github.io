import React, { useRef, useEffect, useState } from 'react';

interface AdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'particles' | 'grid' | 'waves' | 'circuits';
  intensity?: 'low' | 'medium' | 'high';
  color?: 'cyan' | 'purple' | 'pink' | 'multi';
}

const AdvancedFuturisticBackground: React.FC<AdvancedFuturisticBackgroundProps> = ({
  children,
  variant = 'particles',
  intensity = 'medium',
  color = 'multi'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const intensityMultiplier = {
      low: 0.5,
      medium: 1,
      high: 1.5
    }[intensity];

    const particleCount = Math.floor(50 * intensityMultiplier);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: color === 'multi' 
          ? ['#06b6d4', '#8b5cf6', '#ec4899', '#10b981'][Math.floor(Math.random() * 4)]
          : color === 'cyan' ? '#06b6d4' : color === 'purple' ? '#8b5cf6' : '#ec4899'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;

      if (variant === 'particles') {
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
          ctx.globalAlpha = particle.opacity * (Math.sin(time + index) * 0.3 + 0.7);
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
                ctx.globalAlpha = (1 - distance / 100) * 0.2;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          });
        });
      } else if (variant === 'grid') {
        const gridSize = 50;
        const offsetX = (time * 20) % gridSize;
        const offsetY = (time * 15) % gridSize;

        for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize) {
          for (let y = -gridSize; y < canvas.height + gridSize; y += gridSize) {
            const gridX = x + offsetX;
            const gridY = y + offsetY;

            if (gridX >= 0 && gridX <= canvas.width && gridY >= 0 && gridY <= canvas.height) {
              ctx.beginPath();
              ctx.arc(gridX, gridY, 2, 0, Math.PI * 2);
              ctx.fillStyle = color === 'multi' ? '#06b6d4' : '#06b6d4';
              ctx.globalAlpha = Math.sin(time + x + y) * 0.5 + 0.5;
              ctx.fill();

              // Draw grid lines
              if (Math.random() > 0.7) {
                ctx.beginPath();
                ctx.moveTo(gridX, gridY);
                ctx.lineTo(gridX + gridSize, gridY);
                ctx.strokeStyle = '#06b6d4';
                ctx.globalAlpha = 0.3;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          }
        }
      } else if (variant === 'waves') {
        for (let i = 0; i < 5; i++) {
          const waveY = canvas.height / 2 + Math.sin(time + i) * 100;
          const waveHeight = 50 + Math.sin(time * 2 + i) * 20;

          ctx.beginPath();
          ctx.moveTo(0, waveY);
          for (let x = 0; x < canvas.width; x += 5) {
            const y = waveY + Math.sin((x / 50) + time + i) * waveHeight;
            ctx.lineTo(x, y);
          }
          ctx.strokeStyle = color === 'multi' ? ['#06b6d4', '#8b5cf6', '#ec4899', '#10b981'][i % 4] : '#06b6d4';
          ctx.globalAlpha = 0.6;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      } else if (variant === 'circuits') {
        // Draw circuit-like patterns
        const circuitPoints = [];
        for (let i = 0; i < 20; i++) {
          circuitPoints.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            connections: []
          });
        }

        circuitPoints.forEach((point, index) => {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#06b6d4';
          ctx.globalAlpha = 0.8;
          ctx.fill();

          // Connect to nearby points
          circuitPoints.forEach((otherPoint, otherIndex) => {
            if (index !== otherIndex) {
              const dx = point.x - otherPoint.x;
              const dy = point.y - otherPoint.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 150 && Math.random() > 0.7) {
                ctx.beginPath();
                ctx.moveTo(point.x, point.y);
                ctx.lineTo(otherPoint.x, otherPoint.y);
                ctx.strokeStyle = '#06b6d4';
                ctx.globalAlpha = 0.4;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          });
        });
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [dimensions, variant, intensity, color]);

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

export default AdvancedFuturisticBackground;
