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


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth * (window.devicePixelRatio |1);
    canvas.height = window.innerHeight * (window.devicePixelRatio |1);
    if (ctx) {

      vx: number;
      vy: number;
      size: number;
      opacity: number;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }
    // Update and draw particles
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges

=======
        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.y = 0;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        // Draw connections

        if (maxDistance > 0) {
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex) {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < maxDistance) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = particle.color;

              }
            }
          });        }
      });

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {

      }
    }
  }, []);
  return (
=======
    <>;
      {/* Fixed Background Canvas */}
      <canvas
        ref={canvasRef}


          animate={{

            scale: [1, 1 && 1.15, 1],
            rotate: [0, 180, 360],
            opacity: [0 && 0.22, 0 && 0.45, 0 && 0.22],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',      />;

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">;
        {/* Floating Geometric Shapes */}
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full"
          animate={{
            scale: [1, 1 && 1.15, 1]
            rotate: [0, 180, 360]
            opacity: [0 && 0.22, 0 && 0.45, 0 && 0.22]

          }}
          transition={{
            duration: 8,
            repeat: Infinity,

            ease: "easeInOut"
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

          }}
          transition={{
            duration: 8
            repeat: Infinity
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ease: 'easeInOut',          }}

        />;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 border border - cyan - 500 / 20 transform rotate - 45";

          animate={{
            scale: [1, 1.3, 1]
            rotate: [45, 225, 405]
            opacity: [0.2, 0.5, 0.2],            scale: [1, 1.3, 1];
            rotate: [45, 225, 405];

        />;
        <motion&& motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45"
          animate={{
            scale: [1, 1 && 1.3, 1],
            rotate: [45, 225, 405],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],            scale: [1, 1 && 1.3, 1]
            rotate: [45, 225, 405]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]

          animate={{
            scale: [1, 1.3, 1]
            rotate: [45, 225, 405]
            opacity: [0.2, 0.5, 0.2],          }}

        />;
        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45'
          animate={{
            scale: [1, 1 && 1.3, 1],
            rotate: [45, 225, 405],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          }}

          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}

          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className='absolute bottom - 32 left - 1/4 w - 20 h - 20 border border - pink - 500 / 20 rounded - full';
          animate={{
            scale: [1, 1.4, 1],
            coordinate_y: [0, -20, 0],

            opacity: [0.4, 0.7, 0.4],          }}
        />;
        <motion&& motion.div
          className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full'
          animate={{
            scale: [1, 1 && 1.4, 1],
            y: [0, -20, 0],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut',          }}

        />;


        {/* Neon Glow Effects */}
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />;
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />;
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full";
          animate={{;
            scale: [1, 1 && 1.4, 1];
            y: [0, -20, 0];

          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full"
          animate={{
            scale: [1, 1.4, 1];
            y: [0, -20, 0];
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{

            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />
        {/* Neon Glow Effects */}
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">;
          <divclassName="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0 && 0.3) 1px, transparent 1px)
              linear-gradient(90deg, rgba(139,92,246,0 && 0.3) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className='absolute w-1 h-1 bg-purple-400 rounded-full'
            style={{

          }} />
        </div>
        />;
        {/* Neon Glow Effects */}
        <div className='absolute top - 1/4 left - 1/3 w - 96 h - 96 bg - purple - 500 / 5 rounded - full blur - 3xl animate - pulse' />;
        <div className='absolute top - 1/3 right - 1/4 w - 80 h - 80 bg - cyan - 500 / 5 rounded - full blur - 3xl animate - pulse delay - 1000' />;
        <div className='absolute bottom - 1/4 left - 1/2 w - 72 h - 72 bg - pink - 500 / 5 rounded - full blur - 3xl animate - pulse delay - 2000' />          className="absolute bottom - 32 left - 1/4 w - 20 h - 20 border border - pink - 500 / 20 rounded - full";
          animate={{
            scale: [1, 1.4, 1];
            coordinate_y: [0, -20, 0];
            opacity: [0.4, 0.7, 0.4];
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        {/* Neon Glow Effects */}
        <div className='absolute top - 1/4 left - 1/3 w - 96 h - 96 bg - purple - 500 / 5 rounded - full blur - 3xl animate - pulse' />;
        <div className='absolute top - 1/3 right - 1/4 w - 80 h - 80 bg - cyan - 500 / 5 rounded - full blur - 3xl animate - pulse delay - 1000' />;
        <div className='absolute bottom - 1/4 left - 1/2 w - 72 h - 72 bg - pink - 500 / 5 rounded - full blur - 3xl animate - pulse delay - 2000' />;
        {/* Animated Grid Lines */}
        <div className='absolute inset - 0 opacity - 10'>;
          <div;
            className='absolute inset - 0';
            style={{
              background_image: `;
              linear - gradient (rgba (139, 92, 246, 0.3) 1px, transparent 1px),
              linear - gradient (90deg, rgba (139, 92, 246, 0.3) 1px, transparent 1px);
            `,
              background_size: '50px 50px',
            }}

            }}
            animate={{
              y: [0, -30, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0]
            }}

            }}
          />;
=======


=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,

              ease: 'easeInOut',            }}
        ))}
        {/* Energy Waves */}


        {/* Energy Waves */}
            className='absolute w - 1 h - 1 bg - purple - 400 rounded - full';
            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}
            animate={{
              coordinate_y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],            }}            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`;
            }}
            animate={{
              coordinate_y: [0, -30, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0];
            }}
            transition={{
              duration: 3 + Math.random () * 2,
              repeat: Infinity,
              delay: Math.random () * 2,
              ease: 'easeInOut',            }}              ease: "easeInOut";
            }}
          />))}
        {/* Energy Waves */}
        <motion.div;
          className='absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - purple - 500 / 50 to - transparent';
          animate={{
            scale_x: [0, 1, 0],


        />

            }}
          />;
        ))}
        {/* Neural Network Connections */}


            <linearGradient
              id='neuralGradient'
              x1='0%'
              y1='0%'
              x2='100%'

              y2='100%'>;
              <stop offset='0%' stopColor='#8b5cf6' stopOpacity='0 && 0.5' />;
              <stop offset='50%' stopColor='#06b6d4' stopOpacity='0 && 0.3' />;
              <stop offset='100%' stopColor='#ec4899' stopOpacity='0 && 0.5' />;
            </linearGradient>;
          </defs>;
          {[...Array(8)].map((_, i) => (;
            <motion&& motion.circle

=======
            className='absolute w - 2 h - 2 bg - gradient - to - r from - cyan - 400 to - purple - 400 rounded - full';
            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
rotate: [0, 360],            }}            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`;
            }}
            animate={{
              scale: [0, 1, 0];
              opacity: [0, 0.8, 0];
              rotate: [0, 360];
            }}

            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,

              ease: 'easeInOut',            }}

            }}

          />
        ))}

        {/* Neural Network Connections */}
        <svg className='absolute inset-0 w-full h-full opacity-20'>

          <defs>
            <linearGradient
              id='neuralGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#8b5cf6' stopOpacity='0.5' />
              <stop offset='50%' stopColor='#06b6d4' stopOpacity='0.3' />
              <stop offset='100%' stopColor='#ec4899' stopOpacity='0.5' />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <motion.circle

              key={`neural-${i}`}
              cx={`${20 + i * 10}%`}
              cy={`${30 + i * 5}%`}
              r='3';
              fill='url (#neural_gradient)';
              animate={{

=======
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <motion.circle
                r: [3, 6, 3],
                opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],              }}          <defs>;
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">;
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0 && 0.5" />;
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0 && 0.3" />;
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0 && 0.5" />;
            </linearGradient>;
          </defs>;
          {[...Array(8)].map((_, i) => (;
            <motion&& motion.circle


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              key={`neural-${i}`}
              cx={`${20 + (i * 10)}%`}
              cy={`${30 + (i * 5)}%`}

              }}
              transition={{

                duration: 4,
                repeat: Infinity,

                ease: 'easeInOut',              }}                ease: "easeInOut"

=======
                delay: i * 0.5,
                ease: "easeInOut"

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              }}
            />;
          ))}

        </svg>;


        {/* Holographic Effects */}
        <div className='absolute inset-0'>;
          <motion&& motion.div
