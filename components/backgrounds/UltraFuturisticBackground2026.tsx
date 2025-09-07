<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2026Props {
  children: React.ReactNode;
  className?: string
}

;
import React, { useEffect, useRef } from 'react';
import { motion  } from 'framer-motion';
interface UltraFuturisticBackground2026Props  {children: React.ReactNode;
  className?: string;
}const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({children;
  className;
  const animationRef = useRef<number | undefined>(undefined)useEffect(() => {const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

      vx: number;
    let particles: Array<{x: number;
      y: number;vx: number;
    let particles: Array<{x: number;
      y: number;vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2026Props {
  children: React.ReactNode,
  className?: string
}

const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({ 
  children,
  className = $2;
  const animationRef = $2;
  useEffect(() => {
    const canvas = $2;
    if (!canvas) return,

    const ctx = canvas.getContext($2);
    if (!ctx) return,

    canvas.width = $2;
    canvas.height = $2;
    let particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,
      life: number,
      maxLife: number}> = [],

    const colors = [
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
      '#00ff00', // Green
      '#ff0080', // Pink
      '#8000ff', // Purple
      '#0080ff', // Blue
      life: number;
    ];
    const createParticle = () => {
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width;
      life: number;maxLife: number;
    }>  = [];const colors = [;
      '#00ffff', // Cyan;
      '#ff00ff', // Magenta;
      '#ffff00', // Yellow;
      '#00ff00', // Green;
      '#ff0080', // Pink;
      '#8000ff', // Purple;
      '#0080ff', // Blue;
'#ff8000', // Orange;
    ];
    const createParticle = () => {const side = Math.floor(Math.random() * 4)let x, y, vx, vy;
      switch (side) {case 0: // Top;
          x  = Math.random() * canvas.width;const colors = [;
    const colors = [;
      '#00ffff', // Cyan;
      '#ff00ff', // Magenta;
      '#ffff00', // Yellow;
      '#00ff00', // Green;
      '#ff0080', // Pink;
      '#8000ff', // Purple;
      '#0080ff', // Blue;
      '#ff8000', // Orange    ];      '#ff8000'  // Orange;
    ];
      particles = [];
      for (let i = 0; i < 100; i++) {particles && particles.push(createParticle())}        x;
        y;
        vx;
        vy;y = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
          break;
        case 1: // Right;
          x = canvas.width + 10;
          y = Math.random() * canvas.height;
          vx = -(Math.random() * 2 + 1)vy = (Math.random() - 0.5) * 2;
          break;
        case 2: // Bottom;
          x = Math.random() * canvas.width;
          y = canvas.height + 10;
          vx = (Math.random() - 0.5) * 2;
          vy = -(Math.random() * 2 + 1)break;
        case 3: // Left;
          x = -10;
          y = Math.random() * canvas.height;
          vx = Math.random() * 2 + 1;
          vy = (Math.random() - 0.5) * 2;
break;
      }
      return {x,y,vx,vy,size: Math.random() * 3 + 1,color: colors[Math.floor(Math.random() * colors.length)],alpha: Math.random() * 0.8 + 0.2,life: 0,maxLife: Math.random() * 200 + 100,}}const initParticles = () => {particles = [];
for (let i = 0; i < 100; i++) {particles.push(createParticle())}
    }
    const animate = () => {ctx.clearRect(0, 0, canvas.width, canvas.height)// Update and draw particles;
      particles.forEach((particle, index) => {particle.x += particle.vx;
        particle.y += particle.vy;
        vy;
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        // Draw glow effect
        const gradient = ctx.createRadialGradient(
        particle.life++;if (particle.life > particle.maxLife ||;
          particle.x < -20 ||;
          particle.x > canvas.width + 20 ||;
          particle.y < -20 ||;
          particle.y > canvas.height + 20;
        ) {particles[index] = createParticle()}// Draw particle;
        ctx.save()ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fill()// Draw glow effect;
        const gradient = ctx.createRadialGradient()gradient && gradient.addColorStop(0, particle && particle.color)gradient && gradient.addColorStop(1, 'transparent')ctx && ctx.fillStyle = gradient;
        ctx && ctx.beginPath()ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size * 3, 0, Math && Math.PI * 2)ctx && ctx.fill()ctx && ctx.restore()})ctx && ctx.restore()}))if (distance < 100) {ctx && ctx.beginPath()ctx && ctx.moveTo(particle1 && particle1.x, particle1 && particle1.y)ctx && ctx.lineTo(particle2 && particle2.x, particle2 && particle2.y)ctx && ctx.stroke()}
        })})ctx && ctx.stroke()}
        })particle.x,particle.y,0,particle.x,particle.y,particle.size * 3;
        )gradient.addColorStop(0, particle.color)gradient.addColorStop(1, 'transparent')ctx.fillStyle = gradient;
        ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)ctx.fill()ctx.restore()})// Draw connecting lines between nearby particles;
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      particles.forEach((particle1, i) => {particles.slice(i + 1).forEach(particle2 => {const distance = Math.sqrt(Math.pow(particle1.x - particle2.x, 2) +;
              Math.pow(particle1.y - particle2.y, 2))if (distance < 100) {ctx.beginPath()ctx.moveTo(particle1.x, particle1.y)ctx.lineTo(particle2.x, particle2.y)ctx.stroke()}
        })})// Draw grid pattern;
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
        );
        gradient && gradient.addColorStop(0, particle && particle.color);
        gradient && gradient.addColorStop(1, 'transparent');
        ctx && ctx.fillStyle = gradient;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size * 3, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
        ctx && ctx.restore();      });        ctx && ctx.restore();
      });
          );
          if (distance < 100) {;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particle1 && particle1.x, particle1 && particle1.y);
            ctx && ctx.lineTo(particle2 && particle2.x, particle2 && particle2.y);
            ctx && ctx.stroke();
          }
        });      });            ctx && ctx.stroke();
          }
        });
      }
      for (let coordinate_y = 0, y < canvas.height, y += grid_size) {
        ctx.begin_path ();
        ctx.move_to (0, y);
        ctx.line_to (canvas.width, y);
        ctx.stroke ();
      }


      animationRef && animationRef.current = requestAnimationFrame(animate);    };
    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;    };        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x, 0);
        ctx && ctx.lineTo(x, canvas && canvas.height);
        ctx && ctx.stroke();
      }
      for (let y = 0, y < canvas && canvas.height, y += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, y);
        ctx && ctx.lineTo(canvas && canvas.width, y);
        ctx && ctx.stroke();
      }
      }
    }
  }, []);
      '#ff8000'  // Orange
    ],

    const createParticle = $2;
      let x, y, vx, vy,

      switch (side) {
        case 0: // Top
          x = $2;
          y = $2;
          vx = $2;
          vy = $2;
          break,
        case 1: // Right
          x = $2;
          y = $2;
          vx = $2;
          vy = $2;
          break,
        case 2: // Bottom
          x = $2;
          y = $2;
          vx = $2;
          vy = $2;
          break,
        case 3: // Left
          x = $2;
          y = $2;
          vx = $2;
          vy = $2;
          break
      }

      return {
        x,
        y,
        vx,
        vy,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.8 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100
      }
    },

    const initParticles = $2;
      for (let i = 0, i < 100, i++) {
        particles.push(createParticle())
      }
    },

    const animate = () => {
      ctx.clearRect($2);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx,
        particle.y += particle.vy,
        particle.life++,

        if (particle.life > particle.maxLife || 
            particle.x < -20 || particle.x > canvas.width + 20 ||
            particle.y < -20 || particle.y > canvas.height + 20) {
          particles[index] = createParticle()
        }

        // Draw particle
        ctx.save($2);
        ctx.globalAlpha = $2;
        ctx.fillStyle = $2;
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fill($2);
        // Draw glow effect
        const gradient = ctx.createRadialGradient($2);
        gradient.addColorStop($2);
        gradient.addColorStop($2);
        ctx.fillStyle = $2;
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fill($2);
        ctx.restore()
      }),

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)',
      ctx.lineWidth = $2;
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          ),
          if (distance < 100) {
            ctx.beginPath($2);
            ctx.moveTo($2);
            ctx.lineTo($2);
            ctx.stroke()
          }
        })
      }),

      // Draw grid pattern
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)',
      ctx.lineWidth = $2;
      const gridSize = $2;
      for (let x = 0, x < canvas.width, x += gridSize) {
        ctx.beginPath($2);
        ctx.moveTo($2);
        ctx.lineTo($2);
        ctx.stroke()
      }
      for (let y = 0, y < canvas.height, y += gridSize) {
        ctx.beginPath($2);
        ctx.moveTo($2);
        ctx.lineTo($2);
        ctx.stroke()
      }

      animationRef.current = $2;
    const handleResize = $2;
      canvas.height = $2;
    window.addEventListener($2);
    initParticles($2);
    animate($2);
    return () => {
      window.removeEventListener($2);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, []),

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
<<<<<<< HEAD
for (let x = 0; x < canvas.width; x += gridSize) {ctx.beginPath()ctx.moveTo(x, 0)ctx.lineTo(x, canvas.height)ctx.stroke()}
      for (let coordinate_y = 0, y < canvas.height, y += grid_size) {ctx.begin_path ()ctx.move_to (0, y)ctx.line_to (canvas.width, y)ctx.stroke ()}animationRef && animationRef.current = requestAnimationFrame(animate)}const handleResize = () => {canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;    }ctx && ctx.beginPath()ctx && ctx.moveTo(x, 0)ctx && ctx.lineTo(x, canvas && canvas.height)ctx && ctx.stroke()}
      for (let y = 0, y < canvas && canvas.height, y += gridSize) {ctx && ctx.beginPath()ctx && ctx.moveTo(0, y)ctx && ctx.lineTo(canvas && canvas.width, y)ctx && ctx.stroke()}
      }
    }animationRef.current = requestAnimationFrame(animate)}const handleResize = () => {canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
    }window.addEventListener('resize', handleResize)initParticles()animate()return () => {window.removeEventListener('resize', handleResize)if (animationRef.current) {cancelAnimationFrame(animationRef.current)}
    }}, [])return (<div className={`relative min-h-screen overflow-hidden ${className}`}>;
      {/* Animated Canvas Background */}
      <canvas;
        ref={canvasRef}{/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">;
        <motion&& motion.div;
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20";
          animate={{}}
        />;
        <motion&& motion.div;
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full';
          animate={{transition={{duration: 6;
            repeat: Infinity;
            ease: 'easeInOut',          }}
        />;
        <motion&& motion.div;
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full";
          animate={{y: [0, -20, 0];
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2];
          }}
          transition={{className='fixed inset-0 w-full h-full pointer-events-none z-0';
        style={{background:;
            'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)';
        }}
      />;
      {/* Floating Geometric Shapes */}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className = $2;
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition = $2;
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">;
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{
          }}
        />;
        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full'
=======
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion&& motion.div"
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{}
          }}
        />
        <motion&& motion.div'
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full'
          animate={{}
          transition={{}
            duration: 6
            repeat: Infinity'
            ease: 'easeInOut',          }}
        />
        <motion&& motion.div"
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{}
            y: [0, -20, 0]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]
          }}

          }}
        />
        <motion&& motion.div'
          className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{}
          transition={{}
            duration: 12
            repeat: Infinity'
            ease: 'linear',          }}
        />
        <motion&& motion.div"
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={{}
            rotate: [0, 180, 360]
            scale: [1, 1 && 1.1, 1]
          }}

          }}
          transition={{rotate: [0, 180, 360],scale: [1, 1.1, 1]}}
          transition={{duration: 12,repeat: Infinity,ease: 'linear'}}
           />
        <motion&& motion.div
