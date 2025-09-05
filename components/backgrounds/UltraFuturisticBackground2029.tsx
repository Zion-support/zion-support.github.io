<<<<<<< HEAD
import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion',
interface Particle {
  x: number,
  y: number,
  vx: number,
  vy: number,
  size: number,
  opacity: number,
  color: string,
  type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk'
}

export default function UltraFuturisticBackground2029() {
  const canvasRef = useRef<HTMLCanvasElement>(null),
  const particlesRef = useRef<Particle[]>([]),
  const animationRef = useRef<number | undefined>(undefined),

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
import React, {_useEffect, _useRef} from 'react';

interface Particle {_x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';}

export default function UltraFuturisticBackground2029() {_const _canvasRef = useRef<HTMLCanvasElement>(null);
  const _particlesRef = useRef<Particle[]>([]);
  const _animationRef = useRef<number | undefined>(undefined);

  useEffect__(() => {
    const _canvas = canvasRef.current;
    if (!canvas) return;

    const _ctx = canvas.getContext('2d');
    if (!ctx) return;

    const _resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    resizeCanvas(),
    window.addEventListener('resize', resizeCanvas),

    // Initialize particles
<<<<<<< HEAD
    const initParticles = () => {
      const particles: Particle[] = [],
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000),

      for (let i = 0, i < particleCount, i++) {
        const type = ['quantumholographicneuralcyberpunk'][Math.floor(Math.random() * 4)] as Particle['type'],
        const colors = {
          quantum: ['#00ffff#0080ff#0040ff'],
          holographic: ['#8b5cf6#a855f7#c084fc'],
          neural: ['#10b981#059669#047857'],
          cyberpunk: ['#ec4899#f97316#f59e0b']
        },

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[type][Math.floor(Math.random() * colors[type].length)],
          type
        })
=======
    const _initParticles = () => {_const particles: Particle[] = [];
      const _particleCount = Math.floor((canvas.width * canvas.height) / 20000);

      for (let i = 0; i < particleCount; i++) {
        const _type = ['quantum', _'holographic', _'neural', _'cyberpunk'][Math.floor(Math.random() * 4)] as Particle['type'];
        const _colors = {
          quantum: ['#00ffff', _'#0080ff', _'#0040ff'], _holographic: ['#8b5cf6', _'#a855f7', _'#c084fc'], _neural: ['#10b981', _'#059669', _'#047857'], _cyberpunk: ['#ec4899', _'#f97316', _'#f59e0b']};

        particles.push({_x: Math.random() * canvas.width, _y: Math.random() * canvas.height, _vx: (Math.random() - 0.5) * 0.5, _vy: (Math.random() - 0.5) * 0.5, _size: Math.random() * 3 + 1, _opacity: Math.random() * 0.8 + 0.2, _color: colors[type][Math.floor(Math.random() * colors[type].length)], _type});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }

      particlesRef.current = particles
    },

    initParticles(),

    // Animation loop
<<<<<<< HEAD
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height),

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      ),
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)'),
      gradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.1)'),
      gradient.addColorStop(0.6, 'rgba(139, 92, 246, 0.05)'),
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)'),
      
      ctx.fillStyle = gradient,
      ctx.fillRect(0, 0, canvas.width, canvas.height),
