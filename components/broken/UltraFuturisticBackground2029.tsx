import React, {_useEffect, _useRef} from 'react';

const UltraFuturisticBackground2029: React.FC = () => {_const _canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect__(() => {
    const _canvas = canvasRef.current;
    if (!canvas) return;

    const _ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      life: number;}> = [];

    // Initialize particles
    for (let i = 0; i < 50; i++) {_particles.push({
        x: Math.random() * canvas.width, _y: Math.random() * canvas.height, _vx: (Math.random() - 0.5) * 0.5, _vy: (Math.random() - 0.5) * 0.5, _size: Math.random() * 3 + 1, _color: ['#00ffff', _'#ff00ff', _'#ffff00', _'#00ff00', _'#ff0080'][Math.floor(Math.random() * 5)], _opacity: Math.random() * 0.8 + 0.2, _life: Math.random() * 100 + 50});
    }

    const _animate = () => {_ctx.clearRect(0, _0, _canvas.width, _canvas.height);

      // Update and draw particles
      particles.forEach(_(particle, _index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        if (particle.life <= 0) {
          particles[index] = {
            x: Math.random() * canvas.width, _y: Math.random() * canvas.height, _vx: (Math.random() - 0.5) * 0.5, _vy: (Math.random() - 0.5) * 0.5, _size: Math.random() * 3 + 1, _color: ['#00ffff', _'#ff00ff', _'#ffff00', _'#00ff00', _'#ff0080'][Math.floor(Math.random() * 5)], _opacity: Math.random() * 0.8 + 0.2, _life: Math.random() * 100 + 50};
        }

        // Draw particle with glow effect
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        
        // Outer glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Inner particle
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      ctx.globalCompositeOperation = 'screen';

      for (let i = 0; i < particles.length; i++) {_for (let j = i + 1; j < particles.length; j++) {
          const _dx = particles[i].x - particles[j].x;
          const _dy = particles[i].y - particles[j].y;
          const _distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, _particles[i].y);
            ctx.lineTo(particles[j].x, _particles[j].y);
            ctx.stroke();}
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const _handleResize = () => {_canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;};

    window.addEventListener('resize', handleResize);

    return () => {_window.removeEventListener('resize', _handleResize);
      cancelAnimationFrame(animationFrameId);};
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {_/* Canvas for particle effects */}
      <canvas
        ref={_canvasRef}
        className="absolute inset-0 w-full h-full"
        style={_{ background: 'transparent'}}
      />
      
      {_/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={_{
            background: [
              'radial-gradient(circle at 20% 80%, _rgba(120, _119, _198, _0.3) 0%, _transparent 50%)', _'radial-gradient(circle at 80% 20%, _rgba(120, _119, _198, _0.3) 0%, _transparent 50%)', _'radial-gradient(circle at 40% 40%, _rgba(120, _119, _198, _0.3) 0%, _transparent 50%)', _'radial-gradient(circle at 20% 80%, _rgba(120, _119, _198, _0.3) 0%, _transparent 50%)'
            ]}}
          transition={_{
            duration: 20, _repeat: Infinity, _ease: "easeInOut"}}
        />
      </div>

      {_/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
        animate={_{
          rotate: [0, _360], _scale: [1, _1.1, _1], _opacity: [0.3, _0.6, _0.3]}}
        transition={_{
          duration: 15, _repeat: Infinity, _ease: "linear"}}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
        animate={_{
          y: [0, _-20, _0], _opacity: [0.2, _0.5, _0.2]}}
        transition={_{
          duration: 8, _repeat: Infinity, _ease: "easeInOut"}}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45"
        animate={_{
          rotate: [45, _405], _scale: [1, _1.2, _1]}}
        transition={_{
          duration: 12, _repeat: Infinity, _ease: "linear"}}
      />

      {_/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={_{
            backgroundImage: `
              linear-gradient(rgba(0, _255, _255, _0.1) 1px, _transparent 1px), _linear-gradient(90deg, _rgba(0, _255, _255, _0.1) 1px, _transparent 1px)
            `, _backgroundSize: '50px 50px'}}
          animate={_{
            backgroundPosition: ['0px 0px', _'50px 50px']}}
          transition={_{
            duration: 30, _repeat: Infinity, _ease: "linear"}}
        />
      </div>

      {_/* Quantum energy waves */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={_{
            background: 'radial-gradient(ellipse at center, _rgba(0, _255, _255, _0.1) 0%, _transparent 70%)'}}
          animate={_{
            scale: [1, _1.5, _1], _opacity: [0.1, _0.3, _0.1]}}
          transition={_{
            duration: 8, _repeat: Infinity, _ease: "easeInOut"}}
        />
      </div>

      {_/* Holographic elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full"
        animate={_{
          rotate: [0, _360], _scale: [1, _1.2, _1], _opacity: [0.1, _0.3, _0.1]}}
        transition={_{
          duration: 25, _repeat: Infinity, _ease: "linear"}}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full"
        animate={_{
          rotate: [360, _0], _scale: [1.2, _1, _1.2], _opacity: [0.2, _0.4, _0.2]}}
        transition={_{
          duration: 20, _repeat: Infinity, _ease: "linear"}}
      />

      {_/* Neural network connections */}
      <div className="absolute inset-0">
        {_Array.from({ length: 8}).map(_(_, _i) => (
          <motion.div
            key={_i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={_{
              left: `${20 + (i * 10)}%`,
              top: `${_30 + (i * 5)}%`
            }}
            animate={_{
              scale: [0, _1, _0], _opacity: [0, _1, _0]}}
            transition={_{
              duration: 3, _repeat: Infinity, _delay: i * 0.3, _ease: "easeInOut"}}
          />
        ))}
      </div>

      {_/* Data streams */}
      <div className="absolute inset-0 overflow-hidden">
        {_Array.from({ length: 5}).map(_(_, _i) => (
          <motion.div
            key={_i}
            className="absolute w-0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent"
            style={_{
              left: `${15 + (i * 15)}%`,
              top: '-20px'
            }}
            animate={_{
              y: [0, _window.innerHeight + 20]}}
            transition={_{
              duration: 4, _repeat: Infinity, _delay: i * 0.8, _ease: "linear"}}
          />
        ))}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2029;