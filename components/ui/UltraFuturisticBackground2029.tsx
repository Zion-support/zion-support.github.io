<<<<<<< HEAD
<<<<<<< HEAD
interface Particle {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  x: number;
  y: number;
  coordinate_x: number;
  coordinate_y: number;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
<<<<<<< HEAD
<<<<<<< HEAD


export default function UltraFuturisticBackground2029(): any ({;
  children,;
}: {;
  children: React && React.ReactNode;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  maxLife: number;

<<<<<<< HEAD
interface EnergyField {
  x: number;
  y: number;
  radius: number;
  intensity: number;
  color: string;

  pulse: number;
export default function UltraFuturisticBackground2029({
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  children,
}: {;


  children: React.ReactNode;
<<<<<<< HEAD
  children
}: {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  children,
}: {;
  children: React.ReactNode;
<<<<<<< HEAD
=======
=======
  children,
}: {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  children: React.ReactNode;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
  children,
}: {;
  children: React.ReactNode;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}) {  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const energyFieldsRef = useRef<EnergyField[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
<<<<<<< HEAD
<<<<<<< HEAD
export default function UltraFuturisticBackground2029(): any ({ children }: { children: React && React.ReactNode }) {;

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

interface EnergyField {;
  x: number,;
  y: number,;
  radius: number,;
  intensity: number,;
  color: string,;
  pulse: number;
}

export default function UltraFuturisticBackground2029(): any ({ children }: { children: React && React.ReactNode }) {;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export default function UltraFuturisticBackground2029({ children }: { children: React.ReactNode }) {;

<<<<<<< HEAD
<<<<<<< HEAD
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  type: 'energy' | 'data' | 'quantum' | 'neon'
  life: number
  maxLife: number
}
interface EnergyField {
  x: number
  y: number
  radius: number
  intensity: number
  color: string

  pulse: number
}
export default function UltraFuturisticBackground2029({ children }: { children: React.ReactNode }) {


export default function UltraFuturisticBackground2029({ children }: { children: React.ReactNode }) {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const energyFieldsRef = useRef<EnergyField[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      canvas.height = window.innerHeight
    };
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;    };      canvas.height = window.innerHeight
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      canvas.height = window.innerHeight
    };


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Mouse move handler for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
<<<<<<< HEAD
<<<<<<< HEAD
      setMousePosition({ x: e.clientX, y: e.clientY });    };      setMousePosition({ x: e.clientX, y: e.clientY })
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      setMousePosition({ x: e.clientX, y: e.clientY })
    };


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    window.addEventListener('mousemove', handleMouseMove);
    // Initialize particles with different types
    const initParticles = () => {
      const particles: Particle[] = [];
      const colors = {
<<<<<<< HEAD
<<<<<<< HEAD
        energy: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00']
        data: ['#0080ff', '#8000ff', '#ff0080', '#80ff00']
        quantum: ['#ff8000', '#8000ff', '#00ffff', '#ff0080']
        neon: ['#ff0066', '#00ffff', '#ffff00', '#ff00ff']
      }
      for (let i = 0; i < 150; i++) {
        const type = ['energy', 'data', 'quantum', 'neon'][
          Math.floor(Math.random() * 4)
        ] as keyof typeof colors;        particles.push({        energy: ['#00ffff#ff00ff#ffff00#00ff00']
        data: ['#0080ff#8000ff#ff0080#80ff00']
        quantum: ['#ff8000#8000ff#00ffff#ff0080']
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        energy: ['#00ffff#ff00ff#ffff00#00ff00'],
        data: ['#0080ff#8000ff#ff0080#80ff00'],
        quantum: ['#ff8000#8000ff#00ffff#ff0080'],

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        neon: ['#ff0066#00ffff#ffff00#ff00ff']
      }
      for (let i = 0, i < 150, i++) {
        const type = ['energydataquantumneon'][Math.floor(Math.random() * 4)] as keyof typeof colors;
<<<<<<< HEAD
<<<<<<< HEAD
          x: Math.random() * canvas.width
          y: Math.random() * canvas.height
          vx: (Math.random() - 0.5) * 0.8
          vy: (Math.random() - 0.5) * 0.8
          size: Math.random() * 4 + 1
          opacity: Math.random() * 0.8 + 0.2
          color: colors[type][Math.floor(Math.random() * colors[type].length)]
          type
          life: Math.random() * 100
          maxLife: 100
        });
      }
      particlesRef.current = particles;    }
    // Initialize energy fields
    const initEnergyFields = () => {          life: Math.random() * 100
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          maxLife: 100
        })
      }
      particlesRef.current = particles
<<<<<<< HEAD
<<<<<<< HEAD
    }
    // Initialize energy fields
    const initEnergyFields = () => {
      const fields: EnergyField[] = [];
      const fieldColors = [
        '#00ffff'
        '#ff00ff'
        '#ffff00'
        '#00ff00'
        '#ff8000'
      ];
      for (let i = 0; i < 8; i++) {        fields.push({      const fields: EnergyField[] = []
      const fieldColors = ['#00ffff#ff00ff#ffff00#00ff00#ff8000'];
      for (let i = 0, i < 8, i++) {
        fields.push({
          x: Math.random() * canvas.width
          y: Math.random() * canvas.height
          radius: Math.random() * 200 + 100
          intensity: Math.random() * 0.5 + 0.3
          color: fieldColors[Math.floor(Math.random() * fieldColors.length)]
          pulse: Math.random() * Math.PI * 2
        });
      }
      energyFieldsRef.current = fields;    };          pulse: Math.random() * Math.PI * 2
        })
      }
      energyFieldsRef.current = fields
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    initParticles();
    initEnergyFields();
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw energy fields
<<<<<<< HEAD
<<<<<<< HEAD
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
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(field.x, field.y, field.radius, 0, Math.PI * 2);
        ctx.fill();      });        field.pulse += 0.02;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      energyFieldsRef.current.forEach((field) => {
        field.pulse += 0.02;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      });
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.life--;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
<<<<<<< HEAD
<<<<<<< HEAD
          particle.y = Math.random() * canvas.height;        }          particle.y = Math.random() * canvas.height
