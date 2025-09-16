
interface UltraFuturisticBackground2036Props {
  variant?: 'default' | 'quantum' | 'space' | 'ai' | 'cyber';
  intensity?: 'low' | 'medium' | 'high';
}

export default function UltraFuturisticBackground2036({ 
  intensity = 'medium' 
}: UltraFuturisticBackground2036Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    let animationFrameId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      type: 'quantum' | 'neon' | 'energy' | 'data';
    }> = [];

    const colors = {
    };

    const intensityMultiplier = {
      low: 0.5,
      medium: 1,
      high: 1.5
    };

    const variantConfig = {
    };

    const config = variantConfig[variant];
    const multiplier = intensityMultiplier[intensity];

    // Initialize particles
    for (let i = 0; i < config.particleCount * multiplier; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * config.speed * multiplier,
        vy: (Math.random() - 0.5) * config.speed * multiplier,
        size: Math.random() * config.size * multiplier,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[variant][Math.floor(Math.random() * colors[variant].length)],
      });
    }

    const animate = () => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow effect
        ctx.save();
        
        // Create glow effect
        const glowGradient = ctx.createRadialGradient(
        ctx.fill();
        
        // Draw core particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.fill();
        
        ctx.restore();

        // Draw connections between nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
          );
          
          if (distance < 100 * multiplier) {
            const opacity = (100 - distance) / 100 * 0.3 * multiplier;
            ctx.stroke();
          }
        });
      });

      // Add floating geometric shapes
      if (variant === 'quantum' || variant === 'ai') {
      }

      // Add data streams for AI variant
      if (variant === 'ai') {
      }

      // Add space elements for space variant
      if (variant === 'space') {
      }

      animationRef.current = requestAnimationFrame(animate);
    };

      const time = Date.now() * 0.001;
      
      for (let i = 0; i < 3; i++) {
        const x = canvas.width * (0.2 + i * 0.3);
        const y = canvas.height * (0.3 + Math.sin(time + i) * 0.1);
        const size = 30 * multiplier;
        
        ctx.save();
        ctx.closePath();
        ctx.stroke();
        
        // Draw inner quantum dots
        ctx.fill();
        
        ctx.restore();
      }
    };

      const time = Date.now() * 0.001;
      
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * (0.1 + i * 0.2);
        const startY = canvas.height * 0.1;
        const endY = canvas.height * 0.9;
        
        ctx.save();
        
        // Animated data stream
        const streamY = startY + (endY - startY) * ((time * 0.5 + i * 0.2) % 1);
        
        ctx.beginPath();
        
        ctx.restore();
      }
    };

      const time = Date.now() * 0.001;
      
      // Draw stars
      for (let i = 0; i < 50 * multiplier; i++) {
        const x = (i * 12345) % canvas.width;
        const y = (i * 67890) % canvas.height;
        const brightness = (Math.sin(time + i) + 1) * 0.5;
        
        ctx.save();
        ctx.fill();
        ctx.restore();
      }
      
      // Draw nebula
      const nebulaGradient = ctx.createRadialGradient(
      ctx.fill();
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid overlay for cyber variant */}
        {variant === 'cyber' && (
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        )}
        
        {/* Quantum field lines */}
        {variant === 'quantum' && (
          <div className="absolute inset-0">
              <motion.div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
                style={{
                  left: `${(i + 1) * 12.5}%`,
                  transform: 'translateX(-50%)'
                }}
                animate={{
              />
            ))}
          </div>
        )}
        
        {/* AI neural network overlay */}
        {variant === 'ai' && (
          <div className="absolute inset-0">
              <motion.div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
                style={{
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2036;