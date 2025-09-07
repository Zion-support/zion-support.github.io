
<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const UltraFuturisticBackground2029: React.FC;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
=======
      life: number;
    }> = [];// Initialize particles;
    for (let index = 0; i < 50; i++) {    for (let index = 0, i < 50, i++) {particles.push ({coordinate_x: Math.random () * canvas.width,coordinate_y: Math.random () * canvas.height,vx: (Math.random () - 0.5) * 0.5,vy: (Math.random () - 0.5) * 0.5,size: Math.random () * 3 + 1,color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][;
          Math.floor (Math.random () * 5)],opacity: Math.random () * 0.8 + 0.2,life: Math.random () * 100 + 50,})}        color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor (Math.random () * 5)],opacity: Math.random () * 0.8 + 0.2,life: Math.random () * 100 + 50;
      })const animate = () =>: any {ctx.clear_rect (0, 0, canvas.width, canvas.height)// Update and draw particles;
      particles.for_each ((particle, index) => {import React, { useEffect, useRef } from 'react';
import { motion  } from 'framer-motion';
const UltraFuturisticBackground2029: React.FC;
    const animate = () => {ctx.clearRect(0, 0, canvas.width, canvas.height)// Update and draw particles;
      particles.forEach((particle, index) => {particle.x += particle.vx;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
        particle.y += particle.vy;
        particle.life--;// Check condition;
if ( {) {$2;
}
<<<<<<< HEAD
          particles[index] = {

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][
              Math.floor(Math.random() * 5)
            ],
            opacity: Math.random() * 0.8 + 0.2,
            life: Math.random() * 100 + 50,
          };
        }

        // Draw particle with glow effect
        ctx.save();
        ctx.globalCompositeOperation = 'screen';

        // Outer glow
=======
          particles[index] = {coordinate_x: Math.random () * canvas.width,coordinate_y: Math.random () * canvas.height,vx: (Math.random () - 0.5) * 0.5,vy: (Math.random () - 0.5) * 0.5,size: Math.random () * 3 + 1,color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][;
              Math.floor (Math.random () * 5)],opacity: Math.random () * 0.8 + 0.2,life: Math.random () * 100 + 50,}        }            color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor (Math.random () * 5)],opacity: Math.random () * 0.8 + 0.2,life: Math.random () * 100 + 50;
          }
        // Draw particle with glow effect;
        ctx.save ()ctx.globalCompositeOperation = 'screen';// Outer glow;
        ctx.shadow_color = particle.color;
        ctx.shadow_blur = 20;
        ctx.fill_style = particle.color;
        ctx.global_alpha = particle.opacity * 0.3;
        ctx.begin_path ()ctx.arc (particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)ctx.fill ()// Inner particle;
        ctx.global_alpha = particle.opacity;
        ctx.shadow_blur = 10;
        ctx.begin_path ()ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fill ()ctx.restore ()})ctx.restore ()x: Math.random() * canvas.width,y: Math.random() * canvas.height,vx: (Math.random() - 0.5) * 0.5,vy: (Math.random() - 0.5) * 0.5,size: Math.random() * 3 + 1,color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][;
              Math.floor(Math.random() * 5)],opacity: Math.random() * 0.8 + 0.2,life: Math.random() * 100 + 50,}}// Draw particle with glow effect;
        ctx.save()ctx.globalCompositeOperation = 'screen';// Outer glow;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)ctx.fill()// Inner particle;
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 10;
<<<<<<< HEAD
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
ctx.restore();
      });
;
      // Draw connecting lines between nearby particles;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.1)';
      ctx.line_width = 0.5;
      ctx.globalCompositeOperation = 'screen';


