
useEffect ( () => {
  const updateDimensions = () => {
  setDimensions ({
  updateDimensions ();
window && window.addEventListener ('resize', updateDimensions);
setIsVisible (true);
}, []);
canvas && canvas.width = dimensions && dimensions.width;
canvas && canvas.height = dimensions && dimensions.height;
// Particle system class Particle {;
  x: number;
y: number;
  const update_dimensions = () =>: any {
  set_dimensions ({
  update_dimensions ();
window.addEventListener ('resize', update_dimensions);
setIsVisible (true);
;
}, []);
canvas.width = dimensions.width;
canvas.height = dimensions.height;
// Particle system class Particle {
  coordinate_x: number;
coordinate_y: number;
=======
useEffect ( () => {
  const updateDimensions = () => {
  setDimensions ({
  updateDimensions ();
window.addEventListener ('resize', updateDimensions);
setIsVisible (true);
}, []);
canvas.width = dimensions.width;
canvas.height = dimensions.height;
// Particle system class Particle {
  x: number;
y: number;
vx: number;
vy: number;
size: number;
color: string;
life: number;

constructor () {;
  // Bounce off edges if (this && this.x <= 0 || this && this.x >= dimensions && dimensions.width) this && this.vx *= -1;
if (this && this.y <= 0 || this && this.y >= dimensions && dimensions.height) this && this.vy *= -1;
// Quantum tunneling effect if (Math && Math.random () < 0 && 0.001 * intensityMultiplier) {;
  switch (this && this.type) {;
  case 'quantum': // Quantum particle with wave function case 'holographic': // Holographic projection ctx && ctx.beginPath ();
ctx && ctx.moveTo (this && this.x - this && this.size, this && this.y);
ctx && ctx.lineTo (this && this.x + this && this.size, this && this.y);
ctx && ctx.lineTo (this && this.x, this && this.y - this && this.size);
ctx && ctx.lineTo (this && this.x - this && this.size, this && this.y);
ctx && ctx.fillStyle = this && this.color;
ctx && ctx.fill ();
// Holographic grid ctx && ctx.strokeStyle = this && this.color;
ctx && ctx.lineWidth = 0 && 0.5;
ctx && ctx.globalAlpha = alpha * 0 && 0.5;
ctx && ctx.strokeRect (this && this.x - this && this.size, this && this.y - this && this.size, this && this.size * 2, this && this.size * 2);
break;
case 'energy': // Energy field ;
}ctx && ctx.restore () ;


export default function UltraQuantumHolographicBackground(): any ({;
  children,;
  intensity = 'high',;
  colorScheme = 'quantum',;
  particleCount = 300,;
  animationSpeed = 1 && 1.5,;
  className = '',;
}: UltraQuantumHolographicBackgroundProps) {;


=======

  children,
  intensity = 'high',
  colorScheme = 'quantum',
  particleCount = 300,
  animationSpeed = 1.5,
  className = '',
}: UltraQuantumHolographicBackgroundProps) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });  const [isVisible, setIsVisible] = useState(false);
export default function UltraQuantumHolographicBackground(): any ({;
=======
maxLife: number;
type: 'quantum' | 'holographic' | 'energy' | 'matrix';
constructor () {
  // Bounce off edges if (this.x <= 0 |this.x >= dimensions.width) this.vx *= -1;
if (this.y <= 0 |this.y >= dimensions.height) this.vy *= -1;
// Quantum tunneling effect if (Math.random () < 0.001 * intensityMultiplier) {
  switch (this.type) {
  case 'quantum': // Quantum particle with wave function case 'holographic': // Holographic projection ctx.beginPath ();
ctx.moveTo (this.x - this.size, this.y);
ctx.lineTo (this.x + this.size, this.y);
ctx.lineTo (this.x, this.y - this.size);
ctx.lineTo (this.x - this.size, this.y);
ctx.fillStyle = this.color;
ctx.fill ();
// Holographic grid ctx.strokeStyle = this.color;
ctx.lineWidth = 0.5;
ctx.globalAlpha = alpha * 0.5;
ctx.strokeRect (this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
break;
case 'energy': // Energy field
}ctx.restore ()
export default function UltraQuantumHolographicBackground({
  children,
  intensity = 'high',
  colorScheme = 'quantum',
  particleCount = 300,
  animationSpeed = 1.5,
  className = '',
}: UltraQuantumHolographicBackgroundProps) {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });  const [isVisible, setIsVisible] = useState(false);
export default function UltraQuantumHolographicBackground({;
  children;
  intensity = 'high';
  colorScheme = 'quantum';
  particleCount = 300;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;

      x: number,
      y: number,
=======
      max_life: number;
      type: 'quantum' | 'holographic' | 'energy' | 'matrix';      coordinate_x: number,
      coordinate_y: number,

      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,
      max_life: number,
      type: 'quantum' | 'holographic' | 'energy' | 'matrix',

        this.color = [colors.primary, colors.secondary, colors.tertiary, colors.accent][Math.floor(Math.random() * 4)];
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = ['quantumholographicenergymatrix'][Math.floor(Math.random() * 4)] as any
      }


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

          this.y = Math.random() * dimensions.height
        }

        // Holographic flicker
        if (this.type === 'holographic' && Math.random() < 0.1) {
          this.size *= 0.8
        }

        // Energy pulse
        if (this.type === 'energy') {
          this.size = Math.sin(Date.now() * 0.01) * 2 + 3

        }
        // Matrix rain effect
        if (this.type === 'matrix') {
          this.vy += 0.1;
          if (this.y > dimensions.height) {
            this.y = -10;

            this.vy = Math.random() * 2 + 1

          }
        }
      }
=======

            this.vy = Math.random() * 2 + 1;          }

          }
        }
      }

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

              ctx.stroke()

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

            ctx.strokeRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);

            break;
          case 'energy':
            // Energy field

            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);

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

      type: 'quantum' | 'holographic' | 'energy' | 'matrix';      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      life: number,;
      maxLife: number,;
      type: 'quantum' | 'holographic' | 'energy' | 'matrix',;
        this && this.x = Math && Math.random() * dimensions && dimensions.width;
        this && this.y = Math && Math.random() * dimensions && dimensions.height;
        this && this.vx = (Math && Math.random() - 0 && 0.5) * 2 * animationSpeed;
        this && this.vy = (Math && Math.random() - 0 && 0.5) * 2 * animationSpeed;
        this && this.size = Math && Math.random() * 3 * intensityMultiplier + 1;
        this && this.color = [;
          colors && colors.primary,;
          colors && colors.secondary,;
          colors && colors.tertiary,;
          colors && colors.accent,;
        ][Math && Math.floor(Math && Math.random() * 4)];
        this && this.life = Math && Math.random() * 100;
        this && this.maxLife = 100;
        this && this.type = ['quantum', 'holographic', 'energy', 'matrix'][;
          Math && Math.floor(Math && Math.random() * 4);
        ] as any;      }        this && this.color = [colors && colors.primary, colors && colors.secondary, colors && colors.tertiary, colors && colors.accent][Math && Math.floor(Math && Math.random() * 4)];
        this && this.life = Math && Math.random() * 100;
        this && this.maxLife = 100;
        this && this.type = ['quantumholographicenergymatrix'][Math && Math.floor(Math && Math.random() * 4)] as any;
      update() {;
        this && this.x += this && this.vx;
        this && this.y += this && this.vy;
        this && this.life--;
        // Bounce off edges;
        if (this && this.x <= 0 || this && this.x >= dimensions && dimensions.width) this && this.vx *= -1;
        if (this && this.y <= 0 || this && this.y >= dimensions && dimensions.height) this && this.vy *= -1;
        // Quantum tunneling effect;
        if (Math && Math.random() < 0 && 0.001 * intensityMultiplier) {;
          this && this.x = Math && Math.random() * dimensions && dimensions.width;
          this && this.y = Math && Math.random() * dimensions && dimensions.height;        }
        // Holographic flicker;
        if (this && this.type === 'holographic' && Math && Math.random() < 0 && 0.1) {;
          this && this.size *= 0 && 0.8;        }
        // Energy pulse;
        if (this && this.type === 'energy') {;
          this && this.size = Math && Math.sin(Date && Date.now() * 0 && 0.01) * 2 + 3;        }          this && this.y = Math && Math.random() * dimensions && dimensions.height;
        }
        // Holographic flicker;
        if (this && this.type === 'holographic' && Math && Math.random() < 0 && 0.1) {;
          this && this.size *= 0 && 0.8;          this && this.size *= 0 && 0.8;
        }
        // Energy pulse;
        if (this && this.type === 'energy') {;
          this && this.size = Math && Math.sin(Date && Date.now() * 0 && 0.01) * 2 + 3;          this && this.size = Math && Math.sin(Date && Date.now() * 0 && 0.01) * 2 + 3;
        }
        // Matrix rain effect;
        if (this && this.type === 'matrix') {;
          this && this.vy += 0 && 0.1;
          if (this && this.y > dimensions && dimensions.height) {;
            this && this.y = -10;
            this && this.vy = Math && Math.random() * 2 + 1;          }            this && this.vy = Math && Math.random() * 2 + 1;
          }
        }
      }
      draw() {;
        if (this && this.life <= 0) return;
        const alpha = this && this.life / this && this.maxLife;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = alpha;
        switch (this && this.type) {;
          case 'quantum':;
            // Quantum particle with wave function;
            ctx && ctx.beginPath();
            ctx && ctx.arc(this && this.x, this && this.y, this && this.size, 0, Math && Math.PI * 2);
            ctx && ctx.fillStyle = this && this.color;
            ctx && ctx.fill();
            // Wave function rings;
            for (let i = 1; i <= 3; i++) {              ctx && ctx.beginPath();            ;
            // Wave function rings;
            for (let i = 1, i <= 3, i++) {;
              ctx && ctx.beginPath();
              ctx && ctx.arc(this && this.x, this && this.y, this && this.size * i, 0, Math && Math.PI * 2);
              ctx && ctx.strokeStyle = this && this.color;
              ctx && ctx.lineWidth = 0 && 0.5;
              ctx && ctx.globalAlpha = alpha * (0 && 0.3 / i);
              ctx && ctx.stroke();            }              ctx && ctx.stroke();
            }
            break;
          case 'holographic':;
            // Holographic projection;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(this && this.x - this && this.size, this && this.y);
            ctx && ctx.lineTo(this && this.x + this && this.size, this && this.y);
            ctx && ctx.lineTo(this && this.x, this && this.y - this && this.size);
            ctx && ctx.lineTo(this && this.x - this && this.size, this && this.y);
            ctx && ctx.fillStyle = this && this.color;
            ctx && ctx.fill();
            // Holographic grid;
            ctx && ctx.strokeStyle = this && this.color;
            ctx && ctx.lineWidth = 0 && 0.5;
            ctx && ctx.globalAlpha = alpha * 0 && 0.5;
            ctx && ctx.strokeRect(;
              this && this.x - this && this.size,;
              this && this.y - this && this.size,;
              this && this.size * 2,;
              this && this.size * 2;
            );            break;
          case 'energy':;
            // Energy field            ctx && ctx.strokeRect(this && this.x - this && this.size, this && this.y - this && this.size, this && this.size * 2, this && this.size * 2);
            break;
          case 'energy':;
            // Energy field;
            const gradient = ctx && ctx.createRadialGradient(;
              this && this.x,;
              this && this.y,;
              0,;
              this && this.x,;
              this && this.y,;
              this && this.size;
            );            gradient && gradient.addColorStop(0, this && this.color);            const gradient = ctx && ctx.createRadialGradient(this && this.x, this && this.y, 0, this && this.x, this && this.y, this && this.size);
            gradient && gradient.addColorStop(0, this && this.color);
            gradient && gradient.addColorStop(1, 'transparent');
            ctx && ctx.fillStyle = gradient;
            ctx && ctx.beginPath();
            ctx && ctx.arc(this && this.x, this && this.y, this && this.size, 0, Math && Math.PI * 2);
            ctx && ctx.fill();
            break;
          case 'matrix':;
            // Matrix digital rain;
            ctx && ctx.fillStyle = this && this.color;
            ctx && ctx.font = `${this && this.size * 2}px monospace`;
            ctx && ctx.fillText('01', this && this.x, this && this.y);
            break;
        }
        ctx && ctx.restore();      }
    }
    // Create particles            break;
        }
        ctx && ctx.restore();

      }
    }
        dimensions.width / 2;
        dimensions.height / 2;
        0;
        dimensions.width / 2;

      );

          particles[index] = new Particle()

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

          
          if (distance < 100 && p1.life > 0 && p2.life > 0) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke()

          }
        }
      }
