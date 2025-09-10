
import React, { useEffect, useRef } from 'react';
const ParticleBackground: React.FC = () => {,
  const canvasRef = useRef<HTMLCanvasElement>(null);

import React, { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react;


const ParticleBackground: React.FC = () => {
const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 50,
  className = ''
}) => {


:src/components/ParticleBackground.tsx
    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    const updateParticles = () => {
      particles.forEach(particle => {
    };


      });
    };


:src/components/ParticleBackground.tsx
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
    };


    const animate = () => {
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    }
:src/components/ParticleBackground.tsx
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleCount]);


      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);,
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0""
      style={{ background: 'transparent' }}'
    />
  );
};

export default ParticleBackground;