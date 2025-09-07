<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const UltraFuturisticBackground: React.FC;
const UltraFuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
    // Quantum particle system
    const particles: Array<{
=======
const UltraFuturisticBackground: React.FC = () => {
const UltraFuturisticBackground: React.FC = () => {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;
    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;
    canvas && canvas.width = window && window.innerWidth;
    canvas && canvas.height = window && window.innerHeight,;
    // Quantum particle system;
    const particles: Array<{;
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
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      x: number;
      y: number;
  const canvas_ref = useRef < HTMLCanvasElement>(null);
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
    canvas.height = window.inner_height,
    // Quantum particle system;
    const particles: Array<{
      coordinate_x: number;
      coordinate_y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      max_life: number;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    }> = [];

      x: number,
      y: number,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
    // Create initial particles;
    for (let index = 0; i < 100; i++) {      coordinate_x: number,
      coordinate_y: number,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,
    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles,
particles.forEach((particle, index) => {
        }
        particle.x += particle.vx;

      x: number;
      y: number;
  const canvas_ref  = useRef < HTMLCanvasElement>(null)useEffect (() => {const canvas = canvas_ref.current;
    // Check condition;
if (return) {$2;
}
    const ctx = canvas.get_context (2d')// Check condition;
if (return) {$2;
}
    canvas.width = window.inner_width;
    canvas.height = window.inner_height,// Quantum particle system;
    const particles: Array<{coordinate_x: number;
      coordinate_y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      max_life: number;
      vx: number,vy: number,size: number,color: string,life: number,import React, { useEffect, useRef } from 'react;
import { motion  } from framer-motion';
const UltraFuturisticBackground: React.FC;// Animation loop;
    const animate = () => {ctx.fillStyle = 'rgba(0, 0, 0, 0.1);
      ctx.fillRect(0, 0, canvas.width, canvas.height)// Update and draw particles;
      particles.forEach((particle, index) => {particle.x += particle.vx;
origin/cursor/automate-test-improve-and-merge-code-2533
    // Animation loop
    const animate = () => {
=======


import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground: React.FC;
    // Animation loop;
const animate = (
>>>>>>> origin/chore/fix-lint-and-merge
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles;
particles.forEach((particle, index) => {
        particle.x += particle.vx;
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
        particle.y += particle.vy;
        particle.life--;
        // Wrap around edges;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle;
        ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.life / particle.maxLife;
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const UltraFuturisticBackground: React.FC = $2;
  useEffect(() => {
    const canvas = $2;
    if (!canvas) return,

    const ctx = canvas.getContext($2);
    if (!ctx) return,

    canvas.width = $2;
    canvas.height = $2;
    // Quantum particle system
    const particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,
      maxLife: number}> = [],

    // Create initial particles
    for (let i = 0, i < 100, i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        life: Math.random() * 100,
        maxLife: 100})
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
    }> = [];
      x: number,
      y: number,
;
    // Create initial particles;
    for (let index = 0; i < 100; i++) {      coordinate_x: number,
      coordinate_y: number,

    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

    // Quantum particle system
    const particles: Array<{
      x: number,
      y: number,

      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
color: `hsl(${Math.random() * 360}, 70%, 60%)`;

        life: Math.random() * 100,
        maxLife: 100
      })
    }
// Animation loop
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
    // Quantum particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];
    // Create initial particles
    for (let i = 0; i < 100; i++) {      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      life: number
      maxLife: number
    }> = [];
    // Create initial particles
    for (let i = 0, i < 100, i++) {
        x: Math.random() * canvas.width
        y: Math.random() * canvas.height
        vx: (Math.random() - 0.5) * 2
        vy: (Math.random() - 0.5) * 2
        size: Math.random() * 3 + 1
        color: `hsl(${Math.random() * 360}, 70%, 60%)`
        life: Math.random() * 100
        maxLife: 100
      });    }        color: `hsl(${Math.random() * 360}, 70%, 60%)`;
        life: Math.random() * 100
        maxLife: 100
      })
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)',
      ctx.fillRect($2);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx,
        particle.y += particle.vy,
        particle.life--,

        // Wrap around edges
        if (particle.x < 0) particle.x = $2;
        if (particle.x > canvas.width) particle.x = $2;
        if (particle.y < 0) particle.y = $2;
        if (particle.y > canvas.height) particle.y = $2;
        // Draw particle
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fillStyle = $2;
        ctx.globalAlpha = $2;
        ctx.fill($2);
        // Reset particle if it dies
        if (particle.life <= 0) {
<<<<<<< HEAD
          particles[index] = {
=======
<<<<<<< HEAD
=======

        ctx.fill();
        // Reset particle if it dies;
if (particle.life <= 0) {
>>>>>>> origin/chore/fix-lint-and-merge
          particles[index] = {
=======
          particles[index] = {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
<<<<<<< HEAD
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            life: 100,
            maxLife: 100}
        }
      }),

      // Draw quantum entanglement lines
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          ),
          
          if (distance < 100) {
            ctx.beginPath($2);
            ctx.moveTo($2);
            ctx.lineTo($2);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`,
            ctx.lineWidth = $2;
            ctx.stroke()
          }
        })
      }),

      requestAnimationFrame(animate)
    },

    animate($2);
    // Handle resize
    const handleResize = $2;
      canvas.height = $2;
    window.addEventListener($2);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []),

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Quantum Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size: 50px_50px] opacity-20" />
      </div>

=======
<<<<<<< HEAD
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            life: 100,
            maxLife: 100}
        }
      }),

<<<<<<< HEAD
      // Draw quantum entanglement lines
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const distance = Math.sqrt(
=======
            color: `hsl(${Math.random() * 360}, 70%, 60%)`;
      max_life: number;
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
        life: Math.random () * 100,
        max_life: 100,
      });    }        color: `hsl (${Math.random () * 360}, 70%, 60%)`;
        life: Math.random () * 100,
        max_life: 100;
      });
    // Animation loop;
    const animate = () =>: any {
      ctx.fill_style = 'rgba (0, 0, 0, 0.1)';
      ctx.fill_rect (0, 0, canvas.width, canvas.height);
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
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill_style = particle.color;
        ctx.global_alpha = particle.life / particle.max_life;
        ctx.fill ();
;
        // Reset particle if it dies;
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
            life: 100,
            max_life: 100,
          }        }            color: `hsl (${Math.random () * 360}, 70%, 60%)`;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            life: 100,
            max_life: 100;
          }
        }
      });
<<<<<<< HEAD
=======

<<<<<<< HEAD
        // Reset particle if it dies
        if (particle.life <= 0) {
          particles[index] = {
            x: Math.random() * canvas.width, _y: Math.random() * canvas.height, _vx: (Math.random() - 0.5) * 2, _vy: (Math.random() - 0.5) * 2, _size: Math.random() * 3 + 1, _color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            life: 100,
            maxLife: 100
          }
        }
      }),

      // Draw quantum entanglement lines
      particles.forEach((particle1, i) => {

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        particles.slice(i + 1).forEach((particle2) => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
<<<<<<< HEAD
);
=======
          );
          

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          if (distance < 100) {
          if (distance < 100) {}
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
<<<<<<< HEAD
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          ),
          
          if (distance < 100) {
            ctx.beginPath($2);
            ctx.moveTo($2);
            ctx.lineTo($2);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`,
            ctx.lineWidth = $2;
            ctx.stroke()
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Create initial particles;
    for (let i = 0; i < 100; i++) {      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      life: number,;
      maxLife: number;
    }> = [];
    // Create initial particles;
    for (let i = 0, i < 100, i++) {;
        x: Math && Math.random() * canvas && canvas.width,;
        y: Math && Math.random() * canvas && canvas.height,;
        vx: (Math && Math.random() - 0 && 0.5) * 2,;
        vy: (Math && Math.random() - 0 && 0.5) * 2,;
        size: Math && Math.random() * 3 + 1,;
        color: `hsl(${Math && Math.random() * 360}, 70%, 60%)`,;
        life: Math && Math.random() * 100,;
        maxLife: 100,;
      });    }        color: `hsl(${Math && Math.random() * 360}, 70%, 60%)`;
        life: Math && Math.random() * 100,;
        maxLife: 100;
      });
    // Animation loop;
    const animate = () => {;
      ctx && ctx.fillStyle = 'rgba(0, 0, 0, 0 && 0.1)';
      ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);
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
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.globalAlpha = particle && particle.life / particle && particle.maxLife;
        ctx && ctx.fill();
        // Reset particle if it dies;
        if (particle && particle.life <= 0) {;
          particles[index] = {;
            x: Math && Math.random() * canvas && canvas.width,;
            y: Math && Math.random() * canvas && canvas.height,;
            vx: (Math && Math.random() - 0 && 0.5) * 2,;
            vy: (Math && Math.random() - 0 && 0.5) * 2,;
            size: Math && Math.random() * 3 + 1,;
            color: `hsl(${Math && Math.random() * 360}, 70%, 60%)`,;
            life: 100,;
            maxLife: 100,;
          };        }            color: `hsl(${Math && Math.random() * 360}, 70%, 60%)`;
            life: 100,;
            maxLife: 100;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }
        })
      }),
=======
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
color: `hsl(${Math.random() * 36,) => {
  return $3;}
}
}, 70%, 60%)`,
            life: 100,
            maxLife: 100
          };
        }
      });
      // Draw quantum entanglement lines;