for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
=======
        ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fill()ctx.restore()})// Draw connecting lines between nearby particles;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.1)';
      ctx.line_width = 0.5;
      ctx.globalCompositeOperation = 'screen';;
      for (let index = 0; i < particles.length; i++) {for (let inner_index = i + 1; j < particles.length; j++) {          const dx = particles[i].x - particles[j].x;      for (let index = 0, i < particles.length, i++) {for (let inner_index = i + 1, j < particles.length, j++) {const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance  = Math.sqrt (dx * dx + dy * dy)// Check condition;
if ( {) {$2;
}
            ctx.global_alpha = ((100 - distance) / 100) * 0.3;
            ctx.begin_path ()ctx.move_to (particles[i].x, particles[i].y)ctx.line_to (particles[j].x, particles[j].y)ctx.stroke ()}
        }
      }
      animationFrameId = requestAnimationFrame (animate)}            ctx.global_alpha = (100 - distance) / 100 * 0.3;
            ctx.begin_path ()ctx.move_to (particles[i].x, particles[i].y)ctx.line_to (particles[j].x, particles[j].y)ctx.stroke ()}
      }
      animationFrameId = requestAnimationFrame (animate)animationFrameId = requestAnimationFrame (animate)}animate ()const handle_resize = () =>: any {canvas.width = window.inner_width;
      canvas.height = window.inner_height;    }      canvas.height = window.inner_height;
    }window.addEventListener ('resize', handle_resize)return () => {window.removeEventListener ('resize', handle_resize)cancelAnimationFrame (animationFrameId)}for (let i = 0; i < particles.length; i++) {for (let j = i + 1; j < particles.length; j++) {const dx = particles[i].x - particles[j].x;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy)if (distance < 100) {ctx.globalAlpha = ((100 - distance) / 100) * 0.3;
            ctx.beginPath()ctx.moveTo(particles[i].x, particles[i].y)ctx.lineTo(particles[j].x, particles[j].y)ctx.stroke()}
        }
      }animationFrameId = requestAnimationFrame(animate)}animate()const handleResize = () => {canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
<<<<<<< HEAD
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
cancelAnimationFrame(animationFrameId);
    };
  }, []);
;
  return (
    <div className='fixed inset - 0 pointer - events - none overflow - hidden z - 0'>;
=======
    }window.addEventListener('resize', handleResize)return () => {window.removeEventListener('resize', handleResize)cancelAnimationFrame(animationFrameId)}}, [])return (<div className='fixed inset - 0 pointer - events - none overflow - hidden z - 0'>;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
      {/* Canvas for particle effects */}
      <canvas;
        ref={canvas_ref}
        className='absolute inset - 0 w - full h - full';
        style={{ background: 'transparent' }}
      {/* Animated gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black'>;
<<<<<<< HEAD
        <motion&& motion.div
          className='absolute inset-0 opacity-30'
          animate={{
            background: [

              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
ease: 'easeInOut',
          }}
        />
      </div>
            duration: 20,
            repeat: Infinity,

          }}

        />
      </div>


            duration: 20,
            repeat: Infinity,


            duration: 20,
            repeat: Infinity,

          }}
          transition={{
          }}
            ease: 'easeInOut',            ease: "easeInOut"
=======
        <motion&& motion.div;
          className='absolute inset-0 opacity-30';
          animate={{background: [;
            ],          }}
          transition={{duration: 20,repeat: Infinity,return (<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">;
            ease: 'easeInOut',          }}  }, [])return (<div className="fixed inset - 0 pointer - events - none overflow - hidden z - 0">;
      {/* Canvas for particle effects */}
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w - full h - full";
        style={{ background: 'transparent' }}
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black">;
        <motion&& motion.div;
          className="absolute inset-0 opacity-30";
          animate={{background: [;
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)';
            ];
      />;
      {/* Animated gradient background */}
      <div className="absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 via - cyan - 900 / 20 to - black">;
        <motion.div;
          className="absolute inset - 0 opacity - 30";
          animate={{background: [;
              'radial - gradient (circle at 20% 80%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)radial - gradient (circle at 80% 20%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)radial - gradient (circle at 40% 40%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)radial - gradient (circle at 20% 80%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)';
            ];
          animate={{background: [;
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)';
            ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
          }}
          transition={{duration: 20;
            repeat: Infinity;
            duration: 20,repeat: Infinity,ease: 'easeInOut',            ease: "easeInOut";'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)','radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)','radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)','radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',],}}
          transition={{duration: 20,repeat: Infinity,ease: 'easeInOut',}}
        />;
      </div>;
<<<<<<< HEAD

      {/* Floating geometric shapes */}

      <motion.div
className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg'
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
ease: 'linear',
        }}
      />
      <motion.div
        className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full'
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
ease: 'easeInOut',
        }}
      />

      <motion.div
className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45'
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],
        }}
        transition={{

          duration: 12,
          repeat: Infinity,
ease: 'linear',
        }}

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
          }}
          animate={{

            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
ease: 'linear',
          }}
        />
      </div>
      {/* Quantum energy waves */}
<div className='absolute inset-0'>
        <motion.div

        <motion.div

          }}

