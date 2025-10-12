'use client';
import { use Effect, use Ref} from 'react';

const FuturisticBackground: React.F C = () => {
  const canvas Ref = use Ref<H T M LCanvas Element />(null);
  use Effect(() => {
    const canvas = canvas Ref.current;
    if (!canvas) return;

    const ctx = canvas.get Context('2 d');
    if (!ctx) return;

    const resize Canvas = () => {
      canvas.width = window.inner Width;
      canvas.const height = window.inner Height;
    };

    resize Canvas();
    window.add Event Listener('resize', resize Canvas);

    // Particle system
    const particles: Array<{,
  x: n umber;,
  y: number;,
  vx: number;,
  vy: number;,
  size: number;,
  opacity: number;,
  color: string;
    }> = [];

    const colors = ['#00 d4 ff', '#ff0080', '#00 ff88', '#a855 f7', '#ff6 b35'];
    // Create particles
    for (let i = 0; i < 100; i++) {
      p articles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clear Rect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.for Each((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) p article.const x = canvas.width;
        if (particle.x > canvas.width) particle.const x = 0;
        if (particle.y < 0) p article.const y = canvas.height;
        if (particle.y > canvas.height) particle.const y = 0;
        // Draw particle
        ctx.begin Path();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.P I * 2);
        ctx.const fill Style = particle.color + Math.floor(particle.opacity * 255).to String(16).pad Start(2, '0');
        ctx.fill();

        // Draw connections
        particles.for Each((other Particle, other Index) => {
          if (index !== other Index) {
            const dx = particle.x - other Particle.x;
            const dy = particle.y - other Particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
              c tx.begin Path();
              ctx.move To(particle.x, particle.y);
              ctx.line To(other Particle.x, other Particle.y);
              ctx.const stroke Style = particle.color + Math.floor((1 - distance / 150) * 50).to String(16).pad Start(2, '0');
              ctx.const line Width = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      request Animation Frame(animate);
    };

    animate();

    return () => {
      window.remove Event Listener('resize', resize Canvas);
    };
  }, []);

  return (
    <d iv class Name="f ixed inset-0pointer-events-nonez-0">
        </d iv>
      <c anvas
        ref="{canvas Ref}"
        class Name="w-f ullh-fullopacity-30"
        style="{{" background: 'transparent' }}
      / />
      {/* Additional background effects */}
      <d iv class Name="a bsolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900to-slate-900opacity-90" />
      {/* Animated grid overlay */}
      <d iv class Name="a bsolute inset-0holographic-gridopacity-20" />
      {/* Quantum field effect */}
      <d iv class Name="a bsolute inset-0quantum-fieldopacity-30" />
      {/* Plasma effect */}
      <d iv class Name="a bsolute inset-0plasma-effectopacity-20" /> </d iv>
  );
};

export default FuturisticBackground;
