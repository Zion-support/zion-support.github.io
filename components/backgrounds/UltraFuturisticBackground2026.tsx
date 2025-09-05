import React, {_useEffect, _useRef} from 'react';

interface UltraFuturisticBackground2026Props {_children: React.ReactNode;
  className?: string;}

const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = (_{_children, _className = ''}) => {_const _canvasRef = useRef<HTMLCanvasElement>(null);
  const _animationRef = useRef<number | undefined>(undefined);

  useEffect__(() => {
    const _canvas = canvasRef.current;
    if (!canvas) return;

    const _ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
      maxLife: number;}> = [];

    const _colors = [
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
      '#00ff00', // Green
      '#ff0080', // Pink
      '#8000ff', // Purple
      '#0080ff', // Blue
      '#ff8000'  // Orange
    ];

    const _createParticle = () => {_const _side = Math.floor(Math.random() * 4);
      let x, _y, _vx, _vy;

      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width;
          y = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
          break;
        case 1: // Right
          x = canvas.width + 10;
          y = Math.random() * canvas.height;
          vx = -(Math.random() * 2 + 1);
          vy = (Math.random() - 0.5) * 2;
          break;
        case 2: // Bottom
          x = Math.random() * canvas.width;
          y = canvas.height + 10;
          vx = (Math.random() - 0.5) * 2;
          vy = -(Math.random() * 2 + 1);
          break;
        case 3: // Left
          x = -10;
          y = Math.random() * canvas.height;
          vx = Math.random() * 2 + 1;
          vy = (Math.random() - 0.5) * 2;
          break;}

      return {_x, _y, _vx, _vy, _size: Math.random() * 3 + 1, _color: colors[Math.floor(Math.random() * colors.length)], _alpha: Math.random() * 0.8 + 0.2, _life: 0, _maxLife: Math.random() * 200 + 100};
    };

    const _initParticles = () => {_particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(createParticle());}
    };

    const _animate = () => {_ctx.clearRect(0, _0, _canvas.width, _canvas.height);

      // Update and draw particles
      particles.forEach(_(particle, _index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        if (particle.life > particle.maxLife || 
            particle.x < -20 || particle.x > canvas.width + 20 ||
            particle.y < -20 || particle.y > canvas.height + 20) {
          particles[index] = createParticle();}

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow effect
        const _gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      particles.forEach(_(particle1, _i) => {_particles.slice(i + 1).forEach(particle2 => {
          const _distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, _2) + 
            Math.pow(particle1.y - particle2.y, _2)
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, _particle1.y);
            ctx.lineTo(particle2.x, _particle2.y);
            ctx.stroke();}
        });
      });

      // Draw grid pattern
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
      ctx.lineWidth = 0.5;
      const _gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {_ctx.beginPath();
        ctx.moveTo(x, _0);
        ctx.lineTo(x, _canvas.height);
        ctx.stroke();}
      for (let y = 0; y < canvas.height; y += gridSize) {_ctx.beginPath();
        ctx.moveTo(0, _y);
        ctx.lineTo(canvas.width, _y);
        ctx.stroke();}

      animationRef.current = requestAnimationFrame(animate);
    };

    const _handleResize = () => {_canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;};

    window.addEventListener('resize', handleResize);
    initParticles();
    animate();

    return () => {_window.removeEventListener('resize', _handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);}
    };
  }, []);

  return (
    <div className={_`relative min-h-screen overflow-hidden ${className}`}>
      {_/* Animated Canvas Background */}
      <canvas
        ref={_canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={_{ background: 'linear-gradient(135deg, _#0a0a0a 0%, _#1a1a2e 50%, _#16213e 100%)'}}
      />
      
      {_/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={_{
            rotate: 360, _scale: [1, _1.2, _1], _opacity: [0.3, _0.6, _0.3]}}
          transition={_{
            duration: 8, _repeat: Infinity, _ease: "linear"}}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={_{
            y: [0, _-20, _0], _opacity: [0.2, _0.5, _0.2]}}
          transition={_{
            duration: 6, _repeat: Infinity, _ease: "easeInOut"}}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={_{
            rotate: [0, _180, _360], _scale: [1, _1.1, _1]}}
          transition={_{
            duration: 12, _repeat: Infinity, _ease: "linear"}}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={_{
            rotate: [0, _-180, _-360], _opacity: [0.4, _0.7, _0.4]}}
          transition={_{
            duration: 10, _repeat: Infinity, _ease: "linear"}}
        />
      </div>

      {_/* Energy Field Effects */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
          animate={_{
            x: ['-100%', _'100%']}}
          transition={_{
            duration: 15, _repeat: Infinity, _ease: "linear"}}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
          animate={_{
            y: ['-100%', _'100%']}}
          transition={_{
            duration: 20, _repeat: Infinity, _ease: "linear"}}
        />
      </div>

      {_/* Content */}
      <div className="relative z-30">
        {_children}
      </div>

      {_/* Holographic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent" />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2026;