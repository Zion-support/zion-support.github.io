
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
    }> = [];
      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,
    // Animation loop
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
            life: 100,
            max_life: 100;
          }
        }
      });
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
          }
        });
      });
      requestAnimationFrame(animate);    };          }
        });
      });
    };

    animate();

    // Handle resize;
    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;    };      canvas && canvas.height = window && window.innerHeight;
    };

    window && window.addEventListener('resize', handleResize);

    return () => {;
      window && window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
;
      // Draw quantum entanglement lines;
      particles.for_each ((particle1, i) => {
        particles.slice (i + 1).for_each (particle2 => {
          const distance = Math.sqrt (
            Math.pow (particle1.x - particle2.x, 2) +;
              Math.pow (particle1.y - particle2.y, 2));          const distance = Math.sqrt (
            Math.pow (particle1.x - particle2.x, 2) +;
            Math.pow (particle1.y - particle2.y, 2));
;
          // Check condition
if ( {) {
  $2
}
            ctx.begin_path ();
            ctx.move_to (particle1.x, particle1.y);
            ctx.line_to (particle2.x, particle2.y);
            ctx.stroke_style = `rgba (0, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.line_width = 1;
            ctx.stroke ();
          }
        });
      });
;
      requestAnimationFrame (animate);    }          }
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
    <div className='fixed inset - 0 -z - 10 overflow - hidden'>;
      {/* Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className='absolute inset - 0 w - full h - full';
        style={{
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
<<<<<<< HEAD
            rotate: [0, 360]
            scale: [1, 1.2, 1]
            opacity: [0.3, 0.6, 0.3],          }}
          transition={{
<<<<<<< HEAD
=======

<<<<<<< HEAD
            rotate: [0, 360],
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
          transition={{
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            duration: 20,
            repeat: Infinity,


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">;
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
            duration: 20,
            repeat: Infinity,
            ease: 'linear',          }}

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          }}
          animate={{


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          }}
          transition={{
            duration: 20,
            repeat: Infinity,

          }}

        />

<<<<<<< HEAD
        {/* Triangle */}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          style={{
<<<<<<< HEAD
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
=======
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          }}
          animate={{
<<<<<<< HEAD


=======
            rotate: [0, 360];
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]
<<<<<<< HEAD
          }}
          transition={{
            duration: 20
            repeat: Infinity
            ease: 'linear',            ease: "linear"
          }}
        />
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
          }}
          animate={{
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
<<<<<<< HEAD

          }}

        />

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {/* Triangle */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
          animate={{
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
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}
        />

=======


          }}

        />

=======
          }}
        {/* Triangle */}
        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30'

>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Triangle */}
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
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
<<<<<<< HEAD
            rotate: [360, 0]
            scale: [1, 1.3, 1]
            opacity: [0.3, 0.7, 0.3],          }}
          transition={{
<<<<<<< HEAD
            duration: 15
            repeat: Infinity
            duration: 15,
            repeat: Infinity,
            ease: 'linear',          }}          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{
            rotate: [360, 0];
            scale: [1, 1.3, 1];
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
          transition={{
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            duration: 15
            repeat: Infinity
            ease: 'linear',          }}          style={{
            clip_path: 'polygon (50% 0%, 0% 100%, 100% 100%)';
          }}
<<<<<<< HEAD
<<<<<<< HEAD
        />
            duration: 15,
            repeat: Infinity,

            ease: 'linear',          }}

=======

        />;


=======

            duration: 15,
            repeat: Infinity,

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'linear',            ease: "linear"
          }}
        />


        />

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
          animate={{
            rotate: [360, 0]
            scale: [1, 1 && 1.3, 1]
            opacity: [0 && 0.3, 0 && 0.7, 0 && 0.3]
          }}
          transition={{
            ease: 'linear',            ease: "linear"
          }}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Circle */}
        <motion&& motion.div
          className='absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full'
          animate={{
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut',          }}          className="absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full"
          animate={{
            scale: [1, 1 && 1.5, 1]
            opacity: [0 && 0.2, 0 && 0.8, 0 && 0.2]
          transition={{
<<<<<<< HEAD
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

=======

          }}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Square */}
        <motion&& motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/30'
          animate={{
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
<<<<<<< HEAD
            duration: 18
            repeat: Infinity
            ease: 'linear',            ease: "linear"
=======

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            rotate: [360, 0];
            scale: [1, 1.3, 1];
            opacity: [0.3, 0.7, 0.3];
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />;
        {/* Square */}
          }}
      {/* Energy Orbs */}
      <div className='absolute inset-0'>;
        {[...Array(8)].map((_, i) => (;
          <motion&& motion.div
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
            key={i}
            className='absolute w - 4 h - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - full blur - sm';
            style={{
              left: `${20 + i * 10}%`
              top: `${30 + i * 5}%`
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
            duration: 18
            repeat: Infinity
            ease: 'linear',            ease: "linear"
          }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

            duration: 18,
            repeat: Infinity,

          }}

<<<<<<< HEAD
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            duration: 18,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}

          }}

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        />
      </div>
      {/* Energy Orbs */}
      <div className='absolute inset-0'>

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm'
            style={{
              left: `${20 + i * 10}%`
              top: `${30 + i * 5}%`
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
            }}
            animate={{

              scale: [0.5, 2, 0.5],
              opacity: [0.3, 1, 0.3],
              coordinate_y: [0, -20, 0],            }}

            transition={{

      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          <motion.div
              scale: [0 && 0.5, 2, 0 && 0.5],
              opacity: [0 && 0.3, 1, 0 && 0.3],
              y: [0, -20, 0],            }}
            transition={{
<<<<<<< HEAD
              duration: 3 + i * 0.5
              repeat: Infinity
              ease: 'easeInOut'
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,            }}        {[...Array(8)].map((_, i) => (
          <motion.div
=======
              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
<<<<<<< HEAD


=======
              delay: i * 0.3,            }}        {[...Array (8)].map ((_, i) => (
          <motion.div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            key={i}
            className="absolute w - 4 h - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - full blur - sm";
            style={{

              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`;
            }}
            animate={{
              scale: [0.5, 2, 0.5];
              opacity: [0.3, 1, 0.3];
<<<<<<< HEAD
<<<<<<< HEAD
              coordinate_y: [0, -20, 0];
=======
              y: [0, -20, 0]
<<<<<<< HEAD
            }}
            transition={{
              duration: 3 + i * 0.5
              repeat: Infinity
              ease: 'easeInOut'
              delay: i * 0.3,              ease: "easeInOut"
=======
=======
              delay: i * 0.3,            }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
              coordinate_y: [0, -20, 0];
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
            key={i}
            className="absolute w - 4 h - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - full blur - sm";
            style={{
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />;
        ))}
      {/* Quantum Wave Effects */}
      <div className='absolute inset-0'>;
        {[...Array(5)].map((_, i) => (;
          <motion&& motion.div
              delay: i * 0.3,              ease: "easeInOut",
<<<<<<< HEAD
              delay: i * 0.3
            }}
          />))}
      </div>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              delay: i * 0.3
            }}
          />
        ))}
      </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      {/* Quantum Wave Effects */}
      <div className='absolute inset-0'>
