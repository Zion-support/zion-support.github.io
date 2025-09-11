
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
=======
==============

  children,;

}: UltraFuturisticBackground2028Props) {  const canvasRef = useRef<HTMLCanvasElement>(null);import React, { useEffect, useRef } from 'react';



import { motion } from 'framer-motion';
interface UltraFuturisticBackground2028Props {;
  children: React && React.ReactNode;
}

  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;

    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;
    canvas && canvas.width = window && window.innerWidth;
    canvas && canvas.height = window && window.innerHeight;
    // Particle system;
    const particles: Array<{;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      x: number;
      y: number;
  /* Floating Circles */;
}<motion.div;
export default /**
 * UltraFuturisticBackground2028 - Function description
 */
function UltraFuturisticBackground2028() {  const canvas_ref = useRef < HTMLCanvasElement>(null);import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2028Props {
  children: React.ReactNode;
}
export default /**
 * UltraFuturisticBackground2028 - Function description
 */
function UltraFuturisticBackground2028() {
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
=======export default function UltraFuturisticBackground2028({ children }: UltraFuturisticBackground2028Props) {

  useEffect(() => {;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];
    // Particle system
    const particles: Array<{
      x: number,
      y: number,
=======
=======
      x: number,
      y: number,
=======
;
    // Create particles;
    for (let index = 0; i < 100; i++) {      particles.push ({      coordinate_x: number,
      coordinate_y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: ['#8b5cf6#3b82f6#06b6d4#10b981'][Math.floor(Math.random() * 4)],
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        opacity: Math.random() * 0.5 + 0.3
      })
    }
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle) => {
=======

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        // Draw connections
        particles.forEach((otherParticle) => {
=======

        particles.forEach((otherParticle) => {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.lineWidth = 1;

            ctx.stroke()
    // Create particles;
    for (let i = 0; i < 100; i++) {      particles && particles.push({      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      opacity: number;
    }> = [];
    // Create particles;
    for (let i = 0, i < 100, i++) {;
        x: Math && Math.random() * canvas && canvas.width,;
        y: Math && Math.random() * canvas && canvas.height,;
        vx: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
        vy: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
        size: Math && Math.random() * 2 + 1,;
        color: ['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981'][;
          Math && Math.floor(Math && Math.random() * 4);
        ],;
        opacity: Math && Math.random() * 0 && 0.5 + 0 && 0.3,;
      });    }        color: ['#8b5cf6#3b82f6#06b6d4#10b981'][Math && Math.floor(Math && Math.random() * 4)],;
        opacity: Math && Math.random() * 0 && 0.5 + 0 && 0.3;
      });
    }
    // Animation loop;
    const animate = () => {;
      ctx && ctx.clearRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Update and draw particles;
      particles && particles.forEach(particle => {        particle && particle.x += particle && particle.vx;      particles && particles.forEach((particle) => {;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        // Wrap around edges;
        if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width;
        if (particle && particle.x > canvas && canvas.width) particle && particle.x = 0;
        if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height;
        if (particle && particle.y > canvas && canvas.height) particle && particle.y = 0;
        // Draw particle;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.globalAlpha = particle && particle.opacity;
        ctx && ctx.fill();
        // Draw connections;
        particles && particles.forEach(otherParticle => {          const dx = particle && particle.x - otherParticle && otherParticle.x;        particles && particles.forEach((otherParticle) => {;
          const dx = particle && particle.x - otherParticle && otherParticle.x;
          const dy = particle && particle.y - otherParticle && otherParticle.y;
          const distance = Math && Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particle && particle.x, particle && particle.y);
            ctx && ctx.lineTo(otherParticle && otherParticle.x, otherParticle && otherParticle.y);
            ctx && ctx.strokeStyle = particle && particle.color;
            ctx && ctx.globalAlpha = ((100 - distance) / 100) * 0 && 0.1;
            ctx && ctx.lineWidth = 1;
            ctx && ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);    };            ctx && ctx.lineWidth = 1;
            ctx && ctx.stroke();
          }
        });
      });


      requestAnimationFrame(animate);

    };

    animate();



    };

    window && window.addEventListener('resize', handleResize);



      />;


  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />;


      {/* Floating Geometric Shapes */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{ zIndex: 2 }}>;
        {/* Animated Hexagons */}
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-purple-500/30 rotate-45'
      opacity: number;
    }> = [];
;
    // Create particles;
    for (let index = 0, i < 100, i++) {
        coordinate_x: Math.random () * canvas.width,
        coordinate_y: Math.random () * canvas.height,
        vx: (Math.random () - 0.5) * 0.5,
        vy: (Math.random () - 0.5) * 0.5,
        size: Math.random () * 2 + 1,
        color: ['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981'][;
          Math.floor (Math.random () * 4);
        ],
        opacity: Math.random () * 0.5 + 0.3,
      });    }        color: ['#8b5cf6#3b82f6#06b6d4#10b981'][Math.floor (Math.random () * 4)],
        opacity: Math.random () * 0.5 + 0.3;
      });
    }
    // Animation loop;
    const animate = () =>: any {
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles.for_each (particle => {        particle.x += particle.vx;      particles.for_each ((particle) => {
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
        // Draw particle;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill_style = particle.color;
        ctx.global_alpha = particle.opacity;
        ctx.fill ();
;
        // Draw connections;
        particles.for_each (other_particle => {          const dx = particle.x - other_particle.x;        particles.for_each ((other_particle) => {
          const dx = particle.x - other_particle.x;
          const dy = particle.y - other_particle.y;
          const distance = Math.sqrt (dx * dx + dy * dy);
;
          // Check condition
if ( {) {
  $2
}
            ctx.begin_path ();
            ctx.move_to (particle.x, particle.y);
            ctx.line_to (other_particle.x, other_particle.y);
            ctx.stroke_style = particle.color;
            ctx.global_alpha = ((100 - distance) / 100) * 0.1;
            ctx.line_width = 1;
            ctx.stroke ();
          }
        });
      });
;
      requestAnimationFrame (animate);    }            ctx.line_width = 1;
            ctx.stroke ();
          }
        });
      });
