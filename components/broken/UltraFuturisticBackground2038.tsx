import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD

interface UltraFuturisticBackground2038Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?:
    | 'quantum'
    | 'neon'
    | 'holographic'
    | 'cyberpunk'
    | 'space'
    | 'consciousness';
  children?: React.ReactNode;

export default function UltraFuturisticBackground2038({
  intensity = 'medium',
  theme = 'consciousness',
  children,
=======
interface UltraFuturisticBackground2038Props {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'space' | 'consciousness';
  children?: React.ReactNode
}

export default function UltraFuturisticBackground2038({ 
  intensity = 'medium';
  theme = 'consciousness';
  children
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
}: UltraFuturisticBackground2038Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

<<<<<<< HEAD
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const intensityMultiplier =
      intensity === 'low' ? 0.5 : intensity === 'medium' ? 1 : 2;
=======
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    const intensityMultiplier = intensity === 'low' ? 0.5 : intensity === 'medium' ? 1 : 2;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width * (window.devicePixelRatio || 1);
        canvas.height = rect.height * (window.devicePixelRatio || 1);
<<<<<<< HEAD
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
=======
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced theme-based color schemes for 2038
    const getThemeColors = () => {
      switch (theme) {
        case 'consciousness':
          return {
<<<<<<< HEAD
            primary: [
              '#ff0080',
              '#00ffff',
              '#ffff00',
              '#ff00ff',
              '#8000ff',
              '#00ff80',
            ],
            secondary: [
              '#ff8000',
              '#0080ff',
              '#ff4080',
              '#40ffff',
              '#ffff40',
              '#ff40ff',
            ],
            accent: [
              '#ff6b6b',
              '#4ecdc4',
              '#45b7d1',
              '#96ceb4',
              '#feca57',
              '#ff9ff3',
            ],
            quantum: [
              '#8b5cf6',
              '#06b6d4',
              '#ec4899',
              '#10b981',
              '#f59e0b',
              '#ef4444',
            ],
          };
        case 'neon':
          return {
            primary: [
              '#ff0080',
              '#00ffff',
              '#ffff00',
              '#ff00ff',
              '#8000ff',
              '#00ff80',
            ],
            secondary: [
              '#ff8000',
              '#0080ff',
              '#ff4080',
              '#40ffff',
              '#ffff40',
              '#ff40ff',
            ],
            accent: [
              '#ff6b6b',
              '#4ecdc4',
              '#45b7d1',
              '#96ceb4',
              '#feca57',
              '#ff9ff3',
            ],
            quantum: [
              '#8b5cf6',
              '#06b6d4',
              '#ec4899',
              '#10b981',
              '#f59e0b',
              '#ef4444',
            ],
          };
        case 'holographic':
          return {
            primary: [
              '#ff6b6b',
              '#4ecdc4',
              '#45b7d1',
              '#96ceb4',
              '#feca57',
              '#ff9ff3',
            ],
            secondary: [
              '#54a0ff',
              '#5f27cd',
              '#ff9ff3',
              '#54a0ff',
              '#5f27cd',
              '#ff6b6b',
            ],
            accent: [
              '#4ecdc4',
              '#45b7d1',
              '#96ceb4',
              '#feca57',
              '#ff9ff3',
              '#54a0ff',
            ],
            quantum: [
              '#8b5cf6',
              '#06b6d4',
              '#ec4899',
              '#10b981',
              '#f59e0b',
              '#ef4444',
            ],
          };
        case 'cyberpunk':
          return {
            primary: [
              '#ff0055',
              '#00ffff',
              '#ffff00',
              '#ff00ff',
              '#8000ff',
              '#00ff80',
            ],
            secondary: [
              '#ff8000',
              '#0080ff',
              '#ff4080',
              '#40ffff',
              '#ffff40',
              '#ff40ff',
            ],
            accent: [
              '#ffff40',
              '#ff40ff',
              '#ff6b6b',
              '#4ecdc4',
              '#45b7d1',
              '#96ceb4',
            ],
            quantum: [
              '#8b5cf6',
              '#06b6d4',
              '#ec4899',
              '#10b981',
              '#f59e0b',
              '#ef4444',
            ],
          };
        case 'space':
          return {
            primary: [
              '#1e3a8a',
              '#7c3aed',
              '#059669',
              '#dc2626',
              '#ea580c',
              '#0891b2',
            ],
            secondary: [
              '#8b5cf6',
              '#ec4899',
              '#f59e0b',
              '#10b981',
              '#06b6d4',
              '#a855f7',
            ],
            accent: [
              '#f97316',
              '#ef4444',
              '#84cc16',
              '#06b6d4',
              '#a855f7',
              '#f97316',
            ],
            quantum: [
              '#8b5cf6',
              '#06b6d4',
              '#ec4899',
              '#10b981',
              '#f59e0b',
              '#ef4444',
            ],
          };
        default: // quantum
          return {
            primary: [
              '#8b5cf6',
              '#06b6d4',
              '#ec4899',
              '#10b981',
              '#f59e0b',
              '#ef4444',
            ],
            secondary: [
              '#f59e0b',
              '#ef4444',
              '#8b5cf6',
              '#06b6d4',
              '#ec4899',
              '#10b981',
            ],
            accent: [
              '#ec4899',
              '#10b981',
              '#f59e0b',
              '#ef4444',
              '#8b5cf6',
              '#06b6d4',
            ],
            quantum: [
              '#8b5cf6',
              '#06b6d4',
              '#ec4899',
              '#10b981',
              '#f59e0b',
              '#ef4444',
            ],
          };
=======
            primary: ['#ff0080#00ffff#ffff00#ff00ff#8000ff#00ff80'],
            secondary: ['#ff8000#0080ff#ff4080#40ffff#ffff40#ff40ff'],
            accent: ['#ff6b6b#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3'],
            quantum: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444']
          };
        case 'neon':
          return {
            primary: ['#ff0080#00ffff#ffff00#ff00ff#8000ff#00ff80'],
            secondary: ['#ff8000#0080ff#ff4080#40ffff#ffff40#ff40ff'],
            accent: ['#ff6b6b#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3'],
            quantum: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444']
          };
        case 'holographic':
          return {
            primary: ['#ff6b6b#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3'],
            secondary: ['#54a0ff#5f27cd#ff9ff3#54a0ff#5f27cd#ff6b6b'],
            accent: ['#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3#54a0ff'],
            quantum: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444']
          };
        case 'cyberpunk':
          return {
            primary: ['#ff0055#00ffff#ffff00#ff00ff#8000ff#00ff80'],
            secondary: ['#ff8000#0080ff#ff4080#40ffff#ffff40#ff40ff'],
            accent: ['#ffff40#ff40ff#ff6b6b#4ecdc4#45b7d1#96ceb4'],
            quantum: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444']
          };
        case 'space':
          return {
            primary: ['#1e3a8a#7c3aed#059669#dc2626#ea580c#0891b2'],
            secondary: ['#8b5cf6#ec4899#f59e0b#10b981#06b6d4#a855f7'],
            accent: ['#f97316#ef4444#84cc16#06b6d4#a855f7#f97316'],
            quantum: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444']
          };
        default: // quantum
          return {
            primary: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444'],
            secondary: ['#f59e0b#ef4444#8b5cf6#06b6d4#ec4899#10b981'],
            accent: ['#ec4899#10b981#f59e0b#ef4444#8b5cf6#06b6d4'],
            quantum: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444']
          }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }
    };

    const colors = getThemeColors();

    // Enhanced particle system with consciousness and quantum effects
    let particles: Array<{
<<<<<<< HEAD
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type:
        | 'particle'
        | 'wave'
        | 'quantum'
        | 'neon'
        | 'hologram'
        | 'space'
        | 'consciousness'
        | 'quantum-field';
      life: number;
      maxLife: number;
      rotation: number;
      rotationSpeed: number;
      phase: number;
      amplitude: number;
      frequency: number;
      entanglement: number[];
      consciousness: number;
      quantumState: number;
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }> = [];

    // Initialize particles with enhanced consciousness and quantum effects
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(50 * intensityMultiplier);
<<<<<<< HEAD

      for (let i = 0; i < particleCount; i++) {
        const type =
          Math.random() > 0.7
            ? 'consciousness'
            : Math.random() > 0.5
              ? 'quantum-field'
              : Math.random() > 0.3
                ? 'hologram'
                : 'particle';

=======
      
      for (let i = 0, i < particleCount, i++) {
        const type = Math.random() > 0.7 ? 'consciousness' : 
                    Math.random() > 0.5 ? 'quantum-field' : 
                    Math.random() > 0.3 ? 'hologram' : 'particle';
        
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * intensityMultiplier,
          vy: (Math.random() - 0.5) * 2 * intensityMultiplier,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
<<<<<<< HEAD
          color:
            colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type,
=======
          color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          life: Math.random() * 100,
          maxLife: 100,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          phase: Math.random() * Math.PI * 2,
          amplitude: Math.random() * 20 + 10,
          frequency: Math.random() * 0.02 + 0.01,
<<<<<<< HEAD
          entanglement: [Math.random(), Math.random()],
          consciousness: Math.random(),
          quantumState: Math.random(),
        });
=======
          entanglement: [Math.random(), Math.random()];
          consciousness: Math.random(),
          quantumState: Math.random()
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }
    };

    // Enhanced animation loop with consciousness and quantum effects
    const animate = () => {
      if (prefersReducedMotion) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
<<<<<<< HEAD

      // Create quantum field effects
      if (theme === 'consciousness' || theme === 'quantum') {
        const time = Date.now() * 0.001;
        for (let x = 0; x < canvas.width; x += 20) {
          for (let y = 0; y < canvas.height; y += 20) {
            const noise =
              Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time) * 0.5;
            const alpha = (noise + 0.5) * 0.1;
            if (alpha > 0.05) {
              ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`;
              ctx.fillRect(x, y, 20, 20);
=======
      
      // Create quantum field effects
      if (theme === 'consciousness' || theme === 'quantum') {
        const time = Date.now() * 0.001;
        for (let x = 0, x < canvas.width, x += 20) {
          for (let y = 0, y < canvas.height, y += 20) {
            const noise = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time) * 0.5;
            const alpha = (noise + 0.5) * 0.1;
            if (alpha > 0.05) {
              ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`;
              ctx.fillRect(x, y, 20, 20)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            }
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update particle properties
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.life--;
        particle.phase += particle.frequency;
        particle.consciousness += 0.01;
        particle.quantumState = (particle.quantumState + 0.02) % (Math.PI * 2);

        // Quantum entanglement effects
        if (particle.type === 'quantum-field') {
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex && Math.random() > 0.99) {
              const distance = Math.sqrt(
<<<<<<< HEAD
                Math.pow(particle.x - otherParticle.x, 2) +
                  Math.pow(particle.y - otherParticle.y, 2)
=======
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
              );
              if (distance < 100) {
                ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 * (1 - distance / 100)})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
<<<<<<< HEAD
                ctx.stroke();
              }
            }
          });
