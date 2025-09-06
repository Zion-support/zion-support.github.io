<<<<<<< HEAD

=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  x: number;
  y: number;
  coordinate_x: number;
  coordinate_y: number;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'energy' | 'data' | 'quantum' | 'neon';
  life: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  children: React.ReactNode;

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  children: React.ReactNode;
  children,
}: {;
  children: React.ReactNode;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}) {  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const energyFieldsRef = useRef<EnergyField[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

<<<<<<< HEAD
=======
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });interface Particle {;
  x: number,;
  y: number,;
  vx: number,;
  vy: number,;
  size: number,;
  opacity: number,;
  color: string,;
  type: 'energy' | 'data' | 'quantum' | 'neon',;
  life: number,;
  maxLife: number;
}
export default function UltraFuturisticBackground2029({ children }: { children: React.ReactNode }) {



export default function UltraFuturisticBackground2029({ children }: { children: React.ReactNode }) {;
=======
=======
=======
interface EnergyField {;
  x: number,;
  y: number,;
  radius: number,;
  intensity: number,;
  color: string,;
  pulse: number;
}

export default function UltraFuturisticBackground2029(): any ({ children }: { children: React && React.ReactNode }) {;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default function UltraFuturisticBackground2029({ children }: { children: React.ReactNode }) {;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  maxLife: number
}

interface EnergyField {
  x: number;
  y: number;
  radius: number;
  intensity: number;
  color: string;
}) {
  pulse: number
}
export default function UltraFuturisticBackground2029({ children }: { children: React.ReactNode }) {
  const canvasRef = null;
            ease: "easeInOut"
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const energyFieldsRef = useRef<EnergyField[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
<<<<<<< HEAD
<<<<<<< HEAD
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
<<<<<<< HEAD

=======
interface Particle {
  x: number,
  y: number,
  max_life: number;
;
interface EnergyField {
  coordinate_x: number;
  coordinate_y: number;
  radius: number;
  intensity: number;
  color: string;
  pulse: number;
;
export default /**
 * UltraFuturisticBackground2029 - Function description
 */
function UltraFuturisticBackground2029() {  const canvas_ref = useRef < HTMLCanvasElement>(null);
  const particles_ref = useRef < Particle[]>([]);
  const energyFieldsRef = useRef < EnergyField[]>([]);
  const animation_ref = useRef < number | undefined>(undefined);
  const [mouse_position, setMousePosition] = useState ({ coordinate_x: 0, coordinate_y: 0 });interface Particle {
  coordinate_x: number,
  coordinate_y: number,

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  vx: number,
  vy: number,
  size: number,
  opacity: number,
  color: string,
  type: 'energy' | 'data' | 'quantum' | 'neon',
  life: number,
}
interface EnergyField {
  coordinate_x: number,
  coordinate_y: number,
  radius: number,
  intensity: number,
  color: string,
  pulse: number;
}
<<<<<<< HEAD
<<<<<<< HEAD

      canvas.height = window.innerHeight
    };


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
    };

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Mouse move handler for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
setMousePosition({ x: e.clientX, y: e.clientY });
    };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
setMousePosition({ x: e.clientX, y: e.clientY });
    };

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    window.addEventListener('mousemove', handleMouseMove);
    // Initialize particles with different types
    const initParticles = () => {
      const particles: Particle[] = [];
<<<<<<< HEAD

=======
      const colors = {
<<<<<<< HEAD
<<<<<<< HEAD
        neon: ['#ff0066#00ffff#ffff00#ff00ff']
      }
      for (let i = 0, i < 150, i++) {
        const type = ['energydataquantumneon'][Math.floor(Math.random() * 4)] as keyof typeof colors;
          maxLife: 100
        })
      }
      particlesRef.current = particles
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
energy: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],
        data: ['#0080ff', '#8000ff', '#ff0080', '#80ff00'],
        quantum: ['#ff8000', '#8000ff', '#00ffff', '#ff0080'],
        neon: ['#ff0066', '#00ffff', '#ffff00', '#ff00ff'],
      };

      for (let i = 0; i < 150; i++) {
        const type = ['energy', 'data', 'quantum', 'neon'][
          Math.floor(Math.random() * 4)
        ] as keyof typeof colors;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[type][Math.floor(Math.random() * colors[type].length)],
type,
          life: Math.random() * 100,
          maxLife: 100,
        });
      }

      particlesRef.current = particles;
    };

    // Initialize energy fields
    const initEnergyFields = () => {
      const fields: EnergyField[] = [];
const fieldColors = [
        '#00ffff',
        '#ff00ff',
        '#ffff00',
        '#00ff00',
        '#ff8000',
      ];

      for (let i = 0; i < 8; i++) {
        fields.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 200 + 100,
          intensity: Math.random() * 0.5 + 0.3,
          color: fieldColors[Math.floor(Math.random() * fieldColors.length)],
pulse: Math.random() * Math.PI * 2,
        });
      }

      energyFieldsRef.current = fields;
    };

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    initParticles();
    initEnergyFields();
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw energy fields
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        const pulseIntensity = Math.sin(field.pulse) * 0.3 + 0.7;
        // Create radial gradient for energy field
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        const gradient = ctx.createRadialGradient(field.x, field.y, 0, field.x, field.y, field.radius);
        gradient.addColorStop(0, `${field.color}${Math.floor((field.intensity * pulseIntensity) * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${field.color}${Math.floor((field.intensity * pulseIntensity * 0.5) * 255).toString(16).padStart(2, '0')}`);
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
energyFieldsRef.current.forEach(field => {
        field.pulse += 0.02;
        const pulseIntensity = Math.sin(field.pulse) * 0.3 + 0.7;
        // Create radial gradient for energy field
        const gradient = ctx.createRadialGradient(
          field.x
          field.y
          0
          field.x
          field.y
          field.radius
        );
        gradient.addColorStop(
          0
          `${field.color}${Math.floor(field.intensity * pulseIntensity * 255)
            .toString(16)
            .padStart(2, '0')}`
        );
        gradient.addColorStop(
          0.5
          `${field.color}${Math.floor(
            field.intensity * pulseIntensity * 0.5 * 255
          )
            .toString(16)
            .padStart(2, '0')}`
        );
origin/cursor/automate-test-improve-and-merge-code-2533
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(field.x, field.y, field.radius, 0, Math.PI * 2);
        ctx.fill();
origin/cursor/automate-test-improve-and-merge-code-2533
      });
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.life--;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
particle.y = Math.random() * canvas.height;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
particle.y = Math.random() * canvas.height;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        }
        // Interactive particle behavior based on mouse position
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.01;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
          particle.vy += (dy / distance) * force * 0.01
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          particle.vy += (dy / distance) * force * 0.01
=======
          particle.vy += (dy / distance) * force * 0.01;
        }

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          particle.vy += (dy / distance) * force * 0.01;
        }

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

        switch (particle.type) {
          case 'energy':
            // Energy particles with glow effect
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 15;
            ctx.globalCompositeOperation = 'screen';
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
            break;
          case 'data':;
            // Data particles with digital effect;
            ctx && ctx.globalCompositeOperation = 'multiply';
            break;
          case 'quantum':;
            // Quantum particles with uncertainty effect;
            ctx && ctx.globalCompositeOperation = 'overlay';
            ctx && ctx.shadowColor = particle && particle.color;
            ctx && ctx.shadowBlur = 10;
            break;
          case 'neon':
            // Neon particles with bright glow
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 20;
            ctx.globalCompositeOperation = 'lighter';
break;
        }

        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * lifeRatio;
ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle =
          particle.color +
          Math.floor(currentOpacity * 255)
            .toString(16)
            .padStart(2, '0');
        ctx.fill();
