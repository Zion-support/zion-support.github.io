

  const canvas_ref = useRef < HTMLCanvasElement>(null);

;
  useEffect (() => {
    const canvas = canvas_ref.current;


    };
    resizeCanvas();
    window && window.addEventListener('resize', resizeCanvas);



      x: number;
      y: number;
  const canvas_ref = useRef < HTMLCanvasElement>(null);
;
  useEffect (() => {
    const canvas = canvas_ref.current;
    // Check condition
if (return) {
  $2

    }import React, { useEffect, useRef } from 'react';
import { motion  } from 'framer-motion';
const UltraFuturisticBackground2043: React.FC;resizeCanvas()window && window.addEventListener('resize', resizeCanvas)const canvas_ref  = useRef < HTMLCanvasElement>(null)useEffect (() => {const canvas = canvas_ref.current;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Check condition;
if (return) {
  $2}
}
}

const ctx = canvas.get_context ('2d')// Check condition;
if (return) {$2;}
}
    // Set canvas size;
<<<<<<< HEAD


=======
    const resize_canvas = () =>: any {canvas.width = window.inner_width;
      canvas.height = window.inner_height;      canvas.height = window.inner_height;
      coordinate_x: number;
      coordinate_y: number;
      vx: number;
    }resize_canvas ()window.addEventListener ('resize', resize_canvas)// Particle system;
    const particles: Array<{coordinate_x: number;
      coordinate_y: number;x: number;
      y: number;vx: number;
>>>>>>> origin/cursor/delete-old-data-records-6bba

const resize_canvas = () =>: any {canvas.width = window.inner_width;}
      canvas.height = window.inner_height;      canvas.height = window.inner_height}
};

<<<<<<< HEAD

    resize_canvas ();

=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const UltraFuturisticBackground2043: React.FC;
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
    // Check condition;
if (return) {}
  $2;
}'
    const ctx = canvas.get_context ('2d');
    // Check condition;
if (return) {}
  $2;
}
    // Set canvas size;
    const resize_canvas = () =>: any {}
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;      canvas.height = window.inner_height;
    }
;
    resize_canvas ();'
>>>>>>> origin/cursor/delete-old-data-records-6bba
    window.addEventListener ('resize', resize_canvas);
;
    // Particle system;
    const particles: Array<{}
      coordinate_x: number;
      coordinate_y: number;
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
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const UltraFuturisticBackground2043: React.FC = $2;
  useEffect(() => {
    const canvas = $2;
    if (!canvas) return,

const particles: Array<{

x: number;
      y: number;
      vx: number;

      vy: number;
      size: number;
      opacity: number;
      color: string;

      life: number;

    // Particle system
    const particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      opacity: number,
      color: string,
      life: number,

      vy: number;
      size: number;
      opacity: number;
      color: string;

        rgba(138, 43, 226, 0.8)',  // Blue violet
        'rgba(255, 20, 147, 0.8),  // Deep pink
        rgba(0, 255, 127, 0.8)',   // Spring green
        'rgba(255, 215, 0, 0.8),   // Gold

>>>>>>> origin/cursor/delete-old-data-records-6bba

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
    };






    }

    // Animation loop;
const animate = (
      // Clear canvas with fade effect;
ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height)// Update and draw particles;
      particles.forEach((particle, index) => {// Update position;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        particle.x += particle.vx;
        particle.y += particle.vy;
        // Bounce off edges;
        if (particle.x <= 0 |particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 |particle.y >= canvas.height) particle.vy *= -1;
        // Update life;
        particle.life--;
<<<<<<< HEAD


        // Draw particle
      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
        if (particle.life <= 0) {particles[index] = createParticle()}
        // Draw particle;
        ctx.save()ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife)ctx.fillStyle = particle.color;
        ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fill()ctx.restore()})// Draw connecting lines between nearby particles;
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;if (distance < 100) {ctx && ctx.globalAlpha = ((100 - distance) / 100) * 0 && 0.1;
            ctx && ctx.beginPath()ctx && ctx.moveTo(particles[i].x, particles[i].y)ctx && ctx.lineTo(particles[j].x, particles[j].y)ctx && ctx.stroke()}
        if (particle.life <= 0) {
particles[index] = createParticle();
origin/cursor/automate-test-improve-and-merge-code-2533
        }
        // Draw particle;
        ctx.save();

    }
    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx,
        particle.y += particle.vy,

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1,
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1,

        // Update life
        particle.life--,
        if (particle.life <= 0) {

          particles[index] = createParticle()

        }

        // Draw particle
        ctx.save($2);
        ctx.globalAlpha = $2;
        ctx.fillStyle = $2;
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fill($2);
        ctx.restore()
      }),

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)',
      ctx.lineWidth = $2;
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = $2;
          const dy = $2;
          const distance = Math.sqrt($2);
          if (distance < 100) {
            ctx.globalAlpha = $2;
            ctx.beginPath($2);
            ctx.moveTo($2);
            ctx.lineTo($2);
            ctx.stroke()
          }
        }
        // Draw particle;
