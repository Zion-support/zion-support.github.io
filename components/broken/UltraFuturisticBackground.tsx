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
==============    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
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
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.life / particle.maxLife;
        ctx.fill();
        // Reset particle if it dies
        if (particle.life <= 0) {
          particles[index] = {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            life: 100,
            max_life: 100;
          }
        }
      });

      // Draw quantum entanglement lines
      particles.forEach((particle1, i) => {

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        particles.slice(i + 1).forEach((particle2) => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          }
      });
      // Draw quantum entanglement lines;
      particles && particles.forEach((particle1, i) => {;
        particles && particles.slice(i + 1).forEach(particle2 => {;
          const distance = Math && Math.sqrt(;
            Math && Math.pow(particle1 && particle1.x - particle2 && particle2.x, 2) +;
              Math && Math.pow(particle1 && particle1.y - particle2 && particle2.y, 2);
          );          const distance = Math && Math.sqrt(;
            Math && Math.pow(particle1 && particle1.x - particle2 && particle2.x, 2) + ;
            Math && Math.pow(particle1 && particle1.y - particle2 && particle2.y, 2);
          );
          if (distance < 100) {;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particle1 && particle1.x, particle1 && particle1.y);
            ctx && ctx.lineTo(particle2 && particle2.x, particle2 && particle2.y);
            ctx && ctx.strokeStyle = `rgba(0, 255, 255, ${0 && 0.1 * (1 - distance / 100)})`;
            ctx && ctx.lineWidth = 1;
            ctx && ctx.stroke();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          }
        });
      });
      requestAnimationFrame(animate);    };          }
        });
      });

      requestAnimationFrame(animate);

    };
    animate();



    };
    window && window.addEventListener('resize', handleResize);



  }, []);
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
=======
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
      {/* Quantum Grid */}
      <div className='absolute inset - 0'>;
        <div className='absolute inset - 0 bg-[linear - gradient (rgba (0, 255, 255, 0.1)_1px, transparent_1px), linear - gradient (90deg, rgba (0, 255, 255, 0.1)_1px, transparent_1px)] bg-[size:50px_50px] opacity - 20' />;
      </div>;
      {/* Floating Geometric Shapes */}
      <div className='absolute inset - 0'>;
        {/* Hexagon */}
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30';
          style={{
            clip_path:;
              'polygon (50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
          animate={{
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            rotate: [0, 360],
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
          transition={{
            duration: 20,
            repeat: Infinity,

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


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">;
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      />;
      {/* Quantum Grid */}
      <div className="absolute inset-0">;
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />;
      </div>;
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">;
        {/* Hexagon */}
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
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
      </div>;
      {/* Floating Geometric Shapes */}
      <div className="absolute inset - 0">;
        {/* Hexagon */}
        <motion.div;
          className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30";
          style={{
            clip_path: 'polygon (50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
=======


      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">;
        {/* Hexagon */}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 20,
            repeat: Infinity,
            ease: 'linear',          }}

          }}
          transition={{
            duration: 20,
            repeat: Infinity,

          }}

        />

          }}

        />

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Triangle */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
          animate={{
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}

        />;


        {/* Triangle */}
        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30'


=======
          }}

        />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
            rotate: [360, 0]
            scale: [1, 1.3, 1]
            opacity: [0.3, 0.7, 0.3],          }}          transition={{

            duration: 15
            repeat: Infinity

            ease: 'linear',            ease: "linear"
          }}

        />;


            duration: 15,
            repeat: Infinity,

            ease: 'linear',          }}

==============          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}

        />

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Circle */}
        <motion&& motion.div
          className='absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full'
          animate={{
            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.2, 0 && 0.8, 0 && 0.2],          }}

        />


          }}

=======

          }}
=======

          }}
        {/* Square */}
        <motion&& motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/30'
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 18,
            repeat: Infinity,

          }}

              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`;
            }}
            animate={{
              scale: [0.5, 2, 0.5];
              opacity: [0.3, 1, 0.3];
            }}
            transition={{

              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',

            }}
          />;
        ))}

      </div>;


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
      {/* Quantum Wave Effects */}
=======
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
            key={i}
            className='absolute w - full h - 1 bg - gradient - to - r from - transparent via - cyan - 400 / 20 to - transparent';
            style={{
              top: `${20 + i * 15}%`,


=======
              top: `${20 + i * 15}%`
              top: `${20 + i * 15}%`,            }}
            animate={{

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
              coordinate_x: ['-100%100%'],
              opacity: [0, 1, 0];

            }}
            transition={{

              duration: 8 + i * 2,
              repeat: Infinity,

            }}
          />;
        ))}
=======
      </div>              duration: 8 + i * 2,
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

              duration: 4 + Math && Math.random() * 3,
              repeat: Infinity,
              ease: 'linear',
              delay: Math && Math.random() * 5,            }}      </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Data Stream Effect */}
      <div className="absolute inset-0">;
        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-0 && 0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent"
            style={{
              left: `${Math && Math.random() * 100}%`,
=======

              left: `${Math && Math.random() * 100}%`,

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              top: '-2rem'
            }}
            animate={{
              y: ['0vh100vh']
              opacity: [0, 1, 0]
            }}
            transition={{
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              duration: 4 + Math && Math.random() * 3,
              repeat: Infinity,
              ease: 'linear',
              delay: Math && Math.random() * 5,              ease: "linear",
              delay: Math && Math.random() * 5

      </div>;


=======
=======
            }}
          />;
        ))}
      </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: 'linear',

            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,


==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>
      {/* Quantum Entanglement Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,255,255,0.3)" />
              <stop offset="50%" stopColor="rgba(255,0,255,0.3)" />
              <stop offset="100%" stopColor="rgba(0,255,255,0.3)" />
            </linearGradient>
          </defs>
          {[...Array(15)].map((_, i) => (
              delay: i * 1.5,            }}

            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,              ease: "linear",
              delay: i * 1.5
            }}
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
      <div className="absolute inset-0">
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
            }}
          />
        ))}
      </div>
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
          </defs>
          {[...Array(15)].map((_, i) => (
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <motion.line
              key={i}
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
              transition={{
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                opacity: [0 && 0.1, 0 && 0.5, 0 && 0.1],
                strokeDasharray: [0, 100, 0],              }}
              transition={{
                duration: 6 + i * 0 && 0.5,
                repeat: Infinity,
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
