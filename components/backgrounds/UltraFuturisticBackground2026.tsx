<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD


=======
interface UltraFuturisticBackground2026Props {
  children: React.ReactNode,
  className?: string
}
const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({ 
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

  children: React.ReactNode;
  className?: string;
const UltraFuturisticBackground2026: React.FC<
  UltraFuturisticBackground2026Props
> = ({ children, className = '' }) => {  const canvasRef = useRef<HTMLCanvasElement>(null);const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  children;
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles: Array<{
const UltraFuturisticBackground2026: React.FC<;
  UltraFuturisticBackground2026Props;
> = ({ children, className = '' }) => {  const canvasRef = useRef<HTMLCanvasElement>(null);const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({ ;
  children;
  className = '' ;
}) => {;
  const animationRef = useRef<number | undefined>(undefined);
  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;
    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;
    canvas && canvas.width = window && window.innerWidth;
    canvas && canvas.height = window && window.innerHeight;
    let particles: Array<{;
      x: number;
      y: number;
;
  children: React.ReactNode;
  class_name?: string;
;
const UltraFuturisticBackground2026: React.FC<;
  UltraFuturisticBackground2026Props;
> = ({ children, class_name = '' }) => {  const canvas_ref = useRef < HTMLCanvasElement>(null);const UltraFuturisticBackground2026: React.FC < UltraFuturisticBackground2026Props> = ({
  children;
  class_name = '';
}) => {
  const animation_ref = useRef < number | undefined>(undefined);
;
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
    canvas.width = window.inner_width;
    canvas.height = window.inner_height;
;
    let particles: Array<{
      coordinate_x: number;
      coordinate_y: number;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
<<<<<<< HEAD

      x: number,
      y: number,
=======
      max_life: number;    }> = [];      coordinate_x: number,
      coordinate_y: number,

=======
<<<<<<< HEAD
      x: number,
      y: number,
      max_life: number;    }> = [];      coordinate_x: number,
      coordinate_y: number,

    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

    let particles: Array<{
      x: number,
      y: number,

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,
      life: number,
<<<<<<< HEAD

=======
'#ff8000'  // Orange
    ];
    const createParticle = () => {
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width;
      maxLife: number;    }> = [];      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      alpha: number,;
      life: number,;
      maxLife: number;
          y = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
      max_life: number;
    const colors = [;
      '#00ffff', // Cyan;
      '#ff00ff', // Magenta;
      '#ffff00', // Yellow;
      '#00ff00', // Green;
      '#ff0080', // Pink;
      '#8000ff', // Purple;
      '#0080ff', // Blue;
      '#ff8000', // Orange    ];      '#ff8000'  // Orange;
    ];
;
    const create_particle = () =>: any {
      const side = Math.floor (Math.random () * 4);
      let x, y, vx, vy;
;
      switch (side) {
        case 0: // Top;
          coordinate_x = Math.random () * canvas.width;
          coordinate_y = -10;
          vx = (Math.random () - 0.5) * 2;
          vy = Math.random () * 2 + 1;
          break;
        case 1: // Right;
          coordinate_x = canvas.width + 10;
          coordinate_y = Math.random () * canvas.height;
          vx = -(Math.random () * 2 + 1);
          vy = (Math.random () - 0.5) * 2;
          break;
        case 2: // Bottom;
          coordinate_x = Math.random () * canvas.width;
          coordinate_y = canvas.height + 10;
          vx = (Math.random () - 0.5) * 2;
          vy = -(Math.random () * 2 + 1);
          break;
      return {;
        x,;
        y,;
        vx,;
        vy,        size: Math && Math.random() * 3 + 1,;
        color: colors[Math && Math.floor(Math && Math.random() * colors && colors.length)],;
        alpha: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
        life: 0,;
        maxLife: Math && Math.random() * 200 + 100,;
      };    };
    const initParticles = () => {;
      particles = [];
      for (let i = 0; i < 100; i++) {;
        particles && particles.push(createParticle());      }        x;
        y;
        vx;
        vy;

    const _colors = [
=======
      maxLife: number;    }> = [];      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      alpha: number
      life: number
      maxLife: number
    const colors = [
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
      '#00ff00', // Green
      '#ff0080', // Pink
      '#8000ff', // Purple
      '#0080ff', // Blue
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      '#ff8000'  // Orange

<<<<<<< HEAD
=======
    const createParticle = () => {
      const side = Math.floor(Math.random() * 4)
      let x, y, vx, vy,

      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width,
          y = -10,
          vx = (Math.random() - 0.5) * 2,
          vy = Math.random() * 2 + 1,
          break,
        case 1: // Right
          x = canvas.width + 10,
          y = Math.random() * canvas.height,
          vx = -(Math.random() * 2 + 1),
          vy = (Math.random() - 0.5) * 2,
          break,
        case 2: // Bottom
          x = Math.random() * canvas.width,
          y = canvas.height + 10,
          vx = (Math.random() - 0.5) * 2,
          vy = -(Math.random() * 2 + 1),
          break,
        case 3: // Left
          x = -10,
          y = Math.random() * canvas.height,
          vx = Math.random() * 2 + 1,
          vy = (Math.random() - 0.5) * 2,
          break
      }

      return {
        x,
        y,
        vx,
        vy,

        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.8 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100
};        maxLife: Math.random() * 200 + 100
      }
        color: colors[Math && Math.floor(Math && Math.random() * colors && colors.length)],;
        alpha: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
        life: 0,;
        maxLife: Math && Math.random() * 200 + 100,;
      };        maxLife: Math && Math.random() * 200 + 100;
    };
    const initParticles = () => {
      particles = [];
      for (let i = 0, i < 100, i++) {
        particles.push(createParticle())
      }
    };
    const initParticles = () => {;
      particles = [];
      for (let i = 0; i < 100; i++) {;
        particles && particles.push(createParticle());      for (let i = 0, i < 100, i++) {;
        particles && particles.push(createParticle());
      }

        if (particle.life > particle.maxLife || 
            particle.x < -20 || particle.x > canvas.width + 20 ||
            particle.y < -20 || particle.y > canvas.height + 20) {
          particles[index] = createParticle()
        }
// Draw particle
=======
      '#ff8000', // Orange    ];      '#ff8000'  // Orange
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ];
    const createParticle = () => {
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width;
<<<<<<< HEAD

      maxLife: number;    }> = [];      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      alpha: number,;
      life: number,;
      maxLife: number;
=======
          y = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
=======
      max_life: number;
    const colors = [;
      '#00ffff', // Cyan;
      '#ff00ff', // Magenta;
      '#ffff00', // Yellow;
      '#00ff00', // Green;
      '#ff0080', // Pink;
      '#8000ff', // Purple;
      '#0080ff', // Blue;
      '#ff8000', // Orange    ];      '#ff8000'  // Orange;
    ];
;
    const create_particle = () =>: any {
      const side = Math.floor (Math.random () * 4);
      let x, y, vx, vy;
;
      switch (side) {
        case 0: // Top;
          coordinate_x = Math.random () * canvas.width;
          coordinate_y = -10;
          vx = (Math.random () - 0.5) * 2;
          vy = Math.random () * 2 + 1;

=======
          y = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          break;
        case 1: // Right
          x = canvas.width + 10;
          y = Math.random() * canvas.height;
          vx = -(Math.random() * 2 + 1);
          vy = (Math.random() - 0.5) * 2;
          break;
        case 2: // Bottom
          x = Math.random() * canvas.width;
          y = canvas.height + 10;
          vx = (Math.random() - 0.5) * 2;
          vy = -(Math.random() * 2 + 1);
          break;
<<<<<<< HEAD


      return {;
        x,;
        y,;
        vx,;
        vy,        size: Math && Math.random() * 3 + 1,;
        color: colors[Math && Math.floor(Math && Math.random() * colors && colors.length)],;
        alpha: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
        life: 0,;
        maxLife: Math && Math.random() * 200 + 100,;
      };    };

    const initParticles = () => {;

=======
        case 3: // Left
          x = -10;
          y = Math.random() * canvas.height;
          vx = Math.random() * 2 + 1;
          vy = (Math.random() - 0.5) * 2;
          break;
      }
      return {
        x
        y
        vx
        vy,        size: Math.random() * 3 + 1
        color: colors[Math.floor(Math.random() * colors.length)]
        alpha: Math.random() * 0.8 + 0.2
        life: 0
        maxLife: Math.random() * 200 + 100
      };    }
    const initParticles = () => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(createParticle());      }        x;
        y;
        vx;
        vy;
<<<<<<< HEAD


      }
    };

    const initParticles = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      particles = [];
      for (let i = 0; i < 100; i++) {;
        particles && particles.push(createParticle());      for (let i = 0, i < 100, i++) {;
        particles && particles.push(createParticle());
      }



=======
        color: colors[Math.floor(Math.random() * colors.length)]
        alpha: Math.random() * 0.8 + 0.2
        life: 0
        maxLife: Math.random() * 200 + 100
      };        maxLife: Math.random() * 200 + 100
      }
    }
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(createParticle());      for (let i = 0, i < 100, i++) {
        particles.push(createParticle())
      }
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
        if (
          particle.life > particle.maxLife |
          particle.x < -20 |
          particle.x > canvas.width + 20 |
          particle.y < -20 |
          particle.y > canvas.height + 20
        ) {
          particles[index] = createParticle();        }        if (particle.life > particle.maxLife |
            particle.x < -20 |particle.x > canvas.width + 20 |
            particle.y < -20 |particle.y > canvas.height + 20) {
          particles[index] = createParticle()
        // Draw particle
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        // Draw glow effect
        const gradient = ctx.createRadialGradient(
<<<<<<< HEAD
    };
          particle.x, particle.y, 0;
=======
          particle.x
          particle.y
          0
          particle.x
          particle.y
          particle.size * 3        );          particle.x, particle.y, 0;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
<<<<<<< HEAD
        ctx.restore()
      });
    const animate = () => {;
      ctx && ctx.clearRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Update and draw particles;
      particles && particles.forEach((particle, index) => {;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        particle && particle.life++;
        if (;
          particle && particle.life > particle && particle.maxLife ||;
          particle && particle.x < -20 ||;
          particle && particle.x > canvas && canvas.width + 20 ||;
          particle && particle.y < -20 ||;
          particle && particle.y > canvas && canvas.height + 20;
        ) {;
          particles[index] = createParticle();        }        if (particle && particle.life > particle && particle.maxLife || ;
            particle && particle.x < -20 || particle && particle.x > canvas && canvas.width + 20 ||;
            particle && particle.y < -20 || particle && particle.y > canvas && canvas.height + 20) {;
          particles[index] = createParticle();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        // Draw particle;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = particle && particle.alpha;
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
        // Draw glow effect;
        const gradient = ctx && ctx.createRadialGradient(;
          particle && particle.x,;
          particle && particle.y,;
          0,;
          particle && particle.x,;
          particle && particle.y,;
          particle && particle.size * 3        );          particle && particle.x, particle && particle.y, 0;
          particle && particle.x, particle && particle.y, particle && particle.size * 3;
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        );
        gradient && gradient.addColorStop(0, particle && particle.color);
        gradient && gradient.addColorStop(1, 'transparent');
        ctx && ctx.fillStyle = gradient;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size * 3, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
        ctx && ctx.restore();      });        ctx && ctx.restore();
      });
<<<<<<< HEAD


=======
      // Draw connecting lines between nearby particles;
      ctx && ctx.strokeStyle = 'rgba(0, 255, 255, 0 && 0.1)';
      ctx && ctx.lineWidth = 1;
      particles && particles.forEach((particle1, i) => {;
        particles && particles.slice(i + 1).forEach(particle2 => {;
          const distance = Math && Math.sqrt(;
            Math && Math.pow(particle1 && particle1.x - particle2 && particle2.x, 2) +;
              Math && Math.pow(particle1 && particle1.y - particle2 && particle2.y, 2)          );            Math && Math.pow(particle1 && particle1.x - particle2 && particle2.x, 2) + ;
            Math && Math.pow(particle1 && particle1.y - particle2 && particle2.y, 2);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          );
          if (distance < 100) {;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particle1 && particle1.x, particle1 && particle1.y);
            ctx && ctx.lineTo(particle2 && particle2.x, particle2 && particle2.y);
            ctx && ctx.stroke();
          }
        });      });            ctx && ctx.stroke();
          }
        });
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Math.pow(particle1.x - particle2.x, 2) + 
=======
        ctx.restore();      });        ctx.restore()
      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) +
              Math.pow(particle1.y - particle2.y, 2)          );            Math.pow(particle1.x - particle2.x, 2) +
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            Math.pow(particle1.y - particle2.y, 2)
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
<<<<<<< HEAD
            ctx.stroke()
          }
        })
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      });

