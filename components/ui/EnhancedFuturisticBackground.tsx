<<<<<<< HEAD
import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion',
interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode,
  className?: string,
  intensity?: 'low' | 'medium' | 'high',
  colorScheme?: 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'cosmic',
  particleCount?: number,
  animationSpeed?: number
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children,
  className = '',
  intensity = 'medium',
  colorScheme = 'quantum',
  particleCount = 100,
  animationSpeed = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null),
  const animationRef = useRef<number | undefined>(undefined),
=======
import React, {_useEffect, _useRef} from 'react';

interface EnhancedFuturisticBackgroundProps {_children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'cosmic';
  particleCount?: number;
  animationSpeed?: number;}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = (_{_children, _className = '', _intensity = 'medium', _colorScheme = 'quantum', _particleCount = 100, _animationSpeed = 1}) => {_const _canvasRef = useRef<HTMLCanvasElement>(null);
  const _animationRef = useRef<number | undefined>(undefined);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _colorSchemes = {
    quantum: {
<<<<<<< HEAD
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'rgba(0, 0, 0, 0.85)',
      particles: ['#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff'],
      glow: '#00ffff'
    },
    cyberpunk: {
      primary: '#ff0080',
      secondary: '#00ffff',
      accent: '#ffff00',
      background: 'rgba(20, 0, 40, 0.9)',
      particles: ['#ff0080#00ffff#ffff00#ff4000#8000ff#00ff80'],
      glow: '#ff0080'
    },
    holographic: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'rgba(0, 20, 40, 0.85)',
      particles: ['#00ffff#ff00ff#ffff00#00ff80#ff8000#8000ff'],
      glow: '#00ffff'
    },
    neural: {
      primary: '#00ff80',
      secondary: '#ff0080',
      accent: '#ffff00',
      background: 'rgba(0, 40, 20, 0.9)',
      particles: ['#00ff80#ff0080#ffff00#00ffff#ff8000#8000ff'],
      glow: '#00ff80'
    },
    cosmic: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1',
      background: 'rgba(10, 10, 30, 0.9)',
      particles: ['#ff6b6b#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3'],
      glow: '#4ecdc4'
    }
  },

  const intensitySettings = {
    low: { particleCount: 40, speed: 0.45, size: 2, opacity: 0.25 },
    medium: { particleCount: 90, speed: 0.9, size: 3, opacity: 0.45 },
    high: { particleCount: 160, speed: 1.25, size: 3.5, opacity: 0.6 }
  },

  useEffect(() => {
    const canvas = canvasRef.current,
    if (!canvas) return,

    const ctx = canvas.getContext('2d'),
    if (!ctx) return,

    const resizeCanvas = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight
    },
=======
      primary: '#00ffff', _secondary: '#ff00ff', _accent: '#ffff00', _background: 'rgba(0, _0, _0, _0.85)', _particles: ['#00ffff', _'#ff00ff', _'#ffff00', _'#00ff00', _'#ff0080', _'#8000ff'], _glow: '#00ffff'},
    cyberpunk: {_primary: '#ff0080', _secondary: '#00ffff', _accent: '#ffff00', _background: 'rgba(20, _0, _40, _0.9)', _particles: ['#ff0080', _'#00ffff', _'#ffff00', _'#ff4000', _'#8000ff', _'#00ff80'], _glow: '#ff0080'},
    holographic: {_primary: '#00ffff', _secondary: '#ff00ff', _accent: '#ffff00', _background: 'rgba(0, _20, _40, _0.85)', _particles: ['#00ffff', _'#ff00ff', _'#ffff00', _'#00ff80', _'#ff8000', _'#8000ff'], _glow: '#00ffff'},
    neural: {_primary: '#00ff80', _secondary: '#ff0080', _accent: '#ffff00', _background: 'rgba(0, _40, _20, _0.9)', _particles: ['#00ff80', _'#ff0080', _'#ffff00', _'#00ffff', _'#ff8000', _'#8000ff'], _glow: '#00ff80'},
    cosmic: {_primary: '#ff6b6b', _secondary: '#4ecdc4', _accent: '#45b7d1', _background: 'rgba(10, _10, _30, _0.9)', _particles: ['#ff6b6b', _'#4ecdc4', _'#45b7d1', _'#96ceb4', _'#feca57', _'#ff9ff3'], _glow: '#4ecdc4'}
  };

  const _intensitySettings = {_low: { particleCount: 40, _speed: 0.45, _size: 2, _opacity: 0.25},
    medium: {_particleCount: 90, _speed: 0.9, _size: 3, _opacity: 0.45},
    high: {_particleCount: 160, _speed: 1.25, _size: 3.5, _opacity: 0.6}
  };

  useEffect__(() => {_const _canvas = canvasRef.current;
    if (!canvas) return;

    const _ctx = canvas.getContext('2d');
    if (!ctx) return;

    const _resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    resizeCanvas(),
    window.addEventListener('resize', resizeCanvas),

<<<<<<< HEAD
    const colors = colorSchemes[colorScheme],
    const settings = intensitySettings[intensity],

    // Enhanced particle system
    class Particle {
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number,
      life: number,
      maxLife: number,

      constructor() {
        this.x = Math.random() * canvas.width,
        this.y = Math.random() * canvas.height,
        this.vx = (Math.random() - 0.5) * settings.speed * animationSpeed,
        this.vy = (Math.random() - 0.5) * settings.speed * animationSpeed,
        this.size = Math.random() * settings.size + 1,
        this.color = colors.particles[Math.floor(Math.random() * colors.particles.length)],
        this.opacity = Math.random() * settings.opacity,
        this.life = Math.random() * 100,
        this.maxLife = 100
      }

      update() {
        this.x += this.vx,
        this.y += this.vy,
        this.life--,
=======
    const _colors = colorSchemes[colorScheme];
    const _settings = intensitySettings[intensity];

    // Enhanced particle system
    class Particle {_x: number;
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
        this.vx = (Math.random() - 0.5) * settings.speed * animationSpeed;
        this.vy = (Math.random() - 0.5) * settings.speed * animationSpeed;
        this.size = Math.random() * settings.size + 1;
        this.color = colors.particles[Math.floor(Math.random() * colors.particles.length)];
        this.opacity = Math.random() * settings.opacity;
        this.life = Math.random() * 100;
        this.maxLife = 100;}

      update() {_this.x += this.vx;
        this.y += this.vy;
        this.life--;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width,
        if (this.x > canvas.width) this.x = 0,
        if (this.y < 0) this.y = canvas.height,
        if (this.y > canvas.height) this.y = 0,

        // Fade out near end of life
        if (this.life < 20) {
<<<<<<< HEAD
          this.opacity *= 0.95
        }
      }

      draw() {
        ctx.save(),
        ctx.globalAlpha = this.opacity,
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size),
        gradient.addColorStop(0, this.color),
        gradient.addColorStop(1, 'transparent'),
        
        ctx.fillStyle = gradient,
        ctx.beginPath(),
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2),
        ctx.fill(),
        
        ctx.restore()
      }

      isDead() {
        return this.life <= 0 || this.opacity < 0.01
      }
    }

    // Connection lines between particles
    class Connection {
      p1: Particle,
      p2: Particle,
      opacity: number,

      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1,
        this.p2 = p2,
        this.opacity = 0.1
      }

      draw() {
        const distance = Math.sqrt(
          Math.pow(this.p1.x - this.p2.x, 2) + Math.pow(this.p1.y - this.p2.y, 2)
        ),

        if (distance < 150) {
          ctx.save(),
          ctx.globalAlpha = this.opacity * (1 - distance / 150),
          ctx.strokeStyle = colors.glow,
          ctx.lineWidth = 0.5,
          ctx.beginPath(),
          ctx.moveTo(this.p1.x, this.p1.y),
          ctx.lineTo(this.p2.x, this.p2.y),
          ctx.stroke(),
          ctx.restore()
        }
=======
          this.opacity *= 0.95;}
      }

      draw() {_ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Create gradient for particle
        const _gradient = ctx.createRadialGradient(this.x, _this.y, _0, _this.x, _this.y, _this.size);
        gradient.addColorStop(0, _this.color);
        gradient.addColorStop(1, _'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, _this.y, _this.size, _0, _Math.PI * 2);
        ctx.fill();
        
        ctx.restore();}

      isDead() {_return this.life <= 0 || this.opacity < 0.01;}
    }

    // Connection lines between particles
    class Connection {_p1: Particle;
      p2: Particle;
      opacity: number;

      constructor(p1: Particle, _p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0.1;}

      draw() {_const _distance = Math.sqrt(
          Math.pow(this.p1.x - this.p2.x, _2) + Math.pow(this.p1.y - this.p2.y, _2)
        );

        if (distance < 150) {
          ctx.save();
          ctx.globalAlpha = this.opacity * (1 - distance / 150);
          ctx.strokeStyle = colors.glow;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(this.p1.x, _this.p1.y);
          ctx.lineTo(this.p2.x, _this.p2.y);
          ctx.stroke();
          ctx.restore();}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    }

    let particles: Particle[] = [],
    let connections: Connection[] = [],

    // Initialize particles
<<<<<<< HEAD
    for (let i = 0, i < settings.particleCount, i++) {
      particles.push(new Particle())
    }

    // Matrix rain effect
    const matrixRain = () => {
      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
      const fontSize = 12,
      const columns = canvas.width / fontSize,
      const drops: number[] = [],

      for (let i = 0, i < columns, i++) {
        drops[i] = 1
      }

      const drawMatrix = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.06)',
        ctx.fillRect(0, 0, canvas.width, canvas.height),
=======
    for (let i = 0; i < settings.particleCount; i++) {_particles.push(new Particle());}

    // Matrix rain effect
    const _matrixRain = () => {_const _characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const _fontSize = 12;
      const _columns = canvas.width / fontSize;
      const drops: number[] = [];

      for (let i = 0; i < columns; i++) {
        drops[i] = 1;}

      const _drawMatrix = () => {_ctx.fillStyle = 'rgba(0, _0, _0, _0.06)';
        ctx.fillRect(0, _0, _canvas.width, _canvas.height);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        ctx.fillStyle = colors.primary,
        ctx.font = `${fontSize}px monospace`,

<<<<<<< HEAD
        for (let i = 0, i < drops.length, i++) {
          const text = characters[Math.floor(Math.random() * characters.length)],
          ctx.fillText(text, i * fontSize, drops[i] * fontSize),

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }
          drops[i]++
=======
        for (let i = 0; i < drops.length; i++) {_const _text = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, _i * fontSize, _drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;}
          drops[i]++;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      },

      return drawMatrix
    },

<<<<<<< HEAD
    const drawMatrix = matrixRain(),

    // Main animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = colors.background,
      ctx.fillRect(0, 0, canvas.width, canvas.height),
=======
    const _drawMatrix = matrixRain();

    // Main animation loop
    const _animate = () => {_// Clear canvas with fade effect
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, _0, _canvas.width, _canvas.height);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      // Draw matrix rain
      drawMatrix(),

      // Update and draw particles
      particles.forEach(particle => {
<<<<<<< HEAD
        particle.update(),
        particle.draw()
      }),

      // Remove dead particles and add new ones
      particles = particles.filter(particle => !particle.isDead()),
      while (particles.length < settings.particleCount) {
        particles.push(new Particle())
      }

      // Create connections between nearby particles
      connections = [],
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) + 
            Math.pow(particles[i].y - particles[j].y, 2)
          ),
          if (distance < 150) {
            connections.push(new Connection(particles[i], particles[j]))
          }
