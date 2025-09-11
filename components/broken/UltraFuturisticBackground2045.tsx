
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Particle system const particles: Array< {
  alpha: Math.random () * 0.8 + 0.2;
life: Math.random () * 100 + 50
})
}// Animation loop // Wrap around edges if (particle.x < 0) particle.x = canvas.width;
if (particle.x > canvas.width) particle.x = 0;
if (particle.y < 0) particle.y = canvas.height;
if (particle.y > canvas.height) particle.y = 0;
// Draw particle // Add glow effect ctx.shadowColor = particle.color;
ctx.shadowBlur = 20;
<<<<<<< HEAD

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Particle system const particles: Array< {
  alpha: Math.random () * 0.8 + 0.2;
life: Math.random () * 100 + 50;
});
}// Animation loop // Wrap around edges // Check condition
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
// Draw particle // Add glow effect ctx.shadow_color = particle.color;
ctx.shadow_blur = 20;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
ctx.fill ();
ctx.restore ();
// Remove dead particles and create new ones // Check condition
if ( {) {
  $2
}
  particles[index] = {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2045Props {
  children: React.ReactNode
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
 canvas && canvas.width = window && window.innerWidth;
canvas && canvas.height = window && window.innerHeight;
// Particle system const particles: Array< {;
  alpha: Math && Math.random () * 0 && 0.8 + 0 && 0.2;
life: Math && Math.random () * 100 + 50 ;
}) ;
}// Animation loop // Wrap around edges if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width;
if (particle && particle.x > canvas && canvas.width) particle && particle.x = 0;
if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height;
if (particle && particle.y > canvas && canvas.height) particle && particle.y = 0;
// Draw particle // Add glow effect ctx && ctx.shadowColor = particle && particle.color;
ctx && ctx.shadowBlur = 20;
ctx && ctx.fill ();
ctx && ctx.restore ();
// Remove dead particles and create new ones if (particle && particle.life <= 0) {;
  particles[index] = {;
  x: Math && Math.random () * canvas && canvas.width, y: Math && Math.random () * canvas && canvas.height, vx: (Math && Math.random () - 0 && 0.5) * 2, vy: (Math && Math.random () - 0 && 0.5) * 2, size: Math && Math.random () * 3 + 1, color: `hsl ($ {;
  Math && Math.random () * 360 ;
}, 70%, 60%) `;
alpha: Math && Math.random () * 0 && 0.8 + 0 && 0.2;
life: Math && Math.random () * 100 + 50 ;
const UltraFuturisticBackground2045: React.FC<;
  UltraFuturisticBackground2045Props;
> = ({ children }) => {  const canvasRef = useRef<HTMLCanvasElement>(null);import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2045Props {;
  children: React && React.ReactNode;
}
<<<<<<< HEAD
<<<<<<< HEAD
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const animationRef = useRef<number | undefined>(undefined);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Particle system
    const particles: Array<{
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      x: number;
      y: number;
  coordinate_x: Math.random () * canvas.width, coordinate_y: Math.random () * canvas.height, vx: (Math.random () - 0.5) * 2, vy: (Math.random () - 0.5) * 2, size: Math.random () * 3 + 1, color: `hsl ($ {
  Math.random () * 360;
}, 70%, 60%) `;
alpha: Math.random () * 0.8 + 0.2;
life: Math.random () * 100 + 50;
const UltraFuturisticBackground2045: React.FC<;
  UltraFuturisticBackground2045Props;
> = ({ children }) => {  const canvas_ref = useRef < HTMLCanvasElement>(null);import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2045Props {
  children: React.ReactNode;
}
const UltraFuturisticBackground2045: React.FC < UltraFuturisticBackground2045Props> = ({ children }) => {
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
    // Particle system;
    const particles: Array<{
      coordinate_x: number;
      coordinate_y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
    }> = [];
<<<<<<< HEAD
<<<<<<< HEAD
    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

    // Particle system
    const particles: Array<{
      x: number,
      y: number,
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      x: number,
      y: number,
=======
;
    // Create initial particles;
    for (let index = 0; i < 100; i++) {      particles.push ({      coordinate_x: number,
      coordinate_y: number,
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
<<<<<<< HEAD
<<<<<<< HEAD
color: `hsl(${Math.random() * 360}, 70%, 60%)`;

=======
        color: `hsl(${Math.random() * 360}, 70%, 60%)`;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        color: `hsl(${Math.random() * 360}, 70%, 60%)`;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        alpha: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50
      })
    }
<<<<<<< HEAD
<<<<<<< HEAD
// Animation loop
    // Create initial particles
    for (let i = 0; i < 100; i++) {      particles.push({      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      alpha: number
      life: number
    }> = [];
    // Create initial particles
    for (let i = 0, i < 100, i++) {
        x: Math.random() * canvas.width
        y: Math.random() * canvas.height
        vx: (Math.random() - 0.5) * 2
        vy: (Math.random() - 0.5) * 2
        size: Math.random() * 3 + 1
        color: `hsl(${Math.random() * 360}, 70%, 60%)`
        alpha: Math.random() * 0.8 + 0.2
        life: Math.random() * 100 + 50
      });    }        color: `hsl(${Math.random() * 360}, 70%, 60%)`;
        alpha: Math.random() * 0.8 + 0.2
        life: Math.random() * 100 + 50
      })
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.restore();
        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = {
<<<<<<< HEAD
<<<<<<< HEAD
          }
        }
      });
        particles.slice(i + 1).forEach((particle2) => {
            x: Math.random() * canvas.width
            y: Math.random() * canvas.height
            vx: (Math.random() - 0.5) * 2
            vy: (Math.random() - 0.5) * 2
            size: Math.random() * 3 + 1
            color: `hsl(${Math.random() * 360}, 70%, 60%)`
            alpha: Math.random() * 0.8 + 0.2
            life: Math.random() * 100 + 50
          };        }            color: `hsl(${Math.random() * 360}, 70%, 60%)`;
            alpha: Math.random() * 0.8 + 0.2
            life: Math.random() * 100 + 50
          }
      });
      // Draw connecting lines between nearby particles
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {          const dx = particle1.x - particle2.x;        particles.slice(i + 1).forEach((particle2) => {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 360}, 70%, 60%)`;
            alpha: Math.random() * 0.8 + 0.2,
            life: Math.random() * 100 + 50
      life: number;
    }> = [];
;
    // Create initial particles;
    for (let index = 0, i < 100, i++) {
        coordinate_x: Math.random () * canvas.width,
        coordinate_y: Math.random () * canvas.height,
        vx: (Math.random () - 0.5) * 2,
        vy: (Math.random () - 0.5) * 2,
        size: Math.random () * 3 + 1,
        color: `hsl (${Math.random () * 360}, 70%, 60%)`,
        alpha: Math.random () * 0.8 + 0.2,
        life: Math.random () * 100 + 50,
      });    }        color: `hsl (${Math.random () * 360}, 70%, 60%)`;
        alpha: Math.random () * 0.8 + 0.2,
        life: Math.random () * 100 + 50;
      });
    // Animation loop;
    const animate = () =>: any {
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles.for_each ((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
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
        // Draw particle;
        ctx.save ();
        ctx.global_alpha = particle.alpha;
        ctx.fill_style = particle.color;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill ();
;
        // Add glow effect;
        ctx.shadow_color = particle.color;
        ctx.shadow_blur = 20;
        ctx.fill ();
        ctx.restore ();
;
        // Remove dead particles and create new ones;
        // Check condition
if ( {) {
  $2
}
          particles[index] = {
            coordinate_x: Math.random () * canvas.width,
            coordinate_y: Math.random () * canvas.height,
            vx: (Math.random () - 0.5) * 2,
            vy: (Math.random () - 0.5) * 2,
            size: Math.random () * 3 + 1,
            color: `hsl (${Math.random () * 360}, 70%, 60%)`,
            alpha: Math.random () * 0.8 + 0.2,
            life: Math.random () * 100 + 50,
          }        }            color: `hsl (${Math.random () * 360}, 70%, 60%)`;
            alpha: Math.random () * 0.8 + 0.2,
            life: Math.random () * 100 + 50;

          }
        }
      });

        particles.slice(i + 1).forEach((particle2) => {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.save();
<<<<<<< HEAD
<<<<<<< HEAD
            ctx.globalAlpha = ((150 - distance) / 150) * 0.3;            ctx.strokeStyle = '#00ffff';            ctx.globalAlpha = (150 - distance) / 150 * 0.3;
=======

            ctx.globalAlpha = (150 - distance) / 150 * 0.3;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            ctx.globalAlpha = (150 - distance) / 150 * 0.3;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ctx.strokeStyle = '#00ffff';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            ctx.restore()
          }

        })
      });
      animationRef.current = requestAnimationFrame(animate)

;
      // Draw connecting lines between nearby particles;
      particles.for_each ((particle1, i) => {
        particles.slice (i + 1).for_each (particle2 => {          const dx = particle1.x - particle2.x;        particles.slice (i + 1).for_each ((particle2) => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt (dx * dx + dy * dy);
;
          // Check condition
if ( {) {
  $2
}
            ctx.save ();
            ctx.global_alpha = ((150 - distance) / 150) * 0.3;            ctx.stroke_style = '#00ffff';            ctx.global_alpha = (150 - distance) / 150 * 0.3;
            ctx.stroke_style = '#00ffff';
            ctx.line_width = 1;
            ctx.begin_path ();
            ctx.move_to (particle1.x, particle1.y);
            ctx.line_to (particle2.x, particle2.y);
            ctx.stroke ();
            ctx.restore ();
          }
        });
      });
;
      animation_ref.current = requestAnimationFrame (animate);    }          }
        });
      });
;
      animation_ref.current = requestAnimationFrame (animate);
    }
;
    animate ();
;
    // Handle resize;
    const handle_resize = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;    }      canvas.height = window.inner_height;
    }
;
    window.addEventListener ('resize', handle_resize);
;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return () => {
      // Check condition
if ( {) {
  $2
}
        cancelAnimationFrame (animation_ref.current);
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Create initial particles;
    for (let i = 0; i < 100; i++) {      particles && particles.push({      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      alpha: number,;
      life: number;
    }> = [];
    // Create initial particles;
    for (let i = 0, i < 100, i++) {;
        x: Math && Math.random() * canvas && canvas.width,;
        y: Math && Math.random() * canvas && canvas.height,;
        vx: (Math && Math.random() - 0 && 0.5) * 2,;
        vy: (Math && Math.random() - 0 && 0.5) * 2,;
        size: Math && Math.random() * 3 + 1,;
        color: `hsl(${Math && Math.random() * 360}, 70%, 60%)`,;
        alpha: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
        life: Math && Math.random() * 100 + 50,;
      });    }        color: `hsl(${Math && Math.random() * 360}, 70%, 60%)`;
        alpha: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
        life: Math && Math.random() * 100 + 50;
      });
    // Animation loop;
    const animate = () => {;
      ctx && ctx.clearRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Update and draw particles;
      particles && particles.forEach((particle, index) => {;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        particle && particle.life--;
        // Wrap around edges;
        if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width;
        if (particle && particle.x > canvas && canvas.width) particle && particle.x = 0;
        if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height;
        if (particle && particle.y > canvas && canvas.height) particle && particle.y = 0;
        // Draw particle;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = particle && particle.alpha;
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
        // Add glow effect;
        ctx && ctx.shadowColor = particle && particle.color;
        ctx && ctx.shadowBlur = 20;
        ctx && ctx.fill();
        ctx && ctx.restore();
        // Remove dead particles and create new ones;
        if (particle && particle.life <= 0) {;
          particles[index] = {;
            x: Math && Math.random() * canvas && canvas.width,;
            y: Math && Math.random() * canvas && canvas.height,;
            vx: (Math && Math.random() - 0 && 0.5) * 2,;
            vy: (Math && Math.random() - 0 && 0.5) * 2,;
            size: Math && Math.random() * 3 + 1,;
            color: `hsl(${Math && Math.random() * 360}, 70%, 60%)`,;
            alpha: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
            life: Math && Math.random() * 100 + 50,;
          };        }            color: `hsl(${Math && Math.random() * 360}, 70%, 60%)`;
            alpha: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
            life: Math && Math.random() * 100 + 50;
          }
      });
      // Draw connecting lines between nearby particles;
      particles && particles.forEach((particle1, i) => {;
        particles && particles.slice(i + 1).forEach(particle2 => {          const dx = particle1 && particle1.x - particle2 && particle2.x;        particles && particles.slice(i + 1).forEach((particle2) => {;
          const dx = particle1 && particle1.x - particle2 && particle2.x;
          const dy = particle1 && particle1.y - particle2 && particle2.y;
          const distance = Math && Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {;
            ctx && ctx.save();
            ctx && ctx.globalAlpha = ((150 - distance) / 150) * 0 && 0.3;            ctx && ctx.strokeStyle = '#00ffff';            ctx && ctx.globalAlpha = (150 - distance) / 150 * 0 && 0.3;
            ctx && ctx.strokeStyle = '#00ffff';
            ctx && ctx.lineWidth = 1;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particle1 && particle1.x, particle1 && particle1.y);
            ctx && ctx.lineTo(particle2 && particle2.x, particle2 && particle2.y);
            ctx && ctx.stroke();
            ctx && ctx.restore();
          }
        });
      });
      animationRef && animationRef.current = requestAnimationFrame(animate);    };          }
        });
      });
      animationRef && animationRef.current = requestAnimationFrame(animate);
<<<<<<< HEAD
<<<<<<< HEAD
    };
            ctx.restore();
          }
        });
      });
      animationRef.current = requestAnimationFrame(animate);    };          }
        })
      });
      animationRef.current = requestAnimationFrame(animate)
    }
    animate();
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    };

    animate();



    };

    window && window.addEventListener('resize', handleResize);



  }, []);
  return (
    <div className='relative min-h-screen bg-black overflow-hidden'>;
=======
      window.removeEventListener ('resize', handle_resize);
    }
  }, []);
;
  return (
    <div className='relative min - h-screen bg - black overflow - hidden'>;
      {/* Animated Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className='fixed inset - 0 w - full h - full pointer - events - none z - 0';
        style={{

      />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-10'>;
        {/* Animated Grid */}
        <motion&& motion.div
          className='absolute inset-0 opacity-20'
          style={{
            backgroundImage: `
<<<<<<< HEAD

              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            `,
            backgroundSize: '50px 50px',

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
            `,
            backgroundSize: '50px 50px',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          background:;
            'radial - gradient (ellipse at center, #0a0a0a 0%, #000000 100%)',
        }}
      />;
      {/* Floating Geometric Shapes */}
      <div className='fixed inset - 0 pointer - events - none z - 10'>;
        {/* Animated Grid */}
        <motion.div;
          className='absolute inset - 0 opacity - 20';
          style={{
            background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px),
              linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px);
            `,
            background_size: '50px 50px',
          }}
          animate={{
            background_position: ['0px 0px', '50px 50px'],
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      canvas.height = window.innerHeight;    };      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (
    <div className='relative min-h-screen bg-black overflow-hidden'>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)'
        }}
      />
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-10'>
        {/* Animated Grid */}
        <motion.div
          className='absolute inset-0 opacity-20'
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
<<<<<<< HEAD
            `
            backgroundSize: '50px 50px'
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 20
            repeat: Infinity
            ease: 'linear',          }}      }
