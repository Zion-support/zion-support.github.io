<<<<<<< HEAD
<<<<<<< HEAD
const UltraFuturisticBackground2043: React.FC = () => {
const UltraFuturisticBackground2043: React.FC = () => {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;
    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;
    // Set canvas size;
    const resizeCanvas = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;      canvas && canvas.height = window && window.innerHeight;
      canvas.height = window.innerHeight
    };
    resizeCanvas();
    window && window.addEventListener('resize', resizeCanvas);
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
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


    };
    resizeCanvas();
    window && window.addEventListener('resize', resizeCanvas);



      x: number;
      y: number;
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2043: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;      canvas.height = window.innerHeight
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
<<<<<<< HEAD
<<<<<<< HEAD
      max_life: number;    }> = [];      coordinate_x: number,
      coordinate_y: number,

max_life: number;    }> = [];      coordinate_x: number,
      coordinate_y: number,
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    // Particle system
    const particles: Array<{
      x: number,
      y: number,
=======
      max_life: number;    }> = [];      coordinate_x: number,
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
      life: number,
<<<<<<< HEAD
<<<<<<< HEAD
];
=======

      ];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100 + 50,
        maxLife: Math.random() * 100 + 50}
<<<<<<< HEAD
<<<<<<< HEAD
};
    // Initialize particles
    for (let i = 0, i < 100, i++) {
      particles.push(createParticle());
      maxLife: number;    }> = [];      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      life: number
      maxLife: number
    // Create particles
    const createParticle = () => {
      const colors = [
        'rgba(0, 255, 255, 0.8)', // Cyan
        'rgba(138, 43, 226, 0.8)', // Blue violet
        'rgba(255, 20, 147, 0.8)', // Deep pink
        'rgba(0, 255, 127, 0.8)', // Spring green
        'rgba(255, 215, 0, 0.8)', // Gold      ];        'rgba(0, 255, 255, 0.8)',   // Cyan
        'rgba(138, 43, 226, 0.8)',  // Blue violet
        'rgba(255, 20, 147, 0.8)',  // Deep pink
        'rgba(0, 255, 127, 0.8)',   // Spring green
        'rgba(255, 215, 0, 0.8)',   // Gold
      return {
        x: Math.random() * canvas.width
        y: Math.random() * canvas.height
        vx: (Math.random() - 0.5) * 2
        vy: (Math.random() - 0.5) * 2
        size: Math.random() * 3 + 1
        opacity: Math.random() * 0.5 + 0.3
        color: colors[Math.floor(Math.random() * colors.length)]
        life: Math.random() * 100 + 50
        maxLife: Math.random() * 100 + 50
      }
    }
    // Initialize particles
    for (let i = 0; i < 100; i++) {      particles.push(createParticle());        maxLife: Math.random() * 100 + 50}
    }
    // Initialize particles
    for (let i = 0, i < 100, i++) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    };

    // Initialize particles
    for (let i = 0, i < 100, i++) {
      particles.push(createParticle());

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
          particles[index] = createParticle();        }          particles[index] = createParticle()
=======

          particles[index] = createParticle()

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          particles[index] = createParticle()

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
<<<<<<< HEAD
<<<<<<< HEAD
        ctx.restore();      });        ctx.restore()