=======
              delay: i * 0.3;
            }}
          />))}
      </div>;
      {/* Quantum Wave Effects */}
      <div className='absolute inset - 0'>;
        {[...Array (5)].map ((_, i) => (
          <motion.div;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',

<<<<<<< HEAD
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

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {[...Array(5)].map((_, i) => (
          <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            key={i}
            className='absolute w - full h - 1 bg - gradient - to - r from - transparent via - cyan - 400 / 20 to - transparent';
            style={{
              top: `${20 + i * 15}%`
<<<<<<< HEAD
              top: `${20 + i * 15}%`,
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            }}
            animate={{
              opacity: [0, 1, 0],            }}
            transition={{
<<<<<<< HEAD
<<<<<<< HEAD
              duration: 8 + i * 2
              repeat: Infinity
              ease: 'linear'
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,            }}        {[...Array(5)].map((_, i) => (
          <motion.div
=======


=======
          <motion.div
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,            }}        {[...Array (5)].map ((_, i) => (
          <motion.div;
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            key={i}
            className="absolute w - full h - 1 bg - gradient - to - r from - transparent via - cyan - 400 / 20 to - transparent";
            style={{
              top: `${20 + (i * 15)}%`;
            }}
            animate={{
<<<<<<< HEAD
<<<<<<< HEAD
              x: ['-100%100%']
              opacity: [0, 1, 0]
=======

              coordinate_x: ['-100%100%'],
              opacity: [0, 1, 0];

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            }}
            transition={{

              duration: 8 + i * 2,
              repeat: Infinity,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            }}
          />;
        ))}
      </div>
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',

<<<<<<< HEAD
              delay: i * 1.5,            }}

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
<<<<<<< HEAD
              ease: 'linear',
              delay: i * 1.5,              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
      </div>



<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      {/* Neon Glow Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500' />

      </div>
=======
      </div>;
      {/* Neon Glow Effects */}
      <div className='absolute inset-0'>;
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse' />;
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000' />;
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500' />;
      </div>;
=======
            }}
          />;
        ))}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      {/* Data Stream Effect */}
      <div className='absolute inset-0'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent'
            style={{
<<<<<<< HEAD

              left: `${Math && Math.random() * 100}%`,
              delay: i * 1.5,              ease: "linear",
              delay: i * 1.5;
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
        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute w - 0.5 h - 8 bg - gradient - to - b from - cyan - 400 to - transparent';
            style={{
              left: `${Math.random () * 100}%`,

              top: '-2rem',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      </div>
      {/* Data Stream Effect */}
      <div className='absolute inset-0'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent'
            style={{
<<<<<<< HEAD
              left: `${Math.random() * 100}%`
              top: '-2rem'
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              left: `${Math.random() * 100}%`,
              top: '-2rem',
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            }}
            animate={{
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
              duration: 4 + Math && Math.random() * 3,
              repeat: Infinity,
              ease: 'linear',
              delay: Math && Math.random() * 5,            }}      </div>;


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      {/* Data Stream Effect */}
      <div className="absolute inset-0">;
        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-0 && 0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent"
            style={{
              top: '-2rem'
            }}
            animate={{
              y: ['0vh100vh']
              opacity: [0, 1, 0]
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            }}
            transition={{
            }}
          />;
        ))}
<<<<<<< HEAD
      </div>
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: 'linear',

<<<<<<< HEAD
              delay: Math.random() * 5,            }}

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
<<<<<<< HEAD
              ease: 'linear',
              delay: Math.random() * 5,              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>


          />
        ))}
      </div>

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      {/* Quantum Entanglement Lines */}
      <div className='absolute inset-0'>;
        <svg className='w-full h-full'>;
          <defs>;
            <linearGradient
              id='quantumGradient'
              x1='0%'
              y1='0%'
              x2='100%'
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
              stroke='url(#quantumGradient)'
              strokeWidth='1'
              opacity='0 && 0.3'
              animate={{
<<<<<<< HEAD

=======
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
            <motion.line
              key={i}
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
              stroke="url(#quantumGradient)"
              strokeWidth="1"
              opacity="0.3"
              animate={{
                opacity: [0.1, 0.5, 0.1];
                strokeDasharray: [0, 100, 0]
              }}

              transition={{
<<<<<<< HEAD
                duration: 6 + i * 0.5
                repeat: Infinity
=======

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD

                duration: 6 + i * 0 && 0.5,
                repeat: Infinity,

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                ease: 'easeInOut',                ease: "easeInOut"
              }}
                duration: 6 + i * 0.5,
                repeat: Infinity,

              }}