ctx.save();
>>>>>>> origin/cursor/delete-old-data-records-6bba
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();


      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;

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
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math && Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {;
            ctx && ctx.globalAlpha = ((100 - distance) / 100) * 0 && 0.1;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particles[i].x, particles[i].y);
            ctx && ctx.lineTo(particles[j].x, particles[j].y);
            ctx && ctx.stroke();          }
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


=======
          }
        }
      }



    };
    animate();



  }, []);
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
      max_life: number;
    // Create particles;
    const create_particle = () =>: any {const colors = [;
        'rgba (0, 255, 255, 0.8)', // Cyan;
        'rgba (138, 43, 226, 0.8)', // Blue violet;
        'rgba (255, 20, 147, 0.8)', // Deep pink;
        'rgba (0, 255, 127, 0.8)', // Spring green;
        'rgba (255, 215, 0, 0.8)', // Gold      ];        'rgba (0, 255, 255, 0.8)',   // Cyan;
        'rgba (138, 43, 226, 0.8)',  // Blue violet;
        'rgba (255, 20, 147, 0.8)',  // Deep pink;
        'rgba (0, 255, 127, 0.8)',   // Spring green;
        'rgba (255, 215, 0, 0.8)',   // Gold;
      return {coordinate_x: Math.random () * canvas.width,coordinate_y: Math.random () * canvas.height,vx: (Math.random () - 0.5) * 2,vy: (Math.random () - 0.5) * 2,size: Math.random () * 3 + 1,opacity: Math.random () * 0.5 + 0.3,color: colors[Math.floor (Math.random () * colors.length)],life: Math.random () * 100 + 50,max_life: Math.random () * 100 + 50,}
    }// Initialize particles;
    for (let index = 0; i < 100; i++) {      particles.push (create_particle ())max_life: Math.random () * 100 + 50}
    }// Initialize particles;
    for (let index = 0, i < 100, i++) {}
    // Animation loop;
    const animate = () =>: any {// Clear canvas with fade effect;
      ctx.fill_style = 'rgba (0, 0, 0, 0.05)';
      ctx.fill_rect (0, 0, canvas.width, canvas.height)// Update and draw particles;
      particles.for_each ((particle, index) => {// Update position;
        particle.x += particle.vx;
        particle.y += particle.vy;// Bounce off edges;
        // Check condition;
if (particle.vx *= -1) {$2;
}
        // Check condition;
if (particle.vy *= -1) {$2;
      requestAnimationFrame(animate)
};          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
      max_life: number;
    // Create particles;
    const create_particle = () =>: any {}
      const colors = [;'
        'rgba (0, 255, 255, 0.8)', // Cyan;'
        'rgba (138, 43, 226, 0.8)', // Blue violet;'
        'rgba (255, 20, 147, 0.8)', // Deep pink;'
        'rgba (0, 255, 127, 0.8)', // Spring green;'
        'rgba (255, 215, 0, 0.8)', // Gold      ];        'rgba (0, 255, 255, 0.8)',   // Cyan;'
        'rgba (138, 43, 226, 0.8)',  // Blue violet;'
        'rgba (255, 20, 147, 0.8)',  // Deep pink;'
        'rgba (0, 255, 127, 0.8)',   // Spring green;'
        'rgba (255, 215, 0, 0.8)',   // Gold;
      return {}
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
    for (let index = 0, i < 100, i++) {}
    }
    // Animation loop;
    const animate = () =>: any {}
      // Clear canvas with fade effect;'
      ctx.fill_style = 'rgba (0, 0, 0, 0.05)';
      ctx.fill_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles.for_each ((particle, index) => {}
        // Update position;
        particle.x += particle.vx;
        particle.y += particle.vy;
;
        // Bounce off edges;
        // Check condition;
if (particle.vx *= -1) {}
  $2;
}
        // Check condition;
if (particle.vy *= -1) {}
  $2;
}
        // Update life;
        particle.life--;
        // Check condition;
if ( {) {$2;
}
          particles[index] = create_particle ()}          particles[index] = create_particle ()}
        // Draw particle;
        ctx.save ()ctx.global_alpha = particle.opacity * (particle.life / particle.max_life)ctx.fill_style = particle.color;
        ctx.begin_path ()ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fill ()ctx.restore ()})ctx.restore ()})// Draw connecting lines between nearby particles;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.1)';
      ctx.line_width = 0.5;for (let index = 0; i < particles.length; i++) {for (let inner_index = i + 1; j < particles.length; j++) {const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance  = Math.sqrt (dx * dx + dy * dy)// Check condition;
if ( {) {$2;
}
            ctx.global_alpha = ((100 - distance) / 100) * 0.1;
            ctx.begin_path ()ctx.move_to (particles[i].x, particles[i].y)ctx.line_to (particles[j].x, particles[j].y)ctx.stroke ()}
        }
      }
      requestAnimationFrame (animate)}          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance  = Math.sqrt (dx * dx + dy * dy)// Check condition;
