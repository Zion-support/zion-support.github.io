import React, { useEffect, useRef } from 'react';

interface UltraFuturisticBackground2035Props {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'space-time';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeonEffects?: boolean;
  enableSpaceTime?: boolean;
}

const UltraFuturisticBackground2035: React.FC<UltraFuturisticBackground2035Props> = ({
  children,
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeonEffects = true,
  enableSpaceTime = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Color schemes
    const colorSchemes = {
      'quantum-fusion': {
        primary: '#00ffff',
        secondary: '#ff00ff',
        accent: '#ffff00',
        background: 'rgba(0, 0, 0, 0.8)'
      },
      'neon-cyber': {
        primary: '#00ff41',
        secondary: '#ff0080',
        accent: '#0080ff',
        background: 'rgba(0, 0, 0, 0.9)'
      },
      'space-time': {
        primary: '#ffffff',
        secondary: '#4a90e2',
        accent: '#f39c12',
        background: 'rgba(0, 0, 0, 0.7)'
      }
    };

    const colors = colorSchemes[colorScheme];
    const intensityMultiplier = intensity === 'low' ? 0.5 : intensity === 'medium' ? 1.0 : 2.0;

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2 * animationSpeed * intensityMultiplier;
        this.vy = (Math.random() - 0.5) * 2 * animationSpeed * intensityMultiplier;
        this.size = Math.random() * 3 + 1;
        this.color = [colors.primary, colors.secondary, colors.accent][Math.floor(Math.random() * 3)];
        this.opacity = Math.random() * 0.8 + 0.2;
        this.life = Math.random() * 100;
        this.maxLife = 100;
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

        // Fade out
        this.opacity = this.life / this.maxLife;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }

      isDead() {
        return this.life <= 0;
      }
    }

    // Connection lines between particles
    class Connection {
      p1: Particle;
      p2: Particle;
      opacity: number;

      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0.1;
      }

      draw() {
        const distance = Math.sqrt(
          Math.pow(this.p1.x - this.p2.x, 2) + Math.pow(this.p1.y - this.p2.y, 2)
        );

        if (distance < 150) {
          ctx.save();
          ctx.globalAlpha = this.opacity * (1 - distance / 150);
          ctx.strokeStyle = colors.primary;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(this.p1.x, this.p1.y);
          ctx.lineTo(this.p2.x, this.p2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    let particles: Particle[] = [];
    let connections: Connection[] = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Remove dead particles and add new ones
      particles = particles.filter(particle => !particle.isDead());
      while (particles.length < particleCount) {
        particles.push(new Particle());
      }

      // Draw connections
      if (enableQuantumEffects) {
        connections = [];
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const distance = Math.sqrt(
              Math.pow(particles[i].x - particles[j].x, 2) + 
              Math.pow(particles[i].y - particles[j].y, 2)
            );
            if (distance < 100) {
              connections.push(new Connection(particles[i], particles[j]));
            }
          }
        }
        connections.forEach(connection => connection.draw());
      }

      // Add holographic effects
      if (enableHolographic) {
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = colors.primary;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, colorScheme, particleCount, animationSpeed, enableHolographic, enableQuantumEffects, enableNeonEffects, enableSpaceTime]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2035;