=======

        ctx.restore()

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        ctx.restore()

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      maxLife: number;    }> = [];      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      opacity: number,;
      color: string,;
      life: number,;
      maxLife: number;
    // Create particles;
    const createParticle = () => {;
      const colors = [;
        'rgba(0, 255, 255, 0 && 0.8)', // Cyan;
        'rgba(138, 43, 226, 0 && 0.8)', // Blue violet;
        'rgba(255, 20, 147, 0 && 0.8)', // Deep pink;
        'rgba(0, 255, 127, 0 && 0.8)', // Spring green;
        'rgba(255, 215, 0, 0 && 0.8)', // Gold      ];        'rgba(0, 255, 255, 0 && 0.8)',   // Cyan;
        'rgba(138, 43, 226, 0 && 0.8)',  // Blue violet;
        'rgba(255, 20, 147, 0 && 0.8)',  // Deep pink;
        'rgba(0, 255, 127, 0 && 0.8)',   // Spring green;
        'rgba(255, 215, 0, 0 && 0.8)',   // Gold;
      return {;
        x: Math && Math.random() * canvas && canvas.width,;
        y: Math && Math.random() * canvas && canvas.height,;
        vx: (Math && Math.random() - 0 && 0.5) * 2,;
        vy: (Math && Math.random() - 0 && 0.5) * 2,;
        size: Math && Math.random() * 3 + 1,;
        opacity: Math && Math.random() * 0 && 0.5 + 0 && 0.3,;
        color: colors[Math && Math.floor(Math && Math.random() * colors && colors.length)],;
        life: Math && Math.random() * 100 + 50,;
        maxLife: Math && Math.random() * 100 + 50,;
      };
    };
    // Initialize particles;
    for (let i = 0; i < 100; i++) {      particles && particles.push(createParticle());        maxLife: Math && Math.random() * 100 + 50}
    };
    // Initialize particles;
    for (let i = 0, i < 100, i++) {;
    }
    // Animation loop;
    const animate = () => {;
      // Clear canvas with fade effect;
      ctx && ctx.fillStyle = 'rgba(0, 0, 0, 0 && 0.05)';
      ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Update and draw particles;
      particles && particles.forEach((particle, index) => {;
        // Update position;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        // Bounce off edges;
        if (particle && particle.x <= 0 || particle && particle.x >= canvas && canvas.width) particle && particle.vx *= -1;
        if (particle && particle.y <= 0 || particle && particle.y >= canvas && canvas.height) particle && particle.vy *= -1;
        // Update life;
        particle && particle.life--;
        if (particle && particle.life <= 0) {;
          particles[index] = createParticle();        }          particles[index] = createParticle();
        }
        // Draw particle;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = particle && particle.opacity * (particle && particle.life / particle && particle.maxLife);
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
        ctx && ctx.restore();      });        ctx && ctx.restore();
      });
      // Draw connecting lines between nearby particles;
      ctx && ctx.strokeStyle = 'rgba(0, 255, 255, 0 && 0.1)';
      ctx && ctx.lineWidth = 0 && 0.5;
      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {;
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math && Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {;
            ctx && ctx.globalAlpha = ((100 - distance) / 100) * 0 && 0.1;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particles[i].x, particles[i].y);
            ctx && ctx.lineTo(particles[j].x, particles[j].y);
            ctx && ctx.stroke();          }
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.globalAlpha = ((100 - distance) / 100) * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();          }
        }
      }
      requestAnimationFrame(animate);    };          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
<<<<<<< HEAD
<<<<<<< HEAD
          }
        }
      }
      requestAnimationFrame(animate)
    };
    animate();
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],  }, [])
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, []);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],  }, [])


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">;
=======
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      />;


      {/* Enhanced floating orbs */}
      <div className="absolute inset-0">;
        {/* Primary orb */}
        <motion&& motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
;
  return (
    <div className="fixed inset - 0 -z - 10 overflow - hidden">;
      {/* Canvas background */}
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w - full h - full";
        style={{ background: 'radial - gradient (ellipse at center, rgba (0, 0, 0, 0) 0%, rgba (0, 0, 0, 1) 100%)' }}
      />;
      {/* Enhanced floating orbs */}
      <div className="absolute inset - 0">;
        {/* Primary orb */}
        <motion.div;
          className="absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 rounded - full blur - 3xl";
          animate={{
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
          transition={{


=======
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut";
          }}

        />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Secondary orb */}
        <motion&& motion.div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />
        {/* Secondary orb */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />;
        {/* Secondary orb */}
        <motion.div;
          className='absolute bottom - 1/4 right - 1/4 w - 80 h - 80 bg - gradient - to - r from - purple - 500 / 10 to - pink - 500 / 10 rounded - full blur - 3xl';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.4, 0.7, 0.4]}}
            scale: [1 && 1.2, 1, 1 && 1.2],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          animate={{
            scale: [1 && 1.2, 1, 1 && 1.2]
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]}}
          transition={{
<<<<<<< HEAD

<<<<<<< HEAD


            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,            ease: "easeInOut",
            delay: 2;
          }}
        />;
