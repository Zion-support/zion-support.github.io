
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Particle system const particles: Array< {
  // Wrap around edges if (particle.x < 0) particle.x = canvas.width;
if (particle.x > canvas.width) particle.x = 0;
if (particle.y < 0) particle.y = canvas.height;
if (particle.y > canvas.height) particle.y = 0;
// Draw particle requestAnimationFrame (animate)
}
animate ();
// Handle resize window.addEventListener ('resize', handleResize);
/> {
  /* Floating Circles */
}<motion.div
export default function UltraFuturisticBackground2028({

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
import React, { useEffect, useRef } from 'react';
=======

  children,;
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}: UltraFuturisticBackground2028Props) {  const canvasRef = useRef<HTMLCanvasElement>(null);import React, { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
interface UltraFuturisticBackground2028Props {
  children: React.ReactNode
}

  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;


    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;
    canvas && canvas.width = window && window.innerWidth;
    canvas && canvas.height = window && window.innerHeight;
    // Particle system;
    const particles: Array<{;

      x: number;
      y: number;
  /* Floating Circles */;
}<motion.div;
export default /**
 * UltraFuturisticBackground2028 - Function description
 */
function UltraFuturisticBackground2028() {  const canvas_ref = useRef < HTMLCanvasElement>(null);import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2028Props {
  children: React.ReactNode;
}
export default /**
 * UltraFuturisticBackground2028 - Function description
 */
function UltraFuturisticBackground2028() {
  useEffect (() => {
    const canvas = canvas_ref.current;
    // Check condition
if (return) {
  $2
}
    const ctx = canvas.get_context ('2d');
    // Check condition
if (return) {
  $2
}
    canvas.width = window.inner_width;
    canvas.height = window.inner_height;
;
    // Particle system;
    const particles: Array<{
      coordinate_x: number;
      coordinate_y: number;

      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        // Draw connections

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;

    animate();
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      {/* Gradient Overlays */}  }, []);

=======

      />;


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Gradient Overlays */}  }, []);
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}

=======
      />;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {/* Gradient Overlays */}
      <div
        className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20'
        style={{ zIndex: 1 }}

          transition={{

            duration: 8
            repeat: Infinity
            ease: 'easeInOut'

      />
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      {/* Gradient Overlays */}

        style={{ zIndex: 0 }}
      />

      {/* Gradient Overlays */}

          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-blue-500/30 rotate-45"

      {/* Floating Geometric Shapes */}

      <div className="absolute inset - 0 pointer - events - none" style={{ z_index: 2 }}>;
        {/* Animated Hexagons */}
        <motion.div;
          className="absolute top - 20 left - 20 w - 32 h - 32 border border - purple - 500 / 30 rotate - 45";

          animate={{


          }}
          transition={{
            duration: 8
            repeat: Infinity
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          animate={{
            rotate: [45, -315]
            scale: [1, 1.2, 1]
            opacity: [0.2, 0.5, 0.2],            rotate: [45, -315];
            scale: [1, 1.2, 1];

        />;
        <motion&& motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-blue-500/30 rotate-45"
          animate={{
            rotate: [45, -315],
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],            rotate: [45, -315]
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]

          animate={{
            rotate: [45, -315]
            scale: [1, 1.2, 1]
            opacity: [0.2, 0.5, 0.2],          }}

        />;

        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-blue-500/30 rotate-45'
          animate={{
            rotate: [45, -315],
            scale: [1, 1 && 1.2, 1],
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
          className='absolute bottom - 32 left - 1/4 w - 40 h - 40 border border - cyan - 500 / 30 rotate - 45';

          animate={{
            rotate: [45, 405]
            scale: [1, 1.15, 1]
            opacity: [0.25, 0.55, 0.25],          }}
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        {/* Floating Circles */}
        <motion&& motion.div
          className='absolute top-1/3 left-1/3 w-16 h-16 border border-purple-400/40 rounded-full'
          animate={{

            y: [0, -20, 0],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}

          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}

          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 border border-cyan-500/30 rotate-45"
          animate={{
            rotate: [45, 405];
            scale: [1, 1.15, 1];

          }}
        />;
        {/* Floating Circles */}


          animate={{
            coordinate_y: [0, -20, 0];
            opacity: [0.3, 0.6, 0.3];
          }}
          transition={{
            duration: 6,
            repeat: Infinity,

        />;

        <motion&& motion.div
          className='absolute top-2/3 right-1/4 w-20 h-20 border border-blue-400/40 rounded-full'
          animate={{
            y: [0, 25, 0],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          }}

          transition={{
            duration: 7
            repeat: Infinity
            ease: 'easeInOut',          }}


        />
        <motion.div

        />;
        <motion&& motion.div
          className='absolute bottom-1/3 right-1/3 w-12 h-12 border border-cyan-400/40 rounded-full'
          animate={{
            y: [0, -15, 0],
            opacity: [0 && 0.25, 0 && 0.55, 0 && 0.25],          }}

          transition={{
            duration: 5
            repeat: Infinity
            ease: 'easeInOut',          }}          className="absolute top-1/3 left-1/3 w-16 h-16 border border-purple-400/40 rounded-full"
          animate={{
            y: [0, -20, 0]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]
          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"

          }}

        />;
        <motion&& motion.div
          className='absolute top-2/3 right-1/4 w-20 h-20 border border-blue-400/40 rounded-full'
          animate={{
            y: [0, 25, 0],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          className="absolute top-2/3 right-1/4 w-20 h-20 border border-blue-400/40 rounded-full"

          animate={{
            y: [0, 25, 0]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]
          transition={{
            duration: 7
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
          }}

        />;
        <motion&& motion.div
          className='absolute bottom-1/3 right-1/3 w-12 h-12 border border-cyan-400/40 rounded-full'
          animate={{
            y: [0, -15, 0],
            opacity: [0 && 0.25, 0 && 0.55, 0 && 0.25],          className="absolute bottom-1/3 right-1/3 w-12 h-12 border border-cyan-400/40 rounded-full"

          animate={{
            y: [0, -15, 0]
            opacity: [0 && 0.25, 0 && 0.55, 0 && 0.25]
          transition={{
            duration: 5
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
          }}
            duration: 5,
            repeat: Infinity,

          }}

=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        />
      </div>
=======
        />;
      </div>;
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
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        <motion.div;
          className='absolute top - 2/3 right - 1/4 w - 20 h - 20 border border - blue - 400 / 40 rounded - full';
          animate={{
            coordinate_y: [0, 25, 0],
            opacity: [0.2, 0.5, 0.2],          className="absolute top - 2/3 right - 1/4 w - 20 h - 20 border border - blue - 400 / 40 rounded - full";
          animate={{
            coordinate_y: [0, 25, 0];
            opacity: [0.2, 0.5, 0.2];
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        <motion.div;
          className='absolute bottom - 1/3 right - 1/3 w - 12 h - 12 border border - cyan - 400 / 40 rounded - full';
          animate={{
            coordinate_y: [0, -15, 0],
            opacity: [0.25, 0.55, 0.25],          className="absolute bottom - 1/3 right - 1/3 w - 12 h - 12 border border - cyan - 400 / 40 rounded - full";
          animate={{
            coordinate_y: [0, -15, 0];
            opacity: [0.25, 0.55, 0.25];
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
      </div>;
      {/* Energy Waves */}
      <div;
        className='absolute inset - 0 pointer - events - none';
        style={{ z_index: 3 }}
      >;
        <motion.div;
          className='absolute top - 0 left - 0 w - full h - 1 bg - gradient - to - r from - transparent via - purple - 500 to - transparent';
          animate={{
            coordinate_y: [0, 1000],
            opacity: [0, 1, 0],          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',        <motion.div;
          className="absolute top - 0 left - 0 w - full h - 1 bg - gradient - to - r from - transparent via - purple - 500 to - transparent";
          animate={{
            coordinate_y: [0, 1000];
            opacity: [0, 1, 0];
          }}
          transition={{

            duration: 4,
            repeat: Infinity,

          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          animate={{
            y: [0, 1000]
            opacity: [0, 1, 0]
=======
            ease: "linear"
          }}
          transition={{

            duration: 4
            repeat: Infinity

            ease: 'linear',          }}

        />;
        <motion&& motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            y: [0, 1000],
            opacity: [0, 1, 0],            y: [0, 1000]

            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'linear'
            delay: 2,            ease: "linear"
            delay: 2
            y: [0, 1000];
            opacity: [0, 1, 0]
=======
            duration: 8
            repeat: Infinity
            ease: 'linear'
            delay: 4,            ease: "linear"

            delay: 4
          }}
            duration: 8,
            repeat: Infinity,

          }}

=======

            duration: 8,
            repeat: Infinity,
            ease: 'linear',
            delay: 4,            ease: "linear",
            delay: 4
          }}

          }}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        />
      </div>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {[...Array(20)].map((_, i) => (
          <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            key={i}
            className='absolute w - 2 h - 2 bg - purple - 400 rounded - full';
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0]
              opacity: [0, 1, 0],            }}        {[...Array(20)].map((_, i) => (
=======
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 4 }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],            }}        {[...Array (20)].map ((_, i) => (
          <motion.div;
=======
=======
            duration: 8,
            repeat: Infinity,
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

        />
      </div>
      {/* Quantum Particles */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{ zIndex: 4 }}
      >

        {[...Array(20)].map((_, i) => (
          <motion.div

            key={i}
            className="absolute w - 2 h - 2 bg - purple - 400 rounded - full";
            style={{

=======
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],            }}        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`

            }}
            animate={{
              scale: [0, 1, 0]
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2
              repeat: Infinity
              delay: Math.random() * 3
              ease: 'easeInOut',            }}              ease: "easeInOut"


=======
              duration: 3 + Math && Math.random() * 2,
              repeat: Infinity,

              ease: 'easeInOut',            }}              ease: "easeInOut"



            }}
          />;
=======


=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
          />
        ))}
      </div>
              ease: 'easeInOut',            }}

            }}

          />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        ))}
      </div>

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      {/* Content */}
      <div className='relative' style={{ zIndex: 10 }}>        {children}
      </div>
      {/* Bottom Glow */}      <div className="relative" style={{ zIndex: 10 }}>

            }}

          />
        ))}
      </div>

      {/* Content */}
      <div className='relative' style={{ zIndex: 10 }}>        {children}
      </div>;
      {/* Bottom Glow */}      <div className="relative" style={{ zIndex: 10 }}>;
        {children}
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      <div className='relative' style={{ z_index: 10 }}>        {children}
      </div>;
      {/* Bottom Glow */}      <div className="relative" style={{ z_index: 10 }}>;
        {children}
      </div>;
      {/* Bottom Glow */}

}
}
}
}
}
}
}
}
}
}

      {/* Bottom Glow */}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