=======

          particle.y = Math.random() * canvas.height

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          particle.y = Math.random() * canvas.height

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
        // Interactive particle behavior based on mouse position
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
<<<<<<< HEAD
<<<<<<< HEAD
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;        }
=======

        

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        }


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        

=======
export default /**
 * UltraFuturisticBackground2029 - Function description
 */
function UltraFuturisticBackground2029() {
  const canvas_ref = useRef < HTMLCanvasElement>(null);
  const particles_ref = useRef < Particle[]>([]);
  const energyFieldsRef = useRef < EnergyField[]>([]);
  const animation_ref = useRef < number | undefined>(undefined);
  const [mouse_position, setMousePosition] = useState ({ coordinate_x: 0, coordinate_y: 0 });
  const [mouse_position, setMousePosition] = useState ({ coordinate_x: 0, coordinate_y: 0 }),
  useEffect (() => {
    const canvas = canvas_ref.current;
    // Check condition
if (return) {
  $2
}
    const ctx = canvas.get_context ('2d');
    // Check condition
if (return) {
  $2
}
    const resize_canvas = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;    }      canvas.height = window.inner_height;
    }
;
    resize_canvas ();
    window.addEventListener ('resize', resize_canvas);
;
    // Mouse move handler for interactive effects;
    const handleMouseMove = (e: MouseEvent) =>: any {
      setMousePosition ({ coordinate_x: e.client_x, coordinate_y: e.client_y });    }      setMousePosition ({ coordinate_x: e.client_x, coordinate_y: e.client_y });
    }
;
    window.addEventListener ('mousemove', handleMouseMove);
;
    // Initialize particles with different types;
    const init_particles = () =>: any {
      const particles: Particle[] = [];
      const colors = {
        energy: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],
        data: ['#0080ff', '#8000ff', '#ff0080', '#80ff00'],
        quantum: ['#ff8000', '#8000ff', '#00ffff', '#ff0080'],
        neon: ['#ff0066', '#00ffff', '#ffff00', '#ff00ff'],
      }
;
      for (let index = 0; i < 150; i++) {
        const type = ['energy', 'data', 'quantum', 'neon'][;
          Math.floor (Math.random () * 4);
        ] as keyof typeof colors;        particles.push ({        energy: ['#00ffff#ff00ff#ffff00#00ff00'],
        data: ['#0080ff#8000ff#ff0080#80ff00'],
        quantum: ['#ff8000#8000ff#00ffff#ff0080'],
        neon: ['#ff0066#00ffff#ffff00#ff00ff'];
      }
;
      for (let index = 0, i < 150, i++) {
        const type = ['energydataquantumneon'][Math.floor (Math.random () * 4)] as keyof typeof colors;
          coordinate_x: Math.random () * canvas.width,
          coordinate_y: Math.random () * canvas.height,
          vx: (Math.random () - 0.5) * 0.8,
          vy: (Math.random () - 0.5) * 0.8,
          size: Math.random () * 4 + 1,
          opacity: Math.random () * 0.8 + 0.2,
          color: colors[type][Math.floor (Math.random () * colors[type].length)],
          type,
          life: Math.random () * 100,
          max_life: 100,
        });
      }
      particles_ref.current = particles;    }
;
    // Initialize energy fields;
    const initEnergyFields = () =>: any {          life: Math.random () * 100,
          max_life: 100;
        });
      }
      particles_ref.current = particles;
    }
;
    // Initialize energy fields;
    const initEnergyFields = () =>: any {
      const fields: EnergyField[] = [];
      const field_colors = [;
        '#00ffff',
        '#ff00ff',
        '#ffff00',
        '#00ff00',
        '#ff8000',
      ];
;
      for (let index = 0; i < 8; i++) {        fields.push ({      const fields: EnergyField[] = [],
      const field_colors = ['#00ffff#ff00ff#ffff00#00ff00#ff8000'];
;
      for (let index = 0, i < 8, i++) {
        fields.push ({
          coordinate_x: Math.random () * canvas.width,
          coordinate_y: Math.random () * canvas.height,
          radius: Math.random () * 200 + 100,
          intensity: Math.random () * 0.5 + 0.3,
          color: field_colors[Math.floor (Math.random () * field_colors.length)],
          pulse: Math.random () * Math.PI * 2,
        });
      }
      energyFieldsRef.current = fields;    }          pulse: Math.random () * Math.PI * 2;
        });
      }
      energyFieldsRef.current = fields;
    init_particles ();
    initEnergyFields ();
