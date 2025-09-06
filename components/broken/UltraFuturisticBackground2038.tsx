import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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

<<<<<<< HEAD
export default function UltraFuturisticBackground2038({
  intensity = 'medium',
  theme = 'consciousness',
  children,}: UltraFuturisticBackground2038Props) {
=======
<<<<<<< HEAD
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

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function UltraFuturisticBackground2038({ 
  intensity = 'medium';
  theme = 'consciousness';
  children
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
}: UltraFuturisticBackground2038Props) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const intensityMultiplier =
      intensity === 'low' ? 0.5 : intensity === 'medium' ? 1 : 2;
<<<<<<< HEAD
=======
=======
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    const intensityMultiplier = intensity === 'low' ? 0.5 : intensity === 'medium' ? 1 : 2;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    const intensityMultiplier = intensity === 'low' ? 0.5 : intensity === 'medium' ? 1 : 2;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width * (window.devicePixelRatio || 1);
        canvas.height = rect.height * (window.devicePixelRatio || 1);
<<<<<<< HEAD
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);      }
=======
<<<<<<< HEAD
<<<<<<< HEAD
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
=======
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced theme-based color schemes for 2038
    const getThemeColors = () => {
      switch (theme) {
        case 'consciousness':
          return {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
=======
            primary: ['#ff0080#00ffff#ffff00#ff00ff#8000ff#00ff80'],
            secondary: ['#ff8000#0080ff#ff4080#40ffff#ffff40#ff40ff'],
            accent: ['#ff6b6b#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3'],
            quantum: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444']
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
          };      }
=======
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
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            primary: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444'],
            secondary: ['#f59e0b#ef4444#8b5cf6#06b6d4#ec4899#10b981'],
            accent: ['#ec4899#10b981#f59e0b#ef4444#8b5cf6#06b6d4'],
            quantum: ['#8b5cf6#06b6d4#ec4899#10b981#f59e0b#ef4444']
          }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };

    const colors = getThemeColors();

    // Enhanced particle system with consciousness and quantum effects
    let particles: Array<{
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
      quantumState: number;    }> = [];
=======
      quantumState: number;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }> = [];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    // Initialize particles with enhanced consciousness and quantum effects
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(50 * intensityMultiplier);
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      for (let i = 0; i < particleCount; i++) {
        const type =
          Math.random() > 0.7
            ? 'consciousness'
            : Math.random() > 0.5
              ? 'quantum-field'
              : Math.random() > 0.3
                ? 'hologram'
                : 'particle';
<<<<<<< HEAD
=======

=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      
      for (let i = 0, i < particleCount, i++) {
        const type = Math.random() > 0.7 ? 'consciousness' : 
                    Math.random() > 0.5 ? 'quantum-field' : 
                    Math.random() > 0.3 ? 'hologram' : 'particle';
        
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
          type,          life: Math.random() * 100,
=======
<<<<<<< HEAD
<<<<<<< HEAD
          color:
            colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type,
=======
          color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          color: colors.primary[Math.floor(Math.random() * colors.primary.length)],
          type;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          life: Math.random() * 100,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
        });      }
=======
<<<<<<< HEAD
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
=======
          entanglement: [Math.random(), Math.random()];
          consciousness: Math.random(),
          quantumState: Math.random()
        })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };

    // Enhanced animation loop with consciousness and quantum effects
    const animate = () => {
      if (prefersReducedMotion) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
              ctx.fillRect(x, y, 20, 20);            }
=======
<<<<<<< HEAD
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
=======
              ctx.fillRect(x, y, 20, 20)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                  Math.pow(particle.y - otherParticle.y, 2)              );
=======
<<<<<<< HEAD
<<<<<<< HEAD
                Math.pow(particle.x - otherParticle.x, 2) +
                  Math.pow(particle.y - otherParticle.y, 2)
