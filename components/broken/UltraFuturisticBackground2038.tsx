<<<<<<< HEAD
import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion',
interface UltraFuturisticBackground2038Props {
  intensity?: 'low' | 'medium' | 'high',
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'space' | 'consciousness',
  children?: React.ReactNode
}

export default function UltraFuturisticBackground2038({ 
  intensity = 'medium',
  theme = 'consciousness',
  children
}: UltraFuturisticBackground2038Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null),
  const containerRef = useRef<HTMLDivElement>(null),

  useEffect(() => {
    const canvas = canvasRef.current,
    if (!canvas) return,

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    const intensityMultiplier = intensity === 'low' ? 0.5 : intensity === 'medium' ? 1 : 2,

    const ctx = canvas.getContext('2d'),
    if (!ctx) return,

    const resizeCanvas = () => {
      const rect = containerRef.current?.getBoundingClientRect(),
      if (rect) {
        canvas.width = rect.width * (window.devicePixelRatio || 1),
        canvas.height = rect.height * (window.devicePixelRatio || 1),
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
      }
    },
=======
import React, {_useEffect, _useRef} from 'react';

interface UltraFuturisticBackground2038Props {_intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'space' | 'consciousness';
  children?: React.ReactNode;}

export default function UltraFuturisticBackground2038(_{_intensity = 'medium', _theme = 'consciousness', _children}: UltraFuturisticBackground2038Props) {_const _canvasRef = useRef<HTMLCanvasElement>(null);
  const _containerRef = useRef<HTMLDivElement>(null);

  useEffect__(() => {
    const _canvas = canvasRef.current;
    if (!canvas) return;

    const _prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const _intensityMultiplier = intensity === 'low' ? 0.5 : intensity === 'medium' ? 1 : 2;

    const _ctx = canvas.getContext('2d');
    if (!ctx) return;

    const _resizeCanvas = () => {
      const _rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width * (window.devicePixelRatio || 1);
        canvas.height = rect.height * (window.devicePixelRatio || 1);
        ctx.scale(window.devicePixelRatio || 1, _window.devicePixelRatio || 1);}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    resizeCanvas(),
    window.addEventListener('resize', resizeCanvas),

    // Enhanced theme-based color schemes for 2038
    const _getThemeColors = () => {_switch (theme) {
        case 'consciousness':
          return {
<<<<<<< HEAD
            primary: ['#ff0080#00ffff#ffff00#ff00ff#8000ff#00ff80'],
            secondary: ['#ff8000#0080ff#ff4080#40ffff#ffff40#ff40ff'],
            accent: ['#ff6b6b#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3'],
            quantum: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444']
          },
        case 'neon':
          return {
            primary: ['#ff0080#00ffff#ffff00#ff00ff#8000ff#00ff80'],
            secondary: ['#ff8000#0080ff#ff4080#40ffff#ffff40#ff40ff'],
            accent: ['#ff6b6b#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3'],
            quantum: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444']
          },
        case 'holographic':
          return {
            primary: ['#ff6b6b#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3'],
            secondary: ['#54a0ff#5f27cd#ff9ff3#54a0ff#5f27cd#ff6b6b'],
            accent: ['#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3#54a0ff'],
            quantum: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444']
          },
        case 'cyberpunk':
          return {
            primary: ['#ff0055#00ffff#ffff00#ff00ff#8000ff#00ff80'],
            secondary: ['#ff8000#0080ff#ff4080#40ffff#ffff40#ff40ff'],
            accent: ['#ffff40#ff40ff#ff6b6b#4ecdc4#45b7d1#96ceb4'],
            quantum: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444']
          },
        case 'space':
          return {
            primary: ['#1e3a8a#7c3aed#059669#dc2626#ea580c#0891b2'],
            secondary: ['#8b5cf6#ec4899#f59e0b#10b981#06b6d4#a855f7'],
            accent: ['#f97316#ef4444#84cc16#06b6d4#a855f7#f97316'],
            quantum: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444']
          },
        default: // quantum
          return {
            primary: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444'],
            secondary: ['#f59e0b#ef4444#8b5cf6#06b6d4#ec4899#10b981'],
            accent: ['#ec4899#10b981#f59e0b#ef4444#8b5cf6#06b6d4'],
            quantum: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444']
          }
=======
            primary: ['#ff0080', _'#00ffff', _'#ffff00', _'#ff00ff', _'#8000ff', _'#00ff80'], _secondary: ['#ff8000', _'#0080ff', _'#ff4080', _'#40ffff', _'#ffff40', _'#ff40ff'], _accent: ['#ff6b6b', _'#4ecdc4', _'#45b7d1', _'#96ceb4', _'#feca57', _'#ff9ff3'], _quantum: ['#8b5cf6', _'#06b6d4', _'#ec4899', _'#10b981', _'#f59e0b', _'#ef4444']};
        case 'neon':
          return {_primary: ['#ff0080', _'#00ffff', _'#ffff00', _'#ff00ff', _'#8000ff', _'#00ff80'], _secondary: ['#ff8000', _'#0080ff', _'#ff4080', _'#40ffff', _'#ffff40', _'#ff40ff'], _accent: ['#ff6b6b', _'#4ecdc4', _'#45b7d1', _'#96ceb4', _'#feca57', _'#ff9ff3'], _quantum: ['#8b5cf6', _'#06b6d4', _'#ec4899', _'#10b981', _'#f59e0b', _'#ef4444']};
        case 'holographic':
          return {_primary: ['#ff6b6b', _'#4ecdc4', _'#45b7d1', _'#96ceb4', _'#feca57', _'#ff9ff3'], _secondary: ['#54a0ff', _'#5f27cd', _'#ff9ff3', _'#54a0ff', _'#5f27cd', _'#ff6b6b'], _accent: ['#4ecdc4', _'#45b7d1', _'#96ceb4', _'#feca57', _'#ff9ff3', _'#54a0ff'], _quantum: ['#8b5cf6', _'#06b6d4', _'#ec4899', _'#10b981', _'#f59e0b', _'#ef4444']};
        case 'cyberpunk':
          return {_primary: ['#ff0055', _'#00ffff', _'#ffff00', _'#ff00ff', _'#8000ff', _'#00ff80'], _secondary: ['#ff8000', _'#0080ff', _'#ff4080', _'#40ffff', _'#ffff40', _'#ff40ff'], _accent: ['#ffff40', _'#ff40ff', _'#ff6b6b', _'#4ecdc4', _'#45b7d1', _'#96ceb4'], _quantum: ['#8b5cf6', _'#06b6d4', _'#ec4899', _'#10b981', _'#f59e0b', _'#ef4444']};
        case 'space':
          return {_primary: ['#1e3a8a', _'#7c3aed', _'#059669', _'#dc2626', _'#ea580c', _'#0891b2'], _secondary: ['#8b5cf6', _'#ec4899', _'#f59e0b', _'#10b981', _'#06b6d4', _'#a855f7'], _accent: ['#f97316', _'#ef4444', _'#84cc16', _'#06b6d4', _'#a855f7', _'#f97316'], _quantum: ['#8b5cf6', _'#06b6d4', _'#ec4899', _'#10b981', _'#f59e0b', _'#ef4444']};
        default: // quantum
          return {_primary: ['#8b5cf6', _'#06b6d4', _'#ec4899', _'#10b981', _'#f59e0b', _'#ef4444'], _secondary: ['#f59e0b', _'#ef4444', _'#8b5cf6', _'#06b6d4', _'#ec4899', _'#10b981'], _accent: ['#ec4899', _'#10b981', _'#f59e0b', _'#ef4444', _'#8b5cf6', _'#06b6d4'], _quantum: ['#8b5cf6', _'#06b6d4', _'#ec4899', _'#10b981', _'#f59e0b', _'#ef4444']};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    },

<<<<<<< HEAD
    const colors = getThemeColors(),

    // Enhanced particle system with consciousness and quantum effects
    let particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      opacity: number,
      color: string,
      type: 'particle' | 'wave' | 'quantum' | 'neon' | 'hologram' | 'space' | 'consciousness' | 'quantum-field',
      life: number,
      maxLife: number,
      rotation: number,
      rotationSpeed: number,
      phase: number,
      amplitude: number,
      frequency: number,
      entanglement: number[],
      consciousness: number,
      quantumState: number
    }> = [],

    // Initialize particles with enhanced consciousness and quantum effects
    const initParticles = () => {
      particles = [],
      const particleCount = Math.floor(50 * intensityMultiplier),
      
      for (let i = 0, i < particleCount, i++) {
        const type = Math.random() > 0.7 ? 'consciousness' : 
=======
    const _colors = getThemeColors();

    // Enhanced particle system with consciousness and quantum effects
    let particles: Array<{_x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'particle' | 'wave' | 'quantum' | 'neon' | 'hologram' | 'space' | 'consciousness' | 'quantum-field';
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
      phase: number;
      amplitude: number;
      frequency: number;
      entanglement: number[];
      consciousness: number;
      quantumState: number;}> = [];

    // Initialize particles with enhanced consciousness and quantum effects
    const _initParticles = () => {_particles = [];
      const _particleCount = Math.floor(50 * intensityMultiplier);
      
      for (let i = 0; i < particleCount; i++) {
        const _type = Math.random() > 0.7 ? 'consciousness' : 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    Math.random() > 0.5 ? 'quantum-field' : 
                    Math.random() > 0.3 ? 'hologram' : 'particle',
        
        particles.push({
<<<<<<< HEAD
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensityMultiplier,
          vy: (Math.random() - 0.5) * 2 * intensityMultiplier,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type,
          life: Math.random() * 100,
          maxLife: 100,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          phase: Math.random() * Math.PI * 2,
          amplitude: Math.random() * 20 + 10,
          frequency: Math.random() * 0.02 + 0.01,
          entanglement: [Math.random(), Math.random()],
          consciousness: Math.random(),
          quantumState: Math.random()
        })
=======
          x: Math.random() * canvas.width, _y: Math.random() * canvas.height, _vx: (Math.random() - 0.5) * 2 * intensityMultiplier, _vy: (Math.random() - 0.5) * 2 * intensityMultiplier, _size: Math.random() * 4 + 1, _opacity: Math.random() * 0.8 + 0.2, _color: colors.primary[Math.floor(Math.random() * colors.primary.length)], _type, _life: Math.random() * 100, _maxLife: 100, _rotation: Math.random() * Math.PI * 2, _rotationSpeed: (Math.random() - 0.5) * 0.1, _phase: Math.random() * Math.PI * 2, _amplitude: Math.random() * 20 + 10, _frequency: Math.random() * 0.02 + 0.01, _entanglement: [Math.random(), _Math.random()], _consciousness: Math.random(), _quantumState: Math.random()});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    },

    // Enhanced animation loop with consciousness and quantum effects
<<<<<<< HEAD
    const animate = () => {
      if (prefersReducedMotion) return,

      ctx.clearRect(0, 0, canvas.width, canvas.height),
      
      // Create quantum field effects
      if (theme === 'consciousness' || theme === 'quantum') {
        const time = Date.now() * 0.001,
        for (let x = 0, x < canvas.width, x += 20) {
          for (let y = 0, y < canvas.height, y += 20) {
            const noise = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time) * 0.5,
            const alpha = (noise + 0.5) * 0.1,
            if (alpha > 0.05) {
              ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`,
              ctx.fillRect(x, y, 20, 20)
=======
    const _animate = () => {_if (prefersReducedMotion) return;

      ctx.clearRect(0, _0, _canvas.width, _canvas.height);
      
      // Create quantum field effects
      if (theme === 'consciousness' || theme === 'quantum') {
        const _time = Date.now() * 0.001;
        for (let x = 0; x < canvas.width; x += 20) {
          for (let y = 0; y < canvas.height; y += 20) {
            const _noise = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time) * 0.5;
            const _alpha = (noise + 0.5) * 0.1;
            if (alpha > 0.05) {
              ctx.fillStyle = `rgba(139, _92, _246, _${alpha})`;
              ctx.fillRect(x, y, 20, 20);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            }
          }
        }
      }

      // Update and draw particles
<<<<<<< HEAD
      particles.forEach((particle, index) => {
        // Update particle properties
        particle.x += particle.vx,
        particle.y += particle.vy,
        particle.rotation += particle.rotationSpeed,
        particle.life--,
        particle.phase += particle.frequency,
        particle.consciousness += 0.01,
        particle.quantumState = (particle.quantumState + 0.02) % (Math.PI * 2),
=======
      particles.forEach(_(particle, _index) => {_// Update particle properties
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.life--;
        particle.phase += particle.frequency;
        particle.consciousness += 0.01;
        particle.quantumState = (particle.quantumState + 0.02) % (Math.PI * 2);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        // Quantum entanglement effects
        if (particle.type === 'quantum-field') {
          particles.forEach(_(otherParticle, _otherIndex) => {
            if (index !== otherIndex && Math.random() > 0.99) {
<<<<<<< HEAD
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              ),
              if (distance < 100) {
                ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 * (1 - distance / 100)})`,
                ctx.lineWidth = 1,
                ctx.beginPath(),
                ctx.moveTo(particle.x, particle.y),
                ctx.lineTo(otherParticle.x, otherParticle.y),
                ctx.stroke()
=======
              const _distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, _2) + 
                Math.pow(particle.y - otherParticle.y, _2)
              );
              if (distance < 100) {
                ctx.strokeStyle = `rgba(139, _92, _246, _${0.3 * (1 - distance / 100)})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              }
            }
          })
        }

        // Consciousness wave effects
<<<<<<< HEAD
        if (particle.type === 'consciousness') {
          const waveX = particle.x + Math.sin(particle.phase) * particle.amplitude,
          const waveY = particle.y + Math.cos(particle.phase) * particle.amplitude,
          
          ctx.strokeStyle = `rgba(255, 0, 128, ${particle.opacity * 0.6})`,
          ctx.lineWidth = 2,
          ctx.beginPath(),
          ctx.moveTo(particle.x, particle.y),
          ctx.lineTo(waveX, waveY),
          ctx.stroke()
        }

        // Holographic effects
        if (particle.type === 'hologram') {
          const hologramSize = particle.size * (1 + Math.sin(particle.phase) * 0.3),
          ctx.strokeStyle = `rgba(78, 205, 196, ${particle.opacity})`,
          ctx.lineWidth = 1,
=======
        if (particle.type === 'consciousness') {_const _waveX = particle.x + Math.sin(particle.phase) * particle.amplitude;
          const _waveY = particle.y + Math.cos(particle.phase) * particle.amplitude;
          
          ctx.strokeStyle = `rgba(255, _0, _128, _${particle.opacity * 0.6})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(waveX, waveY);
          ctx.stroke();
        }

        // Holographic effects
        if (particle.type === 'hologram') {_const _hologramSize = particle.size * (1 + Math.sin(particle.phase) * 0.3);
          ctx.strokeStyle = `rgba(78, _205, _196, _${particle.opacity})`;
          ctx.lineWidth = 1;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ctx.strokeRect(
            particle.x - hologramSize / 2, 
            particle.y - hologramSize / 2, 
            hologramSize, 
            hologramSize
          )
        }

        // Quantum field effects
<<<<<<< HEAD
        if (particle.type === 'quantum-field') {
          const fieldSize = particle.size * 3,
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, fieldSize
          ),
          gradient.addColorStop(0, `rgba(139, 92, 246, ${particle.opacity * 0.8})`),
          gradient.addColorStop(1, 'rgba(139, 92, 246, 0)'),
=======
        if (particle.type === 'quantum-field') {_const _fieldSize = particle.size * 3;
          const _gradient = ctx.createRadialGradient(
            particle.x, _particle.y, _0, _particle.x, _particle.y, _fieldSize
          );
          gradient.addColorStop(0, _`rgba(139, _92, _246, _${particle.opacity * 0.8})`);
          gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          
          ctx.fillStyle = gradient,
          ctx.fillRect(
            particle.x - fieldSize / 2, 
            particle.y - fieldSize / 2, 
            fieldSize, 
            fieldSize
          )
        }

        // Standard particle rendering
<<<<<<< HEAD
        if (particle.type === 'particle') {
          ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`,
          ctx.beginPath(),
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
          ctx.fill()
=======
        if (particle.type === 'particle') {_ctx.fillStyle = `${particle.color}${_Math.floor(particle.opacity * 255).toString(16).padStart(2, _'0')}`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }

        // Boundary wrapping with quantum tunneling effect
        if (particle.x < 0 || particle.x > canvas.width || 
<<<<<<< HEAD
            particle.y < 0 || particle.y > canvas.height) {
          if (Math.random() > 0.8) { // Quantum tunneling
            particle.x = Math.random() * canvas.width,
            particle.y = Math.random() * canvas.height
          } else {
            particle.x = (particle.x + canvas.width) % canvas.width,
            particle.y = (particle.y + canvas.height) % canvas.height
          }
        }

        // Regenerate particles
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width,
          particle.y = Math.random() * canvas.height,
          particle.life = particle.maxLife,
          particle.consciousness = Math.random(),
          particle.quantumState = Math.random() * Math.PI * 2
        }
      }),
=======
            particle.y < 0 || particle.y > canvas.height) {_if (Math.random() > 0.8) { // Quantum tunneling
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;} else {_particle.x = (particle.x + canvas.width) % canvas.width;
            particle.y = (particle.y + canvas.height) % canvas.height;}
        }

        // Regenerate particles
        if (particle.life <= 0) {_particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.consciousness = Math.random();
          particle.quantumState = Math.random() * Math.PI * 2;}
      });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      requestAnimationFrame(animate)
    },

    initParticles(),
    animate(),

<<<<<<< HEAD
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [intensity, theme]),

  return (
    <div ref={containerRef} className=&quot;fixed inset-0 pointer-events-none&quot;>
      <canvas
        ref={canvasRef}
        className=&quot;w-full h-full&quot;
        style={{
          background: theme === 'consciousness' ? 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)' :
                   theme === 'quantum' ? 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)' :
                   theme === 'holographic' ? 'radial-gradient(ellipse at center, rgba(78, 205, 196, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)' :
                   'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />
      
      {/* Additional visual effects */}
      <div className=&quot;absolute inset-0&quot;>
        {/* Quantum field lines */}
        {theme === 'consciousness' && (
          <div className=&quot;absolute inset-0&quot;>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className=&quot;absolute w-px h-32 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-20&quot;
                style={{
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 3) % 100}%`}}
                animate={{
                  height: [32, 64, 32],
                  opacity: [0.2, 0.6, 0.2]}}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: &quot;easeInOut&quot;
                }}
=======
    return () => {_window.removeEventListener('resize', _resizeCanvas);};
  }, [intensity, theme]);

  return (
    <div ref={_containerRef} className="fixed inset-0 pointer-events-none">
      <canvas
        ref={_canvasRef}
        className="w-full h-full"
        style={_{
          background: theme === 'consciousness' ? 'radial-gradient(ellipse at center, _rgba(139, _92, _246, _0.1) 0%, _rgba(0, _0, _0, _0.8) 100%)' :
                   theme === 'quantum' ? 'radial-gradient(ellipse at center, _rgba(6, _182, _212, _0.1) 0%, _rgba(0, _0, _0, _0.8) 100%)' :
                   theme === 'holographic' ? 'radial-gradient(ellipse at center, _rgba(78, _205, _196, _0.1) 0%, _rgba(0, _0, _0, _0.8) 100%)' :
                   'radial-gradient(ellipse at center, _rgba(139, _92, _246, _0.1) 0%, _rgba(0, _0, _0, _0.8) 100%)'}}
      />
      
      {_/* Additional visual effects */}
      <div className="absolute inset-0">
        {_/* Quantum field lines */}
        {_theme === 'consciousness' && (
          <div className="absolute inset-0">
            {[...Array(20)].map(_(_, _i) => (
              <motion.div
                key={i}
                className="absolute w-px h-32 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-20"
                style={_{
                  left: `${(i * 5) % 100}%`,
                  top: `${_(i * 3) % 100}%`}}
                animate={_{
                  height: [32, _64, _32], _opacity: [0.2, _0.6, _0.2]}}
                transition={_{
                  duration: 3 + i * 0.2, _repeat: Infinity, _ease: "easeInOut"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            ))}
          </div>
        )}

<<<<<<< HEAD
        {/* Holographic grid */}
        {theme === 'holographic' && (
          <div className=&quot;absolute inset-0&quot;>
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className=&quot;absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30&quot;
                style={{
                  top: `${(i * 7) % 100}%`}}
                animate={{
                  opacity: [0.3, 0.8, 0.3]}}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: &quot;easeInOut&quot;
                }}
=======
        {_/* Holographic grid */}
        {_theme === 'holographic' && (
          <div className="absolute inset-0">
            {[...Array(15)].map(_(_, _i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
                style={_{
                  top: `${(i * 7) % 100}%`}}
                animate={_{
                  opacity: [0.3, _0.8, _0.3]}}
                transition={_{
                  duration: 4 + i * 0.3, _repeat: Infinity, _ease: "easeInOut"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            ))}
          </div>
        )}

<<<<<<< HEAD
        {/* Consciousness waves */}
        {theme === 'consciousness' && (
          <div className=&quot;absolute inset-0&quot;>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className=&quot;absolute w-96 h-96 border border-pink-500/20 rounded-full&quot;
                style={{
                  left: `${(i * 12) % 100}%`,
                  top: `${(i * 8) % 100}%`}}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2]}}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  ease: &quot;easeInOut&quot;
                }}
=======
        {_/* Consciousness waves */}
        {_theme === 'consciousness' && (
          <div className="absolute inset-0">
            {[...Array(8)].map(_(_, _i) => (
              <motion.div
                key={i}
                className="absolute w-96 h-96 border border-pink-500/20 rounded-full"
                style={_{
                  left: `${(i * 12) % 100}%`,
                  top: `${_(i * 8) % 100}%`}}
                animate={_{
                  scale: [1, _1.5, _1], _opacity: [0.2, _0.6, _0.2]}}
                transition={_{
                  duration: 6 + i * 0.5, _repeat: Infinity, _ease: "easeInOut"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            ))}
          </div>
        )}
      </div>

      {_children}
    </div>
  )
}