=======
=======
      });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      const gridSize = 50;
      for (let x = 0, x < canvas.width, x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke()
        case 3: // Left;
          coordinate_x = -10;
          coordinate_y = Math.random () * canvas.height;
          vx = Math.random () * 2 + 1;
          vy = (Math.random () - 0.5) * 2;
          break;
      }
      return {
        x,
        y,
        vx,
        vy,        size: Math.random () * 3 + 1,
        color: colors[Math.floor (Math.random () * colors.length)],
        alpha: Math.random () * 0.8 + 0.2,
        life: 0,
        max_life: Math.random () * 200 + 100,
      }    }
;
    const init_particles = () =>: any {
      particles = [];
      for (let index = 0; i < 100; i++) {
        particles.push (create_particle ());      }        x;
        y;
        vx;
        vy;
        color: colors[Math.floor (Math.random () * colors.length)],
        alpha: Math.random () * 0.8 + 0.2,
        life: 0,
        max_life: Math.random () * 200 + 100,
      }        max_life: Math.random () * 200 + 100;
      }
    }
;
    const init_particles = () =>: any {
      particles = [];
      for (let index = 0; i < 100; i++) {
        particles.push (create_particle ());      for (let index = 0, i < 100, i++) {
        particles.push (create_particle ());
      }
    }
;
    const animate = () =>: any {
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles.for_each ((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
;
        // Check condition
if ( {) {
  $2
}
          particles[index] = create_particle ();        }        // Check condition
if ( {) {
  $2
}
          particles[index] = create_particle ();
        // Draw particle;
        ctx.save ();
        ctx.global_alpha = particle.alpha;
        ctx.fill_style = particle.color;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill ();
;
        // Draw glow effect;
        const gradient = ctx.createRadialGradient (
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3        );          particle.x, particle.y, 0;
          particle.x, particle.y, particle.size * 3);
        gradient.addColorStop (0, particle.color);
        gradient.addColorStop (1, 'transparent');
        ctx.fill_style = gradient;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill ();
        ctx.restore ();      });        ctx.restore ();
      });
