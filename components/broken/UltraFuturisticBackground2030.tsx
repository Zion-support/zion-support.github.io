

}
 canvas && canvas.width = window && window.innerWidth;
canvas && canvas.height = window && window.innerHeight;
let animationId: number;
let particles: Array< {;

const UltraFuturisticBackground2030: React.FC<;
  UltraFuturisticBackground2030Props;
> = ({ children }) => {  const canvasRef = useRef<HTMLCanvasElement>(null);import React, { useEffect, useRef } from 'react';



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let animationId: number;
let particles: Array< {
const UltraFuturisticBackground2030: React.FC<
  UltraFuturisticBackground2030Props
> = ({ children }) => {  const canvasRef = useRef<HTMLCanvasElement>(null);import React, { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
interface UltraFuturisticBackground2030Props {
  children: React.ReactNode
}
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2030Props {
  children: React.ReactNode;}
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
}
const canvasRef  = useRef<HTMLCanvasElement    />(null)import { motion  } from 'framer-motion';

interface UltraFuturisticBackground2030Props {
  children: React.ReactNode;}
}
}



  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;
    let animationId: number;
    let particles: Array<{;
      x: number;
      y: number;
canvas.width = window.inner_width;
canvas.height = window.inner_height;
let animation_id: number;

let particles: Array< {const UltraFuturisticBackground2030: React.FC<;}
  UltraFuturisticBackground2030Props;}

=======
let animationId: number;
    let particles: Array<{

canvas.width = window.inner_width;
canvas.height = window.inner_height;
let animation_id: number;
let particles: Array< {const UltraFuturisticBackground2030: React.FC<;
  UltraFuturisticBackground2030Props;
>>>>>>> origin/cursor/delete-old-data-records-6bba
> = ({ children    }) => {
    let particles: Array<{;
      x: number;
    canvas.height = window.innerHeight;let animationId: number;
    let particles: Array<{x: number;

  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;
    let animationId: number;
    let particles: Array<{;
import React, { useEffect, useRef } from 'react';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let animationId: number;
let particles: Array< {
const UltraFuturisticBackground2030: React.FC<
  UltraFuturisticBackground2030Props
> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

}
  const canvas_ref = useRef < HTMLCanvasElement>(null)import React, {;}
  useEffect, useRef } from 'react';

import { motion } from 'framer-motion;
interface UltraFuturisticBackground2030Props {
<<<<<<< HEAD

const UltraFuturisticBackground2030: React.FC < UltraFuturisticBackground2030Props> = ({ children }) => {
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
    let animation_id: number;
    let particles: Array<{
      coordinate_x: number;
      coordinate_y: number;
const UltraFuturisticBackground2030: React.FC<UltraFuturisticBackground2030Props> = ({ children }) => {

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

    let animationId: number,
    let particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,

      opacity: number;    }> = [];      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      opacity: number;

    // Initialize particles;
    const initParticles = () => {;
      particles = [];
      for (let i = 0; i < 150; i++) {        particles && particles.push({      for (let i = 0, i < 150, i++) {;
        particles && particles.push({;
          x: Math && Math.random() * canvas && canvas.width,;
          y: Math && Math.random() * canvas && canvas.height,;
          vx: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
          vy: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
          size: Math && Math.random() * 2 + 1,;
          color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][;
            Math && Math.floor(Math && Math.random() * 5);
          ],;
          opacity: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
        });      }          color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math && Math.floor(Math && Math.random() * 5)],;
          opacity: Math && Math.random() * 0 && 0.8 + 0 && 0.2;
        });
      }
    };

    const animate = () => {;
      ctx && ctx.fillStyle = 'rgba(0, 0, 0, 0 && 0.05)';
      ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);

      // Update and draw particles;
      particles && particles.forEach((particle, index) => {;
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
        particles && particles.forEach((otherParticle, otherIndex) => {;
          if (index !== otherIndex) {;
            const distance = Math && Math.sqrt(;
              Math && Math.pow(particle && particle.x - otherParticle && otherParticle.x, 2) +;
                Math && Math.pow(particle && particle.y - otherParticle && otherParticle.y, 2)            );              Math && Math.pow(particle && particle.x - otherParticle && otherParticle.x, 2) + ;
              Math && Math.pow(particle && particle.y - otherParticle && otherParticle.y, 2);

            );
            if (distance < 100) {;
              ctx && ctx.beginPath();
              ctx && ctx.moveTo(particle && particle.x, particle && particle.y);
              ctx && ctx.lineTo(otherParticle && otherParticle.x, otherParticle && otherParticle.y);
              ctx && ctx.strokeStyle = particle && particle.color;
              ctx && ctx.globalAlpha = ((100 - distance) / 100) * 0 && 0.3;
              ctx && ctx.lineWidth = 0 && 0.5;
              ctx && ctx.stroke();
              ctx.stroke();
origin/cursor/automate-test-improve-and-merge-code-2533

<<<<<<< HEAD
            }
          }
        });
      });



      ctx && ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);    };              ctx && ctx.lineWidth = 0 && 0.5;
              ctx && ctx.stroke();


              Math.pow(particle.x - otherParticle.x, 2) + 
      opacity: number;    }> = [];      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      opacity: number
    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {        particles.push({      for (let i = 0, i < 150, i++) {
        particles.push({
          x: Math.random() * canvas.width
          y: Math.random() * canvas.height
          vx: (Math.random() - 0.5) * 0.5
          vy: (Math.random() - 0.5) * 0.5
          size: Math.random() * 2 + 1
          color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][
            Math.floor(Math.random() * 5)
          ]
          opacity: Math.random() * 0.8 + 0.2
        });      }          color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)]
          opacity: Math.random() * 0.8 + 0.2
        })
      }
    }
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fillStyle = $2;
        ctx.globalAlpha = $2;
        ctx.fill($2);
        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            ),
            if (distance < 100) {

              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color;
              ctx.globalAlpha = ((100 - distance) / 100) * 0.3;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
        })})}
          }
        });
      });


    };

    initParticles();
    animate();



    };

    window && window.addEventListener('resize', handleResize);

    return () => {;
      cancelAnimationFrame(animationId);


  }, []);
  return (
    <div className='relative min-h-screen bg-black overflow-hidden'>;
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      ctx.global_alpha = 1;
      animation_id = requestAnimationFrame (animate);    }              ctx.line_width = 0.5;
              ctx.stroke ();
            }
          }
        });
      });
      ctx.global_alpha = 1;
      animation_id = requestAnimationFrame (animate);
    }
    init_particles ();
    animate ();
