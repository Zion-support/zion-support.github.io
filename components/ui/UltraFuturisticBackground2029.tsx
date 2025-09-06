
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


  x: number;
  y: number;
  coordinate_x: number;
  coordinate_y: number;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'energy' | 'data' | 'quantum' | 'neon';
  life: number;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  children: React.ReactNode;

}) {  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const energyFieldsRef = useRef<EnergyField[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

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


export default function UltraFuturisticBackground2029({ children }: { children: React.ReactNode }) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const energyFieldsRef = useRef<EnergyField[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Mouse move handler for interactive effects
    const handleMouseMove = (e: MouseEvent) => {

    window.addEventListener('mousemove', handleMouseMove);
    // Initialize particles with different types
    const initParticles = () => {
      const particles: Particle[] = [];

    initParticles();
    initEnergyFields();
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw energy fields

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

        }
        // Interactive particle behavior based on mouse position
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        

        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.01;

        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle with type-specific effects
        ctx.save();


      for (let i = 0, i < 20, i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;

        
        ctx.beginPath();

        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {

      }
    }
  }, [mousePosition]);
  return (

      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full pointer-events-none'
        style={{ zIndex: -1 }}

          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',      }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}

          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
          }}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

          }}
=======
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
            duration: 10,
            repeat: Infinity,
<<<<<<< HEAD

          }}
            ease: 'easeInOut',            ease: "easeInOut"
          }}

          }}


          }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


          }}


            duration: 10,
            repeat: Infinity,

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        />
      </div>
      {/* Gradient overlays for depth */}
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none' />
      <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10 pointer-events-none' />
      {/* Content */}
      <div className='relative z-10'>{children}</div>
    </div>
=======
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
      <div className="relative z - 10">;
        {children}
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      <div className='relative z-10'>{children}</div>
    </div>
  );      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
  );
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