;
      // Draw connecting lines between nearby particles;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.1)';
      ctx.line_width = 1;
      particles.for_each ((particle1, i) => {
        particles.slice (i + 1).for_each (particle2 => {
          const distance = Math.sqrt (
            Math.pow (particle1.x - particle2.x, 2) +;
              Math.pow (particle1.y - particle2.y, 2)          );            Math.pow (particle1.x - particle2.x, 2) +;
            Math.pow (particle1.y - particle2.y, 2));
          // Check condition
if ( {) {
  $2
}
            ctx.begin_path ();
            ctx.move_to (particle1.x, particle1.y);
            ctx.line_to (particle2.x, particle2.y);
            ctx.stroke ();
          }
        });      });            ctx.stroke ();
          }
        });
      });
;
      // Draw grid pattern;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.05)';
      ctx.line_width = 0.5;
      const grid_size = 50;
      for (let coordinate_x = 0; x < canvas.width; x += grid_size) {
        ctx.begin_path ();
        ctx.move_to (x, 0);
        ctx.line_to (x, canvas.height);
        ctx.stroke ();
      }
      for (let coordinate_y = 0; y < canvas.height; y += grid_size) {
        ctx.begin_path ();
        ctx.move_to (0, y);
        ctx.line_to (canvas.width, y);
        ctx.stroke ();
      }
      animation_ref.current = requestAnimationFrame (animate);    }