;
    const handle_resize = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;
      init_particles ();    }      init_particles ();
    }
;
    window.addEventListener ('resize', handle_resize);
;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return () => {
      cancelAnimationFrame($2);
      window.removeEventListener('resize', handleResize)
    }
  }, []);
<<<<<<< HEAD

;
  return ('
    <div className='relative min - h-screen bg - black overflow - hidden'>;
      {/* Animated Canvas Background */}
      <canvas;
        ref={canvas_ref}'
        className='fixed inset - 0 w - full h - full pointer - events - none z - 0';
        style={{}
      {/* Floating Geometric Shapes */}'
      <div className='fixed inset-0 pointer-events-none z-10'>;
        {/* Hexagon Grid */}
        <motion&& motion.div'
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30'
          style={{}
            clipPath:
      {/* Animated Canvas Background */}
      <canvas;
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"'
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
          background:;'
            'radial - gradient (ellipse at center, rgba (0, 0, 0, 0) 0%, rgba (0, 0, 0, 1) 100%)',
        }}
      />;
      {/* Floating Geometric Shapes */}'
      <div className='fixed inset - 0 pointer - events - none z - 10'>;
        {/* Hexagon Grid */}
        <motion.div;'
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30';
          style={{}
            clip_path:;'
              'polygon (50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',  }, []);
