import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'energy' | 'data' | 'quantum' | 'neon';
  life: number;
  maxLife: number;

interface EnergyField {
  x: number;
  y: number;
  radius: number;
  intensity: number;
  color: string;
  pulse: number;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function UltraFuturisticBackground2029({
  children,
}: {
  children: React.ReactNode;
<<<<<<< HEAD
}) {  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const energyFieldsRef = useRef<EnergyField[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
=======
}) {
=======
interface Particle {
  x: number,
  y: number,
  vx: number,
  vy: number,
  size: number,
  opacity: number,
  color: string,
  type: 'energy' | 'data' | 'quantum' | 'neon',
  life: number,
  maxLife: number
}

interface EnergyField {
  x: number,
  y: number,
  radius: number,
  intensity: number,
  color: string,
  pulse: number
}

export default function UltraFuturisticBackground2029({ children }: { children: React.ReactNode }) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default function UltraFuturisticBackground2029({ children }: { children: React.ReactNode }) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const energyFieldsRef = useRef<EnergyField[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
<<<<<<< HEAD
<<<<<<< HEAD
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

=======
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
<<<<<<< HEAD
      canvas.height = window.innerHeight;    };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      canvas.height = window.innerHeight;
=======
      canvas.height = window.innerHeight
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      canvas.height = window.innerHeight
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
<<<<<<< HEAD
      setMousePosition({ x: e.clientX, y: e.clientY });    };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      setMousePosition({ x: e.clientX, y: e.clientY });
=======
      setMousePosition({ x: e.clientX, y: e.clientY })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setMousePosition({ x: e.clientX, y: e.clientY })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    window.addEventListener('mousemove', handleMouseMove);

    // Initialize particles with different types
    const initParticles = () => {
      const particles: Particle[] = [];
      const colors = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        energy: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],
        data: ['#0080ff', '#8000ff', '#ff0080', '#80ff00'],
        quantum: ['#ff8000', '#8000ff', '#00ffff', '#ff0080'],
        neon: ['#ff0066', '#00ffff', '#ffff00', '#ff00ff'],
      };

      for (let i = 0; i < 150; i++) {
        const type = ['energy', 'data', 'quantum', 'neon'][
          Math.floor(Math.random() * 4)
<<<<<<< HEAD
        ] as keyof typeof colors;        particles.push({
=======
        ] as keyof typeof colors;
=======
        energy: ['#00ffff#ff00ff#ffff00#00ff00'],
        data: ['#0080ff#8000ff#ff0080#80ff00'],
        quantum: ['#ff8000#8000ff#00ffff#ff0080'],
        neon: ['#ff0066#00ffff#ffff00#ff00ff']
      };
      
      for (let i = 0, i < 150, i++) {
        const type = ['energydataquantumneon'][Math.floor(Math.random() * 4)] as keyof typeof colors;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        energy: ['#00ffff#ff00ff#ffff00#00ff00'],
        data: ['#0080ff#8000ff#ff0080#80ff00'],
        quantum: ['#ff8000#8000ff#00ffff#ff0080'],
        neon: ['#ff0066#00ffff#ffff00#ff00ff']
      };
      
      for (let i = 0, i < 150, i++) {
        const type = ['energydataquantumneon'][Math.floor(Math.random() * 4)] as keyof typeof colors;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        particles.push({
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[type][Math.floor(Math.random() * colors[type].length)],
<<<<<<< HEAD
          type,
=======
<<<<<<< HEAD
<<<<<<< HEAD
          type,
=======
          type;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          life: Math.random() * 100,
          maxLife: 100,
        });
      }
<<<<<<< HEAD

      particlesRef.current = particles;    };

    // Initialize energy fields
    const initEnergyFields = () => {
=======
<<<<<<< HEAD

      particlesRef.current = particles;
=======
          type;
          life: Math.random() * 100,
          maxLife: 100
        })
      }
      
      particlesRef.current = particles
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
      particlesRef.current = particles
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    // Initialize energy fields
    const initEnergyFields = () => {
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      const fields: EnergyField[] = [];
      const fieldColors = [
        '#00ffff',
        '#ff00ff',
        '#ffff00',
        '#00ff00',
        '#ff8000',
      ];

<<<<<<< HEAD
      for (let i = 0; i < 8; i++) {        fields.push({
=======
      for (let i = 0; i < 8; i++) {
=======
      const fieldColors = ['#00ffff#ff00ff#ffff00#00ff00#ff8000'];
      
      for (let i = 0, i < 8, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      const fields: EnergyField[] = [],
      const fieldColors = ['#00ffff#ff00ff#ffff00#00ff00#ff8000'];
      
      for (let i = 0, i < 8, i++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        fields.push({
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 200 + 100,
          intensity: Math.random() * 0.5 + 0.3,
          color: fieldColors[Math.floor(Math.random() * fieldColors.length)],
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          pulse: Math.random() * Math.PI * 2,
        });
      }

<<<<<<< HEAD
      energyFieldsRef.current = fields;    };
=======
      energyFieldsRef.current = fields;
=======
          pulse: Math.random() * Math.PI * 2
        })
      }
      
      energyFieldsRef.current = fields
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          pulse: Math.random() * Math.PI * 2
        })
      }
      
      energyFieldsRef.current = fields
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    initParticles();
    initEnergyFields();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw energy fields