<<<<<<< HEAD
<<<<<<< HEAD
      window.removeEventListener ('resize', handle_resize);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)

=======
      window.removeEventListener ('resize', handle_resize);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }

  }, [])


<<<<<<< HEAD
<<<<<<< HEAD
window.removeEventListener ('resize', handle_resize);
    }
  }, [])
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">;
=======
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      window.removeEventListener('resize', handleResize)
    }
  }, []);
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)' }}
<<<<<<< HEAD
<<<<<<< HEAD
      />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">;
        {/* Animated Grid */}
        <motion&& motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px'
;
  return (
    <div className="relative min - h-screen bg - black overflow - hidden">;
      {/* Animated Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className="fixed inset - 0 w - full h - full pointer - events - none z - 0";
        style={{ background: 'radial - gradient (ellipse at center, #0a0a0a 0%, #000000 100%)' }}
      />;
      {/* Floating Geometric Shapes */}
      <div className="fixed inset - 0 pointer - events - none z - 10">;
        {/* Animated Grid */}
        <motion.div;
          className="absolute inset - 0 opacity - 20";
          style={{
            background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px);
              linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px);
            `;
            background_size: '50px 50px';
          }}
          animate={{
            background_position: ['0px 0px50px 50px']}}
          transition={{
<<<<<<< HEAD

        />;





<<<<<<< HEAD
        />;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Floating Neon Shapes */}
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg'
          animate={{
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            rotate: [0, 360],
            scale: [1, 1.1, 1],


            opacity: [0.3, 0.6, 0.3],          animate={{
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 20
            repeat: Infinity
            ease: 'linear'
          }}
        />

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        />;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Floating Neon Shapes */}
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg'
          animate={{
            rotate: [0, 360]
            scale: [1, 1.1, 1]
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],          animate={{
=======
            duration: 20
            repeat: Infinity
            ease: 'linear'
          }}
        />

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Floating Neon Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
            duration: 20,
            repeat: Infinity,
            ease: 'linear';
          }}
        />;
        {/* Floating Neon Shapes */}
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - lg';
          animate={{
<<<<<<< HEAD
            rotate: [0, 360]
            scale: [1, 1.1, 1]
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],          animate={{
            rotate: [0, 360];
            scale: [1, 1.1, 1];
            opacity: [0.3, 0.6, 0.3]}}
            rotate: [0, 360],
            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          animate={{
            rotate: [0, 360]
            scale: [1, 1 && 1.1, 1]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
        />;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 30 rounded - full';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 30 rounded - full';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          animate={{
            rotate: [360, 0]
            scale: [1, 1.2, 1]
            opacity: [0.3, 0.7, 0.3]
        />;
        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full'
          animate={{
            rotate: [360, 0],
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.7, 0 && 0.3],
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
          }}
<<<<<<< HEAD
<<<<<<< HEAD
        />;
        <motion&& motion.div
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          animate={{
            rotate: [360, 0]
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.3, 0 && 0.7, 0 && 0.3]}}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        <motion&& motion.div
          className='absolute bottom-32 left-32 w-40 h-40 border border-pink-400/30 transform rotate-45'
          animate={{
            rotate: [45, 405],
            scale: [1, 1 && 1.15, 1],
            opacity: [0 && 0.3, 0 && 0.5, 0 && 0.3],
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut'
          }}
<<<<<<< HEAD
<<<<<<< HEAD
        />;
        <motion&& motion.div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
        <motion&& motion.div

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          animate={{
            rotate: [45, 405]
            scale: [1, 1 && 1.15, 1]
            opacity: [0 && 0.3, 0 && 0.5, 0 && 0.3]}}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
          }}
<<<<<<< HEAD
<<<<<<< HEAD



        />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Additional floating elements */}
        <motion&& motion.div
          className='absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 rounded-full'
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
            opacity: [0.2, 0.5, 0.2],

            y: [0, -20, 0],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            y: [0, -20, 0],


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
            opacity: [0.2, 0.5, 0.2],

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          animate={{
            y: [0, -20, 0]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]}}
          transition={{

            duration: 4
            repeat: Infinity

            ease: 'easeInOut',          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        <motion&& motion.div
          className='absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 transform rotate-12'
          animate={{
            rotate: [12, 372],
            scale: [1, 1 && 1.1, 1],
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut';
          }}
<<<<<<< HEAD
<<<<<<< HEAD
        />;
        <motion.div;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
        <motion.div;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          animate={{
            rotate: [360, 0];
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.7, 0.3]}}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
ease: 'easeInOut',          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className='absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 / 30 transform rotate - 45';
          animate={{
            rotate: [45, 405],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut';
          }}
        />;
        <motion.div;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          animate={{
            rotate: [45, 405];
            scale: [1, 1.15, 1];
            opacity: [0.3, 0.5, 0.3]}}
          transition={{
<<<<<<< HEAD
            duration: 10,
            repeat: Infinity,

            ease: 'easeInOut',          }}
<<<<<<< HEAD
            duration: 10,
            repeat: Infinity,
ease: 'easeInOut',          }}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
          }}
        />

            ease: 'easeInOut',          }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut';
<<<<<<< HEAD
<<<<<<< HEAD
          }}
        />


        {/* Additional floating elements */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          }}
        />;
        {/* Additional floating elements */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <motion.div;
          className='absolute top - 1/3 right - 1/4 w - 16 h - 16 border border - blue - 400 / 20 rounded - full';
          animate={{
            y: [0, -20, 0]
            opacity: [0.2, 0.5, 0.2]
=======
        <motion.div;
          className='absolute top - 1/3 right - 1/4 w - 16 h - 16 border border - blue - 400 / 20 rounded - full';
          animate={{
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          animate={{
            coordinate_y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2]}}
          transition={{
<<<<<<< HEAD
=======
            duration: 4
            repeat: Infinity
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 4,
            repeat: Infinity,
ease: 'easeInOut',          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className='absolute bottom - 1/3 right - 1/3 w - 20 h - 20 border border - green - 400 / 20 transform rotate - 12';
          animate={{
            rotate: [12, 372],
            scale: [1, 1.1, 1],
          animate={{
            rotate: [12, 372];
            scale: [1, 1.1, 1]}}
          transition={{
            duration: 12,
            repeat: Infinity,
ease: 'linear',
            ease: 'linear';
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          animate={{
            coordinate_y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2]}}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
            duration: 4
            repeat: Infinity
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />;
        <motion.div;
=======
<<<<<<< HEAD
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut';
          }}

        />;
        <motion.div;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          animate={{
            rotate: [12, 372]
            scale: [1, 1 && 1.1, 1]}}
          transition={{
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            duration: 12,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

<<<<<<< HEAD
        />;
<<<<<<< HEAD
        <motion&& motion.div
=======

        <motion&& motion.div

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          animate={{
            rotate: [12, 372]
            scale: [1, 1 && 1.1, 1]}}
          transition={{
<<<<<<< HEAD
            duration: 12
            repeat: Infinity
            ease: 'linear'
          }}
        />
=======

        />;


=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            duration: 12,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Energy Orbs */}
        <motion&& motion.div
          className='absolute top-1/4 left-1/3 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50'
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.5, 1, 0 && 0.5],

=======

            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.5, 1, 0 && 0.5],

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],

<<<<<<< HEAD
            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.5, 1, 0 && 0.5],
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            scale: [1, 1.5, 1]
            opacity: [0.5, 1, 0.5]
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            y: [0, -10, 0],          animate={{
            scale: [1, 1 && 1.5, 1]
            opacity: [0 && 0.5, 1, 0 && 0.5]
            y: [0, -10, 0]}}
          transition={{

            duration: 3
            repeat: Infinity

            ease: 'easeInOut',          }}
          transition={{
            duration: 3
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        <motion&& motion.div
          className='absolute bottom-1/4 right-1/4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-400/50'
        />
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Energy Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50"
          animate={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear';
          }}
        />;
        {/* Energy Orbs */}
        <motion.div;
          className='absolute top - 1/4 left - 1/3 w - 8 h - 8 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - full shadow - lg shadow - cyan - 400 / 50';
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
            coordinate_y: [0, -10, 0],          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            scale: [1, 1.5, 1];
            opacity: [0.5, 1, 0.5];
            coordinate_y: [0, -10, 0]}}
          transition={{
            duration: 3,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
        />;
        <motion&& motion.div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          transition={{
            duration: 3
            repeat: Infinity
            ease: 'easeInOut'
          }}

        />;
        <motion&& motion.div

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          animate={{
            scale: [1, 1 && 1.8, 1]
            opacity: [0 && 0.4, 0 && 0.9, 0 && 0.4]
            x: [0, 15, 0]}}
            ease: 'easeInOut',          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className='absolute bottom - 1/4 right - 1/4 w - 6 h - 6 bg - gradient - to - r from - purple - 400 to - pink - 500 rounded - full shadow - lg shadow - purple - 400 / 50';
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.9, 0.4],
            coordinate_x: [0, 15, 0],
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut';
          }}
        />;
        <motion.div;
          animate={{
            scale: [1, 1.8, 1];
            opacity: [0.4, 0.9, 0.4];
            coordinate_x: [0, 15, 0]}}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
<<<<<<< HEAD
=======
            duration: 4
            repeat: Infinity
            ease: 'easeInOut'
          }}
        />
      </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Gradient Overlays */}

        />;
      </div>;
      {/* Gradient Overlays */}
      <div className='fixed inset-0 pointer-events-none z-20'>;
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10' />;
        <div className='absolute inset-0 bg-gradient-to-tl from-pink-900/5 via-transparent to-blue-900/5' />;
      {/* Content */}
      <div className='relative z-30'>{children}</div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Animated Border Effects */}
      <div className='fixed inset-0 pointer-events-none z-40'>;
        <motion&& motion.div
          className='absolute inset-0 border border-transparent'
          style={{
            background:
<<<<<<< HEAD
<<<<<<< HEAD
              'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0 && 0.1), transparent)',
            backgroundSize: '200% 100%',
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0 && 0.1), transparent)',
            backgroundSize: '200% 100%',

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
          animate={{
            backgroundPosition: ['-200% 0', '200% 0']
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut';
          }}
        />;
      </div>;
      {/* Gradient Overlays */}
      <div className='fixed inset - 0 pointer - events - none z - 20'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 900 / 10 via - transparent to - purple - 900 / 10' />;
        <div className='absolute inset - 0 bg - gradient - to - tl from - pink - 900 / 5 via - transparent to - blue - 900 / 5' />;
      {/* Content */}
      <div className='relative z - 30'>{children}</div>;
      {/* Animated Border Effects */}
      <div className='fixed inset - 0 pointer - events - none z - 40'>;
        <motion.div;
          className='absolute inset - 0 border border - transparent';
          style={{
            background:;
              'linear - gradient (90deg, transparent, rgba (0, 255, 255, 0.1), transparent)',
            background_size: '200% 100%',
          }}
          animate={{
            background_position: ['-200% 0', '200% 0'],
          }}
          transition={{
            duration: 15
            repeat: Infinity
            ease: 'linear',          }}
        />;
      </div>;
    </div>;
  );
};export default UltraFuturisticBackground2045;            ease: 'linear';
          }}
        />;
      </div>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
};  );

};  );
};
      <div className="fixed inset-0 pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/5 via-transparent to-blue-900/5" />
      </div>
      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>
      {/* Animated Border Effects */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <motion.div
          className="absolute inset-0 border border-transparent"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent)',
    backgroundSize: '200% 100%'
          }}
          animate={{
            backgroundPosition: ['-200% 0200% 0']}}
          transition={{
            duration: 15,
            repeat: Infinity,
ease: 'linear',          }}
        />;
      </div>;
    </div>);
}export default UltraFuturisticBackground2045;            ease: 'linear';
          }}
        />;
      </div>;
    </div>);
}  );
            duration: 4
            repeat: Infinity
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className='fixed inset-0 pointer-events-none z-20'>
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10' />
        <div className='absolute inset-0 bg-gradient-to-tl from-pink-900/5 via-transparent to-blue-900/5' />
      {/* Content */}
      <div className='relative z-30'>{children}</div>
      {/* Animated Border Effects */}
      <div className='fixed inset-0 pointer-events-none z-40'>
        <motion.div
          className='absolute inset-0 border border-transparent'
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent)'
            backgroundSize: '200% 100%'
          }}
          animate={{
            backgroundPosition: ['-200% 0', '200% 0']
          }}
          transition={{
            duration: 15
            repeat: Infinity
            ease: 'linear',          }}
        />
      </div>
    </div>
  );
};export default UltraFuturisticBackground2045;            ease: 'linear'
          }}
        />
      </div>
    </div>
  );
};  )
}
;
export default UltraFuturisticBackground2045;

export default UltraFuturisticBackground2045;
export default UltraFuturisticBackground2045;

}
}
}
export default UltraFuturisticBackground2045;
=======

};  );

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

};  );

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