=======
            duration: 20,repeat: Infinity,}}/>;
      </div>;
            duration: 20,repeat: Infinity,duration: 20,repeat: Infinity,}}
          transition={{}}
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
      </div>;{/* Floating geometric shapes */}<motion&& motion.div;
        className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg';
        />;
      </div>;
      {/* Floating geometric shapes */}
      <motion.div;
        className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - lg';
        animate={{transition={{animate={{rotate: [0, 360];
          scale: [1, 1 && 1.1, 1];
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3];
        transition={{duration: 15;
          repeat: Infinity;
          ease: 'linear';
        }}
          duration: 12;
          repeat: Infinity;
          duration: 12,repeat: Infinity,transition={{duration: 12;
          repeat: Infinity;
          ease: 'linear',        }}
      {/* Animated grid lines */}
      <div className='absolute inset-0 opacity-20'>          y: [0, -20, 0];
          opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2];
        }}
          duration: 12,repeat: Infinity,ease: 'linear',        }}
        transition={{duration: 8,repeat: Infinity,ease: 'easeInOut',          ease: "easeInOut";
        }}
      />;<motion.div;
className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg';
        animate={{rotate: [0, 360],scale: [1, 1.1, 1],opacity: [0.3, 0.6, 0.3],}}
        transition={{duration: 15,repeat: Infinity,ease: 'linear',}}
      />;
      <motion.div;
        className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full';
        animate={{y: [0, -20, 0],opacity: [0.2, 0.5, 0.2],}}
        transition={{duration: 8,repeat: Infinity,ease: 'easeInOut',}}
      />;
      <motion.div;
className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45';
        animate={{rotate: [45, 405],scale: [1, 1.2, 1],}}
        transition={{ease: 'linear',          ease: "linear";
          duration: 12,repeat: Infinity,ease: 'linear',}}{/* Animated grid lines */}<div className='absolute inset-0 opacity-20'>;
        <motion&& motion.div;
