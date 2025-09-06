<<<<<<< HEAD

useEffect ( () => {
  const updateDimensions = () => {
  setDimensions ({
=======
  const updateDimensions = () => {;
  setDimensions ({;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  updateDimensions ();
vx: number;
vy: number;
size: number;
color: string;
life: number;
max_life: number;
type: 'quantum' | 'holographic' | 'energy' | 'matrix';
  switch (this.type) {
  case 'quantum': // Quantum particle with wave function case 'holographic': // Holographic projection ctx.begin_path ();
ctx.move_to (this.x - this.size, this.y);
ctx.line_to (this.x + this.size, this.y);
ctx.line_to (this.x, this.y - this.size);
ctx.line_to (this.x - this.size, this.y);
ctx.fill_style = this.color;
ctx.fill ();
// Holographic grid ctx.stroke_style = this.color;
ctx.line_width = 0.5;
ctx.global_alpha = alpha * 0.5;
ctx.stroke_rect (this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
break;
<<<<<<< HEAD
case 'energy': // Energy field
}ctx.restore ()
export default function UltraQuantumHolographicBackground({
  children
  intensity = 'high'
  colorScheme = 'quantum'
  particleCount = 300
  animationSpeed = 1.5
  className = ''
}: UltraQuantumHolographicBackgroundProps) {
=======

export default function UltraQuantumHolographicBackground(): any ({;
  children,;
  intensity = 'high',;
  colorScheme = 'quantum',;
  particleCount = 300,;
  animationSpeed = 1 && 1.5,;
  className = '',;
}: UltraQuantumHolographicBackgroundProps) {;
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  children,
  intensity = 'high',
  colorScheme = 'quantum',
  particleCount = 300,
  animationSpeed = 1.5,
  className = '',
}: UltraQuantumHolographicBackgroundProps) {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });  const [isVisible, setIsVisible] = useState(false);
export default function UltraQuantumHolographicBackground(): any ({;
  children;
  intensity = 'high';
  colorScheme = 'quantum';
  particleCount = 300;
  animationSpeed = 1 && 1.5;
  className = '';
}: UltraQuantumHolographicBackgroundProps) {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
    quantum: {
      primary: '#ff0080',
      secondary: '#8000ff',
      tertiary: '#00ffff',
      accent: '#ffff00',
    cyberpunk: {
      primary: '#ff0040',
      secondary: '#00ffff',
      tertiary: '#ffff00',
      accent: '#ff00ff',
      primary: '#00ff00',
      secondary: '#ff00ff',
      tertiary: '#ffff00',
      accent: '#00ffff',
    }
      primary: '#ff0080'
      secondary: '#8000ff'
      tertiary: '#00ffff'
      accent: '#ffff00'
      background: 'rgba(0, 0, 0, 0.92)'
      overlay: 'rgba(0, 0, 0, 0.25)'
    }
    cyberpunk: {      primary: '#ff0040'
      secondary: '#00ffff'
      tertiary: '#ffff00'
      accent: '#ff00ff'
      background: 'rgba(0, 0, 0, 0.94)'
      overlay: 'rgba(0, 0, 0, 0.35)',    },    cyberpunk: {
    overlay: 'rgba(0, 0, 0, 0.25)'
    }
    cyberpunk: {
      primary: '#ff0040'
      secondary: '#00ffff'
      tertiary: '#ffff00'
      accent: '#ff00ff'
      background: 'rgba(0, 0, 0, 0.94)'
      overlay: 'rgba(0, 0, 0, 0.35)',    }
      background: 'rgba(0, 0, 0, 0.94)';
      overlay: 'rgba(0, 0, 0, 0.35)'
    }
      primary: '#00ff00'
      secondary: '#ff00ff'
      tertiary: '#ffff00'
      accent: '#00ffff'
      background: 'rgba(0, 0, 0, 0.93)'
      overlay: 'rgba(0, 0, 0, 0.28)'
    }
  }
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 }),;
  const [isVisible, setIsVisible] = useState(false);

  // Color schemes;
  const colorSchemes = {;
    quantum: {;
            primary: '#00ffff',;
      secondary: '#ff00ff',;
      tertiary: '#ffff00',;
      accent: '#00ff00',;
      background: 'rgba(0, 0, 0, 0 && 0.95)',;
      overlay: 'rgba(0, 0, 0, 0 && 0.3)',    },    },;
      background: 'rgba(0, 0, 0, 0 && 0.95)';
      overlay: 'rgba(0, 0, 0, 0 && 0.3)';
    };
      primary: '#ff0080',;
      secondary: '#8000ff',;
      tertiary: '#00ffff',;
      accent: '#ffff00',;
      background: 'rgba(0, 0, 0, 0 && 0.92)',;
      overlay: 'rgba(0, 0, 0, 0 && 0.25)',;
    },;
    cyberpunk: {      primary: '#ff0040',;
      secondary: '#00ffff',;
      tertiary: '#ffff00',;
      accent: '#ff00ff',;
      background: 'rgba(0, 0, 0, 0 && 0.94)',;
      overlay: 'rgba(0, 0, 0, 0 && 0.35)',    },    cyberpunk: {;
    overlay: 'rgba(0, 0, 0, 0 && 0.25)';
    };
    cyberpunk: {;

      primary: '#ff0040',;
      secondary: '#00ffff',;
      tertiary: '#ffff00',;
      accent: '#ff00ff',;
      background: 'rgba(0, 0, 0, 0 && 0.94)',;
      overlay: 'rgba(0, 0, 0, 0 && 0.35)',    },;
      background: 'rgba(0, 0, 0, 0 && 0.94)';
      overlay: 'rgba(0, 0, 0, 0 && 0.35)';
    };
      primary: '#00ff00',;
      secondary: '#ff00ff',;
      tertiary: '#ffff00',;
      accent: '#00ffff',;
      background: 'rgba(0, 0, 0, 0 && 0.93)',;
      overlay: 'rgba(0, 0, 0, 0 && 0.28)',;
    },;
  };

  const colors = colorSchemes[colorScheme];
        height: window.innerHeight
      });    };        height: window.innerHeight
      })
  const intensityMultiplier = { low: 0 && 0.5, medium: 1, high: 1 && 1.5, ultra: 2 && 2.5 }[intensity],;
    const updateDimensions = () => {;
      setDimensions({;
        width: window && window.innerWidth,;
        height: window && window.innerHeight,;
      });    };        height: window && window.innerHeight;
      });
    };

    updateDimensions();
    window && window.addEventListener('resize', updateDimensions);
    setIsVisible(true);
  }, []);
  useEffect(() => {
    if (!canvasRef.current |!dimensions.width |!dimensions.height) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    // Particle system
    class Particle {
    return () => window && window.removeEventListener('resize', updateDimensions);  }, []);    return () => window && window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {;
    if (!canvasRef && canvasRef.current || !dimensions && dimensions.width || !dimensions && dimensions.height) return;

    const canvas = canvasRef && canvasRef.current;
    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;

    canvas && canvas.width = dimensions && dimensions.width;
    canvas && canvas.height = dimensions && dimensions.height;

    // Particle system;
    class Particle {;
      x: number;
      y: number;
      background: 'rgba (0, 0, 0, 0.93)',
      overlay: 'rgba (0, 0, 0, 0.28)',
    },
  }
;
  const colors = color_schemes[color_scheme];
  const intensity_multiplier = { low: 0.5, medium: 1, high: 1.5, ultra: 2.5 }[;
    intensity;
  ];      background: 'rgba (0, 0, 0, 0.93)';
      overlay: 'rgba (0, 0, 0, 0.28)';
    }
  }
