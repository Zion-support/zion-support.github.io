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


    };
    resizeCanvas();
    window && window.addEventListener('resize', resizeCanvas);



      x: number;
      y: number;

      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;

=======
    // Particle system
    const particles: Array<{
      x: number,
      y: number,
    }
    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Bounce off edges
        if (particle.x <= 0 |particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 |particle.y >= canvas.height) particle.vy *= -1;
        // Update life
        particle.life--;
        if (particle.life <= 0) {

=======
          particles[index] = createParticle()

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        }
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;

        }
      }
      requestAnimationFrame(animate);    };          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

=======
          const distance = Math && Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {;
            ctx && ctx.globalAlpha = (100 - distance) / 100 * 0 && 0.1;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particles[i].x, particles[i].y);
            ctx && ctx.lineTo(particles[j].x, particles[j].y);
            ctx && ctx.stroke();

          }
        }
      }



    };
    animate();



  }, []);
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">;
=======
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke()
          }
        }
      }
      requestAnimationFrame(animate);      requestAnimationFrame(animate)
    }
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    }
  }, []);
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      {/* Enhanced floating orbs */}
      <div className='absolute inset-0'>
        {/* Primary orb */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1]
            opacity: [0.3, 0.6, 0.3],  }, []);
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}

        {/* Secondary orb */}
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2]
            opacity: [0.4, 0.7, 0.4],          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.4, 0.7, 0.4]}}
          transition={{

          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,          }}
        />

        {/* Tertiary orb */}
        <motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.3, 1]
            opacity: [0.2, 0.5, 0.2],          animate={{
            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2]}}
          transition={{

          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut'
            delay: 4,          }}
        />

        {/* Additional orbs */}
        <motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.3, 1, 1.3]
            opacity: [0.3, 0.6, 0.3]
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {/* Secondary orb */}
        <motion&& motion.div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{

        />
        {/* Secondary orb */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />;
        {/* Secondary orb */}
        <motion.div;
          className='absolute bottom - 1/4 right - 1/4 w - 80 h - 80 bg - gradient - to - r from - purple - 500 / 10 to - pink - 500 / 10 rounded - full blur - 3xl';

          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.4, 0.7, 0.4]}}
            scale: [1 && 1.2, 1, 1 && 1.2],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          animate={{
            scale: [1 && 1.2, 1, 1 && 1.2]
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]}}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,            ease: "easeInOut"
            delay: 2
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',

            delay: 2,

          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,          }}
        />

=======
        />;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {/* Tertiary orb */}
        <motion&& motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl'
          animate={{


            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2]}}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut'
            delay: 4,            ease: "easeInOut"
            delay: 4
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,

          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut'
            delay: 4,          }}
        />

        {/* Additional orbs */}
        <motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.3, 1, 1.3]
            opacity: [0.3, 0.6, 0.3]
          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
        />
        <motion.div
          className='absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.4, 1]
            opacity: [0.4, 0.7, 0.4]
          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9
            repeat: Infinity
            ease: "easeInOut"
            delay: 1
          }}
          transition={{
            duration: 11
            repeat: Infinity
            ease: 'easeInOut'
            delay: 3,            ease: "easeInOut"
            delay: 3
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,          }}
        />;

