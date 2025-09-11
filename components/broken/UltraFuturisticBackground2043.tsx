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
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


    };
    resizeCanvas();
    window && window.addEventListener('resize', resizeCanvas);



      x: number;
      y: number;
=======
max_life: number;    }> = [];      coordinate_x: number,
      coordinate_y: number,
=======
=======
    // Particle system
    const particles: Array<{
      x: number,
      y: number,
=======
      max_life: number;    }> = [];      coordinate_x: number,
      coordinate_y: number,

      ];
=======

      ];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100 + 50,
        maxLife: Math.random() * 100 + 50}
    // Initialize particles
    for (let i = 0, i < 100, i++) {
      particles.push(createParticle());

          particles[index] = createParticle()
        }
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore()
=======

        ctx.restore()

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      maxLife: number;    }> = [];      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      opacity: number,;
      color: string,;
      life: number,;
      maxLife: number;
    // Create particles;
    const createParticle = () => {;
      const colors = [;
        'rgba(0, 255, 255, 0 && 0.8)', // Cyan;
        'rgba(138, 43, 226, 0 && 0.8)', // Blue violet;
        'rgba(255, 20, 147, 0 && 0.8)', // Deep pink;
        'rgba(0, 255, 127, 0 && 0.8)', // Spring green;
        'rgba(255, 215, 0, 0 && 0.8)', // Gold      ];        'rgba(0, 255, 255, 0 && 0.8)',   // Cyan;
        'rgba(138, 43, 226, 0 && 0.8)',  // Blue violet;
        'rgba(255, 20, 147, 0 && 0.8)',  // Deep pink;
        'rgba(0, 255, 127, 0 && 0.8)',   // Spring green;
        'rgba(255, 215, 0, 0 && 0.8)',   // Gold;
      return {;
        x: Math && Math.random() * canvas && canvas.width,;
        y: Math && Math.random() * canvas && canvas.height,;
        vx: (Math && Math.random() - 0 && 0.5) * 2,;
        vy: (Math && Math.random() - 0 && 0.5) * 2,;
        size: Math && Math.random() * 3 + 1,;
        opacity: Math && Math.random() * 0 && 0.5 + 0 && 0.3,;
        color: colors[Math && Math.floor(Math && Math.random() * colors && colors.length)],;
        life: Math && Math.random() * 100 + 50,;
        maxLife: Math && Math.random() * 100 + 50,;
      };
    };
    // Initialize particles;
    for (let i = 0; i < 100; i++) {      particles && particles.push(createParticle());        maxLife: Math && Math.random() * 100 + 50}
    };
    // Initialize particles;
    for (let i = 0, i < 100, i++) {;
    }
    // Animation loop;
    const animate = () => {;
      // Clear canvas with fade effect;
      ctx && ctx.fillStyle = 'rgba(0, 0, 0, 0 && 0.05)';
      ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Update and draw particles;
      particles && particles.forEach((particle, index) => {;
        // Update position;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        // Bounce off edges;
        if (particle && particle.x <= 0 || particle && particle.x >= canvas && canvas.width) particle && particle.vx *= -1;
        if (particle && particle.y <= 0 || particle && particle.y >= canvas && canvas.height) particle && particle.vy *= -1;
        // Update life;
        particle && particle.life--;
        if (particle && particle.life <= 0) {;
          particles[index] = createParticle();        }          particles[index] = createParticle();
        }
        // Draw particle;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = particle && particle.opacity * (particle && particle.life / particle && particle.maxLife);
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
        ctx && ctx.restore();      });        ctx && ctx.restore();
      });
      // Draw connecting lines between nearby particles;
      ctx && ctx.strokeStyle = 'rgba(0, 255, 255, 0 && 0.1)';
      ctx && ctx.lineWidth = 0 && 0.5;
      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {;
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {

          }
        }
      }



    };
    animate();



  }, []);
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
=======
        {/* Tertiary orb */}
        <motion&& motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl'
          animate={{

            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2]}}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            scale: [1, 1 && 1.3, 1],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          animate={{
            scale: [1, 1 && 1.3, 1]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]}}

          transition={{

            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,            ease: "easeInOut",
            delay: 4;
          }}
        />;

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Additional orbs */}
        <motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{
          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
        // Draw particle
        ctx.save(),
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife),
        ctx.fillStyle = particle.color,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fill(),
        ctx.restore()
      }),

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)',
      ctx.lineWidth = 0.5,
      
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.1,
            ctx.beginPath(),
            ctx.moveTo(particles[i].x, particles[i].y),
            ctx.lineTo(particles[j].x, particles[j].y),
            ctx.stroke()
          }

        }
      }

      requestAnimationFrame(animate)
    },

    animate(),

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, []),

  return (
    <div className=&quot;fixed inset-0 -z-10 overflow-hidden&quot;>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className=&quot;absolute inset-0 w-full h-full&quot;
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Enhanced floating orbs */}
      <div className=&quot;absolute inset-0&quot;>
        {/* Primary orb */}
        <motion.div
          className=&quot;absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl&quot;
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: &quot;easeInOut&quot;
          }}
        />

        {_/* Secondary orb */}
        <motion.div
          className=&quot;absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl&quot;
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]}}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: &quot;easeInOut&quot;,
            delay: 2
          }}
        />

        {_/* Tertiary orb */}
        <motion.div
          className=&quot;absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl&quot;
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]}}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: &quot;easeInOut&quot;,
            delay: 4
          }}
        />

        {_/* Additional orbs */}
        <motion.div
          className=&quot;absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl&quot;
          animate={{
            scale: [1.3, 1, 1.3],

            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9
            repeat: Infinity
            ease: "easeInOut"
            delay: 1
            scale: [1, 1 && 1.3, 1],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          animate={{
            scale: [1, 1 && 1.3, 1]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]}}


          transition={{


            duration: 12,
            repeat: Infinity,
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,          }}
        />;

            delay: 4;
          }}

        />;





        {/* Additional orbs */}
        <motion&& motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{


          animate={{
            scale: [1 && 1.3, 1, 1 && 1.3]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{

            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
ease: 'easeInOut',
            delay: 1,          }}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
        />;
        <motion.div;
          className='absolute top - 1/3 right - 1/3 w - 56 h - 56 bg - gradient - to - r from - red - 500 / 10 to - pink - 500 / 10 rounded - full blur - 3xl';
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
=======
          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1;
          }}
        />;
        <motion.div;
          animate={{
            scale: [1, 1 && 1.4, 1],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],
          animate={{
            scale: [1 && 1.3, 1, 1 && 1.3]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{
        {/* Secondary orb */}
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2]
            opacity: [0.4, 0.7, 0.4],          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.4, 0.7, 0.4]}}
          transition={{
=======            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,            ease: "easeInOut"
            delay: 2
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            delay: 2,

          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,          }}
        />