className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{

            rotate: [0, -180, -360]}
            opacity: [0.4, 0.7, 0.4]}
          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear'
          }}
        />
        <motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
          animate={{
          transition={{
            duration: 6
            repeat: Infinity
<<<<<<< HEAD
            ease: 'easeInOut',          }}
        />;
        <motion&& motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
        }}
      />;
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-10'>;
        <motion.div;
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20';
          animate={{rotate: 360,scale: [1, 1.2, 1],opacity: [0.3, 0.6, 0.3],}}
          transition={{duration: 8,repeat: Infinity,ease: 'linear',}}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear',          }}
        />;
        <motion&& motion.div
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
        />;
        <motion.div;
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full';
          animate={{y: [0, -20, 0],opacity: [0.2, 0.5, 0.2],}}
          transition={{duration: 6,repeat: Infinity,ease: 'easeInOut',}}
        />;
        <motion&& motion.div;
          className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45';
          animate={{transition={{duration: 12;
            repeat: Infinity;
            ease: 'linear',          }}
        />;
        <motion&& motion.div;
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45";
          animate={{rotate: [0, 180, 360];
            scale: [1, 1 && 1.1, 1];
          }}
          transition={{rotate: [0, 180, 360],scale: [1, 1.1, 1],}}
          transition={{duration: 12,repeat: Infinity,ease: 'linear',}}
        />;
          transition = $2;
            repeat: Infinity,
            ease: "linear"
          }}