particles.forEach((particle1, i) => {
particles.slice(i + 1).forEach(particle2 = > {
         ;
  const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) +
              Math.pow(particle1.y - particle2.y, 2)
          );
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
          if (distance < 100) {
            ctx.beginPath();
<<<<<<< HEAD
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);


        ctx.fill()// Reset particle if it dies;
        if (particle.life <= 0) {particles[index] = {life: 100,max_life: 100;
          }
        }
      })x: Math.random() * canvas.width,y: Math.random() * canvas.height,vx: (Math.random() - 0.5) * 2,vy: (Math.random() - 0.5) * 2,size: Math.random() * 3 + 1,color: `hsl(${Math.random() * 360}, 70%, 60%)`,life: 100,maxLife: 100,}
      })// Draw quantum entanglement lines;
      particles.forEach((particle1, i) => {particles.slice(i + 1).forEach(particle2 => {const distance = Math.sqrt(Math.pow(particle1.x - particle2.x, 2) +;
              Math.pow(particle1.y - particle2.y, 2))if (distance < 100) {ctx.beginPath()ctx.moveTo(particle1.x, particle1.y)ctx.lineTo(particle2.x, particle2.y)ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;}
        })})requestAnimationFrame(animate)}
        })})}animate()}window && window.addEventListener('resize', handleResize)// Draw quantum entanglement lines;
      particles.for_each ((particle1, i) => {particles.slice (i + 1).for_each (particle2 => {const distance = Math.sqrt (Math.pow (particle1.x - particle2.x, 2) +;
              Math.pow (particle1.y - particle2.y, 2))const distance = Math.sqrt (Math.pow (particle1.x - particle2.x, 2) +;
            Math.pow (particle1.y - particle2.y, 2))// Check condition;
if ( {) {$2;
}
            ctx.begin_path ()ctx.move_to (particle1.x, particle1.y)ctx.line_to (particle2.x, particle2.y)ctx.stroke_style = `rgba (0, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.line_width = 1;
            ctx.stroke ()}
        })})requestAnimationFrame (animate)}          }
        })})requestAnimationFrame (animate)}animate ()// Handle resize;
    const handle_resize = () =>: any {canvas.width = window.inner_width;
      canvas.height = window.inner_height;    }      canvas.height = window.inner_height;
    }window.addEventListener ('resize', handle_resize)return () => {window.removeEventListener ('resize', handle_resize)}ctx.stroke()}
        })})requestAnimationFrame(animate)}animate()// Handle resize;
    const handleResize = () => {canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
    }window.addEventListener('resize', handleResize)return () => {window.removeEventListener('resize', handleResize)}}, [])return (<div className='fixed inset - 0 -z - 10 overflow - hidden'>;
    animate()
};

    window && window.addEventListener('resize', handleResize);
=======
          if (distance < 100) {;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particle1 && particle1.x, particle1 && particle1.y);
            ctx && ctx.lineTo(particle2 && particle2.x, particle2 && particle2.y);
            ctx && ctx.strokeStyle = `rgba(0, 255, 255, ${0 && 0.1 * (1 - distance / 100)})`;
            ctx && ctx.lineWidth = 1;
            ctx && ctx.stroke();
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }
        });
      });
      requestAnimationFrame(animate);    };          }
        });
      });
<<<<<<< HEAD
      requestAnimationFrame(animate);
            ctx.stroke()
          }
        })
      });
      requestAnimationFrame(animate)
    };
    animate();
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight
    };
    window && window.addEventListener('resize', handleResize);
=======


      requestAnimationFrame(animate);

    };
    animate();



    };
    window && window.addEventListener('resize', handleResize);



  }, []);
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
      // Draw quantum entanglement lines;
      particles.for_each ((particle1, i) => {}
        particles.slice (i + 1).for_each (particle2 => {}
          const distance = Math.sqrt (
            Math.pow (particle1.x - particle2.x, 2) +;
              Math.pow (particle1.y - particle2.y, 2));          const distance = Math.sqrt (
            Math.pow (particle1.x - particle2.x, 2) +;
            Math.pow (particle1.y - particle2.y, 2));
          // Check condition;
if ( {) {}
  $2;
}
            ctx.begin_path ();
            ctx.move_to (particle1.x, particle1.y);
            ctx.line_to (particle2.x, particle2.y);`
            ctx.stroke_style = `rgba (0, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.line_width = 1;
            ctx.stroke ();
          }
        });
      });
      requestAnimationFrame (animate);    }          }
        });
      });
      requestAnimationFrame (animate);
    }
    animate ();
    // Handle resize;
    const handle_resize = () =>: any {}
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;    }      canvas.height = window.inner_height;
    }
    window.addEventListener ('resize', handle_resize);
    return () => {
      window.removeEventListener (resize', handle_resize);
    }
=======
            ctx.moveTo(particle1.x, particle1.y);}
            ctx.lineTo(particle2.x, particle2.y);}
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;

>>>>>>> origin/chore/fix-lint-and-merge
ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate)
}


    animate();
    // Handle resize;
const handleResize = (
      canvas.width = window.innerWidth;
canvas.height = window.innerHeight) => {
  return $3;}
}
<<<<<<< HEAD
}

  }, []);
;
  return ('
    <div className='fixed inset - 0 -z - 10 overflow - hidden'>;
      {/* Canvas Background */}
      <canvas;
        ref={canvas_ref}'
=======
};


    window.addEventListener('resize', handleResize);
    return () => {}
window.removeEventListener('resize', handleResize)}
};

  }, []);
;
  return (
<<<<<<< HEAD
    <div className='fixed inset - 0 -z - 10 overflow - hidden'    />;

=======
    <div className='fixed inset - 0 -z - 10 overflow - hidden'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Canvas Background */}
      <canvas;
        ref={canvas_ref}
>>>>>>> origin/chore/fix-lint-and-merge
        className='absolute inset - 0 w - full h - full';
<<<<<<< HEAD
        style={{{/* Floating Geometric Shapes */}
      <div className='absolute inset-0'    />;
        {/* Hexagon */}
        <motion&& motion.div;
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30';
          style={{clipPath:;
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';}
          background:;}
            'radial - gradient (ellipse at center, rgba (0, 0, 0, 0) 0%, rgba (0, 0, 0, 1) 100%)'}}
         />;
=======
        style={{
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
      {/* Quantum Grid */}
      <div className='absolute inset-0'>;
        <div className='absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />;
      </div>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Floating Geometric Shapes */}
      <div className='absolute inset-0'>;
        {/* Hexagon */}
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30'
          style={{
            clipPath:
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          background:;
            'radial - gradient (ellipse at center, rgba (0, 0, 0, 0) 0%, rgba (0, 0, 0, 1) 100%)',
        }}
      />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Quantum Grid */}
<<<<<<< HEAD
      <div className='absolute inset - 0'>;
        <div className='absolute inset - 0 bg-[linear - gradient (rgba (0, 255, 255, 0.1)_1px, transparent_1px), linear - gradient (90deg, rgba (0, 255, 255, 0.1)_1px, transparent_1px)] bg-[size:50px_50px] opacity - 20' />;
      </div>;
      {/* Floating Geometric Shapes */}
      <div className='absolute inset - 0'>;
        {/* Hexagon */}
        <motion.div;'
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30';
<<<<<<< HEAD
=======
          style={{
            clip_path:;
              'polygon (50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
          animate={{
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            rotate: [0, 360],
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
          transition={{
            duration: 20,
            repeat: Infinity,
<<<<<<< HEAD

<<<<<<< HEAD
=======

            duration: 20,
            repeat: Infinity,
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);
            duration: 20
            repeat: Infinity
            ease: 'linear',          }}  }, []);

=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">;
          style={{clip_path:;
              'polygon (50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',}}
          animate={{rotate: [0, 360],scale: [1, 1 && 1.2, 1],opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
          transition={{duration: 20,repeat: Infinity,return (<div className="fixed inset-0 -z-10 overflow-hidden">;
    animate($2);
    // Handle resize
    const handleResize = $2;
      canvas.height = $2;
    window.addEventListener($2);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []),

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
<<<<<<< HEAD
      />

      {/* Quantum Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size: 50px_50px] opacity-20" />
      </div>
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
      {/* Quantum Grid */}
      <div className="absolute inset-0">;
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />;
      </div>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Hexagon */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
<<<<<<< HEAD
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition = $2;
=======
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
<<<<<<< HEAD
=======
      <div className='absolute inset - 0'    />;
        <div className='absolute inset - 0 bg-[linear - gradient (rgba (0, 255, 255, 0.1)_1px, transparent_1px), linear - gradient (90deg, rgba (0, 255, 255, 0.1)_1px, transparent_1px)] bg-[size:50px_50px] opacity - 20'    />;
=======
            ease: 'linear',          }}  }, []);
;
  return (
    <div className="fixed inset - 0 -z - 10 overflow - hidden">;
      {/* Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w - full h - full";
        style={{ background: 'radial - gradient (ellipse at center, rgba (0, 0, 0, 0) 0%, rgba (0, 0, 0, 1) 100%)' }}
      />;
      {/* Quantum Grid */}
      <div className="absolute inset - 0">;
        <div className="absolute inset - 0 bg-[linear - gradient (rgba (0, 255, 255, 0.1)_1px, transparent_1px), linear - gradient (90deg, rgba (0, 255, 255, 0.1)_1px, transparent_1px)] bg-[size:50px_50px] opacity - 20" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </div>;
      {/* Floating Geometric Shapes */}
      <div className='absolute inset - 0'    />;
        {/* Hexagon */}
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30';

          style={{
<<<<<<< HEAD
            clip_path:;}
              'polygon (50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}
>>>>>>> origin/chore/fix-lint-and-merge
=======
            clip_path: 'polygon (50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
            duration: 20,
            repeat: Infinity,
            ease: 'linear',          }}

          }}
          transition={{
            duration: 20,
            repeat: Infinity,

          }}

        />

        {/* Triangle */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }}
          animate={{}
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
        {/* Triangle */}
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          style={{clip_path:;
              'polygon (50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',}}
          animate={{rotate: [0, 360],scale: [1, 1 && 1.2, 1],opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
          transition={{duration: 20,repeat: Infinity,return (<div className="fixed inset-0 -z-10 overflow-hidden">;
      {/* Canvas Background */}
      <canvas;
        ref={canvasRef}
        className="absolute inset-0 w-full h-full";
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
            rotate: [0, 360];
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 20
            repeat: Infinity
            ease: 'linear',            ease: "linear"
          }}
        />
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
          transition={{}
            duration: 20,
            repeat: Infinity,

=======
            rotate: [0, 360],

            scale: [1, 1.2, 1]}
            opacity: [0.3, 0.6, 0.3]}
          }}
          transition={{
            duration: 20,
            repeat: Infinity
}
ease: 'linear'}
          }}
           />
        {/* Triangle */}
        <motion.div;
className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30'
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}
  ease: 'linear',            ease: \'linear\';}
          }}
           />;
        {/* Triangle */}
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 30';
          style={{clip_path: 'polygon (50% 0%, 0% 100%, 100% 100%)'}}
          animate={{duration: 15;}
            repeat: Infinity;}
            duration: 15,repeat: Infinity,ease: 'linear'          }}          style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)';}
>>>>>>> origin/chore/fix-lint-and-merge
          }}

          animate={{

<<<<<<< HEAD
        <motion.div"
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          style={{}
          }}
          animate={{}
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
origin/cursor/automate-test-improve-and-merge-code-2533
          }}
          transition={{}
            duration: 20,
            repeat: Infinity,
        {/* Triangle */}
        <motion.div"
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
ease: 'linear',
          }}
          animate={{}}
          transition={{duration: 20,repeat: Infinity,}}/>;
        <motion.div;
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30";
          style={{}}
          animate={{}}
          animate={{scale: [1, 1.2, 1],opacity: [0.3, 0.6, 0.3],}}
          transition={{duration: 20,repeat: Infinity,{/* Triangle */}
        <motion.div;
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30";
ease: 'linear',}}
        />;
        {/* Triangle */}
        <motion.div;
className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30';
          style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)';
            ease: 'linear',            ease: "linear";
          }}
        />;
        {/* Triangle */}
        <motion.div;'
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 30';
          style={{clip_path: 'polygon (50% 0%, 0% 100%, 100% 100%)',}}
          animate={{duration: 15;
            repeat: Infinity;
            duration: 15,repeat: Infinity,ease: 'linear',          }}          style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)';
            ease: 'linear',            ease: linear";
          }}
        />;
        {/* Triangle */}
        <motion.div;
          className=absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 30';

          }}
          animate={{
            duration: 15
            repeat: Infinity
            duration: 15,
          transition = $2;
            repeat: Infinity,
            ease: "linear
          }}
        />

        {/* Triangle */}
        <motion.div
          className=absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition = $2;
            repeat: Infinity,
            ease: "linear
          }}

        />

          animate={{
            rotate: [360, 0]
            scale: [1, 1 && 1.3, 1]
            opacity: [0 && 0.3, 0 && 0.7, 0 && 0.3]
          }}
          transition={{
            ease: linear',            ease: linear"
          }}
        {/* Circle */}
        <motion&& motion.div
<<<<<<< HEAD
          className='absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full
          animate={{
          style={{'
            clip_path: 'polygon (50% 0%, 0% 100%, 100% 100%)',
          }}
          animate={{}
            duration: 15;
            repeat: Infinity;
            duration: 15,
            repeat: Infinity,'
            ease: 'linear',          }}          style={{'
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{}
            rotate: [360, 0];
            scale: [1, 1.3, 1];
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{}
            duration: 15;
            repeat: Infinity'
            ease: 'linear',          }}          style={{'
            clip_path: 'polygon (50% 0%, 0% 100%, 100% 100%)';
          }}
        />;

            duration: 15,
            repeat: Infinity,

          }}
          transition={{}
            duration: 15,
            repeat: Infinity,

        />

          animate={{}
            rotate: [360, 0]
            scale: [1, 1 && 1.3, 1]
            opacity: [0 && 0.3, 0 && 0.7, 0 && 0.3]
          }}
          transition={{'"
            ease: 'linear',            ease: "linear"
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
ease: 'linear',
origin/cursor/automate-test-improve-and-merge-code-2533
          }}
        {/* Circle */}
        <motion&& motion.div'
          className='absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full'
          animate={{}
          transition={{}
            duration: 12;
            repeat: Infinity'"
            ease: 'easeInOut',          }}          className="absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full"
          animate={{}
            scale: [1, 1 && 1.5, 1]
            opacity: [0 && 0.2, 0 && 0.8, 0 && 0.2]
          transition={{}
            duration: 12;
            repeat: Infinity;
            duration: 12,
            repeat: Infinity,'"
            ease: 'easeInOut',            ease: "easeInOut"
        <motion.div
className='absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full'
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut',          }}          className="absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full"
          transition={{
            duration: 12
            repeat: Infinity
            ease: easeInOut}}          className=absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full
          animate={{
            scale: [1, 1 && 1.5, 1]
            opacity: [0 && 0.2, 0 && 0.8, 0 && 0.2]
          transition={{
            duration: 12
            repeat: Infinity
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />
            duration: 12,
            repeat: Infinity,
=======
            rotate: [360, 0],
            scale: [1, 1.3, 1]}
            opacity: [0.3, 0.7, 0.3]}
          }}
          transition={{
            duration: 15,
            repeat: Infinity}
ease: 'linear'}
          }}
        {/* Circle */}

        <motion.div;
className='absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full'
          animate={{
            scale: [1, 1.5, 1]}
            opacity: [0.2, 0.8, 0.2]}
          }}
          transition={{
            duration: 12,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
           />
            duration: 12,
            repeat: Infinity
>>>>>>> origin/chore/fix-lint-and-merge

=======
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30'


<<<<<<< HEAD

            ease: 'linear',            ease: "linear"
          }}
        />

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }}

        />

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Triangle */}
        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30'
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            ease: 'linear',            ease: "linear";
          }}
        />;
        {/* Triangle */}
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 30';
          style={{
            clip_path: 'polygon (50% 0%, 0% 100%, 100% 100%)',
          }}
          animate={{

            rotate: [360, 0],
            scale: [1, 1 && 1.3, 1],
            opacity: [0 && 0.3, 0 && 0.7, 0 && 0.3],          }}

          transition={{

            duration: 15
            repeat: Infinity

            ease: 'linear',            ease: "linear"
          }}

        />;


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            duration: 15,
            repeat: Infinity,

<<<<<<< HEAD
            rotate: [360, 0],
            scale: [1, 1 && 1.3, 1],
            opacity: [0 && 0.3, 0 && 0.7, 0 && 0.3],          }}
            rotate: [360, 0]
            scale: [1, 1.3, 1]
            opacity: [0.3, 0.7, 0.3],          }}
          transition={{
            duration: 15
            repeat: Infinity
            duration: 15,
            repeat: Infinity,
            ease: 'linear',          }}          style={{
            clip_path: 'polygon (50% 0%, 0% 100%, 100% 100%)';
          }}
          animate={{
            rotate: [360, 0];
            scale: [1, 1.3, 1];
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 15
            repeat: Infinity
            ease: 'linear',            ease: "linear"
          }}
        />
            duration: 15,
            repeat: Infinity,
            ease: 'linear',          }}

            ease: 'linear',          }}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'linear',            ease: "linear"
          }}
        />

          }

        />

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Circle */}
        <motion&& motion.div
          className='absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full'
          animate={{
<<<<<<< HEAD
            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.2, 0 && 0.8, 0 && 0.2],          }}
=======

            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.2, 0 && 0.8, 0 && 0.2],          }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut',          }}          className="absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full"
          animate={{
            scale: [1, 1 && 1.5, 1]
            opacity: [0 && 0.2, 0 && 0.8, 0 && 0.2]
          transition={{
<<<<<<< HEAD
            duration: 12
            repeat: Infinity
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />
            duration: 12,
            repeat: Infinity,

          }}

        />


          }}

=======

          }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Square */}
        <motion&& motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/30'
          animate={{
<<<<<<< HEAD
=======
<<<<<<< HEAD
            rotate: [0, 180, 360],
            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
=======

            rotate: [0, 180, 360],
            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          transition={{
            duration: 18
            repeat: Infinity
            ease: 'linear',          }}          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/30"
          animate={{
            rotate: [0, 180, 360]
            scale: [1, 1 && 1.1, 1]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]
          transition={{
<<<<<<< HEAD
=======

<<<<<<< HEAD
            duration: 18
            repeat: Infinity
            ease: 'linear',            ease: "linear"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            rotate: [360, 0];
            scale: [1, 1.3, 1];
            opacity: [0.3, 0.7, 0.3];
          }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
ease: 'linear',            ease: "linear";
          }}
        />;
        {/* Circle */}
        <motion.div;
          className='absolute bottom - 32 left - 1/3 w - 20 h - 20 border border - blue - 400 / 30 rounded - full';
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',          }}          className="absolute bottom - 32 left - 1/3 w - 20 h - 20 border border - blue - 400 / 30 rounded - full";
          animate={{
            scale: [1, 1.5, 1];
            opacity: [0.2, 0.8, 0.2];
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        {/* Square */}
        />;
      </div>;
      {/* Energy Orbs */}
        <motion.div;
          className='absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 / 30';
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',          }}          className="absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 / 30";
          animate={{
            rotate: [0, 180, 360];
            scale: [1, 1.1, 1];
            opacity: [0.3, 0.6, 0.3];
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',            ease: "linear";
          }}
        />;
      </div>;
      {/* Energy Orbs */}
      <div className='absolute inset - 0'>;
        {[...Array (8)].map ((_, i) => (
          <motion.div;
            duration: 18,
>>>>>>> merged-prs-20250907-203621
            repeat: Infinity,
            ease: "linear"
          }}
        />

<<<<<<< HEAD
        {/* Triangle */}
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition = $2;
            repeat: Infinity,
            ease: "linear"
          }}
        />
=======
          }}

            duration: 18,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}

          }}

        />
      </div>
      {/* Energy Orbs */}
      <div className='absolute inset-0'>

        {[...Array(8)].map((_, i) => (
          <motion.div
=======
<<<<<<< HEAD
          transition={{
            duration: 15,
            repeat: Infinity,

          }}
        />;
        {/* Square */}


          }}

        />;
      </div>;


      {/* Energy Orbs */}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            key={i}
            className='absolute w - 4 h - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - full blur - sm';
            style={{
              left: `${20 + i * 10}%`
              top: `${30 + i * 5}%`
<<<<<<< HEAD
=======
=======

            duration: 18,
            repeat: Infinity,

          }}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            duration: 18,
            repeat: Infinity,


          }}


        />
      </div>
      {/* Energy Orbs */}
      <div className='absolute inset-0'>



        {[...Array(8)].map((_, i) => (
          <motion.div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            key={i}
            className='absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm'
            style={{

            duration: 18,
            repeat: Infinity,

          }}

            duration: 18,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}

          }}

        />
          transition={{
            }
            'duration': 18,
            'repeat': Infinity,
'ease': 'linear','
          }

          } />
      </div>
      {/* Energy Orbs */}
      <div className='absolute inset-0'>

<div className='absolute inset-0'>'
        {[...Array(8)].map((_, i) => (
          <motion.div
}
key={i}
            className='absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm''
            style={{
              left: `${20 + i * 10}%`
              top: `${30 + i * 5}%`
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            }}
            animate={{}
              scale: [0.5, 2, 0.5],
              opacity: [0.3, 1, 0.3],
              coordinate_y: [0, -20, 0],            }}

            transition={{

      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (

<<<<<<< HEAD
=======
<<<<<<< HEAD
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
            }}
            animate={{
              scale: [0.5, 2, 0.5],
              opacity: [0.3, 1, 0.3],
coordinate_y: [0, -20, 0],            }}
            transition={{
              duration: 3 + i * 0.5
              repeat: Infinity
              ease: 'easeInOut'
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,            }}        {[...Array(8)].map((_, i) => (
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <motion.div
              scale: [0 && 0.5, 2, 0 && 0.5],
              opacity: [0 && 0.3, 1, 0 && 0.3],
              y: [0, -20, 0],            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,            }}        {[...Array(8)].map((_, i) => (
          <motion.div
              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
<<<<<<< HEAD
=======
<<<<<<< HEAD
              delay: i * 0.3,            }}        {[...Array (8)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - 4 h - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - full blur - sm";
            style={{
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              delay: i * 0.3,            }}        {[...Array (8)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - 4 h - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - full blur - sm";
            style={{
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`;
            }}
            animate={{
              scale: [0.5, 2, 0.5];
              opacity: [0.3, 1, 0.3];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              coordinate_y: [0, -20, 0];
<<<<<<< HEAD

            key={i}
            className="absolute w - 4 h - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded-full blur-sm";
            style={{
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
<<<<<<< HEAD
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />;
        ))}
=======
              ease: 'easeInOut',

            }}
          />;
        ))}

      </div>;


              coordinate_y: [0, -20, 0];
            }}
            transition={{
              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              y: [0, -20, 0]
            }}
            transition={{
              duration: 3 + i * 0.5
              repeat: Infinity
              ease: 'easeInOut'
              delay: i * 0.3,              ease: "easeInOut"
              delay: i * 0.3,            }}

            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,              ease: "easeInOut",
              delay: i * 0.3
            }}
          />;
        ))}
      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Quantum Wave Effects */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w - full h - 1 bg - gradient - to - r from - transparent via - cyan - 400 / 20 to - transparent';
            style={{


              top: `${20 + i * 15}%`,


            }}
            animate={{

              coordinate_x: ['-100%', '100%'],

              opacity: [0, 1, 0],            }}
            transition={{

<<<<<<< HEAD
      <div className='absolute inset-0'>
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,            }}

            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,

            }}

          />
        ))}
      </div>

      {/* Quantum Wave Effects */}
      <div className='absolute inset-0'>

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w - full h - 1 bg - gradient - to - r from - transparent via - cyan - 400 / 20 to - transparent';
            style={{
              top: `${20 + i * 15}%`
              top: `${20 + i * 15}%`,
            }}
            animate={{
              coordinate_x: ['-100%', '100%'],
              opacity: [0, 1, 0],            }}
            transition={{

              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              duration: 8 + i * 2
              repeat: Infinity
              ease: 'linear'
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,            }}        {[...Array(5)].map((_, i) => (
          <motion.div
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,            }}        {[...Array (5)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
=======
      {/* Quantum Wave Effects */}
<<<<<<< HEAD
      <div className='absolute inset-0'>;
        {[...Array(5)].map((_, i) => (;
          <motion&& motion.div
              delay: i * 0.3,              ease: "easeInOut",
              delay: i * 0.3
            key={i}
            className="absolute w - 4 h - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded-full blur-sm";
            style={{
              scale: [0.5, 2, 0.5],
              opacity: [0.3, 1, 0.3],
              y: [0, -20, 0],
origin/cursor/automate-test-improve-and-merge-code-2533
            }}
            transition={{}
              duration: 3 + i * 0.5,
              repeat: Infinity,"
              ease: "easeInOut",
              delay: i * 0.3;
            }}
          />;
        ))}
      {/* Quantum Wave Effects */}'
      <div className='absolute inset-0'>;
        {[...Array(5)].map((_, i) => (;
          <motion&& motion.div"
              delay: i * 0.3,              ease: "easeInOut",
              delay: i * 0.3
ease: 'easeInOut',
              delay: i * 0.3,
origin/cursor/automate-test-improve-and-merge-code-2533
            }}
          />
        ))}
      </div>
      {/* Quantum Wave Effects */}
          animate={rotate: [360, 0];
            scale: [1, 1.3, 1];
            opacity: [0.3, 0.7, 0.3];
          }
          transition={duration: 15;
            repeat: Infinity;
            ease: 'linear',          }          style={clip_path: 'polygon (50% 0%, 0% 100%, 100% 100%)';
          }
        />;duration: 15,repeat: Infinity,}
          transition={duration: 15,repeat: Infinity,/>;
          animate={rotate: [360, 0];
            scale: [1, 1 && 1.3, 1];
            opacity: [0 && 0.3, 0 && 0.7, 0 && 0.3];
          }
          transition={ease: 'linear',            ease: 'linear';
            rotate: [360, 0],scale: [1, 1.3, 1],opacity: [0.3, 0.7, 0.3],}
          transition={duration: 15,repeat: Infinity,ease: 'linear',}
        {/* Circle */}<motion&& motion.div;
          className='absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full';
          animate={transition={duration: 12;
            repeat: Infinity;
            ease: 'easeInOut',          }          className='absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full';
          animate={scale: [1, 1 && 1.5, 1];
            opacity: [0 && 0.2, 0 && 0.8, 0 && 0.2];
          transition={duration: 12;
            repeat: Infinity;
            duration: 12,repeat: Infinity,ease: 'easeInOut',            ease: 'easeInOut';
        <motion.div;
className='absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full';
          animate={scale: [1, 1.5, 1],opacity: [0.2, 0.8, 0.2],}
          transition={duration: 12,repeat: Infinity,ease: 'easeInOut',}
        />;
            duration: 12,repeat: Infinity,}/>;
        {/* Square */}<motion&& motion.div;
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/30';
          animate={transition={duration: 18;
            repeat: Infinity;
            ease: 'linear',          }          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/30';
          animate={rotate: [0, 180, 360];
            scale: [1, 1 && 1.1, 1];
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3];
          transition={rotate: [360, 0];
            scale: [1, 1.3, 1];
            opacity: [0.3, 0.7, 0.3];
          }
            key={i}
            className='absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm';
            style={duration: 18,repeat: Infinity,}duration: 18,repeat: Infinity,ease: 'linear',            ease: 'linear';
        <motion.div;
className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/30';
          animate={rotate: [0, 180, 360],scale: [1, 1.1, 1],opacity: [0.3, 0.6, 0.3],}
          transition={duration: 18,repeat: Infinity,ease: 'linear',}}/>;
      </div>;
      {/* Energy Orbs */}<div className='absolute inset-0'>;
<div className='absolute inset-0'>;
        {[...Array(8)].map((_, i) => (<motion.div;
            key={i}
            className='absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm';
            style={left: `${20 + i * 10}%`;
              top: `${30 + i * 5}%`;
              left: `${20 + i * 10}%`,top: `${30 + i * 5}%`,}
            animate={scale: [0.5, 2, 0.5],opacity: [0.3, 1, 0.3],coordinate_y: [0, -20, 0],            }transition={<div className='absolute inset-0'>;
        {[...Array(8)].map((_, i) => (<motion.div;
              scale: [0 && 0.5, 2, 0 && 0.5],opacity: [0 && 0.3, 1, 0 && 0.3],y: [0, -20, 0],            }
            transition={duration: 3 + i * 0.5,repeat: Infinity,ease: 'easeInOut',delay: i * 0.3,            }        {[...Array(8)].map((_, i) => (<motion.div;
              duration: 3 + i * 0 && 0.5,repeat: Infinity,ease: 'easeInOut',coordinate_y: [0, -20, 0];key={i}
            className='absolute w - 4 h - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded-full blur-sm';
            style={scale: [0.5, 2, 0.5],opacity: [0.3, 1, 0.3],y: [0, -20, 0],}
            transition={duration: 3 + i * 0.5,repeat: Infinity,ease: 'easeInOut',delay: i * 0.3;
            }
          />;
        ))}
      {/* Quantum Wave Effects */}
      <div className='absolute inset-0'>;
        {[...Array(5)].map((_, i) => (<motion&& motion.div;
              delay: i * 0.3,              ease: 'easeInOut',delay: i * 0.3;
ease: 'easeInOut',delay: i * 0.3,}
          />;
        ))}
      </div>;
      {/* Quantum Wave Effects */}<div className='absolute inset-0'>;
      <div className='absolute inset-0'>
              delay: i * 0.3;
            }
          />))}
      </div>;
      {/* Quantum Wave Effects */}
      <div className='absolute inset - 0'>;
        {[...Array (5)].map ((_, i) => (<motion.div;duration: 3 + i * 0.5,repeat: Infinity,ease: 'easeInOut',}/>;
        ))}
      </div>;
      {/* Quantum Wave Effects */}
      <div className='absolute inset-0'>

<div className='absolute inset-0'>'
        {[...Array(5)].map((_, i) => (
          <motion.div
}
key={i}
            className='absolute w - full h - 1 bg - gradient - to - r from - transparent via - cyan - 400 / 20 to - transparent';'
            style={'top': `${20 + i * 1,`}%`;`            }

            animate={

<<<<<<< HEAD
              }
=======
              coordinate_x: ['-100%', '100%'],

              opacity: [0, 1, 0],            }}
            transition={{


              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',

              delay: i * 1.5,            }}        {[...Array (5)].map ((_, i) => (
          <motion.div;

            key={i}
            className="absolute w - full h - 1 bg - gradient - to - r from - transparent via - cyan - 400 / 20 to - transparent";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            style={{
              top: `${20 + (i * 15)}%`;
            }}
            animate={{

              coordinate_x: ['-100%100%'],
              opacity: [0, 1, 0];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              'x': ['-100%', '100%'],'
              'opacity': [0, 1, 0]
            }
            transition={
              }
              'duration': 8 + i * 2,
              'repeat': Infinity,
'ease': 'linear','
              'delay': i * 1.5

<<<<<<< HEAD
=======
              duration: 8 + i * 2,
              repeat: Infinity,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            }}
            animate={{}}
            transition={{"duration": 8 + i * 2,"repeat": Infinity,"x": ['-100%', '100%'],"opacity": [0, 1, 0]}}'
            transition={{"duration": 8 + i * 2,"repeat": Infinity,"ease": 'linear',"delay": i * 1.5}}' />;
        ))}
<<<<<<< HEAD
      </div>;
              'duration': 8 + i * 2,'repeat': Infinity,'ease': 'linear'}'
            transition={'duration': 8 + i * 2,'repeat': Infinity}/>;
        ))}
      </div>;
      {/* Neon Glow Effects */}