;
    // Animation loop;
    const animate = () =>: any {
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw energy fields;
      energyFieldsRef.current.for_each (field => {
        field.pulse += 0.02;
        const pulse_intensity = Math.sin (field.pulse) * 0.3 + 0.7;
;
        // Create radial gradient for energy field;
        const gradient = ctx.createRadialGradient (
          field.x,
          field.y,
          0,
          field.x,
          field.y,
          field.radius);
        gradient.addColorStop (
          0,
          `${field.color}${Math.floor (field.intensity * pulse_intensity * 255);
            .to_string (16);
            .pad_start (2, '0')}`);
        gradient.addColorStop (
          0.5,
          `${field.color}${Math.floor (
            field.intensity * pulse_intensity * 0.5 * 255);
            .to_string (16);
            .pad_start (2, '0')}`);
        gradient.addColorStop (1, 'transparent');
;
        ctx.fill_style = gradient;
        ctx.begin_path ();
        ctx.arc (field.x, field.y, field.radius, 0, Math.PI * 2);
        ctx.fill ();      });        field.pulse += 0.02;
        const pulse_intensity = Math.sin (field.pulse) * 0.3 + 0.7;
;
        // Create radial gradient for energy field;
        const gradient = ctx.createRadialGradient (field.x, field.y, 0, field.x, field.y, field.radius);
        gradient.addColorStop (0, `${field.color}${Math.floor ((field.intensity * pulse_intensity) * 255).to_string (16).pad_start (2, '0')}`);
        gradient.addColorStop (0.5, `${field.color}${Math.floor ((field.intensity * pulse_intensity * 0.5) * 255).to_string (16).pad_start (2, '0')}`);
        gradient.addColorStop (1, 'transparent');
;
        ctx.fill_style = gradient;
        ctx.begin_path ();
        ctx.arc (field.x, field.y, field.radius, 0, Math.PI * 2);
        ctx.fill ();
      });