if ( {) {$2;
}
            ctx.global_alpha = (100 - distance) / 100 * 0.1;
            ctx.begin_path ()ctx.move_to (particles[i].x, particles[i].y)ctx.line_to (particles[j].x, particles[j].y)ctx.stroke ()}
        }
      }
      requestAnimationFrame (animate)requestAnimationFrame (animate)}animate ()return () => {window.removeEventListener ('resize', resize_canvas)}for (let i = 0; i < particles.length; i++) {for (let j = i + 1; j < particles.length; j++) {const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy)if (distance < 100) {ctx.globalAlpha = ((100 - distance) / 100) * 0.1;

<<<<<<< HEAD
            ctx.beginPath()ctx.moveTo(particles[i].x, particles[i].y)ctx.lineTo(particles[j].x, particles[j].y)ctx.stroke()}

        }
      }


=======
for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;

const dy = particles[i].y - particles[j].y;
}
const distance = Math.sqrt(dx * dx + dy * dy)if (distance < 100) {ctx.globalAlpha = ((100 - distance) / 100) * 0.1;}
            ctx.beginPath()ctx.moveTo(particles[i].x, particles[i].y)ctx.lineTo(particles[j].x, particles[j].y)ctx.stroke()}
        }
      }

      requestAnimationFrame(animate)
    },

    animate($2);
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, []),

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Enhanced floating orbs */}
      <div className="absolute inset-0">
        {/* Primary orb */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]}}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Secondary orb */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
        particle.x += particle.vx;
        particle.y += particle.vy;// Bounce off edges;
        // Check condition;
if (particle.vx *= -1) {$2;
}
window.removeEventListener('resize', resizeCanvas)'
};

  }, []);
;
  return (
    <div className='fixed inset - 0 -z - 10 overflow - hidden'>;
      {/* Canvas background */}
      <canvas;
        ref={canvas_ref}
        className='absolute inset - 0 w - full h - full';

<<<<<<< HEAD
        style={{

      />;


      {/* Enhanced floating orbs */}
      <div className='absolute inset-0'>;
        {/* Primary orb */}
        <motion&& motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl'
          background:;
            'radial - gradient (ellipse at center, rgba (0, 0, 0, 0) 0%, rgba (0, 0, 0, 1) 100%)'}}
         />;
      {/* Enhanced floating orbs */}

      <div className='absolute inset - 0'    />;
        {/* Primary orb */}
        <motion.div;
          className='absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 rounded - full blur - 3xl';
          animate={{

            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],  }, [])


  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">;
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],  }, [])
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, []);
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
=======
        className='absolute inset - 0 w - full h - full';'
        style={{{/* Enhanced floating orbs */}
      <div className='absolute inset-0'>;'
        {/* Primary orb */}
        <motion&& motion.div;
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl';'
          "background":;
            'radial - gradient (ellipse at center, rgba (0, 0, 0, 0) 0%, rgba (0, 0, 0, 1) 100%)'}}' />;
      {/* Enhanced floating orbs */}
      <div className='absolute inset - 0'>;
        {/* Primary orb */}
        <motion.div;'
          className='absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 rounded - full blur - 3xl';
          animate={{
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],  }, [])
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, []);

      {/* Canvas background */}
      <canvas;
        ref={canvas_ref}
        className=absolute inset - 0 w - full h - full';

      <div className='absolute inset - 0>;
        {/* Primary orb */}
        <motion.div;
          className='absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 rounded - full blur - 3xl';

          }}
        />
            scale: [1, 1.2, 1]}
            opacity: [0.3, 0.6, 0.3]}
          }}
          transition={{
            duration: 8,
            repeat: Infinity}
            ease: 'easeInOut'}
          }}
           />

        {/* Secondary orb */}
        <motion.div;
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
        {/* Tertiary orb */}
        ctx.save($2);
        ctx.globalAlpha = $2;
        ctx.fillStyle = $2;
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fill($2);
        ctx.restore()
      }),

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)',
      ctx.lineWidth = $2;
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = $2;
          const dy = $2;
          const distance = Math.sqrt($2);
          if (distance < 100) {
            ctx.globalAlpha = $2;
            ctx.beginPath($2);
            ctx.moveTo($2);
            ctx.lineTo($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba
            ctx.stroke()
          }
        }
      }
