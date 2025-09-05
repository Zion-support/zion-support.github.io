import React, {_useEffect, _useRef} from 'react';

interface EnhancedFuturisticBackgroundProps {_children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'cosmic';
  particleCount?: number;
  animationSpeed?: number;}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = (_{_children, _className = '', _intensity = 'medium', _colorScheme = 'quantum', _particleCount = 100, _animationSpeed = 1}) => {_const _canvasRef = useRef<HTMLCanvasElement>(null);
  const _animationRef = useRef<number | undefined>(undefined);

  const _colorSchemes = {
    quantum: {
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

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

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

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Fade out near end of life
        if (this.life < 20) {
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
      }
    }

    let particles: Particle[] = [];
    let connections: Connection[] = [];

    // Initialize particles
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

        ctx.fillStyle = colors.primary;
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {_const _text = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, _i * fontSize, _drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;}
          drops[i]++;
        }
      };

      return drawMatrix;
    };

    const _drawMatrix = matrixRain();

    // Main animation loop
    const _animate = () => {_// Clear canvas with fade effect
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, _0, _canvas.width, _canvas.height);

      // Draw matrix rain
      drawMatrix();

      // Update and draw particles
      particles.forEach(particle => {
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
        }
      }

      // Draw connections
      connections.forEach(connection => connection.draw());

      // Add floating geometric shapes
      if (Math.random() < 0.02) {_const _x = Math.random() * canvas.width;
        const _y = Math.random() * canvas.height;
        const _size = Math.random() * 20 + 10;
        
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 1;
        
        if (Math.random() < 0.5) {
          // Draw triangle
          ctx.beginPath();
          ctx.moveTo(x, _y - size);
          ctx.lineTo(x - size, _y + size);
          ctx.lineTo(x + size, _y + size);
          ctx.closePath();
          ctx.stroke();} else {_// Draw square
          ctx.strokeRect(x - size, _y - size, _size * 2, _size * 2);}
        
        ctx.restore();
      }

      // Respect reduced motion
      const _prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {_// Slow down updates
        setTimeout__(() => {
          animationRef.current = requestAnimationFrame(animate);}, 100);
      } else {_animationRef.current = requestAnimationFrame(animate);}
    };

    animate();

    return () => {_if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);}
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [colorScheme, intensity, particleCount, animationSpeed]);

  return (
    <div className={_`relative min-h-screen ${className}`}>
      <canvas
        ref={_canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={_{ background: 'transparent'}}
      />
      
      {_/* Overlay gradient */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={_{
          background: `radial-gradient(circle at 50% 50%, _transparent 0%, _rgba(0, _0, _0, _0.3) 100%)`}}
      />
      
      {_/* Content */}
      <div className="relative z-10">
        {_children}
      </div>
    </div>
  );
};

export default EnhancedFuturisticBackground;