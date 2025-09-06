<<<<<<< HEAD
 useEffect ( () => {
  const updateDimensions = () => {
  setDimensions ({
  updateDimensions ();
window.addEventListener ('resize', updateDimensions);
setIsVisible (true);

}, []);
canvas.width = dimensions.width;
canvas.height = dimensions.height;
// Particle system class Particle {
  x: number;
y: number;
vx: number;
vy: number;
size: number;
color: string;
life: number;
maxLife: number;
type: 'quantum' | 'holographic' | 'energy' | 'matrix';
constructor () {
  // Bounce off edges if (this.x <= 0 || this.x >= dimensions.width) this.vx *= -1;
if (this.y <= 0 || this.y >= dimensions.height) this.vy *= -1;
// Quantum tunneling effect if (Math.random () < 0.001 * intensityMultiplier) {
  switch (this.type) {
  case 'quantum': // Quantum particle with wave function case 'holographic': // Holographic projection ctx.beginPath ();
ctx.moveTo (this.x - this.size, this.y);
ctx.lineTo (this.x + this.size, this.y);
ctx.lineTo (this.x, this.y - this.size);
ctx.lineTo (this.x - this.size, this.y);
ctx.fillStyle = this.color;
ctx.fill ();
// Holographic grid ctx.strokeStyle = this.color;
ctx.lineWidth = 0.5;
ctx.globalAlpha = alpha * 0.5;
ctx.strokeRect (this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
break;
case 'energy': // Energy field 
}ctx.restore () 

export default function UltraQuantumHolographicBackground({
  children,
  intensity = 'high',
  colorScheme = 'quantum',
  particleCount = 300,
  animationSpeed = 1.5,
  className = '',
}: UltraQuantumHolographicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
=======
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
interface UltraQuantumHolographicBackgroundProps {
  children: React.ReactNode,
  intensity?: 'low' | 'medium' | 'high' | 'ultra';
  colorScheme?: 'quantum' | 'holographic' | 'cyberpunk' | 'neon';
  particleCount?: number;
  animationSpeed?: number;
  className?: string
}

export default function UltraQuantumHolographicBackground({
  children;
  intensity = 'high';
  colorScheme = 'quantum';
  particleCount = 300;
  animationSpeed = 1.5;
  className = ''
}: UltraQuantumHolographicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 }),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const [isVisible, setIsVisible] = useState(false);

  // Color schemes
  const colorSchemes = {
    quantum: {
<<<<<<< HEAD
=======
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      primary: '#00ffff',
      secondary: '#ff00ff',
      tertiary: '#ffff00',
      accent: '#00ff00',
      background: 'rgba(0, 0, 0, 0.95)',
<<<<<<< HEAD
      overlay: 'rgba(0, 0, 0, 0.3)',
=======
    overlay: 'rgba(0, 0, 0, 0.3)'
    
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    },
    holographic: {
      primary: '#ff0080',
      secondary: '#8000ff',
      tertiary: '#00ffff',
      accent: '#ffff00',
      background: 'rgba(0, 0, 0, 0.92)',
<<<<<<< HEAD
      overlay: 'rgba(0, 0, 0, 0.25)',
    },
    cyberpunk: {
=======
    overlay: 'rgba(0, 0, 0, 0.25)'
    };
    cyberpunk: {
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      primary: '#ff0040',
      secondary: '#00ffff',
      tertiary: '#ffff00',
      accent: '#ff00ff',
      background: 'rgba(0, 0, 0, 0.94)',
<<<<<<< HEAD
      overlay: 'rgba(0, 0, 0, 0.35)',
=======
    overlay: 'rgba(0, 0, 0, 0.35)'
    
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    },
    neon: {
      primary: '#00ff00',
      secondary: '#ff00ff',
      tertiary: '#ffff00',
      accent: '#00ffff',
      background: 'rgba(0, 0, 0, 0.93)',
<<<<<<< HEAD
      overlay: 'rgba(0, 0, 0, 0.28)',
    },
  };

  const colors = colorSchemes[colorScheme];
  const intensityMultiplier = { low: 0.5, medium: 1, high: 1.5, ultra: 2.5 }[
    intensity
  ];

=======
    overlay: 'rgba(0, 0, 0, 0.28)'
    }
  };

  const colors = colorSchemes[colorScheme];
  const intensityMultiplier = { low: 0.5, medium: 1, high: 1.5, ultra: 2.5 }[intensity],
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
<<<<<<< HEAD
        height: window.innerHeight,
      });
=======
        height: window.innerHeight
      })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    setIsVisible(true);

<<<<<<< HEAD
    return () => window.removeEventListener('resize', updateDimensions);
