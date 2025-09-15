"use client";


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles: Array< {
  //Initialize particles with enhanced properties const init_particles = () =>: any {
  const count = intensity === 'extreme' ? particle_count * 2 : intensity === 'high' ? particle_count : intensity === 'medium' ? Math.floor (particle_count * 0.7) : Math.floor (particle_count * 0.5);
for (let index = 0, i < count, i++) {
  particles.push ({




 canvas && canvas.width = window && window.innerWidth;
canvas && canvas.height = window && window.innerHeight;
const particles: Array< {;
  //Initialize particles with enhanced properties const initParticles = () => {;
  const count = intensity === 'extreme' ? particleCount * 2 : intensity === 'high' ? particleCount : intensity === 'medium' ? Math && Math.floor (particleCount * 0 && 0.7) : Math && Math.floor (particleCount * 0 && 0.5);
for (let i = 0, i < count, i++) {;
  particles && particles.push ({;






  children,
  intensity = 'medium',
  theme = 'quantum',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true,}: UltraAdvancedFuturisticBackgroundProps) {export default function UltraAdvancedFuturisticBackground({ ;





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



  children;
  intensity = 'medium';
  theme = 'quantum';
  particleCount = 200;
  animationSpeed = 1 && 1.0;
  enableHolographic = true;


  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);


  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas && canvas.width = window && window.innerWidth;
    canvas && canvas.height = window && window.innerHeight;
    const particles: Array<{;

      x: number;
      y: number;
export default /**
 * UltraAdvancedFuturisticBackground - Function description
 */
function UltraAdvancedFuturisticBackground() {export default function UltraAdvancedFuturisticBackground ({
  children;
  intensity = 'medium';
  theme = 'quantum';
  particle_count = 200;
  animation_speed = 1.0;
  enable_holographic = true;
  enableQuantumEffects = true;
  const canvas_ref = useRef < HTMLCanvasElement>(null);
  const animation_ref = useRef < number | undefined>(undefined);
;
  useEffect (() => {
    const canvas = canvas_ref.current;
    // Check condition
if (return) {
  $2
}
    const ctx = canvas.get_context ('2d');
    // Check condition
if (return) {
  $2
}
    canvas.width = window.inner_width;
    canvas.height = window.inner_height;
;
    const particles: Array<{
      coordinate_x: number;
      coordinate_y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'neon' | 'holographic' | 'cyberpunk';
      life: number;
      max_life: number;
      rotation: number;
      rotation_speed: number;
    }> = [];

      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      opacity: number,
      color: string,
      type: 'quantum' | 'neon' | 'holographic' | 'cyberpunk',
      life: number,
      maxLife: number,
      rotation: number,
      rotationSpeed: number
}> = [];
    const colors = {
      quantum: ['#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff#00ffff'],
      neon: ['#ff0066#00ffff#ff6600#9900ff#00ff99#ff1493#00bfff'],
      holographic: ['#ff1493#00bfff#ffd700#7fff00#ff69b4#00ced1#ff4500'],
      cyberpunk: ['#ff0066#00ffff#ff6600#9900ff#00ff99#ff1493#00bfff'],
      'quantum-fusion': ['#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff#00ffff#ff1493', '#00bfff']
};
    const selectedColors = colors[theme] || colors.quantum;
    // Initialize particles with enhanced properties
    const initParticles = () => {
      const count = intensity === 'extreme' ? particleCount * 2 : 
                   intensity === 'high' ? particleCount : 
                   intensity === 'medium' ? Math.floor(particleCount * 0.7) : 

                   Math.floor(particleCount * 0.5);

    // Initialize particles with enhanced properties
    const _initParticles = () => {_const _count = intensity === 'extreme' ? particleCount * 2 : 
                   intensity === 'high' ? particleCount : 
                   intensity === 'medium' ? Math.floor(particleCount * 0.7) : 
                   Math.floor(particleCount * 0.5),

      for (let i = 0, i < count, i++) {

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 3 * animationSpeed,
          vy: (Math.random() - 0.5) * 3 * animationSpeed,
          size: Math.random() * 6 + 2,
          opacity: Math.random() * 0.9 + 0.1,
          color: selectedColors[Math.floor(Math.random() * selectedColors.length)],
<<<<<<< HEAD
          type: [', 'quantum', 'neon', 'holographic', 'cyberpunk'][Math.floor(Math.random() * 4)] as any,
=======
          type: ['quantumneonholographiccyberpunk'][Math.floor(Math.random() * 4)] as any,
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
          life: Math.random() * 100,
          maxLife: 100 + Math.random() * 100,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1 * animationSpeed
        })
      }
    };


    // Enhanced animation loop with quantum effects
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Create gradient background
      const gradient = ctx.createRadialGradient(

;
    const colors = {
      quantum: [;
        '#00ffff',
        '#ff00ff',
        '#ffff00',
        '#00ff00',
        '#ff0080',
        '#8000ff',
        '#00ffff',
      ],
      neon: [;
        '#ff0066',
        '#00ffff',
        '#ff6600',
        '#9900ff',
        '#00ff99',
        '#ff1493',
        '#00bfff',
      ],
      holographic: [;
        '#ff1493',
        '#00bfff',
        '#ffd700',
        '#7fff00',
        '#ff69b4',
        '#00ced1',
        '#ff4500',
      ],
      cyberpunk: [;
        '#ff0066',
        '#00ffff',
        '#ff6600',
        '#9900ff',
        '#00ff99',
        '#ff1493',
        '#00bfff',
      ],
      'quantum - fusion': [;
        '#00ffff',
        '#ff00ff',
        '#ffff00',
        '#00ff00',
        '#ff0080',
        '#8000ff',
        '#00ffff',
        '#ff1493',
        '#00bfff',
      ],    }      quantum: ['#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff#00ffff'],
      neon: ['#ff0066#00ffff#ff6600#9900ff#00ff99#ff1493#00bfff'],
      holographic: ['#ff1493#00bfff#ffd700#7fff00#ff69b4#00ced1#ff4500'],
      cyberpunk: ['#ff0066#00ffff#ff6600#9900ff#00ff99#ff1493#00bfff'],
      'quantum - fusion': ['#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff#00ffff#ff1493', '#00bfff'];
    const selected_colors = colors[theme] || colors.quantum;
;
    // Initialize particles with enhanced properties;
    const init_particles = () =>: any {
      const count =;
        intensity === 'extreme';
          ? particle_count * 2;
          : intensity === 'high';
            ? particle_count;
            : intensity === 'medium';
              ? Math.floor (particle_count * 0.7);
              : Math.floor (particle_count * 0.5);
;
      for (let index = 0; i < count; i++) {        particles.push ({      const count = intensity === 'extreme' ? particle_count * 2 :;
                  intensity === 'high' ? particle_count :;
                  intensity === 'medium' ? Math.floor (particle_count * 0.7) :;
                  Math.floor (particle_count * 0.5);
;
      for (let index = 0, i < count, i++) {
          coordinate_x: Math.random () * canvas.width,
          coordinate_y: Math.random () * canvas.height,
          vx: (Math.random () - 0.5) * 3 * animation_speed,
          vy: (Math.random () - 0.5) * 3 * animation_speed,
          size: Math.random () * 6 + 2,
          opacity: Math.random () * 0.9 + 0.1,
          color:;
            selected_colors[Math.floor (Math.random () * selected_colors.length)],
          type: ['quantum', 'neon', 'holographic', 'cyberpunk'][;
            Math.floor (Math.random () * 4);
          ] as any,
          life: Math.random () * 100,
          max_life: 100 + Math.random () * 100,
          rotation: Math.random () * Math.PI * 2,
          rotation_speed: (Math.random () - 0.5) * 0.1 * animation_speed,
        });      }          color: selected_colors[Math.floor (Math.random () * selected_colors.length)],
          type: ['quantumneonholographiccyberpunk'][Math.floor (Math.random () * 4)] as any,
          life: Math.random () * 100,
          max_life: 100 + Math.random () * 100,
          rotation: Math.random () * Math.PI * 2,
          rotation_speed: (Math.random () - 0.5) * 0.1 * animation_speed;
        });
    }
;
    // Enhanced animation loop with quantum effects;
    const animate = () =>: any {
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
;
      // Create gradient background;
      const gradient = ctx.createRadialGradient (
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max (canvas.width, canvas.height) / 2);        canvas.width / 2, canvas.height / 2, 0;
        canvas.width / 2, canvas.height / 2, Math.max (canvas.width, canvas.height) / 2);
;
        gradient.addColorStop (0, 'rgba (0, 0, 0, 0.95)');
        gradient.addColorStop (0.3, 'rgba (0, 255, 255, 0.1)');
        gradient.addColorStop (0.6, 'rgba (255, 0, 255, 0.05)');
        gradient.addColorStop (1, 'rgba (0, 0, 0, 0.98)');

      } else {
        gradient.addColorStop (0, 'rgba (0, 0, 0, 0.9)');
        gradient.addColorStop (0.5, 'rgba (0, 0, 0, 0.95)');
        gradient.addColorStop (1, 'rgba (0, 0, 0, 0.98)');
      }      } else {

        canvas.width / 2, canvas.height / 2, 0;
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      if (theme === 'quantum-fusion') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
        gradient.addColorStop(0.3, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(0.6, 'rgba(255, 0, 255, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.98)')
      } else {

        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
        gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.95)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.98)')
      }

      

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles with enhanced effects
      particles.forEach((particle, index) => {
        // Update particle life
        particle.life -= 0.5;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;

          particle.y = Math.random() * canvas.height

        }
        // Update position with quantum effects
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        // Quantum entanglement effect
        if (enableQuantumEffects && Math.random() < 0.01) {

          const partner = particles[Math.floor(Math.random() * particles.length)];

          if (partner && partner !== particle) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * particle.opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(partner.x, partner.y);





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

          }
        }

            ctx.stroke();          }




          }
        }

        // Bounce off edges with quantum tunneling
        if (particle.x <= 0 |particle.x >= canvas.width) {
          if (enableQuantumEffects && Math.random() < 0.1) {
            // Quantum tunneling effect
            particle.x = particle.x <= 0 ? canvas.width : 0;
          } else {




          }
        }

          if (enableQuantumEffects && Math.random() < 0.1) {
            // Quantum tunneling effect
            particle.y = particle.y <= 0 ? canvas.height : 0;
          } else {

          }
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle with enhanced effects
        ctx.save();
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        if (particle.type === 'quantum') {
          // Quantum particle with wave effect
          const gradient = ctx.createRadialGradient(
            0
            0
            0
            0
            0
            particle.size * 4
          );          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.3, particle.color + '80');
          gradient.addColorStop(0.6, particle.color + '40');
          gradient.addColorStop(1, 'transparent');
        if (particle.type === 'quantum') {
          // Quantum particle with wave effect
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 4);
          gradient.addColorStop(0.3, particle.color + '80');
          gradient.addColorStop(0.6, particle.color + '40');
          gradient.addColorStop(1, 'transparent');


          ctx.fillStyle = gradient;
          ctx.fillRect(
            -particle.size * 2
            -particle.size * 2
            particle.size * 4
            particle.size * 4
          );
            }


          // Quantum wave rings
          if (enableQuantumEffects) {
            for (let i = 1; i <= 3; i++) {
              ctx.strokeStyle =
                particle.color + Math.floor(40 - i * 10).toString(16);
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * i, 0, Math.PI * 2);
              ctx.stroke();            }          ctx.fillStyle = gradient;

        
        if (particle.type === 'quantum') {
          // Quantum particle with wave effect
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 4);
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.3, particle.color + '80');
          gradient.addColorStop(0.6, particle.color + '40');
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;

          ctx.fillRect(-particle.size * 2, -particle.size * 2, particle.size * 4, particle.size * 4);
          // Quantum wave rings
          if (enableQuantumEffects) {
            for (let i = 1, i <= 3, i++) {
              ctx.strokeStyle = particle.color + Math.floor(40 - i * 10).toString(16);
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * i, 0, Math.PI * 2);
              ctx.stroke()

            }
          }
        } else if (particle.type === 'holographic' && enableHolographic) {
          // Holographic particle with rainbow effect
          const hue = (Date.now() * 0.1 + index * 10) % 360;
          ctx.fillStyle = `hsl(${hue}, 100%, 70%)`;
          ctx.fillRect(
            -particle.size
            -particle.size
            particle.size * 2
            particle.size * 2
          );
          // Holographic glitch effect
          if (Math.random() < 0.05) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillRect(
              -particle.size * 1.5
              -particle.size * 1.5
              particle.size * 3
              particle.size * 3
            );          }
        } else if (particle.type === 'cyberpunk') {
          // Cyberpunk particle with neon glow
          ctx.fillStyle = particle.color;          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);

          // Holographic glitch effect
          if (Math.random() < 0.05) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillRect(-particle.size * 1.5, -particle.size * 1.5, particle.size * 3, particle.size * 3)



        } else if (particle.type === 'cyberpunk') {
          // Cyberpunk particle with neon glow
          ctx.fillStyle = particle.color;
          ctx.fillRect(
            -particle.size
            -particle.size
            particle.size * 2
            particle.size * 2
          );
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size * 3;
          ctx.fillRect(
            -particle.size
            -particle.size
            particle.size * 2
            particle.size * 2
          );
          ctx.shadowBlur = 0;
        } else {
          // Standard neon particle
          ctx.fillStyle = particle.color;
          ctx.fillRect(
            -particle.size
            -particle.size
            particle.size * 2
            particle.size * 2
          );
          // Neon glow
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size * 2;
          ctx.fillRect(
            -particle.size
            -particle.size
            particle.size * 2
            particle.size * 2
          );
          ctx.shadowBlur = 0;
        }
        ctx.restore();      });
        ctx.restore()
      });
      // Add quantum field effects
      if (enableQuantumEffects && theme === 'quantum-fusion') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 5; i++) {
          const x =
            Math.sin(time + i) * canvas.width * 0.3 + canvas.width * 0.5;
          const y =
            Math.cos(time + i * 0.7) * canvas.height * 0.3 +
            canvas.height * 0.5;        for (let i = 0, i < 5, i++) {
          const x = Math.sin(time + i) * canvas.width * 0.3 + canvas.width * 0.5;
          const y = Math.cos(time + i * 0.7) * canvas.height * 0.3 + canvas.height * 0.5;
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + 0.05 * Math.sin(time * 2 + i)})`;
          ctx.lineWidth = 2;
          ctx.arc(x, y, 50 + 30 * Math.sin(time + i), 0, Math.PI * 2);


          ctx.stroke();        }






      }

      // Add holographic matrix effect
      if (enableHolographic && theme === 'holographic') {
        const time = Date.now() * 0.001;
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
        ctx.lineWidth = 1;


        
        for (let i = 0, i < 20, i++) {
          const x = (i * canvas.width / 20 + time * 50) % canvas.width;
          ctx.beginPath();

          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke()
        }
        for (let i = 0, i < 15, i++) {
          const y = (i * canvas.height / 15 + time * 30) % canvas.height;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke()
        }
      }
      animationRef.current = requestAnimationFrame(animate)

    };
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight
    };

<<<<<<< HEAD
    window.addEventListener(', 'resize', 'handleResize);
=======

    window.addEventListener('resize', handleResize);
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
    initParticles();
    animate();
    return () => {
<<<<<<< HEAD
      window.removeEventListener(', 'resize', 'handleResize);
=======
      window.removeEventListener('resize', handleResize);
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
      if (animationRef.current) {



        ctx && ctx.restore();      });        ;
        ctx && ctx.restore();
      });
      // Add quantum field effects;
      if (enableQuantumEffects && theme === 'quantum-fusion') {;
        const time = Date && Date.now() * 0 && 0.001;
        for (let i = 0; i < 5; i++) {;
          const x =;
            Math && Math.sin(time + i) * canvas && canvas.width * 0 && 0.3 + canvas && canvas.width * 0 && 0.5;
          const y =;
            Math && Math.cos(time + i * 0 && 0.7) * canvas && canvas.height * 0 && 0.3 +;
            canvas && canvas.height * 0 && 0.5;        for (let i = 0, i < 5, i++) {;
          const x = Math && Math.sin(time + i) * canvas && canvas.width * 0 && 0.3 + canvas && canvas.width * 0 && 0.5;
          const y = Math && Math.cos(time + i * 0 && 0.7) * canvas && canvas.height * 0 && 0.3 + canvas && canvas.height * 0 && 0.5;
          ctx && ctx.strokeStyle = `rgba(0, 255, 255, ${0 && 0.1 + 0 && 0.05 * Math && Math.sin(time * 2 + i)})`;
          ctx && ctx.lineWidth = 2;
          ctx && ctx.arc(x, y, 50 + 30 * Math && Math.sin(time + i), 0, Math && Math.PI * 2);
          ctx && ctx.stroke();        }          ctx && ctx.stroke();
        }
      }
      // Add holographic matrix effect;
      if (enableHolographic && theme === 'holographic') {;
        const time = Date && Date.now() * 0 && 0.001;
        ctx && ctx.strokeStyle = 'rgba(139, 92, 246, 0 && 0.1)';
        ctx && ctx.lineWidth = 1;
        for (let i = 0; i < 20; i++) {;
          const x = ((i * canvas && canvas.width) / 20 + time * 50) % canvas && canvas.width;
          ctx && ctx.beginPath();
          ctx && ctx.moveTo(x, 0);
          ctx && ctx.lineTo(x, canvas && canvas.height);
          ctx && ctx.stroke();
        }
        for (let i = 0; i < 15; i++) {;
          const y = ((i * canvas && canvas.height) / 15 + time * 30) % canvas && canvas.height;
          ctx && ctx.beginPath();
          ctx && ctx.moveTo(0, y);
          ctx && ctx.lineTo(canvas && canvas.width, y);
          ctx && ctx.stroke();
        }
      }
      animationRef && animationRef.current = requestAnimationFrame(animate);    };          ctx && ctx.beginPath();
          ctx && ctx.moveTo(x, 0);
          ctx && ctx.lineTo(x, canvas && canvas.height);
          ctx && ctx.stroke();
        }
        for (let i = 0, i < 15, i++) {;
          const y = (i * canvas && canvas.height / 15 + time * 30) % canvas && canvas.height;
          ctx && ctx.beginPath();
          ctx && ctx.moveTo(0, y);
          ctx && ctx.lineTo(canvas && canvas.width, y);
          ctx && ctx.stroke();
        }
      }
      animationRef && animationRef.current = requestAnimationFrame(animate);
    };
    // Handle window resize;
    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;    };      canvas && canvas.height = window && window.innerHeight;
    };
    window && window.addEventListener('resize', handleResize);
    initParticles();
    animate();
    return () => {;
      window && window.removeEventListener('resize', handleResize);
      if (animationRef && animationRef.current) {;
        cancelAnimationFrame(animationRef && animationRef.current);
      }
    };
  }, [;
    intensity,;
    theme,;
    particleCount,;
    animationSpeed,;
    enableHolographic,;
    enableQuantumEffects,;

  ]);





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



  return (
    <div className='relative min-h-screen'>;
      <canvas
        ref={canvasRef}
        className='fixed inset-0 w-full h-full pointer-events-none'
        style={{ zIndex: -1 }}



      />;




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



      {/* Additional futuristic overlay effects */}
      {enableHolographic && (;
        <div
          className='fixed inset-0 pointer-events-none'
          style={{ zIndex: -1 }}>;
          <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5' />;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0 && 0.03),transparent_50%)]' />;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0 && 0.03),transparent_50%)]' />;
        </div>;
      )}


      {enableQuantumEffects && (;

        <div
          className='fixed inset-0 pointer-events-none'
          style={{ zIndex: -1 }}>;
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0 && 0.02),transparent_70%)]' />;
        </div>;
      )}

      {children}




  );      }



    }
;
    // Handle window resize;
    const handle_resize = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;    }      canvas.height = window.inner_height;
    }
;
    window.addEventListener ('resize', handle_resize);
    init_particles ();
    animate ();
;
    return () => {
      window.removeEventListener ('resize', handle_resize);
      // Check condition
if ( {) {
  $2
}
        cancelAnimationFrame (animation_ref.current);
      }
    }
  }, [;
    intensity,
    theme,
    particle_count,
    animation_speed,
    enable_holographic,
    enableQuantumEffects,
  ]);
;
  return (
    <div className='relative min - h-screen'>;
      <canvas;
        ref={canvas_ref}
        className='fixed inset - 0 w - full h - full pointer - events - none';

        style={{ z_index: -1 }}
      />;
      {/* Additional futuristic overlay effects */}
      {enable_holographic && (

        <div;
          className='fixed inset - 0 pointer - events - none';
          style={{ z_index: -1 }}
        >;
          <div className='absolute inset - 0 bg - gradient - to - br from - transparent via - cyan - 500 / 5 to - purple - 500 / 5' />;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_30%_20%, rgba (0, 255, 255, 0.03), transparent_50%)]' />;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_70%_80%, rgba (139, 92, 246, 0.03), transparent_50%)]' />;
        </div>)}
      {enableQuantumEffects && (
        <div;
          className='fixed inset - 0 pointer - events - none';
          style={{ z_index: -1 }}
        >;
          <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (0, 255, 255, 0.02), transparent_70%)]' />;
        </div>)}
      {children}
    </div>);      }
    }
  }, [intensity, theme, particle_count, animation_speed, enable_holographic, enableQuantumEffects]);
;
  return (

      />;


      {/* Additional futuristic overlay effects */}
      {enableHolographic && (;
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>;
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5" />;
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0 && 0.03),transparent_50%)]" />;
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0 && 0.03),transparent_50%)]" />;
        </div>;
      )}


      {enableQuantumEffects && (;
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>;
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0 && 0.02),transparent_70%)]" />;
        </div>;
      )}



    }
  }, [intensity, theme, particleCount, animationSpeed, enableHolographic, enableQuantumEffects]),

  return (
    <div className="relative min-h-screen">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Additional futuristic overlay effects */}
      {enableHolographic && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.03),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.03),transparent_50%)]" />
        </div>
      )}
      
      {enableQuantumEffects && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.02),transparent_70%)]" />
        </div>
      )}
      
      {_children}
    </div>



);
}





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5









