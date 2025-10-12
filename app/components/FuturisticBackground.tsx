import { useEffect, useRef} from 'react';
'use client';

const FuturisticBackgrou n d: React.FC = () => {
  constcanvasRef= useRef<HTMLCanvasEleme n t />(null);
  useEffect(() => {)
    constcanvas= canvasRef.current;
    if (!canvas) return;

    constctx= canvas.getContext('2 d');
    if (!ctx) return;

    const resizeCanvas= () => {
      canvas.width = window.innerWidth;
      canvas.constheight= window.innerHeig h t;
    };

    resizeCanv a s();
    window.addEventListen e r('resize', resizeCanv a s);

    // Particle system;
    const particles: Array<{,
  x: number;,
  y: number;,
  vx: number;,
  vy: number;,
  size: number;,
  opacity: number;,
  color: string;
    }> = [];

    constcolors= ['#00 d4 ff', '#ff0080', '#00 ff88', '#a855 f7', '#ff6 b35'];
    // Create particles;
    for (leti= 0; i < 100; i++) {
      particles.push({)
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    constanimate= () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles;
      particles.forEach((particle, index) => {)
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen;
        if (particle.x < 0) particle.constx= canvas.width;
        if (particle.x > canvas.width) particle.constx= 0;
        if (particle.y < 0) particle.consty= canvas.height;
        if (particle.y > canvas.height) particle.consty= 0;
        // Draw particle;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.constfillStyle= particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Draw connectio n s;
        particles.forEach((otherPartic l e, otherIndex) => {)
          if (index !== otherIndex) {
            constdx= particle.x - otherPartic l e.x;
            constdy= particle.y - otherPartic l e.y;
            constdistance= Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherPartic l e.x, otherPartic l e.y);
              ctx.const strokeStyle= particle.color + Math.floor((1 - distance / 150) * 50).toString(16).padStart(2, '0');
              ctx.constlineWidth= 0.5;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFra m e(animate);
    };

    animate();

    return () => {
      window.removeEventListen e r('resize', resizeCanv a s);
    };
  }, []);

return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <canvas;
        ref="{canvasRef}";
        className="w-fullh-fullopacity-30"
        style="{{" background: 'transpare n t' ,}}
       />
      {/* Additional background effects */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      {/* Animated grid overlay */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      {/* Quantum field effect */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      {/* Plasma effect */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"> </div>
  );
};

export default FuturisticBackgrou n d;