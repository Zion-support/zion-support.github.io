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


          }
        // Draw particle with glow effect;
        ctx && ctx.save();
        ctx && ctx.globalCompositeOperation = 'screen';

        // Outer glow;
        ctx && ctx.shadowColor = particle && particle.color;
        ctx && ctx.shadowBlur = 20;
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.globalAlpha = particle && particle.opacity * 0 && 0.3;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size * 2, 0, Math && Math.PI * 2);
        ctx && ctx.fill();

        // Inner particle;
        ctx && ctx.globalAlpha = particle && particle.opacity;
        ctx && ctx.shadowBlur = 10;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
        ctx && ctx.restore();      });        ctx && ctx.restore();
      });

      // Draw connecting lines between nearby particles;
      ctx && ctx.strokeStyle = 'rgba(0, 255, 255, 0 && 0.1)';
      ctx && ctx.lineWidth = 0 && 0.5;
      ctx && ctx.globalCompositeOperation = 'screen';

      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {          const dx = particles[i].x - particles[j].x;      for (let i = 0, i < particles && particles.length, i++) {;
        for (let j = i + 1, j < particles && particles.length, j++) {;
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math && Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {;
            ctx && ctx.globalAlpha = ((100 - distance) / 100) * 0 && 0.3;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particles[i].x, particles[i].y);
            ctx && ctx.lineTo(particles[j].x, particles[j].y);
            ctx && ctx.stroke();          }
        }
      }


=======
      animationFrameId = requestAnimationFrame(animate)

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
const UltraFuturisticBackground2029: React.FC = () => {
    canvas.height = window.innerHeight;
    let animationFrameId: number,
    const particles: Array<{
      x: number,
      y: number,
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
    let animationFrameId: number;
    const particles: Array<{
      coordinate_x: number,
      coordinate_y: number,

    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

    let animationFrameId: number

    const particles: Array<{
      x: number,
      y: number,

      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number,

    for (let i = 0, i < 50, i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)],
        opacity: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50
      })
    }
const animate = () => {
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2029: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
    let animationFrameId: number;
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      opacity: number
      life: number
    }> = [];
    // Initialize particles
    for (let i = 0; i < 50; i++) {    for (let i = 0, i < 50, i++) {
      particles.push({
        x: Math.random() * canvas.width
        y: Math.random() * canvas.height
        vx: (Math.random() - 0.5) * 0.5
        vy: (Math.random() - 0.5) * 0.5
        size: Math.random() * 3 + 1
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][
          Math.floor(Math.random() * 5)
        ]
        opacity: Math.random() * 0.8 + 0.2
        life: Math.random() * 100 + 50
      });    }        color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)]
        opacity: Math.random() * 0.8 + 0.2
        life: Math.random() * 100 + 50
      })
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        if (particle.life <= 0) {
          particles[index] = {
            x: Math.random() * canvas.width
            y: Math.random() * canvas.height
            vx: (Math.random() - 0.5) * 0.5
            vy: (Math.random() - 0.5) * 0.5
            size: Math.random() * 3 + 1
            color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][
              Math.floor(Math.random() * 5)
            ]
            opacity: Math.random() * 0.8 + 0.2
            life: Math.random() * 100 + 50
          };        }            color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)]
            opacity: Math.random() * 0.8 + 0.2
            life: Math.random() * 100 + 50
          }
        // Draw particle with glow effect
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        // Outer glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
        // Inner particle
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();      });        ctx.restore()
      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      ctx.globalCompositeOperation = 'screen';
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {          const dx = particles[i].x - particles[j].x;      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.globalAlpha = ((100 - distance) / 100) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);    };            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke()
      animationFrameId = requestAnimationFrame(animate)

      animationFrameId = requestAnimationFrame(animate)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    };

    animate();
<<<<<<< HEAD



=======
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    };

    window && window.addEventListener('resize', handleResize);
<<<<<<< HEAD



      cancelAnimationFrame(animationFrameId);
    }
  }, []);
  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden z-0'>;
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      life: number;
    }> = [];