;
    const handle_resize = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;    }        ctx.begin_path ();
        ctx.move_to (x, 0);
        ctx.line_to (x, canvas.height);
        ctx.stroke ();
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
      for (let coordinate_y = 0, y < canvas.height, y += grid_size) {
        ctx.begin_path ();
        ctx.move_to (0, y);
        ctx.line_to (canvas.width, y);
        ctx.stroke ();
      }
<<<<<<< HEAD

=======
      canvas.height = window.innerHeight
    };


=======
      canvas.height = window.innerHeight
    };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      animationRef && animationRef.current = requestAnimationFrame(animate);    };
    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;    };        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x, 0);
        ctx && ctx.lineTo(x, canvas && canvas.height);
        ctx && ctx.stroke();
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
      for (let y = 0, y < canvas && canvas.height, y += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, y);
        ctx && ctx.lineTo(canvas && canvas.width, y);
        ctx && ctx.stroke();
      }
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      animationRef && animationRef.current = requestAnimationFrame(animate);
    };
    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;      canvas && canvas.height = window && window.innerHeight;
    };
    window && window.addEventListener('resize', handleResize);
    initParticles();
    animate();
    return () => {;
      window && window.removeEventListener('resize', handleResize);
      if (animationRef && animationRef.current) {;
        cancelAnimationFrame(animationRef && animationRef.current);
<<<<<<< HEAD

      }
    };  }, []);        cancelAnimationFrame(animationRef && animationRef.current);