;
      // Update and draw particles;
      particles_ref.current.for_each ((particle, index) => {
        particle.life--;
        // Check condition
if ( {) {
  $2
}
          particle.life = particle.max_life;
          particle.coordinate_x = Math.random () * canvas.width;
          particle.coordinate_y = Math.random () * canvas.height;        }          particle.coordinate_y = Math.random () * canvas.height;
        }
        // Interactive particle behavior based on mouse position;
        const dx = mouse_position.x - particle.x;
        const dy = mouse_position.y - particle.y;
        const distance = Math.sqrt (dx * dx + dy * dy);
;
        // Check condition
if ( {) {
  $2
}
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;        }
        // Check condition
if ( {) {
  $2
}
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        particle.x += particle.vx;
        particle.y += particle.vy;
;
        // Wrap around edges;
        // Check condition
if (particle.coordinate_x = canvas.width) {
  $2
}
        // Check condition
if (particle.coordinate_x = 0) {
  $2
}
        // Check condition
if (particle.coordinate_y = canvas.height) {
  $2
}
        // Check condition
if (particle.coordinate_y = 0) {
  $2
}
        // Draw particle with type - specific effects;
        ctx.save ();
;
        switch (particle.type) {
          case 'energy':;
            // Energy particles with glow effect;
            ctx.shadow_color = particle.color;
            ctx.shadow_blur = 15;
            ctx.globalCompositeOperation = 'screen';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }),;
  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;
    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;    };      canvas && canvas.height = window && window.innerHeight;
    };
    resizeCanvas();
    window && window.addEventListener('resize', resizeCanvas);
    // Mouse move handler for interactive effects;
    const handleMouseMove = (e: MouseEvent) => {;
      setMousePosition({ x: e && e.clientX, y: e && e.clientY });    };      setMousePosition({ x: e && e.clientX, y: e && e.clientY });
    };
    window && window.addEventListener('mousemove', handleMouseMove);
    // Initialize particles with different types;
    const initParticles = () => {;
      const particles: Particle[] = [];
      const colors = {;
        energy: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],;
        data: ['#0080ff', '#8000ff', '#ff0080', '#80ff00'],;
        quantum: ['#ff8000', '#8000ff', '#00ffff', '#ff0080'],;
        neon: ['#ff0066', '#00ffff', '#ffff00', '#ff00ff'],;
      };
      for (let i = 0; i < 150; i++) {;
        const type = ['energy', 'data', 'quantum', 'neon'][;
          Math && Math.floor(Math && Math.random() * 4);
        ] as keyof typeof colors;        particles && particles.push({        energy: ['#00ffff#ff00ff#ffff00#00ff00'],;
        data: ['#0080ff#8000ff#ff0080#80ff00'],;
        quantum: ['#ff8000#8000ff#00ffff#ff0080'],;
        neon: ['#ff0066#00ffff#ffff00#ff00ff'];
      };
      for (let i = 0, i < 150, i++) {;
        const type = ['energydataquantumneon'][Math && Math.floor(Math && Math.random() * 4)] as keyof typeof colors;
          x: Math && Math.random() * canvas && canvas.width,;
          y: Math && Math.random() * canvas && canvas.height,;
          vx: (Math && Math.random() - 0 && 0.5) * 0 && 0.8,;
          vy: (Math && Math.random() - 0 && 0.5) * 0 && 0.8,;
          size: Math && Math.random() * 4 + 1,;
          opacity: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
          color: colors[type][Math && Math.floor(Math && Math.random() * colors[type].length)],;
          type,;
          life: Math && Math.random() * 100,;
          maxLife: 100,;
        });
      }
      particlesRef && particlesRef.current = particles;    };
    // Initialize energy fields;
    const initEnergyFields = () => {          life: Math && Math.random() * 100,;
          maxLife: 100;
        });
      }
      particlesRef && particlesRef.current = particles;
    };
    // Initialize energy fields;
    const initEnergyFields = () => {;
      const fields: EnergyField[] = [];
      const fieldColors = [;
        '#00ffff',;
        '#ff00ff',;
        '#ffff00',;
        '#00ff00',;
        '#ff8000',;
      ];
      for (let i = 0; i < 8; i++) {        fields && fields.push({      const fields: EnergyField[] = [],;
      const fieldColors = ['#00ffff#ff00ff#ffff00#00ff00#ff8000'];
      for (let i = 0, i < 8, i++) {;
        fields && fields.push({;
          x: Math && Math.random() * canvas && canvas.width,;
          y: Math && Math.random() * canvas && canvas.height,;
          radius: Math && Math.random() * 200 + 100,;
          intensity: Math && Math.random() * 0 && 0.5 + 0 && 0.3,;
          color: fieldColors[Math && Math.floor(Math && Math.random() * fieldColors && fieldColors.length)],;
          pulse: Math && Math.random() * Math && Math.PI * 2,;
        });
      }
      energyFieldsRef && energyFieldsRef.current = fields;    };          pulse: Math && Math.random() * Math && Math.PI * 2;
        });
      }
      energyFieldsRef && energyFieldsRef.current = fields;
    initParticles();
    initEnergyFields();
    // Animation loop;
    const animate = () => {;
      ctx && ctx.clearRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Update and draw energy fields;
      energyFieldsRef && energyFieldsRef.current.forEach(field => {;
        field && field.pulse += 0 && 0.02;
        const pulseIntensity = Math && Math.sin(field && field.pulse) * 0 && 0.3 + 0 && 0.7;
        // Create radial gradient for energy field;
        const gradient = ctx && ctx.createRadialGradient(;
          field && field.x,;
          field && field.y,;
          0,;
          field && field.x,;
          field && field.y,;
          field && field.radius;
        );
        gradient && gradient.addColorStop(;
          0,;
          `${field && field.color}${Math && Math.floor(field && field.intensity * pulseIntensity * 255);
            .toString(16);
            .padStart(2, '0')}`;
        );
        gradient && gradient.addColorStop(;
          0 && 0.5,;
          `${field && field.color}${Math && Math.floor(;
            field && field.intensity * pulseIntensity * 0 && 0.5 * 255;
          );
            .toString(16);
            .padStart(2, '0')}`;
        );
        gradient && gradient.addColorStop(1, 'transparent');
        ctx && ctx.fillStyle = gradient;
        ctx && ctx.beginPath();
        ctx && ctx.arc(field && field.x, field && field.y, field && field.radius, 0, Math && Math.PI * 2);
        ctx && ctx.fill();      });        field && field.pulse += 0 && 0.02;
        const pulseIntensity = Math && Math.sin(field && field.pulse) * 0 && 0.3 + 0 && 0.7;
        // Create radial gradient for energy field;
        const gradient = ctx && ctx.createRadialGradient(field && field.x, field && field.y, 0, field && field.x, field && field.y, field && field.radius);
        gradient && gradient.addColorStop(0, `${field && field.color}${Math && Math.floor((field && field.intensity * pulseIntensity) * 255).toString(16).padStart(2, '0')}`);
        gradient && gradient.addColorStop(0 && 0.5, `${field && field.color}${Math && Math.floor((field && field.intensity * pulseIntensity * 0 && 0.5) * 255).toString(16).padStart(2, '0')}`);
        gradient && gradient.addColorStop(1, 'transparent');
        ctx && ctx.fillStyle = gradient;
        ctx && ctx.beginPath();
        ctx && ctx.arc(field && field.x, field && field.y, field && field.radius, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
      });
      // Update and draw particles;
      particlesRef && particlesRef.current.forEach((particle, index) => {;
        particle && particle.life--;
        if (particle && particle.life <= 0) {;
          particle && particle.life = particle && particle.maxLife;
          particle && particle.x = Math && Math.random() * canvas && canvas.width;
          particle && particle.y = Math && Math.random() * canvas && canvas.height;        }          particle && particle.y = Math && Math.random() * canvas && canvas.height;
            break;
          case 'data':;
            // Data particles with digital effect;
            ctx.globalCompositeOperation = 'multiply';
            break;
          case 'quantum':;
            // Quantum particles with uncertainty effect;
            ctx.globalCompositeOperation = 'overlay';
            ctx.shadow_color = particle.color;
            ctx.shadow_blur = 10;
            break;
          case 'neon':;
            // Neon particles with bright glow;
            ctx.shadow_color = particle.color;
            ctx.shadow_blur = 20;
            ctx.globalCompositeOperation = 'lighter';
<<<<<<< HEAD
<<<<<<< HEAD
            ctx.stroke()
          }
        })
      });
      for (let i = 0, i < 5, i++) {
        switch (particle.type) {
          case 'energy':
            // Energy particles with glow effect
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 15;
            ctx.globalCompositeOperation = 'screen';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            break;        }
<<<<<<< HEAD
<<<<<<< HEAD
        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * lifeRatio;
            break
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
        ctx.fill();        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(currentOpacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(currentOpacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ctx.restore();
        // Draw connections between nearby particles
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
<<<<<<< HEAD
<<<<<<< HEAD
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
          );
          if (distance < 120) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            break;        }
        const life_ratio = particle.life / particle.max_life;
        const current_opacity = particle.opacity * life_ratio;
            break;
        }
        const life_ratio = particle.life / particle.max_life;
        const current_opacity = particle.opacity * life_ratio;