=======
    return () => window.removeEventListener('resize', updateDimensions)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !dimensions.width || !dimensions.height) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Particle system
    class Particle {
<<<<<<< HEAD
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'holographic' | 'energy' | 'matrix';

=======
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,
      maxLife: number,
      type: 'quantum' | 'holographic' | 'energy' | 'matrix',
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      constructor() {
        this.x = Math.random() * dimensions.width;
        this.y = Math.random() * dimensions.height;
        this.vx = (Math.random() - 0.5) * 2 * animationSpeed;
        this.vy = (Math.random() - 0.5) * 2 * animationSpeed;
        this.size = Math.random() * 3 * intensityMultiplier + 1;
<<<<<<< HEAD
        this.color = [
          colors.primary,
          colors.secondary,
          colors.tertiary,
          colors.accent,
        ][Math.floor(Math.random() * 4)];
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = ['quantum', 'holographic', 'energy', 'matrix'][
          Math.floor(Math.random() * 4)
        ] as any;
=======
        this.color = [colors.primary, colors.secondary, colors.tertiary, colors.accent][Math.floor(Math.random() * 4)];
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = ['quantumholographicenergymatrix'][Math.floor(Math.random() * 4)] as any
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x <= 0 || this.x >= dimensions.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= dimensions.height) this.vy *= -1;

        // Quantum tunneling effect
        if (Math.random() < 0.001 * intensityMultiplier) {
          this.x = Math.random() * dimensions.width;
<<<<<<< HEAD
          this.y = Math.random() * dimensions.height;
=======
          this.y = Math.random() * dimensions.height
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }

        // Holographic flicker
        if (this.type === 'holographic' && Math.random() < 0.1) {
<<<<<<< HEAD
          this.size *= 0.8;
=======
          this.size *= 0.8
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }

        // Energy pulse
        if (this.type === 'energy') {
<<<<<<< HEAD
          this.size = Math.sin(Date.now() * 0.01) * 2 + 3;
=======
          this.size = Math.sin(Date.now() * 0.01) * 2 + 3
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }

        // Matrix rain effect
        if (this.type === 'matrix') {
          this.vy += 0.1;
          if (this.y > dimensions.height) {
            this.y = -10;
<<<<<<< HEAD
            this.vy = Math.random() * 2 + 1;
=======
            this.vy = Math.random() * 2 + 1
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }
        }
      }

      draw() {
        if (this.life <= 0) return;

        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;

        switch (this.type) {
          case 'quantum':
            // Quantum particle with wave function
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
<<<<<<< HEAD

            // Wave function rings
            for (let i = 1; i <= 3; i++) {
=======
            
            // Wave function rings
            for (let i = 1, i <= 3, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size * i, 0, Math.PI * 2);
              ctx.strokeStyle = this.color;
              ctx.lineWidth = 0.5;
              ctx.globalAlpha = alpha * (0.3 / i);
<<<<<<< HEAD
              ctx.stroke();
=======
              ctx.stroke()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            }
            break;

          case 'holographic':
            // Holographic projection
            ctx.beginPath();
            ctx.moveTo(this.x - this.size, this.y);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.lineTo(this.x, this.y - this.size);
            ctx.lineTo(this.x - this.size, this.y);
            ctx.fillStyle = this.color;
            ctx.fill();
<<<<<<< HEAD

=======
            
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            // Holographic grid
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = alpha * 0.5;
<<<<<<< HEAD
            ctx.strokeRect(
              this.x - this.size,
              this.y - this.size,
              this.size * 2,
              this.size * 2
            );
=======
            ctx.strokeRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            break;

          case 'energy':
            // Energy field
<<<<<<< HEAD
            const gradient = ctx.createRadialGradient(
              this.x,
              this.y,
              0,
              this.x,
              this.y,
              this.size
            );
=======
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            break;

          case 'matrix':
            // Matrix digital rain
            ctx.fillStyle = this.color;
            ctx.font = `${this.size * 2}px monospace`;
            ctx.fillText('01', this.x, this.y);
<<<<<<< HEAD
            break;
        }

        ctx.restore();
=======
            break
        }

        ctx.restore()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }
    }

    // Create particles
    const particles: Particle[] = [];
<<<<<<< HEAD
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationId: number;
=======
    for (let i = 0, i < particleCount, i++) {
      particles.push(new Particle())
    }

    // Animation loop
    let animationId: number,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw quantum field background
      const gradient = ctx.createRadialGradient(
<<<<<<< HEAD
        dimensions.width / 2,
        dimensions.height / 2,
        0,
        dimensions.width / 2,
        dimensions.height / 2,
=======
        dimensions.width / 2;
        dimensions.height / 2;
        0;
        dimensions.width / 2;
        dimensions.height / 2;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        Math.max(dimensions.width, dimensions.height) / 2
      );
      gradient.addColorStop(0, colors.background);
      gradient.addColorStop(1, colors.overlay);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
