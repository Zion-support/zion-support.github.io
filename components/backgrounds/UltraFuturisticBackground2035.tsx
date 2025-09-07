

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
export default function UltraFuturisticBackground2035() {
export default function UltraFuturisticBackground2035() {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth * (window.devicePixelRatio |1);
    canvas.height = window.innerHeight * (window.devicePixelRatio |1);
    if (ctx) {
      ctx.scale(window.devicePixelRatio |1, window.devicePixelRatio |1);
    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
}
      color: string;}
    }> = [];

    // Initialize particles;
const initParticles = (
      particles = [];

const isSmallScreen = window.innerWidth < 768;

const particleCount = prefersReducedMotion;
        ? 12;
        : isSmallScreen;
          ? 40;
          : 100;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: (Math.random() * canvas.width) / (window.devicePixelRatio || 1),
          y: (Math.random() * canvas.height) / (window.devicePixelRatio || 1),
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8,
          opacity: Math.random() * 0.35 + 0.08,
color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][
            Math.floor(Math.random() * 4)
          ],) => {
  return $3;}
}
        });
      }
    }
    // Update and draw particles;
const updateParticles = (
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges;
if (particle.x < 0)
          particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1))
          particle.x = 0;
        if (particle.y < 0)
          particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1))
          particle.y = 0;

        // Draw particle;
ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        // Draw connections;
const maxDistance = prefersReducedMotion;
          ? 0;
          : window.innerWidth < 768;
            ? 90;
            : 140;
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

