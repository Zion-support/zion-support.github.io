
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

        })
      });
      // Draw grid pattern
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      animationRef.current = requestAnimationFrame(animate);    }
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;    };        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke()
      }
      for (let y = 0, y < canvas.height, y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke()
      }
      animationRef.current = requestAnimationFrame(animate)
    }
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize);
    initParticles();
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };  }, []);        cancelAnimationFrame(animationRef.current)
      }
    }
  }, []);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
        }}
      />
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-10'>
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20'
          animate={{
            rotate: 360
            scale: [1, 1.2, 1]
            opacity: [0.3, 0.6, 0.3],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'linear',      />
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{
            rotate: 360
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'linear'
          }}
        />
        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full'
          animate={{
            y: [0, -20, 0]
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{
            y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{
            rotate: [0, 180, 360]
            scale: [1, 1.1, 1],          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear',          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={{
            rotate: [0, 180, 360];
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear'
          }}
        />
        <motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{
            rotate: [0, -180, -360]
            opacity: [0.4, 0.7, 0.4],          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'linear',          }}          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={{
            rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{

            duration: 10,
            repeat: Infinity,


        />
      </div>
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'>





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'

          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'



          }}

        />
      </div>
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'>


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4


        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'
          animate={{
            coordinate_x: ['-100%', '100%'],          }}
          transition={{

            duration: 15,
            repeat: Infinity,

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




            duration: 20,
            repeat: Infinity,

          }}







>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/feature/merge-conflicts-and-improvements
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


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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


  );

};


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