=======
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',

            delay: 2,



          }}

        />;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Tertiary orb */}
        <motion&& motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl'
          animate={{
<<<<<<< HEAD
        />
        {/* Tertiary orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
        />;
        {/* Tertiary orb */}
        <motion.div;
          className='absolute top - 1/2 left - 1/2 w - 64 h - 64 bg - gradient - to - r from - emerald - 500 / 10 to - teal - 500 / 10 rounded - full blur - 3xl';
          animate={{
            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2]}}
=======


            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2]}}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            scale: [1, 1 && 1.3, 1],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          animate={{
            scale: [1, 1 && 1.3, 1]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]}}
<<<<<<< HEAD
          transition={{
=======


          transition={{


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,            ease: "easeInOut",
            delay: 4;
          }}
<<<<<<< HEAD
        />;
=======

        />;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Additional orbs */}
        <motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{
<<<<<<< HEAD
            scale: [1 && 1.3, 1, 1 && 1.3],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
        />;
        <motion&& motion.div
          className='absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl'
        />
        {/* Additional orbs */}
        <motion.div
          className="absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"
        />;
        {/* Additional orbs */}
        <motion.div;
          className='absolute top - 3/4 left - 1/3 w - 48 h - 48 bg - gradient - to - r from - yellow - 500 / 10 to - orange - 500 / 10 rounded - full blur - 3xl';
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.6, 0.3],
          animate={{
            scale: [1.3, 1, 1.3];

        // Draw particle
        ctx.save(),
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife),
        ctx.fillStyle = particle.color,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fill(),
        ctx.restore()
      }),

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)',
      ctx.lineWidth = 0.5,
      
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.1,
            ctx.beginPath(),
            ctx.moveTo(particles[i].x, particles[i].y),
            ctx.lineTo(particles[j].x, particles[j].y),
            ctx.stroke()
          }

        }
      }

      requestAnimationFrame(animate)
    },

    animate(),

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, []),

  return (
    <div className=&quot;fixed inset-0 -z-10 overflow-hidden&quot;>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className=&quot;absolute inset-0 w-full h-full&quot;
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Enhanced floating orbs */}
      <div className=&quot;absolute inset-0&quot;>
        {/* Primary orb */}
        <motion.div
          className=&quot;absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl&quot;
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: &quot;easeInOut&quot;
          }}
        />

        {_/* Secondary orb */}
        <motion.div
          className=&quot;absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl&quot;
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]}}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: &quot;easeInOut&quot;,
            delay: 2
          }}
        />

        {_/* Tertiary orb */}
        <motion.div
          className=&quot;absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl&quot;
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]}}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: &quot;easeInOut&quot;,
            delay: 4
          }}
        />

        {_/* Additional orbs */}
        <motion.div
          className=&quot;absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl&quot;
          animate={{
            scale: [1.3, 1, 1.3],

            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9
            repeat: Infinity
            ease: "easeInOut"
            delay: 1
            scale: [1, 1 && 1.3, 1],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          animate={{
            scale: [1, 1 && 1.3, 1]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]}}


          transition={{


            duration: 12,
            repeat: Infinity,
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,          }}
        />;

            delay: 4;
          }}

        />;





        {/* Additional orbs */}
        <motion&& motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{


          animate={{
            scale: [1 && 1.3, 1, 1 && 1.3]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{

            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
ease: 'easeInOut',
            delay: 1,          }}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
        />;
        <motion.div;
          className='absolute top - 1/3 right - 1/3 w - 56 h - 56 bg - gradient - to - r from - red - 500 / 10 to - pink - 500 / 10 rounded - full blur - 3xl';
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1;
          }}
<<<<<<< HEAD
        />;
        <motion.div;
