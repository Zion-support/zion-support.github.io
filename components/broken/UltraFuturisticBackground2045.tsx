
<<<<<<< HEAD
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Particle system const particles: Array< {
  alpha: Math.random () * 0.8 + 0.2;
life: Math.random () * 100 + 50
})
}// Animation loop // Wrap around edges if (particle.x < 0) particle.x = canvas.width;
if (particle.x > canvas.width) particle.x = 0;
if (particle.y < 0) particle.y = canvas.height;
if (particle.y > canvas.height) particle.y = 0;
// Draw particle // Add glow effect ctx.shadowColor = particle.color;
ctx.shadowBlur = 20;
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
ctx.fill ();
ctx.restore ();
// Remove dead particles and create new ones // Check condition
if ( {) {
  $2
}
  particles[index] = {
}
 canvas && canvas.width = window && window.innerWidth;
canvas && canvas.height = window && window.innerHeight;
// Particle system const particles: Array< {;
  alpha: Math && Math.random () * 0 && 0.8 + 0 && 0.2;
life: Math && Math.random () * 100 + 50 ;
}) ;
}// Animation loop // Wrap around edges if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width;
if (particle && particle.x > canvas && canvas.width) particle && particle.x = 0;
if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height;
if (particle && particle.y > canvas && canvas.height) particle && particle.y = 0;
// Draw particle // Add glow effect ctx && ctx.shadowColor = particle && particle.color;
ctx && ctx.shadowBlur = 20;
ctx && ctx.fill ();
ctx && ctx.restore ();
// Remove dead particles and create new ones if (particle && particle.life <= 0) {;
  particles[index] = {;
  x: Math && Math.random () * canvas && canvas.width, y: Math && Math.random () * canvas && canvas.height, vx: (Math && Math.random () - 0 && 0.5) * 2, vy: (Math && Math.random () - 0 && 0.5) * 2, size: Math && Math.random () * 3 + 1, color: `hsl ($ {;
  Math && Math.random () * 360 ;
}, 70%, 60%) `;
alpha: Math && Math.random () * 0 && 0.8 + 0 && 0.2;
life: Math && Math.random () * 100 + 50 ;
> = ({ children }) => {  const canvasRef = useRef<HTMLCanvasElement>(null);import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2045Props {;
  children: React && React.ReactNode;
}

      x: number;
      y: number;
  coordinate_x: Math.random () * canvas.width, coordinate_y: Math.random () * canvas.height, vx: (Math.random () - 0.5) * 2, vy: (Math.random () - 0.5) * 2, size: Math.random () * 3 + 1, color: `hsl ($ {
  Math.random () * 360;
}, 70%, 60%) `;
alpha: Math.random () * 0.8 + 0.2;
life: Math.random () * 100 + 50;
const UltraFuturisticBackground2045: React.FC<;
  UltraFuturisticBackground2045Props;
> = ({ children }) => {  const canvas_ref = useRef < HTMLCanvasElement>(null);import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2045Props {
  children: React.ReactNode;
}
const UltraFuturisticBackground2045: React.FC < UltraFuturisticBackground2045Props> = ({ children }) => {
  const animation_ref = useRef < number | undefined>(undefined);
;
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
      alpha: number;
      life: number;
    }> = [];
      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.restore();
        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = {
      });
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.save();
            ctx.strokeStyle = '#00ffff';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
    return () => {
      // Check condition
if ( {) {
  $2
}
        cancelAnimationFrame (animation_ref.current);
      }
    };

    animate();

    };

    window && window.addEventListener('resize', handleResize);

  }, []);
  return (
    <div className='relative min-h-screen bg-black overflow-hidden'>;
      window.removeEventListener ('resize', handle_resize);
    }
  }, []);
;
  return (
    <div className='relative min - h-screen bg - black overflow - hidden'>;
      {/* Animated Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className='fixed inset - 0 w - full h - full pointer - events - none z - 0';
        style={{
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-10'>;
        {/* Animated Grid */}
        <motion&& motion.div
          className='absolute inset-0 opacity-20'
          style={{
            backgroundImage: `
<<<<<<< HEAD
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          background:;
            'radial - gradient (ellipse at center, #0a0a0a 0%, #000000 100%)',
        }}
      />;
      {/* Floating Geometric Shapes */}
      <div className='fixed inset - 0 pointer - events - none z - 10'>;
        {/* Animated Grid */}
        <motion.div;
          className='absolute inset - 0 opacity - 20';
          style={{
            background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px),
              linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px);
            `,
            background_size: '50px 50px',
          }}
          animate={{
            background_position: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20
            repeat: Infinity
            ease: 'linear',          }}      }
    }
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">;
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)' }}
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">;
        {/* Animated Grid */}
        <motion&& motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