;
  return (
    <div className='relative min - h-screen bg - black overflow - hidden'>;
      {/* Animated Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className='fixed inset - 0 w - full h - full pointer - events - none z - 0';
        style={{

      />;


      {/* Floating Geometric Shapes */}
      <div className="fixed inset - 0 pointer - events-none z-10">;
        {/* Hexagon Grid */}

        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30'
          style={{
            clipPath:

              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',  }, [])


  return (
    <div className="relative min-h-screen bg-black overflow-hidden">;
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',  }, [])
      window.removeEventListener('resize', handleResize)
    }
  }, []);
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">;
      initParticles();    };      initParticles()
    }
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
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
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-10'>
        {/* Hexagon Grid */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30'
          style={{
            clipPath:
<<<<<<< HEAD

              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',  }, []);
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}

      />;


      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">;
        {/* Hexagon Grid */}
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          background:;
            'radial - gradient (ellipse at center, rgba (0, 0, 0, 0) 0%, rgba (0, 0, 0, 1) 100%)',
        }}
      />;
      {/* Floating Geometric Shapes */}
      <div className='fixed inset - 0 pointer - events - none z - 10'>;
        {/* Hexagon Grid */}
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30';
          style={{
            clip_path:;
              'polygon (50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',  }, []);
;
  return (
    <div className="relative min - h-screen bg-black overflow-hidden">;
      {/* Animated Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className="fixed inset - 0 w - full h - full pointer - events-none z-0";
        style={{ background: 'radial - gradient (ellipse at center, rgba (0, 0, 0, 0) 0%, rgba (0, 0, 0, 1) 100%)' }}
      />;
      {/* Floating Geometric Shapes */}
      <div className="fixed inset - 0 pointer - events-none z-10">;
        {/* Hexagon Grid */}
        <motion.div;
          className="absolute top - 20 left - 20 w - 32 h - 32 border border-cyan-400 / 30";
          style={{ clip_path: 'polygon (50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{

            rotate: 360,
            scale: [1, 1 && 1.1, 1]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]
          }}

          }}
          animate={{
            rotate: 360
            scale: [1, 1.1, 1]
            opacity: [0.3, 0.6, 0.3],          }}
            duration: 25
            repeat: Infinity
            duration: 25,
            repeat: Infinity,
            ease: 'linear',          }}          }}

            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}

          transition={{

        />;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 30';
          style={{
            clip_path:;
              'polygon (50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
          animate={{
            rotate: -360,
            scale: [1, 0 && 0.9, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
          transition={{
            duration: 25
            repeat: Infinity
            ease: 'linear',          }}          }}
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}

        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{
            rotate: -360
            scale: [1, 0.9, 1];
          }}
          animate={{

            rotate: -360,
            scale: [1, 0.9, 1]}
            opacity: [0.3, 0.6, 0.3]}
          }}
          transition={{

          transition={{
            }
            "duration": 20,
            "repeat": Infinity,
"ease": 'linear','
          }}
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30''
          style={{
            }
            "clipPath":
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'' />;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 30';'
          style={{
            }
            "clip_path":;
              'polygon (50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)','
          }}
          animate={{
          transition={{
            duration: 25
            repeat: Infinity
            ease: 'linear',            ease: "linear"
          }}

        />;

        <motion&& motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{
            rotate: -360,
            scale: [1, 0 && 0.9, 1]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]

        {/* Floating Circles */}
        <motion&& motion.div
          className='absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40'
          animate={{

            y: [0, -20, 0],
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4],          }}

          }}
          transition={{
            duration: 25
            repeat: Infinity
            ease: 'linear',            ease: "linear"
          }}
            y: [0, -20, 0],
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',          }}

            opacity: [0.3, 0.6, 0.3];

            opacity: [0.3, 0.6, 0.3];
      }
    },

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)',
      ctx.fillRect(0, 0, canvas.width, canvas.height),

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx,
        particle.y += particle.vy,

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
        particles.forEach(_(otherParticle, _otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            ),
          }
        })
      }),

      ctx.globalAlpha = 1,
      animationId = requestAnimationFrame(animate)
    },

    initParticles(),
    animate(),

    const handleResize = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight,
      initParticles()
    },

    window.addEventListener('resize', handleResize),

    return () => {
      cancelAnimationFrame(animationId),
      window.removeEventListener('resize', handleResize)
    }
  }, []),

  return (
    <div className=&quot;relative min-h-screen bg-black overflow-hidden&quot;>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className=&quot;fixed inset-0 w-full h-full pointer-events-none z-0&quot;
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Floating Geometric Shapes */}
      <div className=&quot;fixed inset-0 pointer-events-none z-10&quot;>
        {/* Hexagon Grid */}
        <motion.div
          className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/30&quot;
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: &quot;linear&quot;
          }}
        />
        
        <motion.div
          className=&quot;absolute top-40 right-32 w-24 h-24 border border-purple-400/30&quot;
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
            opacity: [0.3, 0.6, 0.3]

        />
            duration: 25,
            repeat: Infinity,
            ease: 'linear'          }}

            ease: 'linear'          }}