=======
                ctx.stroke()
              }
            }
          })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }

        // Consciousness wave effects
        if (particle.type === 'consciousness') {
<<<<<<< HEAD
          const waveX =
            particle.x + Math.sin(particle.phase) * particle.amplitude;
          const waveY =
            particle.y + Math.cos(particle.phase) * particle.amplitude;

=======
          const waveX = particle.x + Math.sin(particle.phase) * particle.amplitude;
          const waveY = particle.y + Math.cos(particle.phase) * particle.amplitude;
          
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          ctx.strokeStyle = `rgba(255, 0, 128, ${particle.opacity * 0.6})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(waveX, waveY);
<<<<<<< HEAD
          ctx.stroke();
=======
          ctx.stroke()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }

        // Holographic effects
        if (particle.type === 'hologram') {
<<<<<<< HEAD
          const hologramSize =
            particle.size * (1 + Math.sin(particle.phase) * 0.3);
          ctx.strokeStyle = `rgba(78, 205, 196, ${particle.opacity})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(
            particle.x - hologramSize / 2,
            particle.y - hologramSize / 2,
            hologramSize,
            hologramSize
          );
=======
          const hologramSize = particle.size * (1 + Math.sin(particle.phase) * 0.3);
          ctx.strokeStyle = `rgba(78, 205, 196, ${particle.opacity})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(
            particle.x - hologramSize / 2, 
            particle.y - hologramSize / 2, 
            hologramSize, 
            hologramSize
          )
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }

        // Quantum field effects
        if (particle.type === 'quantum-field') {
          const fieldSize = particle.size * 3;
          const gradient = ctx.createRadialGradient(
<<<<<<< HEAD
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            fieldSize
          );
          gradient.addColorStop(
            0,
            `rgba(139, 92, 246, ${particle.opacity * 0.8})`
          );
          gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');

          ctx.fillStyle = gradient;
          ctx.fillRect(
            particle.x - fieldSize / 2,
            particle.y - fieldSize / 2,
            fieldSize,
            fieldSize
          );
=======
            particle.x, particle.y, 0;
            particle.x, particle.y, fieldSize
          );
          gradient.addColorStop(0, `rgba(139, 92, 246, ${particle.opacity * 0.8})`);
          gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(
            particle.x - fieldSize / 2, 
            particle.y - fieldSize / 2, 
            fieldSize, 
            fieldSize
          )
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }

        // Standard particle rendering
        if (particle.type === 'particle') {
<<<<<<< HEAD
          ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, '0')}`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }

        // Boundary wrapping with quantum tunneling effect
        if (
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          if (Math.random() > 0.8) {
            // Quantum tunneling
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
          } else {
            particle.x = (particle.x + canvas.width) % canvas.width;
            particle.y = (particle.y + canvas.height) % canvas.height;
=======
          ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill()
        }

        // Boundary wrapping with quantum tunneling effect
        if (particle.x < 0 || particle.x > canvas.width || 
            particle.y < 0 || particle.y > canvas.height) {
          if (Math.random() > 0.8) { // Quantum tunneling
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height
          } else {
            particle.x = (particle.x + canvas.width) % canvas.width;
            particle.y = (particle.y + canvas.height) % canvas.height
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }
        }

        // Regenerate particles
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.consciousness = Math.random();
<<<<<<< HEAD
          particle.quantumState = Math.random() * Math.PI * 2;
        }
      });

      requestAnimationFrame(animate);