;
      requestAnimationFrame (animate);
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
    return () => {
      window.removeEventListener ('resize', handle_resize);
    }
  }, []);
;
  return (
    <div className='relative min - h-screen bg - black overflow - hidden'>;
      {/* Animated Background Canvas */}
      <canvas;
        ref={canvas_ref}
        className='absolute inset - 0 w - full h - full pointer - events - none'        style={{ z_index: 0 }}
      />;
      {/* Gradient Overlays */}  }, []);
;
  return (
    <div className="relative min - h-screen bg - black overflow - hidden">;
      {/* Animated Background Canvas */}
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w - full h - full pointer - events - none";
        style={{ z_index: 0 }}
      />;
      {/* Gradient Overlays */}
      <div;
        className='absolute inset - 0 bg - gradient - to - br from - purple - 900 / 20 via - blue - 900 / 20 to - cyan - 900 / 20';
        style={{ z_index: 1 }}
      />;
      <div;
        className='absolute inset - 0 bg-[radial - gradient (circle_at_20%_20%, rgba (147, 51, 234, 0.15), transparent_50%)]';
        style={{ z_index: 1 }}
      />;
      <div;
        className='absolute inset - 0 bg-[radial - gradient (circle_at_80%_80%, rgba (59, 130, 246, 0.15), transparent_50%)]';
        style={{ z_index: 1 }}
      />;
      <div;
        className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (6, 182, 212, 0.1), transparent_50%)]';
        style={{ z_index: 1 }}
      />;
      {/* Floating Geometric Shapes */}
      <div;
        className='absolute inset - 0 pointer - events - none';
        style={{ z_index: 2 }}
      >;
        {/* Animated Hexagons */}
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - purple - 500 / 30 rotate - 45';
          animate={{
            rotate: [45, 405],
            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
          transition={{

            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
=======
=======      />
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.15),transparent_50%)]" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.15),transparent_50%)]" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" style={{ zIndex: 1 }} />
      {/* Floating Geometric Shapes */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


      {/* Floating Geometric Shapes */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="absolute inset - 0 pointer - events - none" style={{ z_index: 2 }}>;
        {/* Animated Hexagons */}
        <motion.div;
          className="absolute top - 20 left - 20 w - 32 h - 32 border border - purple - 500 / 30 rotate - 45";
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width,
        if (particle.x > canvas.width) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height,
        if (particle.y > canvas.height) particle.y = 0,

        // Draw particle
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fillStyle = particle.color,
        ctx.globalAlpha = particle.opacity,
        ctx.fill(),

        // Draw connections
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath(),
            ctx.moveTo(particle.x, particle.y),
            ctx.lineTo(otherParticle.x, otherParticle.y),
            ctx.strokeStyle = particle.color,
            ctx.globalAlpha = (100 - distance) / 100 * 0.1,
            ctx.lineWidth = 1,
            ctx.stroke()
          }
        })
      }),

      requestAnimationFrame(animate)
    },

    animate(),

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight
    },

    window.addEventListener('resize', handleResize),

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []),

  return (
    <div className=&quot;relative min-h-screen bg-black overflow-hidden&quot;>
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className=&quot;absolute inset-0 w-full h-full pointer-events-none&quot;
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {/* Animated Hexagons */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/30 rotate-45"
          animate={{
            rotate: [45, 405];
            scale: [1, 1.1, 1];
            opacity: [0.3, 0.6, 0.3]

      {/* Gradient Overlays */}

        style={{ zIndex: 0 }}
      />

      {/* Gradient Overlays */}

          }}
          transition={{
            duration: 8
            repeat: Infinity
=======
=======
          animate={{


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        />;
        <motion&& motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-blue-500/30 rotate-45"
          animate={{
            rotate: [45, -315],
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],            rotate: [45, -315]
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          animate={{
            rotate: [45, -315]
            scale: [1, 1.2, 1]
            opacity: [0.2, 0.5, 0.2],          }}
        />;
=======

        />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-blue-500/30 rotate-45'
          animate={{
            rotate: [45, -315],
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className='absolute bottom - 32 left - 1/4 w - 40 h - 40 border border - cyan - 500 / 30 rotate - 45';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          animate={{
            rotate: [45, 405]
            scale: [1, 1.15, 1]
            opacity: [0.25, 0.55, 0.25],          }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',          }}          className="absolute bottom - 32 left - 1/4 w - 40 h - 40 border border - cyan - 500 / 30 rotate - 45";

        <motion&& motion.div
          className='absolute top-2/3 right-1/4 w-20 h-20 border border-blue-400/40 rounded-full'
          animate={{
            y: [0, 25, 0],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          transition={{
            duration: 7
            repeat: Infinity
            ease: 'easeInOut',          }}

        />
        <motion.div

=======          className="absolute bottom-1/3 right-1/3 w-12 h-12 border border-cyan-400/40 rounded-full"
          animate={{
            y: [0, -15, 0];
            opacity: [0.25, 0.55, 0.25]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          }}
=======
            ease: "easeInOut"

          }}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        <motion&& motion.div
          className='absolute top-2/3 right-1/4 w-20 h-20 border border-blue-400/40 rounded-full'
          animate={{
            y: [0, 25, 0],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          className="absolute top-2/3 right-1/4 w-20 h-20 border border-blue-400/40 rounded-full"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          animate={{
            y: [0, 25, 0]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]
          transition={{
            duration: 7
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
          }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        />;
        <motion&& motion.div
          className='absolute bottom-1/3 right-1/3 w-12 h-12 border border-cyan-400/40 rounded-full'
          animate={{
            y: [0, -15, 0],
            opacity: [0 && 0.25, 0 && 0.55, 0 && 0.25],          className="absolute bottom-1/3 right-1/3 w-12 h-12 border border-cyan-400/40 rounded-full"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          animate={{
            y: [0, -15, 0]
            opacity: [0 && 0.25, 0 && 0.55, 0 && 0.25]
          transition={{

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            duration: 5,
            repeat: Infinity,

          }}



          }}



          }}

=======
=======            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}

          }}


=======
=======
        />
      </div>
=======
        />;
      </div>;
      {/* Energy Waves */}

          className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent'
          animate={{
            y: [0, 1000]
            opacity: [0, 1, 0],          }}
=======

          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          animate={{
            y: [0, 1000]
            opacity: [0, 1, 0]
=======
        />;
        <motion&& motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            y: [0, 1000],
            opacity: [0, 1, 0],            y: [0, 1000]
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'linear'
            delay: 2,            ease: "linear"
            delay: 2
            y: [0, 1000];
            opacity: [0, 1, 0]
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            delay: 4,          }}          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{
            y: [0, 1000]
            opacity: [0, 1, 0]
          transition={{
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            duration: 8
            repeat: Infinity
            ease: 'linear'
            delay: 4,            ease: "linear"

            delay: 4
          }}

=======            duration: 8,
            repeat: Infinity,

          }}


=======
=======
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
            delay: 4,            ease: "linear",
            delay: 4
          }}
          }}



=======
      <div
        className='absolute inset-0 pointer-events-none'
        style={{ zIndex: 4 }}
      >
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        {[...Array(20)].map((_, i) => (
          <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            key={i}
            className='absolute w - 2 h - 2 bg - purple - 400 rounded - full';
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,


=======
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,            }}
            animate={{
              scale: [0, 1, 0]
              opacity: [0, 1, 0],            }}        {[...Array(20)].map((_, i) => (
          }}

        />
      </div>
      {/* Quantum Particles */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{ zIndex: 4 }}
      >

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w - 2 h - 2 bg - purple - 400 rounded - full";
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,=======

              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],            }}        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            }}
            animate={{
              scale: [0, 1, 0]
              opacity: [0, 1, 0]
            }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              duration: 3 + Math && Math.random() * 2,
              repeat: Infinity,

              ease: 'easeInOut',            }}              ease: "easeInOut"



            }}
          />;
=======
=======


=======
=======

            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,



            }}



          />




            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
          />
        ))}
      </div>
              ease: 'easeInOut',            }}
=======
      {/* Content */}

      </div>;=======
            transition={{
              duration: 3 + Math.random () * 2,
              repeat: Infinity,
              delay: Math.random () * 3,
              ease: 'easeInOut',            }}              ease: "easeInOut";
            }}
          />))}
      </div>;
      {/* Content */}

      </div>;
            }}

          />
        ))}
      </div>

      {/* Content */}
      <div className='relative' style={{ zIndex: 10 }}>        {children}
      </div>;
      {/* Bottom Glow */}      <div className="relative" style={{ zIndex: 10 }}>;
        {children}

      {/* Bottom Glow */}


}
}
}
}
}
}
}
}
}
}

      {/* Bottom Glow */}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
