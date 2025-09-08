<<<<<<< HEAD

import React, { useEffect, useRef } from 'react';
const ParticleBackground: React.FC = () => {,
  const canvasRef = useRef<HTMLCanvasElement>(null);

=======
<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
=======
<<<<<<< HEAD
import React, { useEffect, useRef } from 'react;
=======
import React, { useEffect, useRef } from 'react';
const ParticleBackground: React.FC = () => {,
  const canvasRef = useRef<HTMLCanvasElement>(null);
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

<<<<<<< HEAD


=======
<<<<<<< HEAD
const ParticleBackground: React.FC = () => {
=======
<<<<<<< HEAD
const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 50,
  className = ''
}) => {
=======
const ParticleBackground: React.FC = () => {
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;,

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    interface Particle {
      x: number;,
      y: number;,
      vx: number;,
      vy: number;,
      size: number;,
      opacity: number;
    }
    const particles: Particle[] = [];,
    const particleCount = 50;

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/ParticleBackground.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
      particles.forEach(particle => {
    };
=======
      particles.forEach(particle => {}
=======
>>>>>>> merged-prs-20250907-203621
    };
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges

      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      });
<<<<<<< HEAD
    };
=======
    }
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;`
        ctx.fill();

        // Draw connections
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/ParticleBackground.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
<<<<<<< HEAD
    };
=======
      });
    }
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }

          }
        });
      animationId = requestAnimationFrame(animate);

<<<<<<< HEAD


=======
<<<<<<< HEAD
    const animate = () => {
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    }
=======
>>>>>>> merged-prs-20250907-203621
      animationRef.current = requestAnimationFrame(animate);
    };
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src/components/ParticleBackground.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleCount]);
>>>>>>> origin/cursor/delete-old-data-records-6bba


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