=======

        />;
        <motion.div;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          animate={{
            scale: [1, 1 && 1.4, 1],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],
          animate={{
            scale: [1 && 1.3, 1, 1 && 1.3]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{
<<<<<<< HEAD
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,            ease: "easeInOut",
            delay: 3;
      />
      {/* Enhanced floating orbs */}
      <div className="absolute inset-0">
        {/* Primary orb */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 8
            repeat: Infinity
            ease: "easeInOut"
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />

        {/* Secondary orb */}
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2]
            opacity: [0.4, 0.7, 0.4],          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.4, 0.7, 0.4]}}
          transition={{
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,            ease: "easeInOut"
            delay: 2
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            delay: 2,

          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,          }}
        />

<<<<<<< HEAD
        {/* Tertiary orb */}
        <motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.3, 1]
            opacity: [0.2, 0.5, 0.2],          animate={{
=======
        />;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Tertiary orb */}
        <motion&& motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl'
          animate={{


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2]}}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut'
            delay: 4,            ease: "easeInOut"
            delay: 4
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,

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
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1];
            opacity: [0.4, 0.7, 0.4]}}
=======

          }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 11
            repeat: Infinity
            ease: 'easeInOut'
            delay: 3,            ease: "easeInOut"
            delay: 3
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
<<<<<<< HEAD
            delay: 3,
=======

            duration: 11,
            repeat: Infinity,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            delay: 4,          }}
        />;

