<<<<<<< HEAD
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


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    };

    resizeCanvas();
    window && window.addEventListener('resize', resizeCanvas);
<<<<<<< HEAD



      x: number;
      y: number;

=======
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
    // Set canvas size;
    const resize_canvas = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;      canvas.height = window.inner_height;
    }
;
    resize_canvas ();
    window.addEventListener ('resize', resize_canvas);
;
    // Particle system;
    const particles: Array<{
      coordinate_x: number;
      coordinate_y: number;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
<<<<<<< HEAD

=======
    // Particle system
    const particles: Array<{
      x: number,
      y: number,
=======
      vx: number,
      vy: number,
      size: number,
      opacity: number,
      color: string,
      life: number,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Bounce off edges
        if (particle.x <= 0 |particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 |particle.y >= canvas.height) particle.vy *= -1;
        // Update life
        particle.life--;
        if (particle.life <= 0) {
<<<<<<< HEAD

=======
          particles[index] = createParticle()

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        }
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD

=======
          if (distance < 100) {;
            ctx && ctx.globalAlpha = ((100 - distance) / 100) * 0 && 0.1;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particles[i].x, particles[i].y);
            ctx && ctx.lineTo(particles[j].x, particles[j].y);
            ctx && ctx.stroke();          }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        }
      }
      requestAnimationFrame(animate);    };          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
<<<<<<< HEAD

=======
          const distance = Math && Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {;
            ctx && ctx.globalAlpha = (100 - distance) / 100 * 0 && 0.1;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particles[i].x, particles[i].y);
            ctx && ctx.lineTo(particles[j].x, particles[j].y);
            ctx && ctx.stroke();

          }
        }
      }



    };
    animate();



  }, []);
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">;
=======
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke()
          }
        }
      }
      requestAnimationFrame(animate);      requestAnimationFrame(animate)
    }
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    }
  }, []);
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      {/* Enhanced floating orbs */}
      <div className='absolute inset-0'>
        {/* Primary orb */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1]
            opacity: [0.3, 0.6, 0.3],  }, []);
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      max_life: number;
    // Create particles;
    const create_particle = () =>: any {
      const colors = [;
        'rgba (0, 255, 255, 0.8)', // Cyan;
        'rgba (138, 43, 226, 0.8)', // Blue violet;
        'rgba (255, 20, 147, 0.8)', // Deep pink;
        'rgba (0, 255, 127, 0.8)', // Spring green;
        'rgba (255, 215, 0, 0.8)', // Gold      ];        'rgba (0, 255, 255, 0.8)',   // Cyan;
        'rgba (138, 43, 226, 0.8)',  // Blue violet;
        'rgba (255, 20, 147, 0.8)',  // Deep pink;
        'rgba (0, 255, 127, 0.8)',   // Spring green;
        'rgba (255, 215, 0, 0.8)',   // Gold;
      return {
        coordinate_x: Math.random () * canvas.width,
        coordinate_y: Math.random () * canvas.height,
        vx: (Math.random () - 0.5) * 2,
        vy: (Math.random () - 0.5) * 2,
        size: Math.random () * 3 + 1,
        opacity: Math.random () * 0.5 + 0.3,
        color: colors[Math.floor (Math.random () * colors.length)],
        life: Math.random () * 100 + 50,
        max_life: Math.random () * 100 + 50,
      }
    }
;
    // Initialize particles;
    for (let index = 0; i < 100; i++) {      particles.push (create_particle ());        max_life: Math.random () * 100 + 50}
    }
;
    // Initialize particles;
    for (let index = 0, i < 100, i++) {
    }
    // Animation loop;
    const animate = () =>: any {
      // Clear canvas with fade effect;
      ctx.fill_style = 'rgba (0, 0, 0, 0.05)';
      ctx.fill_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles.for_each ((particle, index) => {
        // Update position;
        particle.x += particle.vx;
        particle.y += particle.vy;
;
        // Bounce off edges;
        // Check condition
if (particle.vx *= -1) {
  $2
}
        // Check condition
if (particle.vy *= -1) {
  $2
}
        // Update life;
        particle.life--;
        // Check condition
if ( {) {
  $2
}
          particles[index] = create_particle ();        }          particles[index] = create_particle ();
        }
        // Draw particle;
        ctx.save ();
        ctx.global_alpha = particle.opacity * (particle.life / particle.max_life);
        ctx.fill_style = particle.color;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill ();
        ctx.restore ();      });        ctx.restore ();
      });
