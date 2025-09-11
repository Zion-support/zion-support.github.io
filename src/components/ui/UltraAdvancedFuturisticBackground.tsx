import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children?: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'matrix';
}

export const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  children,
  intensity = 'medium',
  theme = 'quantum'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Quantum particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
      type: 'quantum' | 'neon' | 'holographic' | 'matrix';
    }> = [];

    const intensityMultiplier = {
      low: 0.5,
      medium: 1,
      high: 1.5
    }[intensity];

    const createParticle = () => {
      const types = ['quantum', 'neon', 'holographic', 'matrix'] as const;
      const type = types[Math.floor(Math.random() * types.length)];
      
      let color: string;
      switch (type) {
        case 'quantum':
          color = `hsl(${180 + Math.random() * 60}, 70%, 60%)`;
          break;
        case 'neon':
          color = `hsl(${280 + Math.random() * 80}, 80%, 70%)`;
          break;
        case 'holographic':
          color = `hsl(${120 + Math.random() * 60}, 60%, 70%)`;
          break;
        case 'matrix':
          color = `hsl(${0}, 0%, ${60 + Math.random() * 40}%)`;
          break;
      }

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * intensityMultiplier,
        vy: (Math.random() - 0.5) * 2 * intensityMultiplier,
        size: Math.random() * 3 + 1,
        life: 1,
        maxLife: Math.random() * 100 + 50,
        color,
        type
      };
    };

    // Initialize particles
    for (let i = 0; i < 100 * intensityMultiplier; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Remove dead particles and create new ones
        if (particle.life > particle.maxLife) {
          particles[index] = createParticle();
        }

        // Draw particle with glow effect
        const alpha = 1 - (particle.life / particle.maxLife);
        ctx.save();
        
        // Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 3;
        
        // Draw particle
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add quantum entanglement lines
        if (particle.type === 'quantum' && Math.random() < 0.1) {
          particles.forEach(otherParticle => {
            if (otherParticle !== particle && otherParticle.type === 'quantum') {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) + 
                Math.pow(particle.y - otherParticle.y, 2)
              );
              if (distance < 100) {
                ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.3})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            }
          });
        }

        ctx.restore();
      });

      // Draw quantum field lines
      if (theme === 'quantum') {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 20; i++) {
          const x = (i / 20) * canvas.width;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x + Math.sin(Date.now() * 0.001 + i) * 50, canvas.height);
          ctx.stroke();
        }
      }

      // Draw matrix rain effect
      if (theme === 'matrix') {
        ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
        ctx.font = '12px monospace';
        for (let i = 0; i < 50; i++) {
          const x = (i * 23) % canvas.width;
          const y = (Date.now() * 0.1 + i * 20) % canvas.height;
          ctx.fillText('01', x, y);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity, theme]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Quantum Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,20,40,0.9) 50%, rgba(0,0,0,1) 100%)'
        }}
      />

      {/* Holographic Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Quantum Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 8)}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Neon Energy Waves */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40"
            style={{
              top: `${40 + (i * 20)}%`
            }}
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Quantum Field Distortion */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Quantum Noise Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;