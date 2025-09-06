
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


  x: number;
  y: number;
  coordinate_x: number;
  coordinate_y: number;

  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'energy' | 'data' | 'quantum' | 'neon';
  life: number;



interface EnergyField {
  x: number;
  y: number;
  radius: number;
  intensity: number;
  color: string;

  pulse: number;
export default function UltraFuturisticBackground2029({


  children: React.ReactNode;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}) {  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const energyFieldsRef = useRef<EnergyField[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

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

interface EnergyField {
  x: number
  y: number
  radius: number
  intensity: number
  color: string

  pulse: number
}



interface EnergyField {;
  x: number,;
  y: number,;
  radius: number,;
  intensity: number,;
  color: string,;
  pulse: number;
}

export default function UltraFuturisticBackground2029(): any ({ children }: { children: React && React.ReactNode }) {;



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const energyFieldsRef = useRef<EnergyField[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  vx: number,
  vy: number,
  size: number,
  opacity: number,
  color: string,
  type: 'energy' | 'data' | 'quantum' | 'neon',
  life: number,
max_life: number;
}
interface EnergyField {
  coordinate_x: number,
  coordinate_y: number,
  radius: number,
  intensity: number,
  color: string,
  pulse: number;
}

      canvas.height = window.innerHeight
    };


    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Mouse move handler for interactive effects
    const handleMouseMove = (e: MouseEvent) => {

      setMousePosition({ x: e.clientX, y: e.clientY })
    };


    window.addEventListener('mousemove', handleMouseMove);
    // Initialize particles with different types
    const initParticles = () => {
      const particles: Particle[] = [];
      const colors = {

        energy: ['#00ffff#ff00ff#ffff00#00ff00'],
        data: ['#0080ff#8000ff#ff0080#80ff00'],
        quantum: ['#ff8000#8000ff#00ffff#ff0080'],

        neon: ['#ff0066#00ffff#ffff00#ff00ff']
      }
      for (let i = 0, i < 150, i++) {
        const type = ['energydataquantumneon'][Math.floor(Math.random() * 4)] as keyof typeof colors;

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[type][Math.floor(Math.random() * colors[type].length)],
          type;
          life: Math.random() * 100,

          maxLife: 100
        })
      }
      particlesRef.current = particles

    };

    // Initialize energy fields
    const initEnergyFields = () => {
      const fields: EnergyField[] = [];

      const fieldColors = ['#00ffff#ff00ff#ffff00#00ff00#ff8000'];
      for (let i = 0, i < 8, i++) {
        fields.push({

          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 200 + 100,
          intensity: Math.random() * 0.5 + 0.3,
          color: fieldColors[Math.floor(Math.random() * fieldColors.length)],
          pulse: Math.random() * Math.PI * 2

        })
      }
      energyFieldsRef.current = fields

    };


    initParticles();
    initEnergyFields();
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw energy fields

      energyFieldsRef.current.forEach((field) => {
        field.pulse += 0.02;

        const pulseIntensity = Math.sin(field.pulse) * 0.3 + 0.7;
        // Create radial gradient for energy field
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        const gradient = ctx.createRadialGradient(field.x, field.y, 0, field.x, field.y, field.radius);
        gradient.addColorStop(0, `${field.color}${Math.floor((field.intensity * pulseIntensity) * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${field.color}${Math.floor((field.intensity * pulseIntensity * 0.5) * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(field.x, field.y, field.radius, 0, Math.PI * 2);
        ctx.fill()
      });
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.life--;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;

          particle.y = Math.random() * canvas.height

        }
        // Interactive particle behavior based on mouse position
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        

        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01

        }


        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle with type-specific effects
        ctx.save();

        


      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}

      />;


      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">;
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20"
  }, [mouse_position]);
;
  return (
    <div className="relative w - full h - full overflow - hidden">;
      {/* Animated background canvas */}
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w - full h - full pointer - events - none";
        style={{ z_index: -1 }}
      />;
      {/* Floating geometric shapes */}
      <div className="absolute inset - 0 pointer - events - none">;
        <motion.div;
          className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 opacity - 20";
          animate={{

            rotate: 360,
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2]

          }}

        />;
        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400 opacity-20 rounded-full'
          animate={{
            y: [0, -20, 0],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          }}

          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}


            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className="absolute bottom - 32 left - 1/4 w - 40 h - 40 border border - purple - 400 opacity - 20 transform rotate - 45";
          animate={{

            duration: 12
            repeat: Infinity
            ease: 'easeInOut'

          }}

        />;
        <motion&& motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-yellow-400 opacity-20'
          animate={{
            rotate: [-45, 315],
            opacity: [0 && 0.2, 0 && 0.6, 0 && 0.2],          }}

          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}          }}

            rotate: [45, 405];
            scale: [1, 1.1, 1];
          }}
          transition={{

          className="absolute bottom-20 right-20 w-28 h-28 border border-yellow-400 opacity-20"
        />;
        <motion.div;
          className='absolute bottom - 20 right - 20 w - 28 h - 28 border border - yellow - 400 opacity - 20';
          animate={{
            rotate: [-45, 315],
            opacity: [0.2, 0.6, 0.2],          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',          }}          }}
        />;
        <motion.div;
          className="absolute bottom - 20 right - 20 w - 28 h - 28 border border - yellow - 400 opacity - 20";
          animate={{

          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
            duration: 10,
            repeat: Infinity,





          }}


            duration: 10,
            repeat: Infinity,




        />
      </div>
      {/* Gradient overlays for depth */}

        />;
      </div>;

      {/* Gradient overlays for depth */}
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none' />;
      <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10 pointer-events-none' />;





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