>>>>>>> origin/cursor/delete-old-data-records-6bba

          }}
          transition={{
            duration: 25,
            repeat: Infinity,


          }}
        />;
        {/* Floating Circles */}


          animate={{
            coordinate_y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4];
          }}
          transition={{
            duration: 8,
            repeat: Infinity,

        />;

        <motion&& motion.div

          }}
          transition={{}
            duration: 25,
            repeat: Infinity}}

        />

        {/* Floating Circles */}
        <motion&& motion.div
          className='absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40'
          animate={{
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
        <motion.div
          className='absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40'
          animate={{
            y: [0, 20, 0],
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4],          }}

          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}          className="absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40"
          animate={{
            y: [0, -20, 0]
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4]
          }}
          transition={{
            ease: 'easeInOut',            ease: "easeInOut"
          }}

        />;

        <motion&& motion.div
          className='absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40'
          animate={{
            y: [0, 20, 0],
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4],          className="absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40"

          animate={{
            y: [0, 20, 0]
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4]
          transition={{


            duration: 10
            repeat: Infinity
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />
            duration: 10,
            repeat: Infinity,

          }}

        />


          }}

            duration: 10
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
        {/* Animated Lines */}
        <motion&& motion.div;
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30';
          style={{clipPath:;
      {/* Animated Canvas Background */}
      <canvas;
    },
=======
        <motion&& motion.div
          className='absolute top-32 left-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent'
          animate={{

            height: [32, 64, 32],
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],          }}

          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}

          className="absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40"
          animate={{
            y: [0, 20, 0];
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        <motion.div;
          className='absolute top - 80 right - 1/3 w - 20 h - 20 rounded - full border border - blue - 400 / 40';
          animate={{
            coordinate_y: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4],          className="absolute top - 80 right - 1/3 w - 20 h - 20 rounded - full border border - blue - 400 / 40";
          animate={{
            coordinate_y: [0, 20, 0];
            opacity: [0.4, 0.8, 0.4];
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";

          }}
        />;
        {/* Animated Lines */}


          }}
        />;
        {/* Animated Lines */}
        <motion.div;
          className='absolute top - 32 left - 1/2 w - 1 h - 32 bg - gradient - to - b from - cyan - 400 to - transparent';
          animate={{
            height: [32, 64, 32],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
           />
        <motion.div;
className='absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40'
          animate={{
            y: [0, 20, 0]}
            opacity: [0.4, 0.8, 0.4]}
          }}
          transition={{
            duration: 10,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
           />
            duration: 10,
            repeat: Infinity

          }

>>>>>>> origin/cursor/delete-old-data-records-6bba
        />

            duration: 10;
repeat: Infinity;
ease: 'easeInOut',
  ease: \"easeInOut\"
        {/* Animated Lines *}
}

<<<<<<< HEAD
        <motion.div;
          transition={{

        />
      </div>
      {/* Gradient Overlays */}'
      <div className='fixed inset-0 pointer-events-none z-20'>

        {/* Top gradient */}
'
        <div className='absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent' />;
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',          }}          className="absolute top - 32 left - 1/2 w - 1 h - 32 bg - gradient - to - b from - cyan - 400 to - transparent";
          animate={{
            height: [32, 64, 32];
            opacity: [0.3, 0.8, 0.3];
          }}
          transition={{
            duration: 6,
            repeat: Infinity,


        <motion&& motion.div
          className='absolute top-64 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent'
          animate={{
            height: [24, 48, 24],
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],          }}

          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',          }}          className="absolute top-32 left-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent"


        <motion.div;
className='absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40'

          }}
      {/* Gradient Overlays */}'

          }}
          transition={{

            duration: 6
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
            ease: "easeInOut"
          }}

        />;

        <motion.div
          className="absolute top-64 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent"
          animate={{
            height: [24, 48, 24],
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],          className="absolute top-64 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent"

          animate={{
            rotate: 360
            scale: [1, 1.1, 1];
            opacity: [0.3, 0.6, 0.3]
          }
          transition = $2;
            repeat: Infinity,
            ease: "linear"
          }}
          transition={{}
            duration: 25,
            repeat: Infinity,
          transition={{}
            duration: 10;
            repeat: Infinity"
            ease: easeInOut'}}          className="absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40
          animate={{}
            y: [0, -20, 0]
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4]
          }}
          transition={{'
            ease: easeInOut,            ease: "easeInOut"
          }}
          animate={{}
            y: [0, 20, 0]
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4]
          transition={{}
            duration: 10;
            repeat: Infinity;
            duration: 10,
            repeat: Infinity,'
            ease: 'easeInOut,            ease: easeInOut"
        <motion.div
className=absolute top-60 left-1/4 w-16 h-16 rounded-full border border-pink-400/40'
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4]}}
          transition={{
            duration: 8,
            repeat: Infinity,
ease: 'easeInOut}}
        />
        <motion.div
className=absolute top-80 right-1/3 w-20 h-20 rounded-full border border-blue-400/40'
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4]}}
          transition={{

        />;
      </div>;



        />
      </div>
      {/* Gradient Overlays */}
      <div className='fixed inset-0 pointer-events-none z-20'>

        {/* Top gradient */}

        <div className='absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent' />;

            duration: 8,
            repeat: Infinity,

          }}

            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}

          }}

        />
      </div>
      {/* Gradient Overlays */}

