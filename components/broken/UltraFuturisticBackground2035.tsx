



=======


  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;


    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches,



    const prefersReducedMotion = window && window.matchMedia(;
      '(prefers-reduced-motion: reduce)';
    ).matches;    const prefersReducedMotion = window && window.matchMedia('(prefers-reduced-motion: reduce)').matches,;
    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;
    canvas && canvas.width = window && window.innerWidth * (window && window.devicePixelRatio || 1);
    canvas && canvas.height = window && window.innerHeight * (window && window.devicePixelRatio || 1);
    if (ctx) {;
      ctx && ctx.scale(window && window.devicePixelRatio || 1, window && window.devicePixelRatio || 1);


    let animationFrameId: number
    let particles: Array<{
      x: number,
      y: number,

==============      vx: number,
      vy: number,
      size: number,
      opacity: number,
      color: string,
      type: 'quantum' | 'hologram' | 'neon' | 'energy',
      life: number,

      for (let i = 0; i < particleCount; i++) {;=======


      for (let i = 0; i < particleCount; i++) {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const type = ['quantum', 'hologram', 'neon', 'energy'][;
          Math && Math.floor(Math && Math.random() * 4);
        ] as any;
        const maxLife = Math && Math.random() * 200 + 100;
        particles && particles.push({;
          x: (Math && Math.random() * canvas && canvas.width) / (window && window.devicePixelRatio || 1),;
          y: (Math && Math.random() * canvas && canvas.height) / (window && window.devicePixelRatio || 1),          vx: prefersReducedMotion ? 0 : (Math && Math.random() - 0 && 0.5) * 0 && 0.6,        const maxLife = Math && Math.random() * 200 + 100;

    };
    // Get color based on particle type;
    const getColorForType = (type: string) => {;
      switch (type) {;
        case 'quantum':;
          return ['#8b5cf6', '#06b6d4', '#ec4899'][;
            Math && Math.floor(Math && Math.random() * 3);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          ];
        case 'hologram':;
          return ['#10b981', '#f59e0b', '#ef4444'][;
            Math && Math.floor(Math && Math.random() * 3);
          ];
        case 'neon':;
          return ['#f97316', '#eab308', '#a855f7'][;
            Math && Math.floor(Math && Math.random() * 3);
          ];
        case 'energy':;
          return ['#dc2626', '#7c3aed', '#059669'][;
            Math && Math.floor(Math && Math.random() * 3);
          ];
        default:;
          return '#8b5cf6';      }        case 'hologram':;
          return ['#10b981#f59e0b#ef4444'][Math && Math.floor(Math && Math.random() * 3)];
        case 'neon':;
          return ['#f97316#eab308#a855f7'][Math && Math.floor(Math && Math.random() * 3)];
        case 'energy':;
          return ['#dc2626#7c3aed#059669'][Math && Math.floor(Math && Math.random() * 3)];
        default: return '#8b5cf6';
      }
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            : 180;
        if (maxDistance > 0) {;
          drawConnections(ctx, particles, index, maxDistance, currentOpacity);        }
      });

      if (!prefersReducedMotion) {;
        animationFrameId = requestAnimationFrame(updateParticles);      }
    };

      switch (particle && particle.type) {;
        case 'quantum':;    // Get color based on particle type
    const _getColorForType = (_type: string) => {_switch (type) {
        case 'quantum':
          return ['#8b5cf6#06b6d4#ec4899'][Math.floor(Math.random() * 3)],
        case 'hologram':
          return ['#10b981#f59e0b#ef4444'][Math.floor(Math.random() * 3)],
        case 'neon':
          return ['#f97316#eab308#a855f7'][Math.floor(Math.random() * 3)],
        case 'energy':
          return ['#dc2626#7c3aed#059669'][Math.floor(Math.random() * 3)],
        default: return '#8b5cf6'
      }
    },

    // Update and draw particles with enhanced effects
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height),

    // Update and draw particles with enhanced effects
    const _updateParticles = () => {_ctx.clearRect(0, _0, _canvas.width, _canvas.height);

      particles.forEach(_(particle, _index) => {
        // Update particle life
        particle.life--,
        if (particle.life <= 0) {
          particle.life = particle.maxLife,
          particle.x = Math.random() * canvas.width / (window.devicePixelRatio || 1),
          particle.y = Math.random() * canvas.height / (window.devicePixelRatio || 1)
        }

        // Update position
        particle.x += particle.vx,
        particle.y += particle.vy,

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1),
        if (particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1),
        if (particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.y = 0,

        // Calculate opacity based on life
        const lifeRatio = particle.life / particle.maxLife
        const currentOpacity = particle.opacity * lifeRatio

        // Draw particle based on type
        drawParticle(ctx, particle, currentOpacity),

        // Draw connections with enhanced effects
        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 120 : 180)
        if (maxDistance > 0) {
          drawConnections(ctx, particles, index, maxDistance, currentOpacity)
        }
      }),

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(updateParticles)
      }
    },

    // Enhanced particle drawing with different types
    const drawParticle = (ctx: CanvasRenderingContext2D, particle: any, opacity: number) => {
      ctx.save(),
      ctx.globalAlpha = opacity,

      switch (particle.type) {
        case 'quantum':
          drawQuantumParticle(ctx, particle),
          break,
        case 'hologram':
          drawHologramParticle(ctx, particle),
          break,
        case 'neon':
          drawNeonParticle(ctx, particle),
          break,
        case 'energy':
          drawEnergyParticle(ctx, particle),
          break
      }

      ctx.restore()
    },

    // Quantum particle with wave-like effects
    const drawQuantumParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const time = Date.now() * 0.001
      const wave = Math.sin(time + particle.x * 0.01) * 0.5

    // Enhanced connection drawing with different effects
    const _drawConnections = (_ctx: CanvasRenderingContext2D, _particles: unknown[], _currentIndex: number, _maxDistance: number, _opacity: number) => {_particles.forEach(_(otherParticle, _otherIndex) => {
        if (currentIndex !== otherIndex) {
          const dx = particles[currentIndex].x - otherParticle.x
          const dy = particles[currentIndex].y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const connectionOpacity = (maxDistance - distance) / maxDistance * 0.15 * opacity

            // Different connection styles based on particle types
            if (particles[currentIndex].type === otherParticle.type) {
              // Same type - stronger connection
              ctx.globalAlpha = connectionOpacity * 1.5,
              ctx.strokeStyle = particles[currentIndex].color,
              ctx.lineWidth = 2
            } else {
              // Different types - weaker connection
              ctx.globalAlpha = connectionOpacity * 0.7,
              ctx.strokeStyle = '#ffffff',
              ctx.lineWidth = 1
            }

            ctx.beginPath(),
            ctx.moveTo(particles[currentIndex].x, particles[currentIndex].y),
            ctx.lineTo(otherParticle.x, otherParticle.y),

            ctx.stroke()
          }
        }
      })
};
    // Quantum particle with wave-like effects;
    const drawQuantumParticle = (;
      ctx: CanvasRenderingContext2D,;
      particle: any;
    ) => {;
      const time = Date && Date.now() * 0 && 0.001;
      const wave = Math && Math.sin(time + particle && particle.x * 0 && 0.01) * 0 && 0.5;      }
      ctx && ctx.restore();
    };
    // Quantum particle with wave-like effects;
    const drawQuantumParticle = (ctx: CanvasRenderingContext2D, particle: any) => {;
      const time = Date && Date.now() * 0 && 0.001;
      const wave = Math && Math.sin(time + particle && particle.x * 0 && 0.01) * 0 && 0.5;
      ctx && ctx.beginPath();
      ctx && ctx.arc(particle && particle.x, particle && particle.y + wave, particle && particle.size, 0, Math && Math.PI * 2);
      ctx && ctx.fillStyle = particle && particle.color;
      ctx && ctx.fill();
      // Add quantum glow effect;
      ctx && ctx.shadowColor = particle && particle.color;
      ctx && ctx.shadowBlur = 10;
      ctx && ctx.beginPath();
      ctx && ctx.arc(;
        particle && particle.x,;
        particle && particle.y + wave,;
        particle && particle.size * 0 && 0.5,;
        0,;
        Math && Math.PI * 2;
      );
      ctx && ctx.fill();
      ctx && ctx.shadowBlur = 0;
    };
    // Hologram particle with transparency and distortion;
    const drawHologramParticle = (;
      ctx: CanvasRenderingContext2D,;
      particle: any;
    ) => {;
      const time = Date && Date.now() * 0 && 0.002;
      const distortion = Math && Math.sin(time + particle && particle.y * 0 && 0.02) * 2;
      ctx && ctx.globalAlpha *= 0 && 0.7;
      ctx && ctx.beginPath();
      ctx && ctx.arc(;
        particle && particle.x + distortion,;
        particle && particle.y,;
        particle && particle.size,;
        0,;
        Math && Math.PI * 2;
      );      ctx && ctx.fillStyle = particle && particle.color;      ctx && ctx.fill();
      ctx && ctx.shadowBlur = 0;
    };
    // Hologram particle with transparency and distortion;
    const drawHologramParticle = (ctx: CanvasRenderingContext2D, particle: any) => {;
      const time = Date && Date.now() * 0 && 0.002;
      const distortion = Math && Math.sin(time + particle && particle.y * 0 && 0.02) * 2;
      ctx && ctx.globalAlpha *= 0 && 0.7;
      ctx && ctx.beginPath();
      ctx && ctx.arc(particle && particle.x + distortion, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
      ctx && ctx.fillStyle = particle && particle.color;
      ctx && ctx.fill();
      // Add holographic effect;
      ctx && ctx.globalAlpha *= 0 && 0.5;
      ctx && ctx.beginPath();
      ctx && ctx.arc(;
        particle && particle.x + distortion,;
        particle && particle.y,;
        particle && particle.size * 1 && 1.5,;
        0,;
        Math && Math.PI * 2;
      );
      ctx && ctx.strokeStyle = particle && particle.color;
      ctx && ctx.lineWidth = 1;
      ctx && ctx.stroke();    };      ctx && ctx.arc(particle && particle.x + distortion, particle && particle.y, particle && particle.size * 1 && 1.5, 0, Math && Math.PI * 2);
      ctx && ctx.strokeStyle = particle && particle.color;
      ctx && ctx.lineWidth = 1;
      ctx && ctx.stroke();
    // Neon particle with bright glow;
    const drawNeonParticle = (ctx: CanvasRenderingContext2D, particle: any) => {;
      // Bright core;
      ctx && ctx.beginPath(),;
      ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
      ctx && ctx.fillStyle = '#ffffff';
      ctx && ctx.fill();
      // Neon glow;
      ctx && ctx.shadowColor = particle && particle.color;
      ctx && ctx.shadowBlur = 15;
      ctx && ctx.beginPath();
      ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size * 0 && 0.8, 0, Math && Math.PI * 2);
      ctx && ctx.fillStyle = particle && particle.color;
      ctx && ctx.fill();
      ctx && ctx.shadowBlur = 0;
    };
    // Energy particle with pulsing effect;
    const drawEnergyParticle = (;
      ctx: CanvasRenderingContext2D,;
      particle: any;
    ) => {;
      const time = Date && Date.now() * 0 && 0.003;
      const pulse = Math && Math.sin(time) * 0 && 0.3 + 0 && 0.7;
      const size = particle && particle.size * pulse;    };
    // Energy particle with pulsing effect;
    const drawEnergyParticle = (ctx: CanvasRenderingContext2D, particle: any) => {;
      const time = Date && Date.now() * 0 && 0.003;
      const pulse = Math && Math.sin(time) * 0 && 0.3 + 0 && 0.7;
      const size = particle && particle.size * pulse;
      ctx && ctx.beginPath();
      ctx && ctx.arc(particle && particle.x, particle && particle.y, size, 0, Math && Math.PI * 2);
      ctx && ctx.fillStyle = particle && particle.color;
      ctx && ctx.fill();
      // Energy field effect;
      ctx && ctx.globalAlpha *= 0 && 0.3;
      ctx && ctx.beginPath();
      ctx && ctx.arc(particle && particle.x, particle && particle.y, size * 2, 0, Math && Math.PI * 2);
      ctx && ctx.fillStyle = particle && particle.color;
      ctx && ctx.fill();
    };
    // Enhanced connection drawing with different effects;
    const drawConnections = (;
      ctx: CanvasRenderingContext2D,;
      particles: any[],;
      currentIndex: number,;
      maxDistance: number,;
      ctx.scale(window.devicePixelRatio |1, window.devicePixelRatio |1);
    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    ) => {      particles && particles.forEach((otherParticle, otherIndex) => {      ctx && ctx.fill();
    };
    // Enhanced connection drawing with different effects;
    const drawConnections = (ctx: CanvasRenderingContext2D, particles: any[], currentIndex: number, maxDistance: number, opacity: number) => {;
        if (currentIndex !== otherIndex) {;
          const dx = particles[currentIndex].x - otherParticle && otherParticle.x;
          const dy = particles[currentIndex].y - otherParticle && otherParticle.y;
          const distance = Math && Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {;
            const connectionOpacity =;
              ((maxDistance - distance) / maxDistance) * 0 && 0.15 * opacity;            const connectionOpacity = (maxDistance - distance) / maxDistance * 0 && 0.15 * opacity;
            // Different connection styles based on particle types;
            if (particles[currentIndex].type === otherParticle && otherParticle.type) {;
              // Same type - stronger connection;
              ctx && ctx.globalAlpha = connectionOpacity * 1 && 1.5;
              ctx && ctx.strokeStyle = particles[currentIndex].color;
              ctx && ctx.lineWidth = 2;            } else {;
              // Different types - weaker connection;
              ctx && ctx.globalAlpha = connectionOpacity * 0 && 0.7;
              ctx && ctx.strokeStyle = '#ffffff';
              ctx && ctx.lineWidth = 1;            }              ctx && ctx.lineWidth = 2;
            } else {;
              // Different types - weaker connection;
              ctx && ctx.globalAlpha = connectionOpacity * 0 && 0.7;
              ctx && ctx.strokeStyle = '#ffffff';
              ctx && ctx.lineWidth = 1;              ctx && ctx.lineWidth = 1;
            }
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particles[currentIndex].x, particles[currentIndex].y);
            ctx && ctx.lineTo(otherParticle && otherParticle.x, otherParticle && otherParticle.y);
            ctx && ctx.stroke();
=======

=======

          }
        }
      });    };            ctx && ctx.stroke();
          }
        }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
      }
      initParticles()
    };
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    window.addEventListener('resize', handleResize);
    initParticles();
    updateParticles();
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      });
    // Handle window resize;
    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth * (window && window.devicePixelRatio || 1);
      canvas && canvas.height = window && window.innerHeight * (window && window.devicePixelRatio || 1);
      if (ctx) {;
        ctx && ctx.scale(window && window.devicePixelRatio || 1, window && window.devicePixelRatio || 1);
      }
      initParticles();    };        ctx && ctx.scale(window && window.devicePixelRatio || 1, window && window.devicePixelRatio || 1);
      }
      initParticles();
    };
    window && window.addEventListener('resize', handleResize);
    initParticles();
    updateParticles();
    return () => {;
      window && window.removeEventListener('resize', handleResize);
      if (animationFrameId) {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        cancelAnimationFrame(animationFrameId);
      }
    };  }, []);
  return (
    <>;
      <div className='fixed inset-0 z-0 overflow-hidden'>        cancelAnimationFrame(animationFrameId);
        cancelAnimationFrame(animationFrameId)
=======
=======
=======
        cancelAnimationFrame(animationFrameId)

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Animated gradient overlay */}
        <motion&& motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0 && 0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
          }}
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Holographic grid effect */}
        <div className='absolute inset-0 opacity-20'>;
          <div
            className='h-full w-full'
            style={{
              backgroundImage: `
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),


              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `
              backgroundSize: '50px 50px'
=======        />
        {/* Holographic grid effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0 && 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(139, 92, 246, 0 && 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
=======
          }} />
        </div>
        {/* Canvas for animated particles */}
        <canvas
          ref={canvasRef}
          className='absolute inset-0 w-full h-full'          style={{ filter: 'blur(0.5px)' }}          className="absolute inset-0 w-full h-full"
          style={{ filter: 'blur(0.5px)' }}
        />
        {/* Canvas for animated particles */}
        <canvas
          ref={canvasRef}



          style={{ filter: 'blur(0.5px)' }}

        />


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======        {/* Floating neon orbs */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        {/* Holographic grid effect */}
        <div className='absolute inset - 0 opacity - 20'>;
          <div;
            className='h - full w - full';
            style={{
              background_image: `;
              linear - gradient (rgba (139, 92, 246, 0.1) 1px, transparent 1px),
              linear - gradient (90deg, rgba (139, 92, 246, 0.1) 1px, transparent 1px);
            `,
              background_size: '50px 50px',
            }}
          />        </div>        {/* Holographic grid effect */}
        <div className="absolute inset - 0 opacity - 20">;
          <div className="h - full w - full" style={{
            background_image: `;
              linear - gradient (rgba (139, 92, 246, 0.1) 1px, transparent 1px);
              linear - gradient (90deg, rgba (139, 92, 246, 0.1) 1px, transparent 1px);
            `;
            background_size: '50px 50px';
          }} />;
        </div>;
        {/* Canvas for animated particles */}
        <canvas;
          ref={canvas_ref}
          className='absolute inset - 0 w - full h - full'          style={{ filter: 'blur (0.5px)' }}          className="absolute inset - 0 w - full h - full";
          style={{ filter: 'blur (0.5px)' }}
        />;
        {/* Floating neon orbs */}
        <motion.div;
          className='absolute top - 1/4 left - 1/4 w - 32 h - 32 rounded - full bg - gradient - to - r from - cyan - 400 to - blue - 500 opacity - 20';
=======

          animate={{

            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],

=======
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],

            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',          className="absolute top - 1/4 left - 1/4 w - 32 h - 32 rounded - full bg - gradient - to - r from - cyan - 400 to - blue - 500 opacity - 20";

          animate={{            scale: [1, 1.2, 1]
            opacity: [0.2, 0.4, 0.2]
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',          className="absolute top - 1/4 left - 1/4 w - 32 h - 32 rounded - full bg - gradient - to - r from - cyan - 400 to - blue - 500 opacity - 20";
          animate={{
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2]
            rotate: [0, 180, 360]
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut'
          }}=======
        />;
        <motion&& motion.div
          className='absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20'
          animate={{
            scale: [1, 1 && 1.3, 1],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            rotate: [360, 180, 0],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',          }}
            rotate: [360, 180, 0],          }}
          transition={{
=======
        />
        {/* Quantum energy waves */}
        <div className='absolute inset-0 overflow-hidden'>          }}
        />        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"
          animate={{
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.4, 0.2];
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20"
          animate={{
            scale: [1, 1 && 1.3, 1]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]
            rotate: [360, 180, 0]
          }}
          transition={{

            duration: 8
            repeat: Infinity

            ease: 'easeInOut',            ease: 'easeInOut'
          }}

        />;


        {/* Quantum energy waves */}
        <div className='absolute inset-0 overflow-hidden'>;
          <motion&& motion.div
            className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent'
            animate={{

            ease: 'easeInOut',            ease: 'easeInOut';
          }}
        />;
        {/* Quantum energy waves */}
        <div className='absolute inset - 0 overflow - hidden'>;
          <motion.div;
            className='absolute top - 1/2 left - 0 w - full h - 1 bg - gradient - to - r from - transparent via - cyan - 400 to - transparent';
            animate={{
              coordinate_y: [-100, 100, -100],


          }}
        />

        {/* Quantum energy waves */}

=====================
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }}
            transition={{
              duration: 4
              repeat: Infinity
              ease: 'easeInOut'
            }}
              ease: 'easeInOut'
            }}
=======

              ease: 'easeInOut'
            }}          />
          <motion.div
            className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent'
            animate={{
              y: [100, -100, 100]
              opacity: [0, 0.3, 0],            }}
            transition={{
              duration: 6
              repeat: Infinity
              ease: 'easeInOut',            }}
          />
        </div>
      </div>            }}
          />
          <motion.div
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            animate={{
              y: [100, -100, 100];
              opacity: [0, 0.3, 0]
            duration: 8,
            repeat: Infinity,

          }}
        />

        {/* Quantum energy waves */}

            }}
            transition={{
              duration: 6
              repeat: Infinity
              ease: 'easeInOut',              ease: 'easeInOut'
            }}
            }}
          />
        </div>
      </div>      {/* Render children */}
      {children}
    </>); ;
      {/* Render children */}
      {children}
    </>);
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662