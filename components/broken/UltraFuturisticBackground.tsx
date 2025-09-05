<<<<<<< HEAD
import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion',
const UltraFuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null),

  useEffect(() => {
    const canvas = canvasRef.current,
    if (!canvas) return,

    const ctx = canvas.getContext('2d'),
    if (!ctx) return,
=======
import React, {_useEffect, _useRef} from 'react';

const UltraFuturisticBackground: React.FC = () => {_const _canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect__(() => {
    const _canvas = canvasRef.current;
    if (!canvas) return;

    const _ctx = canvas.getContext('2d');
    if (!ctx) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

    // Quantum particle system
    const particles: Array<{
<<<<<<< HEAD
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,
      maxLife: number
    }> = [],

    // Create initial particles
    for (let i = 0, i < 100, i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
=======
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;}> = [];

    // Create initial particles
    for (let i = 0; i < 100; i++) {_particles.push({
        x: Math.random() * canvas.width, _y: Math.random() * canvas.height, _vx: (Math.random() - 0.5) * 2, _vy: (Math.random() - 0.5) * 2, _size: Math.random() * 3 + 1, _color: `hsl(${Math.random() * 360}, 70%, 60%)`,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        life: Math.random() * 100,
        maxLife: 100
      })
    }

    // Animation loop
<<<<<<< HEAD
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)',
      ctx.fillRect(0, 0, canvas.width, canvas.height),

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx,
        particle.y += particle.vy,
        particle.life--,
=======
    const _animate = () => {_ctx.fillStyle = 'rgba(0, _0, _0, _0.1)';
      ctx.fillRect(0, _0, _canvas.width, _canvas.height);

      // Update and draw particles
      particles.forEach(_(particle, _index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width,
        if (particle.x > canvas.width) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height,
        if (particle.y > canvas.height) particle.y = 0,

        // Draw particle
<<<<<<< HEAD
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fillStyle = particle.color,
        ctx.globalAlpha = particle.life / particle.maxLife,
        ctx.fill(),
=======
        ctx.beginPath();
        ctx.arc(particle.x, _particle.y, _particle.size, _0, _Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.life / particle.maxLife;
        ctx.fill();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        // Reset particle if it dies
        if (particle.life <= 0) {
          particles[index] = {
            x: Math.random() * canvas.width, _y: Math.random() * canvas.height, _vx: (Math.random() - 0.5) * 2, _vy: (Math.random() - 0.5) * 2, _size: Math.random() * 3 + 1, _color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            life: 100,
            maxLife: 100
          }
        }
      }),

      // Draw quantum entanglement lines
<<<<<<< HEAD
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          ),
          
          if (distance < 100) {
            ctx.beginPath(),
            ctx.moveTo(particle1.x, particle1.y),
            ctx.lineTo(particle2.x, particle2.y),
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`,
            ctx.lineWidth = 1,
            ctx.stroke()
=======
      particles.forEach(_(particle1, _i) => {_particles.slice(i + 1).forEach(_(particle2) => {
          const _distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, _2) + 
            Math.pow(particle1.y - particle2.y, _2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, _particle1.y);
            ctx.lineTo(particle2.x, _particle2.y);
            ctx.strokeStyle = `rgba(0, _255, _255, _${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          }
        })
      }),

      requestAnimationFrame(animate)
    },

    animate(),

    // Handle resize
<<<<<<< HEAD
    const handleResize = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight
    },
=======
    const _handleResize = () => {_canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    window.addEventListener('resize', handleResize),

<<<<<<< HEAD
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []),

  return (
    <div className=&quot;fixed inset-0 -z-10 overflow-hidden&quot;>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className=&quot;absolute inset-0 w-full h-full&quot;
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Quantum Grid */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20&quot; />
      </div>

      {/* Floating Geometric Shapes */}
      <div className=&quot;absolute inset-0&quot;>
        {/* Hexagon */}
        <motion.div
          className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/30&quot;
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: &quot;linear&quot;
          }}