;
      // Draw connecting lines between nearby particles;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.1)';
      ctx.line_width = 0.5;
;
      for (let index = 0; i < particles.length; i++) {
        for (let inner_index = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt (dx * dx + dy * dy);
;
          // Check condition
if ( {) {
  $2
}
            ctx.global_alpha = ((100 - distance) / 100) * 0.1;
            ctx.begin_path ();
            ctx.move_to (particles[i].x, particles[i].y);
            ctx.line_to (particles[j].x, particles[j].y);
            ctx.stroke ();          }
        }
      }
      requestAnimationFrame (animate);    }          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt (dx * dx + dy * dy);
;
          // Check condition
if ( {) {
  $2
}
            ctx.global_alpha = (100 - distance) / 100 * 0.1;
            ctx.begin_path ();
            ctx.move_to (particles[i].x, particles[i].y);
            ctx.line_to (particles[j].x, particles[j].y);
            ctx.stroke ();
          }
        }
      }
      requestAnimationFrame (animate);      requestAnimationFrame (animate);
    }
;
    animate ();
;
    return () => {
      window.removeEventListener ('resize', resize_canvas);
    }
  }, []);
;
  return (
    <div className='fixed inset - 0 -z - 10 overflow - hidden'>;
      {/* Canvas background */}
      <canvas;
        ref={canvas_ref}
        className='absolute inset - 0 w - full h - full';
        style={{
      {/* Enhanced floating orbs */}
      <div className='absolute inset-0'>;
        {/* Primary orb */}
        <motion&& motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl'
          background:;
            'radial - gradient (ellipse at center, rgba (0, 0, 0, 0) 0%, rgba (0, 0, 0, 1) 100%)',
        }}
      />;
      {/* Enhanced floating orbs */}
      <div className='absolute inset - 0'>;
        {/* Primary orb */}
        <motion.div;
          className='absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 rounded - full blur - 3xl';
          animate={{
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}

<<<<<<< HEAD
        {/* Secondary orb */}
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2]
            opacity: [0.4, 0.7, 0.4],          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.4, 0.7, 0.4]}}
          transition={{

          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,          }}
        />

        {/* Tertiary orb */}
        <motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.3, 1]
            opacity: [0.2, 0.5, 0.2],          animate={{
            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2]}}
          transition={{

=======
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut'
            delay: 4,          }}
        />

<<<<<<< HEAD
        {/* Additional orbs */}
        <motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.3, 1, 1.3]
            opacity: [0.3, 0.6, 0.3]
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Secondary orb */}
        <motion&& motion.div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.4, 0.7, 0.4]}}
            scale: [1 && 1.2, 1, 1 && 1.2],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          animate={{
            scale: [1 && 1.2, 1, 1 && 1.2]
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]}}
          transition={{
          }}
<<<<<<< HEAD
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,          }}
        />

=======
        />;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Tertiary orb */}
        <motion&& motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2]}}
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,