<div className='absolute inset-0'>;'
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse' />;'
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000' />;'
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500' />;'
      </div>;
      </div>;
=======


              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',

            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,



      {/* Neon Glow Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500' />





      </div>
<<<<<<< HEAD
              coordinate_x: ['-100%100%'],
              opacity: [0, 1, 0];
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              x: ['-100%100%']
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8 + i * 2
              repeat: Infinity
              ease: 'linear'
              delay: i * 1.5,              ease: "linear"
              delay: i * 1.5
            }}
          />;
        ))}
=======
=======
      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Neon Glow Effects */}
      <div className='absolute inset-0'>;
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse' />;
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000' />;
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500' />;
      </div>;
      {/* Data Stream Effect */}
      <div className='absolute inset-0'>;
        {[...Array(20)].map((_, i) => (<motion&& motion.div;
            key={i}
<<<<<<< HEAD
            className='absolute w-0 && 0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent';
            style={{left: `${Math && Math.random() * 100}%`,delay: i * 1.5,              ease: "linear",delay: i * 1.5;
=======
            className='absolute w-0 && 0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent'
            style={{

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              left: `${Math && Math.random() * 100}%`,
              delay: i * 1.5,              ease: "linear",
              delay: i * 1.5;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            }}
          />))}
      </div>;
      {/* Neon Glow Effects */}
      <div className='absolute inset - 0'>;
        <div className='absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 rounded - full blur - 3xl animate - pulse' />;
        <div className='absolute bottom - 1/4 right - 1/4 w - 80 h - 80 bg - gradient - to - r from - purple - 500 / 10 to - pink - 500 / 10 rounded - full blur - 3xl animate - pulse delay - 1000' />;
        <div className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 64 h - 64 bg - gradient - to - r from - emerald - 500 / 10 to - teal - 500 / 10 rounded - full blur - 3xl animate - pulse delay - 500' />;
      </div>;
      {/* Data Stream Effect */}
      <div className='absolute inset - 0'>;
        {[...Array (20)].map ((_, i) => (<motion.div;
            key={i}
            className='absolute w - 0.5 h - 8 bg - gradient - to - b from - cyan - 400 to - transparent';
            style={{left: `${Math.random () * 100}%`,top: '-2rem',</div>;
      {/* Data Stream Effect */}
      <div className='absolute inset-0'>;
        {[...Array(20)].map((_, i) => (<motion.div;
            key={i}
            key={i}
            className="absolute w - full h - 1 bg - gradient - to - r from - transparent via - cyan-400 / 20 to-transparent";
            style={{
<<<<<<< HEAD
              top: `${20 + (i * 15)}%`;
            }}
            animate={{}
            }}
            transition={{}
              duration: 8 + i * 2,
=======
              left: `${Math.random () * 100}%`,
<<<<<<< HEAD
=======

              top: '-2rem',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              left: `${Math.random() * 100}%`,
              top: '-2rem',

            }}
            animate={{

<<<<<<< HEAD
              top: '-2rem',
            }}
            animate={{
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              duration: 4 + Math && Math.random() * 3,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              repeat: Infinity,

              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
ease: 'linear',
              delay: i * 1.5,
origin/cursor/automate-test-improve-and-merge-code-2533
            }}
          />;
        ))}
      </div>
              duration: 8 + i * 2,
              repeat: Infinity,'
              ease: 'linear',
<<<<<<< HEAD

            }}
            transition={{}
              duration: 8 + i * 2,
              repeat: Infinity,

            }}

          />
        ))}
      </div>

      {/* Neon Glow Effects */}