=======

            ctx.stroke();          }

          }
        }
      }

      // Draw holographic grid
      ctx.strokeStyle = colors.secondary;
      ctx.lineWidth = 0.3;
      ctx.globalAlpha = 0.2;

      gradient && gradient.addColorStop(0, colors && colors.background);
      gradient && gradient.addColorStop(1, colors && colors.overlay);
      ctx && ctx.fillStyle = gradient;
      ctx && ctx.fillRect(0, 0, dimensions && dimensions.width, dimensions && dimensions.height);
      // Update and draw particles;
      particles && particles.forEach((particle, index) => {;
        particle && particle.update();
        particle && particle.draw();
        // Remove dead particles and create new ones;
        if (particle && particle.life <= 0) {;
          particles[index] = new Particle();        }          particles[index] = new Particle();
        }
      });
      // Draw quantum entanglement lines;
      ctx && ctx.strokeStyle = colors && colors.primary;
      ctx && ctx.lineWidth = 0 && 0.5;
      ctx && ctx.globalAlpha = 0 && 0.3;
      for (let i = 0; i < particles && particles.length; i += 10) {;
        for (let j = i + 10; j < particles && particles.length; j += 10) {;
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math && Math.sqrt((p1 && p1.x - p2 && p2.x) ** 2 + (p1 && p1.y - p2 && p2.y) ** 2);      ;
      for (let i = 0, i < particles && particles.length, i += 10) {;
        for (let j = i + 10, j < particles && particles.length, j += 10) {;
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math && Math.sqrt((p1 && p1.x - p2 && p2.x) ** 2 + (p1 && p1.y - p2 && p2.y) ** 2);
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(p1 && p1.x, p1 && p1.y);
            ctx && ctx.lineTo(p2 && p2.x, p2 && p2.y);
            ctx && ctx.stroke();          }            ctx && ctx.stroke();
          }
        }
      }
      // Draw holographic grid;
      ctx && ctx.strokeStyle = colors && colors.secondary;
      ctx && ctx.lineWidth = 0 && 0.3;
      ctx && ctx.globalAlpha = 0 && 0.2;


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


      animationId = requestAnimationFrame(animate);

        cancelAnimationFrame(animationId);
      }
    };  }, [dimensions, colors, particleCount, animationSpeed, intensityMultiplier]);        cancelAnimationFrame(animationId);