<<<<<<< HEAD
          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut'
            delay: 4,          }}
        />

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Additional orbs */}
        <motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.3, 1, 1.3]
            opacity: [0.3, 0.6, 0.3]
          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
        />
        <motion.div
          className='absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.4, 1]
            opacity: [0.4, 0.7, 0.4]
          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9
            repeat: Infinity
            ease: "easeInOut"
            delay: 1
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          }}
          transition={{
            duration: 11
            repeat: Infinity
            ease: 'easeInOut'
            delay: 3,            ease: "easeInOut"
            delay: 3
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,          }}
        />;




            scale: [1, 1 && 1.3, 1],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          animate={{
            scale: [1, 1 && 1.3, 1]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]}}
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,            ease: "easeInOut",
        {/* Additional orbs */}
        <motion&& motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{
          animate={{
            scale: [1 && 1.3, 1, 1 && 1.3]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{
<<<<<<< HEAD

            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
<<<<<<< HEAD
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
        />
        <motion.div
          className='absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.4, 1]
            opacity: [0.4, 0.7, 0.4]
          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9
            repeat: Infinity
            ease: "easeInOut"
            delay: 1
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1];
            opacity: [0.4, 0.7, 0.4]}}
          transition={{

=======
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1;
          }}
          animate={{
            scale: [1, 1 && 1.4, 1],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],
          animate={{
            scale: [1 && 1.3, 1, 1 && 1.3]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          }}
          transition={{
            duration: 11
            repeat: Infinity
            ease: 'easeInOut'
            delay: 3,          }}
<<<<<<< HEAD
        />
      </div>
      {/* Enhanced grid pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
<<<<<<< HEAD
            `
            `,
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          style={{
            backgroundImage: `

              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `,

            backgroundSize: '50px 50px',          }}          style={{
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
          }}
<<<<<<< HEAD
            `,
            backgroundSize: '50px 50px',          }}
=======

        />;
      </div>;


        />
      </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Floating geometric shapes */}

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {/* Triangle */}
        <motion&& motion.div
          className='absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45'

          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)

            backgroundSize: '50px 50px',          }}          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px'
          }}

        />
      </div>
      {/* Floating geometric shapes */}
      <div className='absolute inset-0'>

        {/* Triangle */}
=======
        {/* Triangle */}
        <motion&& motion.div
          className='absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45'
        />;
      </div>;
      {/* Enhanced grid pattern */}
      <div className='absolute inset - 0 opacity - 10'>;
        <div;
          className='absolute inset - 0';
          style={{
            background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px),
              linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px);
            `,
            background_size: '50px 50px',          }}          style={{
            background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px);
              linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px);
            `;
            background_size: '50px 50px';
          }}
        />;
      </div>;
      {/* Floating geometric shapes */}
      <div className='absolute inset - 0'>;
        {/* Triangle */}
        <motion.div;
          className='absolute top - 1/6 right - 1/6 w - 32 h - 32 border border - cyan - 500 / 20 rotate - 45';
          animate={{
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <motion.div
            rotate: [45, 405],
            opacity: [0 && 0.2, 0 && 0.6, 0 && 0.2],        {/* Triangle */}
        <motion && motion.div
          className="absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45"
        <motion.div;
          className="absolute top - 1/6 right - 1/6 w - 32 h - 32 border border - cyan - 500 / 20 rotate - 45";
          animate={{
            rotate: [45, 405]
            opacity: [0 && 0.2, 0 && 0.6, 0 && 0.2]}}
          transition={{

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
            duration: 20,
            repeat: Infinity,
            ease: "linear";
          }}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Square */}
        <motion&& motion.div
          className='absolute bottom-1/6 left-1/6 w-24 h-24 border border-purple-500/20'
          animate={{
          animate={{
            rotate: [0, 360]
            scale: [1, 1 && 1.2, 1]}}
          transition={{
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
            ease: 'easeInOut',          }}
            ease: 'easeInOut',

          }}


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          transition={{
            duration: 15
            repeat: Infinity
            ease: 'easeInOut',          }}
          animate={{
            rotate: [0, 360]
            scale: [1, 1 && 1.2, 1]}}
          transition={{
            duration: 15
            repeat: Infinity
            ease: "easeInOut"
          }}
<<<<<<< HEAD
        />

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Circle */}
        <motion&& motion.div
          className='absolute top-1/2 right-1/4 w-20 h-20 border border-emerald-500/20 rounded-full'
          animate={{
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1]}}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut";
          }}
        />;
        {/* Circle */}
            scale: [1, 1.5, 1];
            opacity: [0.3, 0.8, 0.3]}}
            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],          animate={{
            scale: [1, 1 && 1.5, 1]
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3]}}
          transition={{
<<<<<<< HEAD
=======
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,            ease: "easeInOut"
            delay: 2
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',

            delay: 2,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,          }}
