<<<<<<< HEAD
import React, { useEffect, useRef,
  from 'react';
import { motion,
  from 'framer-motion';
=======

<<<<<<< HEAD
=======

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
>>>>>>> origin/main

>>>>>>> origin/chore/fix-lint-and-merge
interface UltraFuturisticBackground2026Props {
  children: React.ReactNode;}
  className?: string}
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
  className?: string;

=======

>>>>>>> origin/main
;
import React, { useEffect, useRef,
  from 'react';
import { motion,
  from 'framer-motion';

interface UltraFuturisticBackground2026Props {
  children: React.ReactNode;
  className?: string;}
}
>>>>>>> origin/chore/fix-lint-and-merge
}

const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props    /> = ({children;
  className;

const animationRef = useRef<number | undefined    />(undefined;
  useEffect(() => ;
  const canvas = canvasRef.current;
    if (!canvas) return;

<<<<<<< HEAD
=======
const ctx = canvas.getContext('2d')if (!ctx);
  return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Array<{
x: number;
      y: number;
      vx: number;

      vy: number;
      size: number;
      color: string;
      alpha: number;

      life: number;
>>>>>>> origin/chore/fix-lint-and-merge
}
      maxLife: number;}
    }> = [];

<<<<<<< HEAD

    const colors = [
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
      '#00ff00', // Green
      '#ff0080', // Pink
      '#8000ff', // Purple
      '#0080ff', // Blue
      life: number;
=======
const colors = [
      '#00ffff', // Cyan;
      '#ff00ff', // Magenta;
      '#ffff00', // Yellow;
      '#00ff00', // Green;
      '#ff0080', // Pink;
      '#8000ff', // Purple;
      '#0080ff', // Blue;
'#ff8000', // Orange;
>>>>>>> origin/chore/fix-lint-and-merge
    ];

const createParticle = (
     ;
  const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
      switch (side) {
<<<<<<< HEAD
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
          y = -10;
=======
        case 0: // Top;
x = Math.random() * canvas.width;

          y = -10;

>>>>>>> origin/chore/fix-lint-and-merge
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
break;) => {
  return $3;}
}
      }
<<<<<<< HEAD
      return {x,y,vx,vy,size: Math.random() * 3 + 1,color: colors[Math.floor(Math.random() * colors.length)],alpha: Math.random() * 0.8 + 0.2,life: 0,maxLife: Math.random() * 200 + 100,}}const initParticles = () => {particles = [];
=======
      return {x,y,vx,vy,size: Math.random() * 3 + 1,color: colors[Math.floor(Math.random() * colors.length)],alpha: Math.random() * 0.8 + 0.2,life: 0,maxLife: Math.random() * 200 + 100}}

const initParticles = (particles = [];) => {
  return $3;}
}
>>>>>>> origin/chore/fix-lint-and-merge
for (let i = 0; i < 100; i++) {particles.push(createParticle())}
    }

const animate = (ctx.clearRect(0, 0, canvas.width,,,
  canvas.height)// Update and draw particles;
      particles.forEach((particle,,,
  index) => {particle.x += particle.vx;
        particle.y += particle.vy;
<<<<<<< HEAD
        vy;
        // Draw particle
        ctx.save();
=======

        particle.life++;

if (
          particle.life > particle.maxLife ||
          particle.x < -20 ||
          particle.x > canvas.width + 20 ||
          particle.y < -20 ||
          particle.y > canvas.height + 20;
        ) {
          particles[index] = createParticle();) => {
  return $3;}
}
        }

        // Draw particle;
ctx.save();
>>>>>>> origin/chore/fix-lint-and-merge
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0,,,
  Math.PI * 2);
        ctx.fill();
<<<<<<< HEAD
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
=======
        // Draw glow effect;
const gradient = ctx.createRadialGradient(particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
  particle.size * 3;,,
   );
        gradient.addColorStop(0,,,
  particle.color);
        gradient.addColorStop(1,,,
  'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0,,,
  Math.PI * 2);
        ctx.fill();
ctx.restore();
      });
      // Draw connecting lines between nearby particles;
ctx.strokeStyle = 'rgba(0, 255, 255,,,
  0.1)';
      ctx.lineWidth = 1;
<<<<<<< HEAD
      particles.forEach((particle1,,,
  i) => {particles.slice(i + 1).forEach(particle2 = > ;}
  const distance = Math.sqrt(Math.pow(particle1.x - particle2.x,,,
  2) +;}
              Math.pow(particle1.y - particle2.y,,,
  2))if (distance < 100) {ctx.beginPath()ctx.moveTo(particle1.x,,,
  particle1.y)ctx.lineTo(particle2.x,,,
  particle2.y)ctx.stroke()}
=======
      particles.forEach((particle1, i) => {particles.slice(i + 1).forEach(particle2 = > ;}
  const distance = Math.sqrt(Math.pow(particle1.x - particle2.x, 2) +;}
>>>>>>> origin/chore/fix-lint-and-merge
              Math.pow(particle1.y - particle2.y, 2))if (distance < 100) {ctx.beginPath()ctx.moveTo(particle1.x, particle1.y)ctx.lineTo(particle2.x, particle2.y)ctx.stroke()}
>>>>>>> origin/main
        })})// Draw grid pattern;
      ctx.strokeStyle = 'rgba(0, 255, 255,,,
  0.05)';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD
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
=======

