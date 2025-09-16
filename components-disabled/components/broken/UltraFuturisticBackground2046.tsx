import { motion } from 'framer-motion';

const UltraFuturisticBackground2046: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'neural' | 'data' | 'energy';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.life = Math.random() * 100;
        this.maxLife = 100;
        
        this.type = types[Math.floor(Math.random() * types.length)] as any;
        
        switch (this.type) {
          case 'quantum':
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Add some quantum randomness
        if (Math.random() < 0.01) {
          this.vx += (Math.random() - 0.5) * 0.5;
          this.vy += (Math.random() - 0.5) * 0.5;
        }

        // Limit velocity
      }

      draw() {
        if (!ctx) return;
        
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        switch (this.type) {
          case 'quantum':
            // Quantum particles with wave function
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Wave function rings
            for (let i = 1; i <= 3; i++) {
              ctx.beginPath();
              ctx.strokeStyle = this.color;
              ctx.lineWidth = 1;
              ctx.globalAlpha = alpha * (0.3 - i * 0.1);
              ctx.stroke();
            }
            break;
            
          case 'neural':
            // Neural network nodes
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Neural connections
            particlesRef.current.forEach(particle => {
              if (particle.type === 'neural' && particle !== this) {
                const distance = Math.sqrt(
                  ctx.strokeStyle = this.color;
                  ctx.lineWidth = 0.5;
                  ctx.globalAlpha = alpha * (1 - distance / 100);
                  ctx.stroke();
                }
              }
            });
            break;
            
          case 'data':
            // Data streams
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.stroke();
            break;
            
          case 'energy':
            // Energy particles with glow effect
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Glow effect
            ctx.fillStyle = gradient;
            ctx.fill();
            break;
        }
        
        ctx.restore();
      }

      isDead() {
        return this.life <= 0;
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 150; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas with fade effect
        particle.update();
        particle.draw();
        
        // Remove dead particles and add new ones
        if (particle.isDead()) {
          particlesRef.current[index] = new Particle();
        }
      });

      // Draw quantum field lines

      animationRef.current = requestAnimationFrame(animate);
    };

    // Quantum field lines
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        const x = (i / 20) * width;
        const y = Math.sin(time + i * 0.5) * 50 + height / 2;
        
        
        // Add wave interference
        for (let j = 0; j < height; j += 10) {
          const waveY = y + Math.sin(time * 2 + i * 0.3) * 30;
        }
        
        ctx.stroke();
      }
    };

    // Neural network grid
      ctx.lineWidth = 0.5;
      
      const gridSize = 50;
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          const offset = Math.sin(time + x * 0.01) * Math.cos(time + y * 0.01) * 10;
          
          ctx.beginPath();
          ctx.stroke();
        }
      }
    };

    // Start animation
    initParticles();
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/30 to-black"
        animate={{
          background: [
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Quantum particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-cyan-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
          <motion.div
            key={`square-${i}`}
            className="absolute w-24 h-24 border border-purple-500/20 rotate-45"
            style={{
              left: `${Math.random() * 100}%`,
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "linear",
          />
        ))}
      </div>
      
      {/* Energy waves */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"
          animate={{
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent"
          animate={{
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        />
      </div>
      
      {/* Quantum interference patterns */}
      <div className="absolute inset-0">
          <motion.div
            key={`interference-${i}`}
            className="absolute inset-0 opacity-5"
            style={{
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
          />
        ))}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2046;