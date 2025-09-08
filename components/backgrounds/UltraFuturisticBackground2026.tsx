
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
      vx: number;

      vy: number;
      size: number;
      color: string;
      alpha: number;

      life: number;

      x: number,
      y: number,
    ];
    const createParticle = () => {
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width;
    const colors = [;
      '#00ffff', // Cyan;
      '#ff00ff', // Magenta;
      '#ffff00', // Yellow;
      '#00ff00', // Green;
      '#ff0080', // Pink;
      '#8000ff', // Purple;
      '#0080ff', // Blue;
      '#ff8000', // Orange    ];      '#ff8000'  // Orange;
    ];
      particles = [];
      for (let i = 0; i < 100; i++) {;
        particles && particles.push(createParticle());      }        x;
        y;
        vx;
        vy;

    const _colors = [
      maxLife: number;    }> = [];      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      alpha: number
      life: number
      maxLife: number
    const colors = [
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
      '#00ff00', // Green
      '#ff0080', // Pink
      '#8000ff', // Purple
      '#0080ff', // Blue
    const createParticle = () => {
      const side = Math.floor(Math.random() * 4)
      let x, y, vx, vy,

      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width,
          y = -10,
          vx = (Math.random() - 0.5) * 2,
          vy = Math.random() * 2 + 1,
          break,
        case 1: // Right
          x = canvas.width + 10,
          y = Math.random() * canvas.height,
          vx = -(Math.random() * 2 + 1),
          vy = (Math.random() - 0.5) * 2,
          break,
        case 2: // Bottom
          x = Math.random() * canvas.width,
          y = canvas.height + 10,
          vx = (Math.random() - 0.5) * 2,
          vy = -(Math.random() * 2 + 1),
          break,
        case 3: // Left
          x = -10,
          y = Math.random() * canvas.height,
          vx = Math.random() * 2 + 1,
          vy = (Math.random() - 0.5) * 2,
          break
      }

      return {
        x,
        y,
        vx,
        vy,

        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.8 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100
interface UltraFuturisticBackground2026Props {
  }
  "children": React.ReactNode;
  className?: string;

        if (particle.life > particle.maxLife || 
            particle.x < -20 || particle.x > canvas.width + 20 ||
            particle.y < -20 || particle.y > canvas.height + 20) {
          particles[index] = createParticle()
        }
// Draw particle
      '#ff8000', // Orange    ];      '#ff8000'  // Orange
    ];

const createParticle = (
     ;
  const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width;

      maxLife: number;    }> = [];      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      alpha: number,;
      life: number,;
      maxLife: number;
      max_life: number;
    const colors = [;
      '#00ffff', // Cyan;
      '#ff00ff', // Magenta;
      '#ffff00', // Yellow;
      '#00ff00', // Green;
      '#ff0080', // Pink;
      '#8000ff', // Purple;
      '#0080ff', // Blue;
      '#ff8000', // Orange    ];      '#ff8000'  // Orange;
    ];
          break;
        case 1: // Right
          break;
        case "1": // Right;
          x = canvas.width + 10;
          y = Math.random() * canvas.height;
          vx = -(Math.random() * 2 + 1);
          vy = (Math.random() - 0.5) * 2;
          break;
        case 2: // Bottom
          x = Math.random() * canvas.width;
          y = canvas.height + 10;
          vx = (Math.random() - 0.5) * 2;
          vy = -(Math.random() * 2 + 1);
          break;


      return {;
        x,;
        y,;
        vx,;
        vy,        size: Math && Math.random() * 3 + 1,;
        color: colors[Math && Math.floor(Math && Math.random() * colors && colors.length)],;
        alpha: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
        life: 0,;
        maxLife: Math && Math.random() * 200 + 100,;
      };    };

    const initParticles = () => {;

      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(createParticle());      }        x;
        y;
        vx;
        vy;
    const initParticles = () => {;
      particles = [];
      for (let i = 0; i < 100; i++) {;
        particles && particles.push(createParticle());      for (let i = 0, i < 100, i++) {;
        particles && particles.push(createParticle());
      }



        // Draw particle;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = particle && particle.alpha;
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fill();

        // Draw glow effect;
        const gradient = ctx && ctx.createRadialGradient(;
          particle && particle.x,;
          particle && particle.y,;
          0,;
          particle && particle.x,;
          particle && particle.y,;
          particle && particle.size * 3        );          particle && particle.x, particle && particle.y, 0;
          particle && particle.x, particle && particle.y, particle && particle.size * 3;


        color: colors[Math.floor(Math.random() * colors.length)]
        alpha: Math.random() * 0.8 + 0.2
        life: 0
        maxLife: Math.random() * 200 + 100
      };        maxLife: Math.random() * 200 + 100
      }
    }

