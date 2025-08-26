<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';

interface FuturisticAnimatedBackground2029Props {
  className?: string;
}

export default function FuturisticAnimatedBackground2029({ className = '' }: FuturisticAnimatedBackground2029Props) {
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
        this.maxLife = Math.random() * 100 + 50;
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
      offset: number;

      constructor() {
        this.spacing = 60;
        this.offset = 0;
      }

      update() {
        this.offset += 0.5;
      }

      draw() {
        if (ctx) {
          ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)';
          ctx.lineWidth = 1;

          // Vertical lines
          for (let x = this.offset % this.spacing; x < canvas.width; x += this.spacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
          }

          // Horizontal lines
          for (let y = this.offset % this.spacing; y < canvas.height; y += this.spacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }
        }
      }
    }

    // Wave system
    class Wave {
      amplitude: number;
      frequency: number;
      speed: number;
      offset: number;

      constructor() {
        this.amplitude = 50;
        this.frequency = 0.02;
        this.speed = 0.02;
        this.offset = 0;
      }

      update() {
        this.offset += this.speed;
      }

      draw() {
        if (ctx) {
          ctx.strokeStyle = 'rgba(150, 100, 255, 0.3)';
          ctx.lineWidth = 2;
          ctx.beginPath();

          for (let x = 0; x < canvas.width; x++) {
            const y = Math.sin(x * this.frequency + this.offset) * this.amplitude + canvas.height / 2;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }

          ctx.stroke();
        }
      }
    }

    // Create instances
    const particles: Particle[] = [];
    const grid = new Grid();
    const waves: Wave[] = [];

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // Initialize waves
    for (let i = 0; i < 3; i++) {
      const wave = new Wave();
      wave.amplitude = 30 + i * 20;
      wave.frequency = 0.01 + i * 0.005;
      wave.speed = 0.01 + i * 0.005;
      waves.push(wave);
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw grid
      grid.update();
      grid.draw();

      // Update and draw waves
      waves.forEach(wave => {
        wave.update();
        wave.draw();
      });

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.isDead()) {
          particles[index] = new Particle();
        }
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const alpha = 1 - distance / 100;
            ctx.strokeStyle = `rgba(100, 200, 255, ${alpha * 0.1})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Add floating geometric shapes
      const time = Date.now() * 0.001;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(time * 0.1);

      // Draw rotating hexagon
      ctx.strokeStyle = 'rgba(255, 100, 200, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = Math.cos(angle) * 150;
        const y = Math.sin(angle) * 150;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();

      // Draw inner triangle
      ctx.strokeStyle = 'rgba(100, 255, 200, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3 + time * 0.5;
        const x = Math.cos(angle) * 100;
        const y = Math.sin(angle) * 100;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();

      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
    </div>
  );
}

=======
import React from 'react';

interface FuturisticAnimatedBackground2029Props {
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

export default function FuturisticAnimatedBackground2029({
  children,
  intensity = 'medium',
  colorScheme = 'quantum-fusion',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeonEffects = true,
  enableSpaceTime = true
}: FuturisticAnimatedBackground2029Props) {
  const getIntensityClass = () => {
    switch (intensity) {
      case 'low': return 'opacity-30';
      case 'medium': return 'opacity-60';
      case 'high': return 'opacity-90';
      default: return 'opacity-60';
    }
  };

  const getColorSchemeClass = () => {
    switch (colorScheme) {
      case 'quantum-fusion':
        return 'from-cyan-500/20 via-purple-500/20 to-pink-500/20';
      case 'neon-cyber':
        return 'from-green-500/20 via-blue-500/20 to-purple-500/20';
      case 'space-time':
        return 'from-indigo-500/20 via-purple-500/20 to-cyan-500/20';
      default:
        return 'from-cyan-500/20 via-purple-500/20 to-pink-500/20';
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getColorSchemeClass()} ${getIntensityClass()}`}>
        {/* Animated Particles */}
        {Array.from({ length: particleCount }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Holographic Grid */}
        {enableHolographic && (
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(255,255,255,0.1)_50%)] bg-[length:20px_20px]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_50%,rgba(255,255,255,0.1)_50%)] bg-[length:20px_20px]" />
          </div>
        )}
        
        {/* Quantum Effects */}
        {enableQuantumEffects && (
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        )}
        
        {/* Neon Effects */}
        {enableNeonEffects && (
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60" />
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60" />
          </div>
        )}
        
        {/* Space-Time Effects */}
        {enableSpaceTime && (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]" />
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-43b7