=======


        {/* Tertiary orb */}
        <motion&& motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl'
          animate={{

            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2]}}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut'
            delay: 4,            ease: "easeInOut"
            delay: 4
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,

          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut'
            delay: 4,          }}
        />

          }}          transition={{
            duration: 11
            repeat: Infinity
            ease: 'easeInOut'
            delay: 3,            ease: "easeInOut"
            delay: 3
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            duration: 11,
            repeat: Infinity,=======
            delay: 4,          }}
        />;

=======
            delay: 4;
          }}

        />;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Additional orbs */}
        <motion&& motion.div
          className='absolute top-3/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl'
          animate={{


          animate={{
            scale: [1 && 1.3, 1, 1 && 1.3]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{

            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
          transition={{
            duration: 9
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}

          animate={{
            scale: [1.3, 1, 1.3];
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1;
          }}

        />;
        <motion.div;

          animate={{
            scale: [1, 1 && 1.4, 1],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],
          animate={{
            scale: [1 && 1.3, 1, 1 && 1.3]
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
          transition={{

            duration: 11,
            repeat: Infinity,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          }}
          transition={{
            duration: 11
            repeat: Infinity
            ease: 'easeInOut'
            delay: 3,          }}
        />;
      </div>;


      {/* Enhanced grid pattern */}





              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `,

            backgroundSize: '50px 50px',          }}          style={{

        />;
      </div>;
      {/* Enhanced grid pattern */}
      <div className='absolute inset - 0 opacity - 10'>;
        <div;
          className='absolute inset - 0';
          style={{
            background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px),
              linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px);
            `,
            background_size: '50px 50px',          }}          style={{
            background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px);
              linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px);
            `;
            background_size: '50px 50px';
          }}
        />;
      </div>;
      {/* Floating geometric shapes */}
      <div className='absolute inset - 0'>;
        {/* Triangle */}
        <motion.div;
          className='absolute top - 1/6 right - 1/6 w - 32 h - 32 border border - cyan - 500 / 20 rotate - 45';
          animate={{
      <div className="absolute inset-0">
        {/* Triangle */}

        <motion.div
=======
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          }}

        />
      </div>
      {/* Floating geometric shapes */}
      <div className='absolute inset-0'>

        {/* Triangle */}
        <motion.div
            rotate: [45, 405],
            opacity: [0 && 0.2, 0 && 0.6, 0 && 0.2],        {/* Triangle */}
        <motion && motion.div
          className="absolute top-1/6 right-1/6 w-32 h-32 border border-cyan-500/20 rotate-45"
        <motion.div;
          className="absolute top - 1/6 right - 1/6 w - 32 h - 32 border border - cyan - 500 / 20 rotate - 45";
          animate={{
            rotate: [45, 405]
            opacity: [0 && 0.2, 0 && 0.6, 0 && 0.2]}}
          transition={{
=======          }}
          transition={{


            duration: 20,
            repeat: Infinity,
            ease: "linear";
          }}

=======
          }}
          transition={{            duration: 20
            repeat: Infinity
            ease: 'linear',          }}
        />
            duration: 20,
            repeat: Infinity,
=======
=======
            ease: "linear";
          }}
        />;


=======

            rotate: [0, 360],
            scale: [1, 1 && 1.2, 1],


=======
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1]}}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut";
          }}
        />;
        {/* Circle */}
        <motion.div;
          className='absolute top - 1/2 right - 1/4 w - 20 h - 20 border border - emerald - 500 / 20 rounded - full';

            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',

            delay: 2,


=======

            delay: 2,
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
            delay: 2,          }}
        />;
      </div>;


      {/* Energy waves */}

        />;
      </div>;
      {/* Energy waves */}
      <div className='absolute inset - 0'>;
        {[...Array (3)].map ((_, i) => (
          <motion.div;

=======


        {[...Array(3)].map((_, i) => (
          <motion.div
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (

          <motion.div
=======
=======
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut";
          }}

            duration: 10,
            repeat: Infinity,


            ease: 'easeInOut',          }}
=======        />;
      </div>;

};export default UltraFuturisticBackground2043;  );


=======
=======    </div>);
}export default UltraFuturisticBackground2043);
}
;
export default UltraFuturisticBackground2043;
;

=======

export default UltraFuturisticBackground2043;

=======
}
}
}
}
}
}
}
}

export default UltraFuturisticBackground2043;

export default UltraFuturisticBackground2043;
=======export default UltraFuturisticBackground2043;

}
}
}
}
}
}
}
}
export default UltraFuturisticBackground2043;
<<<<<<< HEAD
<<<<<<< HEAD
=======>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