const animate = (ctx.clearRect(0, 0, canvas.width, canvas.height)// Update and draw particles;
      particles.forEach((particle, index) => {particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
        if (
          particle.life > particle.maxLife |
          particle.x < -20 |
          particle.x > canvas.width + 20 |
          particle.y < -20 |
          particle.y > canvas.height + 20
        ) {
          particles[index] = createParticle();        }        if (particle.life > particle.maxLife |
            particle.x < -20 |particle.x > canvas.width + 20 |
            particle.y < -20 |particle.y > canvas.height + 20) {
          particles[index] = createParticle()
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        // Draw glow effect
        const gradient = ctx.createRadialGradient(
          particle.x
          particle.y
          0
          particle.x
          particle.y
          particle.size * 3        );          particle.x, particle.y, 0;
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
            ease: 'linear',      />;

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">;
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{
          }}
        />;
        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full'
          animate={{
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
        />;
        <motion&& motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
        }}
      />;
ref={canvasRef}

          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'linear',            ease: "linear"
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      

      {/* Floating Geometric Shapes */}

      <div className='fixed inset-0 pointer-events-none z-10'    />
        <motion.div;
className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20'
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3];
          }}
          transition={{
            duration: 8,
            repeat: Infinity}
ease: 'linear'}
          }}
           />
        <motion.div;
className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full'
          animate={{
            y: [0, -20, 0]}
            opacity: [0.2, 0.5, 0.2]}
          }}
          transition={{
            duration: 6,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
           />;
        <motion&& motion.div;
className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{

            rotate: [0, 180, 360]}
            scale: [1, 1.1, 1]}
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}

        />;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - pink - 400 / 20 rounded - full';
          animate={{
            coordinate_y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 border border - pink - 400 / 20 rounded - full";

          animate={{
            coordinate_y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2];
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}

        />;
        <motion.div;
          className='absolute bottom - 32 left - 32 w - 40 h - 40 border border - purple - 400 / 20 transform rotate - 45';
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',          }}
        />;
        <motion.div;
          className="absolute bottom - 32 left - 32 w - 40 h - 40 border border - purple - 400 / 20 transform rotate - 45";

          animate={{

            }

            "rotate": [0, -180, -360],
            "opacity": [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}

        />;
        <motion.div;
          className='absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 / 20 transform rotate - 12';
          animate={{

            rotate: [0, -180, -360]}
            opacity: [0.4, 0.7, 0.4]}
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',          }}          }}
        />;
        <motion.div;
          className="absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 / 20 transform rotate - 12";

          animate={{
            rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4];
          }}
          transition={{


          }}

        />;
        <motion&& motion.div'
          className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{}
          transition={{}
            duration: 12;
            repeat: Infinity'
            ease: 'linear',          }}
        />;
        <motion&& motion.div"
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={{}
            rotate: [0, 180, 360]
            scale: [1, 1 && 1.1, 1]
          }}
          transition={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
ease: 'linear',
origin/cursor/automate-test-improve-and-merge-code-2533
          }}
        />;
        <motion&& motion.div'
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{}
          transition={{}
            duration: 10;
            repeat: Infinity'
            ease: 'linear',          }}          }}
        />;
        <motion&& motion.div"
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={{}
            rotate: [0, -180, -360]
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]

          transition={{ />;

      </div>;

      {/* Energy Field Effects */}

        />
      </div>
      {/* Energy Field Effects */}
            duration: 20,
            repeat: Infinity,

          }}


            duration: 20,
            repeat: Infinity,

          }}
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />


