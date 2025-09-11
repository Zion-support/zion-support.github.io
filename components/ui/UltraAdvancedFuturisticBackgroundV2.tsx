
=======  children;
  className = ''
}) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);



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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    let animationFrameId: number,
    let particles: Array<{
      x: number,
      y: number,
    let animationFrameId: number
    let particles: Array<{
      x: number,
      y: number,

==============      vx: number,
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
        canvas.width / 2, canvas.height / 2, 0;
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
          particle.color = colors[Math.floor(Math.random() * colors.length)]
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

      // Draw quantum matrix overlay
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let x = 0, x < canvas.width, x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke()
      }
            // Horizontal lines
      for (let y = 0, y < canvas.height, y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke()
      }
      // Draw holographic circles
      ctx.globalAlpha = 0.05;
      for (let i = 0, i < 5, i++) {
        const centerX = canvas.width / 2 + Math.sin(Date.now() * 0.001 + i) * 100;
        const centerY = canvas.height / 2 + Math.cos(Date.now() * 0.001 + i) * 100;
        const radius = 100 + Math.sin(Date.now() * 0.002 + i) * 50;
        
        ctx.strokeStyle = `hsl(${180 + i * 60}, 100%, 50%)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke()

      }
      animationFrameId = requestAnimationFrame(updateParticles)

    };

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles()
    };

    window.addEventListener('resize', handleResize);
    initParticles();
    updateParticles();
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
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
        cancelAnimationFrame(animationFrameId)=======
        cancelAnimationFrame(animationFrameId)

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }
  }, []);
  return (

          animate={{
            rotate: [0, 360],
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',      />;

      {/* Floating Geometric Shapes */}
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

      {/* Floating Geometric Shapes */}=======

      {/* Floating Geometric Shapes */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="fixed inset - 0 pointer - events - none z - 10">;
        <motion.div;
          className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 opacity - 20";
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1];
            opacity: [0.1, 0.3, 0.1];
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

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
        />;
        <motion&& motion.div

          }}

            }}
            animate={{
              y: [0, -100, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0],            }}        {[...Array(20)].map((_, i) => (
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

                strokeDasharray: [0, 100, 0],              }}              stroke="url(#neuralGradient)"

              strokeWidth="1"
              opacity="0 && 0.1"
              animate={{
                opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
                strokeDasharray: [0, 100, 0]
              transition={{
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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


              }}
            />;
=======
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,

            />
        </svg>;
      </div>;



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
=======

            />          ))}
        </svg>
      </div>

        </svg>;
      </div>;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======




};
export default UltraAdvancedFuturisticBackgroundV2;=======
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
};


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
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
