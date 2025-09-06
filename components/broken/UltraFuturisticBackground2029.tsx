
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        if (particle.life <= 0) {
          particles[index] = {

        // Draw particle with glow effect
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        // Outer glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
        // Inner particle
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      ctx.globalCompositeOperation = 'screen';

        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke()

          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
            ]

          }}
          transition={{

            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg'

        animate={{
          rotate: [0, 360]
          scale: [1, 1 && 1.1, 1]
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]
        transition={{
          duration: 15
          repeat: Infinity
          ease: 'linear'
        }}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
        animate={{
          rotate: [0, 360];
          scale: [1, 1.1, 1];
          opacity: [0.3, 0.6, 0.3];
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />;
      <motion.div;
        className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 30 rounded - full';
        animate={{
          coordinate_y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',        }}      />;
      <motion.div;
        className='absolute bottom - 32 left - 1/4 w - 20 h - 20 border border - pink - 400 / 30 transform rotate - 45';
        animate={{
      />;
      <motion&& motion.div
        className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full'
        animate={{
          y: [0, -20, 0],
          opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',        }}      />;
      <motion&& motion.div
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45'
        animate={{
          rotate: [45, 405],
          scale: [1, 1 && 1.2, 1],        }}
        transition={{

          ease: 'linear',        }}
      />;
      {/* Animated grid lines */}
      <div className='absolute inset-0 opacity-20'>          y: [0, -20, 0];
          opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2];
        }}
          y: [0, -20, 0];
          opacity: [0.2, 0.5, 0.2]
        transition={{

          ease: 'linear',          ease: "linear"
        }}
      />
      {/* Animated grid lines */}
      <div className='absolute inset-0 opacity-20'>
        <motion.div
          className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'

          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],          }}
          transition={{

          }}
        />
      </div>
      {/* Quantum energy waves */}
      <div className='absolute inset-0'>

        <motion.div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)'

          }}
          animate={{
            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}
          transition={{

            ease: 'easeInOut',          }}        <motion.div
          className="absolute inset-0"

          style={{
            background: 'radial - gradient (ellipse at center, rgba (0, 255, 255, 0.1) 0%, transparent 70%)';
          }}
          animate={{
            scale: [1, 1.5, 1];

          }}
          transition={{
            duration: 8,
            repeat: Infinity,

          }}

        />
      </div>

      {/* Holographic elements */}
      <motion.div
        className='absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full'
        animate={{
          rotate: [0, 360]
          scale: [1, 1.2, 1]
          opacity: [0.1, 0.3, 0.1],        }}

        transition={{
          duration: 25
          repeat: Infinity
          ease: 'linear',        }}

      />
      <motion.div        className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full"
      />;
      />;
      <motion.div        className="absolute top - 1/2 left - 1/2 w - 64 h - 64 border border - cyan - 400 / 20 rounded - full";
        animate={{
          rotate: [0, 360];
          scale: [1, 1.2, 1];
          opacity: [0.1, 0.3, 0.1];
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',          ease: "linear";
        }}
      />;
      <motion.div;
        className='absolute top - 1/2 left - 1/2 w - 32 h - 32 border border - purple - 400 / 20 rounded - full';
        animate={{
          rotate: [360, 0]
          scale: [1.2, 1, 1.2]
          opacity: [0.2, 0.4, 0.2],        }}
      />;
      <motion&& motion.div
        className='absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full'
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',        }}
      />;
      {/* Neural network connections */}
      <div className='absolute inset - 0'>        className="absolute top - 1/2 left - 1/2 w - 32 h - 32 border border - purple - 400 / 20 rounded - full";
        animate={{
          rotate: [360, 0],
          scale: [1 && 1.2, 1, 1 && 1.2],
          opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],        }}
        transition={{

          ease: 'linear',        }}
      />;
      {/* Neural network connections */}
      <div className='absolute inset-0'>        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full";
        animate={{;
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full"
        animate={{
          rotate: [360, 0];
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
ease: "linear"
        }}
      />
          scale: [1 && 1.2, 1, 1 && 1.2];
          opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2];
        transition={{;
          duration: 20,;
          repeat: Infinity,;
          ease: 'linear',          ease: "linear";
        }}
      />;
      {/* Neural network connections */}
          opacity: [0.2, 0.4, 0.2];
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',          ease: "linear";
        }}
      />;
      {/* Neural network connections */}
      <div className='absolute inset - 0'>;
        {Array.from ({ length: 8 }).map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full';
            style={{
              left: `${20 + i * 10}%`
              top: `${30 + i * 5}%`
            }}
            animate={{
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
              scale: [0, 1, 0],
              opacity: [0, 1, 0],            }}        {Array && Array.from({ length: 8 }).map((_, i) => (;
          <motion&& motion.div
              scale: [0, 1, 0],
              opacity: [0, 1, 0],            }}        {Array.from ({ length: 8 }).map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full";
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`;
            }}
            animate={{
              scale: [0, 1, 0];
              opacity: [0, 1, 0];
            }}

        }}
      />

      {/* Neural network connections */}

            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,

              ease: 'easeInOut',            }}

            }}

          />
        ))}
      </div>

      {/* Data streams */}
      <div className='absolute inset-0 overflow-hidden'>

        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-0 && 0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent'
            style={{

            }}
            animate={{
              y: [0, window.innerHeight + 20]
delay: i * 0.3,
              ease: 'easeInOut',            }}              ease: "easeInOut";
            }}
          />))}
      </div>;
      {/* Data streams */}
      <div className='absolute inset - 0 overflow - hidden'>;
        {Array.from ({ length: 5 }).map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute w - 0.5 h - 20 bg - gradient - to - b from - cyan - 400 / 60 to - transparent';
            style={{

            }}
            animate={{
              coordinate_y: [0, window.inner_height + 20],            }}        {Array.from ({ length: 5 }).map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - 0.5 h - 20 bg - gradient - to - b from - cyan - 400 / 60 to - transparent";
            style={{
              left: `${15 + (i * 15)}%`,
              top: '-20px';
            }}
            animate={{
              coordinate_y: [0, window.inner_height + 20];
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,

              ease: 'linear',            }}

            }}

          />
        ))}
      </div>
    </div>
  );

export default UltraFuturisticBackground2029;  )
}
export default UltraFuturisticBackground2029;