origin/cursor/automate-test-improve-and-merge-code-2533
        ctx.restore();
        // Draw connections between nearby particles
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
          );
          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.3;
            ctx.strokeStyle =
              particle.color +
              Math.floor(opacity * 255)
                .toString(16)
                .padStart(2, '0');
origin/cursor/automate-test-improve-and-merge-code-2533
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
ctx.stroke();
          }
        });
      });
      // Draw quantum wave interference patterns
      const time = Date.now() * 0.001;
for (let i = 0; i < 5; i++) {
origin/cursor/automate-test-improve-and-merge-code-2533
        const waveX = (canvas.width / 6) * (i + 1);
        const waveY = canvas.height / 2;
        const amplitude = 50;
        const frequency = 0.01;
<<<<<<< HEAD
<<<<<<< HEAD
        for (let x = 0, x < canvas.width, x += 2) {
          const y = waveY + amplitude * Math.sin(frequency * x + time + i) * Math.sin(frequency * x * 0.5 + time * 0.7);
          if (x === 0) {
            ctx.moveTo(x, y)
if ( {) {
  $2
}
            ctx.move_to (x, y);
          } else {
            ctx.line_to (x, y);
          }
        }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      for (let i = 0, i < 20, i++) {
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + 0.05 * Math.sin(time + i)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();

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

        ctx.stroke();
      }
      // Draw neural network connections
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.1)';
      ctx.lineWidth = 1;
for (let i = 0; i < 20; i++) {
origin/cursor/automate-test-improve-and-merge-code-2533
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;
<<<<<<< HEAD
<<<<<<< HEAD
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
<<<<<<< HEAD

=======
        ctx.stroke()
      }
      animationRef.current = requestAnimationFrame(animate)
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
cancelAnimationFrame(animationRef.current);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
cancelAnimationFrame(animationRef.current);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      }
    }
  }, [mousePosition]);
  return (
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full pointer-events-none'
        style={{ zIndex: -1 }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',      }
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
<<<<<<< HEAD

          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
          }}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      />
      {/* Floating geometric shapes */}
      <div className='absolute inset-0 pointer-events-none'>
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20'
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400 opacity-20 rounded-full'
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
ease: 'easeInOut',
origin/cursor/automate-test-improve-and-merge-code-2533
          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut',          }}
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-1/4 w-40 h-40 border border-purple-400 opacity-20 transform rotate-45"
        />;
        <motion.div;
          className='absolute bottom - 32 left - 1/4 w - 40 h - 40 border border - purple - 400 opacity - 20 transform rotate - 45';
          animate={{
            rotate: [45, 405],
<<<<<<< HEAD
<<<<<<< HEAD
            scale: [1, 1.1, 1],          }}
          transition={{
            duration: 12,
            repeat: Infinity,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className="absolute bottom - 32 left - 1/4 w - 40 h - 40 border border - purple - 400 opacity-20 transform rotate-45";
          animate={{
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}          }}

          }}
