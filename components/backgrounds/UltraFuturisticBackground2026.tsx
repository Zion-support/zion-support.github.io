

<<<<<<< HEAD
interface UltraFuturisticBackground2026Props {
  children: React.ReactNode;}
  className?: string}
}



;
import React, { useEffect, useRef } from 'react';
import { motion  } from 'framer-motion';

interface UltraFuturisticBackground2026Props {
  children: React.ReactNode;
  className?: string;}
}

}

const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props    /> = ({children;
  className;

const animationRef = useRef<number | undefined    />(undefined;
  useEffect(() => ;
  const canvas = canvasRef.current;
    if (!canvas) return;


const ctx = canvas.getContext('2d')if (!ctx);
  return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Array<{
x: number;
      y: number;

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
      vx: number;

      vy: number;
      size: number;
      color: string;
      alpha: number;

      life: number;
<<<<<<< HEAD
=======

      max_life: number;    }> = [];      coordinate_x: number,
      coordinate_y: number,
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width,
          y = -10,
          vx = (Math.random() - 0.5) * 2,
          vy = Math.random() * 2 + 1,
          break,
        case 1: // Right
          x = canvas.width + 10,
          y = Math.random() * canvas.height,
          vx = -(Math.random() * 2 + 1),
          vy = (Math.random() - 0.5) * 2,
          break,
        case 2: // Bottom
          x = Math.random() * canvas.width,
          y = canvas.height + 10,
          vx = (Math.random() - 0.5) * 2,
          vy = -(Math.random() * 2 + 1),
          break,
        case 3: // Left
          x = -10,
          y = Math.random() * canvas.height,
          vx = Math.random() * 2 + 1,
          vy = (Math.random() - 0.5) * 2,
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
interface UltraFuturisticBackground2026Props {
  }
  "children": React.ReactNode;
  className?: string;


    const colors = [
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
      '#00ff00', // Green
      '#ff0080', // Pink
      '#8000ff', // Purple
      '#0080ff', // Blue
      life: number;
      max_life: number;    }> = [];      coordinate_x: number,
      coordinate_y: number,

      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,
      life: number,

      '#ff8000'  // Orange

>>>>>>> origin/cursor/delete-old-data-records-6bba
    ];

const createParticle = (
     ;
  const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
      switch (side) {

<<<<<<< HEAD

=======
          y = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
      max_life: number;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

;
    const create_particle = () =>: any {
      const side = Math.floor (Math.random () * 4);
      let x, y, vx, vy;
;
      switch (side) {
        case 0: // Top;
          coordinate_x = Math.random () * canvas.width;
          coordinate_y = -10;
          vx = (Math.random () - 0.5) * 2;
          vy = Math.random () * 2 + 1;


=======
      particles = [];
      for (let i = 0; i < 100; i++) {particles && particles.push(createParticle())}        x;
          break;
        case 1: // Right
          break;
        case "1": // Right;
          x = canvas.width + 10;
          y = Math.random() * canvas.height;
          vx = -(Math.random() * 2 + 1);
          vy = (Math.random() - 0.5) * 2;
          break;
        case 2: // Bottom
          x = Math.random() * canvas.width;
          y = canvas.height + 10;
          vx = (Math.random() - 0.5) * 2;
          vy = -(Math.random() * 2 + 1);
          break;

      return {
        x
        y
        vx
        vy,        size: Math.random() * 3 + 1
        color: colors[Math.floor(Math.random() * colors.length)]
        alpha: Math.random() * 0.8 + 0.2
        life: 0
        maxLife: Math.random() * 200 + 100
      };    }
    const initParticles = () => {


      return {;
        x,;
        y,;
        vx,;
        vy,        size: Math && Math.random() * 3 + 1,;
        color: colors[Math && Math.floor(Math && Math.random() * colors && colors.length)],;
        alpha: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
        life: 0,;
        maxLife: Math && Math.random() * 200 + 100,;
      };    };

    const initParticles = () => {;

      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(createParticle());      }        x;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        y;
        vx;
        vy;y = -10;
          y = -10;
<<<<<<< HEAD

=======
        case 0: // Top;
x = Math.random() * canvas.width;

          y = -10;

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

      return {x,y,vx,vy,size: Math.random() * 3 + 1,color: colors[Math.floor(Math.random() * colors.length)],alpha: Math.random() * 0.8 + 0.2,life: 0,maxLife: Math.random() * 200 + 100}}

const initParticles = (particles = [];) => {
  return $3;}
}

=======
      return {x,y,vx,vy,size: Math.random() * 3 + 1,color: colors[Math.floor(Math.random() * colors.length)],alpha: Math.random() * 0.8 + 0.2,life: 0,maxLife: Math.random() * 200 + 100,}}const initParticles = () => {particles = [];
>>>>>>> origin/cursor/delete-old-data-records-6bba
for (let i = 0; i < 100; i++) {particles.push(createParticle())}
    }

const animate = (ctx.clearRect(0, 0, canvas.width, canvas.height)// Update and draw particles;
      particles.forEach((particle, index) => {particle.x += particle.vx;
        particle.y += particle.vy;
<<<<<<< HEAD



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





      }
    }
origin/cursor/automate-test-improve-and-merge-code-2533

  }, []);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}    />

=======
        vy;


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
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

      }
      for (let coordinate_y = 0, y < canvas.height, y += grid_size) {
        ctx.begin_path ();
        ctx.move_to (0, y);
        ctx.line_to (canvas.width, y);}
        ctx.stroke ();}
      canvas.height = window.innerHeight
    };

      animationRef && animationRef.current = requestAnimationFrame(animate)
};
    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight
};        ctx && ctx.beginPath();
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
      if (animationRef.current) {
}
cancelAnimationFrame(animationRef.current);
      animationRef && animationRef.current = requestAnimationFrame(animate);
    };
    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;      canvas && canvas.height = window && window.innerHeight;
    };
    window && window.addEventListener('resize', handleResize);
    initParticles();
    animate();
    return () => {;
      window && window.removeEventListener('resize', handleResize);
      if (animationRef && animationRef.current) {;
        cancelAnimationFrame(animationRef && animationRef.current);
        cancelAnimationFrame(animationRef.current)

      }
    };  }, []);        cancelAnimationFrame(animationRef && animationRef.current);
        cancelAnimationFrame(animationRef.current)
      animationRef.current = requestAnimationFrame(animate)
};


