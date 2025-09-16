
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

    // Initialize particles
    const initParticles = () => {
      for (let i = 0; i < 100 * intensity; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: Math.random() * 100,
          maxLife: 100,
        });
      }
    };

    // Initialize neural network
    const initNeuralNetwork = () => {
      for (let i = 0; i < 20 * intensity; i++) {
        neuralNodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: [],
          activation: Math.random()
        });
      }

      // Create connections
        const numConnections = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < numConnections; j++) {
          const targetIndex = Math.floor(Math.random() * neuralNodes.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
      });
    };

    // Initialize entanglement lines
    const initEntanglementLines = () => {
      for (let i = 0; i < 15 * intensity; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;
        
        entanglementLines.push({
          x1,
          y1,
          x2,
          y2,
          strength: Math.random(),
          life: Math.random() * 100
        });
      }
    };

    initParticles();
    initNeuralNetwork();
    initEntanglementLines();

    // Animation loop
    const animate = () => {

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        if (particle.type === 'quantum') {
          ctx.shadowColor = 'lime';
          ctx.shadowBlur = 6;
        }

        ctx.fill();
        ctx.restore();

        // Remove dead particles
        if (particle.life <= 0) {
        }
      });

      // Draw entanglement lines
        line.life--;
        const alpha = line.life / 100;
        
        ctx.save();
        ctx.globalAlpha = alpha * 0.6;
        ctx.lineWidth = 2;
        ctx.shadowColor = 'cyan';
        ctx.shadowBlur = 5;
        
        ctx.beginPath();
        ctx.stroke();
        ctx.restore();

        if (line.life <= 0) {
        }
      });

      // Draw neural network
        node.activation = Math.sin(Date.now() * 0.001 + i) * 0.5 + 0.5;
        
        // Draw connections
        node.connections.forEach(connectionIndex => {
          const targetNode = neuralNodes[connectionIndex];
          if (targetNode) {
            const strength = (node.activation + targetNode.activation) / 2;
            ctx.save();
            ctx.globalAlpha = strength * 0.4;
            ctx.lineWidth = strength * 2;
            ctx.shadowColor = 'magenta';
            ctx.shadowBlur = 3;
            
            ctx.beginPath();
          }
        });

        // Draw node
        ctx.save();
        ctx.globalAlpha = node.activation;
        ctx.shadowColor = 'magenta';
        ctx.shadowBlur = 8;
        
        ctx.beginPath();
        ctx.fill();
        ctx.restore();
      });

      // Add new particles
      if (particles.length < 100 * intensity) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: 100,
          maxLife: 100,
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {

  // Mouse move handler for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          animate={{
            rotate: 360,
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
          animate={{
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-20 border border-green-400/30"
          }}
          transition={{
            duration: 12,
            repeat: -1,
            ease: "linear"
          }}
        />
      </div>

      {/* Energy waves */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
          animate={{
          }}
          transition={{
            duration: 15,
            repeat: -1,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
          animate={{
          }}
          transition={{
            duration: 20,
            repeat: -1,
            ease: "linear"
          }}
        />
      </div>

      {/* Holographic matrix effect */}
      <div className="absolute inset-0">
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
            style={{ left: `${(i * 5) % 100}%` }}
            animate={{
            }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: -1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Cyberpunk grid */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)]"
          style={{
            backgroundSize: '50px 50px'
          }}
          animate={{
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2034;