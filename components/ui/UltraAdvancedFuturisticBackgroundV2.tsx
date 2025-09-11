
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let animationFrameId: number;
let particles: Array< {
const UltraAdvancedFuturisticBackgroundV2: React.FC<
  UltraAdvancedFuturisticBackgroundV2Props
> = ({ children, className = '' }) => {  const canvasRef = useRef<HTMLCanvasElement>(null);const UltraAdvancedFuturisticBackgroundV2: React.FC<UltraAdvancedFuturisticBackgroundV2Props> = ({
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  children;
  className = ''
}) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);


<<<<<<< HEAD
<<<<<<< HEAD
  children;
  className = ''
}) => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
 canvas && canvas.width = window && window.innerWidth;
canvas && canvas.height = window && window.innerHeight;
let animationFrameId: number;
let particles: Array< {;



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    let animationFrameId: number;
    let particles: Array<{;
      x: number;
      y: number;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
canvas.width = window.inner_width;
canvas.height = window.inner_height;
let animationFrameId: number;
let particles: Array< {
const UltraAdvancedFuturisticBackgroundV2: React.FC<;
  UltraAdvancedFuturisticBackgroundV2Props;
> = ({ children, class_name = '' }) => {  const canvas_ref = useRef < HTMLCanvasElement>(null);const UltraAdvancedFuturisticBackgroundV2: React.FC < UltraAdvancedFuturisticBackgroundV2Props> = ({
  children;
  class_name = '';
}) => {
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
    let animationFrameId: number;
    let particles: Array<{
      coordinate_x: number;
      coordinate_y: number;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
      max_life: number;
    }> = [];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    let animationFrameId: number,
    let particles: Array<{
      x: number,
      y: number,
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    const colors = [;
      '#00ffff',
      '#ff00ff',
      '#ffff00',
      '#00ff00',
      '#ff0080',
      '#8000ff',
      '#ff8000',
      '#0080ff',
      '#ff0080',
      '#80ff00',    ];    let particles: Array<{
      coordinate_x: number,
      coordinate_y: number,

<<<<<<< HEAD
<<<<<<< HEAD
    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

    let animationFrameId: number
    let particles: Array<{
      x: number,
      y: number,

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,

      for (let i = 0, i < 150, i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: Math.random() * 100,
<<<<<<< HEAD
<<<<<<< HEAD
          maxLife: 100
});      }          maxLife: 100
      maxLife: number;
    }> = [];
    const colors = [
      '#00ffff'
      '#ff00ff'
      '#ffff00'
      '#00ff00'
      '#ff0080'
      '#8000ff'
      '#ff8000'
      '#0080ff'
      '#ff0080'
      '#80ff00',    ];    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      life: number
      maxLife: number
    }> = [];
    const colors = [
      '#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff#ff8000#0080ff', '#ff0080#80ff00'
    ];
    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {        particles.push({      for (let i = 0, i < 150, i++) {
        particles.push({
          x: Math.random() * canvas.width
          y: Math.random() * canvas.height
          vx: (Math.random() - 0.5) * 2
          vy: (Math.random() - 0.5) * 2
          size: Math.random() * 3 + 1
          color: colors[Math.floor(Math.random() * colors.length)]
          life: Math.random() * 100
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          maxLife: 100
        });      }          maxLife: 100
        })
      }
    }
    // Update and draw particles
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Create gradient background
      const gradient = ctx.createRadialGradient(
<<<<<<< HEAD
<<<<<<< HEAD
        canvas.width / 2
        canvas.height / 2
        0
        canvas.width / 2
        canvas.height / 2
        canvas.width / 2      );        canvas.width / 2, canvas.height / 2, 0;
=======

        canvas.width / 2, canvas.height / 2, 0;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        canvas.width / 2, canvas.height / 2, 0;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.5, 'rgba(20, 20, 40, 0.6)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        // Bounce off edges
        if (particle.x <= 0 |particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 |particle.y >= canvas.height) particle.vy *= -1;
        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
<<<<<<< HEAD
<<<<<<< HEAD
          particle.color = colors[Math.floor(Math.random() * colors.length)];        }          particle.color = colors[Math.floor(Math.random() * colors.length)]
=======

          particle.color = colors[Math.floor(Math.random() * colors.length)]

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          particle.color = colors[Math.floor(Math.random() * colors.length)]

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    const colors = [;
      '#00ffff',;
      '#ff00ff',;
      '#ffff00',;
      '#00ff00',;
      '#ff0080',;
      '#8000ff',;
      '#ff8000',;
      '#0080ff',;
      '#ff0080',;
      '#80ff00',    ];    let particles: Array<{;
      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      life: number,;
      maxLife: number;
    }> = [];
    const colors = [;
      '#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff#ff8000#0080ff', '#ff0080#80ff00';
    ];
    // Initialize particles;
    const initParticles = () => {;
      particles = [];
      for (let i = 0; i < 150; i++) {        particles && particles.push({      for (let i = 0, i < 150, i++) {;
        particles && particles.push({;
          x: Math && Math.random() * canvas && canvas.width,;
          y: Math && Math.random() * canvas && canvas.height,;
          vx: (Math && Math.random() - 0 && 0.5) * 2,;
          vy: (Math && Math.random() - 0 && 0.5) * 2,;
          size: Math && Math.random() * 3 + 1,;
          color: colors[Math && Math.floor(Math && Math.random() * colors && colors.length)],;
          life: Math && Math.random() * 100,;
          maxLife: 100,;
        });      }          maxLife: 100;
        });
      }
    };
    // Update and draw particles;
    const updateParticles = () => {;
      ctx && ctx.clearRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Create gradient background;
      const gradient = ctx && ctx.createRadialGradient(;
        canvas && canvas.width / 2,;
        canvas && canvas.height / 2,;
        0,;
        canvas && canvas.width / 2,;
        canvas && canvas.height / 2,;
        canvas && canvas.width / 2      );        canvas && canvas.width / 2, canvas && canvas.height / 2, 0;
        canvas && canvas.width / 2, canvas && canvas.height / 2, canvas && canvas.width / 2;
      );
      gradient && gradient.addColorStop(0, 'rgba(0, 0, 0, 0 && 0.8)');
      gradient && gradient.addColorStop(0 && 0.5, 'rgba(20, 20, 40, 0 && 0.6)');
      gradient && gradient.addColorStop(1, 'rgba(0, 0, 0, 0 && 0.9)');
      ctx && ctx.fillStyle = gradient;
      ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Update and draw particles;
      particles && particles.forEach((particle, index) => {;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        particle && particle.life--;
        // Bounce off edges;
        if (particle && particle.x <= 0 || particle && particle.x >= canvas && canvas.width) particle && particle.vx *= -1;
        if (particle && particle.y <= 0 || particle && particle.y >= canvas && canvas.height) particle && particle.vy *= -1;
        // Reset particle if it dies;
        if (particle && particle.life <= 0) {;
          particle && particle.x = Math && Math.random() * canvas && canvas.width;
          particle && particle.y = Math && Math.random() * canvas && canvas.height;
          particle && particle.life = particle && particle.maxLife;
          particle && particle.color = colors[Math && Math.floor(Math && Math.random() * colors && colors.length)];        }          particle && particle.color = colors[Math && Math.floor(Math && Math.random() * colors && colors.length)];
        }
        // Draw particle;
        const alpha = particle && particle.life / particle && particle.maxLife;
        ctx && ctx.globalAlpha = alpha;
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
        // Draw connections;
        particles && particles.forEach((otherParticle, otherIndex) => {;
          if (index !== otherIndex) {;
            const distance = Math && Math.sqrt(;
              Math && Math.pow(particle && particle.x - otherParticle && otherParticle.x, 2) +;
                Math && Math.pow(particle && particle.y - otherParticle && otherParticle.y, 2)            );              Math && Math.pow(particle && particle.x - otherParticle && otherParticle.x, 2) + ;
              Math && Math.pow(particle && particle.y - otherParticle && otherParticle.y, 2);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            );
            if (distance < 100) {;
              ctx && ctx.strokeStyle = `rgba(0, 255, 255, ${0 && 0.1 * (1 - distance / 100)})`;
              ctx && ctx.lineWidth = 1;
              ctx && ctx.beginPath();
              ctx && ctx.moveTo(particle && particle.x, particle && particle.y);
              ctx && ctx.lineTo(otherParticle && otherParticle.x, otherParticle && otherParticle.y);
              ctx && ctx.stroke();
              Math.pow(particle.x - otherParticle.x, 2) + 
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Math.pow(particle.x - otherParticle.x, 2) +
                Math.pow(particle.y - otherParticle.y, 2)            );              Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
            );
            if (distance < 100) {
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
<<<<<<< HEAD
<<<<<<< HEAD
      });
              ctx.stroke();
            }
          }
        });      });              ctx.stroke()
            }
          }
        })