=======
    return () => {_window.removeEventListener('resize', _handleResize);};
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {_/* Canvas Background */}
      <canvas
        ref={_canvasRef}
        className="absolute inset-0 w-full h-full"
        style={_{ background: 'radial-gradient(ellipse at center, _rgba(0, _0, _0, _0) 0%, _rgba(0, _0, _0, _1) 100%)'}}
      />

      {_/* Quantum Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      </div>

      {_/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {_/* Hexagon */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          style={_{
            clipPath: 'polygon(50% 0%, _100% 25%, _100% 75%, _50% 100%, _0% 75%, _0% 25%)'}}
          animate={_{
            rotate: [0, _360], _scale: [1, _1.2, _1], _opacity: [0.3, _0.6, _0.3]}}
          transition={_{
            duration: 20, _repeat: Infinity, _ease: "linear"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />

        {_/* Triangle */}
        <motion.div
<<<<<<< HEAD
          className=&quot;absolute top-40 right-32 w-24 h-24 border border-purple-400/30&quot;
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: &quot;linear&quot;
          }}
=======
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
          style={_{
            clipPath: 'polygon(50% 0%, _0% 100%, _100% 100%)'}}
          animate={_{
            rotate: [360, _0], _scale: [1, _1.3, _1], _opacity: [0.3, _0.7, _0.3]}}
          transition={_{
            duration: 15, _repeat: Infinity, _ease: "linear"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />

        {_/* Circle */}
        <motion.div
<<<<<<< HEAD
          className=&quot;absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full&quot;
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: &quot;easeInOut&quot;
          }}
=======
          className="absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full"
          animate={_{
            scale: [1, _1.5, _1], _opacity: [0.2, _0.8, _0.2]}}
          transition={_{
            duration: 12, _repeat: Infinity, _ease: "easeInOut"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />

        {_/* Square */}
        <motion.div
<<<<<<< HEAD
          className=&quot;absolute bottom-20 right-20 w-28 h-28 border border-green-400/30&quot;
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: &quot;linear&quot;
          }}
        />
      </div>

      {/* Energy Orbs */}
      <div className=&quot;absolute inset-0&quot;>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className=&quot;absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm&quot;
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`
            }}
            animate={{
              scale: [0.5, 2, 0.5],
              opacity: [0.3, 1, 0.3],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: &quot;easeInOut&quot;,
              delay: i * 0.3
=======
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/30"
          animate={_{
            rotate: [0, _180, _360], _scale: [1, _1.1, _1], _opacity: [0.3, _0.6, _0.3]}}
          transition={_{
            duration: 18, _repeat: Infinity, _ease: "linear"}}
        />
      </div>

      {_/* Energy Orbs */}
      <div className="absolute inset-0">
        {_[...Array(8)].map(_(_, _i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"
            style={_{
              left: `${20 + (i * 10)}%`,
              top: `${_30 + (i * 5)}%`
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            }}
            animate={_{
              scale: [0.5, _2, _0.5], _opacity: [0.3, _1, _0.3], _y: [0, _-20, _0]}}
            transition={_{
              duration: 3 + i * 0.5, _repeat: Infinity, _ease: "easeInOut", _delay: i * 0.3}}
          />
        ))}
      </div>

<<<<<<< HEAD
      {/* Quantum Wave Effects */}
      <div className=&quot;absolute inset-0&quot;>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className=&quot;absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent&quot;
            style={{
              top: `${20 + (i * 15)}%`
            }}
            animate={{
              x: ['-100%100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: &quot;linear&quot;,
              delay: i * 1.5
            }}
=======
      {_/* Quantum Wave Effects */}
      <div className="absolute inset-0">
        {_[...Array(5)].map(_(_, _i) => (
          <motion.div
            key={i}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            style={_{
              top: `${20 + (i * 15)}%`
            }}
            animate={_{
              x: ['-100%', _'100%'], _opacity: [0, _1, _0]}}
            transition={_{
              duration: 8 + i * 2, _repeat: Infinity, _ease: "linear", _delay: i * 1.5}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        ))}
      </div>

<<<<<<< HEAD
      {/* Neon Glow Effects */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse&quot; />
        <div className=&quot;absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000&quot; />
        <div className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500&quot; />
      </div>

      {/* Data Stream Effect */}
      <div className=&quot;absolute inset-0&quot;>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className=&quot;absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent&quot;
            style={{
              left: `${Math.random() * 100}%`,
              top: '-2rem'
            }}
            animate={{
              y: ['0vh100vh'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: &quot;linear&quot;,
              delay: Math.random() * 5
            }}
=======
      {_/* Neon Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {_/* Data Stream Effect */}
      <div className="absolute inset-0">
        {_[...Array(20)].map(_(_, _i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent"
            style={_{
              left: `${Math.random() * 100}%`,
              top: '-2rem'
            }}
            animate={_{
              y: ['0vh', _'100vh'], _opacity: [0, _1, _0]}}
            transition={_{
              duration: 4 + Math.random() * 3, _repeat: Infinity, _ease: "linear", _delay: Math.random() * 5}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        ))}
      </div>

<<<<<<< HEAD
      {/* Quantum Entanglement Lines */}
      <div className=&quot;absolute inset-0&quot;>
        <svg className=&quot;w-full h-full&quot;>
=======
      {_/* Quantum Entanglement Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <defs>
            <linearGradient id=&quot;quantumGradient&quot; x1=&quot;0%&quot; y1=&quot;0%&quot; x2=&quot;100%&quot; y2=&quot;100%&quot;>
              <stop offset=&quot;0%&quot; stopColor=&quot;rgba(0,255,255,0.3)&quot; />
              <stop offset=&quot;50%&quot; stopColor=&quot;rgba(255,0,255,0.3)&quot; />
              <stop offset=&quot;100%&quot; stopColor=&quot;rgba(0,255,255,0.3)&quot; />
            </linearGradient>
          </defs>
          {_[...Array(15)].map(_(_, _i) => (
            <motion.line
              key={i}
<<<<<<< HEAD
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
              stroke=&quot;url(#quantumGradient)&quot;
              strokeWidth=&quot;1&quot;
              opacity=&quot;0.3&quot;
              animate={{
                opacity: [0.1, 0.5, 0.1],
                strokeDasharray: [0, 100, 0]
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: &quot;easeInOut&quot;
              }}
=======
              x1={_Math.random() * 100}
              y1={_Math.random() * 100}
              x2={_Math.random() * 100}
              y2={_Math.random() * 100}
              stroke="url(#quantumGradient)"
              strokeWidth="1"
              opacity="0.3"
              animate={_{
                opacity: [0.1, _0.5, _0.1], _strokeDasharray: [0, _100, _0]}}
              transition={_{
                duration: 6 + i * 0.5, _repeat: Infinity, _ease: "easeInOut"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          ))}
        </svg>
      </div>
    </div>
  )
},

export default UltraFuturisticBackground,