const gridSize = 50;

for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x,,,
  0);
        ctx.lineTo(x,,,
  canvas.height);}
        ctx.stroke();}
>>>>>>> origin/chore/fix-lint-and-merge
      }
      for (let coordinate_y = 0, y < canvas.height, y += grid_size) {
        ctx.begin_path ();
        ctx.move_to (0, y);
        ctx.line_to (canvas.width, y);}
        ctx.stroke ();}
      }

      animationRef.current = requestAnimationFrame(animate)
}

const handleResize = (
      canvas.width = window.innerWidth;
canvas.height = window.innerHeight) => {
  return $3;}
}
}

<<<<<<< HEAD
    window.addEventListener('resize',,,
  handleResize);
=======

<<<<<<< HEAD
      if (animationRef.current) {
}
cancelAnimationFrame(animationRef.current);
      }
    }
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    window.addEventListener('resize', handleResize);
>>>>>>> origin/main
    initParticles();
    animate();
    return () => {
      window.removeEventListener('resize',,,
  handleResize);
      if (animationRef.current) {}
cancelAnimationFrame(animationRef.current);}
      }
    };
>>>>>>> origin/chore/fix-lint-and-merge
  }, []);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}    />

      {/* Animated Canvas Background */}
<<<<<<< HEAD
      <canvas ref={canvasRef}
            className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'linear-gradient(135deg, #0a0a0a 0%
            #1a1a2e 50%,
  #16213e 100%)'

        }
      />;
=======
      <canvas;
<<<<<<< HEAD
        ref={canvasRef}
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">;
        <motion&& motion.div"
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{}
          }}
        />;
        <motion&& motion.div'
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full'
          animate={{}
          transition={{}
            duration: 6;
            repeat: Infinity'
            ease: 'easeInOut',          }}
        />;
        <motion&& motion.div"
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{}
            y: [0, -20, 0]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]
          }}
          transition={{
className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
        }}
      />
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
          animate={{
          transition={{
            duration: 6
            repeat: Infinity
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
=======
ref={canvasRef}

className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'}
}
        }}
         />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
      {/* Floating Geometric Shapes */}

      <div className='fixed inset-0 pointer-events-none z-10'    />
        <motion.div;
className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20'
          animate={{
            rotate: 360}
            scale: [1, 1.2, 1]
            opacity: [0.3
            0.6
            0.3]
          }
          transition={{
<<<<<<< HEAD
            duration: 8}
            repeat: Infinity
            ease: 'linear'
          
        />
=======
            duration: 8,
            repeat: Infinity}
ease: 'linear'}
          }}
           />
>>>>>>> origin/main
        <motion.div;
className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full'
          animate={{
            y: [0, -20}
            0]
            opacity: [0.2, 0.5
            0.2]
          }}
          transition={{
<<<<<<< HEAD
            duration: 6}
            repeat: Infinity
            ease: 'easeInOut'
          
        />;
=======
            duration: 6,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
           />;
>>>>>>> origin/main
        <motion&& motion.div;
className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{

            rotate: [0, 180}
            360]
            scale: [1, 1.1
            1]
          }}
          transition={{
<<<<<<< HEAD
            duration: 12}
            repeat: Infinity
            ease: 'linear'

          }
          transition={{rotate: [0, 180, 360],scale: [1, 1.1}
            1]
          transition={{duration: 12}
            repeat: Infinity
            ease: 'linear'
        />;
=======
            duration: 12,
            repeat: Infinity,
ease: 'linear'}
}
          }}