<<<<<<< HEAD
          particles[index] = new Particle();
=======
          particles[index] = new Particle()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }
      });

      // Draw quantum entanglement lines
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;
<<<<<<< HEAD

      for (let i = 0; i < particles.length; i += 10) {
        for (let j = i + 10; j < particles.length; j += 10) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

=======
      
      for (let i = 0, i < particles.length, i += 10) {
        for (let j = i + 10, j < particles.length, j += 10) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
          
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          if (distance < 100 && p1.life > 0 && p2.life > 0) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
<<<<<<< HEAD
            ctx.stroke();
=======
            ctx.stroke()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }
        }
      }

      // Draw holographic grid
      ctx.strokeStyle = colors.secondary;
      ctx.lineWidth = 0.3;
      ctx.globalAlpha = 0.2;
<<<<<<< HEAD

      const gridSize = 50;
      for (let x = 0; x < dimensions.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, dimensions.height);
        ctx.stroke();
      }
      for (let y = 0; y < dimensions.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(dimensions.width, y);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
=======
      
      const gridSize = 50;
      for (let x = 0, x < dimensions.width, x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, dimensions.height);
        ctx.stroke()
      }
      for (let y = 0, y < dimensions.height, y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(dimensions.width, y);
        ctx.stroke()
      }

      animationId = requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    };

    animate();

    return () => {
      if (animationId) {
<<<<<<< HEAD
        cancelAnimationFrame(animationId);
      }
    };
=======
        cancelAnimationFrame(animationId)
      }
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }, [dimensions, colors, particleCount, animationSpeed, intensityMultiplier]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Quantum Holographic Canvas Background */}
      <canvas
        ref={canvasRef}
<<<<<<< HEAD
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background: colors.background,
          filter: `blur(${intensity === 'ultra' ? '0.5px' : '0px'})`,
=======
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: colors.background,
          filter: `blur(${intensity === 'ultra' ? '0.5px' : '0px'})`;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        }}
      />

      {/* Holographic Overlay Effects */}
<<<<<<< HEAD
      <div className='fixed inset-0 z-10 pointer-events-none'>
        {/* Quantum Field Lines */}
        <motion.div
          className='absolute inset-0'
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, ${colors.primary}10 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 80%, ${colors.secondary}10 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 80%, ${colors.tertiary}10 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 20%, ${colors.accent}10 0%, transparent 50%)`,
            ],
=======
      <div className="fixed inset-0 z-10 pointer-events-none">
        {/* Quantum Field Lines */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, ${colors.primary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 80% 80%, ${colors.secondary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 20% 80%, ${colors.tertiary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 80% 20%, ${colors.accent}10 0%, transparent 50%)`
            ]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
        />

        {/* Holographic Scan Lines */}
<<<<<<< HEAD
        <div className='absolute inset-0 opacity-20'>
          {Array.from({ length: Math.ceil(dimensions.height / 4) }).map(
            (_, i) => (
              <motion.div
                key={i}
                className='absolute w-full h-px bg-gradient-to-r from-transparent via-current to-transparent'
                style={{
                  top: i * 4,
                  color: colors.primary,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleX: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )
          )}
=======
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: Math.ceil(dimensions.height / 4) }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-current to-transparent"
              style={{
                top: i * 4,
                color: colors.primary
              }}
              animate={{
                opacity: [0, 1, 0];
                scaleX: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        </div>

        {/* Quantum Fluctuations */}
        <motion.div
<<<<<<< HEAD
          className='absolute inset-0'
          animate={{
            boxShadow: [
              `inset 0 0 100px ${colors.primary}20`,
              `inset 0 0 200px ${colors.secondary}20`,
              `inset 0 0 150px ${colors.tertiary}20`,
              `inset 0 0 100px ${colors.primary}20`,
            ],
=======
          className="absolute inset-0"
          animate={{
            boxShadow: [
              `inset 0 0 100px ${colors.primary}20`;
              `inset 0 0 200px ${colors.secondary}20`;
              `inset 0 0 150px ${colors.tertiary}20`;
              `inset 0 0 100px ${colors.primary}20`
            ]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
        />
      </div>

      {/* Content Layer */}
<<<<<<< HEAD
      <div className='relative z-20'>{children}</div>

      {/* Quantum Noise Effect */}
      <div className='fixed inset-0 z-30 pointer-events-none opacity-5'>
        <motion.div
          className='absolute inset-0'
          animate={{
            background: [
              `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            ],
=======
      <div className="relative z-20">
        {children}
      </div>

      {/* Quantum Noise Effect */}
      <div className="fixed inset-0 z-30 pointer-events-none opacity-5">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http: //www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`
            ]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          }}
        />
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