=======
<<<<<<< HEAD
              ctx.stroke()
            }
          }
        });      });              ctx && ctx.stroke();
            }
          }

      });


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Draw quantum matrix overlay
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD
      // Vertical lines
=======

      
      // Vertical lines
      for (let x = 0, x < canvas.width, x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke()
      }
      
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Horizontal lines
      for (let y = 0, y < canvas.height, y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke()
      }
<<<<<<< HEAD
      // Draw holographic circles
      ctx.globalAlpha = 0.05;
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();      }
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();      }
      // Draw holographic circles
      ctx.globalAlpha = 0.05;        ctx.stroke()
      }
      // Draw holographic circles
      ctx.globalAlpha = 0.05;
      for (let i = 0; i < 5; i++) {
        const centerX =
          canvas.width / 2 + Math.sin(Date.now() * 0.001 + i) * 100;
        const centerY =
          canvas.height / 2 + Math.cos(Date.now() * 0.001 + i) * 100;
        const radius = 100 + Math.sin(Date.now() * 0.002 + i) * 50;
=======

      // Draw holographic circles
      ctx.globalAlpha = 0.05;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      for (let i = 0, i < 5, i++) {
        const centerX = canvas.width / 2 + Math.sin(Date.now() * 0.001 + i) * 100;
        const centerY = canvas.height / 2 + Math.cos(Date.now() * 0.001 + i) * 100;
        const radius = 100 + Math.sin(Date.now() * 0.002 + i) * 50;
<<<<<<< HEAD
      }
      animationFrameId = requestAnimationFrame(updateParticles)
    };
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      animationFrameId = requestAnimationFrame(updateParticles);    };        ctx.stroke()
      }
      animationFrameId = requestAnimationFrame(updateParticles)
