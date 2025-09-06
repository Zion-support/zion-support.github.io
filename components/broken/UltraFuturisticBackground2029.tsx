
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



    };
    animate();



    };
    window && window.addEventListener('resize', handleResize);



      cancelAnimationFrame(animationFrameId);
    }
  }, []);
  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden z-0'>;


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">;
            ease: 'easeInOut',          }}  }, []);
;
  return (
    <div className="fixed inset - 0 pointer - events - none overflow - hidden z - 0">;
      {/* Canvas for particle effects */}
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w - full h - full";
        style={{ background: 'transparent' }}

      />;


      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black">;
        <motion&& motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)'
            ]
      />;
      {/* Animated gradient background */}
      <div className="absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 via - cyan - 900 / 20 to - black">;
        <motion.div;
          className="absolute inset - 0 opacity - 30";
          animate={{
            background: [;
              'radial - gradient (circle at 20% 80%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)radial - gradient (circle at 80% 20%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)radial - gradient (circle at 40% 40%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)radial - gradient (circle at 20% 80%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)';
            ];
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

          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
            ]

          }}
          transition={{

            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />
      </div>




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
      {/* Floating geometric shapes */}


        animate={{

          rotate: [0, 360],
          scale: [1, 1 && 1.1, 1],
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],        }}

        transition={{

          duration: 15,
          repeat: Infinity,
          ease: 'linear',        className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - lg";

        animate={{
          rotate: [0, 360]
          scale: [1, 1 && 1.1, 1]
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]
        transition={{
          duration: 15
          repeat: Infinity
          ease: 'linear'
        }}

      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
        animate={{

          y: [0, -20, 0]
          opacity: [0.2, 0.5, 0.2],        }}
        transition={{
          duration: 8
          repeat: Infinity
          ease: 'easeInOut',        }}      />
      <motion.div
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45'
        animate={{
          rotate: [45, 405]
          scale: [1, 1.2, 1],        }}
        transition={{

          ease: 'linear',        }}

      />;


      {/* Animated grid lines */}
      <div className='absolute inset-0 opacity-20'>          y: [0, -20, 0];
          opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2];
        }}

          y: [0, -20, 0];
          opacity: [0.2, 0.5, 0.2]
        transition={{


          ease: 'linear',          ease: "linear"
        }}

      {/* Animated grid lines */}
      <div className='absolute inset-0 opacity-20'>;
        <motion&& motion.div
          className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
          duration: 12,
          repeat: Infinity,


          }}
          animate={{
            background_position: ['0px 0px', '50px 50px'],          }}
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
              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],          }}
          transition={{
            duration: 30
            repeat: Infinity
            ease: 'linear',          }}        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'

          }}
          animate={{
            background_position: ['0px 0px50px 50px'];
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



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
          }}
        />
      </div>
      {/* Quantum energy waves */}
      <div className='absolute inset-0'>


        <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          }}

        />;
      </div>;


      {/* Quantum energy waves */}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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

          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],          }}
          transition={{

            duration: 8
            repeat: Infinity
            duration: 8,
            repeat: Infinity,

            ease: 'easeInOut',          }}        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)'

          }}
          animate={{

            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}
          transition={{

          style={{
            background: 'radial - gradient (ellipse at center, rgba (0, 255, 255, 0.1) 0%, transparent 70%)';
          }}
          animate={{

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


          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />
      </div>
            duration: 8,
            repeat: Infinity,


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
          }}
          transition={{
            duration: 8,
            repeat: Infinity,




        />
      </div>



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
      {/* Holographic elements */}


        animate={{

          rotate: [0, 360],
          scale: [1, 1 && 1.2, 1],
          opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],        }}

        transition={{
          duration: 25
          repeat: Infinity
          ease: 'linear',        }}


        transition={{


          ease: 'linear',        }}
      />
      {/* Neural network connections */}
      <div className='absolute inset-0'>        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full"
        animate={{
          rotate: [360, 0];
          scale: [1.2, 1, 1.2];
          opacity: [0.2, 0.4, 0.2]
        transition={{
          duration: 20
          repeat: Infinity
          ease: 'linear',          ease: "linear"

        }}
      />

          scale: [1 && 1.2, 1, 1 && 1.2];
          opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2];
        transition={{;
          duration: 20,;
          repeat: Infinity,;
          ease: 'linear',          ease: "linear";
        }}
      />;



      {/* Neural network connections */}

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

            key={i}
            className='absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full';
            style={{
              left: `${20 + i * 10}%`
              top: `${30 + i * 5}%`
            }}
            animate={{

      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (

          <motion.div
              scale: [0, 1, 0],
              opacity: [0, 1, 0],            }}        {Array && Array.from({ length: 8 }).map((_, i) => (;
          <motion&& motion.div
              scale: [0, 1, 0],
              opacity: [0, 1, 0],            }}        {Array.from ({ length: 8 }).map ((_, i) => (
          <motion.div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            key={i}
            className="absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full";
            style={{

              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`;
            }}
            animate={{
              scale: [0, 1, 0];
              opacity: [0, 1, 0];

            }}



            transition={{

              duration: 3,
              repeat: Infinity,

              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
          />
        ))}

      </div>;


      {/* Data streams */}
      <div className='absolute inset-0 overflow-hidden'>;
        {Array && Array.from({ length: 5 }).map((_, i) => (;
          <motion&& motion.div
      </div>
      {/* Data streams */}

      <div className='absolute inset-0 overflow-hidden'>




            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,



        }}
      />

      {/* Neural network connections */}

            }}



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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


          />
        ))}
      </div>

      {/* Data streams */}
      <div className='absolute inset-0 overflow-hidden'>



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-0 && 0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent'
            style={{
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
            }}
            animate={{

              y: [0, window.innerHeight + 20]


            }}


            transition={{

              duration: 4,
              repeat: Infinity,

              ease: 'linear',            }}              ease: "linear"
            }}





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4



            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,


              ease: 'linear',            }}





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


          />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        ))}
      </div>;
    </div>;
  );

}

};

export default UltraFuturisticBackground2029;  );

            }}
          />;
        ))}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