=======
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              );
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
          });        }

        // Consciousness wave effects
        if (particle.type === 'consciousness') {
=======
<<<<<<< HEAD
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
=======
                ctx.stroke()
              }
            }
          })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }

        // Consciousness wave effects
        if (particle.type === 'consciousness') {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          const waveX =
            particle.x + Math.sin(particle.phase) * particle.amplitude;
          const waveY =
            particle.y + Math.cos(particle.phase) * particle.amplitude;
<<<<<<< HEAD
=======

=======
          const waveX = particle.x + Math.sin(particle.phase) * particle.amplitude;
          const waveY = particle.y + Math.cos(particle.phase) * particle.amplitude;
          
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          const waveX = particle.x + Math.sin(particle.phase) * particle.amplitude;
          const waveY = particle.y + Math.cos(particle.phase) * particle.amplitude;
          
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          ctx.strokeStyle = `rgba(255, 0, 128, ${particle.opacity * 0.6})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(waveX, waveY);
<<<<<<< HEAD
          ctx.stroke();        }

        // Holographic effects
        if (particle.type === 'hologram') {
          const hologramSize =
            particle.size * (1 + Math.sin(particle.phase) * 0.3);
=======
<<<<<<< HEAD
<<<<<<< HEAD
          ctx.stroke();
=======
          ctx.stroke()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          ctx.stroke()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }

        // Holographic effects
        if (particle.type === 'hologram') {
<<<<<<< HEAD
<<<<<<< HEAD
          const hologramSize =
            particle.size * (1 + Math.sin(particle.phase) * 0.3);
=======
          const hologramSize = particle.size * (1 + Math.sin(particle.phase) * 0.3);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          ctx.strokeStyle = `rgba(78, 205, 196, ${particle.opacity})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(
            particle.x - hologramSize / 2,
            particle.y - hologramSize / 2,
            hologramSize,
            hologramSize
<<<<<<< HEAD
          );        }
=======
<<<<<<< HEAD
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
=======
          )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        // Quantum field effects
        if (particle.type === 'quantum-field') {
          const fieldSize = particle.size * 3;
          const gradient = ctx.createRadialGradient(
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
=======
            particle.x, particle.y, 0;
            particle.x, particle.y, fieldSize
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          );
          gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');

          ctx.fillStyle = gradient;
          ctx.fillRect(
            particle.x - fieldSize / 2,
            particle.y - fieldSize / 2,
            fieldSize,
            fieldSize
<<<<<<< HEAD
          );        }

        // Standard particle rendering
        if (particle.type === 'particle') {
          ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, '0')}`;
=======
<<<<<<< HEAD
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
=======
          )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }

        // Standard particle rendering
        if (particle.type === 'particle') {
<<<<<<< HEAD
<<<<<<< HEAD
          ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, '0')}`;
=======
          ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
            particle.y = (particle.y + canvas.height) % canvas.height;          }
=======
<<<<<<< HEAD
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
=======
            particle.y = (particle.y + canvas.height) % canvas.height
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        }

        // Regenerate particles
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.consciousness = Math.random();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          particle.quantumState = Math.random() * Math.PI * 2;
        }
      });

<<<<<<< HEAD
      requestAnimationFrame(animate);    };
=======
      requestAnimationFrame(animate);
=======
          particle.quantumState = Math.random() * Math.PI * 2
        }
      });

      requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          particle.quantumState = Math.random() * Math.PI * 2
        }
      });

      requestAnimationFrame(animate)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    initParticles();
    animate();

    return () => {
<<<<<<< HEAD
      window.removeEventListener('resize', resizeCanvas);
    };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      window.removeEventListener('resize', resizeCanvas);
    };
=======
      window.removeEventListener('resize', resizeCanvas)
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
      
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
<<<<<<< HEAD
                  ease: 'easeInOut',
=======
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [intensity, theme]);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
<<<<<<< HEAD
                  top: `${(i * 3) % 100}%`,
=======
                  top: `${(i * 3) % 100}%`}}
                animate={{
                  height: [32, 64, 32];
                  opacity: [0.2, 0.6, 0.2]}}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                }}
                animate={{
                  height: [32, 64, 32],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',                }}
              />
            ))}
          </div>
        )}

        {/* Holographic grid */}
        {theme === 'holographic' && (
<<<<<<< HEAD
          <div className='absolute inset-0'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='absolute inset-0'>
=======
          <div className="absolute inset-0">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30'
                style={{
<<<<<<< HEAD
                  top: `${(i * 7) % 100}%`,
=======
                  top: `${(i * 7) % 100}%`}}
                animate={{
                  opacity: [0.3, 0.8, 0.3]}}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
<<<<<<< HEAD
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
=======
                  ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',                }}
              />
            ))}
          </div>
        )}

        {/* Consciousness waves */}
        {theme === 'consciousness' && (
<<<<<<< HEAD
          <div className='absolute inset-0'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='absolute inset-0'>
=======
          <div className="absolute inset-0">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-96 h-96 border border-pink-500/20 rounded-full'
                style={{
                  left: `${(i * 12) % 100}%`,
<<<<<<< HEAD
                  top: `${(i * 8) % 100}%`,
=======
                  top: `${(i * 8) % 100}%`}}
                animate={{
                  scale: [1, 1.5, 1];
                  opacity: [0.2, 0.6, 0.2]}}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
<<<<<<< HEAD
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
=======
                  ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',                }}
              />
            ))}
          </div>
        )}
      </div>

      {children}
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
}</div>) 
=======
}</div>) 
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