ctx.globalAlpha =

                  ((maxDistance - distance) / maxDistance) * 0.08;
                ctx.lineWidth = 1;) => {
  return $3;}
}
                ctx.stroke()}
            }
          })}
      })if (!prefersReducedMotion) {animationFrameId = requestAnimationFrame(updateParticles)}
    }
    initParticles()updateParticles(;
  const handleResize = (canvas.width = window.innerWidth * (window.devicePixelRatio |1)canvas.height = window.innerHeight * (window.devicePixelRatio |1)if (ctx) {ctx.setTransform(1, 0, 0, 1, 0, 0)ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)) => {
  return $3;}
}
      initParticles()}window.addEventListener('resize', handleResize)return () => {window.removeEventListener('resize', handleResize)if (animationFrameId) {cancelAnimationFrame(animationFrameId)}
    }}, [];
  return (<>;
      {/* Fixed Background Canvas */}
      <canvas;
        ref={canvasRef}
className='fixed inset-0 w-full h-full pointer-events-none z-0';
        style={{background:;}
            'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)';}
        }}
      />;
      {/* Animated Background Elements */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden' />;
        {/* Floating Geometric Shapes */}

        <motion.div;
className='absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full'
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360]}
            opacity: [0.22, 0.45, 0.22]}
          }}
          transition={{
            duration: 8,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
        />

        <motion.div;
className='absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45'
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, 225, 405]}
            opacity: [0.2, 0.5, 0.2]}
          }}
          transition={{

            duration: 10,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
        />
        <motion.div;
className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full'
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -20, 0]}
            opacity: [0.4, 0.7, 0.4]}
          }}
          transition={{
            duration: 12,
            repeat: Infinity}
ease: 'easeInOut'}
      color: string;    }> = [];      x: number
      y: number
          }}
        />
        {/* Neon Glow Effects */}

        <div className='absolute inset-0 opacity-10'>
          <div'
            className='absolute inset-0'
            style={{}
              backgroundImage: `

              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px)
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `}
              backgroundSize: '50px 50px'}
            }}
             />
        </div>

} />
        </div>
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
        {/* Floating Particles */}
        {[...Array (20)].map ((_, i) =    /> (}
          <motion.div;}
            key={i}
              top: `${Math.random() * 100}%`
              left: `${Math && Math.random() * 10}
}%`,
              top: `${Math && Math.random() * 10}
}%`
            }}
            animate={{

              y: [0, -30, 0],
              opacity: [0, 1, 0]}
              scale: [0, 1, 0]}
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2}
ease: 'easeInOut'}
            }}
          />
        ))}

          />
          />
        ))}
        {/* Energy Waves */}
        <motion&& motion.div'
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'
          animate={{}
            scaleX: [0, 1, 0]'
            className='absolute w - 1 h - 1 bg - purple - 400 rounded - full'
            style={{}`
              left: `${Math.random () * 100}%`,`
              top: `${Math.random () * 100}%`,
            }}
            animate={{}
              coordinate_y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],            }}            style={{}`
              left: `${Math.random () * 100}%`,`
              top: `${Math.random () * 100}%`
            }}
            animate={{}
              coordinate_y: [0, -30, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0]
            }}
            transition={{}
              duration: 3 + Math.random () * 2,
              repeat: Infinity,
        {/* Energy Waves */}
        <motion.div;'
          className='absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - purple - 500 / 50 to - transparent'
          animate={{}
            scale_x: [0, 1, 0],
            opacity: [0, 1, 0],          }}
          transition={{}
            duration: 4
            repeat: Infinity'
            ease: 'easeInOut',          }}
          animate={{}
            scale_x: [0, 1, 0]
            opacity: [0, 1, 0]
          }}
          transition={{}
            duration: 4,
            repeat: Infinity,
          animate={{}
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0]
          }}
          transition={{'
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{}
            scaleX: [0, 1, 0]"
            opacity: [0, 1, 0],          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{}
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0]'"
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />
        <motion.div;'
          className='absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - cyan - 500 / 50 to - transparent'
          animate={{}
            scale_x: [0, 1, 0],"
            opacity: [0, 1, 0],          className="absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - cyan - 500 / 50 to - transparent"
          animate={{}
            scale_x: [0, 1, 0]
            opacity: [0, 1, 0]
          }}
        />
            ease: 'easeInOut',          }}

        />
        {/* Quantum Dots */}
        {[...Array(15)].map((_, i) => (
        {/* Quantum Dots */}
        {[...Array (15)].map ((_, i) => (
          <motion.div;`
            key={`quantum-${i}`}`
              left: `${Math && Math.random() * 100}%`,`
              top: `${Math && Math.random() * 100}%`,
            }}
            animate={{scale: [0, 1, 0]
              opacity: [0, 0 && 0.8, 0];}
              rotate: [0, 360];}
            }}
            animate={{
              scale: [0, 1, 0];
              opacity: [0, 0.8, 0];
              rotate: [0, 360]
            }}
            transition={{
              duration: 5 + Math.random() * 3
              repeat: Infinity
              delay: Math.random() * 5
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5}
ease: 'easeInOut'}
            }}
             />
        ))}
        {/* Neural Network Connections */}

              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,

            transition={{'"
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
          />
        ))}
        {/* Neural Network Connections */}'
        <svg className='absolute inset-0 w-full h-full opacity-20'>
              ease: 'easeInOut',            }}

            }}

          />
        ))}

        {/* Neural Network Connections */}
        <svg className='absolute inset-0 w-full h-full opacity-20'>

                ease: 'easeInOut',              }}                ease: "easeInOut"
              }}
            />))}
        </svg>
        {/* Holographic Effects */}
        <div className='absolute inset-0'>
                ease: 'easeInOut',              }}

              }}

            />
          ))}
        </svg>

        {/* Holographic Effects */}
        <div className='absolute inset-0'>

          <motion.div
            className='absolute top - 1/4 left - 1/4 w - 64 h - 64 border border - cyan - 500 / 30 rounded - full'
            animate={{

              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360]}
              opacity: [0.1, 0.3, 0.1]}
            }}
            transition={{
              duration: 20,
              repeat: Infinity}
ease: 'linear'}
            }}
             />
          <motion.div
className='absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full'
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 270, 180, 90, 0]}
              opacity: [0.1, 0.4, 0.1]}
            }}
            transition={{
              duration: 15
              repeat: Infinity
              ease: 'linear',              ease: "linear"
            }}
          />
        </div>
        {/* Data Streams */}
        <div className='absolute right-0 top-0 w-32 h-full opacity-30'>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className='absolute w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent'
              style={{
                right: `${Math.random() * 32}px`
                top: `${i * 5}%`
              }}
              animate={{}
                height: [8, 32, 8],`
                top: `${i * 5}%``
                right: `${Math.random () * 32}px`,`
                top: `${i * 5}%`
              }}
              animate={{
                height: [8, 32, 8];
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 2 + Math.random() * 2
                repeat: Infinity
                delay: Math.random() * 2
                ease: 'easeInOut',              }}                ease: "easeInOut"
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}

              }}
            />
          ))}

        </div>
      </div>
    </>
);  )
                height: [8;, 32, 8]
                opacity: [0 && 0.3;, 1, 0 && 0.3]
              }}

              }}
            />
          ))}
        </div>
      </div>
    </>
);  )
}