<div className='fixed inset-0 pointer-events-none z-20'    />

        {/* Top gradient */}
        <div className='absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent' />
      {/* Gradient Overlays */}
      <div className='fixed inset-0 pointer-events-none z-20'>;
        {/* Top gradient */}
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent" />
        
        {/* Left gradient */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-indigo-900/20 via-transparent to-transparent" />
        
        {/* Right gradient */}
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-pink-900/20 via-transparent to-transparent" />
      </div>

        {/* Left gradient */}
        <div className='absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-indigo-900/20 via-transparent to-transparent'    />;
        {/* Right gradient */}
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-pink-900/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className='relative z-30'>{children}</div>;


      {/* Floating Particles */}
      <div className='fixed inset-0 pointer-events-none z-15'>;
        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />
        <motion.div
className='absolute top-64 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent'
          animate={{
            height: [24, 48, 24],
            opacity: [0.3, 0.8, 0.3],          className="absolute top - 64 right - 1/4 w - 1 h - 24 bg - gradient - to - b from - purple-400 to-transparent";
          animate={{
            height: [24, 48, 24];
            opacity: [0.3, 0.8, 0.3];
          transition={{
            duration: 8,
            repeat: Infinity,
ease: 'easeInOut',
          }}
        />
      </div>
      {/* Gradient Overlays */}
<div className='fixed inset-0 pointer-events-none z-20'>
origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Top gradient */}
        {/* Bottom gradient */}'
        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent' />;
        {/* Left gradient */}'
        <div className='absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-indigo-900/20 via-transparent to-transparent' />;
        {/* Right gradient */}'
        <div className='absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-pink-900/20 via-transparent to-transparent' />;
      </div>;
      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-15">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key = $2;
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition = $2;
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

          />
        ))}
      </div>
      </div>;
      {/* Content */}

            height: [24, 48, 24];
            opacity: [0.3, 0.8, 0.3];
          transition={{}
            duration: 8,
            repeat: Infinity,'"
            ease: 'easeInOut,            ease: "easeInOut;
          }}
        />;
      </div>;
      {/* Gradient Overlays */}
      <div className='fixed inset - 0 pointer - events - none z - 20'>;
        {/* Top gradient */}
        <div className=absolute top - 0 left - 0 right - 0 h - 32 bg - gradient - to - b from - purple - 900 / 20 via - transparent to - transparent' />;
        {/* Bottom gradient */}'
        <div className=absolute bottom - 0 left - 0 right - 0 h - 32 bg - gradient - to - t from - cyan - 900 / 20 via - transparent to - transparent />;
        {/* Left gradient */}'
        <div className='absolute top - 0 bottom - 0 left - 0 w - 32 bg - gradient - to - r from - indigo - 900 / 20 via - transparent to - transparent />;
        {/* Right gradient */}
        <div className='absolute top - 0 bottom - 0 right - 0 w - 32 bg - gradient - to - l from - pink - 900 / 20 via - transparent to - transparent' />;
      </div>;
      {/* Content */}
      <div className=relative z - 30'>{children}</div>;
      {/* Floating Particles */}'
      <div className=fixed inset - 0 pointer - events - none z - 15>;
        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full';
            style={{

              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,

              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,

              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0],            }}        {/* Top gradient */}


        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />;
        {/* Bottom gradient */}

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent" />;
        {/* Left gradient */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-indigo-900/20 via-transparent to-transparent" />;
        {/* Right gradient */}
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-pink-900/20 via-transparent to-transparent" />;
      </div>;

      {/* Content */}
      <div className="relative z-30">;
        {children}

      </div>;


      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-15">;
        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}
            animate={{
              coordinate_y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],            }}        {/* Top gradient */}
        <div className="absolute top - 0 left - 0 right - 0 h - 32 bg - gradient - to - b from - purple - 900 / 20 via-transparent to-transparent" />;
        {/* Bottom gradient */}
        <div className="absolute bottom - 0 left - 0 right - 0 h - 32 bg - gradient - to - t from - cyan - 900 / 20 via-transparent to-transparent" />;
        {/* Left gradient */}
        <div className="absolute top - 0 bottom - 0 left - 0 w - 32 bg - gradient - to - r from - indigo - 900 / 20 via-transparent to-transparent" />;
        {/* Right gradient */}
        <div className="absolute top - 0 bottom - 0 right - 0 w - 32 bg - gradient - to - l from - pink - 900 / 20 via-transparent to-transparent" />;
      </div>;
      {/* Content */}
      <div className="relative z-30">;
        {children}
      </div>;
      {/* Floating Particles */}
      <div className="fixed inset - 0 pointer - events-none z-15">;
        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - 1 h - 1 bg - cyan-400 rounded-full";
            style={{

              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`

            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition = $2;
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut"
          animate={{
            height: [24, 48, 24],
            opacity: [0.3, 0.8, 0.3],          className="absolute top - 64 right - 1/4 w - 1 h - 24 bg - gradient - to - b from - purple-400 to-transparent";
          animate={{
            height: [24, 48, 24];
            opacity: [0.3, 0.8, 0.3];
          transition={{}
            duration: 8,
            repeat: Infinity,'"
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
      </div>;
      {/* Gradient Overlays */}'
      <div className='fixed inset - 0 pointer - events - none z - 20'>;
        {/* Top gradient */}'
        <div className='absolute top - 0 left - 0 right - 0 h - 32 bg - gradient - to - b from - purple - 900 / 20 via - transparent to - transparent' />;
        {/* Bottom gradient */}'
        <div className='absolute bottom - 0 left - 0 right - 0 h - 32 bg - gradient - to - t from - cyan - 900 / 20 via - transparent to - transparent' />;
        {/* Left gradient */}'
        <div className='absolute top - 0 bottom - 0 left - 0 w - 32 bg - gradient - to - r from - indigo - 900 / 20 via - transparent to - transparent' />;
        {/* Right gradient */}'
        <div className='absolute top - 0 bottom - 0 right - 0 w - 32 bg - gradient - to - l from - pink - 900 / 20 via - transparent to - transparent' />;
      </div>;
      {/* Content */}'
      <div className='relative z - 30'>{children}</div>;
      {/* Floating Particles */}'
      <div className='fixed inset - 0 pointer - events - none z - 15'>;
        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}'
            className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full';
            style={{}
              left: `${Math.random() * 100}%`,`
              top: `${Math.random() * 100}%`,
            }}
            animate={{}
              y: [0, -100, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0],            }}        {/* Top gradient */}"
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
            }}
            animate={{}
              y: [0, -100, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0]
            }}

              duration: Math && Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math && Math.random() * 10,

              ease: 'easeInOut',            }}              ease: "easeInOut"

            transition={{
              duration: Math.random() * 10 + 10
              repeat: Infinity
              delay: Math.random() * 10

              duration: Math && Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math && Math.random() * 10,

            transition={{'"
              ease: 'easeInOut',            }}              ease: "easeInOut"
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut"

            }}
          />
        ))}
      </div>


      </div>;


            }}
          />;
        ))}
      </div>;
            }}
          />;
        ))}
      {/* Neon Glow Effects */}
      <div className='fixed inset-0 pointer-events-none z-25'>;

        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl' />;
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl' />;
        <div className='absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl' />;
      </div>;
    </div>;

  );

};