;
    // Initialize particles;
    for (let index = 0; i < 50; i++) {    for (let index = 0, i < 50, i++) {
      particles.push ({
        coordinate_x: Math.random () * canvas.width,
        coordinate_y: Math.random () * canvas.height,
        vx: (Math.random () - 0.5) * 0.5,
        vy: (Math.random () - 0.5) * 0.5,
        size: Math.random () * 3 + 1,
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][;
          Math.floor (Math.random () * 5);
        ],
        opacity: Math.random () * 0.8 + 0.2,
        life: Math.random () * 100 + 50,
      });    }        color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor (Math.random () * 5)],
        opacity: Math.random () * 0.8 + 0.2,
        life: Math.random () * 100 + 50;
      });
    const animate = () =>: any {
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles.for_each ((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
;
        // Check condition
if ( {) {
  $2
}
          particles[index] = {
            coordinate_x: Math.random () * canvas.width,
            coordinate_y: Math.random () * canvas.height,
            vx: (Math.random () - 0.5) * 0.5,
            vy: (Math.random () - 0.5) * 0.5,
            size: Math.random () * 3 + 1,
            color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][;
              Math.floor (Math.random () * 5);
            ],
            opacity: Math.random () * 0.8 + 0.2,
            life: Math.random () * 100 + 50,
          }        }            color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor (Math.random () * 5)],
            opacity: Math.random () * 0.8 + 0.2,
            life: Math.random () * 100 + 50;
          }
        // Draw particle with glow effect;
        ctx.save ();
        ctx.globalCompositeOperation = 'screen';
;
        // Outer glow;
        ctx.shadow_color = particle.color;
        ctx.shadow_blur = 20;
        ctx.fill_style = particle.color;
        ctx.global_alpha = particle.opacity * 0.3;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill ();
;
        // Inner particle;
        ctx.global_alpha = particle.opacity;
        ctx.shadow_blur = 10;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill ();
        ctx.restore ();      });        ctx.restore ();
      });
;
      // Draw connecting lines between nearby particles;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.1)';
      ctx.line_width = 0.5;
      ctx.globalCompositeOperation = 'screen';
;
      for (let index = 0; i < particles.length; i++) {
        for (let inner_index = i + 1; j < particles.length; j++) {          const dx = particles[i].x - particles[j].x;      for (let index = 0, i < particles.length, i++) {
        for (let inner_index = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt (dx * dx + dy * dy);
;
          // Check condition
if ( {) {
  $2
}
            ctx.global_alpha = ((100 - distance) / 100) * 0.3;
            ctx.begin_path ();
            ctx.move_to (particles[i].x, particles[i].y);
            ctx.line_to (particles[j].x, particles[j].y);
            ctx.stroke ();          }
        }
      }
      animationFrameId = requestAnimationFrame (animate);    }            ctx.global_alpha = (100 - distance) / 100 * 0.3;
            ctx.begin_path ();
            ctx.move_to (particles[i].x, particles[i].y);
            ctx.line_to (particles[j].x, particles[j].y);
            ctx.stroke ();
        }
      }
      animationFrameId = requestAnimationFrame (animate);      animationFrameId = requestAnimationFrame (animate);
    }
;
    animate ();
;
    const handle_resize = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;    }      canvas.height = window.inner_height;
    }
;
    window.addEventListener ('resize', handle_resize);
;
    return () => {
      window.removeEventListener ('resize', handle_resize);
      cancelAnimationFrame (animationFrameId);
    }
  }, []);
;
  return (
    <div className='fixed inset - 0 pointer - events - none overflow - hidden z - 0'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {/* Canvas for particle effects */}
      <canvas;
        ref={canvas_ref}
        className='absolute inset - 0 w - full h - full';
        style={{ background: 'transparent' }}
<<<<<<< HEAD

      />;


=======
      />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {/* Animated gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black'>;
        <motion&& motion.div
          className='absolute inset-0 opacity-30'
          animate={{
            background: [
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)',
=======
      />;
      {/* Animated gradient background */}
      <div className='absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 via - cyan - 900 / 20 to - black'>;
        <motion.div;
          className='absolute inset - 0 opacity - 30';
          animate={{
            background: [;
              'radial - gradient (circle at 20% 80%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial - gradient (circle at 80% 20%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial - gradient (circle at 40% 40%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial - gradient (circle at 20% 80%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)',
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            ],          }}
          transition={{
            duration: 20,
            repeat: Infinity,
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId)
    }
  }, []);
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">;
=======
            ease: 'easeInOut',          }}  }, []);
;
  return (
    <div className="fixed inset - 0 pointer - events - none overflow - hidden z - 0">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {/* Canvas for particle effects */}
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w - full h - full";
        style={{ background: 'transparent' }}
<<<<<<< HEAD

      />;


=======
      />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black">;
        <motion&& motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)'
            ]