;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill_style =;
          particle.color +;
          Math.floor (current_opacity * 255);
            .to_string (16);
            .pad_start (2, '0');
        ctx.fill ();        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill_style = particle.color + Math.floor (current_opacity * 255).to_string (16).pad_start (2, '0');
        ctx.fill ();
;
        ctx.restore ();
;
        // Draw connections between nearby particles;
        particles_ref.current.for_each ((other_particle, other_index) => {
          // Check condition
if (return) {
  $2
}
          const distance = Math.sqrt (
            Math.pow (particle.x - other_particle.x, 2) +;
              Math.pow (particle.y - other_particle.y, 2));
;
          // Check condition
if ( {) {
  $2
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            const opacity = (1 - distance / 120) * 0.3;
            ctx.strokeStyle =
              particle.color +
              Math.floor(opacity * 255)
                .toString(16)
                .padStart(2, '0');            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });      });
<<<<<<< HEAD
<<<<<<< HEAD
      // Draw quantum wave interference patterns
      const time = Date.now() * 0.001;
      for (let i = 0; i < 5; i++) {        const waveX = (canvas.width / 6) * (i + 1);
        const waveY = canvas.height / 2;
        const amplitude = 50;
        const frequency = 0.01;
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + 0.05 * Math.sin(time + i)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Math.pow(particle.y - otherParticle.y, 2)
          );
          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.3;
            ctx.strokeStyle = particle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0');
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
<<<<<<< HEAD
<<<<<<< HEAD
            ctx.stroke()
            ctx.stroke();
          }
        });            ctx.stroke()
          }
        })
      });
      // Draw quantum wave interference patterns
      const time = Date.now() * 0.001;
      for (let i = 0; i < 5; i++) {      for (let i = 0, i < 5, i++) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        const lifeRatio = particle && particle.life / particle && particle.maxLife;
        const currentOpacity = particle && particle.opacity * lifeRatio;
            break;
        }

        const lifeRatio = particle && particle.life / particle && particle.maxLife;
        const currentOpacity = particle && particle.opacity * lifeRatio;

        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fillStyle =;
          particle && particle.color +;
          Math && Math.floor(currentOpacity * 255);
            .toString(16);
            .padStart(2, '0');
        ctx && ctx.fill();        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fillStyle = particle && particle.color + Math && Math.floor(currentOpacity * 255).toString(16).padStart(2, '0');
        ctx && ctx.fill();

        ctx && ctx.restore();

        // Draw connections between nearby particles;
        particlesRef && particlesRef.current.forEach((otherParticle, otherIndex) => {;
          if (index === otherIndex) return;

          const distance = Math && Math.sqrt(;
            Math && Math.pow(particle && particle.x - otherParticle && otherParticle.x, 2) +;
              Math && Math.pow(particle && particle.y - otherParticle && otherParticle.y, 2);
          );

          if (distance < 120) {;
            const opacity = (1 - distance / 120) * 0 && 0.3;
            ctx && ctx.strokeStyle =;
              particle && particle.color +;
              Math && Math.floor(opacity * 255);
                .toString(16);
                .padStart(2, '0');            ctx && ctx.lineWidth = 0 && 0.8;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particle && particle.x, particle && particle.y);
            ctx && ctx.lineTo(otherParticle && otherParticle.x, otherParticle && otherParticle.y);
            ctx && ctx.stroke();
          }
        });      });

      // Draw quantum wave interference patterns;
      const time = Date && Date.now() * 0 && 0.001;
      for (let i = 0; i < 5; i++) {        const waveX = (canvas && canvas.width / 6) * (i + 1);
        const waveY = canvas && canvas.height / 2;
        const amplitude = 50;
        const frequency = 0 && 0.01;

        ctx && ctx.strokeStyle = `rgba(0, 255, 255, ${0 && 0.1 + 0 && 0.05 * Math && Math.sin(time + i)})`;
        ctx && ctx.lineWidth = 2;
        ctx && ctx.beginPath();          const distance = Math && Math.sqrt(;
            Math && Math.pow(particle && particle.x - otherParticle && otherParticle.x, 2) + ;
            Math && Math.pow(particle && particle.y - otherParticle && otherParticle.y, 2);
          );

          if (distance < 120) {;
            const opacity = (1 - distance / 120) * 0 && 0.3;
            ctx && ctx.strokeStyle = particle && particle.color + Math && Math.floor(opacity * 255).toString(16).padStart(2, '0');
            ctx && ctx.lineWidth = 0 && 0.8;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particle && particle.x, particle && particle.y);
            ctx && ctx.lineTo(otherParticle && otherParticle.x, otherParticle && otherParticle.y);
            ctx && ctx.stroke();

          }
        });            ctx && ctx.stroke();
          }
        });