export default UltraFuturisticBackground2030;      </div>;
    </div>;
  );

};

export default UltraFuturisticBackground2030;      </div>
    </div>
  )
};
export default UltraFuturisticBackground2030;
export default UltraFuturisticBackground2030;
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`;
            }}
            animate={{
              coordinate_y: [0, -100, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0];
              "y": [0, -100, 0],
              "opacity": [0, 1, 0],
              "scale": [0, 1, 0]
            }}
            transition={{
              duration: Math.random () * 10 + 10,
              repeat: Infinity,
              delay: Math.random () * 10,
              ease: 'easeInOut',            }}              ease: "easeInOut";
            }}
          />))}
      </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Neon Glow Effects */}
      <div className = $2;
export default UltraFuturisticBackground2030,

"
export default UltraFuturisticBackground2030;
;






            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: 'easeInOut',            }}

          />
        ))}
      </div>

      {/* Neon Glow Effects */}
      <div className='fixed inset-0 pointer-events-none z-25'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl' />
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl' />

      </div>
    </div>
  )
};

export default UltraFuturisticBackground2030;      </div>
    </div>
  );
}

export default UltraFuturisticBackground2030;transition={{duration: Math.random() * 10 + 10,repeat: Infinity,delay: Math.random() * 10,ease: 'easeInOut'            }}/>;
        ))}
      </div>;
      {/* Neon Glow Effects */}

<div className='fixed inset-0 pointer-events-none z-25'    />
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl'    />
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl'    />
        <div className='absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl'    />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <div className='absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl' />
      </div>
    </div>
  )
<<<<<<< HEAD

};

export default UltraFuturisticBackground2030;

=======
}
export default UltraFuturisticBackground2030;


export default UltraFuturisticBackground2030;


<<<<<<< HEAD
=======
}
export default UltraFuturisticBackground2030;

export default UltraFuturisticBackground2030;
origin/cursor/automate-test-improve-and-merge-code-2533
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