=======
        cancelAnimationFrame(animationRef.current)

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      }
    };  }, []);        cancelAnimationFrame(animationRef && animationRef.current);
        cancelAnimationFrame(animationRef.current)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    }
  }, []);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>;
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
<<<<<<< HEAD


          animate={{

=======
      />;
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-10'>;
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20'
      animation_ref.current = requestAnimationFrame (animate);
    }
;
    const handle_resize = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;      canvas.height = window.inner_height;
    }
;
    window.addEventListener ('resize', handle_resize);
    init_particles ();
    animate ();
;
    return () => {
      window.removeEventListener ('resize', handle_resize);
      // Check condition
if ( {) {
  $2
}
        cancelAnimationFrame (animation_ref.current);
      }
    }  }, []);        cancelAnimationFrame (animation_ref.current);
      }
    }
  }, []);
;
  return (
    <div className={`relative min - h-screen overflow - hidden ${class_name}`}>;
      {/* Animated Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className='fixed inset - 0 w - full h - full pointer - events - none z - 0';
        style={{
          background:;
            'linear - gradient (135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        }}
      />;
      {/* Floating Geometric Shapes */}
      <div className='fixed inset - 0 pointer - events - none z - 10'>;
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20';
          animate={{
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            rotate: 360,
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',      />;
<<<<<<< HEAD

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">;
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{


          }}
        />;
        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full'
          animate={{

            y: [0, -20, 0],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          }}

          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
        />;
        <motion&& motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{
            y: [0, -20, 0]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]
          }}
          transition={{

            duration: 6
            repeat: Infinity
            ease: 'easeInOut'

          }}
        />;
        <motion&& motion.div
          className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{

            rotate: [0, 180, 360],
            scale: [1, 1 && 1.1, 1],          }}

          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear',          }}
        />;
        <motion&& motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={{
            rotate: [0, 180, 360]
            scale: [1, 1 && 1.1, 1]
          }}
          transition={{

            duration: 12
            repeat: Infinity
            ease: 'linear'

          }}
        />;
        <motion&& motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{

            rotate: [0, -180, -360],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          }}

          transition={{
            duration: 10
            repeat: Infinity
            ease: 'linear',          }}          }}
        />;
        <motion&& motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={{
            rotate: [0, -180, -360]
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]

          }}
          transition={{
<<<<<<< HEAD

=======
            duration: 10
            repeat: Infinity
            ease: 'linear',            ease: "linear"
=======
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      
=======

=======
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Floating Geometric Shapes */}
      <div className="fixed inset - 0 pointer - events - none z - 10">;
        <motion.div;
          className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20";
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3];
<<<<<<< HEAD
=======

        // Draw particle
        ctx.save(),
        ctx.globalAlpha = particle.alpha,
        ctx.fillStyle = particle.color,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fill(),

        // Draw glow effect
        const _gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        ),
        gradient.addColorStop(0, particle.color),
        gradient.addColorStop(1, 'transparent'),
        ctx.fillStyle = gradient,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2),
        ctx.fill(),
        ctx.restore()
      }),

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)',
      ctx.lineWidth = 1,
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          ),
          if (distance < 100) {
            ctx.beginPath(),
            ctx.moveTo(particle1.x, particle1.y),
            ctx.lineTo(particle2.x, particle2.y),
            ctx.stroke()
          }
        })
      }),

      // Draw grid pattern
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)',
      ctx.lineWidth = 0.5,
      const gridSize = 50
      for (let x = 0, x < canvas.width, x += gridSize) {
        ctx.beginPath(),
        ctx.moveTo(x, 0),
        ctx.lineTo(x, canvas.height),
        ctx.stroke()
      }
      for (let y = 0, y < canvas.height, y += gridSize) {
        ctx.beginPath(),
        ctx.moveTo(0, y),
        ctx.lineTo(canvas.width, y),
        ctx.stroke()
      }

      animationRef.current = requestAnimationFrame(animate)
    },

    const handleResize = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight
    },

    window.addEventListener('resize', handleResize),
    initParticles(),
    animate(),

    return () => {
      window.removeEventListener('resize', handleResize),
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, []),

  return (
    <div className={_`relative min-h-screen overflow-hidden ${className}`}>
      {_/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className=&quot;fixed inset-0 w-full h-full pointer-events-none z-0&quot;
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className=&quot;fixed inset-0 pointer-events-none z-10&quot;>
        <motion.div
          className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/20&quot;
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
            ease: "linear"
          }}

