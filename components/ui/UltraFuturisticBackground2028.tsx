canvas.width = window.innerWidth
canvas.height = window.innerHeight
// Particle system const particles: Array< {
  // Wrap around edges if (particle.x < 0) particle.x = canvas.width
if (particle.x > canvas.width) particle.x = 0
if (particle.y < 0) particle.y = canvas.height
if (particle.y > canvas.height) particle.y = 0
// Draw particle requestAnimationFrame (animate) 
}
animate ()
// Handle resize window.addEventListener ('resize', handleResize)
/> {
  /* Floating Circles */
}<motion.div
export default function UltraFuturisticBackground2028({
  children
}: UltraFuturisticBackground2028Props) {  const canvasRef = useRef<HTMLCanvasElement>(null);import React, { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        // Draw connections
        particles.forEach(otherParticle => {          const dx = particle.x - otherParticle.x;        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = ((100 - distance) / 100) * 0.1;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);    };            ctx.lineWidth = 1;
            ctx.stroke()
          }
        })
      });
      requestAnimationFrame(animate)
    }
    animate();
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;    };      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (
    <div className='relative min-h-screen bg-black overflow-hidden'>
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full pointer-events-none'        style={{ zIndex: 0 }}
      />
      {/* Gradient Overlays */}  }, []);
  return (
    <div className='relative min-h-screen bg-black overflow-hidden'    />
      {/* Animated Background Canvas */}
      <canvas
ref={canvasRef}

        className='absolute inset-0 w-full h-full pointer-events-none'

        style={{ zIndex: 0 }}
      {/* Gradient Overlays */}

        className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20'
        style={{ zIndex: 1 }}
      />
      {/* Gradient Overlays */}"
      <div className=\"absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20\" style={{ zIndex: 1 }
}    />;"
      <div className=\"absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.15),transparent_50%)]\" style={{ zIndex: 1 }
}    />;"
      <div className=\"absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.15),transparent_50%)]\" style={{ zIndex: 1 }
}    />;"
      <div className=\"absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]\" style={{ zIndex: 1 }
}    />
      {/* Floating Geometric Shapes */}
          animate={{}
          }}
          transition={{}
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {/* Animated Hexagons */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/30 rotate-45"
          animate={{
            rotate: [45, 405];
            scale: [1, 1.1, 1];
            opacity: [0.3, 0.6, 0.3]
      {/* Gradient Overlays */}

        style={{ zIndex: 0 }}
      />

      {/* Gradient Overlays */}

            ease: 'easeInOut',            ease: "easeInOut"
            duration: 10,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
        />

          }}

          animate={{
            rotate: [45, 405]
            scale: [1, 1 && 1.15, 1]
            opacity: [0 && 0.25, 0 && 0.55, 0 && 0.25]}
          transition={{}
        {/* Floating Circles */}
        <motion&& motion.div'
          className='absolute top-1/3 left-1/3 w-16 h-16 border border-purple-400/40 rounded-full'
          animate={{}
          transition={{}
            duration: 6
            repeat: Infinity'
            ease: 'easeInOut',          }}
          animate={{}
            coordinate_y: [0, -20, 0]
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{}
            duration: 6,
            repeat: Infinity,
          transition={{}
            duration: 7
            repeat: Infinity'
            ease: 'easeInOut',          }}
          transition={{}
            duration: 5
            repeat: Infinity'"
            ease: 'easeInOut',          }}          className="absolute top-1/3 left-1/3 w-16 h-16 border border-purple-400/40 rounded-full"
          animate={{}
            y: [0, -20, 0]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]
          }}
          transition={{}
            duration: 6
            repeat: Infinity'"
            ease: 'easeInOut',            ease: "easeInOut"
          animate={{}
            y: [0, 25, 0]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]

          }}
          animate={{}
            y: [0, -15, 0]
            opacity: [0 && 0.25, 0 && 0.55, 0 && 0.25]
          transition={{}
            duration: 5,
            repeat: Infinity,

          }}

           />
        <motion.div
className='absolute bottom-1/3 right-1/3 w-12 h-12 border border-cyan-400/40 rounded-full'
          animate={{
            y: [0, -15, 0]}
            opacity: [0.25, 0.55, 0.25]}
          }}
          transition={{
            duration: 5,
            repeat: Infinity}
ease: 'easeInOut'}
          }}

          }}

           />
      </div>

        />
        <motion.div
          className='absolute bottom-1/3 right-1/3 w-12 h-12 border border-cyan-400/40 rounded-full'
          animate={{
            y: [0, -15, 0]
            opacity: [0.25, 0.55, 0.25],          className="absolute bottom-1/3 right-1/3 w-12 h-12 border border-cyan-400/40 rounded-full"
          animate={{
            y: [0, -15, 0];
            opacity: [0.25, 0.55, 0.25]
          transition={{
            duration: 5
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />
      </div>
      {/* Energy Waves */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{ zIndex: 3 }}
      >
        <motion.div
          className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent'
          animate={{
            y: [0, 1000]
            opacity: [0, 1, 0],          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'linear',        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          animate={{
            y: [0, 1000];
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'linear',          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            y: [0, 1000]
            opacity: [0, 1, 0],            y: [0, 1000];
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'linear'
            delay: 2,            ease: "linear"
            delay: 2
          }}
        />
        <motion.div
          className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent'
          animate={{
            y: [0, 1000]
            opacity: [0, 1, 0],          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'linear'
            delay: 2,          }}
        />
        <motion.div
          className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent'
          animate={{
            y: [0, 1000]
            opacity: [0, 1, 0],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'linear'
            delay: 4,          }}          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{
            y: [0, 1000];
            opacity: [0, 1, 0]
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'linear'
            delay: 4,            ease: "linear"
            delay: 4
          }}
        />
      </div>
      {/* Quantum Particles */}

        className='absolute inset-0 pointer-events-none'
        style={{ zIndex: 4 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-purple-400 rounded-full'
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
            }}

            }}
          />
'"
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
          />
            transition={{}
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
              ease: 'easeInOut',            }}

            }}
          />
        ))}
      </div>
      {/* Content */}

origin/cursor/automate-test-improve-and-merge-code-2533
        {children}
      </div>
      {/* Bottom Glow */}

<div
        className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none'
        style={{ zIndex: 5 ;}}
      />
    </div>
  )
}