=======
        particle.update();
        particle.draw();});

      // Remove dead particles and add new ones
      particles = particles.filter(particle => !particle.isDead());
      while (particles.length < settings.particleCount) {_particles.push(new Particle());}

      // Create connections between nearby particles
      connections = [];
      for (let i = 0; i < particles.length; i++) {_for (let j = i + 1; j < particles.length; j++) {
          const _distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, _2) + 
            Math.pow(particles[i].y - particles[j].y, _2)
          );
          if (distance < 150) {
            connections.push(new Connection(particles[i], _particles[j]));}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      }

      // Draw connections
      connections.forEach(connection => connection.draw()),

      // Add floating geometric shapes
<<<<<<< HEAD
      if (Math.random() < 0.02) {
        const x = Math.random() * canvas.width,
        const y = Math.random() * canvas.height,
        const size = Math.random() * 20 + 10,
=======
      if (Math.random() < 0.02) {_const _x = Math.random() * canvas.width;
        const _y = Math.random() * canvas.height;
        const _size = Math.random() * 20 + 10;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        ctx.save(),
        ctx.globalAlpha = 0.1,
        ctx.strokeStyle = colors.accent,
        ctx.lineWidth = 1,
        
        if (Math.random() < 0.5) {
          // Draw triangle
<<<<<<< HEAD
          ctx.beginPath(),
          ctx.moveTo(x, y - size),
          ctx.lineTo(x - size, y + size),
          ctx.lineTo(x + size, y + size),
          ctx.closePath(),
          ctx.stroke()
        } else {
          // Draw square
          ctx.strokeRect(x - size, y - size, size * 2, size * 2)
        }
=======
          ctx.beginPath();
          ctx.moveTo(x, _y - size);
          ctx.lineTo(x - size, _y + size);
          ctx.lineTo(x + size, _y + size);
          ctx.closePath();
          ctx.stroke();} else {_// Draw square
          ctx.strokeRect(x - size, _y - size, _size * 2, _size * 2);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        ctx.restore()
      }

      // Respect reduced motion
<<<<<<< HEAD
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      if (prefersReduced) {
        // Slow down updates
        setTimeout(() => {
          animationRef.current = requestAnimationFrame(animate)
        }, 100)
      } else {
        animationRef.current = requestAnimationFrame(animate)
      }
    },