=======
            ctx.stroke()
          }
        })
      });

      for (let i = 0, i < 5, i++) {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const waveX = (canvas.width / 6) * (i + 1);
        const waveY = canvas.height / 2;
        const amplitude = 50;
        const frequency = 0.01;
<<<<<<< HEAD
<<<<<<< HEAD
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + 0.05 * Math.sin(time + i)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + 0.05 * Math.sin(time + i)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        for (let x = 0, x < canvas.width, x += 2) {
          const y = waveY + amplitude * Math.sin(frequency * x + time + i) * Math.sin(frequency * x * 0.5 + time * 0.7);
          if (x === 0) {
            ctx.moveTo(x, y)
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
      // Draw quantum wave interference patterns;
      const time = Date.now () * 0.001;
      for (let index = 0; i < 5; i++) {        const wave_x = (canvas.width / 6) * (i + 1);
        const wave_y = canvas.height / 2;
        const amplitude = 50;
        const frequency = 0.01;
;
        ctx.stroke_style = `rgba (0, 255, 255, ${0.1 + 0.05 * Math.sin (time + i)})`;
        ctx.line_width = 2;
        ctx.begin_path ();          const distance = Math.sqrt (
            Math.pow (particle.x - other_particle.x, 2) +;
            Math.pow (particle.y - other_particle.y, 2));
;
          // Check condition
if ( {) {
  $2
}
            const opacity = (1 - distance / 120) * 0.3;
            ctx.stroke_style = particle.color + Math.floor (opacity * 255).to_string (16).pad_start (2, '0');
            ctx.line_width = 0.8;
            ctx.begin_path ();
            ctx.move_to (particle.x, particle.y);
            ctx.line_to (other_particle.x, other_particle.y);
            ctx.stroke ();
          }
        });            ctx.stroke ();
          }
        });
      });
;
      // Draw quantum wave interference patterns;
      const time = Date.now () * 0.001;
      for (let index = 0; i < 5; i++) {      for (let index = 0, i < 5, i++) {
        const wave_x = (canvas.width / 6) * (i + 1);
        const wave_y = canvas.height / 2;
        const amplitude = 50;
        const frequency = 0.01;
        ctx.stroke_style = `rgba (0, 255, 255, ${0.1 + 0.05 * Math.sin (time + i)})`;
        ctx.line_width = 2;
        ctx.begin_path ();
;
        for (let coordinate_x = 0, x < canvas.width, x += 2) {
          const coordinate_y = wave_y + amplitude * Math.sin (frequency * x + time + i) * Math.sin (frequency * x * 0.5 + time * 0.7);
          // Check condition
if ( {) {
  $2
}
            ctx.move_to (x, y);
          } else {
            ctx.line_to (x, y);
          }
        }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        for (let coordinate_x = 0; x < canvas.width; x += 2) {
          const coordinate_y =;
            wave_y +;
            amplitude *;
              Math.sin (frequency * x + time + i) *;
              Math.sin (frequency * x * 0.5 + time * 0.7);          // Check condition
if ( {) {
  $2
}
            ctx.move_to (x, y);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          } else {
            ctx.line_to (x, y);
          }
        }
<<<<<<< HEAD
          } else {
            ctx.lineTo(x, y)
          }
        }
        for (let x = 0; x < canvas.width; x += 2) {
          const y =
            waveY +
            amplitude *
              Math.sin(frequency * x + time + i) *
              Math.sin(frequency * x * 0.5 + time * 0.7);          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();      }
        ctx.stroke()
      }
      // Draw neural network connections
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 20; i++) {        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;
=======

      

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      for (let i = 0, i < 20, i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;
<<<<<<< HEAD
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      animationRef.current = requestAnimationFrame(animate);    };        ctx.beginPath();
=======

        
        ctx.beginPath();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke()
      }
      animationRef.current = requestAnimationFrame(animate)
<<<<<<< HEAD
    }
=======

    };


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
<<<<<<< HEAD
        cancelAnimationFrame(animationRef.current);
