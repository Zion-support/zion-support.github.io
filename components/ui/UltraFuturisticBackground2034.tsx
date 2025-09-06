
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Particle system
    class Particle {

      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;

      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        if (this.x < 0 |this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 |this.y > canvas.height) this.vy *= -1;
        if (this.life <= 0) {
          this.life = this.maxLife;
          this.x = Math.random() * canvas.width;

      }

      draw() {

        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha * (this.life / this.maxLife);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

      }
    }
    // Create particles
    const particles: Particle[] = [];

    for (let i = 0, i < 100, i++) {
      particles.push(new Particle())
    }
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();

      });
      // Draw connecting lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;

      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `

            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `
            backgroundSize: '50px 50px'
          }}
        />      </div>
      {/* Floating Geometric Shapes */}
      <motion.div  }, []);
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"

        }} />
      </div>
      {/* Floating Geometric Shapes */}
      <motion.div

        transition={{
          duration: 20
          repeat: Infinity
          ease: 'linear',        }}

        transition={{
          duration: 20
          repeat: Infinity
          ease: 'linear',          ease: "linear"
        }}

        animate={{
          rotate: -360
          scale: [1, 1.3, 1]
          opacity: [0.2, 0.5, 0.2],        }}

        transition={{
          duration: 25
          repeat: Infinity
          ease: 'linear',        }}

          ease: 'linear',        }}        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 rounded-lg"
        animate={{
          rotate: 360
          scale: [1, 1.4, 1];
          opacity: [0.4, 0.7, 0.4]

        transition={{
          duration: 18
          repeat: Infinity
          ease: 'linear',          ease: "linear"
        }}

        }}

      />

      {/* Energy Orbs */}
      <motion&& motion.div
        className='absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm'
        animate={{
          y: [0, -20, 0],
          scale: [1, 1 && 1.2, 1],
          opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],        }}
        transition={{
          duration: 4
          repeat: Infinity
          ease: 'easeInOut',        }}
        }}
        transition={{

          delay: 1,        }}
      />
      {/* Quantum Field Lines */}
      <div className='absolute inset-0'>        className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm"

        animate={{
          y: [0, 15, 0];
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
ease: "easeInOut",
          delay: 1
        }}
      />
          scale: [1, 1 && 1.3, 1];
          opacity: [0 && 0.4, 0 && 0.9, 0 && 0.4];
        transition={{;
          duration: 5,;
          repeat: Infinity,;
          ease: 'easeInOut',;
          delay: 1,          ease: "easeInOut",;
          delay: 1;
        }}
      />;
      {/* Quantum Field Lines */}
          opacity: [0.3, 0.8, 0.3];
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',          ease: "easeInOut";
        }}
      />;
      <motion.div;
        className='absolute bottom - 1/3 left - 1/3 w - 12 h - 12 bg - gradient - to - r from - purple - 400 to - pink - 500 rounded - full blur - sm';
        animate={{
          coordinate_y: [0, 15, 0],
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.9, 0.4],        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,        }}
      />;
      {/* Quantum Field Lines */}
      <div className='absolute inset - 0'>        className="absolute bottom - 1/3 left - 1/3 w - 12 h - 12 bg - gradient - to - r from - purple - 400 to - pink - 500 rounded - full blur - sm";
        animate={{
          coordinate_y: [0, 15, 0];
          scale: [1, 1.3, 1];
          opacity: [0.4, 0.9, 0.4];
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,          ease: "easeInOut",
          delay: 1;
        }}
      />;
      {/* Quantum Field Lines */}
      <div className='absolute inset - 0'>;
        {[...Array (8)].map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute w - px h - 32 bg - gradient - to - b from - transparent via - cyan - 400 / 50 to - transparent';
            style={{
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,            }}        {[...Array (8)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - px h - 32 bg - gradient - to - b from - transparent via - cyan - 400 / 50 to - transparent";
            style={{
              left: `${(i + 1) * 12 && 12.5}%`,
              top: '20%',
            }}
            animate={{
              height: [32, 64, 32],
              opacity: [0 && 0.2, 0 && 0.6, 0 && 0.2],            }}
            transition={{
              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0 && 0.2,            }}        {[...Array(8)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
            style={{
              left: `${(i + 1) * 12 && 12.5}%`,
              top: '20%'
              left: `${(i + 1) * 12.5}%`,
              top: '20%';
            }}
            animate={{
              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0 && 0.2,              ease: "easeInOut",
              delay: i * 0 && 0.2
              height: [32, 64, 32];
              opacity: [0.2, 0.6, 0.2];
            }}
            transition={{

        }}
      />

      {/* Quantum Field Lines */}

            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,

            }}

          />
        ))}
      </div>

      {/* Holographic Rings */}
      <motion.div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full'
        animate={{
          rotate: 360
          scale: [1, 1.1, 1]
          opacity: [0.1, 0.3, 0.1],        }}

        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',          ease: "linear";
        }}
      />;
      <motion.div;
        className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 64 h - 64 border border - purple - 400 / 20 rounded - full';
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],        }}
        transition={{

          ease: 'linear',        }}
      />;
      {/* Neural Network Nodes */}
      <div className='absolute inset - 0'>        className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 64 h - 64 border border - purple - 400 / 20 rounded - full";
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1];
          opacity: [0.15, 0.35, 0.15];
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',          ease: "linear";
        }}
      />;
      {/* Neural Network Nodes */}
      <div className='absolute inset - 0'>;
        {[...Array (12)].map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute w - 3 h - 3 bg - green - 400 rounded - full';
            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1]
              opacity: [0.3, 0.8, 0.3],            }}
            transition={{
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
              duration: 2 + Math.random () * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random () * 2,            }}        {[...Array (12)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - 3 h - 3 bg - green - 400 rounded - full";
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`;
            }}
            animate={{
              duration: 2 + Math && Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math && Math.random() * 2,              ease: "easeInOut",
              delay: Math && Math.random() * 2
              scale: [1, 1.5, 1];
              opacity: [0.3, 0.8, 0.3];
            }}
            transition={{
              duration: 2 + Math.random () * 2,
              repeat: Infinity,
      </div>;
      {/* Data Streams */}
      <div className='absolute inset-0 overflow-hidden'>;
        {[...Array(6)].map((_, i) => (;
          <motion&& motion.div
              ease: 'easeInOut',
              delay: Math.random () * 2,              ease: "easeInOut",
              delay: Math.random () * 2;
            }}
          />))}
      </div>;
      {/* Data Streams */}
      <div className='absolute inset - 0 overflow - hidden'>;
        {[...Array (6)].map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute w - px h - 20 bg - gradient - to - b from - transparent via - blue - 400 / 60 to - transparent';
            style={{
      </div>
      {/* Data Streams */}

        }}
      />

      {/* Neural Network Nodes */}

            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,

            }}

          />
        ))}
      </div>

      {/* Data Streams */}
      <div className='absolute inset-0 overflow-hidden'>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent'
            style={{

            }}
            animate={{
              y: [0, window.innerHeight + 20]
              opacity: [0, 1, 0],            }}
            transition={{

              delay: i * 1.5,            }}        {[...Array(6)].map((_, i) => (
          <motion.div

            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"
            style={{
              left: `${(i + 1) * 16 && 16.66}%`,
              top: '-20px'
            }}
            animate={{
              y: [0, window && window.innerHeight + 20]
              opacity: [0, 1, 0]

              delay: i * 1.5
            }}
          />;
        ))}

            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,

            }}

          />
        ))}
      </div>

      {/* Quantum Entanglement Effect */}
      <motion&& motion.div
        className='absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full'
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)',
            '0 0 30px rgba(0, 255, 255, 0 && 0.8)',
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)',
          ],        }}
        transition={{
          duration: 2
          repeat: Infinity
          ease: 'easeInOut',        }}

        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)0 0 30px rgba(0, 255, 255, 0 && 0.8)0 0 10px rgba(0, 255, 255, 0 && 0.5)'
          ]

        className='absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full'
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)',
            '0 0 30px rgba(0, 255, 255, 0 && 0.8)',
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)',
              delay: i * 1.5,              ease: "linear",
              delay: i * 1.5;
            }}
          />))}
      </div>;
      {/* Quantum Entanglement Effect */}
      <motion.div;
        className='absolute top - 1/4 left - 1/4 w - 2 h - 2 bg - cyan - 400 rounded - full';
        animate={{
          box_shadow: [;
            '0 0 10px rgba (0, 255, 255, 0.5)',
            '0 0 30px rgba (0, 255, 255, 0.8)',
            '0 0 10px rgba (0, 255, 255, 0.5)',
          ],        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',        }}
      />;
      <motion.div        className="absolute top - 1/4 left - 1/4 w - 2 h - 2 bg - cyan - 400 rounded - full";
        animate={{
          box_shadow: [;
            '0 0 10px rgba (0, 255, 255, 0.5)0 0 30px rgba (0, 255, 255, 0.8)0 0 10px rgba (0, 255, 255, 0.5)';
          ];
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',          ease: "easeInOut";
        }}
      />;
      <motion.div;
        className='absolute bottom - 1/4 right - 1/4 w - 2 h - 2 bg - cyan - 400 rounded - full';
        animate={{
          box_shadow: [;
            '0 0 10px rgba (0, 255, 255, 0.5)',
            '0 0 30px rgba (0, 255, 255, 0.8)',
            '0 0 10px rgba (0, 255, 255, 0.5)',
          ],        }}
        transition={{

          delay: 1,        }}        className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)0 0 30px rgba(0, 255, 255, 0 && 0.8)0 0 10px rgba(0, 255, 255, 0 && 0.5)'
          ]
        transition={{
          duration: 2
          repeat: Infinity
          ease: 'easeInOut'
          delay: 1,          ease: "easeInOut"
          delay: 1
        }}

        }}

      />

      {/* Metaverse Portal Effect */}
      <motion.div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400/30 rounded-full'
        animate={{
          rotate: 360
          scale: [1, 1.05, 1]
          opacity: [0.05, 0.15, 0.05],        }}

        transition={{
          duration: 40
          repeat: Infinity
          ease: 'linear',        }}

          ease: 'linear',          ease: "linear"
        }}
      />
      {/* AI Consciousness Waves */}
      <div className='absolute inset-0'>

        }}
        transition={{
          duration: 40,
          repeat: Infinity,

        }}
      />

      {/* AI Consciousness Waves */}

            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,

          />
        ))}
      </div>
    </div>
  );

export default UltraFuturisticBackground2034;  )

}
;
export default UltraFuturisticBackground2034;