<<<<<<< HEAD
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

      />;


      {/* Enhanced floating orbs */}
      <div className="absolute inset-0">
        {/* Primary orb */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{

          }}
          transition={{


            duration: 8,
            repeat: Infinity,
            ease: "easeInOut";
          }}
            "scale": [1, 1.2, 1],
            "opacity": [0.3, 0.6, 0.3]
          }}
          transition={{
>>>>>>> origin/cursor/delete-old-data-records-6bba



        />;


        {/* Secondary orb */}
        <motion&& motion.div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{

        />
        {/* Secondary orb */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />;
        {/* Secondary orb */}
        <motion.div;
          className='absolute bottom - 1/4 right - 1/4 w - 80 h - 80 bg - gradient - to - r from - purple - 500 / 10 to - pink - 500 / 10 rounded - full blur - 3xl';

          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.4, 0.7, 0.4]}}
            scale: [1 && 1.2, 1, 1 && 1.2],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          animate={{
            scale: [1 && 1.2, 1, 1 && 1.2]
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]}}
          transition={{

            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',

        {/* Additional orbs */}
        <motion.div
          className="absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"



          }}

        />;




            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,            ease: "easeInOut",
            delay: 2;
          }}
        />;
          }}
        {/* Tertiary orb */}
        <motion&& motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl'
          animate={{


            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2]}}
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
            scale: [1, 1 && 1.3, 1],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          animate={{
            scale: [1, 1 && 1.3, 1]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]}}




            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,            ease: "easeInOut",
            delay: 4;
          }}

        />;





        />;
        {/* Additional orbs */}
        <motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{


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

            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,

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
        {/* Additional orbs */}
        <motion.div;
className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl';
          animate={{scale: [1.3, 1, 1.3],opacity: [0.3, 0.6, 0.3],}}
          transition={{duration: 9,repeat: Infinity,ease: 'easeInOut',delay: 1,}}
        />;
        <motion.div;
className='absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl';
          animate={{scale: [1, 1.4, 1];
            opacity: [0.4, 0.7, 0.4];
          animate={{scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1;
          }}

            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut'}
  delay: 3}
          }}
          transition={{
            duration: 11;
repeat: Infinity;}
ease: 'easeInOut'}
            delay: 3          }}

           />
      </div>
      {/* Enhanced grid pattern */}
<div className='absolute inset-0 opacity-10'    />
        <div;