=======
            ease: 'linear',          }}          }}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={{
            rotate: [0, -180, -360],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition = $2;
            repeat: Infinity,
          transition={{
            duration: 10
            repeat: Infinity
        <motion&& motion.div;
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12';
          animate={{transition={{duration: 10;
            repeat: Infinity;
            ease: 'linear',          }}          }}
        />;
        <motion&& motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={{
            rotate: [0, -180, -360]
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]

          }}
        <motion&& motion.div;
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12';
          animate={{transition={{duration: 10;
            repeat: Infinity;
            ease: 'linear',          }}          }}
        />;
        <motion&& motion.div;
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12";
          animate={{rotate: [0, -180, -360];
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4];
          }}
          transition={{duration: 10;
            repeat: Infinity;
            ease: 'linear',            ease: "linear";
          animate={{rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4];rotate: [0, -180, -360],opacity: [0.4, 0.7, 0.4],}}
          transition={{duration: 10,repeat: Infinity,ease: 'linear',}}
          transition={{/>;
      </div>;{/* Energy Field Effects */}/>;
      </div>;
      {/* Energy Field Effects */}
<div className='fixed inset-0 pointer-events-none z-20'>;
        <motion.div;
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'>;
        <motion&& motion.div;
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent';
            ease: 'linear',            ease: "linear";
          }}
        />;
      </div>;
      {/* Energy Field Effects */}
      <div className='fixed inset - 0 pointer - events - none z - 20'>;
        <motion.div;
          className='absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent';
            duration: 10,repeat: Infinity,/>;
      </div>;
      {/* Energy Field Effects */}
            ease: "linear"
          }}
        />
      </div>

      {/* Energy Field Effects */}
      <div className = $2;
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
            coordinate_x: ['-100%', '100%'],          }}
          transition={{
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
      <div className='fixed inset-0 pointer-events-none z-20'>;
        <motion.div;
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent';
          animate={{coordinate_x: ['-100%', '100%'],          }}
          transition={{className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent";
            ease: 'linear',        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent";
          animate={{
            coordinate_x: ['-100%100%'];
          }}

          }}

            duration: 20,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}

          }}

            duration: 20,
            repeat: Infinity,


          }}

          className = $2;
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className='relative z-30'>{children}</div>

        />;
      </div>;

      {/* Content */}
          }}
      <div className='relative z-30'>{children}</div>;