;
  return (
    <div className="relative min - h-screen bg - black overflow - hidden">;
      {/* Animated Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className="fixed inset - 0 w - full h - full pointer - events - none z - 0";
        style={{ background: 'radial - gradient (ellipse at center, #0a0a0a 0%, #000000 100%)' }}
      />;
      {/* Floating Geometric Shapes */}
      <div className="fixed inset - 0 pointer - events - none z - 10">;
        {/* Animated Grid */}
        <motion.div;
          className="absolute inset - 0 opacity - 20";
          style={{
            background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px);
              linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px);
            `;
            background_size: '50px 50px';
          }}
          animate={{
            background_position: ['0px 0px50px 50px']}}
          transition={{
<<<<<<< HEAD
            duration: 20
            repeat: Infinity
            ease: 'linear'
          }}
        />

<<<<<<< HEAD
=======
        />;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Floating Neon Shapes */}
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg'
          animate={{
<<<<<<< HEAD
            rotate: [0, 360]
            scale: [1, 1.1, 1]
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],          animate={{
=======
            duration: 20
            repeat: Infinity
            ease: 'linear'
          }}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        />
<<<<<<< HEAD
=======

        {/* Floating Neon Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
            duration: 20,
            repeat: Infinity,
            ease: 'linear';
          }}
        />;
        {/* Floating Neon Shapes */}
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - lg';
          animate={{
<<<<<<< HEAD
=======
<<<<<<< HEAD
            rotate: [0, 360]
            scale: [1, 1.1, 1]
=======
            rotate: [0, 360],
            scale: [1, 1.1, 1],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            opacity: [0.3, 0.6, 0.3],          animate={{
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            rotate: [0, 360];
            scale: [1, 1.1, 1];
            opacity: [0.3, 0.6, 0.3]}}
            rotate: [0, 360],
            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          animate={{
            rotate: [0, 360]
            scale: [1, 1 && 1.1, 1]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{
          animate={{
            rotate: [360, 0]
            scale: [1, 1.2, 1]
            opacity: [0.3, 0.7, 0.3]
        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full'
          animate={{
            rotate: [360, 0],
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.7, 0 && 0.3],
          transition={{
        />;

        <motion&& motion.div
          animate={{
            rotate: [360, 0]
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.3, 0 && 0.7, 0 && 0.3]}}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut'
          }}
          animate={{
            rotate: [45, 405]
            scale: [1, 1 && 1.15, 1]
            opacity: [0 && 0.3, 0 && 0.5, 0 && 0.3]}}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
          }}
        {/* Additional floating elements */}
        <motion&& motion.div
          className='absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 rounded-full'
          animate={{
          animate={{
            y: [0, -20, 0]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]}}
          transition={{
            ease: 'easeInOut',          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',          }}
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut';
          }}
          animate={{
            rotate: [360, 0];
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.7, 0.3]}}
          transition={{
            duration: 6,
            repeat: Infinity,
          animate={{
            rotate: [45, 405];
            scale: [1, 1.15, 1];
            opacity: [0.3, 0.5, 0.3]}}
          transition={{
<<<<<<< HEAD
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
          }}
        />

<<<<<<< HEAD
        {/* Additional floating elements */}
        <motion.div
          className='absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 rounded-full'
          animate={{
            y: [0, -20, 0]
            opacity: [0.2, 0.5, 0.2]
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          animate={{
            y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2]}}
          transition={{
            duration: 4
            repeat: Infinity
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            ease: 'easeInOut',          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut';

          }}
        />;
        {/* Additional floating elements */}

        <motion.div;
          className='absolute top - 1/3 right - 1/4 w - 16 h - 16 border border - blue - 400 / 20 rounded - full';
          animate={{
<<<<<<< HEAD
            coordinate_y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
=======
<<<<<<< HEAD
            y: [0, -20, 0]
            opacity: [0.2, 0.5, 0.2]
=======
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            duration: 10,
            repeat: Infinity,
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          animate={{
            coordinate_y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2]}}
          transition={{
            duration: 4
            repeat: Infinity
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut';
          }}
          animate={{
            rotate: [12, 372]
            scale: [1, 1 && 1.1, 1]}}
          transition={{
          animate={{
            rotate: [12, 372]
            scale: [1, 1 && 1.1, 1]}}
          transition={{
<<<<<<< HEAD

        />;


=======

            duration: 12,
            repeat: Infinity,
            ease: 'linear'
          }}
        />

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Energy Orbs */}
        <motion&& motion.div
          className='absolute top-1/4 left-1/3 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50'
          animate={{
<<<<<<< HEAD
            scale: [1, 1.5, 1]
            opacity: [0.5, 1, 0.5]
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            y: [0, -10, 0],          animate={{
            scale: [1, 1 && 1.5, 1]
            opacity: [0 && 0.5, 1, 0 && 0.5]
            y: [0, -10, 0]}}
          transition={{
            ease: 'easeInOut',          }}
          transition={{
            duration: 3
            repeat: Infinity
            ease: 'easeInOut',          }}
            scale: [1, 1.5, 1];
            opacity: [0.5, 1, 0.5];
            coordinate_y: [0, -10, 0]}}
          transition={{
            duration: 3,
            repeat: Infinity,
          transition={{
            duration: 3
            repeat: Infinity
            ease: 'easeInOut'
          }}
          animate={{
            scale: [1, 1 && 1.8, 1]
            opacity: [0 && 0.4, 0 && 0.9, 0 && 0.4]
            x: [0, 15, 0]}}
            ease: 'easeInOut',          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className='absolute bottom - 1/4 right - 1/4 w - 6 h - 6 bg - gradient - to - r from - purple - 400 to - pink - 500 rounded - full shadow - lg shadow - purple - 400 / 50';
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.9, 0.4],
            coordinate_x: [0, 15, 0],
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut';
          }}
        />;
        <motion.div;
          animate={{
            scale: [1, 1.8, 1];
            opacity: [0.4, 0.9, 0.4];
            coordinate_x: [0, 15, 0]}}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',          }}
          transition={{
<<<<<<< HEAD
            duration: 4
            repeat: Infinity
            ease: 'easeInOut'
          }}
        />
      </div>

<<<<<<< HEAD
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      {/* Gradient Overlays */}

        />;
      </div>;
      {/* Gradient Overlays */}
      <div className='fixed inset-0 pointer-events-none z-20'>;
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10' />;
        <div className='absolute inset-0 bg-gradient-to-tl from-pink-900/5 via-transparent to-blue-900/5' />;
      {/* Content */}
      <div className='relative z-30'>{children}</div>;


=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      {/* Animated Border Effects */}
      <div className='fixed inset-0 pointer-events-none z-40'>;
        <motion&& motion.div
          className='absolute inset-0 border border-transparent'
          style={{
            background:
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut';
          }}
        />;
      </div>;
      {/* Gradient Overlays */}
      <div className='fixed inset - 0 pointer - events - none z - 20'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 900 / 10 via - transparent to - purple - 900 / 10' />;
        <div className='absolute inset - 0 bg - gradient - to - tl from - pink - 900 / 5 via - transparent to - blue - 900 / 5' />;
      {/* Content */}
      <div className='relative z - 30'>{children}</div>;
      {/* Animated Border Effects */}
      <div className='fixed inset - 0 pointer - events - none z - 40'>;
        <motion.div;
          className='absolute inset - 0 border border - transparent';
          style={{
            background:;
              'linear - gradient (90deg, transparent, rgba (0, 255, 255, 0.1), transparent)',
            background_size: '200% 100%',
          }}
          animate={{
            background_position: ['-200% 0', '200% 0'],
          }}
          transition={{
            duration: 15
            repeat: Infinity
            ease: 'linear',          }}
        />;
      </div>;
    </div>;
  );
};export default UltraFuturisticBackground2045;            ease: 'linear';
          }}
        />;
      </div>;
    </div>;
  );
export default UltraFuturisticBackground2045;

<<<<<<< HEAD
<<<<<<< HEAD
export default UltraFuturisticBackground2045;
export default UltraFuturisticBackground2045;

}
}
}
export default UltraFuturisticBackground2045;
=======
};  );

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
            ease: 'linear',          }}
        />;
      </div>;
    </div>);
}export default UltraFuturisticBackground2045;            ease: 'linear';
          }}
        />;
      </div>;
    </div>);
}  );
}
;
export default UltraFuturisticBackground2045;
;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