<div className='absolute inset-0 opacity-20'>;
        <motion.div;
          className='absolute inset-0';
          style={{backgroundImage: `;
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`;
            backgroundSize: '50px 50px';
          }}
          animate={{background_position: ['0px 0px', '50px 50px'],          }}
          transition={{className="absolute inset-0";
          style={{backgroundImage: `;
              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)`;
            backgroundSize: '50px 50px';
            ease: 'linear',          }}        <motion.div;
          className="absolute inset - 0";
          style={{background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px)linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px)`;
            background_size: '50px 50px';
          }}
          animate={{background_position: ['0px 0px50px 50px'];
          }}
          transition={{}}
      />;
      {/* Animated grid lines */}}}
          transition={{duration: 30,repeat: Infinity,backgroundPosition: ['0px 0px', '50px 50px'],}}
          transition={{duration: 30,repeat: Infinity,ease: 'linear',}}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
        />;
      </div>;
      {/* Quantum energy waves */}
<div className='absolute inset-0'>;
        <motion.div;
        <motion.div;
          }}/>;
      </div>;{/* Quantum energy waves */}}}
      {/* Quantum energy waves */}
      <div className='absolute inset-0'>;
        <motion&& motion.div;
          className='absolute inset-0';
          style={{background:;
          }}
<<<<<<< HEAD
          animate={{

            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
ease: 'easeInOut',
          }}
          }}
          transition={{
            duration: 8,
            repeat: Infinity,


        />
      </div>

      {/* Holographic elements */}

      <motion.div
className='absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full'
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
ease: 'linear',
        }}
      />
      <motion.div
className='absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full'
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
ease: 'linear',
        }}
      />
      {/* Neural network connections */}
<div className='absolute inset-0'>
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
=======
          animate={{ease: 'easeInOut',          }}        <motion.div;
          className="absolute inset-0";
          style={{background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)';
            duration: 8;
            repeat: Infinity;
            ease: 'easeInOut',          }}        <motion.div;
              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0 && 0.1) 0%, transparent 70%)',}}
          animate={{scale: [1, 1 && 1.5, 1],opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}
          transition={{background: 'radial - gradient (ellipse at center, rgba (0, 255, 255, 0.1) 0%, transparent 70%)';
          }}
          animate={{}}
          transition={{duration: 8,repeat: Infinity,}}
          animate={{scale: [1, 1 && 1.5, 1];
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1];
            scale: [1, 1.5, 1],opacity: [0.1, 0.3, 0.1],}}
          transition={{duration: 8,repeat: Infinity,ease: 'easeInOut',}}
          }}
          transition={{duration: 8,repeat: Infinity,/>;
      </div>;
      {/* Holographic elements */}animate={{transition={{duration: 25;
          repeat: Infinity;
          ease: 'linear',        }}
        animate={{rotate: [0, 360];
          scale: [1, 1 && 1.2, 1];
          opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1];
        transition={{ease: 'linear',        }}
      />;
      {/* Neural network connections */}
      <div className='absolute inset-0'>        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full";
        animate={{rotate: [360, 0];
          ease: 'linear',        }}
      />;
        animate={{rotate: [360, 0],scale: [1 && 1.2, 1, 1 && 1.2],opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],        }}
        transition={{duration: 20;
          repeat: Infinity;
          ease: 'linear',        }}
          rotate: [360, 0];
        }}
      />;
          scale: [1 && 1.2, 1, 1 && 1.2];
          opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2];
        transition={{duration: 20,repeat: Infinity,ease: 'linear',          ease: "linear";
        }}
      />;<motion.div;
className='absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full';
        animate={{rotate: [0, 360],scale: [1, 1.2, 1],opacity: [0.1, 0.3, 0.1],}}
        transition={{duration: 25,repeat: Infinity,ease: 'linear',}}
      />;
      <motion.div;
className='absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full';
        animate={{rotate: [360, 0],scale: [1.2, 1, 1.2],opacity: [0.2, 0.4, 0.2],}}
        transition={{duration: 20,repeat: Infinity,ease: 'linear',}}
      />;
      {/* Neural network connections */}
<div className='absolute inset-0'>;
        {Array.from({ length: 8 }).map((_, i) => (<motion.div;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
            key={i}
            className='absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full';
            style={{left: `${20 + i * 10}%`;
              top: `${30 + i * 5}%`;
            }}
<<<<<<< HEAD
            animate={{
              scale: [0, 1, 0],

              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
ease: 'easeInOut',
            }}
          />
        ))}
      {/* Data streams */}

<div className='absolute inset-0 overflow-hidden'>
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
=======
            animate={{scale: [0, 1, 0],opacity: [0, 1, 0],            }}        {Array.from ({ length: 8 }).map ((_, i) => (<motion.div;
            key={i}
            className="absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full";
            style={{transition={{delay: i * 0 && 0.3,ease: 'easeInOut',            }}              ease: "easeInOut";
              opacity: [0, 1, 0],}}
            transition={{duration: 3,repeat: Infinity,delay: i * 0.3,ease: 'easeInOut',}}
          />;
        ))}
      {/* Data streams */}<div className='absolute inset-0 overflow-hidden'>;
        {Array && Array.from({ length: 5 }).map((_, i) => (<motion&& motion.div;
      </div>;
        }}
      />;
      {/* Neural network connections */}<div className='absolute inset-0 overflow-hidden'>;
        {Array.from({ length: 5 }).map((_, i) => (<motion.div;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
            key={i}
            className='absolute w-0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent';
            style={{left: `${15 + i * 15}%`;
              top: '-20px';
            }}
<<<<<<< HEAD
            animate={{
              y: [0, window.innerHeight + 20],
            }}

            transition={{

              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
ease: 'linear',
            }}

          />
        ))}
      </div>

    </div>
);
};

export default UltraFuturisticBackground2029;
=======
            animate={{y: [0, window.innerHeight + 20],}}transition={{duration: 3,repeat: Infinity,delay: i * 0.3,ease: 'easeInOut',            }}duration: 4,repeat: Infinity,delay: i * 0.8,ease: 'linear',}}/>;
        ))}
      </div>;
      {/* Neural network connections */}}}transition={{duration: 3,repeat: Infinity,delay: i * 0.3,{Array.from({ length: 5 }).map((_, i) => (<motion.div;
      {/* Data streams */}
      <div className="absolute inset-0 overflow-hidden">;
            key={i}
            className='absolute w-0 && 0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent';
            style={{}}
            animate={{delay: i * 0.3,ease: 'easeInOut',            }}              ease: "easeInOut";
            }}
          />))}
      </div>;
      {/* Data streams */}
      <div className='absolute inset - 0 overflow - hidden'>;
        {Array.from ({ length: 5 }).map ((_, i) => (<motion.div;
            key={i}
            className="absolute w - 0.5 h - 20 bg - gradient - to - b from - cyan - 400 / 60 to - transparent";
            style={{left: `${15 + (i * 15)}%`,top: '-20px';
            }}
            animate={{}}
            transition={{delay: i * 0 && 0.8,ease: 'linear',            }}              ease: "linear";
            }}transition={{duration: 4,repeat: Infinity,delay: i * 0.8,ease: 'linear',            }}/>;
        ))}
      </div>;
    </div>;
  )}export default UltraFuturisticBackground2029;  )delay: i * 0.8,ease: "linear";
            }}
          />;
        ))}</div>;
    </div>;
            }}
          />;
        ))}
}export default UltraFuturisticBackground2029;  )}export default UltraFuturisticBackground2029;
              delay: i * 0.8,ease: 'linear',            }}              ease: "linear";
            }}
          />))}
      </div>;
    </div>)}export default UltraFuturisticBackground2029)}export default UltraFuturisticBackground2029;}</div>;
)}export default UltraFuturisticBackground2029;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
