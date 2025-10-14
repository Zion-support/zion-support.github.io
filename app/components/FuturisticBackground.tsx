import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    window.addEventListener('resize', resizeCanvas);

    // Animated particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      };
    };

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
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
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

        {/* Floating Neon Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl animate-pulse"></div></div>""""
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl animate-pulse delay-1000"></div></div>""""
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse delay-2000"></div></div>""""
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse delay-3000"></div></div>"""
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }
            ></div>
))}
        </div>

        {/* Gradient Overlay */}"""
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/50"></div></div>"""
      </div>
    </div>
  )
export default FuturisticBackground

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;