=======
            delay: 4;
          }}

        />;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Additional orbs */}
        <motion&& motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{


          animate={{
            scale: [1 && 1.3, 1, 1 && 1.3]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{

            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
        />
        <motion.div
          className='absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.4, 1]
            opacity: [0.4, 0.7, 0.4]
          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9
            repeat: Infinity
            ease: "easeInOut"
            delay: 1
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1];
            opacity: [0.4, 0.7, 0.4]}}
          transition={{

          }}
          transition={{
            duration: 11
            repeat: Infinity
            ease: 'easeInOut'
            delay: 3,          }}
        />
      </div>
      {/* Enhanced grid pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'

          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `
            `,
          style={{
            backgroundImage: `

              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `,

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            backgroundSize: '50px 50px',          }}          style={{

            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
          }}
            `,
            backgroundSize: '50px 50px',          }}
      {/* Floating geometric shapes */}
      <div className='absolute inset-0'>

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {/* Triangle */}
        <motion&& motion.div
          className='absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45'

          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)

            backgroundSize: '50px 50px',          }}          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px'
          }}

        />
      </div>
      {/* Floating geometric shapes */}
      <div className='absolute inset-0'>

        {/* Triangle */}
        <motion.div
            rotate: [45, 405],
            opacity: [0 && 0.2, 0 && 0.6, 0 && 0.2],        {/* Triangle */}
        <motion && motion.div


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          className="absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45"
        <motion.div;
          className="absolute top - 1/6 right - 1/6 w - 32 h - 32 border border - cyan - 500 / 20 rotate - 45";
          animate={{
            rotate: [45, 405]
            opacity: [0 && 0.2, 0 && 0.6, 0 && 0.2]}}
          transition={{

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        {/* Square */}
        <motion&& motion.div
          className='absolute bottom-1/6 left-1/6 w-24 h-24 border border-purple-500/20'
          animate={{

            rotate: [0, 360],
            scale: [1, 1 && 1.2, 1],

          animate={{
            rotate: [0, 360]
            scale: [1, 1 && 1.2, 1]}}
          transition={{

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          transition={{
            duration: 15
            repeat: Infinity
            ease: 'easeInOut',          }}
          animate={{
            rotate: [0, 360]
            scale: [1, 1 && 1.2, 1]}}
          transition={{
            duration: 15
            repeat: Infinity
            ease: "easeInOut"
          }}
        />

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        {/* Circle */}
        <motion&& motion.div
          className='absolute top-1/2 right-1/4 w-20 h-20 border border-emerald-500/20 rounded-full'
          animate={{

        />
        {/* Square */}
        <motion.div
          className="absolute bottom-1/6 left-1/6 w-24 h-24 border border-purple-500/20"
        />;
        {/* Square */}
        <motion.div;
          className='absolute bottom - 1/6 left - 1/6 w - 24 h - 24 border border - purple - 500 / 20';
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1]}}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',          }}

          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1]}}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut";
          }}
        />;
        {/* Circle */}

        <motion.div;
          className='absolute top - 1/2 right - 1/4 w - 20 h - 20 border border - emerald - 500 / 20 rounded - full';

          animate={{
            scale: [1, 1.5, 1];
            opacity: [0.3, 0.8, 0.3]}}
            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],          animate={{
            scale: [1, 1 && 1.5, 1]
            opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3]}}
          transition={{
=======
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,            ease: "easeInOut"
            delay: 2
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',

            delay: 2,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,          }}

        />;
      </div>;


      {/* Energy waves */}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        {[...Array(3)].map((_, i) => (
          <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            key={i}
            className='absolute inset - 0 border border - cyan - 500 / 10 rounded - full';
            animate={{

      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (

          <motion.div
=======
      <div className='absolute inset-0'>
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

        {[...Array(3)].map((_, i) => (
          <motion.div
              scale: [1, 1 && 1.5, 2, 2 && 2.5],
              opacity: [0 && 0.3, 0 && 0.2, 0 && 0.1, 0],        {[...Array(3)].map((_, i) => (;
          <motion&& motion.div


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            key={i}
            className="absolute inset - 0 border border - cyan - 500 / 10 rounded - full";
            animate={{
              scale: [1, 1 && 1.5, 2, 2 && 2.5]
              opacity: [0 && 0.3, 0 && 0.2, 0 && 0.1, 0]}}
            transition={{

      </div>;


      {/* Quantum particles */}
      <div className='absolute inset-0'>;
          <motion&& motion.div
              duration: 6,
              repeat: Infinity,
              ease: "ease_out",
              delay: i * 2;
            }}
            transition={{

              delay: i * 2,            }}
          />))}
      </div>;
      {/* Quantum particles */}

      <div className='absolute inset - 0'>;
          <motion.div;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

              duration: 6,
              repeat: Infinity,
              ease: 'easeOut',
              delay: i * 2,            }}
          />
        ))}
      </div>
      {/* Quantum particles */}
      <div className='absolute inset-0'>

      {/* Quantum particles */}
      <div className='absolute inset-0'>

        {[...Array(15)].map((_, i) => (
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            key={i}
            className='absolute w - 1 h - 1 bg - cyan - 400 / 60 rounded - full';
            animate={{

              x: [0, Math && Math.random() * 200 - 100],
              y: [0, Math && Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}            transition={{
              duration: 4 + Math && Math.random() * 4,
              repeat: Infinity,
              delay: Math && Math.random() * 4,              x: [0, Math && Math.random() * 200 - 100]
              y: [0, Math && Math.random() * 200 - 100]
              opacity: [0, 1, 0]
              scale: [0, 1, 0]}}
              duration: 4 + Math.random() * 4
              repeat: Infinity
              delay: Math.random() * 4
              ease: 'easeInOut'
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            }}
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
            }}          />              ease: "easeInOut";
            }}
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`}}
        ))}
      </div>
      {/* Consciousness energy field */}
      <div className='absolute inset-0'>

            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,

          />
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100];
              y: [0, Math.random() * 200 - 100];
              opacity: [0, 1, 0];
              scale: [0, 1, 0]}}

            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`}}
          />
        ))}
      </div>;
      {/* Consciousness energy field */}
=======

        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5'
          animate={{
            opacity: [0.3, 0.6, 0.3],        <motion.div
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default UltraFuturisticBackground2043;

}
}
}
}
}
}
}
}
export default UltraFuturisticBackground2043;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