=======
            delay: 4;
          }}

        />;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Additional orbs */}
        <motion&& motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{


          animate={{
            scale: [1 && 1.3, 1, 1 && 1.3]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
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

          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1;
          }}

        />;
        <motion.div;

          animate={{
            scale: [1, 1 && 1.4, 1],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],
          animate={{
            scale: [1 && 1.3, 1, 1 && 1.3]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{

            duration: 11,
            repeat: Infinity,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          }}
          transition={{
            duration: 11
            repeat: Infinity
            ease: 'easeInOut'
            delay: 3,          }}
<<<<<<< HEAD
=======
        />
      </div>
      {/* Enhanced grid pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
      </div>;


      {/* Enhanced grid pattern */}





<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          style={{
            backgroundImage: `

              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `,

            backgroundSize: '50px 50px',          }}          style={{

<<<<<<< HEAD
<<<<<<< HEAD
        />;
      </div>;
      {/* Enhanced grid pattern */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
          }}

        />;
      </div>;


      {/* Floating geometric shapes */}
<<<<<<< HEAD


        {/* Triangle */}
        <motion&& motion.div
          className='absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45'
<<<<<<< HEAD
        />;
      </div>;
      {/* Floating geometric shapes */}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <div className='absolute inset-0'>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Triangle */}
        <motion&& motion.div
          className='absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45'
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="absolute inset-0">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <div className="absolute inset-0">
        {/* Triangle */}

        <motion.div
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'

          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
<<<<<<< HEAD
            `
            `,
            backgroundSize: '50px 50px',          }}          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px'
          }}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            `,
            backgroundSize: '50px 50px',          }}

          }}

        />
      </div>
      {/* Floating geometric shapes */}
      <div className='absolute inset-0'>

        {/* Triangle */}
        <motion.div
            rotate: [45, 405],
            opacity: [0 && 0.2, 0 && 0.6, 0 && 0.2],        {/* Triangle */}
        <motion && motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45"
        <motion.div;
          className="absolute top - 1/6 right - 1/6 w - 32 h - 32 border border - cyan - 500 / 20 rotate - 45";
          animate={{
            rotate: [45, 405]
            opacity: [0 && 0.2, 0 && 0.6, 0 && 0.2]}}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
          transition={{


            duration: 20,
            repeat: Infinity,
            ease: "linear";
          }}

<<<<<<< HEAD
          transition={{
=======

=======
          }}
          transition={{
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 20
            repeat: Infinity
            ease: 'linear',          }}
        />
            duration: 20,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'linear',          }}
        />

=======
=======
            ease: "linear";
          }}

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
        {/* Square */}
        <motion&& motion.div
          className='absolute bottom-1/6 left-1/6 w-24 h-24 border border-purple-500/20'
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
            rotate: [0, 360],
            scale: [1, 1 && 1.2, 1],
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            rotate: [0, 360],
            scale: [1, 1 && 1.2, 1],

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          animate={{
            rotate: [0, 360]
            scale: [1, 1 && 1.2, 1]}}
          transition={{
<<<<<<< HEAD


            duration: 15,
            repeat: Infinity,


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 15
            repeat: Infinity
            ease: 'easeInOut',          }}
            duration: 15,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'easeInOut',

          }}
            ease: 'easeInOut',          }}
            ease: 'easeInOut',

          }}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

        />;
        />
<<<<<<< HEAD




=======
<<<<<<< HEAD
=======
=======
        />

        />;
=======
        />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Circle */}
        <motion&& motion.div
          className='absolute top-1/2 right-1/4 w-20 h-20 border border-emerald-500/20 rounded-full'
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />
        {/* Square */}
        <motion.div
          className="absolute bottom-1/6 left-1/6 w-24 h-24 border border-purple-500/20"
        />;
        {/* Square */}
        <motion.div;
          className='absolute bottom - 1/6 left - 1/6 w - 24 h - 24 border border - purple - 500 / 20';
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1]}}
          transition={{
            duration: 15,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
ease: 'easeInOut',          }}
=======
            ease: 'easeInOut',          }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            ease: 'easeInOut',          }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
        <motion.div;
          className='absolute top - 1/2 right - 1/4 w - 20 h - 20 border border - emerald - 500 / 20 rounded - full';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <motion.div;
          className='absolute top - 1/2 right - 1/4 w - 20 h - 20 border border - emerald - 500 / 20 rounded - full';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          animate={{
            scale: [1, 1.5, 1];
            opacity: [0.3, 0.8, 0.3]}}
            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],          animate={{
            scale: [1, 1 && 1.5, 1]
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3]}}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,            ease: "easeInOut"
            delay: 2
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
<<<<<<< HEAD
            delay: 2,

=======

            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',

            delay: 2,



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            delay: 2,

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,          }}
<<<<<<< HEAD
<<<<<<< HEAD
        />;
      </div>;
      {/* Energy waves */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
      </div>;


      {/* Energy waves */}

        />;
      </div>;
      {/* Energy waves */}
      <div className='absolute inset - 0'>;
        {[...Array (3)].map ((_, i) => (
          <motion.div;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Energy waves */}
      <div className='absolute inset-0'>



        {[...Array(3)].map((_, i) => (
          <motion.div
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            key={i}
            className='absolute inset - 0 border border - cyan - 500 / 10 rounded - full';
            animate={{

      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (

          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
            key={i}
            className='absolute inset - 0 border border - cyan - 500 / 10 rounded - full';
            animate={{
      <div className="absolute inset-0">
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='absolute inset-0'>

        {[...Array(3)].map((_, i) => (
          <motion.div
              scale: [1, 1 && 1.5, 2, 2 && 2.5],
              opacity: [0 && 0.3, 0 && 0.2, 0 && 0.1, 0],        {[...Array(3)].map((_, i) => (;
          <motion&& motion.div
<<<<<<< HEAD
<<<<<<< HEAD
              scale: [1, 1.5, 2, 2.5],
              opacity: [0.3, 0.2, 0.1, 0],        {[...Array (3)].map ((_, i) => (
          <motion.div;
              scale: [1, 1.5, 2, 2.5],
              opacity: [0.3, 0.2, 0.1, 0],        {[...Array (3)].map ((_, i) => (
          <motion.div;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
              scale: [1, 1.5, 2, 2.5],
              opacity: [0.3, 0.2, 0.1, 0],        {[...Array (3)].map ((_, i) => (
          <motion.div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            key={i}
            className="absolute inset - 0 border border - cyan - 500 / 10 rounded - full";
            animate={{
              scale: [1, 1 && 1.5, 2, 2 && 2.5]
              opacity: [0 && 0.3, 0 && 0.2, 0 && 0.1, 0]}}
            transition={{

      </div>;


<<<<<<< HEAD
<<<<<<< HEAD
      </div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Quantum particles */}
      <div className='absolute inset-0'>;
          <motion&& motion.div
              duration: 6,
              repeat: Infinity,
              ease: "ease_out",
              delay: i * 2;
            }}
            transition={{
<<<<<<< HEAD
<<<<<<< HEAD
              duration: 6
              repeat: Infinity
              ease: 'easeOut'
              duration: 6,
              repeat: Infinity,
              ease: 'easeOut',
=======
<<<<<<< HEAD
              duration: 6,
              repeat: Infinity,
              ease: 'ease_out',
              delay: i * 2,            }}
          />))}
      </div>;
      {/* Quantum particles */}

      <div className='absolute inset - 0'>;
          <motion.div;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              duration: 6,
              repeat: Infinity,
              ease: 'easeOut',
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              delay: i * 2,            }}
          />
        ))}
      </div>
<<<<<<< HEAD

=======
      {/* Quantum particles */}
      <div className='absolute inset-0'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      {/* Quantum particles */}
      <div className='absolute inset-0'>

        {[...Array(15)].map((_, i) => (

          <motion.div
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            key={i}
            className='absolute w - 1 h - 1 bg - cyan - 400 / 60 rounded - full';
            animate={{

<<<<<<< HEAD
<<<<<<< HEAD
            key={i}
            className='absolute w - 1 h - 1 bg - cyan - 400 / 60 rounded - full';
            animate={{
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              duration: 4 + Math && Math.random() * 4,
              repeat: Infinity,
<<<<<<< HEAD
              delay: Math && Math.random() * 4,
              ease: 'easeInOut',
=======
              delay: Math.random() * 4,
              ease: 'easeInOut',
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }}
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
            }}          />              ease: "easeInOut";
            }}
            style={{;
              left: `${Math && Math.random() * 100}%`,;
              top: `${Math && Math.random() * 100}%`}}
<<<<<<< HEAD
<<<<<<< HEAD
      </div>
      <div className='absolute inset-0'>
      {/* Quantum particles */}
      <div className='absolute inset-0'>

      {/* Quantum particles */}
      <div className='absolute inset-0'>

        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100];
              y: [0, Math.random() * 200 - 100];
              opacity: [0, 1, 0];
              scale: [0, 1, 0]}}
              duration: 4 + Math.random() * 4
              repeat: Infinity
              delay: Math.random() * 4
              ease: 'easeInOut'
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`}}
          />
        ))}
      </div>;
      {/* Consciousness energy field */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        ))}
      </div>;
      {/* Consciousness energy field */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5'
          animate={{
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],        <motion && motion.div

      <div className="absolute inset-0">
        <motion.div

          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5"
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className='absolute inset-0'>

            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
=======

          className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5'
          animate={{
            opacity: [0.3, 0.6, 0.3],        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5"
=======
      <div className='absolute inset-0'>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          />

        ))}
      </div>

      {/* Consciousness energy field */}
      <div className='absolute inset-0'>

        <motion.div
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut";
          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 10
            repeat: Infinity
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',          }}
<<<<<<< HEAD
        />
      </div>
    </div>
  )
=======


            duration: 10,
            repeat: Infinity,


            ease: 'easeInOut',          }}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
      </div>;

};export default UltraFuturisticBackground2043;  );

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
export default UltraFuturisticBackground2043;


<<<<<<< HEAD
<<<<<<< HEAD
export default UltraFuturisticBackground2043;

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>);
}export default UltraFuturisticBackground2043);
}
;
export default UltraFuturisticBackground2043;
;

=======

export default UltraFuturisticBackground2043;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default UltraFuturisticBackground2043;

}
}
}
}
}
}
}
}

export default UltraFuturisticBackground2043;

export default UltraFuturisticBackground2043;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default UltraFuturisticBackground2043;

}
}
}
}
}
}
}
}
export default UltraFuturisticBackground2043;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