=======
          particle.quantumState = Math.random() * Math.PI * 2
        }
      });

      requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    };

    initParticles();
    animate();

    return () => {
<<<<<<< HEAD
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, theme]);

  return (
    <div ref={containerRef} className='fixed inset-0 pointer-events-none'>
      <canvas
        ref={canvasRef}
        className='w-full h-full'
        style={{
          background:
            theme === 'consciousness'
              ? 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)'
              : theme === 'quantum'
                ? 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)'
                : theme === 'holographic'
                  ? 'radial-gradient(ellipse at center, rgba(78, 205, 196, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)'
                  : 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      />

      {/* Additional visual effects */}
      <div className='absolute inset-0'>
        {/* Quantum field lines */}
        {theme === 'consciousness' && (
          <div className='absolute inset-0'>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-px h-32 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-20'
                style={{
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 3) % 100}%`,
                }}
                animate={{
                  height: [32, 64, 32],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
=======
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [intensity, theme]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: theme === 'consciousness' ? 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)' :
                   theme === 'quantum' ? 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)' :
                   theme === 'holographic' ? 'radial-gradient(ellipse at center, rgba(78, 205, 196, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)' :
                   'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)';
        }}
      />
      
      {/* Additional visual effects */}
      <div className="absolute inset-0">
        {/* Quantum field lines */}
        {theme === 'consciousness' && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-32 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-20"
                style={{
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 3) % 100}%`}}
                animate={{
                  height: [32, 64, 32];
                  opacity: [0.2, 0.6, 0.2]}}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                }}
              />
            ))}
          </div>
        )}

        {/* Holographic grid */}
        {theme === 'holographic' && (
<<<<<<< HEAD
          <div className='absolute inset-0'>
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30'
                style={{
                  top: `${(i * 7) % 100}%`,
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
=======
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
                style={{
                  top: `${(i * 7) % 100}%`}}
                animate={{
                  opacity: [0.3, 0.8, 0.3]}}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                }}
              />
            ))}
          </div>
        )}

        {/* Consciousness waves */}
        {theme === 'consciousness' && (
<<<<<<< HEAD
          <div className='absolute inset-0'>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-96 h-96 border border-pink-500/20 rounded-full'
                style={{
                  left: `${(i * 12) % 100}%`,
                  top: `${(i * 8) % 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
=======
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-96 h-96 border border-pink-500/20 rounded-full"
                style={{
                  left: `${(i * 12) % 100}%`,
                  top: `${(i * 8) % 100}%`}}
                animate={{
                  scale: [1, 1.5, 1];
                  opacity: [0.2, 0.6, 0.2]}}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                }}
              />
            ))}
          </div>
        )}
      </div>

      {children}
    </div>
<<<<<<< HEAD
  );

};
// Enhanced animation loop with consciousness and quantum effects 



}// Update and draw particles // Quantum entanglement effects if (particle.type === 'quantum-field') {
  particles.forEach ( (otherParticle, otherIndex) => {
  if (index !== otherIndex && Math.random () > 0.99) {
  


}) 
}// Consciousness wave effects ctx.strokeRect (particle.x - hologramSize / 2;
particle.y - hologramSize / 2;
hologramSize;
hologramSize) 
}// Quantum field effects ctx.fillStyle = gradient;
ctx.fillRect (particle.x - fieldSize / 2;
particle.y - fieldSize / 2;
fieldSize;
fieldSize) 
}// Standard particle rendering 
}// Boundary wrapping with quantum tunneling effect if (particle.x < 0 || particle.x > canvas.width || requestAnimationFrame (animate) 
};
initParticles ();
animate ();
/>) ) 
}</div>) 
}/>) ) 
}</div>) 
}/>) ) 
}</div>) 
}</div> {
  children 
}</div>) 
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
