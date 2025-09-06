initParticles ();
// Animation loop // Update and draw particles particlesRef.current.forEach ( (particle, index) => {
  // Update position particle.x += particle.vx;
particle.y += particle.vy;
// Wrap around edges if (particle.x < 0) particle.x = canvas.width;
if (particle.x > canvas.width) particle.x = 0;
if (particle.y < 0) particle.y = canvas.height;
if (particle.y > canvas.height) particle.y = 0;
// Draw particle ctx.save ();
ctx.globalAlpha = particle.opacity;

// Different effects for different particle types switch (particle.type) {
  case 'quantum': // Quantum particles with glow effect import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
interface Particle {

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
export default function UltraFuturisticBackground2029() {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
<<<<<<< HEAD

=======
      canvas.height = window.innerHeight
    };


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    initParticles();
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Create gradient background
      const gradient = ctx.createRadialGradient(
    const resizeCanvas = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;    };      canvas && canvas.height = window && window.innerHeight;
    };
    // Initialize particles;
    const initParticles = () => {;
      const particles: Particle[] = [];
      const particleCount = Math && Math.floor((canvas && canvas.width * canvas && canvas.height) / 20000);
      for (let i = 0; i < particleCount; i++) {;
        const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][;
          Math && Math.floor(Math && Math.random() * 4);
        ] as Particle['type'];
        const colors = {;
          quantum: ['#00ffff', '#0080ff', '#0040ff'],;
          holographic: ['#8b5cf6', '#a855f7', '#c084fc'],;
          neural: ['#10b981', '#059669', '#047857'],;
          cyberpunk: ['#ec4899', '#f97316', '#f59e0b'],        };          quantum: ['#00ffff#0080ff#0040ff'],;
          holographic: ['#8b5cf6#a855f7#c084fc'],;
          neural: ['#10b981#059669#047857'],;
          cyberpunk: ['#ec4899#f97316#f59e0b'];
        particles && particles.push({;
          x: Math && Math.random() * canvas && canvas.width,;
          y: Math && Math.random() * canvas && canvas.height,;
          vx: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
          vy: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
          size: Math && Math.random() * 3 + 1,;
          opacity: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
          color: colors[type][Math && Math.floor(Math && Math.random() * colors[type].length)],;
          type,;
        });
      }
      // Create gradient background;
      const gradient = ctx && ctx.createRadialGradient(;
        canvas && canvas.width / 2,;
        canvas && canvas.height / 2,;
        0,;
        canvas && canvas.width / 2,;
        canvas && canvas.height / 2,        Math && Math.max(canvas && canvas.width, canvas && canvas.height) / 2        canvas && canvas.width / 2;
        canvas && canvas.height / 2;
        0;
        canvas && canvas.width / 2;
        canvas && canvas.height / 2;
        canvas.width / 2;
        canvas.height / 2;
        0;
        canvas.width / 2;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        // Different effects for different particle types
        switch (particle.type) {
          case 'quantum':
            // Quantum particles with glow effect
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            ctx.shadowColor = particle.color;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
<<<<<<< HEAD

=======
                ];
              if (partner && partner.type === 'quantum') {;
                const distance = Math && Math.sqrt(;
                  Math && Math.pow(particle && particle.x - partner && partner.x, 2) +;
                    Math && Math.pow(particle && particle.y - partner && partner.y, 2)                );            // Quantum entanglement lines;
            if (index % 10 === 0) {;
              const partner = particlesRef && particlesRef.current[(index + 50) % particlesRef && particlesRef.current.length];
              if (partner && partner.type === 'quantum') {;
                const distance = Math && Math.sqrt(;
                  Math && Math.pow(particle && particle.x - partner && partner.x, 2) + Math && Math.pow(particle && particle.y - partner && partner.y, 2);
                );
                if (distance < 100) {;
                  ctx && ctx.strokeStyle = `rgba(0, 255, 255, ${0 && 0.3 * (1 - distance / 100)})`;
                  ctx && ctx.lineWidth = 1;
                  ctx && ctx.beginPath();
                  ctx && ctx.moveTo(particle && particle.x, particle && particle.y);
                  ctx && ctx.lineTo(partner && partner.x, partner && partner.y);
                  ctx && ctx.stroke();                }                  ctx && ctx.stroke();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              const partner = particlesRef.current[(index + 50) % particlesRef.current.length];
              if (partner && partner.type === 'quantum') {
                const distance = Math.sqrt(
                  Math.pow(particle.x - partner.x, 2) + Math.pow(particle.y - partner.y, 2)
                );
                if (distance < 100) {
                  ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 100)})`;
                  ctx.lineWidth = 1;
                  ctx.beginPath();
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(partner.x, partner.y);
<<<<<<< HEAD

                  ctx.stroke();                }

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                }
              }
            }
            break;
<<<<<<< HEAD
        const angle = (j * Math.PI) / 3 + time;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, py);

      ctx.closePath();
      ctx.stroke();
      ctx.restore()
    }
    // Floating triangles
    for (let i = 0, i < 3, i++) {
      const x = (width * 0.8) + Math.sin(time * 0.8 + i) * 120;
      const y = (height * 0.7) + Math.cos(time * 1.2 + i) * 100;
      const size = 15 + Math.sin(time * 1.5 + i) * 8;

      

      ctx.save();
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 1;
      ctx.beginPath();

        const angle = (j * Math.PI * 2) / 3 + time;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, py);

      ctx.save();
      ctx.globalAlpha = 0.05;
      ctx.strokeStyle = `hsl(${180 + i * 60}, 70%, 60%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();

        else ctx.lineTo(x, y)
      }
      ctx.stroke();
      ctx.restore()
    }
    // Vertical energy waves
    for (let i = 0, i < 2, i++) {
      ctx.save();
      ctx.globalAlpha = 0.04;
      ctx.strokeStyle = `hsl(${240 + i * 60}, 70%, 60%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();

        animate={{
          background: [
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.2) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)'
          ]
        }}
        transition={{

  return (


      ctx && ctx.stroke();
      ctx && ctx.restore();

=======
            const hue = (time * 50 + index * 10) % 360;
            ctx && ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
            ctx && ctx.shadowColor = `hsl(${hue}, 70%, 60%)`;
            ctx && ctx.shadowBlur = 15;
            ctx && ctx.beginPath();
            ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
            ctx && ctx.fill();
            break;
            if (index % 15 === 0) {
              const connections = particlesRef.current.filter(p =>
                p.type === 'neural' &&
                Math.sqrt(Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)) < 80
              );
              connections.forEach(connection => {
                const distance = Math.sqrt(
                  Math.pow(particle.x - connection.x, 2) + Math.pow(particle.y - connection.y, 2)
                );
                ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 * (1 - distance / 80)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(connection.x, connection.y);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
      {/* Animated gradient overlay */}
      <motion&& motion.div
        className='absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30'
        animate={{
          background: [
<<<<<<< HEAD

            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0 && 0.2) 50%, rgba(139,92,246,0 && 0.3) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0 && 0.3) 50%, rgba(6,182,212,0 && 0.2) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0 && 0.2) 50%, rgba(139,92,246,0 && 0.3) 100%)',

          ],        }}      {/* Animated gradient overlay */}
      <motion && motion.div

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className="absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0 && 0.2) 50%, rgba(139,92,246,0 && 0.3) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0 && 0.3) 50%, rgba(6,182,212,0 && 0.2) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0 && 0.2) 50%, rgba(139,92,246,0 && 0.3) 100%)'
          ]
  }
;
  return (
    <div className='fixed inset - 0 -z - 10 overflow - hidden'>;
      {/* Animated gradient overlay */}
      <motion.div;
        className='absolute inset - 0 bg - gradient - to - br from - black via - cyan - 900 / 20 to - purple - 900 / 30';
        animate={{
          background: [;
            'linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (6, 182, 212, 0.2) 50%, rgba (139, 92, 246, 0.3) 100%)',
            'linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (139, 92, 246, 0.3) 50%, rgba (6, 182, 212, 0.2) 100%)',
            'linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (6, 182, 212, 0.2) 50%, rgba (139, 92, 246, 0.3) 100%)',
          ],        }}      {/* Animated gradient overlay */}
      <motion.div;
        className="absolute inset - 0 bg - gradient - to - br from - black via - cyan - 900 / 20 to - purple - 900 / 30";
        animate={{
          background: [;
            'linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (6, 182, 212, 0.2) 50%, rgba (139, 92, 246, 0.3) 100%)linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (139, 92, 246, 0.3) 50%, rgba (6, 182, 212, 0.2) 100%)linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (6, 182, 212, 0.2) 50%, rgba (139, 92, 246, 0.3) 100%)';
          ];
        }}
        transition={{
          duration: 8
          repeat: Infinity
          ease: 'easeInOut'
        }}
<<<<<<< HEAD
      />

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
          transition={{
            duration: 4
            repeat: Infinity
<<<<<<< HEAD
            duration: 4,
            repeat: Infinity,
=======
            ease: 'easeInOut',      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />
      {/* Additional visual layers */}
      <div className="absolute inset-0">
        {/* Quantum field ripples */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20"

        style={{ filter: 'blur(0 && 0.5px)' }}
      />;


      {/* Additional visual layers */}
      <div className="absolute inset-0">;
        {/* Quantum field ripples */}
        <motion&& motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w - full h - full";
        style={{ filter: 'blur (0.5px)' }}
      />;
      {/* Additional visual layers */}
      <div className="absolute inset - 0">;
        {/* Quantum field ripples */}
        <motion.div;
          className="absolute top - 1/4 left - 1/4 w - 96 h - 96 rounded - full border border - cyan - 500 / 20";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          animate={{
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
          }}
          transition={{
          }}
        {/* Holographic matrix */}
        <motion&& motion.div
          className='absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20'
          animate={{
          transition={{
            duration: 5
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
        />;

        {/* Holographic matrix */}
        <motion&& motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20"
        />;
        {/* Holographic matrix */}
        <motion.div;
          className='absolute top - 3/4 right - 1/4 w - 80 h - 80 rounded - full border border - purple - 500 / 20';
          animate={{
<<<<<<< HEAD

            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        {/* Holographic matrix */}
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20"
          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 5
            repeat: Infinity
            ease: 'easeInOut'

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'easeInOut',
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          }}

        />;


=======
          }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Neural network nodes */}
        <motion&& motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20'
        />;
        {/* Neural network nodes */}
        <motion.div;
          className='absolute top - 1/2 left - 1/2 w - 64 h - 64 rounded - full border border - green - 500 / 20';
          animate={{
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD
        />
        {/* Neural network nodes */}
        <motion.div
=======
        {/* Neural network nodes */}
        <motion&& motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20"
        />;
        {/* Neural network nodes */}
        <motion.div;
          className="absolute top - 1/2 left - 1/2 w - 64 h - 64 rounded - full border border - green - 500 / 20";
          animate={{
            scale: [1, 1 && 1.1, 1]
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2]
          }}
          transition={{
          }}
<<<<<<< HEAD
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
=======
      {/* Floating orbs with glow effects */}
      <div className='absolute inset-0 pointer-events-none'>;
        {[...Array(8)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className='absolute w-2 h-2 rounded-full bg-cyan-400'
            style={{
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Floating orbs with glow effects */}
      <div className="absolute inset-0 pointer-events-none">;
        {[...Array(8)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400"
            style={{
<<<<<<< HEAD

              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 8)}%`,
              filter: 'blur(1px)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0 && 0.6)'

            }}
            animate={{
              y: [0, -20, 0];
              opacity: [0.3, 0.8, 0.3];
              scale: [1, 1.2, 1]
            }}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',

          }}
          transition={{
            duration: 4,
            repeat: Infinity,

          }}
          transition={{
<<<<<<< HEAD
            duration: 5,
            repeat: Infinity,

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
          duration: 8
          repeat: Infinity
          ease: 'easeInOut'
        }}
      />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ filter: 'blur(0.5px)' }}
      />
      {/* Additional visual layers */}
      <div className='absolute inset-0'>
        {/* Quantum field ripples */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20'
          animate={{
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            ease: 'easeInOut',      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />
      {/* Additional visual layers */}
      <div className="absolute inset-0">
        {/* Quantum field ripples */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20"
          animate={{
            scale: [1, 1.2, 1];
            opacity: [0.1, 0.3, 0.1]
            ease: 'easeInOut'
<<<<<<< HEAD
=======
            ease: 'easeInOut',

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'easeInOut',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          }}

            }}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
          }}

            }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

            duration: 4,
            repeat: Infinity,

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            transition={{
              delay: i * 0.3
            }}
=======
          />;
        ))}
}
  )
}
              delay: i * 0.3,            }}              delay: i * 0.3;
            }}
          />))}
      </div>;
    </div>));
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