const handleResize = () => {
      }
    }
origin/cursor/automate-test-improve-and-merge-code-2533
    window.addEventListener('resize', handleResize);
    initParticles();
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {}
cancelAnimationFrame(animationRef.current);}
      }
    };
  }, []);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}    />
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
<<<<<<< HEAD

      <canvas;

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


          }}
=======

            ease: 'linear',      />;
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
ref={canvasRef}

className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'}
}
        }}
         />;
      {/* Floating Geometric Shapes */}

      <div className='fixed inset-0 pointer-events-none z-10'    />
        <motion.div;
className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20'
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]}
            opacity: [0.3, 0.6, 0.3]}
          }}
          transition={{
            duration: 8,
            repeat: Infinity}
ease: 'linear'}
          }}
           />
        <motion.div;
className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full'
          animate={{
            y: [0, -20, 0]}
            opacity: [0.2, 0.5, 0.2]}
          }}
          transition={{
            duration: 6,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
           />;
        <motion&& motion.div;
className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{

            rotate: [0, 180, 360]}
            scale: [1, 1.1, 1]}
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
ease: 'linear'}
}
          }}

      <div className='fixed inset-0 pointer-events-none z-10'>'
        <motion.div,
className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20''
          animate={{
            coordinate_y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 border border - pink - 400 / 20 rounded - full";

            }
            "duration": 8,
            "repeat": Infinity,
"ease": 'linear','
          }} />
        <motion.div,
className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full''
          animate={{
            }
            "y": [0, -20, 0],
            "opacity": [0.2, 0.5, 0.2]
          }}
          transition={{
            }
            "duration": 6,
            "repeat": Infinity,
"ease": 'easeInOut','
          }} />;
        <motion&& motion.div,
className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45''
          animate={{
            coordinate_y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2];
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}

            }
            "duration": 12,
            "repeat": Infinity,
"ease": 'linear','

          }}
          transition={{"rotate": [0, 180, 360],"scale": [1, 1.1, 1]}}
          transition={{"duration": 12,"repeat": Infinity,"ease": 'linear'}}' />;

        <motion&& motion.div,
className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12''
          animate={{

            }

            "rotate": [0, -180, -360],
            "opacity": [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}

          transition={{rotate: [0, 180, 360],scale: [1, 1.1, 1]}}
          transition={{duration: 12,repeat: Infinity,ease: 'linear'}}
           />;

        <motion&& motion.div;
className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{

            rotate: [0, -180, -360]}
            opacity: [0.4, 0.7, 0.4]}
          }}
          transition={{
            duration: 10,
            repeat: Infinity}
ease: 'linear'}
          }}
          transition={{
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
          transition={{ />;

      </div>;

      {/* Energy Field Effects */}

        />
      </div>
      {/* Energy Field Effects */}
<<<<<<< HEAD

      <div className='fixed inset-0 pointer-events-none z-20'>



        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'

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
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
            ease: 'linear',        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - transparent via - cyan-500 / 5 to-transparent";
          animate={{
            coordinate_x: ['-100%100%'];
          }}
          transition={{

<<<<<<< HEAD
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"


          animate={{
}
            x: ['-100%', '100%']}
          }}
          transition={{
            duration: 15,
            repeat: Infinity}
ease: 'linear'}
          }}
           />
        <motion.div;
className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent'
          animate={{}
            y: ['-100%', '100%']}
          }}
          transition={{

            repeat: Infinity
=======
          animate={{
            coordinate_x: ['-100%100%'];
          }}

          }}

            duration: 20,

            repeat: Infinity

            duration: 20,
            repeat: Infinity,

          }}
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD


        />

      </div>
      {/* Content */}



<div className='relative z-30'    />{children}</div>

      {/* Holographic Overlay */}

      <div className='fixed inset-0 pointer-events-none z-40'    />
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent'    />
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent'    />


=======
          }}


            duration: 20,
            repeat: Infinity,


          }}


      <div className='fixed inset-0 pointer-events-none z-40'>;
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />;
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />;
      </div>;
    </div>;
  );
}
            ease: 'linear',            ease: "linear";
            duration: 20,
            repeat: Infinity,
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
    </div>);
}
;
      <div className="fixed inset - 0 pointer - events-none z-40">;
        <div className="absolute inset - 0 bg - gradient - to - br from - transparent via - cyan-400 / 2 to-transparent" />;
        <div className="absolute inset - 0 bg - gradient - to - tl from - transparent via - purple-400 / 2 to-transparent" />;
      </div>;
    </div>);
}
;
export default UltraFuturisticBackground2026;
<<<<<<< HEAD


=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </div>
    </div>
  );
}
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
      {/* Holographic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent" />
      </div>
    </div>
  )
}
export default UltraFuturisticBackground2026;

export default UltraFuturisticBackground2026;
export default UltraFuturisticBackground2026
};