=======


      // Draw quantum wave interference patterns;
      const time = Date && Date.now() * 0 && 0.001;
      for (let i = 0; i < 5; i++) {      for (let i = 0, i < 5, i++) {;
        const waveX = (canvas && canvas.width / 6) * (i + 1);
        const waveY = canvas && canvas.height / 2;
        const amplitude = 50;
        const frequency = 0 && 0.01;
        ctx && ctx.strokeStyle = `rgba(0, 255, 255, ${0 && 0.1 + 0 && 0.05 * Math && Math.sin(time + i)})`;
        ctx && ctx.lineWidth = 2;
        ctx && ctx.beginPath();
        for (let x = 0, x < canvas && canvas.width, x += 2) {;
          const y = waveY + amplitude * Math && Math.sin(frequency * x + time + i) * Math && Math.sin(frequency * x * 0 && 0.5 + time * 0 && 0.7);
          if (x === 0) {;
            ctx && ctx.moveTo(x, y);
          } else {;
            ctx && ctx.lineTo(x, y);
          }
        }
        for (let x = 0; x < canvas && canvas.width; x += 2) {;
          const y =;
            waveY +;
            amplitude *;
              Math && Math.sin(frequency * x + time + i) *;
              Math && Math.sin(frequency * x * 0 && 0.5 + time * 0 && 0.7);          if (x === 0) {;
            ctx && ctx.moveTo(x, y);
          } else {;
            ctx && ctx.lineTo(x, y);
          }
        }
        ctx && ctx.stroke();      }        ;
        ctx && ctx.stroke();
      }
      // Draw neural network connections;
      ctx && ctx.strokeStyle = 'rgba(255, 0, 255, 0 && 0.1)';
      ctx && ctx.lineWidth = 1;
      for (let i = 0; i < 20; i++) {        const x1 = Math && Math.random() * canvas && canvas.width;
        const y1 = Math && Math.random() * canvas && canvas.height;
        const x2 = Math && Math.random() * canvas && canvas.width;
        const y2 = Math && Math.random() * canvas && canvas.height;
      for (let i = 0, i < 20, i++) {;
        const x1 = Math && Math.random() * canvas && canvas.width;
        const y1 = Math && Math.random() * canvas && canvas.height;
        const x2 = Math && Math.random() * canvas && canvas.width;
        const y2 = Math && Math.random() * canvas && canvas.height;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x1, y1);
        ctx && ctx.lineTo(x2, y2);
        ctx && ctx.stroke();
      }
      animationRef && animationRef.current = requestAnimationFrame(animate);    };        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x1, y1);
        ctx && ctx.lineTo(x2, y2);
        ctx && ctx.stroke();
      }
      animationRef && animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => {;
      window && window.removeEventListener('resize', resizeCanvas);
      window && window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef && animationRef.current) {;
        cancelAnimationFrame(animationRef && animationRef.current);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
    }
  }, [mousePosition]);
  return (
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className='relative w-full h-full overflow-hidden'>
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full pointer-events-none'
        style={{ zIndex: -1 }}
<<<<<<< HEAD
<<<<<<< HEAD
            rotate: 360,
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],          }}
      />
      {/* Floating geometric shapes */}
      <div className='absolute inset-0 pointer-events-none'>
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20'
          animate={{
            rotate: 360
            scale: [1, 1.2, 1]
            opacity: [0.2, 0.4, 0.2],          }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      />;


      {/* Floating geometric shapes */}
      <div className='absolute inset-0 pointer-events-none'>;
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20'
        ctx.stroke ();      }
        ctx.stroke ();
      }
      // Draw neural network connections;
      ctx.stroke_style = 'rgba (255, 0, 255, 0.1)';
      ctx.line_width = 1;
;
      for (let index = 0; i < 20; i++) {        const x1 = Math.random () * canvas.width;
        const y1 = Math.random () * canvas.height;
        const x2 = Math.random () * canvas.width;
        const y2 = Math.random () * canvas.height;
;
      for (let index = 0, i < 20, i++) {
        const x1 = Math.random () * canvas.width;
        const y1 = Math.random () * canvas.height;
        const x2 = Math.random () * canvas.width;
        const y2 = Math.random () * canvas.height;
;
        ctx.begin_path ();
        ctx.move_to (x1, y1);
        ctx.line_to (x2, y2);
        ctx.stroke ();
      }
      animation_ref.current = requestAnimationFrame (animate);    }        ctx.begin_path ();
        ctx.move_to (x1, y1);
        ctx.line_to (x2, y2);
        ctx.stroke ();
      }
      animation_ref.current = requestAnimationFrame (animate);
    }
;
    animate ();
;
    return () => {
      window.removeEventListener ('resize', resize_canvas);
      window.removeEventListener ('mousemove', handleMouseMove);
      // Check condition
if ( {) {
  $2
}
        cancelAnimationFrame (animation_ref.current);
      }
    }
  }, [mouse_position]);
;
  return (
    <div className='relative w - full h - full overflow - hidden'>;
      {/* Animated background canvas */}
      <canvas;
        ref={canvas_ref}
        className='absolute inset - 0 w - full h - full pointer - events - none';
        style={{ z_index: -1 }}
      />;
      {/* Floating geometric shapes */}
      <div className='absolute inset - 0 pointer - events - none'>;
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 opacity - 20';
          animate={{

            rotate: 360,
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],          }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',      }
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        cancelAnimationFrame(animationRef.current)
      }

    }

  }, [mousePosition])