=======
      />;
      {/* Animated gradient background */}
      <div className="absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 via - cyan - 900 / 20 to - black">;
        <motion.div;
          className="absolute inset - 0 opacity - 30";
          animate={{
            background: [;
              'radial - gradient (circle at 20% 80%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)radial - gradient (circle at 80% 20%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)radial - gradient (circle at 40% 40%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)radial - gradient (circle at 20% 80%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)';
            ];
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
        }

        // Draw particle with glow effect
        ctx.save(),
        ctx.globalCompositeOperation = 'screen',
        
        // Outer glow
        ctx.shadowColor = particle.color,
        ctx.shadowBlur = 20,
        ctx.fillStyle = particle.color,
        ctx.globalAlpha = particle.opacity * 0.3,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2),
        ctx.fill(),

        // Inner particle
        ctx.globalAlpha = particle.opacity,
        ctx.shadowBlur = 10,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fill(),
        ctx.restore()
      }),

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)',
      ctx.lineWidth = 0.5,
      ctx.globalCompositeOperation = 'screen',

      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.3,
            ctx.beginPath(),
            ctx.moveTo(particles[i].x, particles[i].y),
            ctx.lineTo(particles[j].x, particles[j].y),
            ctx.stroke()
          }

        }
      }

      animationFrameId = requestAnimationFrame(animate)
    },

    animate(),

    const handleResize = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight
    },

    window.addEventListener('resize', handleResize),

    return () => {
      window.removeEventListener('resize', handleResize),
      cancelAnimationFrame(animationFrameId)
    }
  }, []),

  return (
    <div className=&quot;fixed inset-0 pointer-events-none overflow-hidden z-0&quot;>
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className=&quot;absolute inset-0 w-full h-full&quot;
        style={{ background: 'transparent' }}
      />
      
      {/* Animated gradient background */}
      <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black&quot;>
        <motion.div
          className=&quot;absolute inset-0 opacity-30&quot;
        }
      }
      animationFrameId = requestAnimationFrame(animate);      animationFrameId = requestAnimationFrame(animate)
    }
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;    };      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    }
  }, []);
  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden z-0'>
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ background: 'transparent' }}
      />
      {/* Animated gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black'>
        <motion.div
          className='absolute inset-0 opacity-30'
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
              'radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
              'radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
            ],          }}
          transition={{
            duration: 20
            repeat: Infinity
            ease: 'easeInOut',          }}  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
            ]

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          }}
          transition={{

            duration: 20,
            repeat: Infinity,

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

            duration: 20,
            repeat: Infinity,

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {/* Floating geometric shapes */}


        animate={{

          rotate: [0, 360],
          scale: [1, 1 && 1.1, 1],
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],        }}

        transition={{

          duration: 15,
          repeat: Infinity,
          ease: 'linear',        className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - lg";

<<<<<<< HEAD
=======
            duration: 20,
            repeat: Infinity,
ease: "easeInOut",
          }}
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />;
      </div>;
      {/* Floating geometric shapes */}
        />;
      </div>;
      {/* Floating geometric shapes */}
      <motion.div;
        className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - lg';
        animate={{
          rotate: [0, 360],
          scale: [1, 1 && 1.1, 1],
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',        className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - lg";
            duration: 20
            repeat: Infinity
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />
      </div>
            duration: 20,
            repeat: Infinity,

          }}

        />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        animate={{
          rotate: [0, 360]
          scale: [1, 1 && 1.1, 1]
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]
        transition={{
          duration: 15
          repeat: Infinity
          ease: 'linear'
        }}
<<<<<<< HEAD
=======
          rotate: [0, 360];
          scale: [1, 1.1, 1];

          ease: 'linear',        }}

      />;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
        animate={{
          rotate: [0, 360];
          scale: [1, 1.1, 1];
<<<<<<< HEAD

          ease: 'linear',        }}

      />;