=======

        
        ctx.strokeStyle = `hsl(${180 + i * 60}, 100%, 50%)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke()

      }
      animationFrameId = requestAnimationFrame(updateParticles)

    };


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
<<<<<<< HEAD
      initParticles();    };      initParticles()
    }
=======

      initParticles()
    };


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    window.addEventListener('resize', handleResize);
    initParticles();
    updateParticles();
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
<<<<<<< HEAD
        cancelAnimationFrame(animationFrameId)

        cancelAnimationFrame(animationFrameId);
      }
    };  }, []);        cancelAnimationFrame(animationFrameId);
        cancelAnimationFrame(animationFrameId)
        cancelAnimationFrame(animationFrameId);
      }
    };  }, []);        cancelAnimationFrame(animationFrameId)
=======

        });
      // Draw quantum matrix overlay;
      ctx && ctx.globalAlpha = 0 && 0.1;
      ctx && ctx.strokeStyle = '#00ffff';
      ctx && ctx.lineWidth = 0 && 0.5;
      // Vertical lines;
      for (let x = 0; x < canvas && canvas.width; x += 50) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x, 0);
        ctx && ctx.lineTo(x, canvas && canvas.height);
        ctx && ctx.stroke();      }
      // Horizontal lines;
      for (let y = 0; y < canvas && canvas.height; y += 50) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, y);
        ctx && ctx.lineTo(canvas && canvas.width, y);
        ctx && ctx.stroke();      }
      // Draw holographic circles;
      ctx && ctx.globalAlpha = 0 && 0.05;        ctx && ctx.stroke();
      }
      // Draw holographic circles;
      ctx && ctx.globalAlpha = 0 && 0.05;
      for (let i = 0; i < 5; i++) {;
        const centerX =;
          canvas && canvas.width / 2 + Math && Math.sin(Date && Date.now() * 0 && 0.001 + i) * 100;
        const centerY =;
          canvas && canvas.height / 2 + Math && Math.cos(Date && Date.now() * 0 && 0.001 + i) * 100;
        const radius = 100 + Math && Math.sin(Date && Date.now() * 0 && 0.002 + i) * 50;
      for (let i = 0, i < 5, i++) {;
        const centerX = canvas && canvas.width / 2 + Math && Math.sin(Date && Date.now() * 0 && 0.001 + i) * 100;
        const centerY = canvas && canvas.height / 2 + Math && Math.cos(Date && Date.now() * 0 && 0.001 + i) * 100;
        const radius = 100 + Math && Math.sin(Date && Date.now() * 0 && 0.002 + i) * 50;
        ctx && ctx.lineWidth = 2;
        ctx && ctx.beginPath();
        ctx && ctx.arc(centerX, centerY, radius, 0, Math && Math.PI * 2);
        ctx && ctx.stroke();
      }
      animationFrameId = requestAnimationFrame(updateParticles);    };        ctx && ctx.stroke();
      }
      animationFrameId = requestAnimationFrame(updateParticles);
    // Handle resize;
    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;
      initParticles();    };      initParticles();
    };
    window && window.addEventListener('resize', handleResize);
    initParticles();
    updateParticles();
    return () => {;
      window && window.removeEventListener('resize', handleResize);
      if (animationFrameId) {;

        cancelAnimationFrame(animationFrameId);
      }
    };  }, []);        cancelAnimationFrame(animationFrameId);

=======
        cancelAnimationFrame(animationFrameId)

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        cancelAnimationFrame(animationFrameId)

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }
  }, []);
  return (
<<<<<<< HEAD
<<<<<<< HEAD
            'radial-gradient(circle at center, rgba(0,0,0,0 && 0.8) 0%, rgba(20,20,40,0 && 0.6) 50%, rgba(0,0,0,0 && 0.9) 100%)',
        }}
      />;
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-10'>;
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20'
      max_life: number;
    }> = [];
;
    const colors = [;
      '#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff#ff8000#0080ff', '#ff0080#80ff00';
    ];
;
    // Initialize particles;
    const init_particles = () =>: any {
      particles = [];
      for (let index = 0; i < 150; i++) {        particles.push ({      for (let index = 0, i < 150, i++) {
        particles.push ({
          coordinate_x: Math.random () * canvas.width,
          coordinate_y: Math.random () * canvas.height,
          vx: (Math.random () - 0.5) * 2,
          vy: (Math.random () - 0.5) * 2,
          size: Math.random () * 3 + 1,
          color: colors[Math.floor (Math.random () * colors.length)],
          life: Math.random () * 100,
          max_life: 100,
        });      }          max_life: 100;
        });
      }
    }
;
    // Update and draw particles;
    const update_particles = () =>: any {
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
;
      // Create gradient background;
      const gradient = ctx.createRadialGradient (
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2      );        canvas.width / 2, canvas.height / 2, 0;
        canvas.width / 2, canvas.height / 2, canvas.width / 2);
      gradient.addColorStop (0, 'rgba (0, 0, 0, 0.8)');
      gradient.addColorStop (0.5, 'rgba (20, 20, 40, 0.6)');
      gradient.addColorStop (1, 'rgba (0, 0, 0, 0.9)');
      ctx.fill_style = gradient;
      ctx.fill_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles.for_each ((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
;
        // Bounce off edges;
        // Check condition
if (particle.vx *= -1) {
  $2
}
        // Check condition
if (particle.vy *= -1) {
  $2
}
        // Reset particle if it dies;
        // Check condition
if ( {) {
  $2
}
          particle.coordinate_x = Math.random () * canvas.width;
          particle.coordinate_y = Math.random () * canvas.height;
          particle.life = particle.max_life;
          particle.color = colors[Math.floor (Math.random () * colors.length)];        }          particle.color = colors[Math.floor (Math.random () * colors.length)];
        }
        // Draw particle;
        const alpha = particle.life / particle.max_life;
        ctx.global_alpha = alpha;
        ctx.fill_style = particle.color;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill ();
;
        // Draw connections;
        particles.for_each ((other_particle, other_index) => {
          // Check condition
if ( {) {
  $2
}
            const distance = Math.sqrt (
              Math.pow (particle.x - other_particle.x, 2) +;
                Math.pow (particle.y - other_particle.y, 2)            );              Math.pow (particle.x - other_particle.x, 2) +;
              Math.pow (particle.y - other_particle.y, 2));
            // Check condition
if ( {) {
  $2
}
              ctx.stroke_style = `rgba (0, 255, 255, ${0.1 * (1 - distance / 100)})`;
              ctx.line_width = 1;
              ctx.begin_path ();
              ctx.move_to (particle.x, particle.y);
              ctx.line_to (other_particle.x, other_particle.y);
              ctx.stroke ();
            }
          }
        });      });              ctx.stroke ();
            }
          }
        });
      // Draw quantum matrix overlay;
      ctx.global_alpha = 0.1;
      ctx.stroke_style = '#00ffff';
      ctx.line_width = 0.5;
;
      // Vertical lines;
      for (let coordinate_x = 0; x < canvas.width; x += 50) {
        ctx.begin_path ();
        ctx.move_to (x, 0);
        ctx.line_to (x, canvas.height);
        ctx.stroke ();      }
      // Horizontal lines;
      for (let coordinate_y = 0; y < canvas.height; y += 50) {
        ctx.begin_path ();
        ctx.move_to (0, y);
        ctx.line_to (canvas.width, y);
        ctx.stroke ();      }
      // Draw holographic circles;
      ctx.global_alpha = 0.05;        ctx.stroke ();
      }
      // Draw holographic circles;
      ctx.global_alpha = 0.05;
      for (let index = 0; i < 5; i++) {
        const center_x =;
          canvas.width / 2 + Math.sin (Date.now () * 0.001 + i) * 100;
        const center_y =;
          canvas.height / 2 + Math.cos (Date.now () * 0.001 + i) * 100;
        const radius = 100 + Math.sin (Date.now () * 0.002 + i) * 50;
      for (let index = 0, i < 5, i++) {
        const center_x = canvas.width / 2 + Math.sin (Date.now () * 0.001 + i) * 100;
        const center_y = canvas.height / 2 + Math.cos (Date.now () * 0.001 + i) * 100;
        const radius = 100 + Math.sin (Date.now () * 0.002 + i) * 50;
;
        ctx.line_width = 2;
        ctx.begin_path ();
        ctx.arc (center_x, center_y, radius, 0, Math.PI * 2);
        ctx.stroke ();
      }
      animationFrameId = requestAnimationFrame (update_particles);    }        ctx.stroke ();
      }
      animationFrameId = requestAnimationFrame (update_particles);
    // Handle resize;
    const handle_resize = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;
      init_particles ();    }      init_particles ();
    }
;
    window.addEventListener ('resize', handle_resize);
    init_particles ();
    update_particles ();
;
    return () => {
      window.removeEventListener ('resize', handle_resize);
      // Check condition
if ( {) {
  $2
}
        cancelAnimationFrame (animationFrameId);
      }
    }  }, []);        cancelAnimationFrame (animationFrameId);
      }
    }
  }, []);
;
  return (
    <div className={`relative min - h-screen overflow - hidden ${class_name}`}>;
      {/* Animated Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className='fixed inset - 0 w - full h - full pointer - events - none z - 0';
        style={{
          background:;
            'radial - gradient (circle at center, rgba (0, 0, 0, 0.8) 0%, rgba (20, 20, 40, 0.6) 50%, rgba (0, 0, 0, 0.9) 100%)',
        }}
      />;
      {/* Floating Geometric Shapes */}
      <div className='fixed inset - 0 pointer - events - none z - 10'>;
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 opacity - 20';
          animate={{
=======
<<<<<<< HEAD
    <div className={`relative min-h-screen overflow-hidden ${className}`}>;
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}


          animate={{

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            rotate: [0, 360],
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',      />;

      {/* Floating Geometric Shapes */}
<<<<<<< HEAD
=======
      <div className="fixed inset-0 pointer-events-none z-10">;
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20"
          animate={{
            rotate: [0, 360]
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
          }}
          transition={{

            duration: 8
            repeat: Infinity
            ease: 'easeInOut'

          }}

        />;

        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400 opacity-20'
          animate={{
            rotate: [360, 0],
            scale: [1, 0 && 0.8, 1],
            opacity: [0 && 0.1, 0 && 0.4, 0 && 0.1],          }}

          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}

        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(20,20,40,0.6) 50%, rgba(0,0,0,0.9) 100%)' }}
      />
      
=======

      {/* Floating Geometric Shapes */}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      {/* Floating Geometric Shapes */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="fixed inset - 0 pointer - events - none z - 10">;
        <motion.div;
          className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 opacity - 20";
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1];
            opacity: [0.1, 0.3, 0.1];
<<<<<<< HEAD
<<<<<<< HEAD
            }
          }
        })
      }),

      // Draw quantum matrix overlay
      ctx.globalAlpha = 0.1,
      ctx.strokeStyle = '#00ffff',
      ctx.lineWidth = 0.5,
      
      // Vertical lines
      for (let x = 0, x < canvas.width, x += 50) {
        ctx.beginPath(),
        ctx.moveTo(x, 0),
        ctx.lineTo(x, canvas.height),
        ctx.stroke()
      }
      
      // Horizontal lines
      for (let y = 0, y < canvas.height, y += 50) {
        ctx.beginPath(),
        ctx.moveTo(0, y),
        ctx.lineTo(canvas.width, y),
        ctx.stroke()
      }

      // Draw holographic circles
      ctx.globalAlpha = 0.05,
      for (let i = 0, i < 5, i++) {
        const centerX = canvas.width / 2 + Math.sin(Date.now() * 0.001 + i) * 100
        const centerY = canvas.height / 2 + Math.cos(Date.now() * 0.001 + i) * 100
        const radius = 100 + Math.sin(Date.now() * 0.002 + i) * 50

        ctx.strokeStyle = `hsl(${180 + i * 60}, 100%, 50%)`,
        ctx.lineWidth = 2,
        ctx.beginPath(),
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2),
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(updateParticles)
    },

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight,
      initParticles()
    },

    window.addEventListener('resize', handleResize),
    initParticles(),
    updateParticles(),

    return () => {
      window.removeEventListener('resize', handleResize),
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, []),

  return (
    <div className={_`relative min-h-screen overflow-hidden ${className}`}>
      {_/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className=&quot;fixed inset-0 w-full h-full pointer-events-none z-0&quot;
        style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(20,20,40,0.6) 50%, rgba(0,0,0,0.9) 100%)' }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className=&quot;fixed inset-0 pointer-events-none z-10&quot;>
        <motion.div
          className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20&quot;
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
ease: "easeInOut"
          }}
        />;
        <motion&& motion.div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ease: "easeInOut"
          }}

        />;
        <motion&& motion.div

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400 opacity-20"
        />;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 opacity - 20';
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
            opacity: [0.1, 0.4, 0.1],          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 opacity - 20";
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            duration: 6
            repeat: Infinity
            ease: 'easeInOut'

          }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        <motion&& motion.div
          className='absolute bottom-32 left-32 w-40 h-40 border border-pink-400 opacity-20'
          animate={{
            rotate: [0, 360],
            scale: [1, 1 && 1.3, 1],
            opacity: [0 && 0.1, 0 && 0.2, 0 && 0.1],          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            rotate: [360, 0];
            scale: [1, 0.8, 1];
            opacity: [0.1, 0.4, 0.1];
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
ease: "easeInOut"
          }}
        />;
        <motion&& motion.div
=======
            ease: "easeInOut"
          }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            ease: "easeInOut"
          }}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400 opacity-20"
        />;
        <motion.div;
          className='absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 opacity - 20';
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],          }}
          transition={{
            duration: 10,
            repeat: Infinity,
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(20,20,40,0.6) 50%, rgba(0,0,0,0.9) 100%)'
        }}
      />
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-10'>
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20'
          animate={{
            rotate: [0, 360]
            scale: [1, 1.2, 1]
            opacity: [0.1, 0.3, 0.1],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',      />
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20"
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1];
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400 opacity-20'
          animate={{
            rotate: [360, 0]
            scale: [1, 0.8, 1]
            opacity: [0.1, 0.4, 0.1],          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className="absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 opacity - 20";
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            duration: 10
            repeat: Infinity
            ease: 'easeInOut'

          }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        <motion&& motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400 opacity-20'
          animate={{
            rotate: [360, 0],
            scale: [1, 0 && 0.9, 1],
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 7
            repeat: Infinity
            ease: 'easeInOut',          }}          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            rotate: [0, 360];
            scale: [1, 1.3, 1];
            opacity: [0.1, 0.2, 0.1];
          }}
          transition={{

<<<<<<< HEAD
<<<<<<< HEAD
            duration: 10,
            repeat: Infinity,
ease: "easeInOut"
          }}
        />;
        <motion&& motion.div
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400 opacity-20"
        />;
        <motion.div;
          className='absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 opacity - 20';
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
            opacity: [0.1, 0.3, 0.1],          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',          }}          }}
        />;
        <motion.div;
          className="absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 opacity - 20";
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          }}
          transition={{
            duration: 7
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            rotate: [360, 0];
            scale: [1, 0.9, 1];
            opacity: [0.1, 0.3, 0.1];

<<<<<<< HEAD
            rotate: [360, 0];
            scale: [1, 0.9, 1];
            opacity: [0.1, 0.3, 0.1];
          }}
          transition={{
=======
          }}
          transition={{
<<<<<<< HEAD
            duration: 7,
            repeat: Infinity,


          }}

        />;
      </div>;


      {/* Quantum Energy Particles */}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            duration: 7,
            repeat: Infinity,

          }}


            duration: 7,
            repeat: Infinity,


=======
          }}
          transition={{

            duration: 7,
            repeat: Infinity,

          }}


=======
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}


        />
      </div>
      {/* Quantum Energy Particles */}
      <div className='fixed inset-0 pointer-events-none z-20'>



        {[...Array(20)].map((_, i) => (
          <motion.div
<<<<<<< HEAD
            key={i}
            className='absolute w - 2 h - 2 bg - cyan - 400 rounded - full';
            style={{


              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            key={i}
            className='absolute w - 2 h - 2 bg - cyan - 400 rounded - full';
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }}
            animate={{
              y: [0, -100, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0],            }}        {[...Array(20)].map((_, i) => (
<<<<<<< HEAD
      <div className="fixed inset-0 pointer-events-none z-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
              left: `${Math.random () * 100}%`,
<<<<<<< HEAD
left: `${Math.random () * 100}%`,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
      <div className="fixed inset-0 pointer-events-none z-20">
        {[...Array(20)].map((_, i) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          <motion.div
=======
              left: `${Math.random () * 100}%`,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              top: `${Math.random () * 100}%`,
            }}
            animate={{
              coordinate_y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],            }}        {[...Array (20)].map ((_, i) => (
          <motion.div;
<<<<<<< HEAD
            duration: 7
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
          }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 7,
            repeat: Infinity,

          }}

<<<<<<< HEAD
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
=======
=======
            duration: 7,
            repeat: Infinity,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          }}

        />
      </div>
      {/* Quantum Energy Particles */}
      <div className='fixed inset-0 pointer-events-none z-20'>

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w - 2 h - 2 bg - cyan - 400 rounded - full";
            style={{
<<<<<<< HEAD
<<<<<<< HEAD
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
scale: [0, 1, 0],            }}        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }}
            animate={{
              y: [0, -100, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0]
            }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              duration: 3 + Math && Math.random() * 2,
              repeat: Infinity,
              delay: Math && Math.random() * 2,

              ease: 'easeInOut',            }}              ease: "easeInOut"

<<<<<<< HEAD
<<<<<<< HEAD
            transition={{
              duration: 3 + Math && Math.random() * 2,
              repeat: Infinity,
              delay: Math && Math.random() * 2,
              ease: 'easeInOut',            }}              ease: "easeInOut"
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"

<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }}
          />;
        ))}
      </div>


=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            }}
          />;
        ))}

      </div>;


=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,


<<<<<<< HEAD
<<<<<<< HEAD
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
          />
        ))}
      </div>
              ease: 'easeInOut',            }}

            }}

          />
        ))}
      </div>

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Neural Network Connections */}
      <div className='fixed inset-0 pointer-events-none z-30'>;
        <svg className='w-full h-full'>;
          <defs>;
            <linearGradient
              id='neuralGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'>;
              <stop offset='0%' stopColor='#00ffff' stopOpacity='0 && 0.3' />;
              <stop offset='100%' stopColor='#ff00ff' stopOpacity='0 && 0.3' />            </linearGradient>      <div className="fixed inset-0 pointer-events-none z-30">;
        <svg className="w-full h-full">;
          <defs>;
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">;
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0 && 0.3" />;
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0 && 0.3" />;
          </defs>;
          {[...Array(15)].map((_, i) => (;
            <motion&& motion.line
              key={i}
              x1={Math && Math.random() * 100}
              y1={Math && Math.random() * 100}
              x2={Math && Math.random() * 100}
              y2={Math && Math.random() * 100}
              stroke='url(#neuralGradient)'
              strokeWidth='1'
              opacity='0 && 0.1'
              animate={{
<<<<<<< HEAD
<<<<<<< HEAD
                opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],
=======

                opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                strokeDasharray: [0, 100, 0],              }}              stroke="url(#neuralGradient)"

              strokeWidth="1"
              opacity="0 && 0.1"
              animate={{
                opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
                strokeDasharray: [0, 100, 0]
              transition={{
<<<<<<< HEAD
<<<<<<< HEAD
                duration: 4 + Math && Math.random() * 2,
                repeat: Infinity,
                delay: Math && Math.random() * 2,
                ease: 'easeInOut',              }}                ease: "easeInOut"
      </div>
      {/* Neural Network Connections */}
      <div className="fixed inset-0 pointer-events-none z-30">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {[...Array(15)].map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
              stroke='url(#neuralGradient)'
              strokeWidth='1'
              opacity='0.1'
              animate={{
                opacity: [0.1, 0.3, 0.1]
                strokeDasharray: [0, 100, 0],              }}              stroke="url(#neuralGradient)"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              strokeWidth="1"
              opacity="0.1"
              animate={{
                opacity: [0.1, 0.3, 0.1];
                strokeDasharray: [0, 100, 0]

              }}
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`;
            }}
            animate={{
              coordinate_y: [0, -100, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0];
            }}
            transition={{
              duration: 3 + Math.random () * 2,
              repeat: Infinity,
              delay: Math.random () * 2,
              ease: 'easeInOut',            }}              ease: "easeInOut";
            }}
          />))}
      </div>;
      {/* Neural Network Connections */}
      <div className='fixed inset - 0 pointer - events - none z - 30'>;
        <svg className='w - full h - full'>;
          <defs>;
            <linear_gradient;
              id='neural_gradient';
              x1='0%';
              y1='0%';
              x2='100%';
              y2='100%';
            >;
              <stop offset='0%' stop_color='#00ffff' stop_opacity='0.3' />;
              <stop offset='100%' stop_color='#ff00ff' stop_opacity='0.3' />            </linear_gradient>      <div className="fixed inset - 0 pointer - events - none z - 30">;
        <svg className="w - full h - full">;
          <defs>;
            <linear_gradient id="neural_gradient" x1="0%" y1="0%" x2="100%" y2="100%">;
              <stop offset="0%" stop_color="#00ffff" stop_opacity="0.3" />;
              <stop offset="100%" stop_color="#ff00ff" stop_opacity="0.3" />;
          </defs>;
          {[...Array (15)].map ((_, i) => (
            <motion.line;
              key={i}
              x1={Math.random () * 100}
              y1={Math.random () * 100}
              x2={Math.random () * 100}
              y2={Math.random () * 100}
              stroke='url (#neural_gradient)';
              stroke_width='1';
              opacity='0.1';
              animate={{
                opacity: [0.1, 0.3, 0.1],
                stroke_dasharray: [0, 100, 0],              }}              stroke="url (#neural_gradient)";
              stroke_width="1";
              opacity="0.1";
              animate={{
                opacity: [0.1, 0.3, 0.1];
                stroke_dasharray: [0, 100, 0];

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              transition={{


              }}
            />;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,

            />
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          ))}

        </svg>;
      </div>;


<<<<<<< HEAD



      {/* Content */}


              transition={{
                duration: 4 + Math.random () * 2,
                repeat: Infinity,
        </svg>;
      </div>;
      {/* Content */}
};
export default UltraAdvancedFuturisticBackgroundV2;    </div>;
  );
};
export default UltraAdvancedFuturisticBackgroundV2;
      <div className="relative z-40">
        {children}
      </div>
    </div>
  )
};
export default UltraAdvancedFuturisticBackgroundV2;
=======
=======
              transition={{
                duration: 4 + Math.random() * 2
                repeat: Infinity
                delay: Math.random() * 2
                ease: 'easeInOut',              }}                ease: "easeInOut"
              }}
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',              }}

              }}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

            />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          ))}
        </svg>
      </div>

        </svg>;
      </div>;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Content */}


};
<<<<<<< HEAD
export default UltraAdvancedFuturisticBackgroundV2;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export default UltraAdvancedFuturisticBackgroundV2;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      {/* Content */}
      <div className='relative z-40'>{children}</div>
    </div>
  );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                delay: Math.random () * 2,
                ease: 'easeInOut',              }}                ease: "easeInOut";
              }}
            />))}
        </svg>;
      </div>;
      {/* Content */}
      <div className='relative z - 40'>{children}</div>;
    </div>);
}
;
export default UltraAdvancedFuturisticBackgroundV2;    </div>);
}
;
export default UltraAdvancedFuturisticBackgroundV2;
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};


<<<<<<< HEAD
              transition={{
                duration: 4 + Math.random() * 2
                repeat: Infinity
                delay: Math.random() * 2
                ease: 'easeInOut',              }}                ease: "easeInOut"
              }}
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',              }}                ease: "easeInOut"
              }}
                ease: 'easeInOut',              }}

              }}

            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className='relative z-40'>{children}</div>
    </div>
  );
}
};

export default UltraAdvancedFuturisticBackgroundV2;    </div>
  )
}
export default UltraAdvancedFuturisticBackgroundV2;

export default UltraAdvancedFuturisticBackgroundV2;
export default UltraAdvancedFuturisticBackgroundV2;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
