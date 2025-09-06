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
=======
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
>>>>>>> 6199d33325d356a811744dafd75451003f1abecd

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

<<<<<<< HEAD
    interface Particle {
=======
<<<<<<< HEAD
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
=======
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
>>>>>>> 6199d33325d356a811744dafd75451003f1abecd
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
<<<<<<< HEAD
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1
    });
=======
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
>>>>>>> d9a6993fd20f1270a4c530cf764d0ff2e4fc7414
>>>>>>> 6199d33325d356a811744dafd75451003f1abecd

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

<<<<<<< HEAD
    const updateParticles = () => {
      particles.forEach(particle => {
=======
<<<<<<< HEAD
      particlesRef.current.forEach((particle, index) => {
>>>>>>> 6199d33325d356a811744dafd75451003f1abecd
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

<<<<<<< HEAD
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
=======
=======
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
>>>>>>> d9a6993fd20f1270a4c530cf764d0ff2e4fc7414
>>>>>>> 6199d33325d356a811744dafd75451003f1abecd
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${particle.opacity})`;
        ctx.fill();
<<<<<<< HEAD

        // Draw connections
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
=======
      });

      // Draw connections
      particles.forEach((particle, i) => {
<<<<<<< HEAD
        particles.slice(i + 1).forEach(otherParticle => {
=======
        particles.slice(i + 1).forEach((otherParticle) => {
>>>>>>> 6199d33325d356a811744dafd75451003f1abecd
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
<<<<<<< HEAD
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - distance / 100)})`;
=======
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
>>>>>>> 6199d33325d356a811744dafd75451003f1abecd
            ctx.lineWidth = 1;
            ctx.stroke();
>>>>>>> d9a6993fd20f1270a4c530cf764d0ff2e4fc7414
          }
        });
      });

<<<<<<< HEAD
    const animate = () => {
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
=======
<<<<<<< HEAD
      animationRef.current = requestAnimationFrame(animate);
>>>>>>> 6199d33325d356a811744dafd75451003f1abecd
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
<<<<<<< HEAD
      cancelAnimationFrame(animationId);
=======
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
=======
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
>>>>>>> d9a6993fd20f1270a4c530cf764d0ff2e4fc7414
>>>>>>> 6199d33325d356a811744dafd75451003f1abecd
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
<<<<<<< HEAD
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
=======
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
>>>>>>> 6199d33325d356a811744dafd75451003f1abecd
    />
  );
};

export default ParticleBackground;