=======
          opacity: [0.3, 0.6, 0.3];
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />;
      <motion.div;
        className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 30 rounded - full';
        animate={{
          coordinate_y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',        }}      />;
      <motion.div;
        className='absolute bottom - 32 left - 1/4 w - 20 h - 20 border border - pink - 400 / 30 transform rotate - 45';
        animate={{
      />;
      <motion&& motion.div
        className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full'
        animate={{
          y: [0, -20, 0],
          opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',        }}      />;
      <motion&& motion.div
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45'
        animate={{
          rotate: [45, 405],
          scale: [1, 1 && 1.2, 1],        }}
        transition={{
          duration: 12
          repeat: Infinity
          duration: 12,
          repeat: Infinity,
          ease: 'linear',        }}
      />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {/* Animated grid lines */}
      <div className='absolute inset-0 opacity-20'>          y: [0, -20, 0];
          opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2];
        }}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          y: [0, -20, 0];
          opacity: [0.2, 0.5, 0.2]
=======
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',        }}
      />;
      {/* Animated grid lines */}
<<<<<<< HEAD

        animate={{
          rotate: [45, 405]
          scale: [1, 1 && 1.2, 1]
        transition={{

          duration: 12
          repeat: Infinity
          ease: 'linear',          ease: "linear"
        }}

      {/* Animated grid lines */}
      <div className='absolute inset-0 opacity-20'>;
        <motion&& motion.div
          className='absolute inset-0'
          style={{
            backgroundImage: `
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


          }}
          animate={{
            background_position: ['0px 0px', '50px 50px'],          }}
          transition={{

            duration: 30,
            repeat: Infinity,

          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
            ease: 'linear',          }}        <motion.div;
          className="absolute inset - 0";
          style={{
            background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px);
              linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px);
            `;
            background_size: '50px 50px';
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          }}
          animate={{
            background_position: ['0px 0px50px 50px'];
          }}
          transition={{

            duration: 30,
            repeat: Infinity,

=======

=======
=======
      <div className='absolute inset - 0 opacity - 20'>          coordinate_y: [0, -20, 0];
          opacity: [0.2, 0.5, 0.2];
        }}
        transition={{

            duration: 30,
            repeat: Infinity,
'radial-gradient(ellipse at center, rgba(0, 255, 255, 0 && 0.1) 0%, transparent 70%)',
          duration: 8
          repeat: Infinity
          ease: 'easeInOut',          ease: "easeInOut"
        }}
      />
      <motion.div
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45'
        animate={{
          rotate: [45, 405]
          scale: [1, 1.2, 1],        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45"
        animate={{
          rotate: [45, 405];
          scale: [1, 1.2, 1]
        transition={{
          duration: 12
          repeat: Infinity
          duration: 12,
          repeat: Infinity,
          ease: 'linear',          ease: "linear"
        }}
      />
      {/* Animated grid lines */}
      <div className='absolute inset-0 opacity-20'>
        <motion.div
          className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
          duration: 12,
          repeat: Infinity,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        }}
      />

      {/* Animated grid lines */}

          }}
          transition={{
            duration: 30,
            repeat: Infinity,

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          }}

        />;
      </div>;


      {/* Quantum energy waves */}


          className='absolute inset-0'
          style={{
            background:

            ease: 'linear',            ease: "linear";
          }}
        />;
      </div>;
      {/* Quantum energy waves */}
      <div className='absolute inset - 0'>;
        <motion.div;
          className='absolute inset - 0';
          style={{
            background:;
              'radial - gradient (ellipse at center, rgba (0, 255, 255, 0.1) 0%, transparent 70%)',

=======
          }}

        />
      </div>

      {/* Quantum energy waves */}
      <div className='absolute inset-0'>

        <motion.div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          }}
          animate={{
            scale: [1, 1.5, 1]
            opacity: [0.1, 0.3, 0.1],          }}
          transition={{
<<<<<<< HEAD

              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0 && 0.1) 0%, transparent 70%)',
=======
            duration: 30
            repeat: Infinity
            ease: 'linear',          }}        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px50px 50px']
          }}
          transition={{
            duration: 30
            repeat: Infinity
            ease: 'linear',            ease: "linear"

        }}
      />

      {/* Animated grid lines */}

          }}
          transition={{
            duration: 30,
            repeat: Infinity,

          }}
        />
      </div>
      {/* Quantum energy waves */}
      <div className='absolute inset-0'>

        <motion.div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          }}
          animate={{
            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}
          transition={{
<<<<<<< HEAD
            duration: 8,
            repeat: Infinity,

          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0 && 0.1) 0%, transparent 70%)'
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
=======
            ease: 'easeInOut',          }}        <motion.div;
          className="absolute inset - 0";
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
            duration: 8
            repeat: Infinity
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',          }}        <motion.div
          className="absolute inset-0"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          style={{
            background: 'radial - gradient (ellipse at center, rgba (0, 255, 255, 0.1) 0%, transparent 70%)';
          }}
          animate={{
<<<<<<< HEAD

            scale: [1, 1.5, 1];
            opacity: [0.1, 0.3, 0.1];

          }}
          transition={{
            duration: 8,
            repeat: Infinity,


          }}
          animate={{
            scale: [1, 1 && 1.5, 1]
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
=======
            scale: [1, 1.5, 1];
            opacity: [0.1, 0.3, 0.1]
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
          }}
