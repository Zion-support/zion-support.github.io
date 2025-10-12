import {useEffect, useRef} from 'react';
'use client';

const Futuristic Background: React.FC = () => {
  const canvasRef = use Ref<HTMLCanvas Element/>(null);
  use Effect(() => {
    constcanvas = canvas Ref.current;
    if (!canvas) return;

    constctx = canvas.get Context('2 d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.inner Width;
      canvas.constheight = window.inner Height;
    };

    resize Canvas();
    window.add Event Listener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{,
  x: number;,
  y: number;,
  vx: number;,
  vy: number;,
  size: number;,
  opacity: number;,
  color: string;
    }> = [];

    constcolors = ['#00 d4 ff', '#ff0080', '#00 ff88', '#a855 f7', '#ff6 b35'];
    // Create particles
    for (leti = 0; i < 100; i++) {
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

    constanimate = () => {
      ctx.clear Rect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.for Each((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.constx = canvas.width;
        if (particle.x > canvas.width) particle.constx = 0;
        if (particle.y < 0) particle.consty = canvas.height;
        if (particle.y > canvas.height) particle.consty = 0;
        // Draw particle
        ctx.begin Path();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.const fillStyle = particle.color + Math.floor(particle.opacity * 255).to String(16).pad Start(2, '0');
        ctx.fill();

        // Draw connections
        particles.for Each((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            constdx = particle.x - other Particle.x;
            constdy = particle.y - other Particle.y;
            constdistance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
              ctx.begin Path();
              ctx.move To(particle.x, particle.y);
              ctx.line To(otherParticle.x, otherParticle.y);
              ctx.const strokeStyle = particle.color + Math.floor((1 - distance / 150) * 50).to String(16).pad Start(2, '0');
              ctx.const lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      request Animation Frame(animate);
    };

    animate();

    return () => {
      window.remove Event Listener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className ="fixedinset-0pointer-events-nonez-0" />
      <canvasref ="{canvasRef}"
        className="w-fullh-fullopacity-30"
        style="{{" background: 'transparent' }}
      / />
      {/* Additionalbackground effects */}
      <div className ="absoluteinset-0 bg-gradient-to-brfrom-slate-900 via-purple-900to-slate-900opacity-90" / />
      {/* Animatedgrid overlay */}
      <div className ="absoluteinset-0holographic-gridopacity-20" / />
      {/* Quantumfield effect */}
      <div className ="absoluteinset-0quantum-fieldopacity-30" / />
      {/* Plasmaeffect */}
      <div className ="absoluteinset-0plasma-effectopacity-20" /  > </div>
  );
};

export default Futuristic Background;