className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)

              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `,

            backgroundSize: '50px 50px',          }}          style={{

        />;
      </div>;
      {/* Enhanced grid pattern */}
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
          }}

           />;
      </div>;

        />
      </div>
      {/* Floating geometric shapes */}

        {/* Triangle */}
        <motion&& motion.div
          className='absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45'
        />;
      </div>;
      {/* Enhanced grid pattern */}
      <div className='absolute inset - 0 opacity - 10'>;
        <div;
          className='absolute inset - 0';
          style={{background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px),linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px)`,background_size: '50px 50px',          }}          style={{background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px)linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px)`;
            background_size: '50px 50px';
          }}
        />;
      </div>;
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4]}}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3}}
        />
      </div>

      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'

<<<<<<< HEAD
=======
<div className='absolute inset-0'    />

        {/* Triangle */}
        <motion&& motion.div;
          className='absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45';
           />;
      </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Enhanced grid pattern */}
      <div className='absolute inset - 0 opacity - 10'    />;
        <div;
          className='absolute inset - 0';
          style={{background_image: `;}
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px),linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px)`,background_size: '50px 50px'          }}          style={{background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px)linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px)`;}
            background_size: '50px 50px';}
          }}
           />;
      </div>;
      {/* Floating geometric shapes */}
      <div className='absolute inset - 0'    />;
        {/* Triangle */}
        <motion.div;
          className='absolute top - 1/6 right - 1/6 w - 32 h - 32 border border - cyan - 500 / 20 rotate - 45';
          animate={{

      <div className="absolute inset-0">
        {/* Triangle */}

        <motion.div
      <div className="absolute inset-0">
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'

          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `
            `,
            backgroundSize: '50px 50px',          }}          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px'
          }}
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
          className="absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45"
        <motion.div;
          className="absolute top - 1/6 right - 1/6 w - 32 h - 32 border border - cyan - 500 / 20 rotate - 45";
          animate={{
            rotate: [45, 405]
            opacity: [0 && 0.2, 0 && 0.6, 0 && 0.2]}}
          transition={{

          }}
          transition={{


            duration: 20,
            repeat: Infinity,
            ease: "linear";
          }}

        />;


          transition={{
            duration: 20
            repeat: Infinity
            ease: 'linear',          }}
        />
            duration: 20,
            repeat: Infinity,
            ease: 'linear',          }}
        />