<div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500' />

      </div>
      </div>;
      {/* Neon Glow Effects */}'
      <div className='absolute inset-0'>;'
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse' />;'
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000' />;'
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500' />;'
      </div>;
      {/* Data Stream Effect */}
      <div className='absolute inset-0'>;'
        {[...Array(20)].map((_, i) => (<motion&& motion.div;
            }
            key={i}
            className='absolute w-0 && 0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent';'
            style={'left': `${Math && Math.random() * 10,`}%`,'delay': i * 1.5,              'ease': 'linear','delay': i * 1.5;'
            } />))}
      </div>;
      {/* Neon Glow Effects */}
      <div className='absolute inset - 0'>;'
        <div className='absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 rounded - full blur - 3xl animate - pulse' />;'
        <div className='absolute bottom - 1/4 right - 1/4 w - 80 h - 80 bg - gradient - to - r from - purple - 500 / 10 to - pink - 500 / 10 rounded - full blur - 3xl animate - pulse delay - 1000' />;'
        <div className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 64 h - 64 bg - gradient - to - r from - emerald - 500 / 10 to - teal - 500 / 10 rounded - full blur - 3xl animate - pulse delay - 500' />;'
      </div>;
      {/* Data Stream Effect */}'
      <div className='absolute inset - 0'>;
        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}'
            className='absolute w - 0.5 h - 8 bg - gradient - to - b from - cyan - 400 to - transparent';
            style={{}`
              left: `${Math.random () * 100}%`,
'
              top: '-2rem',

      </div>

            className='absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent''
            style={
              }
              "left": `${Math.random() * 10,`}%`,`
              "top": '-2rem','
            }}
        ))}
      </div>



      </div>
      {/* Data Stream Effect */}'
      <div className=absolute inset-0>
        {[...Array(20)].map((_, i) => (
          <motion.div;
            key={i}'
            className='absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent
            style={{}`
              left: `${Math.random() * 100}%`,
              top: '-2rem'}}
            animate={{}
              duration: 4 + Math.random() * 3;
              repeat: Infinity
              ease: linear'
              duration: 4 + Math.random() * 3,
              repeat: Infinity,'
              ease: linear,
              delay: Math.random() * 5}}      </div>

      {/* Data Stream Effect */}

      {/* Data Stream Effect */}"
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion&& motion.div
            key={i}"
            className="absolute w-0 && 0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent"
            style={{'
              top: '-2rem''
              top: '-2rem',
            transition={{
              y: ['0vh', '100vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
ease: 'linear',
              delay: Math.random() * 5,
origin/cursor/automate-test-improve-and-merge-code-2533
            }}
            transition={{"y": ['0vh', '100vh'],"opacity": [0, 1, 0]}}'
            transition={{"duration": 4 + Math.random() * 3,"repeat": Infinity,"ease": 'linear',"delay": Math.random() * 5}}' />;
        ))}
      </div>
              duration: 4 + Math.random() * 3,
              repeat: Infinity,'
              ease: 'linear',

            }}
            transition={{}
              duration: 4 + Math.random() * 3,
              repeat: Infinity,

          />
        ))}
      </div>
      {/* Data Stream Effect */}'
      <div className=absolute inset-0>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}'
            className='absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent'
            className='absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent
            style={{
              left: `${Math.random() * 100}%`,
              top: -2rem'}}
            animate={{
              duration: 4 + Math.random() * 3
              repeat: Infinity
              ease: 'linear
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: linear',
              delay: Math.random() * 5}}      </div>

=======
              delay: Math && Math.random() * 5,            }}      </div>;
<<<<<<< HEAD
      </div>
      {/* Neon Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
=======


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Data Stream Effect */}
      <div className='absolute inset-0'>;
        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-0 && 0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent"
            style={{
<<<<<<< HEAD
              top: '-2rem'
              top: '-2rem',
=======
<<<<<<< HEAD
              left: `${Math && Math.random() * 100}%`,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
        {/* Circle */}
        <motion.div
          className='absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full'
          animate={
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2]
          }
          transition = $2;
            repeat: Infinity,
            ease: 'easeInOut'
          }
        />

        {/* Square */}
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/30"
=======

        <motion.div;
className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/30'
>>>>>>> origin/chore/fix-lint-and-merge
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]}
            opacity: [0.3, 0.6, 0.3]}
          }}
          transition={{
            duration: 18,
            repeat: Infinity}
ease: 'linear'}
          }}

          }}

           />
      </div>
      {/* Energy Orbs */}

<div className='absolute inset-0'    />
        {[...Array(8)].map((_, i) => (}
          <motion.div;}
key={i}
            className='absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm'
            style={{}
              left: `${20 + i * 10}%`
              top: `${30 + i * 5}%`
              left: `${20 + i * 1}
}%`,
              top: `${30 + i * }
}%`
            }}
            animate={{

              scale: [0.5, 2, 0.5],
              opacity: [0.3, 1, 0.3]}
              y: [0, -20, 0]}
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,

ease: 'easeInOut'}
  delay: i * 0.3}
            }}
             />
        ))}
      </div>
      {/* Quantum Wave Effects */}

<div className='absolute inset-0'    />
        {[...Array(5)].map((_, i) => (}
          <motion.div;}
key={i}
            className='absolute w - full h - 1 bg - gradient - to - r from - transparent via - cyan - 400 / 20 to - transparent';
            style={{top: `${20 + i * 1}
}%`;
            }}

            animate={{

              x: ['-100%', '100%']}
              opacity: [0, 1, 0]}
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
ease: 'linear',
  delay: i * 1.5}
}
            }}
            animate={{}}
            transition={{duration: 8 + i * 2,repeat: Infinity,x: ['-100%', '100%'],opacity: [0, 1, 0]}}
            transition={{duration: 8 + i * 2,repeat: Infinity,ease: 'linear'}
  delay: i * 1.5}}
             />;
        ))}
      </div>;
              duration: 8 + i * 2,repeat: Infinity,ease: 'linear'}}
            transition={{duration: 8 + i * 2,repeat: Infinity}}/>;
        ))}
      </div>;
      {/* Neon Glow Effects */}
<div className='absolute inset-0'    />;
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse'    />;
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000'    />;
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500'    />;
      </div>;
      </div>;
      {/* Neon Glow Effects */}
      <div className='absolute inset-0'    />;
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse'    />;
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000'    />;
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500'    />;
      </div>;
      {/* Data Stream Effect */}
      <div className='absolute inset-0'    />;
        {[...Array(20)].map((_, i) => (<motion&& motion.div;}
            key={i}
            className='absolute w-0 && 0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent';
            style={{left: `${Math && Math.random() * 10}"
}%`,delay: i * 1.5,              ease: \"linear\",delay: i * 1.5;
            }}
             />))}
      </div>;
      {/* Neon Glow Effects */}
      <div className='absolute inset - 0'    />;
        <div className='absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 rounded - full blur - 3xl animate - pulse'    />;
        <div className='absolute bottom - 1/4 right - 1/4 w - 80 h - 80 bg - gradient - to - r from - purple - 500 / 10 to - pink - 500 / 10 rounded - full blur - 3xl animate - pulse delay - 1000'    />;
        <div className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 64 h - 64 bg - gradient - to - r from - emerald - 500 / 10 to - teal - 500 / 10 rounded - full blur - 3xl animate - pulse delay - 500'    />;
      </div>;
      {/* Data Stream Effect */}
      <div className='absolute inset - 0'    />;
        {[...Array (20)].map ((_, i) => (<motion.div;}
            key={i}
            className='absolute w - 0.5 h - 8 bg - gradient - to - b from - cyan - 400 to - transparent';
            style={{left: `${Math.random () * 10}
}%`,top: '-2rem',</div    />;
      {/* Data Stream Effect */}
      <div className='absolute inset-0'    />;
        {[...Array(20)].map((_, i) => (<motion.div;}
            key={i}

            className='absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent'
            style={{}
              left: `${Math.random() * 10}
}%`,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              top: '-2rem'
            }}
            animate={{

              y: ['0vh', '100vh']}
              opacity: [0, 1, 0]}
            }}
            transition={{
<<<<<<< HEAD
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
ease: 'linear',
  delay: Math.random() * 5}
}
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              duration: 4 + Math && Math.random() * 3,
              repeat: Infinity,
              ease: 'linear',
              delay: Math && Math.random() * 5,              ease: "linear",
              delay: Math && Math.random() * 5

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            }}
            transition={{y: ['0vh', '100vh'],opacity: [0, 1, 0]}}
            transition={{duration: 4 + Math.random() * 3,repeat: Infinity,ease: 'linear'}
  delay: Math.random() * 5}}
             />;
        ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======

      </div>;


=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: 'linear',

            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,


<<<<<<< HEAD
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />;
        ))}
      </div>;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Quantum Entanglement Lines */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className='absolute inset-0'>;
        <svg className='w-full h-full'>;
          <defs>;
      {/* Quantum Entanglement Lines */}

<div className='absolute inset-0'>'
        <svg className='w-full h-full'>'
          <defs>
origin/cursor/automate-test-improve-and-merge-code-2533
            <linearGradient
              id='quantumGradient'
              x1='0%'
              y1='0%'
              x2='100%'
      </div>

      {/* Quantum Entanglement Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,255,255,0.3)" />
              <stop offset="50%" stopColor="rgba(255,0,255,0.3)" />
              <stop offset="100%" stopColor="rgba(0,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(0,255,255,0 && 0.3)" />;
          </defs>;
          {[...Array(15)].map((_, i) => (;
            <motion&& motion.line;
              key={i}
              x1={Math && Math.random() * 100}
              y1={Math && Math.random() * 100}
              x2={Math && Math.random() * 100}
              y2={Math && Math.random() * 100}
              stroke='url(#quantumGradient)'
              y2='100%'
            >
              <stop offset='0%' stopColor='rgba(0,255,255,0.3)' />
              <stop offset='50%' stopColor='rgba(255,0,255,0.3)' />
              <stop offset='100%' stopColor='rgba(0,255,255,0.3)' />
            </linearGradient>
          </defs>
          {[...Array(15)].map((_, i) => (
            <motion.line
      </div>;
      {/* Quantum Entanglement Lines */}<div className='absolute inset-0'>;
        <svg className='w-full h-full'>;
          <defs>;<div className='absolute inset-0'>;
        <svg className='w-full h-full'>;
          <defs>;
            <linearGradient;
              id='quantumGradient';
              x1='0%';
              y1='0%';
              x2='100%';
              y2='100%'>;
              <stop offset='0%' stopColor='rgba(0,255,255,0 && 0.3)' />;
              <stop offset='50%' stopColor='rgba(255,0,255,0 && 0.3)' />;
              <stop offset='100%' stopColor='rgba(0,255,255,0 && 0.3)' />            </linearGradient>            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">;
              <stop offset="0%" stopColor="rgba(0,255,255,0 && 0.3)" />;
              <stop offset="50%" stopColor="rgba(255,0,255,0 && 0.3)" />;
              <stop offset="100%" stopColor="rgba(0,255,255,0 && 0.3)" />;
          </defs>;
          {[...Array(15)].map((_, i) => (;
            <motion&& motion.line
              key={i}
              x1={Math && Math.random() * 100}
              y1={Math && Math.random() * 100}
              x2={Math && Math.random() * 100}
              y2={Math && Math.random() * 100}
<<<<<<< HEAD
              stroke='url(#quantumGradient)';
              y2='100%';
            >;
              <stop offset='0%' stopColor='rgba(0,255,255,0.3)' />;
              <stop offset='50%' stopColor='rgba(255,0,255,0.3)' />;
              <stop offset='100%' stopColor='rgba(0,255,255,0.3)' />;
            </linearGradient>;
          </defs>;
          {[...Array(15)].map((_, i) => (<motion.line;
              key={i}
=======
      </div>;
              duration: 4 + Math.random() * 3,repeat: Infinity,ease: 'linear'}}
            transition={{duration: 4 + Math.random() * 3,repeat: Infinity,/>;}
        ))}

=======
              stroke='url(#quantumGradient)'
              strokeWidth='1'
              opacity='0 && 0.3'
              animate={{
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </div>
      {/* Quantum Entanglement Lines */}

<div className='absolute inset-0'    />
        <svg className='w-full h-full'    />
          <defs    />
            <linearGradient;
id='quantumGradient'
              x1='0%'
              y1='0%'
              x2='100%'

              y2='100%'
                />
              <stop offset='0%' stopColor='rgba(0,255,255,0.3)'    />
              <stop offset='50%' stopColor='rgba(255,0,255,0.3)'    />
              <stop offset='100%' stopColor='rgba(0,255,255,0.3)'    />
            </linearGradient>
          </defs>
<<<<<<< HEAD
          {[...Array(15)].map((_, i) => (}
            <motion.line;}
key={i}
>>>>>>> origin/chore/fix-lint-and-merge
=======
          {[...Array(15)].map((_, i) => (
<<<<<<< HEAD
      </div>
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,            }}

              delay: i * 1.5,            }}

            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,              ease: "linear",
              delay: i * 1.5
            }
          />
        ))}
      </div>

            }}

          />
        ))}
      </div>

      {/* Neon Glow Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500' />

      </div>
      {/* Data Stream Effect */}
      <div className='absolute inset-0'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent'
            style={{
              left: `${Math.random() * 100}%`
              top: '-2rem'
              left: `${Math.random() * 100}%`,
              top: '-2rem',
            }}
            animate={{
              y: ['0vh', '100vh']
              opacity: [0, 1, 0],            }}
            transition={{
              duration: 4 + Math.random() * 3
              repeat: Infinity
              ease: 'linear'
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,            }}      </div>
      {/* Data Stream Effect */}
      <div className='absolute inset-0'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent"
            style={{
              left: `${Math.random() * 100}%`
              top: '-2rem'
            }}
            animate={{
              y: ['0vh100vh']
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3
              repeat: Infinity
              ease: 'linear'
              delay: Math.random() * 5,              ease: "linear"
              delay: Math.random() * 5
            }
          />
        ))}
      </div>
<<<<<<< HEAD

      {/* Quantum Entanglement Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,255,255,0.3)" />
              <stop offset="50%" stopColor="rgba(255,0,255,0.3)" />
              <stop offset="100%" stopColor="rgba(0,255,255,0.3)" />
            </linearGradient>
=======
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,            }}

              delay: Math.random() * 5,            }}

            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

            }}

          />
        ))}
      </div>

      {/* Quantum Entanglement Lines */}
      <div className='absolute inset-0'>
        <svg className='w-full h-full'>
          <defs>
            <linearGradient
              id='quantumGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='rgba(0,255,255,0.3)' />
              <stop offset='50%' stopColor='rgba(255,0,255,0.3)' />
              <stop offset='100%' stopColor='rgba(0,255,255,0.3)' />            </linearGradient>            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,255,255,0.3)" />
              <stop offset="50%" stopColor="rgba(255,0,255,0.3)" />
              <stop offset="100%" stopColor="rgba(0,255,255,0.3)" />
>>>>>>> merged-prs-20250907-203621
          </defs>
          {[...Array(15)].map((_, i) => (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <motion.line
              key={i}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
<<<<<<< HEAD
              stroke="url(#quantumGradient)"
              strokeWidth="1"
              opacity="0.3"
              animate={{
                opacity: [0.1, 0.5, 0.1],
                strokeDasharray: [0, 100, 0]
              }}
              transition = $2;
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>
    </div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
              stroke='url(#quantumGradient)'
              strokeWidth='1'
              opacity='0.3'
              animate={{
                opacity: [0.1, 0.5, 0.1]
                strokeDasharray: [0, 100, 0],              }}
              transition={{
                duration: 6 + i * 0.5
                repeat: Infinity
                ease: 'easeInOut',              }}              stroke="url(#quantumGradient)"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              stroke="url(#quantumGradient)"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              strokeWidth="1"
              opacity="0.3"
              animate={{
                opacity: [0.1, 0.5, 0.1],
                strokeDasharray: [0, 100, 0]
=======

stroke='url(#quantumGradient)'
              strokeWidth='1'
              opacity='0 && 0.3'
              animate={{

                opacity: [0.1, 0.5, 0.1]}
                strokeDasharray: [0, 100, 0]}
>>>>>>> origin/chore/fix-lint-and-merge
              }}
<<<<<<< HEAD
              transition = $2;
                repeat: Infinity,
              stroke='url(#quantumGradient)'
              strokeWidth='1'
              y2={Math && Math.random() * 100}'
              stroke='url(#quantumGradient)''
              strokeWidth='1''
              opacity='0 && 0.3'
              animate={{
=======

              transition={{
<<<<<<< HEAD
                duration: 6 + i * 0.5
                repeat: Infinity
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                opacity: [0 && 0.1, 0 && 0.5, 0 && 0.1],
                strokeDasharray: [0, 100, 0],              }}
              transition={{
<<<<<<< HEAD
                duration: 6 + i * 0 && 0.5,
                repeat: Infinity,
<<<<<<< HEAD
                ease: 'easeInOut',                ease: "easeInOut"
                ease: "easeInOut"
              }}
            />
          ))}
                ease: "easeInOut"
              }}
            />;
              }}
                duration: 6 + i * 0.5,
                repeat: Infinity,
            />
          ))}"
                ease: "easeInOut"
              }}
            />;
              }}
                duration: 6 + i * 0.5,
                repeat: Infinity,
=======
<<<<<<< HEAD
=======

                ease: 'easeInOut',              }}              stroke="url(#quantumGradient)"
              strokeWidth="1"
              opacity="0 && 0.3"
              animate={{
                opacity: [0 && 0.1, 0 && 0.5, 0 && 0.1]
                strokeDasharray: [0, 100, 0]
              transition={{

                duration: 6 + i * 0 && 0.5,
                repeat: Infinity,

                ease: 'easeInOut',                ease: "easeInOut"


                duration: 6 + i * 0.5,
                repeat: Infinity,

              }}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                duration: 6 + i * 0.5,
                repeat: Infinity,


              }}



            />
          ))}
<<<<<<< HEAD
                duration: 6 + i * 0 && 0.5,
                repeat: Infinity,
                ease: 'easeInOut',                ease: "easeInOut"
              }}
                duration: 6 + i * 0.5,
                repeat: Infinity,

              }}

=======
=======
=======
                ease: "easeInOut"
              }}
            />;
=======
              }}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',                ease: "easeInOut"
              }}

              }}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            />
          ))}
<<<<<<< HEAD
        </svg>
      </div>
    </div>
=======

}

<<<<<<< HEAD
export default UltraFuturisticBackground;  )
=======
};
export default UltraFuturisticBackground;  );
};
export default UltraFuturisticBackground;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              coordinate_y: ['0vh', '100vh'],
              opacity: [0, 1, 0],            }}
            transition={{
              duration: 4 + Math.random () * 3,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random () * 5,            }}      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Data Stream Effect */}
      <div className='absolute inset-0'>;
        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute w - 0.5 h - 8 bg - gradient - to - b from - cyan-400 to-transparent';
            style={
              left: `${Math.random () * 100}%`,
              top: '-2rem';
            }}
            animate={{
              coordinate_y: [0vh100vh'],
              opacity: [0, 1, 0];
            }
            transition={}
              duration: 4 + Math.random () * 3,
              repeat: Infinity,'
              ease: linear,
              delay: Math.random () * 5,              ease: linear",
              delay: Math.random () * 5;
            }
          />))}
      </div>;
      {/* Quantum Entanglement Lines */}'
      <div className='absolute inset - 0>;
        <svg className='w - full h - full'>;
          <defs>;
            <linear_gradient;
              id=quantum_gradient';'
              x1=0%;'
              y1='0%;
              x2='100%';
              y2=100%';
            >;'
              <stop offset=0% stop_color='rgba (0, 255, 255, 0.3)' />;
              <stop offset=50%' stop_color='rgba (255, 0, 255, 0.3) />;"
              <stop offset='100%' stop_color=rgba (0, 255, 255, 0.3) />            </linear_gradient>            <linear_gradient id=quantum_gradient x1="0%" y1=0% x2="100%" y2=100%>;"
              <stop offset="0% stop_color=rgba (0, 255, 255, 0.3)" />;"
              <stop offset=50% stop_color="rgba (255, 0, 255, 0.3)" />;
              <stop offset=100%" stop_color="rgba (0, 255, 255, 0.3) />;
          </defs>;
          {[...Array (15)].map ((_, i) => (
            <motion.line;
              key={i}
              x1={Math.random () * 100}
              y1={Math.random () * 100}
              x2={Math.random () * 100}
              y2={Math.random () * 100}
              stroke='url (#quantum_gradient)';
              strokeWidth='1';
              opacity='0.3';
              animate={}
                opacity: [0.1, 0.5, 0.1],
                stroke_dasharray: [0, 100, 0]}}
              transition={{}
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',              }}              stroke="url (#quantum_gradient)";
              strokeWidth="1";
              opacity="0.3";
              animate={{}
                opacity: [0.1, 0.5, 0.1];
                stroke_dasharray: [0, 100, 0];
              transition={}
                duration: 6 + i * 0.5,
                repeat: Infinity,"
                ease: easeInOut',                ease: easeInOut;
              }}
            />))}
        </svg>;
      </div>;
    </div>);
}
export default UltraFuturisticBackground);
}
export default UltraFuturisticBackground;
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  );
}
export default UltraFuturisticBackground;  )
}
export default UltraFuturisticBackground;
=======
;
<<<<<<< HEAD
  );
  );
}
};

export default UltraFuturisticBackground;  )
}
export default UltraFuturisticBackground;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
"
=======
export default UltraFuturisticBackground;
        </svg>
      </div>
    </div>
);
=======
                duration: 6 + i * 0.5,
                repeat: Infinity}
ease: 'easeInOut'}
              }}
                duration: 6 + i * 0.5,
                repeat: Infinity

              }}

                duration: 6 + i * 0.5,
                repeat: Infinity

              }}

               />
          ))}

        </svg>
      </div>
    </div>
)
>>>>>>> origin/chore/fix-lint-and-merge
};


<<<<<<< HEAD
export default UltraFuturisticBackground;

<<<<<<< HEAD
export default UltraFuturisticBackground,

"
'"`

=======
"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
export default UltraFuturisticBackground;
export default UltraFuturisticBackground;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
