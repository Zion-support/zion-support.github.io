import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD

interface ParticleBackgroundProps {
  particleCount?: number;
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 50,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

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
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
};

export default ParticleBackground;
=======
interface ParticleBackgroundProps  {particleCount?: number;
  className?: string;
}interface Particle  {x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}const ParticleBackground: React.FC<ParticleBackgroundProps> = ({particleCount = 50,className = '';
}) => {const canvasRef = useRef<HTMLCanvasElement>(null)const particlesRef = useRef<Particle[]>([])const animationRef  = useRef<number>()useEffect(() => {const canvas = canvasRef.current;
    if (!canvas) return;const ctx = canvas.getContext('2d')if (!ctx) return;const resizeCanvas = () => {canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
<<<<<<< HEAD
    }const createParticle = (): Particle => ({x: Math.random() * canvas.width,y: Math.random() * canvas.height,vx: (Math.random() - 0.5) * 0.5,vy: (Math.random() - 0.5) * 0.5,size: Math.random() * 2 + 1,opacity: Math.random() * 0.5 + 0.1;
    })const initParticles = () => {particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {particlesRef.current.push(createParticle())}
    }const updateParticles = () => {particlesRef.current.forEach(particle => {particle.x += particle.vx;
        particle.y += particle.vy;// Wrap around screen;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      })}const drawParticles = () => {ctx.clearRect(0, 0, canvas.width, canvas.height)particlesRef.current.forEach((particle, index) => {// Draw particle;
        ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill()// Draw connections;
        particlesRef.current.forEach((otherParticle, otherIndex) => {if (index !== otherIndex) {const dx = particle.x - otherParticle.x;
=======
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
            const dy = particle.y - otherParticle.y;
            const distance  = Math.sqrt(dx * dx + dy * dy)if (distance < 100) {ctx.beginPath()ctx.moveTo(particle.x, particle.y)ctx.lineTo(otherParticle.x, otherParticle.y)ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
<<<<<<< HEAD
              ctx.stroke()}
          }
        })})}const animate = () => {updateParticles()drawParticles()animationRef.current = requestAnimationFrame(animate)}resizeCanvas()initParticles()animate()window.addEventListener('resize', () => {resizeCanvas()initParticles()})return () => {if (animationRef.current) {cancelAnimationFrame(animationRef.current)}
      window.removeEventListener('resize', resizeCanvas)}}, [particleCount])return (<canvas;
=======
              ctx.stroke();
            }
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ background: 'transparent' }}
    />;
  )}export default ParticleBackground;
>>>>>>> cursor/expand-services-advertise-and-build-project-e77d
