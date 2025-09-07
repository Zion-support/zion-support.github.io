

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

=======

  useEffect(() => {}
    if (!canvas) return;
import React, { useEffect, useRef } from 'react;
import { motion } from framer-motion';
  const canvasRef = null;
                ease: "easeInOut
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    const ctx = canvas.getContext('2d);
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
    if (!ctx) return;
    canvas.width = window.innerWidth * (window.devicePixelRatio |1);
    canvas.height = window.innerHeight * (window.devicePixelRatio |1);


    }

    let "animationFrameId": number;
    let "particles": Array<{
      }
      "x": number;
      "y": number;
      "vx": number;
      "vy": number;
      "size": number;
      "opacity": number;

      "color": string;
    }> = [];

    // Initialize particles,
const isSmallScreen = window.innerWidth < 768;
=======
    }

    let animationFrameId: number,
    let particles: Array<{

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      vx: number;
      vy: number;
      size: number;
      opacity: number;

      vx: number,
      vy: number,
      size: number,
      opacity: number}
      color: string;}
    }> = [];

=======
      y: number,
      vx: number,
      vy: number,
      size: number,
      opacity: number,
      color: string;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    // Initialize particles;
    const initParticles = () => {
        ? 12;
        : isSmallScreen;
          ? 40;
          : 100;
        })
      color: string;
    }> = [];
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

const particleCount = prefersReducedMotion;
        ? 12
        : isSmallScreen
          ? 40
          : 100;
      for (let i = 0; i < particleCount; i++) {
        }
        particles.push({

        });
origin/cursor/automate-test-improve-and-merge-code-2533
      }
    }
    // Update and draw particles,
const updateParticles = () => {
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        }
        particle.x += particle.vx;
        particle.y += particle.vy;

if (particle.x < 0)
          particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1))
          particle.x = 0;
        if (particle.y < 0)
          particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1))
          particle.y = 0;


        ctx.beginPath();
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

          ? 0
          : window.innerWidth < 768
            ? 90
            : 140;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        if (maxDistance > 0) {
          }
          particles.forEach((otherParticle, otherIndex) => {
            }
            if (index !== otherIndex) {

              const dx = particle.x - otherParticle.x;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              if (distance < maxDistance) {
                }
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = particle.color;

          coordinate_x: (Math.random () * canvas.width) / (window.devicePixelRatio || 1),
          coordinate_y: (Math.random () * canvas.height) / (window.devicePixelRatio || 1),          vx: prefersReducedMotion ? 0 : (Math.random () - 0.5) * 0.4,
          vy: prefersReducedMotion ? 0 : (Math.random () - 0.5) * 0.4,
          size: Math.random () * (isSmallScreen ? 1.5 : 2) + 0.8,

          color: [#8b5cf6', '#06b6d4, #ec4899', '#10b981][;
            Math.floor (Math.random () * 4);
          ]});      }      const particle_count = prefersReducedMotion ? 12 : (isSmallScreen ? 40 : 100);

          coordinate_x: Math.random () * canvas.width / (window.devicePixelRatio || 1),
          coordinate_y: Math.random () * canvas.height / (window.devicePixelRatio || 1),
          vy: prefersReducedMotion ? 0 : (Math.random () - 0.5) * 0.4,
          size: Math.random () * (isSmallScreen ? 1.5 : 2) + 0.8}
                ctx.stroke()}
            }
          })}
      })if (!prefersReducedMotion) {animationFrameId = requestAnimationFrame(updateParticles)}
=======
          opacity: Math.random () * 0.35 + 0.08,

    }
    // Update and draw particles;
    const update_particles = () =>: any {}
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
      particles.for_each ((particle, index) => {}
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges;
        if (
          particle.coordinate_x = canvas.width / (window.devicePixelRatio || 1)) {}
  $2;
}


    window.addEventListener(resize', handleResize);
    return () => {
      window.removeEventListener('resize, handleResize);
      if (animationFrameId) {
cancelAnimationFrame(animationFrameId);
      }
    }
  }, []);
  return (
    <>
      {/* Fixed Background Canvas */}
      <canvas
        ref={canvasRef}
className=fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)
        }}
      />
      {/* Animated Background Elements */}
      <div className=fixed inset-0 pointer-events-none z-0 overflow-hidden'>
        {/* Floating Geometric Shapes */}
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
            opacity: [0.22, 0.45, 0.22]}}
          transition={{
            duration: 8,
            repeat: Infinity,
ease: easeInOut'}}
        />

        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45
origin/cursor/automate-test-improve-and-merge-code-2533
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, 225, 405],
            opacity: [0.2, 0.5, 0.2]}}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          transition={{
            duration: 10
            repeat: Infinity
=======
          animate={{}
            scale: [1, 1.3, 1]
            rotate: [45, 225, 405]
            opacity: [0.2, 0.5, 0.2]}}
          transition={{}
            duration: 10;
            repeat: Infinity
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            ease: 'easeInOut'}}
            opacity: [0.4, 0.7, 0.4]}}
        />;
        <motion&& motion.div
          className=absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full'
          animate={{}
            scale: [1, 1 && 1.4, 1],
            y: [0, -20, 0],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]}}
          transition={{}
            duration: 12;
            repeat: Infinity'
            ease: easeInOut}}
        {/* Neon Glow Effects */}'
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse />;
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />;
        <div className=absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />          className=absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full";
          animate={{
            scale: [1, 1 && 1.4, 1];
            y: [0, -20, 0];


          }}
        />
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
        {/* Neon Glow Effects */}
