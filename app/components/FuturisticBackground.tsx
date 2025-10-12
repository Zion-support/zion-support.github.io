import { useEffect, useRef } from 'react';

const FuturisticBackground: React.FC = () => {
  canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    canvas = canvasRef.current;
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    if (!ctx) return;

    resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    colors = ['#00d4ff', '#ff0080', '#00ff88', '#a855f7', '#ff6b35'];
    
    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            dx = particle.x - otherParticle.x;
            dy = particle.y - otherParticle.y;
            distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = particle.color + Math.floor((1 - distance / 150) * 50).toString(16).padStart(2, '0');
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixe d inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-ful l h-full opacity-30"
        style={{ background: 'transparent' }}
      />
      {/* Additional background effects */}
      <div className="absolut e inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-90" />
      {/* Animated grid overlay */}
      <div className="absolut e inset-0 holographic-grid opacity-20" />
      {/* Quantum field effect */}
      <div className="absolut e inset-0 quantum-field opacity-30" />
      {/* Plasma effect */}
      <div className="absolut e inset-0 plasma-effect opacity-20" />
    </div>
  );
};

export default FuturisticBackground;