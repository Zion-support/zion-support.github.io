<<<<<<< HEAD
<<<<<<< HEAD
 canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let animationFrameId: number;
let particles: Array< {
  

const UltraAdvancedFuturisticBackgroundV2: React.FC<
  UltraAdvancedFuturisticBackgroundV2Props
> = ({ children, className = '' }) => {
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraAdvancedFuturisticBackgroundV2Props {
  children: React.ReactNode,
  className?: string
}

=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraAdvancedFuturisticBackgroundV2Props {
  children: React.ReactNode,
  className?: string
}

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const UltraAdvancedFuturisticBackgroundV2: React.FC<UltraAdvancedFuturisticBackgroundV2Props> = ({ 
  children;
  className = '' 
}) => {
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

<<<<<<< HEAD
<<<<<<< HEAD
    let animationFrameId: number;
=======
    let animationFrameId: number,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    let particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,
      maxLife: number
    }> = [];

    const colors = [
<<<<<<< HEAD
      '#00ffff',
      '#ff00ff',
      '#ffff00',
      '#00ff00',
      '#ff0080',
      '#8000ff',
      '#ff8000',
      '#0080ff',
      '#ff0080',
      '#80ff00',
=======
    let animationFrameId: number,
    let particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,
      maxLife: number
    }> = [];

    const colors = [
      '#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff#ff8000#0080ff', '#ff0080#80ff00'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      '#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff#ff8000#0080ff', '#ff0080#80ff00'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    ];

    // Initialize particles
    const initParticles = () => {
      particles = [];
<<<<<<< HEAD
<<<<<<< HEAD
      for (let i = 0; i < 150; i++) {
=======
      for (let i = 0, i < 150, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      for (let i = 0, i < 150, i++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
          maxLife: 100,
        });
=======
          maxLife: 100
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          maxLife: 100
        })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    };

    // Update and draw particles
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
<<<<<<< HEAD
<<<<<<< HEAD
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
=======
        canvas.width / 2, canvas.height / 2, 0;
        canvas.width / 2, canvas.height / 2, canvas.width / 2
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        canvas.width / 2, canvas.height / 2, 0;
        canvas.width / 2, canvas.height / 2, canvas.width / 2
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
<<<<<<< HEAD
<<<<<<< HEAD
          particle.color = colors[Math.floor(Math.random() * colors.length)];
=======
          particle.color = colors[Math.floor(Math.random() * colors.length)]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          particle.color = colors[Math.floor(Math.random() * colors.length)]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
              Math.pow(particle.x - otherParticle.x, 2) +
                Math.pow(particle.y - otherParticle.y, 2)
=======
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            );
            if (distance < 100) {
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
<<<<<<< HEAD
<<<<<<< HEAD
              ctx.stroke();
            }
          }
        });
=======
              ctx.stroke()
            }
          }
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              ctx.stroke()
            }
          }
        })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      });

      // Draw quantum matrix overlay
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
        ctx.stroke();
=======
      
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        ctx.stroke()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }

      // Draw holographic circles
      ctx.globalAlpha = 0.05;