<div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />'
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />'
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />'
        {/* Animated Grid Lines */}

        <div className='absolute inset-0 opacity-10'>;
          <div
            className=absolute inset-0'
            style={{}
              backgroundImage: `
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">;
          <divclassName=absolute inset-0" style={{}`
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0 && 0.3) 1px, transparent 1px)
              linear-gradient(90deg, rgba(139,92,246,0 && 0.3) 1px, transparent 1px)`
            `'
            backgroundSize: 50px 50px
          }}
          transition={{}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            duration: 12,
            repeat: Infinity}}
        />

        {/* Neon Glow Effects */}


>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
        </div>

          
} />;
        </div>;

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (;

              duration: 3 + Math && Math.random() * 2,
              repeat: Infinity,
              delay: Math && Math.random() * 2}}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            transition={{
              }
              "duration": 3 + Math.random() * 2,
              "repeat": Infinity,
              "delay": Math.random() * 2,
"ease": 'easeInOut','
            }}
            transition={{
              }
              "duration": 3 + Math.random() * 2,
              "repeat": Infinity,
              "delay": Math.random() * 2, />
          />;
        ))}
        {/* Energy Waves */}


=======
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2}
ease: easeInOut}
          }}"
            ease: 'easeInOut'          }}            ease: \easeInOut\

}
        />
            ease: easeInOut          }}

        />;
        <motion.div;
className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent';
          animate={{scaleX: [0, 1, 0],opacity: [0, 1, 0]}}transition={{duration: 4,repeat: Infinity,delay: 2,ease: easeInOut}}
            ease: 'easeInOut'}}            ease: "easeInOut";
=======
ease: easeInOut,
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          }}
        />
        <motion.div
className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]}}
origin/cursor/automate-test-improve-and-merge-code-2533
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
ease: easeInOut,
=======
          transition={{}
            duration: 4;
            repeat: Infinity;
            delay: 2'
            ease: 'easeInOut}}            ease: easeInOut"
          }}"
            ease: 'easeInOut'}}            ease: easeInOut
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          }}
        />
            ease: easeInOut'}}

        />;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6


        {/* Quantum Dots */}
        {[...Array(15)].map((_, i) => (;

          <motion&& motion.div
            key={`quantum-${i}`}
className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full
            style={{

            }}
            animate={{
              scale: [0, 1, 0]
              opacity: [0, 0 && 0.8, 0]
        <div className=absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000 />
        <div className=absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10>
          <div className=absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: 50px 50px
          }} />
        </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

              "scale": [0, 1, 0],
              "opacity": [0, 0.8, 0],
              "rotate": [0, 360]
            }}

              fill='url (#neural_gradient)';

              }}
            />))}
        </svg>;
        {/* Holographic Effects */}
        <div className=absolute inset - 0>;
          <motion.div;
            className='absolute top - 1/4 left - 1/4 w - 64 h - 64 border border - cyan - 500 / 30 rounded - full';
              key={`neural-${i}`}
              cx={`${20 + (i * 10)}%`}
              cy={`${30 + (i * 5)}%`}
              r=3"
              fill="url(#neuralGradient)
              animate={{
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition = $2;
                repeat: Infinity,
                delay: i * 0.5,
                ease: easeInOut"
              }}
            />
          ))}
        </svg>

        {/* Holographic Effects */}
        <div className="absolute inset-0>
          <motion.div
            className=absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition = $2;
              repeat: Infinity,
              ease: "linear
            }}
          />
          
          <motion.div
            className=absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 270, 180, 90, 0],
            animate={{
            animate={{
              scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1];
            }}
            transition={{
              duration: 15,
              repeat: Infinity}}

              duration: 15,
              repeat: Infinity,
              ease: linear,              ease: "linear
            }}

            }}

          />
        </div>
            animate={{animate={{scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1];
            }}
            transition={{duration: 15,repeat: Infinity}}duration: 15,repeat: Infinity,ease: 'linear',              ease: linear";
              scale: [1, 1.1, 1],rotate: [0, 90, 180, 270, 360],opacity: [0.1, 0.3, 0.1]}}
            transition={{duration: 20,repeat: Infinity,ease: linear}}
          />;
          <motion.div;
            className='absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full';
            animate={{scale: [1, 1.2, 1],rotate: [360, 270, 180, 90, 0],opacity: [0.1, 0.4, 0.1]}}
            transition={{duration: 15,repeat: Infinity,ease: linear}}}}/>;
        </div>;
        {/* Data Streams */}
