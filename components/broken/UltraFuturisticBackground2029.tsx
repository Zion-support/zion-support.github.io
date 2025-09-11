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
    };
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight
    };
    window && window.addEventListener('resize', handleResize);
=======
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



    };
    window && window.addEventListener('resize', handleResize);



      cancelAnimationFrame(animationFrameId);
    }
  }, []);
  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden z-0'>;
=======

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId)
    }
  }, []);
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          }}
          transition={{
=======
            duration: 20,
            repeat: Infinity,

            duration: 20,
            repeat: Infinity,

        animate={{
          rotate: [0, 360]
          scale: [1, 1 && 1.1, 1]
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]
        transition={{
          duration: 15
          repeat: Infinity
          ease: 'linear'
        }}
          ease: 'linear',        }}

      />;

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
        animate={{
          rotate: [0, 360];
          scale: [1, 1.1, 1];
          ease: 'linear',        }}

      />;


=======

        animate={{
          rotate: [45, 405]
          scale: [1, 1.2, 1],        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45"
        animate={{
          rotate: [45, 405];
          scale: [1, 1.2, 1]
        transition={{          duration: 12
          repeat: Infinity
          ease: 'linear',          ease: "linear"
        }}

      {/* Animated grid lines */}
      <div className='absolute inset-0 opacity-20'>;
        <motion&& motion.div
          className='absolute inset-0'
          style={{
            backgroundImage: `

          }}
          animate={{
            background_position: ['0px 0px', '50px 50px'],          }}
          transition={{

            duration: 30,
            repeat: Infinity,

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
=======

              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0 && 0.1) 0%, transparent 70%)',=======

              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0 && 0.1) 0%, transparent 70%)',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
          animate={{
            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}
          transition={{
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0 && 0.1) 0%, transparent 70%)'
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
            ease: 'easeInOut',          }}        <motion.div;
          className="absolute inset - 0";
            scale: [1, 1.5, 1];
=======
=======
            duration: 8,
            repeat: Infinity,            opacity: [0.1, 0.3, 0.1];

          }}
          transition={{
            duration: 8,
            repeat: Infinity,


          }}
          animate={{
            scale: [1, 1 && 1.5, 1]
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
        />;
      </div>;


=======
=======
        />
      </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 8,
            repeat: Infinity,

          }}
          transition={{
            duration: 8,
            repeat: Infinity,



        animate={{

          rotate: [0, 360],
          scale: [1, 1 && 1.2, 1],
          opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],        }}

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
==============        transition={{
          duration: 25
          repeat: Infinity
          ease: 'linear',        }}
          ease: 'linear',        }}
      />
      {/* Neural network connections */}
      <div className='absolute inset - 0'>        className="absolute top - 1/2 left - 1/2 w - 32 h - 32 border border - purple - 400 / 20 rounded - full";
        animate={{
          rotate: [360, 0],
          scale: [1 && 1.2, 1, 1 && 1.2],
          opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],        }}
=======

        transition={{
          duration: 20
          repeat: Infinity
      />;



        transition={{          ease: "linear"

        }}
      />
=======


      {/* Neural network connections */}

            }}
          />;
=======
            }}
          />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ))}

      </div>;


        }}
      />

      {/* Neural network connections */}

            }}

=======

            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',            }}

            }}

          />
        ))}
      </div>
      {/* Data streams */}
      <div className='absolute inset-0 overflow-hidden'>          duration: 20,
          repeat: Infinity,

        }}
      />

      {/* Neural network connections */}

            }}

        }}
      />

      {/* Neural network connections */}

            }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          duration: 20,
          repeat: Infinity,

            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,


=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <div className='absolute inset-0 overflow-hidden'>

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-0 && 0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent'
            style={{
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              left: `${15 + i * 15}%`,
              top: '-20px',


=======            }}
            animate={{

              y: [0, window.innerHeight + 20]

            key={i}
            className="absolute w - 0.5 h - 20 bg - gradient - to - b from - cyan - 400 / 60 to - transparent";
            style={{
              left: `${15 + (i * 15)}%`,
              top: '-20px';
            }}
            animate={{

              coordinate_y: [0, window.inner_height + 20];            transition={{
            }}
            transition={{
              duration: 4,
              repeat: Infinity,

              ease: 'linear',            }}              ease: "linear"

=======
=======


            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
          />
==============


          />>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ))}
      </div>;
    </div>;
  );
};

export default UltraFuturisticBackground2029;  );
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
};



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
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