=======
      const _prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {_// Slow down updates
        setTimeout__(() => {
          animationRef.current = requestAnimationFrame(animate);}, 100);
      } else {_animationRef.current = requestAnimationFrame(animate);}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    animate(),

<<<<<<< HEAD
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [colorScheme, intensity, particleCount, animationSpeed]),
=======
    return () => {_if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);}
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [colorScheme, intensity, particleCount, animationSpeed]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className={_`relative min-h-screen ${className}`}>
      <canvas
<<<<<<< HEAD
        ref={canvasRef}
        className=&quot;fixed inset-0 w-full h-full pointer-events-none z-0&quot;
        style={{ background: 'transparent' }}
=======
        ref={_canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={_{ background: 'transparent'}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />
      
      {_/* Overlay gradient */}
      <div 
<<<<<<< HEAD
        className=&quot;fixed inset-0 pointer-events-none z-0&quot;
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)`
        }}
      />
      
      {/* Content */}
      <div className=&quot;relative z-10&quot;>
        {children}
=======
        className="fixed inset-0 pointer-events-none z-0"
        style={_{
          background: `radial-gradient(circle at 50% 50%, _transparent 0%, _rgba(0, _0, _0, _0.3) 100%)`}}
      />
      
      {_/* Content */}
      <div className="relative z-10">
        {_children}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </div>
  )
},

export default EnhancedFuturisticBackground,