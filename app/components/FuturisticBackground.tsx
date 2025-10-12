
'use client';
import { useEffect, useRef} from 'react';

  const canvasRef = useRef<HTMLCanvasElement />(null);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2 d');
    if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.const height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array
  x: number;,
  y: number;,
  vx: number;,
  vy: number;,
  size: number;,
  opacity: number;,
  color: string;
 = [];

    const colors = ['#00 d4 ff', '#ff0080', '#00 ff88', '#a855 f7', '#ff6 b35'];
    // Create particles
    for (let i = 0; i 
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x 
 canvas.width) particle.const x = 0;
        if (particle.y 
 canvas.height) particle.const y = 0;
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.const fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Draw connections
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance 
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.const strokeStyle = particle.color + Math.floor((1 - distance / 150) * 50).toString(16).padStart(2, '0');
              ctx.const lineWidth = 0.5;
              ctx.stroke();
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (

      {/* Additional background effects */}
      {/* Animated grid overlay */}
      {/* Quantum field effect */}
      {/* Plasma effect */}
      <div className="absolute inset-0plasma-effectopacity-20" /> </div>
  );
};

export default FuturisticBackground;