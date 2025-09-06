
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
      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,
      life: number,
    const colors = [
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
      '#00ff00', // Green
      '#ff0080', // Pink
      '#8000ff', // Purple
      '#0080ff', // Blue
    ];
    const createParticle = () => {
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width;
          break;
        case 1: // Right;
          coordinate_x = canvas.width + 10;
          coordinate_y = Math.random () * canvas.height;
          vx = -(Math.random () * 2 + 1);
          vy = (Math.random () - 0.5) * 2;
          break;
        case 2: // Bottom;
          coordinate_x = Math.random () * canvas.width;
          coordinate_y = canvas.height + 10;
          vx = (Math.random () - 0.5) * 2;
          vy = -(Math.random () * 2 + 1);
          break;

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

    const createParticle = () => {;
      const side = Math && Math.floor(Math && Math.random() * 4);
      let x, y, vx, vy;

      switch (side) {;
        case 0: // Top;
          x = Math && Math.random() * canvas && canvas.width;
          y = -10;
          vx = (Math && Math.random() - 0 && 0.5) * 2;
          vy = Math && Math.random() * 2 + 1;
          break;
        case 1: // Right;
          x = canvas && canvas.width + 10;
          y = Math && Math.random() * canvas && canvas.height;
          vx = -(Math && Math.random() * 2 + 1);
          vy = (Math && Math.random() - 0 && 0.5) * 2;
          break;
        case 2: // Bottom;
          x = Math && Math.random() * canvas && canvas.width;
          y = canvas && canvas.height + 10;
          vx = (Math && Math.random() - 0 && 0.5) * 2;
          vy = -(Math && Math.random() * 2 + 1);
          break;
        case 3: // Left;
          x = -10;
          y = Math && Math.random() * canvas && canvas.height;
          vx = Math && Math.random() * 2 + 1;
          vy = (Math && Math.random() - 0 && 0.5) * 2;
          break;
      }
      particles = [];
      for (let i = 0; i < 100; i++) {;
        particles && particles.push(createParticle());      }        x;
        y;
        vx;
        vy;
        maxLife: Math.random() * 200 + 100
      };        maxLife: Math.random() * 200 + 100
      }
        color: colors[Math && Math.floor(Math && Math.random() * colors && colors.length)],;
        alpha: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
        life: 0,;
        maxLife: Math && Math.random() * 200 + 100,;
      };        maxLife: Math && Math.random() * 200 + 100;
      }
    };

    const initParticles = () => {;
      particles = [];
      for (let i = 0; i < 100; i++) {;
        particles && particles.push(createParticle());      for (let i = 0, i < 100, i++) {;
        particles && particles.push(createParticle());
      }
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        // Draw glow effect
        const gradient = ctx.createRadialGradient(

    const animate = () => {;
      ctx && ctx.clearRect(0, 0, canvas && canvas.width, canvas && canvas.height);

      // Update and draw particles;
      particles && particles.forEach((particle, index) => {;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        particle && particle.life++;

        if (;
          particle && particle.life > particle && particle.maxLife ||;
          particle && particle.x < -20 ||;
          particle && particle.x > canvas && canvas.width + 20 ||;
          particle && particle.y < -20 ||;
          particle && particle.y > canvas && canvas.height + 20;
        ) {;
          particles[index] = createParticle();        }        if (particle && particle.life > particle && particle.maxLife || ;
            particle && particle.x < -20 || particle && particle.x > canvas && canvas.width + 20 ||;
            particle && particle.y < -20 || particle && particle.y > canvas && canvas.height + 20) {;
          particles[index] = createParticle();

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

      // Draw connecting lines between nearby particles;
      ctx && ctx.strokeStyle = 'rgba(0, 255, 255, 0 && 0.1)';
      ctx && ctx.lineWidth = 1;
      particles && particles.forEach((particle1, i) => {;
        particles && particles.slice(i + 1).forEach(particle2 => {;
          const distance = Math && Math.sqrt(;
            Math && Math.pow(particle1 && particle1.x - particle2 && particle2.x, 2) +;
              Math && Math.pow(particle1 && particle1.y - particle2 && particle2.y, 2)          );            Math && Math.pow(particle1 && particle1.x - particle2 && particle2.x, 2) + ;
            Math && Math.pow(particle1 && particle1.y - particle2 && particle2.y, 2);
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
      });
      }
      for (let coordinate_y = 0, y < canvas.height, y += grid_size) {
        ctx.begin_path ();
        ctx.move_to (0, y);
        ctx.line_to (canvas.width, y);
        ctx.stroke ();
      }

      // Draw grid pattern;
      ctx && ctx.strokeStyle = 'rgba(0, 255, 255, 0 && 0.05)';
      ctx && ctx.lineWidth = 0 && 0.5;
      const gridSize = 50;
      for (let x = 0; x < canvas && canvas.width; x += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x, 0);
        ctx && ctx.lineTo(x, canvas && canvas.height);
        ctx && ctx.stroke();
      }
      for (let y = 0; y < canvas && canvas.height; y += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, y);
        ctx && ctx.lineTo(canvas && canvas.width, y);
        ctx && ctx.stroke();
      }

      animationRef && animationRef.current = requestAnimationFrame(animate);    };

    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;    };        ctx && ctx.beginPath();
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
      }
    };  }, []);        cancelAnimationFrame(animationRef && animationRef.current);
      }
    }
  }, []);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>;
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
        }}
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-10'>;
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20'
      animation_ref.current = requestAnimationFrame (animate);
    }