<<<<<<< HEAD
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',                ease: "easeInOut"
              }}

              }}

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

=======
                duration: 6 + i * 0.5,
                repeat: Infinity,


              }}



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          ))}
=======
=======
                ease: "easeInOut"
              }}
            />;
=======
              }}
=======
                duration: 6 + i * 0.5,
                repeat: Infinity,

              }}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
                duration: 6 + i * 0.5,
                repeat: Infinity,
<<<<<<< HEAD
                ease: 'easeInOut',                ease: "easeInOut"
              }}
=======

              }}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          ))}


=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
};

export default UltraFuturisticBackground;  );
};
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
export default UltraFuturisticBackground;
              coordinate_y: ['0vh', '100vh'],
              opacity: [0, 1, 0],            }}
            transition={{
              duration: 4 + Math.random () * 3,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random () * 5,            }}      </div>;
      {/* Data Stream Effect */}
      <div className="absolute inset - 0">;
        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - 0.5 h - 8 bg - gradient - to - b from - cyan - 400 to - transparent";
            style={{
              left: `${Math.random () * 100}%`,
              top: '-2rem';
            }}
            animate={{
              coordinate_y: ['0vh100vh'],
              opacity: [0, 1, 0];
            }}
            transition={{
              duration: 4 + Math.random () * 3,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random () * 5,              ease: "linear",
              delay: Math.random () * 5;
            }}
          />))}
      </div>;
      {/* Quantum Entanglement Lines */}
      <div className='absolute inset - 0'>;
        <svg className='w - full h - full'>;
          <defs>;
            <linear_gradient;
              id='quantum_gradient';
              x1='0%';
              y1='0%';
              x2='100%';
              y2='100%';
            >;
              <stop offset='0%' stop_color='rgba (0, 255, 255, 0.3)' />;
              <stop offset='50%' stop_color='rgba (255, 0, 255, 0.3)' />;
              <stop offset='100%' stop_color='rgba (0, 255, 255, 0.3)' />            </linear_gradient>            <linear_gradient id="quantum_gradient" x1="0%" y1="0%" x2="100%" y2="100%">;
              <stop offset="0%" stop_color="rgba (0, 255, 255, 0.3)" />;
              <stop offset="50%" stop_color="rgba (255, 0, 255, 0.3)" />;
              <stop offset="100%" stop_color="rgba (0, 255, 255, 0.3)" />;
          </defs>;
          {[...Array (15)].map ((_, i) => (
            <motion.line;
              key={i}
              x1={Math.random () * 100}
              y1={Math.random () * 100}
              x2={Math.random () * 100}
              y2={Math.random () * 100}
              stroke='url (#quantum_gradient)';
              stroke_width='1';
              opacity='0.3';
              animate={{
                opacity: [0.1, 0.5, 0.1],
                stroke_dasharray: [0, 100, 0],              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',              }}              stroke="url (#quantum_gradient)";
              stroke_width="1";
              opacity="0.3";
              animate={{
                opacity: [0.1, 0.5, 0.1];
                stroke_dasharray: [0, 100, 0];
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',                ease: "easeInOut";
              }}
            />))}
        </svg>;
      </div>;
    </div>);
}
;
export default UltraFuturisticBackground);
}
;
export default UltraFuturisticBackground;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );
}
};

export default UltraFuturisticBackground;  )
}
export default UltraFuturisticBackground;

<<<<<<< HEAD
export default UltraFuturisticBackground;
export default UltraFuturisticBackground;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