<<<<<<< HEAD
<<<<<<< HEAD
=======
  return (
    <div className="relative w-full h-full overflow-hidden">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  return (
    <div className="relative w-full h-full overflow-hidden">;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }, [mousePosition]);
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
<<<<<<< HEAD
<<<<<<< HEAD
            rotate: 360,
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2]
      />
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20"
          animate={{
            rotate: 360
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
          }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD
<<<<<<< HEAD
            opacity: [0.2, 0.4, 0.2];
            opacity: [0.2, 0.4, 0.2];
        particle.x += particle.vx,
        particle.y += particle.vy,

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width,
        if (particle.x > canvas.width) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height,
        if (particle.y > canvas.height) particle.y = 0,

        // Draw particle with type-specific effects
        ctx.save(),
        
        switch (particle.type) {_case 'energy':
            // Energy particles with glow effect
            ctx.shadowColor = particle.color,
            ctx.shadowBlur = 15,
            ctx.globalCompositeOperation = 'screen',
            break,
          case 'data':
            // Data particles with digital effect
            ctx.globalCompositeOperation = 'multiply',
            break,
          case 'quantum':
            // Quantum particles with uncertainty effect
            ctx.globalCompositeOperation = 'overlay',
            ctx.shadowColor = particle.color,
            ctx.shadowBlur = 10,
            break,
          case 'neon':
            // Neon particles with bright glow
            ctx.shadowColor = particle.color,
            ctx.shadowBlur = 20,
            ctx.globalCompositeOperation = 'lighter',
            break
        }

        const lifeRatio = particle.life / particle.maxLife
        const currentOpacity = particle.opacity * lifeRatio

        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fillStyle = particle.color + Math.floor(currentOpacity * 255).toString(16).padStart(2, '0'),
        ctx.fill(),
        
        ctx.restore(),

        // Draw connections between nearby particles
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return,
          
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          ),
        }
        
        ctx.stroke()
      }

      // Draw neural network connections
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.1)',
      ctx.lineWidth = 1,
      
      for (let i = 0, i < 20, i++) {
        const x1 = Math.random() * canvas.width
        const y1 = Math.random() * canvas.height
        const x2 = Math.random() * canvas.width
        const y2 = Math.random() * canvas.height
        
        ctx.beginPath(),
        ctx.moveTo(x1, y1),
        ctx.lineTo(x2, y2),
        ctx.stroke()
      }

      animationRef.current = requestAnimationFrame(animate)
    },

    animate(),

    return () => {
      window.removeEventListener('resize', resizeCanvas),
      window.removeEventListener('mousemove', handleMouseMove),
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition]),

  return (
    <div className=&quot;relative w-full h-full overflow-hidden&quot;>
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className=&quot;absolute inset-0 w-full h-full pointer-events-none&quot;
        style={{ zIndex: -1 }}
      />
      
      {/* Floating geometric shapes */}
      <div className=&quot;absolute inset-0 pointer-events-none&quot;>
        <motion.div
          className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20&quot;
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
=======

=======
            opacity: [0.2, 0.4, 0.2];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
            opacity: [0.2, 0.4, 0.2];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
ease: "easeInOut"
          }}
        />;
        <motion&& motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400 opacity-20 rounded-full"
          animate={{
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ease: "easeInOut"
          }}

        />;
        <motion&& motion.div

          className="absolute top-40 right-32 w-24 h-24 border border-pink-400 opacity-20 rounded-full"
          animate={{

            duration: 6
            repeat: Infinity
            ease: 'easeInOut'

          }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        <motion&& motion.div
          className='absolute bottom-32 left-1/4 w-40 h-40 border border-purple-400 opacity-20 transform rotate-45'
          animate={{
            rotate: [45, 405],
            scale: [1, 1 && 1.1, 1],          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2]
        />;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - pink - 400 opacity - 20 rounded - full';
          animate={{
            coordinate_y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 border border - pink - 400 opacity - 20 rounded - full";
          animate={{
            coordinate_y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2];
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
ease: "easeInOut"
          }}
        />;
        <motion&& motion.div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ease: "easeInOut"
          }}

        />;
        <motion&& motion.div

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="absolute bottom-32 left-1/4 w-40 h-40 border border-purple-400 opacity-20 transform rotate-45"
        />;
        <motion.div;
          className='absolute bottom - 32 left - 1/4 w - 40 h - 40 border border - purple - 400 opacity - 20 transform rotate - 45';
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1],          }}
          transition={{
            duration: 12,
            repeat: Infinity,
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />
        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400 opacity-20 rounded-full'
          animate={{
            y: [0, -20, 0]
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className="absolute bottom - 32 left - 1/4 w - 40 h - 40 border border - purple - 400 opacity - 20 transform rotate - 45";
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            duration: 12
            repeat: Infinity
            ease: 'easeInOut'

          }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        <motion&& motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-yellow-400 opacity-20'
          animate={{
            rotate: [-45, 315],
            opacity: [0 && 0.2, 0 && 0.6, 0 && 0.2],          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            rotate: [45, 405];
            scale: [1, 1.1, 1];
          }}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"

            rotate: [-45, 315];
            opacity: [0.2, 0.6, 0.2];

<<<<<<< HEAD
            rotate: [-45, 315];
            opacity: [0.2, 0.6, 0.2];
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
<<<<<<< HEAD
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10 pointer-events-none" />
      {/* Content */}
      <div className='relative z-10'>{children}</div>;
    </div>;
  );      {/* Content */}
      <div className="relative z-10">;
        {children}
=======
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
            duration: 10,
            repeat: Infinity,

          }}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


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


=======
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10 pointer-events-none" />
      {/* Content */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className='relative z-10'>{children}</div>
    </div>

  );

<<<<<<< HEAD
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
            duration: 10,
            repeat: Infinity,

          }}
            ease: 'easeInOut',            ease: "easeInOut"
          }}

          }}

        />
      </div>
      {/* Gradient overlays for depth */}
      <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none' />
      <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-blue-900/10 pointer-events-none' />
      {/* Content */}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