<<<<<<< HEAD
          transition={{

          }}
=======
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
            duration: 10,
            repeat: Infinity,

          }}
            ease: 'easeInOut',            ease: "easeInOut"
          }}

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-yellow-400 opacity-20'
          animate={{
            rotate: [-45, 315],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
ease: 'easeInOut',
origin/cursor/automate-test-improve-and-merge-code-2533
          }}


          }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

          }}

            duration: 10,
            repeat: Infinity,

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        />
      </div>
      {/* Gradient overlays for depth */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none' />
      <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10 pointer-events-none' />
      {/* Content */}
      <div className='relative z-10'>{children}</div>
    </div>
=======
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

        />;
      </div>;

      {/* Gradient overlays for depth */}
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none' />;
      <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10 pointer-events-none' />;

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10 pointer-events-none" />
      
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none' />
      <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10 pointer-events-none' />
origin/cursor/automate-test-improve-and-merge-code-2533
      {/* Content */}
      <div className='relative z-10'>{children}</div>;
    </div>;
  );      {/* Content */}
      <div className="relative z-10">;
        {children}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
      </div>;
      {/* Gradient overlays for depth */}
      <div className='absolute inset - 0 bg - gradient - to - br from - transparent via - transparent to - black / 20 pointer - events - none' />;
      <div className='absolute inset - 0 bg - gradient - to - tl from - transparent via - transparent to - blue - 900 / 10 pointer - events - none' />;
      {/* Content */}
      <div className='relative z - 10'>{children}</div>;
    </div>);      {/* Content */}
      <div className="relative z-10">;
        {children}
      </div>;
    </div>);
}
      <div className='relative z-10'>{children}</div>
    </div>
origin/cursor/automate-test-improve-and-merge-code-2533
  );
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