>>>>>>> origin/cursor/delete-old-data-records-6bba

        {/* Square */}
        <motion&& motion.div
          className='absolute bottom-1/6 left-1/6 w-24 h-24 border border-purple-500/20'
          animate={{

            rotate: [0, 360],
            scale: [1, 1 && 1.2, 1],

          animate={{
            rotate: [0, 360]
            scale: [1, 1 && 1.2, 1]}}
          transition={{


            duration: 15,
            repeat: Infinity,


            ease: 'easeInOut',          }}
            ease: 'easeInOut',

          }}

          transition={{

      <div className='absolute inset-0'>
        {/* Triangle */}
        <motion&& motion.div
          className='absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45'
           />
      </div>
      {/* Enhanced grid pattern */}
      <div className='absolute inset - 0 opacity - 10'    />
        <div
          className='absolute inset - 0'
          style={{background_image: `;}
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px),linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px)`,background_size: '50px 50px'          }}          style={{background_image: `
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px)linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px)`;}
            background_size: '50px 50px';}
          }}
           />
      </div>
      {/* Floating geometric shapes */}
      <div className='absolute inset - 0'    />
        {/* Triangle */}
        <motion.div
          className='absolute top - 1/6 right - 1/6 w - 32 h - 32 border border - cyan - 500 / 20 rotate - 45'
          animate={{}
        <motion.div
            rotate: [45, 405],
            opacity: [0 && 0.2, 0 && 0.6, 0 && 0.2],        {/* Triangle */}
        <motion && motion.div"
          className="absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45"

          transition={{
            duration: 15
            repeat: Infinity
            ease: 'easeInOut',          }}
          animate={{}
            rotate: [0, 360]
            scale: [1, 1 && 1.2, 1]}}
          transition={{}
            duration: 15;
            repeat: Infinity"
            ease: "easeInOut"
            rotate: [45, 405],
            opacity: [0.2, 0.6, 0.2],
          }}

        />;


        />
      </div>





        {/* Circle */}
        <motion&& motion.div
          className='absolute top-1/2 right-1/4 w-20 h-20 border border-emerald-500/20 rounded-full'
          animate={{

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
            ease: 'easeInOut',          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',          }}

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

        {/* Square */}
        <motion.div;
          className='absolute top - 1/2 right - 1/4 w - 20 h - 20 border border - emerald - 500 / 20 rounded - full';

          animate={{
            scale: [1, 1.5, 1];
            opacity: [0.3, 0.8, 0.3]}}
            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],          animate={{
            scale: [1, 1 && 1.5, 1]
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3]}}
          transition={{

            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',

            delay: 2,



          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD

            ease: 'easeInOut'}
  delay: 2}
          }}
          transition={{
            duration: 8;
repeat: Infinity;}
ease: 'easeInOut'}
            delay: 2          }}

           />


      </div>
      {/* Energy waves */}


        {[...Array(3)].map((_, i) => (
=======
            ease: 'easeInOut',
            delay: 2,
origin/cursor/automate-test-improve-and-merge-code-2533
          }}
          transition={{}
            duration: 8;
            repeat: Infinity'
            ease: 'easeInOut'
            delay: 2,          }}

      </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba


      {/* Energy waves */}

        />;
      </div>;
      {/* Energy waves */}
      <div className='absolute inset - 0'>;
        {[...Array (3)].map ((_, i) => (
          <motion.div;

      {/* Energy waves */}
      <div className='absolute inset-0'>



        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute inset - 0 border border - cyan - 500 / 10 rounded - full';
            animate={{}
"
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
        ))}
      </div>

<<<<<<< HEAD
=======
          <motion.div'
      <div className='absolute inset-0'>
        {[...Array(3)].map((_, i) => (
          <motion.div;
      <div className='absolute inset-0'>
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <motion.div
              scale: [1, 1 && 1.5, 2, 2 && 2.5],
              opacity: [0 && 0.3, 0 && 0.2, 0 && 0.1, 0],        {[...Array(3)].map((_, i) => (;
          <motion&& motion.div

              scale: [1, 1.5, 2, 2.5],
              opacity: [0.3, 0.2, 0.1, 0],        {[...Array (3)].map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute inset - 0 border border - cyan - 500 / 10 rounded - full';
            animate={{
      <div className="absolute inset-0">
      <div className='absolute inset-0'>



=======
              scale: [1, 1 && 1.5, 2, 2 && 2.5],
              opacity: [0 && 0.3, 0 && 0.2, 0 && 0.1, 0],        {[...Array(3)].map((_, i) => (;
          <motion&& motion.div
              scale: [1, 1.5, 2, 2.5],
              opacity: [0.3, 0.2, 0.1, 0],        {[...Array (3)].map ((_, i) => (
          <motion.div;
              scale: [1, 1.5, 2, 2.5],
              opacity: [0.3, 0.2, 0.1, 0],        {[...Array (3)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute inset - 0 border border - cyan-500 / 10 rounded-full";
            animate={{

              }

      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-cyan-500/10 rounded-full"
            animate={{
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              scale: [1, 1.5, 2, 2.5],
              opacity: [0.3, 0.2, 0.1, 0]}}
            transition = $2;
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 2
<<<<<<< HEAD

            }}
              scale: [1, 1 && 1.5, 2, 2 && 2.5]
              opacity: [0 && 0.3, 0 && 0.2, 0 && 0.1, 0]}}
            transition={{

      </div>;


      {/* Quantum particles */}
      <div className='absolute inset-0'>;
          <motion&& motion.div
              duration: 6,
              repeat: Infinity,"
              ease: "ease_out",
              delay: i * 2;
              scale: [1, 1.5, 2, 2.5],
              opacity: [0.3, 0.2, 0.1, 0],
<<<<<<< HEAD

            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'ease_out',
              delay: i * 2,            }}
          />))}
      </div>;
      {/* Quantum particles */}


              duration: 6
              repeat: Infinity
              ease: 'easeOut'
              duration: 6,
              repeat: Infinity,
              ease: 'easeOut',

              duration: 6,
              repeat: Infinity,
              ease: 'easeOut',
  delay: i * 2            }}
<<<<<<< HEAD

              duration: 6,
              repeat: Infinity,
              ease: 'easeOut',
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
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
            }}          />              ease: "easeInOut";
            }}
            style={{;
              left: `${Math && Math.random() * 100}%`,;
              top: `${Math && Math.random() * 100}%`}}

        ))}
      </div>;

      {/* Consciousness energy field */}


          className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5'
          animate={{
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],        <motion && motion.div

      <div className="absolute inset-0">
        <motion.div

          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5"

            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,

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
          animate={
            opacity: [0.3, 0.6, 0.3],        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - purple - 500 / 5 via - pink - 500 / 5 to - cyan - 500 / 5";
          animate={{
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{

            duration: 10,
            repeat: Infinity,
            ease: "easeInOut";
          }}


            duration: 10,
            repeat: Infinity,


            ease: 'easeInOut',          }}
        />;
      </div>;

};export default UltraFuturisticBackground2043;  );

};

export default UltraFuturisticBackground2043;


    </div>);
}export default UltraFuturisticBackground2043);
}
;
export default UltraFuturisticBackground2043;
;

            style = $2;
              top: `${Math.random() * 100}%`}}
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

}
}
}
}
}
}
}
}
export default UltraFuturisticBackground2043;
