import React, { useEffect, useRef } from 'react';

interface FuturisticAnimatedBackground2029Props extends React.PropsWithChildren<{}> {}

const FuturisticAnimatedBackground2029: React.FC<FuturisticAnimatedBackground2029Props> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.maxLife = Math.random() * 200 + 100;
        this.life = this.maxLife;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Add some gravity effect
        this.vy += 0.01;
      }

      draw() {
        if (ctx) {
          const alpha = this.life / this.maxLife;
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();

          // Add glow effect
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.restore();
        }
      }

      isDead() {
        return this.life <= 0;
      }
    }

    // Grid system
    class Grid {
      spacing: number;
      offsetX: number;
      offsetY: number;

      constructor() {
        this.spacing = 50;
        this.offsetX = 0;
        this.offsetY = 0;
      }

      update() {
        this.offsetX += 0.5;
        this.offsetY += 0.3;
      }

      draw() {
        if (ctx) {
          ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
          ctx.lineWidth = 1;

          // Vertical lines
          for (let x = this.offsetX % this.spacing; x < canvas.width; x += this.spacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
          }

          // Horizontal lines
          for (let y = this.offsetY % this.spacing; y < canvas.height; y += this.spacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }
        }
      }
    }

    // Connection lines between particles
    class ConnectionSystem {
      particles: Particle[];

      constructor(particles: Particle[]) {
        this.particles = particles;
      }

      draw() {
        if (ctx) {
          for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
              const dx = this.particles[i].x - this.particles[j].x;
              const dy = this.particles[i].y - this.particles[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 100) {
                const alpha = (100 - distance) / 100 * 0.3;
                ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(this.particles[i].x, this.particles[i].y);
                ctx.lineTo(this.particles[j].x, this.particles[j].y);
                ctx.stroke();
              }
            }
          }
        }
      }
    }

    // Initialize systems
    const particles: Particle[] = [];
    const grid = new Grid();
    let connectionSystem: ConnectionSystem;

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    connectionSystem = new ConnectionSystem(particles);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw grid
      grid.update();
      grid.draw();

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update();
        particle.draw();

        if (particle.isDead()) {
          particles.splice(i, 1);
          particles.push(new Particle());
        }
      }

      // Draw connections
      connectionSystem.draw();

      // Add some futuristic effects
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default FuturisticAnimatedBackground2029;