=======
ease: "linear"
          }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        />;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - pink - 400 / 20 rounded - full';
          animate={{
            coordinate_y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 border border - pink - 400 / 20 rounded - full";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          animate={{
            coordinate_y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2];
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        />;
        <motion.div;
          className='absolute bottom - 32 left - 32 w - 40 h - 40 border border - purple - 400 / 20 transform rotate - 45';
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',          }}
        />;
        <motion.div;
          className="absolute bottom - 32 left - 32 w - 40 h - 40 border border - purple - 400 / 20 transform rotate - 45";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          animate={{
            rotate: [0, 180, 360];
            scale: [1, 1.1, 1];
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        />;
        <motion.div;
          className='absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 / 20 transform rotate - 12';
          animate={{
            rotate: [0, -180, -360],
            opacity: [0.4, 0.7, 0.4],          }}
          transition={{
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            duration: 10,
            repeat: Infinity,
            ease: 'linear',          }}          }}
        />;
        <motion.div;
          className="absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 / 20 transform rotate - 12";
<<<<<<< HEAD

          animate={{
            rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4];
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          }}
          transition={{


<<<<<<< HEAD
=======
          }}

        />;
      </div>;


      {/* Energy Field Effects */}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        />
      </div>
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'>

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'
=======
=======
          animate={{
            rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4];
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
        />;
      </div>;
      {/* Energy Field Effects */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            ease: 'linear',            ease: "linear";
          }}
        />;
      </div>;
      {/* Energy Field Effects */}
      <div className='fixed inset - 0 pointer - events - none z - 20'>;
        <motion.div;
          className='absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent';