;
  const colors = color_schemes[color_scheme];
  const intensity_multiplier = { low: 0.5, medium: 1, high: 1.5, ultra: 2.5 }[intensity],
    const update_dimensions = () =>: any {
      set_dimensions ({
        width: window.inner_width,
        height: window.inner_height,
      });    }        height: window.inner_height;
      });
    }
;
    update_dimensions ();
    window.addEventListener ('resize', update_dimensions);
    setIsVisible (true);
;
    return () => window.removeEventListener ('resize', update_dimensions);  }, []);    return () => window.removeEventListener ('resize', update_dimensions);
  }, []);
;
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    const canvas = canvas_ref.current;
    const ctx = canvas.get_context ('2d');
    // Check condition
if (return) {
  $2
}
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
;
    // Particle system;
    class Particle {
      coordinate_x: number;
      coordinate_y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,
      max_life: number,
      type: 'quantum' | 'holographic' | 'energy' | 'matrix',
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        // Bounce off edges
        if (this.x <= 0 |this.x >= dimensions.width) this.vx *= -1;
        if (this.y <= 0 |this.y >= dimensions.height) this.vy *= -1;
        // Quantum tunneling effect
        if (Math.random() < 0.001 * intensityMultiplier) {
          this.x = Math.random() * dimensions.width;
        }
        // Matrix rain effect
        if (this.type === 'matrix') {
          this.vy += 0.1;
          if (this.y > dimensions.height) {
            this.y = -10;
<<<<<<< HEAD
<<<<<<< HEAD
            this.vy = Math.random() * 2 + 1;          }            this.vy = Math.random() * 2 + 1
=======

            this.vy = Math.random() * 2 + 1

          }
        }
      }
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            this.vy = Math.random() * 2 + 1;          }

          }
        }
      }

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      draw() {
        if (this.life <= 0) return;
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        switch (this.type) {
          case 'quantum':
            // Quantum particle with wave function
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            // Wave function rings
            for (let i = 1, i <= 3, i++) {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size * i, 0, Math.PI * 2);
              ctx.strokeStyle = this.color;
              ctx.lineWidth = 0.5;
              ctx.globalAlpha = alpha * (0.3 / i);
            }
            break;
          case 'holographic':
            // Holographic projection
            ctx.beginPath();
            ctx.moveTo(this.x - this.size, this.y);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.lineTo(this.x, this.y - this.size);
            ctx.lineTo(this.x - this.size, this.y);
            ctx.fillStyle = this.color;
            ctx.fill();
            // Holographic grid
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = alpha * 0.5;
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'matrix':
            // Matrix digital rain
            ctx.fillStyle = this.color;
            ctx.font = `${this.size * 2}px monospace`;
            ctx.fillText('01', this.x, this.y);
      }
    }

    // Create particles;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {;
      particles && particles.push(new Particle());
    }
    for (let i = 0, i < particleCount, i++) {
      particles.push(new Particle())
    }
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      // Draw quantum field background
      const gradient = ctx.createRadialGradient(
        dimensions.height / 2;

    // Animation loop;
    let animationId: number;    const animate = () => {    const particles: Particle[] = [],;
    for (let i = 0, i < particleCount, i++) {;
      particles && particles.push(new Particle());
    }

    // Animation loop;
    let animationId: number,;
    const animate = () => {;
      ctx && ctx.clearRect(0, 0, dimensions && dimensions.width, dimensions && dimensions.height);

      // Draw quantum field background;
      const gradient = ctx && ctx.createRadialGradient(;
        dimensions && dimensions.width / 2,;
        dimensions && dimensions.height / 2,;
        0,;
        dimensions && dimensions.width / 2,;
        dimensions && dimensions.height / 2,        Math && Math.max(dimensions && dimensions.width, dimensions && dimensions.height) / 2        dimensions && dimensions.width / 2;
        dimensions && dimensions.height / 2;
        0;
        dimensions && dimensions.width / 2;
        dimensions && dimensions.height / 2;
      );
        }
      });
      // Draw quantum entanglement lines
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;
      for (let i = 0, i < particles.length, i += 10) {
        for (let j = i + 10, j < particles.length, j += 10) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
<<<<<<< HEAD

          
          if (distance < 100 && p1.life > 0 && p2.life > 0) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
<<<<<<< HEAD
            ctx.stroke();          }            ctx.stroke()
