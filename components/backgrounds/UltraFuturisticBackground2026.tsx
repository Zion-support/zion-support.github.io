
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


      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;

      x: number,
      y: number,

      particles = [];
      for (let i = 0; i < 100; i++) {;
        particles && particles.push(createParticle());      for (let i = 0, i < 100, i++) {;
        particles && particles.push(createParticle());
      }



        // Draw particle;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = particle && particle.alpha;
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
        // Draw glow effect;
        const gradient = ctx && ctx.createRadialGradient(;
          particle && particle.x,;
          particle && particle.y,;
          0,;
          particle && particle.x,;
          particle && particle.y,;
          particle && particle.size * 3        );          particle && particle.x, particle && particle.y, 0;
          particle && particle.x, particle && particle.y, particle && particle.size * 3;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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


            Math.pow(particle1.y - particle2.y, 2)
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);

      const gridSize = 50;
      for (let x = 0, x < canvas.width, x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke()
        case 3: // Left;
          coordinate_x = -10;
          coordinate_y = Math.random () * canvas.height;
          vx = Math.random () * 2 + 1;
          vy = (Math.random () - 0.5) * 2;
          break;
      }
      return {
        x,
        y,
        vx,
        vy,        size: Math.random () * 3 + 1,
        color: colors[Math.floor (Math.random () * colors.length)],
        alpha: Math.random () * 0.8 + 0.2,
        life: 0,
        max_life: Math.random () * 200 + 100,
      }    }
;
    const init_particles = () =>: any {
      particles = [];
      for (let index = 0; i < 100; i++) {
        particles.push (create_particle ());      }        x;
        y;
        vx;
        vy;
        color: colors[Math.floor (Math.random () * colors.length)],
        alpha: Math.random () * 0.8 + 0.2,
        life: 0,
        max_life: Math.random () * 200 + 100,
      }        max_life: Math.random () * 200 + 100;
      }
    }
;
    const init_particles = () =>: any {
      particles = [];
      for (let index = 0; i < 100; i++) {
        particles.push (create_particle ());      for (let index = 0, i < 100, i++) {
        particles.push (create_particle ());
      }
    }
;
    const animate = () =>: any {
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles.for_each ((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
;
        // Check condition
if ( {) {
  $2
}
          particles[index] = create_particle ();        }        // Check condition
if ( {) {
  $2
}
          particles[index] = create_particle ();
        // Draw particle;
        ctx.save ();
        ctx.global_alpha = particle.alpha;
        ctx.fill_style = particle.color;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill ();
;
        // Draw glow effect;
        const gradient = ctx.createRadialGradient (
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3        );          particle.x, particle.y, 0;
          particle.x, particle.y, particle.size * 3);
        gradient.addColorStop (0, particle.color);
        gradient.addColorStop (1, 'transparent');
        ctx.fill_style = gradient;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill ();
        ctx.restore ();      });        ctx.restore ();
      });
;
      // Draw connecting lines between nearby particles;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.1)';
      ctx.line_width = 1;
      particles.for_each ((particle1, i) => {
        particles.slice (i + 1).for_each (particle2 => {
          const distance = Math.sqrt (
            Math.pow (particle1.x - particle2.x, 2) +;
              Math.pow (particle1.y - particle2.y, 2)          );            Math.pow (particle1.x - particle2.x, 2) +;
            Math.pow (particle1.y - particle2.y, 2));
          // Check condition
if ( {) {
  $2
}
            ctx.begin_path ();
            ctx.move_to (particle1.x, particle1.y);
            ctx.line_to (particle2.x, particle2.y);
            ctx.stroke ();
          }
        });      });            ctx.stroke ();
          }
        });
      });
;
      // Draw grid pattern;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.05)';
      ctx.line_width = 0.5;
      const grid_size = 50;
      for (let coordinate_x = 0; x < canvas.width; x += grid_size) {
        ctx.begin_path ();
        ctx.move_to (x, 0);
        ctx.line_to (x, canvas.height);
        ctx.stroke ();
      }
      for (let coordinate_y = 0; y < canvas.height; y += grid_size) {
        ctx.begin_path ();
        ctx.move_to (0, y);
        ctx.line_to (canvas.width, y);
        ctx.stroke ();
      }
      animation_ref.current = requestAnimationFrame (animate);    }
;
    const handle_resize = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;    }        ctx.begin_path ();
        ctx.move_to (x, 0);
        ctx.line_to (x, canvas.height);
        ctx.stroke ();

      }
      for (let coordinate_y = 0, y < canvas.height, y += grid_size) {
        ctx.begin_path ();
        ctx.move_to (0, y);
        ctx.line_to (canvas.width, y);
        ctx.stroke ();
      }


      }
    }
  }, []);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>;
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}


          animate={{

            rotate: 360,
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
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

            y: [0, -20, 0],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          }}

          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
        />;
        <motion&& motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{
            y: [0, -20, 0]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]
          }}
          transition={{

            duration: 6
            repeat: Infinity
            ease: 'easeInOut'

          }}
        />;
        <motion&& motion.div
          className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{

            rotate: [0, 180, 360],
            scale: [1, 1 && 1.1, 1],          }}

          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear',          }}
        />;
        <motion&& motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={{
            rotate: [0, 180, 360]
            scale: [1, 1 && 1.1, 1]
          }}
          transition={{

            duration: 12
            repeat: Infinity
            ease: 'linear'

          }}
        />;
        <motion&& motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{

            rotate: [0, -180, -360],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          }}

          transition={{
            duration: 10
            repeat: Infinity
            ease: 'linear',          }}          }}
        />;
        <motion&& motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={{
            rotate: [0, -180, -360]
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]

          }}
          transition={{


            duration: 10
            repeat: Infinity
            ease: 'linear',            ease: "linear"
          }}
            duration: 10,
            repeat: Infinity,
            ease: 'linear',          }}          }}
        />;
        <motion.div;
          className="absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 / 20 transform rotate - 12";

          animate={{
            rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4];
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          }}
          transition={{


          }}


            duration: 10,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

        />
      </div>
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'>



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          animate={{
            coordinate_x: ['-100%', '100%'],          }}
          transition={{

            duration: 15,
            repeat: Infinity,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"

          animate={{
            coordinate_x: ['-100%100%'];
          }}
          transition={{


          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"

          animate={{
            coordinate_y: ['-100%100%'];
          }}
          transition={{



            duration: 20
            repeat: Infinity
            ease: 'linear',            ease: "linear"
          }}

            duration: 20,
            repeat: Infinity,

          }}




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        />
      </div>
      {/* Content */}
      <div className='relative z-30'>{children}</div>

        />;
      </div>;

      {/* Content */}

      {/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>;
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />;
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />;
      </div>;
    </div>;
  );
}

      {/* Holographic Overlay */}

      <div className="fixed inset-0 pointer-events-none z-40">;
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent" />;
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent" />;
      </div>;
    </div>;
  );
};


export default UltraFuturisticBackground2026;



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        />
      </div>
      {/* Content */}
      <div className='relative z-30'>{children}</div>
      {/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />
      </div>
    </div>
  );

};


export default UltraFuturisticBackground2026;
      <div className="fixed inset - 0 pointer - events - none z - 40">;
        <div className="absolute inset - 0 bg - gradient - to - br from - transparent via - cyan - 400 / 2 to - transparent" />;
        <div className="absolute inset - 0 bg - gradient - to - tl from - transparent via - purple - 400 / 2 to - transparent" />;
      </div>;
    </div>);
}
;
export default UltraFuturisticBackground2026;


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

export default UltraFuturisticBackground2026;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