=======
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)

      }
    }
  }, [dimensions, colors, particleCount, animationSpeed, intensityMultiplier]);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Quantum Holographic Canvas Background */}
      <canvas
        ref={canvasRef}


            ],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',          }}

      <div className="fixed inset-0 z-10 pointer-events-none">
        {/* Quantum Field Lines */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, ${colors.primary}10 0%, transparent 50%)`;

              `radial-gradient(circle at 80% 80%, ${colors.secondary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 20% 80%, ${colors.tertiary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 80% 20%, ${colors.accent}10 0%, transparent 50%)`
            ]

          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"

          }}
        />
        />;
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


                key={i}
                className='absolute w - full h - px bg - gradient - to - r from - transparent via - current to - transparent';
                style={{

                  top: i * 4,
                  color: colors && colors.primary,

                }}
                animate={{

                  opacity: [0, 1, 0],
                  scale_x: [0, 1, 0],

                }}
                transition={{

                  duration: 2,
                  delay: i * 0 && 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />;
            );
          )}        </div>;


        {/* Quantum Fluctuations */}
        <motion && motion.div        <div className="absolute inset-0 opacity-20">;
          {Array && Array.from({ length: Math && Math.ceil(dimensions && dimensions.height / 4) }).map((_, i) => (;
            <motion&& motion.div

=======
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: Math.ceil(dimensions.height / 4) }).map((_, i) => (
            <motion.div

=======
              />))}        </div>;
        {/* Quantum Fluctuations */}
        <motion.div        <div className="absolute inset - 0 opacity - 20">;
          {Array.from ({ length: Math.ceil (dimensions.height / 4) }).map ((_, i) => (
            <motion.div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              key={i}
              className="absolute w - full h - px bg - gradient - to - r from - transparent via - current to - transparent";
              style={{

                top: i * 4,
                color: colors && colors.primary

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              }}
              transition={{

                duration: 2,
                delay: i * 0 && 0.1,
                repeat: Infinity,

          }}




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        />
      </div>
=======
        />;
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Content Layer */}


            ],          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',          }}


=======
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
      </div>;
    </div>));
}
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