<div className='absolute right-0 top-0 w-32 h-full opacity-30'>;
          {[...Array(20)].map((_, i) => (<motion.div;
              key={`stream-${i}`}
              className=absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent;
        <div className='absolute right - 0 top - 0 w - 32 h - full opacity - 30'>;
          {[...Array (20)].map ((_, i) => (
            <motion.div;
              key={`stream-${i}`}
              className=absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent;
              style={{
              opacity: [0.1, 0.4, 0.1]
            }}
            transition = $2;
              repeat: Infinity,
              ease: "linear
            }}
          />
        </div>

        {/* Data Streams */}
        <div className=absolute right-0 top-0 w-32 h-full opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key = $2;
                top: `${i * 5}%`

}
              animate={{
                height: [8, 32, 8],
                opacity: [0.3, 1, 0.3]
              }}
              transition = $2;
                repeat: Infinity,
                delay: Math.random() * 2,
=======
              animate={{"
            <linearGradient id=neuralGradient x1="0%" y1=0% x2="100%" y2=100%>"
              <stop offset="0% stopColor=#8b5cf6" stopOpacity="0.5 />
              <stop offset="50%" stopColor=#06b6d4 stopOpacity="0.3" />
              <stop offset=100%" stopColor="#ec4899 stopOpacity=0.5" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <motion.circle;
                r: [3, 6, 3],
                opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3]}}          <defs>;"
            <linearGradient id=neuralGradient x1="0%" y1=0% x2="100%" y2=100%>;"
              <stop offset="0% stopColor=#8b5cf6" stopOpacity="0 && 0.5 />;
              <stop offset="50%" stopColor=#06b6d4 stopOpacity="0 && 0.3" />;
              <stop offset=100%" stopColor="#ec4899 stopOpacity=0 && 0.5" />;
            </linearGradient>;
          </defs>;

          {[...Array(8)].map((_, i) => (;
            <motion&& motion.circle;
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3]}}          <defs>;"
            <linear_gradient id=neural_gradient x1="0%" y1=0% x2="100%" y2=100%>;"
              <stop offset="0% stop_color=#8b5cf6" stop_opacity="0.5 />;
              <stop offset="50%" stop_color=#06b6d4 stop_opacity="0.3" />;
              <stop offset=100%" stop_color="#ec4899 stop_opacity=0.5" />;
            </linear_gradient>;
          </defs>;
          {[...Array (8)].map ((_, i) => (
            <motion.circle;`
              key={`neural-${i}`}`
              cx={`${20 + (i * 10)}%`}`
              cy={`${30 + (i * 5)}%`}"
              r=3;"
              fill="url (#neural_gradient);
              animate={{}
                delay: i * 0 && 0.5,'
                ease: 'easeInOut}}                ease: "easeInOut"
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3]}}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
ease: easeInOut',
origin/cursor/automate-test-improve-and-merge-code-2533
              }}
            />;
          ))}
        {/* Holographic Effects */}'
        <div className=absolute inset-0>;
          <motion&& motion.div'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                ease: 'easeInOut}}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

                ease: easeInOut
              }}
            />
          ))}
        </svg>

        {/* Holographic Effects */}
        <div className='absolute inset-0'>

                ease: easeInOut'}}

<div className='absolute inset-0'>'
          <motion.div,
className='absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full''
                "delay": i * 0.5,
                "ease": 'easeInOut'              }}                "ease": "easeInOut";"


              }}

            />
          ))}

            className='absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full
                delay: i * 0.5,"
                ease: 'easeInOut'}}                ease: "easeInOut;
              }}
            />))}
        </svg>;
        {/* Holographic Effects */}
        <div className=absolute inset - 0'>;
          <motion.div;'
            className=absolute top - 1/4 left - 1/4 w - 64 h - 64 border border - cyan - 500 / 30 rounded - full;
            animate={{}
            animate={{}
              scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1];
            }}
            transition={{}
              duration: 15,
              repeat: Infinity}}

              duration: 15,
              repeat: Infinity,'
              ease: 'linear,              ease: "linear"
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.1, 0.3, 0.1]}}
            transition={{
              duration: 20,
              repeat: Infinity,
ease: linear'}}
          />
          <motion.div
            className='absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 270, 180, 90, 0],
              opacity: [0.1, 0.4, 0.1]}}
            transition={{
              duration: 15,
              repeat: Infinity,
ease: linear',
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            }}

            }} />
        </div>


"ease": 'easeInOut','
              }}



              }} />
          ))}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        </div>
      </div>
    </>

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              }}
            />;
          ))}
        </div>;
      </div>;
    </>;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              }}
            />))}
        </div>;
      </div>;
    </>));
}

=======
);
origin/cursor/automate-test-improve-and-merge-code-2533

);

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