<<<<<<< HEAD

        />;
      </div>;


      {/* Energy waves */}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute inset - 0 border border - cyan - 500 / 10 rounded - full';
            animate={{

      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (

          <motion.div
      <div className='absolute inset-0'>
<<<<<<< HEAD
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {[...Array(3)].map((_, i) => (
          <motion.div
              scale: [1, 1 && 1.5, 2, 2 && 2.5],
              opacity: [0 && 0.3, 0 && 0.2, 0 && 0.1, 0],        {[...Array(3)].map((_, i) => (;
          <motion&& motion.div


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
              scale: [1, 1.5, 2, 2.5],
              opacity: [0.3, 0.2, 0.1, 0],        {[...Array (3)].map ((_, i) => (
          <motion.div;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            key={i}
            className="absolute inset - 0 border border - cyan - 500 / 10 rounded - full";
            animate={{
              scale: [1, 1 && 1.5, 2, 2 && 2.5]
              opacity: [0 && 0.3, 0 && 0.2, 0 && 0.1, 0]}}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "ease_out",
              delay: i * 2;
            }}
            transition={{
<<<<<<< HEAD

=======
              duration: 6,
              repeat: Infinity,
              ease: 'easeOut',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              delay: i * 2,            }}
          />
        ))}
      </div>

      {/* Quantum particles */}

              duration: 6,
              repeat: Infinity,
              ease: 'easeOut',
              delay: i * 2,            }}
          />
        ))}
      </div>
      {/* Quantum particles */}
      <div className='absolute inset-0'>

      {/* Quantum particles */}
      <div className='absolute inset-0'>

        {[...Array(15)].map((_, i) => (
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <motion.div
            key={i}
            className='absolute w - 1 h - 1 bg - cyan - 400 / 60 rounded - full';
            animate={{

              x: [0, Math && Math.random() * 200 - 100],
              y: [0, Math && Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}            transition={{
              duration: 4 + Math && Math.random() * 4,
              repeat: Infinity,
              delay: Math && Math.random() * 4,              x: [0, Math && Math.random() * 200 - 100]
              y: [0, Math && Math.random() * 200 - 100]
              opacity: [0, 1, 0]
              scale: [0, 1, 0]}}
<<<<<<< HEAD
              duration: 4 + Math.random() * 4
              repeat: Infinity
              delay: Math.random() * 4
              ease: 'easeInOut'
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            }}
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
            }}          />              ease: "easeInOut";
            }}
            style={{
=======
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
            style={{
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
            }}          />              ease: "easeInOut"
            }}

            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,

<<<<<<< HEAD
          />
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100];
              y: [0, Math.random() * 200 - 100];
              opacity: [0, 1, 0];
              scale: [0, 1, 0]}}

            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`}}
          />
        ))}
      </div>;
      {/* Consciousness energy field */}
=======

        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5'
          animate={{
            opacity: [0.3, 0.6, 0.3],        <motion.div
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            key={i}
            className='absolute w - 1 h - 1 bg - cyan - 400 / 60 rounded - full';
            animate={{
        ))}
      </div>;

      {/* Consciousness energy field */}
          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5"
              coordinate_x: [0, Math.random () * 200 - 100],
              coordinate_y: [0, Math.random () * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}            transition={{
              duration: 4 + Math.random () * 4,
              repeat: Infinity,
              delay: Math.random () * 4,              coordinate_x: [0, Math.random () * 200 - 100];
              coordinate_y: [0, Math.random () * 200 - 100];
              opacity: [0, 1, 0];
              scale: [0, 1, 0]}}
              duration: 4 + Math.random () * 4,
              repeat: Infinity,
              delay: Math.random () * 4,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}          />              ease: "easeInOut";
            }}
            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`}}
        ))}
      </div>;
      {/* Consciousness energy field */}
      <div className='absolute inset - 0'>;
        <motion.div;
          className='absolute inset - 0 bg - gradient - to - r from - purple - 500 / 5 via - pink - 500 / 5 to - cyan - 500 / 5';
          animate={{
            opacity: [0.3, 0.6, 0.3],        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - purple - 500 / 5 via - pink - 500 / 5 to - cyan - 500 / 5";
          animate={{
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut";
          }}
};


    </div>);
}export default UltraFuturisticBackground2043);
}
;
export default UltraFuturisticBackground2043;
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default UltraFuturisticBackground2043;

}
}
}
}
}
}
}
}
<<<<<<< HEAD
export default UltraFuturisticBackground2043;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