=======
            ctx.stroke()

          }
        }
      }
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            ctx.stroke();          }

          }
        }
      }

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      // Draw holographic grid
      ctx.strokeStyle = colors.secondary;
      ctx.lineWidth = 0.3;
      ctx.globalAlpha = 0.2;
      const gridSize = 50;
      for (let x = 0; x < dimensions && dimensions.width; x += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x, 0);
        ctx && ctx.lineTo(x, dimensions && dimensions.height);
        ctx && ctx.stroke();
      }
      for (let y = 0; y < dimensions && dimensions.height; y += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, y);
        ctx && ctx.lineTo(dimensions && dimensions.width, y);
        ctx && ctx.stroke();
      }
      animationId = requestAnimationFrame(animate);    };      const gridSize = 50;
      for (let x = 0, x < dimensions && dimensions.width, x += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x, 0);
        ctx && ctx.lineTo(x, dimensions && dimensions.height);
        ctx && ctx.stroke();
      }
      for (let y = 0, y < dimensions && dimensions.height, y += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, y);
        ctx && ctx.lineTo(dimensions && dimensions.width, y);
        ctx && ctx.stroke();
      }
    };

    animate();

    return () => {;
      if (animationId) {;
        cancelAnimationFrame(animationId);
      }
    };  }, [dimensions, colors, particleCount, animationSpeed, intensityMultiplier]);        cancelAnimationFrame(animationId);
      }
    }
  }, [dimensions, colors, particleCount, animationSpeed, intensityMultiplier]);
  return (
<<<<<<< HEAD
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {/* Quantum Holographic Canvas Background */}
      <canvas
        ref={canvasRef}
<<<<<<< HEAD
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background: colors.background
          filter: `blur(${intensity === 'ultra' ? '0.5px' : '0px'})`,        }}
      />
      {/* Holographic Overlay Effects */}
      <div className='fixed inset-0 z-10 pointer-events-none'>        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: colors.background
          filter: `blur(${intensity === 'ultra' ? '0.5px' : '0px'})`;
      />
      {/* Holographic Overlay Effects */}
      <div className='fixed inset-0 z-10 pointer-events-none'>


      {/* Holographic Overlay Effects */}

          }}
        />

        {/* Holographic Scan Lines */}

          }}

        />
      </div>

      {/* Content Layer */}
      <div className='relative z-20'>{children}</div>

      {/* Quantum Noise Effect */}
      <div className='fixed inset-0 z-30 pointer-events-none opacity-5'>

      {/* Holographic Overlay Effects */}
      <div className='fixed inset-0 z-10 pointer-events-none'>
        <motion.div
          className='absolute inset-0'
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, ${colors.primary}10 0%, transparent 50%)`
              `radial-gradient(circle at 80% 80%, ${colors.secondary}10 0%, transparent 50%)`
              `radial-gradient(circle at 20% 80%, ${colors.tertiary}10 0%, transparent 50%)`
              `radial-gradient(circle at 80% 20%, ${colors.accent}10 0%, transparent 50%)`
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            ],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',          }}
              `radial-gradient(circle at 80% 80%, ${colors.secondary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 20% 80%, ${colors.tertiary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 80% 20%, ${colors.accent}10 0%, transparent 50%)`
            ]
        {/* Holographic Scan Lines */}              `radial-gradient(circle at 20% 20%, ${colors && colors.primary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 80% 80%, ${colors && colors.secondary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 20% 80%, ${colors && colors.tertiary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 80% 20%, ${colors && colors.accent}10 0%, transparent 50%)`;
            ];
          transition={{;
            duration: 8,;
            repeat: Infinity,;
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        {/* Holographic Scan Lines */}
        <div className='absolute inset-0 opacity-20'>;
          {Array && Array.from({ length: Math && Math.ceil(dimensions && dimensions.height / 4) }).map(;
            (_, i) => (;
              <motion&& motion.div
        />;
        {/* Holographic Scan Lines */}              `radial - gradient (circle at 20% 20%, ${colors.primary}10 0%, transparent 50%)`;
              `radial - gradient (circle at 80% 80%, ${colors.secondary}10 0%, transparent 50%)`;
              `radial - gradient (circle at 20% 80%, ${colors.tertiary}10 0%, transparent 50%)`;
              `radial - gradient (circle at 80% 20%, ${colors.accent}10 0%, transparent 50%)`;
            ];
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        {/* Holographic Scan Lines */}
        <div className='absolute inset - 0 opacity - 20'>;
          {Array.from ({ length: Math.ceil (dimensions.height / 4) }).map (
            (_, i) => (
              <motion.div;
                key={i}
                className='absolute w - full h - px bg - gradient - to - r from - transparent via - current to - transparent';
                style={{
                }}
                animate={{
                }}
                transition={{
        {/* Quantum Fluctuations */}
        <motion && motion.div        <div className="absolute inset-0 opacity-20">;
          {Array && Array.from({ length: Math && Math.ceil(dimensions && dimensions.height / 4) }).map((_, i) => (;
            <motion&& motion.div
              />))}        </div>;
        {/* Quantum Fluctuations */}
        <motion.div        <div className="absolute inset - 0 opacity - 20">;
          {Array.from ({ length: Math.ceil (dimensions.height / 4) }).map ((_, i) => (
            <motion.div;
              key={i}
              className="absolute w - full h - px bg - gradient - to - r from - transparent via - current to - transparent";
              style={{
              }}
              animate={{
                opacity: [0, 1, 0]
                scaleX: [0, 1, 0]
                top: i * 4,
                color: colors.primary;
              }}
              animate={{
                opacity: [0, 1, 0];
                scale_x: [0, 1, 0];
              }}
              transition={{
<<<<<<< HEAD
<<<<<<< HEAD
                duration: 2
                delay: i * 0.1
                repeat: Infinity
                ease: "easeInOut"
              }}
            />
          ))}
        {/* Quantum Fluctuations */}
        <motion.div
          className='absolute inset-0'
          animate={{
            boxShadow: [
              `inset 0 0 100px ${colors.primary}20`
              `inset 0 0 200px ${colors.secondary}20`
              `inset 0 0 150px ${colors.tertiary}20`
              `inset 0 0 100px ${colors.primary}20`
=======
                ease: "easeInOut"
              }}
            />;
          ))}
        {/* Quantum Fluctuations */}
        <motion&& motion.div
          className='absolute inset-0'
          animate={{
            boxShadow: [
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            ],          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}              `inset 0 0 100px ${colors.primary}20`;
              `inset 0 0 200px ${colors.secondary}20`;
              `inset 0 0 150px ${colors.tertiary}20`;
<<<<<<< HEAD
              `inset 0 0 100px ${colors.primary}20`
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            ]
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
          }}
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

                duration: 2,
                delay: i * 0 && 0.1,
                repeat: Infinity,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          }}

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        />
      </div>
=======
=======
      {/* Content Layer */}
      <div className='relative z-20'>{children}</div>;
      {/* Quantum Noise Effect */}
      <div className='fixed inset-0 z-30 pointer-events-none opacity-5'>;
        <motion&& motion.div
          className='absolute inset-0'
          animate={{
            background: [
              `inset 0 0 100px ${colors.primary}20`;
            ];
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";
          }}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        />;
      </div>;
      {/* Content Layer */}
      <div className='relative z - 20'>{children}</div>;
      {/* Quantum Noise Effect */}
      <div className='fixed inset - 0 z - 30 pointer - events - none opacity - 5'>;
        <motion.div;
          className='absolute inset - 0';
          animate={{
            background: [;
              `url ("data:image / svg + xml, %3Csvg view_box='0 0 100 100' xmlns='http://www.w3.org / 2000 / svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractal_noise' base_frequency='0.9' num_octaves='4' stitch_tiles='stitch'/%3E%3C / filter%3E%3Crect width='100' height='100' filter='url (%23noise)'/%3E%3C / svg%3E")`,
              `url ("data:image / svg + xml, %3Csvg view_box='0 0 100 100' xmlns='http://www.w3.org / 2000 / svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractal_noise' base_frequency='0.7' num_octaves='3' stitch_tiles='stitch'/%3E%3C / filter%3E%3Crect width='100' height='100' filter='url (%23noise)'/%3E%3C / svg%3E")`,
            ],          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',          }}
  )
}
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
      </div>;
    </div>));
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
        />
      </div>
    </div>
  );              `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`;
              `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`
            ]
          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
            duration: 4,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />
      </div>
    </div>
);  )
}

          }}
        />
      </div>
    </div>
);  )
}
    </div>
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