=======
    const _animate = () => {_ctx.clearRect(0, _0, _canvas.width, _canvas.height);

      // Create gradient background
      const _gradient = ctx.createRadialGradient(
        canvas.width / 2, _canvas.height / 2, _0, _canvas.width / 2, _canvas.height / 2, _Math.max(canvas.width, _canvas.height) / 2
      );
      gradient.addColorStop(0, _'rgba(0, _0, _0, _0.8)');
      gradient.addColorStop(0.3, _'rgba(6, _182, _212, _0.1)');
      gradient.addColorStop(0.6, _'rgba(139, _92, _246, _0.05)');
      gradient.addColorStop(1, _'rgba(0, _0, _0, _0.9)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, _0, _canvas.width, _canvas.height);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      // Update and draw particles
      particlesRef.current.forEach(_(particle, _index) => {
        // Update position
        particle.x += particle.vx,
        particle.y += particle.vy,

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width,
        if (particle.x > canvas.width) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height,
        if (particle.y > canvas.height) particle.y = 0,

        // Draw particle
        ctx.save(),
        ctx.globalAlpha = particle.opacity,
        
        // Different effects for different particle types
        switch (particle.type) {
          case 'quantum':
            // Quantum particles with glow effect
<<<<<<< HEAD
            ctx.shadowColor = particle.color,
            ctx.shadowBlur = 20,
            ctx.beginPath(),
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
            ctx.fillStyle = particle.color,
            ctx.fill(),
            
            // Quantum entanglement lines
            if (index % 10 === 0) {
              const partner = particlesRef.current[(index + 50) % particlesRef.current.length],
              if (partner && partner.type === 'quantum') {
                const distance = Math.sqrt(
                  Math.pow(particle.x - partner.x, 2) + Math.pow(particle.y - partner.y, 2)
                ),
                if (distance < 100) {
                  ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 100)})`,
                  ctx.lineWidth = 1,
                  ctx.beginPath(),
                  ctx.moveTo(particle.x, particle.y),
                  ctx.lineTo(partner.x, partner.y),
                  ctx.stroke()
=======
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(particle.x, _particle.y, _particle.size, _0, _Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Quantum entanglement lines
            if (index % 10 === 0) {
              const _partner = particlesRef.current[(index + 50) % particlesRef.current.length];
              if (partner && partner.type === 'quantum') {
                const _distance = Math.sqrt(
                  Math.pow(particle.x - partner.x, _2) + Math.pow(particle.y - partner.y, _2)
                );
                if (distance < 100) {
                  ctx.strokeStyle = `rgba(0, _255, _255, _${0.3 * (1 - distance / 100)})`;
                  ctx.lineWidth = 1;
                  ctx.beginPath();
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(partner.x, partner.y);
                  ctx.stroke();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                }
              }
            }
            break,

          case 'holographic':
            // Holographic particles with rainbow effect
<<<<<<< HEAD
            const time = Date.now() * 0.001,
            const hue = (time * 50 + index * 10) % 360,
            ctx.fillStyle = `hsl(${hue}, 70%, 60%)`,
            ctx.shadowColor = `hsl(${hue}, 70%, 60%)`,
            ctx.shadowBlur = 15,
            ctx.beginPath(),
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
            ctx.fill(),
            break,
=======
            const _time = Date.now() * 0.001;
            const _hue = (time * 50 + index * 10) % 360;
            ctx.fillStyle = `hsl(${_hue}, 70%, 60%)`;
            ctx.shadowColor = `hsl(${_hue}, 70%, 60%)`;
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            break;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

          case 'neural':
            // Neural particles with network connections
            ctx.fillStyle = particle.color,
            ctx.shadowColor = particle.color,
            ctx.shadowBlur = 10,
            ctx.beginPath(),
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
            ctx.fill(),
            
            // Neural network connections
            if (index % 15 === 0) {_const _connections = particlesRef.current.filter(p => 
                p.type === 'neural' && 
<<<<<<< HEAD
                Math.sqrt(Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)) < 80
              ),
              connections.forEach(connection => {
                const distance = Math.sqrt(
                  Math.pow(particle.x - connection.x, 2) + Math.pow(particle.y - connection.y, 2)
                ),
                ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 * (1 - distance / 80)})`,
                ctx.lineWidth = 0.5,
                ctx.beginPath(),
                ctx.moveTo(particle.x, particle.y),
                ctx.lineTo(connection.x, connection.y),
                ctx.stroke()
              })
=======
                Math.sqrt(Math.pow(particle.x - p.x, _2) + Math.pow(particle.y - p.y, _2)) < 80
              );
              connections.forEach(connection => {
                const _distance = Math.sqrt(
                  Math.pow(particle.x - connection.x, _2) + Math.pow(particle.y - connection.y, _2)
                );
                ctx.strokeStyle = `rgba(16, _185, _129, _${0.4 * (1 - distance / 80)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(connection.x, connection.y);
                ctx.stroke();
              });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            }
            break,

          case 'cyberpunk':
            // Cyberpunk particles with electric effect
            ctx.strokeStyle = particle.color,
            ctx.lineWidth = 2,
            ctx.shadowColor = particle.color,
            ctx.shadowBlur = 25,
            ctx.beginPath(),
            ctx.moveTo(particle.x - particle.size, particle.y - particle.size),
            ctx.lineTo(particle.x + particle.size, particle.y + particle.size),
            ctx.moveTo(particle.x + particle.size, particle.y - particle.size),
            ctx.lineTo(particle.x - particle.size, particle.y + particle.size),
            ctx.stroke(),
            break
        }

        ctx.restore()
      }),

      // Draw floating geometric shapes
      drawGeometricShapes(ctx, canvas.width, canvas.height),

      // Draw energy waves
      drawEnergyWaves(ctx, canvas.width, canvas.height),

      animationRef.current = requestAnimationFrame(animate)
    },

    animate(),

<<<<<<< HEAD
    return () => {
      window.removeEventListener('resize', resizeCanvas),
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, []),

  const drawGeometricShapes = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const time = Date.now() * 0.0005,
    
    // Floating hexagons
    for (let i = 0, i < 5, i++) {
      const x = (width * 0.2) + Math.sin(time + i) * 100,
      const y = (height * 0.3) + Math.cos(time + i * 0.7) * 80,
      const size = 20 + Math.sin(time * 2 + i) * 10,
      
      ctx.save(),
      ctx.globalAlpha = 0.1,
      ctx.strokeStyle = '#00ffff',
      ctx.lineWidth = 1,
      ctx.beginPath(),
      for (let j = 0, j < 6, j++) {
        const angle = (j * Math.PI) / 3 + time,
        const px = x + size * Math.cos(angle),
        const py = y + size * Math.sin(angle),
        if (j === 0) ctx.moveTo(px, py),
        else ctx.lineTo(px, py)
      }
      ctx.closePath(),
      ctx.stroke(),
      ctx.restore()
    }

    // Floating triangles
    for (let i = 0, i < 3, i++) {
      const x = (width * 0.8) + Math.sin(time * 0.8 + i) * 120,
      const y = (height * 0.7) + Math.cos(time * 1.2 + i) * 100,
      const size = 15 + Math.sin(time * 1.5 + i) * 8,
      
      ctx.save(),
      ctx.globalAlpha = 0.08,
      ctx.strokeStyle = '#8b5cf6',
      ctx.lineWidth = 1,
      ctx.beginPath(),
      for (let j = 0, j < 3, j++) {
        const angle = (j * Math.PI * 2) / 3 + time,
        const px = x + size * Math.cos(angle),
        const py = y + size * Math.sin(angle),
        if (j === 0) ctx.moveTo(px, py),
        else ctx.lineTo(px, py)
      }
      ctx.closePath(),
      ctx.stroke(),
      ctx.restore()
=======
    return () => {_window.removeEventListener('resize', _resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);}
    };
  }, []);

  const _drawGeometricShapes = (_ctx: CanvasRenderingContext2D, _width: number, _height: number) => {_const _time = Date.now() * 0.0005;
    
    // Floating hexagons
    for (let i = 0; i < 5; i++) {
      const _x = (width * 0.2) + Math.sin(time + i) * 100;
      const _y = (height * 0.3) + Math.cos(time + i * 0.7) * 80;
      const _size = 20 + Math.sin(time * 2 + i) * 10;
      
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let j = 0; j < 6; j++) {
        const _angle = (j * Math.PI) / 3 + time;
        const _px = x + size * Math.cos(angle);
        const _py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, _py);
        else ctx.lineTo(px, _py);}
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }

    // Floating triangles
    for (let i = 0; i < 3; i++) {_const _x = (width * 0.8) + Math.sin(time * 0.8 + i) * 120;
      const _y = (height * 0.7) + Math.cos(time * 1.2 + i) * 100;
      const _size = 15 + Math.sin(time * 1.5 + i) * 8;
      
      ctx.save();
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let j = 0; j < 3; j++) {
        const _angle = (j * Math.PI * 2) / 3 + time;
        const _px = x + size * Math.cos(angle);
        const _py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, _py);
        else ctx.lineTo(px, _py);}
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const drawEnergyWaves = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const time = Date.now() * 0.001,
=======
  const _drawEnergyWaves = (_ctx: CanvasRenderingContext2D, _width: number, _height: number) => {_const _time = Date.now() * 0.001;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Horizontal energy waves
    for (let i = 0, i < 3, i++) {
      ctx.save(),
      ctx.globalAlpha = 0.05,
      ctx.strokeStyle = `hsl(${180 + i * 60}, 70%, 60%)`,
      ctx.lineWidth = 2,
      ctx.beginPath(),
      
<<<<<<< HEAD
      for (let x = 0, x < width, x += 5) {
        const y = height * 0.5 + 
                  Math.sin(x * 0.01 + time + i) * 50 +
                  Math.sin(x * 0.02 + time * 2 + i) * 25,
        if (x === 0) ctx.moveTo(x, y),
        else ctx.lineTo(x, y)
      }
=======
      for (let x = 0; x < width; x += 5) {_const _y = height * 0.5 + 
                  Math.sin(x * 0.01 + time + i) * 50 +
                  Math.sin(x * 0.02 + time * 2 + i) * 25;
        if (x === 0) ctx.moveTo(x, _y);
        else ctx.lineTo(x, _y);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      ctx.stroke(),
      ctx.restore()
    }

    // Vertical energy waves
<<<<<<< HEAD
    for (let i = 0, i < 2, i++) {
      ctx.save(),
      ctx.globalAlpha = 0.04,
      ctx.strokeStyle = `hsl(${240 + i * 60}, 70%, 60%)`,
      ctx.lineWidth = 2,
      ctx.beginPath(),
      
      for (let y = 0, y < height, y += 5) {
        const x = width * 0.5 + 
                  Math.sin(y * 0.01 + time + i) * 60 +
                  Math.sin(y * 0.015 + time * 1.5 + i) * 30,
        if (y === 0) ctx.moveTo(x, y),
        else ctx.lineTo(x, y)
      }
=======
    for (let i = 0; i < 2; i++) {_ctx.save();
      ctx.globalAlpha = 0.04;
      ctx.strokeStyle = `hsl(${240 + i * 60}, 70%, 60%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      for (let y = 0; y < height; y += 5) {_const _x = width * 0.5 + 
                  Math.sin(y * 0.01 + time + i) * 60 +
                  Math.sin(y * 0.015 + time * 1.5 + i) * 30;
        if (y === 0) ctx.moveTo(x, _y);
        else ctx.lineTo(x, _y);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      ctx.stroke(),
      ctx.restore()
    }
  },

  return (
<<<<<<< HEAD
    <div className=&quot;fixed inset-0 -z-10 overflow-hidden&quot;>
      {/* Animated gradient overlay */}
      <motion.div
        className=&quot;absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30&quot;
        animate={{
          background: [
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.2) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
=======
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {_/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30"
        animate={_{
          background: [
            'linear-gradient(45deg, _rgba(0, _0, _0, _1) 0%, _rgba(6, _182, _212, _0.2) 50%, _rgba(139, _92, _246, _0.3) 100%)', _'linear-gradient(45deg, _rgba(0, _0, _0, _1) 0%, _rgba(139, _92, _246, _0.3) 50%, _rgba(6, _182, _212, _0.2) 100%)', _'linear-gradient(45deg, _rgba(0, _0, _0, _1) 0%, _rgba(6, _182, _212, _0.2) 50%, _rgba(139, _92, _246, _0.3) 100%)'
          ]}}
        transition={_{
          duration: 8, _repeat: Infinity, _ease: 'easeInOut'}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />
      
      {_/* Canvas for particle effects */}
      <canvas
<<<<<<< HEAD
        ref={canvasRef}
        className=&quot;absolute inset-0 w-full h-full&quot;
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Additional visual layers */}
      <div className=&quot;absolute inset-0&quot;>
        {/* Quantum field ripples */}
        <motion.div
          className=&quot;absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20&quot;
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
=======
        ref={_canvasRef}
        className="absolute inset-0 w-full h-full"
        style={_{ filter: 'blur(0.5px)'}}
      />
      
      {_/* Additional visual layers */}
      <div className="absolute inset-0">
        {_/* Quantum field ripples */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20"
          animate={_{
            scale: [1, _1.2, _1], _opacity: [0.1, _0.3, _0.1]}}
          transition={_{
            duration: 4, _repeat: Infinity, _ease: 'easeInOut'}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
        
        {_/* Holographic matrix */}
        <motion.div
<<<<<<< HEAD
          className=&quot;absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20&quot;
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
=======
          className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20"
          animate={_{
            scale: [1.2, _1, _1.2], _opacity: [0.3, _0.1, _0.3]}}
          transition={_{
            duration: 5, _repeat: Infinity, _ease: 'easeInOut'}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
        
        {_/* Neural network nodes */}
        <motion.div
<<<<<<< HEAD
          className=&quot;absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20&quot;
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>
      
      {/* Floating orbs with glow effects */}
      <div className=&quot;absolute inset-0 pointer-events-none&quot;>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className=&quot;absolute w-2 h-2 rounded-full bg-cyan-400&quot;
            style={{
=======
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20"
          animate={_{
            scale: [1, _1.1, _1], _opacity: [0.2, _0.4, _0.2]}}
          transition={_{
            duration: 6, _repeat: Infinity, _ease: 'easeInOut'}}
        />
      </div>
      
      {_/* Floating orbs with glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        {_[...Array(8)].map(_(_, _i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400"
            style={_{
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              left: `${20 + (i * 10)}%`,
              top: `${_30 + (i * 8)}%`,
              filter: 'blur(1px)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)'
            }}
            animate={_{
              y: [0, _-20, _0], _opacity: [0.3, _0.8, _0.3], _scale: [1, _1.2, _1]}}
            transition={_{
              duration: 3 + i * 0.5, _repeat: Infinity, _ease: 'easeInOut', _delay: i * 0.3}}
          />
        ))}
      </div>
    </div>
  )
}