<<<<<<< HEAD
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
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12;
          animate={{transition={{duration: 10;
            repeat: Infinity;
            ease: linear'}}          }}
        />;
        <motion&& motion.div
          className=absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
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
      <div className='fixed inset-0 pointer-events-none z-10'>
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20'
          animate={{
            }
            "rotate": 360,
            "scale": [1, 1.2, 1],
            "opacity": [0.3, 0.6, 0.3]
=======
          transition={{rotate: [0, 180, 360],scale: [1, 1.1, 1]}}
          transition={{duration: 12,repeat: Infinity,ease: 'linear'}}
           />;
>>>>>>> origin/main

        <motion&& motion.div;
className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{

            rotate: [0}
            -180
            -360]
            opacity: [0.4, 0.7, 0.4]}
>>>>>>> origin/chore/fix-lint-and-merge
          }}
          transition={{
            duration: 10}
            repeat: Infinity
            ease: 'linear'
          
          transition={{
<<<<<<< HEAD
        />}
            

      </div>;}
=======
<<<<<<< HEAD
            duration: 6,
            repeat: Infinity,
ease: 'easeInOut',
origin/cursor/automate-test-improve-and-merge-code-2533
          transition={{}
          }}
        />;
        <motion&& motion.div'
          className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{}
          transition={{}
            duration: 12;
            repeat: Infinity'
            ease: 'linear',          }}
        />;
        <motion&& motion.div"
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={{}
            rotate: [0, 180, 360]
            scale: [1, 1 && 1.1, 1]
          }}
          transition={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
ease: 'linear',
origin/cursor/automate-test-improve-and-merge-code-2533
          }}
        />;
        <motion&& motion.div'
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{}
          transition={{}
            duration: 10;
            repeat: Infinity'
            ease: 'linear',          }}          }}
        />;
        <motion&& motion.div"
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={{}
            rotate: [0, -180, -360]
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]

          }}
        />;
        <motion&& motion.div'
          className=absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45
          animate={{}
          transition={{}
            duration: 12;
            repeat: Infinity'
            ease: 'linear}}
        />;
        <motion&& motion.div"
          className=absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45
          animate={{}
            rotate: [0, 180, 360]
            scale: [1, 1 && 1.1, 1]
          }}

          }}
        />;
        <motion&& motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{}
          transition={{}
            duration: 10;
            repeat: Infinity
            ease: linear'}}          }}
        />;
        <motion&& motion.div"
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12
          animate={{}
            rotate: [0, -180, -360]
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]

          }}
          transition={{}
            duration: 10;
            repeat: Infinity'
            ease: linear,            ease: "linear"
          animate={{}
            rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4];
            rotate: [0, -180, -360],
            opacity: [0.4, 0.7, 0.4]}}
          transition={{
            }
            "duration": 10,
            "repeat": Infinity,
"ease": 'linear','
          }}
          transition={{ />;

      </div>;


>>>>>>> origin/main
      {/* Energy Field Effects */}


        />
      </div>
      {/* Energy Field Effects */}
<div className='fixed inset-0 pointer-events-none z-20'>
        <motion.div
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'>;
        <motion&& motion.div'
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent''"
            ease: 'linear',            ease: "linear";
          }}
        />;
      </div>;
      {/* Energy Field Effects */}
      <div className='fixed inset - 0 pointer - events - none z - 20'>;'
        <motion.div;
          className='absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent';'
            "duration": 10,"repeat": Infinity, />;
      </div>;
      {/* Energy Field Effects */}

            ease: 'linear',            ease: linear";
          }}
        />;
      </div>;

          }}

          }}

            "duration": 20,
            "repeat": Infinity


          }} />
      </div>

      {/* Energy Field Effects */}
      <div className = $2;
            repeat: Infinity,
            ease: linear"
          }}
        />
        <motion.div
            coordinate_x: ['-100%', 100%]}}
          transition={{
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent
      <div className='fixed inset-0 pointer-events-none z-20'>;
        <motion.div;
          className=absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent;
          animate={{coordinate_x: ['-100%', 100%]}}
          transition={{className=absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent";
            ease: 'linear',        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent;
          animate={{
            coordinate_x: [-100%100%];
=======
           />;
}
      </div>;}
      {/* Energy Field Effects */}
<div className='fixed inset-0 pointer-events-none z-20'    />;
        <motion.div;
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'    />;
        <motion&& motion.div;
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent';
            ease: 'linear',
  ease: \'linear\';
          }}
           />;
      </div>;
      {/* Energy Field Effects */}
      <div className='fixed inset - 0 pointer - events - none z - 20'    />;
        <motion.div;
          className='absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent';
            duration: 10,repeat: Infinity,   />;
      </div>;
      {/* Energy Field Effects */}

      <div className='fixed inset-0 pointer-events-none z-20'    />

        <motion.div;
className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'
          animate={{
}
            x: ['-100%', '100%']}
          }}
          transition={{
<<<<<<< HEAD
            duration: 15}
            repeat: Infinity
            ease: 'linear'
          
        />
=======
            duration: 15,
            repeat: Infinity}
ease: 'linear'}
          }}
           />
>>>>>>> origin/main
        <motion.div;
className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent'
          animate={{}
            y: ['-100%', '100%']}
          }}
          transition={{
            duration: 20}
            repeat: Infinity
<<<<<<< HEAD
            ease: 'linear'
          

          }}

            duration: 20;
  repeat: Infinity; }}
=======
}
ease: 'linear'}
>>>>>>> origin/chore/fix-lint-and-merge
          }}

          }}

            duration: 20,
<<<<<<< HEAD
            repeat: Infinity,
            ease: 'linear',            ease: linear"
          }}

          }}

            duration: 20,
            repeat: Infinity}}
=======
            repeat: Infinity


          }}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main

           />
      </div>
      {/* Content */}
<<<<<<< HEAD
      <div className=relative z-30>{children}</div>
=======
>>>>>>> origin/chore/fix-lint-and-merge

<div className='relative z-30'    />{children}</div>

      {/* Holographic Overlay */}
<<<<<<< HEAD

=======
      <div className='fixed inset-0 pointer-events-none z-40'    />
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent'    />
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent'    />
>>>>>>> origin/chore/fix-lint-and-merge
      </div>
    </div>
  );
export default UltraFuturisticBackground2026;

"