=======
            ctx.stroke();
          }
        });      });            ctx.stroke()
          }
        })
      });
      // Draw grid pattern
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      animationRef.current = requestAnimationFrame(animate);    }
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;    };        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke()
      }
      for (let y = 0, y < canvas.height, y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke()
      }
      animationRef.current = requestAnimationFrame(animate)
    }
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize);
    initParticles();
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };  }, []);        cancelAnimationFrame(animationRef.current)
      }
    }
  }, []);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
        }}
      />
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-10'>
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20'
          animate={{
            rotate: 360
            scale: [1, 1.2, 1]
            opacity: [0.3, 0.6, 0.3],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'linear',      />
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{
            rotate: 360
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'linear'
          }}
        />
        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full'
          animate={{
            y: [0, -20, 0]
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{
            y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{
            rotate: [0, 180, 360]
            scale: [1, 1.1, 1],          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear',          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={{
            rotate: [0, 180, 360];
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear'
          }}
        />
        <motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{
            rotate: [0, -180, -360]
            opacity: [0.4, 0.7, 0.4],          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'linear',          }}          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={{
            rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'linear',            ease: "linear"
          }}
            duration: 10,
            repeat: Infinity,

          }}

            duration: 10,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}

          }}

        />
      </div>
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'>

        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          animate={{
            coordinate_x: ['-100%', '100%'],          }}
          transition={{
<<<<<<< HEAD

            duration: 15,
            repeat: Infinity,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
=======
            ease: 'linear',        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
<<<<<<< HEAD
            duration: 15,
            repeat: Infinity,
      <div className="fixed inset-0 pointer-events-none z-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
            ease: 'linear',        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent";
=======
            duration: 15
            repeat: Infinity
            ease: 'linear',        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
          animate={{
            x: ['-100%100%']
          }}
          transition={{
            duration: 15
            repeat: Infinity
            ease: 'linear'
          }}
        />
        <motion.div
          className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          animate={{
            coordinate_x: ['-100%100%'];
          }}
          transition={{
<<<<<<< HEAD


          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
=======
        <motion.div;
          className="absolute inset - 0 bg - gradient - to - b from - transparent via - purple - 500 / 5 to - transparent";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
        <motion.div;
          className='absolute inset - 0 bg - gradient - to - b from - transparent via - purple - 500 / 5 to - transparent';
          animate={{
            coordinate_y: ['-100%', '100%'],          }}
          transition={{
            duration: 20
            repeat: Infinity
            ease: 'linear',          }}          }}
        />;
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
<<<<<<< HEAD
        <motion.div;
          className="absolute inset - 0 bg - gradient - to - b from - transparent via - purple - 500 / 5 to - transparent";
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          animate={{
            coordinate_y: ['-100%100%'];
          }}
          transition={{
<<<<<<< HEAD

            duration: 20,
            repeat: Infinity,

<<<<<<< HEAD
<<<<<<< HEAD
=======
          }}


            duration: 20,
            repeat: Infinity,

          }}


=======
            duration: 20,
            repeat: Infinity,


          }}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        />
      </div>
      {/* Content */}
      <div className='relative z-30'>{children}</div>

        />;
      </div>;

      {/* Content */}

      {/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>;
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />;
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />;
      </div>;
    </div>;
  );
}
=======
            ease: 'linear',            ease: "linear";
=======
            duration: 20,
            repeat: Infinity,
ease: 'linear',            ease: "linear";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }}
        />;
      </div>;
      {/* Content */}
      <div className='relative z - 30'>{children}</div>;
      {/* Holographic Overlay */}
      <div className='fixed inset - 0 pointer - events - none z - 40'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - transparent via - cyan - 400 / 2 to - transparent' />;
        <div className='absolute inset - 0 bg - gradient - to - tl from - transparent via - purple - 400 / 2 to - transparent' />;
      </div>;
    </div>);
}
;
export default UltraFuturisticBackground2026;
<<<<<<< HEAD

=======
      <div className="relative z-30">
        {children}
      </div>


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      {/* Holographic Overlay */}

=======
      <div className="relative z-30">
        {children}
      </div>
      {/* Holographic Overlay */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="fixed inset-0 pointer-events-none z-40">;
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent" />;
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent" />;
      </div>;
    </div>;
  );
};
<<<<<<< HEAD


export default UltraFuturisticBackground2026;


=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            duration: 20
            repeat: Infinity
            ease: 'linear',            ease: "linear"
          }}
            duration: 20,
            repeat: Infinity,

          }}

            duration: 20,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

          }}

        />
      </div>
      {/* Content */}
      <div className='relative z-30'>{children}</div>
      {/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />
      </div>
    </div>
  );
}
};

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export default UltraFuturisticBackground2026;
      <div className="fixed inset - 0 pointer - events - none z - 40">;
        <div className="absolute inset - 0 bg - gradient - to - br from - transparent via - cyan - 400 / 2 to - transparent" />;
        <div className="absolute inset - 0 bg - gradient - to - tl from - transparent via - purple - 400 / 2 to - transparent" />;
      </div>;
    </div>);
}
;
export default UltraFuturisticBackground2026;
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      {/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />
      </div>
    </div>
  );
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default UltraFuturisticBackground2026;
      {/* Holographic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent" />
      </div>
    </div>
  )
}
export default UltraFuturisticBackground2026;

<<<<<<< HEAD
export default UltraFuturisticBackground2026;

=======

};


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default UltraFuturisticBackground2026;
export default UltraFuturisticBackground2026;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