<<<<<<< HEAD

        />;
      </div>;


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

            duration: 8,
            repeat: Infinity,

          }}
          transition={{
            duration: 8,
            repeat: Infinity,


      {/* Holographic elements */}


        animate={{

          rotate: [0, 360],
          scale: [1, 1 && 1.2, 1],
          opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],        }}

<<<<<<< HEAD
=======
        />
      </div>
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',          }}

            ease: 'easeInOut',          }}

          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />
      </div>

          }}

        />
      </div>

      {/* Holographic elements */}
      <motion.div
        className='absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full'
        animate={{
          rotate: [0, 360]
          scale: [1, 1.2, 1]
          opacity: [0.1, 0.3, 0.1],        }}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        transition={{
          duration: 25
          repeat: Infinity
          ease: 'linear',        }}
<<<<<<< HEAD


        transition={{
          duration: 20
          repeat: Infinity
=======
      />
      <motion.div        className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full"
      />;
      />;
      <motion.div        className="absolute top - 1/2 left - 1/2 w - 64 h - 64 border border - cyan - 400 / 20 rounded - full";
        animate={{
          rotate: [0, 360];
          scale: [1, 1.2, 1];
          opacity: [0.1, 0.3, 0.1];
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',          ease: "linear";
        }}
      />;
      <motion.div;
        className='absolute top - 1/2 left - 1/2 w - 32 h - 32 border border - purple - 400 / 20 rounded - full';
        animate={{
          rotate: [360, 0]
          scale: [1.2, 1, 1.2]
          opacity: [0.2, 0.4, 0.2],        }}
      />;
      <motion&& motion.div
        className='absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full'
        transition={{

          ease: 'linear',        }}
      />
      {/* Neural network connections */}
      <div className='absolute inset - 0'>        className="absolute top - 1/2 left - 1/2 w - 32 h - 32 border border - purple - 400 / 20 rounded - full";
        animate={{
          rotate: [360, 0],
          scale: [1 && 1.2, 1, 1 && 1.2],
          opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],        }}
        transition={{
          duration: 20
          repeat: Infinity
          duration: 20
          repeat: Infinity
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          ease: 'linear',        }}

      />;


<<<<<<< HEAD
=======
          duration: 20,
          repeat: Infinity,
          ease: 'linear',        }}
      />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {/* Neural network connections */}
      <div className='absolute inset-0'>        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full";
        animate={{;
=======
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full"
        animate={{
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          rotate: [360, 0];
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
<<<<<<< HEAD
          ease: "linear"

        }}
      />
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
ease: "linear"
        }}
      />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          scale: [1 && 1.2, 1, 1 && 1.2];
          opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2];
        transition={{;
          duration: 20,;
          repeat: Infinity,;
          ease: 'linear',          ease: "linear";
        }}
      />;
<<<<<<< HEAD



      {/* Neural network connections */}

