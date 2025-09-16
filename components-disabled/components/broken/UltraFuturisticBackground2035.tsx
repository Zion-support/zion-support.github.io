  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
    canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
    if (ctx) {
    }

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
        const maxLife = Math.random() * 200 + 100;
        
        particles.push({
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
        });
      }
    };

    // Get color based on particle type
    const getColorForType = (type: string) => {
      switch (type) {
        case 'quantum':
        default:
          return '#8b5cf6';
      }
    };

    // Update and draw particles with enhanced effects
    const updateParticles = () => {
        // Update particle life
        particle.life--;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width / (window.devicePixelRatio || 1);
          particle.y = Math.random() * canvas.height / (window.devicePixelRatio || 1);
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.y = 0;


        // Draw connections with enhanced effects
        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 120 : 180);
        if (maxDistance > 0) {
        }
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(updateParticles);
      }
    };

    // Enhanced particle drawing with different types
      ctx.save();
      ctx.globalAlpha = opacity;

      switch (particle.type) {
        case 'quantum':
          break;
      }

      ctx.restore();
    };

    // Quantum particle with wave-like effects
      const time = Date.now() * 0.001;
      const wave = Math.sin(time + particle.x * 0.01) * 0.5;
      
      ctx.beginPath();
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Add quantum glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    // Hologram particle with transparency and distortion
      const time = Date.now() * 0.002;
      const distortion = Math.sin(time + particle.y * 0.02) * 2;
      
      ctx.globalAlpha *= 0.7;
      ctx.beginPath();
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Add holographic effect
      ctx.globalAlpha *= 0.5;
      ctx.beginPath();
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    // Neon particle with bright glow
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      // Neon glow
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    // Energy particle with pulsing effect
      const time = Date.now() * 0.003;
      const pulse = Math.sin(time) * 0.3 + 0.7;
      const size = particle.size * pulse;
      
      ctx.beginPath();
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Energy field effect
      ctx.globalAlpha *= 0.3;
      ctx.beginPath();
      ctx.fillStyle = particle.color;
      ctx.fill();
    };

    // Enhanced connection drawing with different effects
        if (currentIndex !== otherIndex) {
          const dx = particles[currentIndex].x - otherParticle.x;
          const dy = particles[currentIndex].y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const connectionOpacity = (maxDistance - distance) / maxDistance * 0.15 * opacity;
            
            // Different connection styles based on particle types
            if (particles[currentIndex].type === otherParticle.type) {
              // Same type - stronger connection
              ctx.globalAlpha = connectionOpacity * 1.5;
              ctx.strokeStyle = particles[currentIndex].color;
              ctx.lineWidth = 2;
            } else {
              // Different types - weaker connection
              ctx.globalAlpha = connectionOpacity * 0.7;
              ctx.strokeStyle = '#ffffff';
              ctx.lineWidth = 1;
            }

            ctx.beginPath();
            ctx.stroke();
          }
        }
      });
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
      canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
      if (ctx) {
      }
      initParticles();
    };

    initParticles();
    updateParticles();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Canvas for animated particles */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ filter: 'blur(0.5px)' }}
        />

        {/* Floating neon orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"
          animate={{
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20"
          animate={{
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Quantum energy waves */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
    </>
  );
}