;
    const handle_resize = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;      canvas.height = window.inner_height;
    }
;
    window.addEventListener ('resize', handle_resize);
    init_particles ();
    animate ();
;
    return () => {
      window.removeEventListener ('resize', handle_resize);
      // Check condition
if ( {) {
  $2
}
        cancelAnimationFrame (animation_ref.current);
      }
    }  }, []);        cancelAnimationFrame (animation_ref.current);
      }
    }
  }, []);
;
  return (
    <div className={`relative min - h-screen overflow - hidden ${class_name}`}>;
      {/* Animated Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className='fixed inset - 0 w - full h - full pointer - events - none z - 0';
        style={{
          background:;
            'linear - gradient (135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        }}
      />;
      {/* Floating Geometric Shapes */}
      <div className='fixed inset - 0 pointer - events - none z - 10'>;
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20';
          animate={{
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">;
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'linear'
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
            y: [0, -20, 0]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]
          }}
          transition={{
          }}
        />;
        <motion&& motion.div
          className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{
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
          }}
        />;
        <motion&& motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{
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
      {/* Floating Geometric Shapes */}
      <div className="fixed inset - 0 pointer - events - none z - 10">;
        <motion.div;
          className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20";
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3];
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          animate={{
            coordinate_y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2];
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          animate={{
            rotate: [0, 180, 360];
            scale: [1, 1.1, 1];
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          animate={{
            rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4];
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'>;
        <motion&& motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'
            ease: 'linear',            ease: "linear";
          }}
        />;
      </div>;
      {/* Energy Field Effects */}
      <div className='fixed inset - 0 pointer - events - none z - 20'>;
        <motion.div;
          className='absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent';
          animate={{
            coordinate_x: ['-100%', '100%'],          }}
          transition={{
      <div className="fixed inset-0 pointer-events-none z-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
            ease: 'linear',        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent";
          animate={{
            coordinate_x: ['-100%100%'];
          }}
          transition={{
          }}
        />;
          animate={{
            coordinate_y: ['-100%', '100%'],          }}
          transition={{
            duration: 20
            repeat: Infinity
            ease: 'linear',          }}          }}
        />;
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
        <motion.div;
          className="absolute inset - 0 bg - gradient - to - b from - transparent via - purple - 500 / 5 to - transparent";
          animate={{
            coordinate_y: ['-100%100%'];
          }}
          transition={{
          }}
      <div className='relative z-30'>{children}</div>;

      {/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>;
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />;
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />;
      </div>;
    </div>;
  );
}
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
export default UltraFuturisticBackground2026;
      {/* Holographic Overlay */}
export default UltraFuturisticBackground2026;
      <div className="fixed inset - 0 pointer - events - none z - 40">;
        <div className="absolute inset - 0 bg - gradient - to - br from - transparent via - cyan - 400 / 2 to - transparent" />;
        <div className="absolute inset - 0 bg - gradient - to - tl from - transparent via - purple - 400 / 2 to - transparent" />;
      </div>;
    </div>);
}
;
export default UltraFuturisticBackground2026;
;