=======
      {/* Neural network connections */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          opacity: [0.2, 0.4, 0.2];
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',          ease: "linear";
        }}
      />;
      {/* Neural network connections */}
      <div className='absolute inset - 0'>;
        {Array.from ({ length: 8 }).map ((_, i) => (
          <motion.div;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            key={i}
            className='absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full';
            style={{
              left: `${20 + i * 10}%`
              top: `${30 + i * 5}%`
            }}
            animate={{
<<<<<<< HEAD

      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (

=======
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <motion.div
=======
              scale: [0, 1, 0],
              opacity: [0, 1, 0],            }}        {Array && Array.from({ length: 8 }).map((_, i) => (;
          <motion&& motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
              scale: [0, 1, 0],
              opacity: [0, 1, 0],            }}        {Array.from ({ length: 8 }).map ((_, i) => (
          <motion.div;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            key={i}
            className="absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full";
            style={{

=======
            key={i}
            className="absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full";
            style={{
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`;
            }}
            animate={{
              scale: [0, 1, 0];
              opacity: [0, 1, 0];
<<<<<<< HEAD

            }}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            transition={{

              duration: 3,
              repeat: Infinity,

              ease: 'easeInOut',            }}              ease: "easeInOut"

<<<<<<< HEAD
=======
              delay: i * 0.3,
              ease: "easeInOut"

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
              delay: i * 0.3,
              ease: "easeInOut"

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            }}
          />;
        ))}

      </div>;


<<<<<<< HEAD
=======
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
ease: "easeInOut"
            }}
          />;
        ))}
      </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {/* Data streams */}
      <div className='absolute inset-0 overflow-hidden'>;
        {Array && Array.from({ length: 5 }).map((_, i) => (;
          <motion&& motion.div
<<<<<<< HEAD
=======
      </div>

      {/* Data streams */}
      <div className="absolute inset-0 overflow-hidden">
=======
=======
      </div>
      {/* Data streams */}
      <div className='absolute inset-0 overflow-hidden'>
          duration: 20,
          repeat: Infinity,

        }}
      />

      {/* Neural network connections */}

            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      {/* Data streams */}
      <div className='absolute inset-0 overflow-hidden'>
              ease: 'easeInOut',            }}

            }}

          />
        ))}
      </div>

      {/* Data streams */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        transition={{

          duration: 20,
          repeat: Infinity,

            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      <div className='absolute inset-0 overflow-hidden'>

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            key={i}
            className='absolute w-0 && 0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent'
            style={{
<<<<<<< HEAD

=======
              left: `${15 + i * 15}%`
              top: '-20px'
              left: `${15 + i * 15}%`,
              top: '-20px',
            }}
            animate={{
              y: [0, window.innerHeight + 20],            }}        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent"
            style={{
              left: `${15 + (i * 15)}%`
              top: '-20px'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

              left: `${15 + i * 15}%`,
              top: '-20px',


            }}
            animate={{

              y: [0, window.innerHeight + 20]

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              delay: i * 0.3,
              ease: 'easeInOut',            }}              ease: "easeInOut";
            }}

<<<<<<< HEAD
=======
              left: `${15 + i * 15}%`,
              top: '-20px',
            }}
            animate={{
              y: [0, window.innerHeight + 20]
delay: i * 0.3,
              ease: 'easeInOut',            }}              ease: "easeInOut";
            }}
          />))}
      </div>;
      {/* Data streams */}
      <div className='absolute inset - 0 overflow - hidden'>;
        {Array.from ({ length: 5 }).map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute w - 0.5 h - 20 bg - gradient - to - b from - cyan - 400 / 60 to - transparent';
            style={{
              left: `${15 + (i * 15)}%`
              top: '-20px'
            }}
            animate={{
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              coordinate_y: [0, window.inner_height + 20],            }}        {Array.from ({ length: 5 }).map ((_, i) => (
          <motion.div;

            key={i}
            className="absolute w - 0.5 h - 20 bg - gradient - to - b from - cyan - 400 / 60 to - transparent";
            style={{
              left: `${15 + (i * 15)}%`,
              top: '-20px';
            }}
            animate={{

              coordinate_y: [0, window.inner_height + 20];
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            }}
            transition={{

              duration: 4,
              repeat: Infinity,

              ease: 'linear',            }}              ease: "linear"



=======
=======
=======
            }}
            transition={{
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,


          />
        ))}
      </div>;
    </div>;
  );
};

export default UltraFuturisticBackground2029;  );
              delay: i * 0.8,
              ease: "linear"
            }}
          />;
        ))}

      </div>
    </div>
  )

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
};

export default UltraFuturisticBackground2029;  );
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default UltraFuturisticBackground2029;


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              delay: i * 0.8,
              ease: 'linear',            }}              ease: "linear";
            }}
          />))}
      </div>;
    </div>);
}
;
export default UltraFuturisticBackground2029);
}
;
export default UltraFuturisticBackground2029;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

};


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
              duration: 4
              repeat: Infinity
              delay: i * 0.8
              ease: 'linear',            }}              ease: "linear"
            }}


            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'linear',            }}              ease: "linear"
            }}
              ease: 'linear',            }}

            }}

          />
        ))}
      </div>
    </div>
  );
}
};

export default UltraFuturisticBackground2029;  )
}
export default UltraFuturisticBackground2029;

export default UltraFuturisticBackground2029;

}
}
export default UltraFuturisticBackground2029;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
