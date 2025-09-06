<<<<<<< HEAD
<<<<<<< HEAD
 const colorSchemes = {
  quantum: {
  resizeCanvas ();
window.addEventListener ('resize', resizeCanvas);
// Wrap around edges if (this.x < 0) this.x = canvas.width;
if (this.x > canvas.width) this.x = 0;
if (this.y < 0) this.y = canvas.height;
if (this.y > canvas.height) this.y = 0;
// Fade out near end of life if (this.life < 20) {
  

}let particles: Particle[] = [];
let connections: Connection[] = [];
// Initialize particles ctx.fillStyle = colors.primary;
ctx.font = `$ {
  fontSize 
}px monospace`;

const EnhancedFuturisticBackground: React.FC<
  EnhancedFuturisticBackgroundProps
> = ({
  children,
  className = '',
  intensity = 'medium',
  colorScheme = 'quantum',
  particleCount = 100,
  animationSpeed = 1,
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode,
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'cosmic';
  particleCount?: number;
  animationSpeed?: number
}

=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode,
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'cosmic';
  particleCount?: number;
  animationSpeed?: number
}

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children;
  className = '';
  intensity = 'medium';
  colorScheme = 'quantum';
  particleCount = 100;
  animationSpeed = 1
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  const colorSchemes = {
    quantum: {
<<<<<<< HEAD
=======
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
<<<<<<< HEAD
      background: 'rgba(0, 0, 0, 0.85)',
<<<<<<< HEAD
      particles: [
        '#00ffff',
        '#ff00ff',
        '#ffff00',
        '#00ff00',
        '#ff0080',
        '#8000ff',
      ],
      glow: '#00ffff',
=======
    particles: ['#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff'],
      glow: '#00ffff'
    
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    },
=======
      background: 'rgba(0, 0, 0, 0.85)';
      particles: ['#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff'],
      glow: '#00ffff'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    cyberpunk: {
      primary: '#ff0080',
      secondary: '#00ffff',
      accent: '#ffff00',
<<<<<<< HEAD
      background: 'rgba(20, 0, 40, 0.9)',
<<<<<<< HEAD
      particles: [
        '#ff0080',
        '#00ffff',
        '#ffff00',
        '#ff4000',
        '#8000ff',
        '#00ff80',
      ],
      glow: '#ff0080',
    },
=======
      background: 'rgba(20, 0, 40, 0.9)';
      particles: ['#ff0080#00ffff#ffff00#ff4000#8000ff#00ff80'],
      glow: '#ff0080'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    holographic: {
=======
    particles: ['#ff0080#00ffff#ffff00#ff4000#8000ff#00ff80'],
      glow: '#ff0080'
    };
    holographic: {
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
<<<<<<< HEAD
      background: 'rgba(0, 20, 40, 0.85)',
<<<<<<< HEAD
      particles: [
        '#00ffff',
        '#ff00ff',
        '#ffff00',
        '#00ff80',
        '#ff8000',
        '#8000ff',
      ],
      glow: '#00ffff',
=======
    particles: ['#00ffff#ff00ff#ffff00#00ff80#ff8000#8000ff'],
      glow: '#00ffff'
    
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    },
=======
      background: 'rgba(0, 20, 40, 0.85)';
      particles: ['#00ffff#ff00ff#ffff00#00ff80#ff8000#8000ff'],
      glow: '#00ffff'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    neural: {
      primary: '#00ff80',
      secondary: '#ff0080',
      accent: '#ffff00',
<<<<<<< HEAD
      background: 'rgba(0, 40, 20, 0.9)',
<<<<<<< HEAD
      particles: [
        '#00ff80',
        '#ff0080',
        '#ffff00',
        '#00ffff',
        '#ff8000',
        '#8000ff',
      ],
      glow: '#00ff80',
    },
=======
    particles: ['#00ff80#ff0080#ffff00#00ffff#ff8000#8000ff'],
      glow: '#00ff80'
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      background: 'rgba(0, 40, 20, 0.9)';
      particles: ['#00ff80#ff0080#ffff00#00ffff#ff8000#8000ff'],
      glow: '#00ff80'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    cosmic: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1',
<<<<<<< HEAD
      background: 'rgba(10, 10, 30, 0.9)',
<<<<<<< HEAD
      particles: [
        '#ff6b6b',
        '#4ecdc4',
        '#45b7d1',
        '#96ceb4',
        '#feca57',
        '#ff9ff3',
      ],
      glow: '#4ecdc4',
    },
=======
    particles: ['#ff6b6b#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3'],
      glow: '#4ecdc4'
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      background: 'rgba(10, 10, 30, 0.9)';
      particles: ['#ff6b6b#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3'],
      glow: '#4ecdc4'
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const intensitySettings = {
    low: { particleCount: 40, speed: 0.45, size: 2, opacity: 0.25 },
    medium: { particleCount: 90, speed: 0.9, size: 3, opacity: 0.45 },
<<<<<<< HEAD
<<<<<<< HEAD
    high: { particleCount: 160, speed: 1.25, size: 3.5, opacity: 0.6 },
=======
    high: { particleCount: 160, speed: 1.25, size: 3.5, opacity: 0.6 }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    high: { particleCount: 160, speed: 1.25, size: 3.5, opacity: 0.6 }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
<<<<<<< HEAD
<<<<<<< HEAD
      canvas.height = window.innerHeight;
=======
      canvas.height = window.innerHeight
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      canvas.height = window.innerHeight
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = colorSchemes[colorScheme];
    const settings = intensitySettings[intensity];

    // Enhanced particle system
    class Particle {
<<<<<<< HEAD
<<<<<<< HEAD
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      life: number;
      maxLife: number;

=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number,
      life: number,
      maxLife: number,
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * settings.speed * animationSpeed;
        this.vy = (Math.random() - 0.5) * settings.speed * animationSpeed;
        this.size = Math.random() * settings.size + 1;
<<<<<<< HEAD
<<<<<<< HEAD
        this.color =
          colors.particles[Math.floor(Math.random() * colors.particles.length)];
        this.opacity = Math.random() * settings.opacity;
        this.life = Math.random() * 100;
        this.maxLife = 100;
=======
        this.color = colors.particles[Math.floor(Math.random() * colors.particles.length)];
        this.opacity = Math.random() * settings.opacity;
        this.life = Math.random() * 100;
        this.maxLife = 100
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        this.color = colors.particles[Math.floor(Math.random() * colors.particles.length)];
        this.opacity = Math.random() * settings.opacity;
        this.life = Math.random() * 100;
        this.maxLife = 100
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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

        // Fade out near end of life
        if (this.life < 20) {
<<<<<<< HEAD
<<<<<<< HEAD
          this.opacity *= 0.95;
=======
          this.opacity *= 0.95
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          this.opacity *= 0.95
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
<<<<<<< HEAD

=======
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
<<<<<<< HEAD
<<<<<<< HEAD

        ctx.restore();
      }

      isDead() {
        return this.life <= 0 || this.opacity < 0.01;
=======
        
        ctx.restore()
      }

      isDead() {
        return this.life <= 0 || this.opacity < 0.01
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        ctx.restore()
      }

      isDead() {
        return this.life <= 0 || this.opacity < 0.01
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    }

    // Connection lines between particles
    class Connection {
<<<<<<< HEAD
<<<<<<< HEAD
      p1: Particle;
      p2: Particle;
      opacity: number;

      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0.1;
=======
      p1: Particle,
      p2: Particle,
      opacity: number,
      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0.1
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      p1: Particle,
      p2: Particle,
      opacity: number,
      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0.1
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }

      draw() {
        const distance = Math.sqrt(
<<<<<<< HEAD
<<<<<<< HEAD
          Math.pow(this.p1.x - this.p2.x, 2) +
            Math.pow(this.p1.y - this.p2.y, 2)
=======
          Math.pow(this.p1.x - this.p2.x, 2) + Math.pow(this.p1.y - this.p2.y, 2)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          Math.pow(this.p1.x - this.p2.x, 2) + Math.pow(this.p1.y - this.p2.y, 2)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        );

        if (distance < 150) {
          ctx.save();
          ctx.globalAlpha = this.opacity * (1 - distance / 150);
          ctx.strokeStyle = colors.glow;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(this.p1.x, this.p1.y);
          ctx.lineTo(this.p2.x, this.p2.y);
          ctx.stroke();
<<<<<<< HEAD
<<<<<<< HEAD
          ctx.restore();
=======
          ctx.restore()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          ctx.restore()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
      }
    }

<<<<<<< HEAD
    let particles: Particle[] = [];
    let connections: Connection[] = [];
<<<<<<< HEAD

    // Initialize particles
    for (let i = 0; i < settings.particleCount; i++) {
      particles.push(new Particle());
=======
    // Initialize particles
    for (let i = 0, i < settings.particleCount, i++) {
      particles.push(new Particle())
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    let particles: Particle[] = [],
    let connections: Connection[] = [],
    // Initialize particles
    for (let i = 0, i < settings.particleCount, i++) {
      particles.push(new Particle())
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    // Matrix rain effect
    const matrixRain = () => {
<<<<<<< HEAD
<<<<<<< HEAD
      const characters =
        '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
=======
      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      const fontSize = 12;
      const columns = canvas.width / fontSize;
      const drops: number[] = [],

<<<<<<< HEAD
<<<<<<< HEAD
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
=======
      for (let i = 0, i < columns, i++) {
        drops[i] = 1
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      for (let i = 0, i < columns, i++) {
        drops[i] = 1
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }

      const drawMatrix = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = colors.primary;
        ctx.font = `${fontSize}px monospace`;

<<<<<<< HEAD
<<<<<<< HEAD
        for (let i = 0; i < drops.length; i++) {
          const text =
            characters[Math.floor(Math.random() * characters.length)];
=======
        for (let i = 0, i < drops.length, i++) {
          const text = characters[Math.floor(Math.random() * characters.length)];
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }
          drops[i]++
        }
      };

<<<<<<< HEAD
      return drawMatrix;
=======
        for (let i = 0, i < drops.length, i++) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }
          drops[i]++
        }
      };

      return drawMatrix
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return drawMatrix
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    const drawMatrix = matrixRain();

    // Main animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw matrix rain
      drawMatrix();

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
<<<<<<< HEAD
<<<<<<< HEAD
        particle.draw();
=======
        particle.draw()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        particle.draw()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      });

      // Remove dead particles and add new ones
      particles = particles.filter(particle => !particle.isDead());
      while (particles.length < settings.particleCount) {
<<<<<<< HEAD
<<<<<<< HEAD
        particles.push(new Particle());
=======
        particles.push(new Particle())
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        particles.push(new Particle())
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }

      // Create connections between nearby particles
      connections = [];
<<<<<<< HEAD
<<<<<<< HEAD
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
=======
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) + 
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          if (distance < 150) {
<<<<<<< HEAD
            connections.push(new Connection(particles[i], particles[j]));
=======
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) + 
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          if (distance < 150) {
            connections.push(new Connection(particles[i], particles[j]))
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            connections.push(new Connection(particles[i], particles[j]))
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }
        }
      }

      // Draw connections
      connections.forEach(connection => connection.draw());

      // Add floating geometric shapes
      if (Math.random() < 0.02) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 20 + 10;
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 1;
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        if (Math.random() < 0.5) {
          // Draw triangle
          ctx.beginPath();
          ctx.moveTo(x, y - size);
          ctx.lineTo(x - size, y + size);
          ctx.lineTo(x + size, y + size);
          ctx.closePath();
<<<<<<< HEAD
<<<<<<< HEAD
          ctx.stroke();
=======
          ctx.stroke()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        } else {
          // Draw square
          ctx.strokeRect(x - size, y - size, size * 2, size * 2)
        }
        
        ctx.restore()
      }

      // Respect reduced motion
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      if (prefersReduced) {
        // Slow down updates
        setTimeout(() => {
          animationRef.current = requestAnimationFrame(animate)
        }, 100)
      } else {
<<<<<<< HEAD
        animationRef.current = requestAnimationFrame(animate);
=======
          ctx.stroke()
        } else {
          // Draw square
          ctx.strokeRect(x - size, y - size, size * 2, size * 2)
        }
        
        ctx.restore()
      }

      // Respect reduced motion
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      if (prefersReduced) {
        // Slow down updates
        setTimeout(() => {
          animationRef.current = requestAnimationFrame(animate)
        }, 100)
      } else {
        animationRef.current = requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        animationRef.current = requestAnimationFrame(animate)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
<<<<<<< HEAD
<<<<<<< HEAD
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
=======
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [colorScheme, intensity, particleCount, animationSpeed]);

  return (
    <div className={`relative min-h-screen ${className}`}>
      <canvas
        ref={canvasRef}
<<<<<<< HEAD
<<<<<<< HEAD
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
=======
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        style={{ background: 'transparent' }}
      />
      
      {/* Overlay gradient */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
};

<<<<<<< HEAD
export default EnhancedFuturisticBackground;
=======
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Overlay gradient */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
};

export default EnhancedFuturisticBackground;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default EnhancedFuturisticBackground;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