<<<<<<< HEAD
      energyFieldsRef.current.forEach(field => {
=======
<<<<<<< HEAD
<<<<<<< HEAD
      energyFieldsRef.current.forEach(field => {
=======
      energyFieldsRef.current.forEach((field) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        field.pulse += 0.02;
        const pulseIntensity = Math.sin(field.pulse) * 0.3 + 0.7;

        // Create radial gradient for energy field
        const gradient = ctx.createRadialGradient(
          field.x,
          field.y,
          0,
          field.x,
          field.y,
          field.radius
        );
        gradient.addColorStop(
          0,
          `${field.color}${Math.floor(field.intensity * pulseIntensity * 255)
            .toString(16)
            .padStart(2, '0')}`
        );
        gradient.addColorStop(
          0.5,
          `${field.color}${Math.floor(
            field.intensity * pulseIntensity * 0.5 * 255
          )
            .toString(16)
            .padStart(2, '0')}`
        );
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(field.x, field.y, field.radius, 0, Math.PI * 2);
<<<<<<< HEAD
        ctx.fill();      });
=======
<<<<<<< HEAD
        ctx.fill();
=======
      energyFieldsRef.current.forEach((field) => {
        field.pulse += 0.02;
        const pulseIntensity = Math.sin(field.pulse) * 0.3 + 0.7;
        
        // Create radial gradient for energy field
        const gradient = ctx.createRadialGradient(field.x, field.y, 0, field.x, field.y, field.radius);
        gradient.addColorStop(0, `${field.color}${Math.floor((field.intensity * pulseIntensity) * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${field.color}${Math.floor((field.intensity * pulseIntensity * 0.5) * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(field.x, field.y, field.radius, 0, Math.PI * 2);
        ctx.fill()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        ctx.fill()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.life--;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
<<<<<<< HEAD
          particle.y = Math.random() * canvas.height;        }
=======
<<<<<<< HEAD
<<<<<<< HEAD
          particle.y = Math.random() * canvas.height;
=======
          particle.y = Math.random() * canvas.height
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          particle.y = Math.random() * canvas.height
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        // Interactive particle behavior based on mouse position
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.01;
<<<<<<< HEAD
          particle.vy += (dy / distance) * force * 0.01;        }
=======
          particle.vy += (dy / distance) * force * 0.01;
=======
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with type-specific effects
        ctx.save();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        switch (particle.type) {
          case 'energy':
            // Energy particles with glow effect
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 15;
            ctx.globalCompositeOperation = 'screen';
            break;
          case 'data':
            // Data particles with digital effect
            ctx.globalCompositeOperation = 'multiply';
            break;
          case 'quantum':
            // Quantum particles with uncertainty effect
            ctx.globalCompositeOperation = 'overlay';
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 10;
            break;
          case 'neon':
            // Neon particles with bright glow
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 20;
            ctx.globalCompositeOperation = 'lighter';
<<<<<<< HEAD
            break;        }

        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * lifeRatio;

=======
<<<<<<< HEAD
<<<<<<< HEAD
            break;
=======
            break
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            break
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }

        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * lifeRatio;
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle =
          particle.color +
          Math.floor(currentOpacity * 255)
            .toString(16)
            .padStart(2, '0');
        ctx.fill();
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(currentOpacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        ctx.restore();

        // Draw connections between nearby particles
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
          
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.3;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            ctx.strokeStyle =
              particle.color +
              Math.floor(opacity * 255)
                .toString(16)
<<<<<<< HEAD
                .padStart(2, '0');            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });      });

      // Draw quantum wave interference patterns
      const time = Date.now() * 0.001;
      for (let i = 0; i < 5; i++) {        const waveX = (canvas.width / 6) * (i + 1);
        const waveY = canvas.height / 2;
        const amplitude = 50;
        const frequency = 0.01;

        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + 0.05 * Math.sin(time + i)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
=======
                .padStart(2, '0');
=======
          
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.3;
            ctx.strokeStyle = particle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ctx.strokeStyle = particle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
<<<<<<< HEAD
<<<<<<< HEAD
            ctx.stroke();
          }
        });
=======
            ctx.stroke()
          }
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ctx.stroke()
          }
        })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      });

      // Draw quantum wave interference patterns
      const time = Date.now() * 0.001;
<<<<<<< HEAD
<<<<<<< HEAD
      for (let i = 0; i < 5; i++) {
=======
      for (let i = 0, i < 5, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      for (let i = 0, i < 5, i++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        const waveX = (canvas.width / 6) * (i + 1);
        const waveY = canvas.height / 2;
        const amplitude = 50;
        const frequency = 0.01;
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + 0.05 * Math.sin(time + i)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let x = 0, x < canvas.width, x += 2) {
          const y = waveY + amplitude * Math.sin(frequency * x + time + i) * Math.sin(frequency * x * 0.5 + time * 0.7);
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        for (let x = 0; x < canvas.width; x += 2) {
          const y =
            waveY +
            amplitude *
              Math.sin(frequency * x + time + i) *
              Math.sin(frequency * x * 0.5 + time * 0.7);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
<<<<<<< HEAD

        ctx.stroke();      }
=======
        
        ctx.stroke()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        ctx.stroke()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      // Draw neural network connections
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.1)';
      ctx.lineWidth = 1;
<<<<<<< HEAD

      for (let i = 0; i < 20; i++) {        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;

=======
<<<<<<< HEAD
<<<<<<< HEAD

      for (let i = 0; i < 20; i++) {
=======
      
      for (let i = 0, i < 20, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
      for (let i = 0, i < 20, i++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

<<<<<<< HEAD
      animationRef.current = requestAnimationFrame(animate);    };
=======
<<<<<<< HEAD
      animationRef.current = requestAnimationFrame(animate);
=======
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke()
      }

      animationRef.current = requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      animationRef.current = requestAnimationFrame(animate)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
<<<<<<< HEAD
        cancelAnimationFrame(animationRef.current);
=======
<<<<<<< HEAD
<<<<<<< HEAD
        cancelAnimationFrame(animationRef.current);
=======
        cancelAnimationFrame(animationRef.current)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      }
    };
  }, [mousePosition]);

  return (
    <div className='relative w-full h-full overflow-hidden'>
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full pointer-events-none'
        style={{ zIndex: -1 }}
      />

      {/* Floating geometric shapes */}
      <div className='absolute inset-0 pointer-events-none'>
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20'
          animate={{
            rotate: 360,
<<<<<<< HEAD
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
=======
<<<<<<< HEAD
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
=======
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.4, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.4, 0.2]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          }}
        />

        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400 opacity-20 rounded-full'
          animate={{
<<<<<<< HEAD
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
=======
<<<<<<< HEAD
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
=======
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400 opacity-20 rounded-full"
          animate={{
            y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          }}
        />

        <motion.div
          className='absolute bottom-32 left-1/4 w-40 h-40 border border-purple-400 opacity-20 transform rotate-45'
          animate={{
<<<<<<< HEAD
            rotate: [45, 405],
            scale: [1, 1.1, 1],          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
=======
<<<<<<< HEAD
            rotate: [45, 405],
            scale: [1, 1.1, 1],
=======
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 border border-purple-400 opacity-20 transform rotate-45"
          animate={{
            rotate: [45, 405];
            scale: [1, 1.1, 1]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [45, 405];
            scale: [1, 1.1, 1]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          }}
        />

        <motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-yellow-400 opacity-20'
          animate={{
<<<<<<< HEAD
            rotate: [-45, 315],
            opacity: [0.2, 0.6, 0.2],          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',          }}
=======
<<<<<<< HEAD
            rotate: [-45, 315],
            opacity: [0.2, 0.6, 0.2],
=======
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-yellow-400 opacity-20"
          animate={{
            rotate: [-45, 315];
            opacity: [0.2, 0.6, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [-45, 315];
            opacity: [0.2, 0.6, 0.2]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        />
      </div>

      {/* Gradient overlays for depth */}
<<<<<<< HEAD
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none' />
      <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10 pointer-events-none' />

=======
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none' />
      <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10 pointer-events-none' />

=======
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10 pointer-events-none" />
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {/* Content */}
      <div className='relative z-10'>{children}</div>
    </div>
<<<<<<< HEAD
  );
=======
<<<<<<< HEAD
  );
=======
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