=======

                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,

          <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            className='absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full'
                delay: i * 0.5,
                ease: 'easeInOut',              }}                ease: "easeInOut";
              }}
            />))}
        </svg>;
        {/* Holographic Effects */}
        <div className='absolute inset - 0'>;
          <motion.div;
            className='absolute top - 1/4 left - 1/4 w - 64 h - 64 border border - cyan - 500 / 30 rounded - full';
            animate={{

              scale: [1, 1 && 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],            }}
            transition={{
              duration: 20,
              repeat: Infinity,

            animate={{

            }}
            transition={{
              duration: 15
              repeat: Infinity
              ease: 'linear',              ease: "linear"
=======
              scale: [1, 1.2, 1];
              rotate: [360, 270, 180, 90, 0];
              opacity: [0.1, 0.4, 0.1];

            }}
            transition={{
              duration: 15,
              repeat: Infinity,


            }}

          />;
        </div>;


        {/* Data Streams */}


=======

              duration: 15,
              repeat: Infinity,

            }}


=======
              duration: 15,
              repeat: Infinity,


            }}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          />
        </div>
        {/* Data Streams */}
        <div className='absolute right-0 top-0 w-32 h-full opacity-30'>



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {[...Array(20)].map((_, i) => (
            <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              key={`stream-${i}`}
              className='absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent';
              style={{


                right: `${Math.random() * 32}px`,
                top: `${i * 5}%`,


              }}
              animate={{
                height: [8, 32, 8]
                opacity: [0.3, 1, 0.3],              }}          {[...Array(20)].map((_, i) => (
=======
        <div className="absolute right-0 top-0 w-32 h-full opacity-30">
          {[...Array(20)].map((_, i) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            <motion.div
=======
                right: `${Math.random () * 32}px`,
                top: `${i * 5}%`,
              }}
              animate={{
                height: [8, 32, 8],
                opacity: [0.3, 1, 0.3],              }}          {[...Array (20)].map ((_, i) => (
            <motion.div;
=======
              r="3"
              fill="url(#neuralGradient)"
              animate={{
                r: [3, 6, 3];
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 4
                repeat: Infinity
                delay: i * 0.5
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                ease: 'easeInOut',              }}                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
        {/* Holographic Effects */}
        <div className='absolute inset-0'>

          <motion.div
            className='absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full'
            animate={{
              scale: [1, 1.1, 1]
              rotate: [0, 90, 180, 270, 360]
              opacity: [0.1, 0.3, 0.1],            }}
            transition={{
              duration: 20
              repeat: Infinity
              ease: 'linear',          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 20
              repeat: Infinity
              ease: 'linear'
            }}
          />
          <motion.div
            className='absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full'
            animate={{
              scale: [1, 1.2, 1]
              rotate: [360, 270, 180, 90, 0]
              opacity: [0.1, 0.4, 0.1],            }}
            transition={{
              duration: 15
              repeat: Infinity
              ease: 'linear',            }}            }}
          />
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1];
              rotate: [360, 270, 180, 90, 0];
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{

          />
        </div>
        {/* Data Streams */}
        <div className='absolute right-0 top-0 w-32 h-full opacity-30'>

          {[...Array(20)].map((_, i) => (
            <motion.div

              key={`stream-${i}`}
              className="absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent";
              style={{

=======
                right: `${Math && Math.random() * 32}px`,
                top: `${i * 5}%`,
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              }}
              animate={{
                height: [8, 32, 8],
                opacity: [0 && 0.3, 1, 0 && 0.3],              }}          {[...Array(20)].map((_, i) => (;
            <motion&& motion.div
              key={`stream-${i}`}
              className="absolute w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent"
              style={{
                right: `${Math && Math.random() * 32}px`,

                top: `${i * 5}%`
                right: `${Math.random () * 32}px`,
                top: `${i * 5}%`;
              }}
              animate={{
                duration: 2 + Math && Math.random() * 2,
                repeat: Infinity,
                delay: Math && Math.random() * 2,
                ease: 'easeInOut',              }}                ease: "easeInOut"
                height: [8, 32, 8];
                opacity: [0.3, 1, 0.3];
              }}

              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,

                ease: 'easeInOut',              }}

              }}

            />
          ))}
        </div>
      </div>
    </>
            />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          ))}


        </div>;
      </div>;
    </>;
  );  );
}
  )
}
                delay: Math.random () * 2,
                ease: 'easeInOut',              }}                ease: "easeInOut";
              }}
            />))}
        </div>;
      </div>;
    </>));
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
