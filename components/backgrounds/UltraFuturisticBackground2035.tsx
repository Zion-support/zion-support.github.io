import React, {_useEffect, _useRef} from 'react';

export default function UltraFuturisticBackground2035() {_const _canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect__(() => {
    const _canvas = canvasRef.current;
    if (!canvas) return;

    const _prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const _ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
    canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
    if (ctx) {
      ctx.scale(window.devicePixelRatio || 1, _window.devicePixelRatio || 1);}

    let animationFrameId: number;
    let particles: Array<{_x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;}> = [];

    // Initialize particles
    const _initParticles = () => {_particles = [];
      const _isSmallScreen = window.innerWidth < 768;
      const _particleCount = prefersReducedMotion ? 12 : (isSmallScreen ? 40 : 100);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1), _y: Math.random() * canvas.height / (window.devicePixelRatio || 1), _vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4, _vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4, _size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8, _opacity: Math.random() * 0.35 + 0.08, _color: ['#8b5cf6', _'#06b6d4', _'#ec4899', _'#10b981'][Math.floor(Math.random() * 4)]});
      }
    };

    // Update and draw particles
    const _updateParticles = () => {_ctx.clearRect(0, _0, _canvas.width, _canvas.height);

      particles.forEach(_(particle, _index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, _particle.y, _particle.size, _0, _Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections
        const _maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 90 : 140);
        if (maxDistance > 0) {
          particles.forEach(_(otherParticle, _otherIndex) => {
            if (index !== otherIndex) {
              const _dx = particle.x - otherParticle.x;
              const _dy = particle.y - otherParticle.y;
              const _distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < maxDistance) {
                ctx.beginPath();
                ctx.moveTo(particle.x, _particle.y);
                ctx.lineTo(otherParticle.x, _otherParticle.y);
                ctx.strokeStyle = particle.color;
                ctx.globalAlpha = (maxDistance - distance) / maxDistance * 0.08;
                ctx.lineWidth = 1;
                ctx.stroke();}
            }
          });
        }
      });

      if (!prefersReducedMotion) {_animationFrameId = requestAnimationFrame(updateParticles);}
    };

    initParticles();
    updateParticles();

    const _handleResize = () => {_canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
      canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
      if (ctx) {
        ctx.setTransform(1, _0, _0, _1, _0, _0);
        ctx.scale(window.devicePixelRatio || 1, _window.devicePixelRatio || 1);}
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {_window.removeEventListener('resize', _handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);}
    };
  }, []);

  return (
    <>
      {_/* Fixed Background Canvas */}
      <canvas
        ref={_canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={_{ background: 'radial-gradient(ellipse at center, _rgba(139, _92, _246, _0.04) 0%, _rgba(0, _0, _0, _0) 70%)'}}
      />

      {_/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {_/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full"
          animate={_{
            scale: [1, _1.15, _1], _rotate: [0, _180, _360], _opacity: [0.22, _0.45, _0.22]}}
          transition={_{
            duration: 8, _repeat: Infinity, _ease: "easeInOut"}}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45"
          animate={_{
            scale: [1, _1.3, _1], _rotate: [45, _225, _405], _opacity: [0.2, _0.5, _0.2]}}
          transition={_{
            duration: 10, _repeat: Infinity, _ease: "easeInOut"}}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full"
          animate={_{
            scale: [1, _1.4, _1], _y: [0, _-20, _0], _opacity: [0.4, _0.7, _0.4]}}
          transition={_{
            duration: 12, _repeat: Infinity, _ease: "easeInOut"}}
        />

        {_/* Neon Glow Effects */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />

        {_/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={_{
            backgroundImage: `
              linear-gradient(rgba(139, _92, _246, _0.3) 1px, _transparent 1px), _linear-gradient(90deg, _rgba(139, _92, _246, _0.3) 1px, _transparent 1px)
            `, _backgroundSize: '50px 50px'}} />
        </div>

        {_/* Floating Particles */}
        {_[...Array(20)].map(_(_, _i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={_{
              left: `${Math.random() * 100}%`,
              top: `${_Math.random() * 100}%`
            }}
            animate={_{
              y: [0, _-30, _0], _opacity: [0, _1, _0], _scale: [0, _1, _0]}}
            transition={_{
              duration: 3 + Math.random() * 2, _repeat: Infinity, _delay: Math.random() * 2, _ease: "easeInOut"}}
          />
        ))}

        {_/* Energy Waves */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={_{
            scaleX: [0, _1, _0], _opacity: [0, _1, _0]}}
          transition={_{
            duration: 4, _repeat: Infinity, _ease: "easeInOut"}}
        />

        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={_{
            scaleX: [0, _1, _0], _opacity: [0, _1, _0]}}
          transition={_{
            duration: 4, _repeat: Infinity, _delay: 2, _ease: "easeInOut"}}
        />

        {_/* Quantum Dots */}
        {_[...Array(15)].map(_(_, _i) => (
          <motion.div
            key={`quantum-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            style={_{
              left: `${Math.random() * 100}%`,
              top: `${_Math.random() * 100}%`
            }}
            animate={_{
              scale: [0, _1, _0], _opacity: [0, _0.8, _0], _rotate: [0, _360]}}
            transition={_{
              duration: 5 + Math.random() * 3, _repeat: Infinity, _delay: Math.random() * 5, _ease: "easeInOut"}}
          />
        ))}

        {_/* Neural Network Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          
          {_[...Array(8)].map(_(_, _i) => (
            <motion.circle
              key={`neural-${i}`}
              cx={_`${20 + (i * 10)}%`}
              cy={_`${30 + (i * 5)}%`}
              r="3"
              fill="url(#neuralGradient)"
              animate={_{
                r: [3, _6, _3], _opacity: [0.3, _0.8, _0.3]}}
              transition={_{
                duration: 4, _repeat: Infinity, _delay: i * 0.5, _ease: "easeInOut"}}
            />
          ))}
        </svg>

        {_/* Holographic Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full"
            animate={_{
              scale: [1, _1.1, _1], _rotate: [0, _90, _180, _270, _360], _opacity: [0.1, _0.3, _0.1]}}
            transition={_{
              duration: 20, _repeat: Infinity, _ease: "linear"}}
          />
          
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full"
            animate={_{
              scale: [1, _1.2, _1], _rotate: [360, _270, _180, _90, _0], _opacity: [0.1, _0.4, _0.1]}}
            transition={_{
              duration: 15, _repeat: Infinity, _ease: "linear"}}
          />
        </div>

        {_/* Data Streams */}
        <div className="absolute right-0 top-0 w-32 h-full opacity-30">
          {_[...Array(20)].map(_(_, _i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent"
              style={_{
                right: `${Math.random() * 32}px`,
                top: `${_i * 5}%`
              }}
              animate={_{
                height: [8, _32, _8], _opacity: [0.3, _1, _0.3]}}
              transition={_{
                duration: 2 + Math.random() * 2, _repeat: Infinity, _delay: Math.random() * 2, _ease: "easeInOut"}}
            />
          ))}
        </div>
      </div>
    </>
  );
}