origin/cursor/automate-test-improve-and-merge-code-2533
      {/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />
      </div>
    </div>
  );
export default UltraFuturisticBackground2026;
origin/cursor/automate-test-improve-and-merge-code-2533
      <div className='fixed inset-0 pointer-events-none z-20'>;
        <motion.div;
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent';
          animate={{coordinate_x: ['-100%', '100%'],          }}
          transition={{className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent";
            ease: 'linear',        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent";
          animate={{coordinate_x: ['-100%100%'];
          }}
          transition={{animate={{coordinate_y: ['-100%100%'];x: ['-100%', '100%'],}}
          transition={{duration: 15,repeat: Infinity,ease: 'linear',}}
        />;
        <motion.div;
          className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent';
          animate={{y: ['-100%', '100%'],}}
          transition={{duration: 20,repeat: Infinity,}}duration: 20,repeat: Infinity,ease: 'linear',            ease: "linear";
ease: 'linear',}}}}duration: 20,repeat: Infinity,}}/>;
      </div>;
      {/* Content */}<div className='relative z-30'>{children}</div>;
        />;
      </div>;{/* Content */}
          }}
      <div className='relative z-30'>{children}</div>;{/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>;
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />;
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />;
      </div>;
    </div>;
  )}
            ease: 'linear',            ease: "linear";
          }}
        />;
      </div>;
      {/* Content */}
      <div className='relative z - 30'>{children}</div>;
      {/* Holographic Overlay */}
      <div className='fixed inset - 0 pointer - events - none z - 40'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - transparent via - cyan - 400 / 2 to - transparent' />;
        <div className='absolute inset - 0 bg - gradient - to - tl from - transparent via - purple - 400 / 2 to - transparent' />;
      </div>;
    </div>)}<div className="fixed inset - 0 pointer - events - none z - 40">;
        <div className="absolute inset - 0 bg - gradient - to - br from - transparent via - cyan - 400 / 2 to - transparent" />;
        <div className="absolute inset - 0 bg - gradient - to - tl from - transparent via - purple - 400 / 2 to - transparent" />;
      </div>;
    </div>)}export default UltraFuturisticBackground2026;<div className='relative z-30'>{children}</div>;
      {/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>;
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />;
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />;
      </div>;
    </div>;
  )export default UltraFuturisticBackground2026;{/* Holographic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40">;
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent" />;
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent" />;
      </div>;
    </div>;
  )}
export default UltraFuturisticBackground2026;export default UltraFuturisticBackground2026;
    </div>);
}
;
export default UltraFuturisticBackground2026;
      {/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />
      </div>
    </div>
  );
export default UltraFuturisticBackground2026;

      {/* Holographic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent" />
      </div>
    </div>
  )
}
export default UltraFuturisticBackground2026;
<<<<<<< HEAD

export default UltraFuturisticBackground2026;
export default UltraFuturisticBackground2026;

};



export default UltraFuturisticBackground2026;}
      <div className = $2;
export default UltraFuturisticBackground2026,
=======
<<<<<<< HEAD

"
=======
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let particles: Array< {
  const colors = [ '#00ffff', // Cyan '#ff00ff', // Magenta '#ffff00', // Yellow '#00ff00', // Green '#ff0080', // Pink '#8000ff', // Purple '#0080ff', // Blue '#ff8000' // Orange ]
switch (side) {
  case 0: // Top x = Math.random () * canvas.width
y = -10
vx = (Math.random () - 0.5) * 2
vy = Math.random () * 2 + 1
break
case 1: // Right x = canvas.width + 10
y = Math.random () * canvas.height
vx = - (Math.random () * 2 + 1)
vy = (Math.random () - 0.5) * 2
break
case 2: // Bottom x = Math.random () * canvas.width
y = canvas.height + 10
vx = (Math.random () - 0.5) * 2
vy = - (Math.random () * 2 + 1)
break
case 3: // Left if (particle.life > particle.maxLife || particle.x < -20 || particle.x > canvas.width + 20 || particle.y < -20 || particle.y > canvas.height + 20) {
  // Draw particle ctx.save ()
ctx.globalAlpha = particle.alpha
ctx.fillStyle = particle.color
ctx.beginPath ()
ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2)
ctx.fill ()
// Draw glow effect const gradient = ctx.createRadialGradient (particle.x, particle.y, 0
particle.x, particle.y, particle.size * 3)
gradient.addColorStop (0, particle.color)
gradient.addColorStop (1, 'transparent')
ctx.fillStyle = gradient
ctx.beginPath ()
ctx.arc (particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
ctx.fill ()
ctx.restore () 
})
// Draw connecting lines between nearby particles animationRef.current = requestAnimationFrame (animate) 
}
window.addEventListener ('resize', handleResize)
initParticles ()
animate ()
return (<div className= {
  `relative min-h-screen overflow-hidden $ {
  className 
}` 
}> {
  /* Animated Canvas Background */ 
}<canvas </div> </div>) 
}
export default UltraFuturisticBackground2026
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
