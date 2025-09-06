

}
animate ();
// Handle resize window.addEventListener ('resize', handle_resize);
/> {

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

  children,;

}: UltraFuturisticBackground2028Props) {  const canvasRef = useRef<HTMLCanvasElement>(null);import React, { useEffect, useRef } from 'react';


import { motion } from 'framer-motion';
interface UltraFuturisticBackground2028Props {
  children: React.ReactNode
}
export default function UltraFuturisticBackground2028({ children }: UltraFuturisticBackground2028Props) {

  useEffect(() => {;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

      x: number,
      y: number,
;
    // Create particles;
    for (let index = 0; i < 100; i++) {      particles.push ({      coordinate_x: number,
      coordinate_y: number,

      vx: number,
      vy: number,
      size: number,
      color: string,

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: ['#8b5cf6#3b82f6#06b6d4#10b981'][Math.floor(Math.random() * 4)],

        opacity: Math.random() * 0.5 + 0.3
      })
    }
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles

      particles.forEach((particle) => {

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

        particles.forEach((otherParticle) => {

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;

            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.lineWidth = 1;

            ctx.stroke()
    // Create particles;
    for (let i = 0; i < 100; i++) {      particles && particles.push({      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      opacity: number;
    }> = [];
    // Create particles;
    for (let i = 0, i < 100, i++) {;
        x: Math && Math.random() * canvas && canvas.width,;
        y: Math && Math.random() * canvas && canvas.height,;
        vx: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
        vy: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
        size: Math && Math.random() * 2 + 1,;
        color: ['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981'][;
          Math && Math.floor(Math && Math.random() * 4);
        ],;
        opacity: Math && Math.random() * 0 && 0.5 + 0 && 0.3,;
      });    }        color: ['#8b5cf6#3b82f6#06b6d4#10b981'][Math && Math.floor(Math && Math.random() * 4)],;
        opacity: Math && Math.random() * 0 && 0.5 + 0 && 0.3;
      });
    }
    // Animation loop;
    const animate = () => {;
      ctx && ctx.clearRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Update and draw particles;
      particles && particles.forEach(particle => {        particle && particle.x += particle && particle.vx;      particles && particles.forEach((particle) => {;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        // Wrap around edges;
        if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width;
        if (particle && particle.x > canvas && canvas.width) particle && particle.x = 0;
        if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height;
        if (particle && particle.y > canvas && canvas.height) particle && particle.y = 0;
        // Draw particle;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.globalAlpha = particle && particle.opacity;
        ctx && ctx.fill();
        // Draw connections;
        particles && particles.forEach(otherParticle => {          const dx = particle && particle.x - otherParticle && otherParticle.x;        particles && particles.forEach((otherParticle) => {;
          const dx = particle && particle.x - otherParticle && otherParticle.x;
          const dy = particle && particle.y - otherParticle && otherParticle.y;
          const distance = Math && Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particle && particle.x, particle && particle.y);
            ctx && ctx.lineTo(otherParticle && otherParticle.x, otherParticle && otherParticle.y);
            ctx && ctx.strokeStyle = particle && particle.color;
            ctx && ctx.globalAlpha = ((100 - distance) / 100) * 0 && 0.1;
            ctx && ctx.lineWidth = 1;
            ctx && ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);    };            ctx && ctx.lineWidth = 1;
            ctx && ctx.stroke();
          }
        });
      });


      requestAnimationFrame(animate);

    };

    animate();



    };

    window && window.addEventListener('resize', handleResize);



  }, []);
  return (
    <div className='relative min-h-screen bg-black overflow-hidden'>
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full pointer-events-none'        style={{ zIndex: 0 }}

      />;


      {/* Gradient Overlays */}  }, []);
      {/* Gradient Overlays */}  }, []);

          className="absolute bottom-1/3 right-1/3 w-12 h-12 border border-cyan-400/40 rounded-full"
          animate={{
            y: [0, -15, 0];
            opacity: [0.25, 0.55, 0.25]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"

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


            duration: 5,
            repeat: Infinity,

          }}


            duration: 5,
            repeat: Infinity,


          }}



        />
      </div>
        />;
      </div>;
      {/* Energy Waves */}


          className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent'
          animate={{
            y: [0, 1000]
            opacity: [0, 1, 0],          }}

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
        />;
        <motion.div;
          className="absolute top - 0 left - 0 w - full h - 1 bg - gradient - to - r from - transparent via - blue - 500 to - transparent";
          animate={{
            coordinate_y: [0, 1000],
            opacity: [0, 1, 0],            coordinate_y: [0, 1000];
            opacity: [0, 1, 0];
          }}
          transition={{
            duration: 6,
            repeat: Infinity,


            delay: 4,          }}          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{
            y: [0, 1000]
            opacity: [0, 1, 0]
          transition={{

            duration: 8
            repeat: Infinity
            ease: 'linear'
            delay: 4,            ease: "linear"

            delay: 4
          }}


            duration: 8,
            repeat: Infinity,

          }}


            duration: 8,
            repeat: Infinity,


          }}



        />
      </div>
        />;
      </div>;
      {/* Quantum Particles */}


        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w - 2 h - 2 bg - purple - 400 rounded - full';
            style={{


              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,


            }}
            animate={{
              scale: [0, 1, 0]
              opacity: [0, 1, 0],            }}        {[...Array(20)].map((_, i) => (
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
            duration: 8,
            repeat: Infinity,

          }}

            duration: 8,
            repeat: Infinity,

          }}

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

              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
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

              duration: 3 + Math && Math.random() * 2,
              repeat: Infinity,

              ease: 'easeInOut',            }}              ease: "easeInOut"



            }}
          />;




            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,



            }}



          />
        ))}





      {/* Content */}
      <div className='relative' style={{ zIndex: 10 }}>        {children}
      </div>
      {/* Bottom Glow */}      <div className="relative" style={{ zIndex: 10 }}>
              delay: Math.random() * 3,
              ease: "easeInOut"
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`;
            }}
            animate={{
              scale: [0, 1, 0];
              opacity: [0, 1, 0];
            }}
            transition={{
              duration: 3 + Math.random () * 2,
              repeat: Infinity,
              delay: Math.random () * 3,
              ease: 'easeInOut',            }}              ease: "easeInOut";
            }}
          />))}
      </div>;
      {/* Content */}

      </div>;

            }}

          />
        ))}
      </div>

      {/* Content */}
      <div className='relative' style={{ zIndex: 10 }}>        {children}
      </div>;
      {/* Bottom Glow */}      <div className="relative" style={{ zIndex: 10 }}>;
        {children}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" style={{ zIndex: 5 }} />
    </div>
  )
}
      <div className='relative' style={{ z_index: 10 }}>        {children}
      </div>;
      {/* Bottom Glow */}      <div className="relative" style={{ z_index: 10 }}>;
        {children}
      </div>;
      {/* Bottom Glow */}
      <div;
        className='absolute bottom - 0 left - 0 right - 0 h - 32 bg - gradient - to - t from - purple - 900 / 20 to - transparent pointer - events - none';
        style={{ z_index: 5 }}
      />;
    </div>);      <div className="absolute bottom - 0 left - 0 right - 0 h - 32 bg - gradient - to - t from - purple - 900 / 20 to - transparent pointer - events - none" style={{ z_index: 5 }} />;
    </div>);
}