<<<<<<< HEAD
<<<<<<< HEAD
      for (let i = 0; i < 5; i++) {
        const centerX =
          canvas.width / 2 + Math.sin(Date.now() * 0.001 + i) * 100;
        const centerY =
          canvas.height / 2 + Math.cos(Date.now() * 0.001 + i) * 100;
        const radius = 100 + Math.sin(Date.now() * 0.002 + i) * 50;

=======
      for (let i = 0, i < 5, i++) {
        const centerX = canvas.width / 2 + Math.sin(Date.now() * 0.001 + i) * 100;
        const centerY = canvas.height / 2 + Math.cos(Date.now() * 0.001 + i) * 100;
        const radius = 100 + Math.sin(Date.now() * 0.002 + i) * 50;
        
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      for (let i = 0, i < 5, i++) {
        const centerX = canvas.width / 2 + Math.sin(Date.now() * 0.001 + i) * 100;
        const centerY = canvas.height / 2 + Math.cos(Date.now() * 0.001 + i) * 100;
        const radius = 100 + Math.sin(Date.now() * 0.002 + i) * 50;
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        ctx.strokeStyle = `hsl(${180 + i * 60}, 100%, 50%)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
<<<<<<< HEAD
<<<<<<< HEAD
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(updateParticles);
=======
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(updateParticles)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(updateParticles)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
<<<<<<< HEAD
<<<<<<< HEAD
      initParticles();
=======
      initParticles()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      initParticles()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    window.addEventListener('resize', handleResize);
    initParticles();
    updateParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
<<<<<<< HEAD
<<<<<<< HEAD
        cancelAnimationFrame(animationFrameId);
      }
    };
=======
        cancelAnimationFrame(animationFrameId)
      }
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        cancelAnimationFrame(animationFrameId)
      }
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
<<<<<<< HEAD
<<<<<<< HEAD
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(20,20,40,0.6) 50%, rgba(0,0,0,0.9) 100%)',
        }}
=======
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(20,20,40,0.6) 50%, rgba(0,0,0,0.9) 100%)' }}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      />
      
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20"
          animate={{
<<<<<<< HEAD
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
=======
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(20,20,40,0.6) 50%, rgba(0,0,0,0.9) 100%)' }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20"
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1];
            opacity: [0.1, 0.3, 0.1]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [0, 360];
            scale: [1, 1.2, 1];
            opacity: [0.1, 0.3, 0.1]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400 opacity-20"
          animate={{
<<<<<<< HEAD
            rotate: [360, 0],
            scale: [1, 0.8, 1],
            opacity: [0.1, 0.4, 0.1],
=======
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400 opacity-20"
          animate={{
            rotate: [360, 0];
            scale: [1, 0.8, 1];
            opacity: [0.1, 0.4, 0.1]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [360, 0];
            scale: [1, 0.8, 1];
            opacity: [0.1, 0.4, 0.1]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400 opacity-20"
          animate={{
<<<<<<< HEAD
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
=======
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400 opacity-20"
          animate={{
            rotate: [0, 360];
            scale: [1, 1.3, 1];
            opacity: [0.1, 0.2, 0.1]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [0, 360];
            scale: [1, 1.3, 1];
            opacity: [0.1, 0.2, 0.1]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400 opacity-20"
          animate={{
<<<<<<< HEAD
            rotate: [360, 0],
            scale: [1, 0.9, 1],
            opacity: [0.1, 0.3, 0.1],
=======
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400 opacity-20"
          animate={{
            rotate: [360, 0];
            scale: [1, 0.9, 1];
            opacity: [0.1, 0.3, 0.1]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [360, 0];
            scale: [1, 0.9, 1];
            opacity: [0.1, 0.3, 0.1]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
      </div>

      {/* Quantum Energy Particles */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='fixed inset-0 pointer-events-none z-20'>
=======
      <div className="fixed inset-0 pointer-events-none z-20">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
<<<<<<< HEAD
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
=======
      <div className="fixed inset-0 pointer-events-none z-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              y: [0, -100, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
<<<<<<< HEAD
<<<<<<< HEAD
              ease: 'easeInOut',
=======
              ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
          />
        ))}
      </div>

      {/* Neural Network Connections */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='fixed inset-0 pointer-events-none z-30'>
        <svg className='w-full h-full'>
          <defs>
            <linearGradient
              id='neuralGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#00ffff' stopOpacity='0.3' />
              <stop offset='100%' stopColor='#ff00ff' stopOpacity='0.3' />
=======
      <div className="fixed inset-0 pointer-events-none z-30">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.3" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="fixed inset-0 pointer-events-none z-30">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.3" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </linearGradient>
          </defs>
          {[...Array(15)].map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
<<<<<<< HEAD
<<<<<<< HEAD
              stroke='url(#neuralGradient)'
              strokeWidth='1'
              opacity='0.1'
              animate={{
                opacity: [0.1, 0.3, 0.1],
                strokeDasharray: [0, 100, 0],
=======
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              opacity="0.1"
              animate={{
                opacity: [0.1, 0.3, 0.1];
                strokeDasharray: [0, 100, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              opacity="0.1"
              animate={{
                opacity: [0.1, 0.3, 0.1];
                strokeDasharray: [0, 100, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
<<<<<<< HEAD
<<<<<<< HEAD
                ease: 'easeInOut',
=======
                ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='relative z-40'>{children}</div>
=======
      <div className="relative z-40">
        {children}
      </div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    </div>
  )
};

<<<<<<< HEAD
export default UltraAdvancedFuturisticBackgroundV2;
=======
      <div className="relative z-40">
        {children}
      </div>
    </div>
  )
};

export default UltraAdvancedFuturisticBackgroundV2;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default UltraAdvancedFuturisticBackgroundV2;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
