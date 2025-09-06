<<<<<<< HEAD
<<<<<<< HEAD

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


=======
interface UltraFuturisticBackground2026Props {
  children: React.ReactNode,
  className?: string
}
const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({ 
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

  children: React.ReactNode;
  className?: string;
const UltraFuturisticBackground2026: React.FC<
  UltraFuturisticBackground2026Props
> = ({ children, className = '' }) => {  const canvasRef = useRef<HTMLCanvasElement>(null);const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
<<<<<<< HEAD
<<<<<<< HEAD

      x: number,
      y: number,
=======
      max_life: number;    }> = [];      coordinate_x: number,
      coordinate_y: number,

      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,
      life: number,

      '#ff8000'  // Orange

=======
      max_life: number;    }> = [];      coordinate_x: number,
      coordinate_y: number,

'#ff8000'  // Orange
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    ];
    const createParticle = () => {
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width;
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
      particles = [];
      for (let i = 0; i < 100; i++) {;
        particles && particles.push(createParticle());      }        x;
        y;
        vx;
        vy;
<<<<<<< HEAD

    const _colors = [
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
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
      '#00ff00', // Green
      '#ff0080', // Pink
      '#8000ff', // Purple
      '#0080ff', // Blue
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
      '#ff8000', // Orange    ];      '#ff8000'  // Orange
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
          y = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
=======
          y = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        // Draw glow effect
        const gradient = ctx.createRadialGradient(
<<<<<<< HEAD
          particle.x
          particle.y
          0
          particle.x
          particle.y
          particle.size * 3        );          particle.x, particle.y, 0;
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
            Math.pow(particle1.x - particle2.x, 2) + 
=======
            Math.pow(particle1.x - particle2.x, 2) + 
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      });

=======
=======
      });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      const gridSize = 50;
      for (let x = 0, x < canvas.width, x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke()
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
      for (let coordinate_y = 0, y < canvas.height, y += grid_size) {
        ctx.begin_path ();
        ctx.move_to (0, y);
        ctx.line_to (canvas.width, y);
        ctx.stroke ();
      }
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      canvas.height = window.innerHeight
    };


<<<<<<< HEAD
=======
      canvas.height = window.innerHeight
    };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      animationRef && animationRef.current = requestAnimationFrame(animate);    };

    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;    };        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x, 0);
        ctx && ctx.lineTo(x, canvas && canvas.height);
        ctx && ctx.stroke();
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
      for (let y = 0, y < canvas && canvas.height, y += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, y);
        ctx && ctx.lineTo(canvas && canvas.width, y);
        ctx && ctx.stroke();
      }
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
        cancelAnimationFrame(animationRef.current)

      }
    };  }, []);        cancelAnimationFrame(animationRef && animationRef.current);
        cancelAnimationFrame(animationRef.current)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
    }
  }, []);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>;
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            rotate: 360,
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',      />;
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          }}
        />;
        <motion&& motion.div
          className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{
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
          }}
        />;
        <motion&& motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            duration: 10
            repeat: Infinity
            ease: 'linear',            ease: "linear"
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      

<<<<<<< HEAD
=======
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        />;
        <motion.div;
          className='absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 / 20 transform rotate - 12';
          animate={{
            rotate: [0, -180, -360],
            opacity: [0.4, 0.7, 0.4],          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',          }}          }}
        />;
        <motion.div;
          className="absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 / 20 transform rotate - 12";
<<<<<<< HEAD

=======
            duration: 10
            repeat: Infinity
            ease: 'linear',            ease: "linear"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          animate={{
            rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4];
          }}
          transition={{
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          }}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        />;
      </div>;


      {/* Energy Field Effects */}


        />
      </div>
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'>
        <motion.div
<<<<<<< HEAD
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'>;
        <motion&& motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            ease: 'linear',            ease: "linear";
          }}
        />;
      </div>;
      {/* Energy Field Effects */}
      <div className='fixed inset - 0 pointer - events - none z - 20'>;
        <motion.div;
          className='absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          animate={{
            coordinate_x: ['-100%', '100%'],          }}
          transition={{

            duration: 15,
            repeat: Infinity,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
=======
            ease: 'linear',        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

=======
            duration: 10,
            repeat: Infinity,
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        />
      </div>
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'>

        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'
          animate={{
            coordinate_x: ['-100%', '100%'],          }}
          transition={{
<<<<<<< HEAD
            ease: 'linear',        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent";
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
            ease: 'linear',        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          animate={{
            coordinate_x: ['-100%100%'];
          }}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD


          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
=======
        <motion.div;
          className="absolute inset - 0 bg - gradient - to - b from - transparent via - purple - 500 / 5 to - transparent";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
        <motion.div;
          className="absolute inset - 0 bg - gradient - to - b from - transparent via - purple - 500 / 5 to - transparent";
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          animate={{
            coordinate_y: ['-100%100%'];
          }}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD

            duration: 20,
            repeat: Infinity,

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          }}


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            duration: 20,
            repeat: Infinity,

          }}

            duration: 20,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}

          }}

            duration: 20,
            repeat: Infinity,


          }}

        />
      </div>
      {/* Content */}
      <div className='relative z-30'>{children}</div>

        />;
      </div>;

      {/* Content */}
          }}
      <div className='relative z-30'>{children}</div>;

      {/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>;
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />;
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />;
      </div>;
    </div>;
  );
}
            ease: 'linear',            ease: "linear";
<<<<<<< HEAD
<<<<<<< HEAD
=======
            duration: 20,
            repeat: Infinity,
ease: 'linear',            ease: "linear";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export default UltraFuturisticBackground2026;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="relative z-30">
        {children}
      </div>


      {/* Holographic Overlay */}

<<<<<<< HEAD
=======
      <div className="relative z-30">
        {children}
      </div>
      {/* Holographic Overlay */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />
      </div>
    </div>
  );
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

export default UltraFuturisticBackground2026;
export default UltraFuturisticBackground2026;

};


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

export default UltraFuturisticBackground2026;
export default UltraFuturisticBackground2026;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
