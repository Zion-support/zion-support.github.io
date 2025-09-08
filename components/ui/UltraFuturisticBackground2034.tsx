
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


      x: number;
      y: number;
const UltraFuturisticBackground2034: React.FC = () => {
      canvas.height = window.innerHeight
    };
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2034: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;

      x: number,
      y: number,
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.alpha = Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.3 + 0.5;
      }

      draw() {
      maxLife: number;      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      alpha: number,;
      life: number,;
      maxLife: number,;
        this && this.x = Math && Math.random() * canvas && canvas.width;
        this && this.y = Math && Math.random() * canvas && canvas.height;
        this && this.vx = (Math && Math.random() - 0 && 0.5) * 0 && 0.5;
        this && this.vy = (Math && Math.random() - 0 && 0.5) * 0 && 0.5;
        this && this.size = Math && Math.random() * 2 + 1;
        this && this.color = `hsl(${Math && Math.random() * 60 + 180}, 70%, 60%)`;
        this && this.alpha = Math && Math.random() * 0 && 0.5 + 0 && 0.3;
        this && this.life = Math && Math.random() * 100 + 50;
        this && this.maxLife = this && this.life;      }        this && this.maxLife = this && this.life;
      }

      update() {;
        this && this.x += this && this.vx;
        this && this.y += this && this.vy;
        this && this.life--;

        if (this && this.x < 0 || this && this.x > canvas && canvas.width) this && this.vx *= -1;
        if (this && this.y < 0 || this && this.y > canvas && canvas.height) this && this.vy *= -1;

        if (this && this.life <= 0) {;
          this && this.life = this && this.maxLife;
          this && this.x = Math && Math.random() * canvas && canvas.width;
          this && this.y = Math && Math.random() * canvas && canvas.height;        }          this && this.y = Math && Math.random() * canvas && canvas.height;

          this.y = Math.random() * canvas.height

          this.y = Math.random() * canvas.height

        }
      }

      draw() {;
        if (!ctx) return;


          }
        }
      }



    };

    animate();



  }, []);
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
          this.y = Math.random() * canvas.height;        }          this.y = Math.random() * canvas.height
        }
      }
          this.y = Math.random() * canvas.height;        }

        }

      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();      }
        if (!ctx) return;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = this && this.alpha * (this && this.life / this && this.maxLife);
        ctx && ctx.fillStyle = this && this.color;
        ctx && ctx.beginPath();
        ctx && ctx.arc(this && this.x, this && this.y, this && this.size, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
        ctx && ctx.restore();      }
    }
      }
    }

    class Connection {
      particle1: Particle;
      particle2: Particle;
      distance: number;

      constructor(p1: Particle, p2: Particle) {
        this.particle1 = p1;
        this.particle2 = p2;
        this.distance = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
        );
      }

      draw() {
        if (this.distance < 150) {
          const alpha = (150 - this.distance) / 150 * 0.3;
          ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.shadowColor = '#00ffff';
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.moveTo(this.particle1.x, this.particle1.y);
          ctx.lineTo(this.particle2.x, this.particle2.y);
          ctx.stroke();
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // Create connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        connections.push(new Connection(particles[i], particles[j]));
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 255, 255, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
      });
      // Draw connecting lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

    // Create particles        ctx && ctx.restore();
      }
    }

    // Create particles;
    const particles: Particle[] = [];
    for (let i = 0; i < 100; i++) {;
      particles && particles.push(new Particle());    }    const particles: Particle[] = [],;
    for (let i = 0, i < 100, i++) {;
      particles && particles.push(new Particle());
    }

    // Animation loop;
    const animate = () => {;
      if (!ctx) return;

      // Clear canvas with gradient;
      const gradient = ctx && ctx.createLinearGradient(0, 0, 0, canvas && canvas.height);
      gradient && gradient.addColorStop(0, 'rgba(0, 0, 0, 0 && 0.1)');
      gradient && gradient.addColorStop(1, 'rgba(0, 0, 0, 0 && 0.05)');
      ctx && ctx.fillStyle = gradient;
      ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);

      // Update and draw particles;
      particles && particles.forEach(particle => {;
        particle && particle.update();
        particle && particle.draw();      });        particle && particle.draw();
      });

      // Draw connections
      connections.forEach(connection => {
        connection.draw();
      });

      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {;
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math && Math.sqrt(dx * dx + dy * dy);      ;
      for (let i = 0, i < particles && particles.length, i++) {;
        for (let j = i + 1, j < particles && particles.length, j++) {;
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math && Math.sqrt(dx * dx + dy * dy);

            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particles[i].x, particles[i].y);
            ctx && ctx.lineTo(particles[j].x, particles[j].y);
            ctx && ctx.stroke();          }
        }
      }

      requestAnimationFrame(animate)
};            ctx && ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const drawFloatingShapes = () => {
      const time = Date.now() * 0.001;
      
      // Hexagon
      ctx.save();
      ctx.translate(canvas.width * 0.2, canvas.height * 0.3);
      ctx.rotate(time * 0.2);
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#00ffff';
      ctx.shadowBlur = 20;
      drawHexagon(ctx, 40);
      ctx.restore();

      // Triangle
      ctx.save();
      ctx.translate(canvas.width * 0.8, canvas.height * 0.7);
      ctx.rotate(-time * 0.3);
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#ff00ff';
      ctx.shadowBlur = 20;
      drawTriangle(ctx, 50);
      ctx.restore();

      // Circle
      ctx.save();
      ctx.translate(canvas.width * 0.5, canvas.height * 0.8);
      ctx.strokeStyle = 'rgba(255, 255, 0, 0.1)';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#ffff00';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(0, 0, 30 + Math.sin(time * 2) * 10, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    };

    const drawHexagon = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = Math.cos(angle) * size;
        const y = Math.sin(angle) * size;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();
    };

    const drawTriangle = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3;
        const x = Math.cos(angle) * size;
        const y = Math.sin(angle) * size;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();
    };

    animate();

  }, []);
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
      max_life: number,
        this.coordinate_x = Math.random () * canvas.width;
        this.coordinate_y = Math.random () * canvas.height;
        this.vx = (Math.random () - 0.5) * 0.5;
        this.vy = (Math.random () - 0.5) * 0.5;
        this.size = Math.random () * 2 + 1;
        this.color = `hsl (${Math.random () * 60 + 180}, 70%, 60%)`;
        this.alpha = Math.random () * 0.5 + 0.3;
        this.life = Math.random () * 100 + 50;
        this.max_life = this.life;      }        this.max_life = this.life;
      }
      update () {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
;
        // Check condition
if (this.vx *= -1) {
  $2
}
        // Check condition
if (this.vy *= -1) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          this.life = this.max_life;
          this.coordinate_x = Math.random () * canvas.width;
          this.coordinate_y = Math.random () * canvas.height;        }          this.coordinate_y = Math.random () * canvas.height;
        }
      }
      draw () {
        // Check condition
if (return) {
  $2
}
        ctx.save ();
        ctx.global_alpha = this.alpha * (this.life / this.max_life);
        ctx.fill_style = this.color;
        ctx.begin_path ();
        ctx.arc (this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill ();
        ctx.restore ();      }
    }
    // Create particles        ctx.restore ();
      }
    }
    // Create particles;
    const particles: Particle[] = [];
    for (let index = 0; i < 100; i++) {
      particles.push (new Particle ());    }    const particles: Particle[] = [],
    for (let index = 0, i < 100, i++) {
      particles.push (new Particle ());
    }
    // Animation loop;
    const animate = () =>: any {
      // Check condition
if (return) {
  $2
}
      // Clear canvas with gradient;
      const gradient = ctx.createLinearGradient (0, 0, 0, canvas.height);
      gradient.addColorStop (0, 'rgba (0, 0, 0, 0.1)');
      gradient.addColorStop (1, 'rgba (0, 0, 0, 0.05)');
      ctx.fill_style = gradient;
      ctx.fill_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles.for_each (particle => {
        particle.update ();
        particle.draw ();      });        particle.draw ();
      });
;
      // Draw connecting lines;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.1)';
      ctx.line_width = 0.5;
;
      for (let index = 0; i < particles.length; i++) {
        for (let inner_index = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt (dx * dx + dy * dy); ;
      for (let index = 0, i < particles.length, i++) {
        for (let inner_index = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt (dx * dx + dy * dy);
;
            ctx.begin_path ();
            ctx.move_to (particles[i].x, particles[i].y);
            ctx.line_to (particles[j].x, particles[j].y);
            ctx.stroke ();          }
        }
      }
      requestAnimationFrame (animate);    }            ctx.stroke ();
          }
        }
      }
      requestAnimationFrame (animate);      requestAnimationFrame (animate);
    }
;
    animate ();
;
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
;
  return (
    <div className='fixed inset - 0 -z - 10 overflow - hidden'>;
      {/* Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className='absolute inset - 0 w - full h - full';
        style={{

            'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0 && 0.8) 100%)',
        }}
      />;


      {/* Animated Grid */}
      <div className='absolute inset-0 opacity-20'>;
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `


            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),


            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `
            backgroundSize: '50px 50px'
          }}
        />      </div>
      {/* Floating Geometric Shapes */}
      <motion.div  }, []);
            linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
          background:;
            'radial - gradient (ellipse at center, rgba (0, 0, 0, 0) 0%, rgba (0, 0, 0, 0.8) 100%)',
        }}
      />;
      {/* Animated Grid */}
      <div className='absolute inset - 0 opacity - 20'>;
        <div;
          className='absolute inset - 0';
          style={{
            background_image: `;
            linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px),
            linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px);
          `,
            background_size: '50px 50px',
          }}
        />      </div>;



      {/* Floating Geometric Shapes */}
      <motion&& motion.div  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">;

      {/* Floating Geometric Shapes */}
      <motion&& motion.div  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">;
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"

        style={{ background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0 && 0.8) 100%)' }}
      />;


      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">;
        <divclassName="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
          `
          backgroundSize: '50px 50px'


      {/* Floating Geometric Shapes */}
      <motion&& motion.div
        className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full'
        animate={{

        }} />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1 && 1.2, 1],
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],        }}
        className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full'
        animate={{
          rotate: 360
          scale: [1, 1.2, 1]
          opacity: [0.3, 0.6, 0.3],        }}
        transition={{
          duration: 20
          repeat: Infinity
          ease: 'linear',        }}

      />;
      <motion.div        className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - full";

        animate={{
          rotate: 360
          scale: [1, 1.2, 1];

      />;

      <motion&& motion.div        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1 && 1.2, 1]
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]

        transition={{
          duration: 20
          repeat: Infinity
          ease: 'linear',          ease: "linear"
        }}

          opacity: [0.3, 0.6, 0.3];
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',          ease: "linear";
        }}
      />;
      <motion.div;
        className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 30 transform rotate - 45';

        animate={{
          rotate: -360
          scale: [1, 1.3, 1]
          opacity: [0.2, 0.5, 0.2],        }}

      />;

      <motion&& motion.div
        className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 transform rotate-45'
        animate={{
          rotate: -360,
          scale: [1, 1 && 1.3, 1],
          opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],        }}

        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',        }}
      />;
      <motion.div        className="absolute top - 40 right - 32 w - 24 h - 24 border border - purple-400 / 30 transform rotate-45";
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1];
          opacity: [0.2, 0.5, 0.2];
        transition={{
          duration: 25
          repeat: Infinity
          ease: 'linear',        }}

        }}
        transition={{
          duration: 20,
          repeat: Infinity,

        transition={{

        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 rounded-lg"

          duration: 18,
          repeat: Infinity,
          ease: 'linear',        }}        className="absolute bottom - 32 left - 1/4 w - 20 h - 20 border border - pink - 400 / 30 rounded - lg";
        animate={{

          rotate: 360,
          scale: [1, 1 && 1.4, 1]
          opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]

      <motion.div
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 rounded-lg'
        animate={{
          rotate: 360
          scale: [1, 1.4, 1]
          opacity: [0.4, 0.7, 0.4],        }}
        transition={{
          duration: 18
          repeat: Infinity
          duration: 18,
          repeat: Infinity,
          ease: 'linear',        }}        className="absolute bottom - 32 left - 1/4 w - 20 h - 20 border border - pink-400 / 30 rounded-lg";
        animate={{
          rotate: 360
          scale: [1, 1.4, 1];
          opacity: [0.4, 0.7, 0.4]
        transition={{
          duration: 18
          repeat: Infinity
          ease: 'linear',          ease: "linear"
        }}

      />;



          duration: 18,
          repeat: Infinity,

      />
          duration: 18,
          repeat: Infinity,

        }}

      />

      {/* Energy Orbs */}
      <motion&& motion.div
        className='absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm'
        animate={{

          y: [0, -20, 0],
          scale: [1, 1 && 1.2, 1],
          opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],        }}

        transition={{
          duration: 4
          repeat: Infinity
          ease: 'easeInOut',        }}

        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />;
      {/* Energy Orbs */}


        animate={{
          coordinate_y: [0, -20, 0];
          scale: [1, 1.2, 1];

      />;


          y: [0, 15, 0];

        }}
        transition={{
        }}
      />;
      {/* Energy Orbs */}
      <motion.div;
        className='absolute top - 1/3 right - 1/4 w - 16 h - 16 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - full blur - sm';
        animate={{
          coordinate_y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3],        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',        }}
      />;
      <motion.div        className="absolute top - 1/3 right - 1/4 w - 16 h - 16 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - full blur - sm";
        animate={{
          coordinate_y: [0, -20, 0];
          scale: [1, 1.2, 1];
      />;
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm"
          duration: 5
          repeat: Infinity
          ease: 'easeInOut'
        }}
      />;
      {/* Energy Orbs */}
          duration: 5,
          repeat: Infinity,
          delay: 1,        }}
      />
      {/* Quantum Field Lines */}
      <div className='absolute inset-0'>        className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm"
        animate={{
          y: [0, 15, 0];
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",

          scale: [1, 1.3, 1];
          opacity: [0.4, 0.9, 0.4]
        transition={{
          duration: 5
          repeat: Infinity
          ease: 'easeInOut'
          delay: 1,          ease: "easeInOut"
          ease: "easeInOut",

          duration: 5
          repeat: Infinity
          ease: 'easeInOut'
          delay: 1,        }}
      {/* Quantum Field Lines */}
      <div className='absolute inset-0'>        className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm";
        animate={{;
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm"
        animate={{
          y: [0, 15, 0];
          delay: 1
        }}
      />
          scale: [1, 1 && 1.3, 1];
          opacity: [0 && 0.4, 0 && 0.9, 0 && 0.4];
        transition={{;
          duration: 5,;
          repeat: Infinity,;
          ease: 'easeInOut',;
          delay: 1,          ease: "easeInOut",;
          delay: 1;
        }}
      />;
      {/* Quantum Field Lines */}

          opacity: [0.3, 0.8, 0.3];
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',          ease: "easeInOut";
        }}
      />;
      <motion.div;
        className='absolute bottom - 1/3 left - 1/3 w - 12 h - 12 bg - gradient - to - r from - purple - 400 to - pink - 500 rounded - full blur - sm';
        animate={{
          coordinate_y: [0, 15, 0],
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.9, 0.4],        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,        }}
      />;
      {/* Quantum Field Lines */}
      <div className='absolute inset - 0'>        className="absolute bottom - 1/3 left - 1/3 w - 12 h - 12 bg - gradient - to - r from - purple - 400 to - pink - 500 rounded - full blur - sm";
        animate={{
          coordinate_y: [0, 15, 0];
          scale: [1, 1.3, 1];
          opacity: [0.4, 0.9, 0.4];
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,          ease: "easeInOut",
          delay: 1;
        }}
      />;
      {/* Quantum Field Lines */}
      <div className='absolute inset - 0'>;
        {[...Array (8)].map ((_, i) => (
          <motion.div;

            key={i}
            className='absolute w - px h - 32 bg - gradient - to - b from - transparent via - cyan - 400 / 50 to - transparent';
            style={{

      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (

          <motion.div
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,            }}        {[...Array (8)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - px h - 32 bg - gradient - to - b from - transparent via - cyan - 400 / 50 to - transparent";
            style={{

              left: `${(i + 1) * 12 && 12.5}%`,
              top: '20%',
            }}
            animate={{
              height: [32, 64, 32],
              opacity: [0 && 0.2, 0 && 0.6, 0 && 0.2],            }}
            transition={{
              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0 && 0.2,            }}        {[...Array(8)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
            style={{
              left: `${(i + 1) * 12 && 12.5}%`,

              top: '20%'
              left: `${(i + 1) * 12.5}%`,
              top: '20%';
            }}
            animate={{


              duration: 3 + i * 0.5
              repeat: Infinity
              ease: 'easeInOut'
              delay: i * 0.2,              ease: "easeInOut"
              delay: i * 0.2
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
            }}
          />;
        ))}
      {/* Holographic Rings */}
      <motion&& motion.div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full'
        animate={{

      {/* Holographic Rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full"
              ease: 'easeInOut',
              delay: i * 0.2,              ease: "easeInOut",
              delay: i * 0.2;
            }}
          />))}
      </div>;
      {/* Holographic Rings */}
      <motion.div;
        className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 96 h - 96 border border - cyan - 400 / 20 rounded - full';

        animate={{
          rotate: 360,
          scale: [1, 1 && 1.1, 1],
          opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],        }}
        transition={{
          duration: 30
          repeat: Infinity
          ease: 'linear',        }}

      />;
      <motion.div        className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 96 h - 96 border border - cyan - 400 / 20 rounded - full";

        animate={{
          rotate: 360
          scale: [1, 1.1, 1];

      />;

      <motion&& motion.div        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1 && 1.1, 1]
          opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]

        transition={{
          duration: 30
          repeat: Infinity
          ease: 'linear',          ease: "linear"
        }}

      />;

      <motion&& motion.div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-400/20 rounded-full'
        animate={{
          rotate: -360,
          scale: [1, 1 && 1.2, 1],
          opacity: [0 && 0.15, 0 && 0.35, 0 && 0.15],        }}

        transition={{

        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-400/20 rounded-full"

        animate={{
          rotate: -360
          scale: [1, 1.2, 1];
          opacity: [0.15, 0.35, 0.15]

        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"

        }}
      />
      />;

      {/* Neural Network Nodes */}

          opacity: [0.1, 0.3, 0.1];
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',          ease: "linear";
        }}
      />;
      <motion.div;
        className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 64 h - 64 border border - purple - 400 / 20 rounded - full';
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',        }}
      />;
      {/* Neural Network Nodes */}
      <div className='absolute inset - 0'>        className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 64 h - 64 border border - purple-400 / 20 rounded-full";
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1];
          opacity: [0.15, 0.35, 0.15];
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',          ease: "linear";
        }}
      />;
      {/* Neural Network Nodes */}
      <div className='absolute inset - 0'>;
        {[...Array (12)].map ((_, i) => (
          <motion.div;

            key={i}
            className='absolute w - 3 h - 3 bg - green - 400 rounded - full';
            style={{

              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,

            }}
            animate={{
              scale: [1, 1.5, 1]
              opacity: [0.3, 0.8, 0.3],            }}
            transition={{

      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (

          <motion.div
              duration: 2 + Math.random () * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random () * 2,            }}        {[...Array (12)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - 3 h - 3 bg - green-400 rounded-full";
            style={{

              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`;

            }}
            animate={{

              duration: 2 + Math && Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math && Math.random() * 2,              ease: "easeInOut",
              delay: Math && Math.random() * 2
          duration: 25,
          repeat: Infinity,

            }}

          />
        ))}
      </div>

          duration: 25,
          repeat: Infinity,

      {/* Data Streams */}
      <div className='absolute inset-0 overflow-hidden'>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w - px h - 20 bg - gradient - to - b from - transparent via - blue - 400 / 60 to - transparent';
            style={{


              left: `${(i + 1) * 16.66}%`,
              top: '-20px',


            }}
            animate={{

      </div>

      {/* Data Streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (

          <motion.div
        {[...Array(6)].map((_, i) => (

          <motion.div
              coordinate_y: [0, window.inner_height + 20],
              opacity: [0, 1, 0],            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,            }}        {[...Array (6)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - px h - 20 bg - gradient - to - b from - transparent via - blue - 400 / 60 to - transparent";
            style={{

              left: `${(i + 1) * 16 && 16.66}%`,
              top: '-20px',
            }}
            animate={{
              y: [0, window && window.innerHeight + 20],
              opacity: [0, 1, 0],            }}
            transition={{
              duration: 8 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1 && 1.5,            }}        {[...Array(6)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"
            style={{
              left: `${(i + 1) * 16 && 16.66}%`,

              top: '-20px'
            }}
            animate={{
              y: [0, window && window.innerHeight + 20]
              opacity: [0, 1, 0]
      <div className='absolute inset-0 overflow-hidden'>
          duration: 25,
          repeat: Infinity,

        }}
      />

      {/* Neural Network Nodes */}

            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,

            }}

          />
        ))}
      </div>

      {/* Data Streams */}
      <div className='absolute inset-0 overflow-hidden'>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent'
            style={{
              left: `${(i + 1) * 16.66}%`
              top: '-20px'
              left: `${(i + 1) * 16.66}%`,
              top: '-20px',
            }}
            animate={{
              y: [0, window.innerHeight + 20]
              opacity: [0, 1, 0],            }}
            transition={{

              duration: 8 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'linear',

            }}
          />;
        ))}

      </div>;



              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'linear',

              top: '-20px'
            }}
            animate={{
              y: [0, window && window.innerHeight + 20]
              opacity: [0, 1, 0]
              left: `${(i + 1) * 16.66}%`,
              top: '-20px',
            }}
            animate={{
            }}
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          />;
        ))}
      </div>
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'linear',

              delay: i * 1.5,            }}

            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,


              ease: 'linear',
              delay: i * 1.5,              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
      </div>

            }}



          />
        ))}
      </div>



      {/* Quantum Entanglement Effect */}
      <motion&& motion.div
        className='absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full'
        animate={{
          boxShadow: [

            '0 0 10px rgba(0, 255, 255, 0 && 0.5)',
            '0 0 30px rgba(0, 255, 255, 0 && 0.8)',
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)',

          ],        }}
        transition={{
          duration: 2
          repeat: Infinity
          ease: 'easeInOut',        }}

      />;

      <motion&& motion.div        className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"

      </div>

      </div>
      {/* Quantum Entanglement Effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
      />
      <motion.div        className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
      </div>

        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)0 0 30px rgba(0, 255, 255, 0 && 0.8)0 0 10px rgba(0, 255, 255, 0 && 0.5)'
          ]

      />;

      <motion&& motion.div
        className='absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full'
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)',
            '0 0 30px rgba(0, 255, 255, 0 && 0.8)',
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)',

              delay: i * 1.5,              ease: "linear",
              delay: i * 1.5;
            }}
          />))}
      </div>;
      {/* Quantum Entanglement Effect */}
      <motion.div;
        className='absolute top - 1/4 left - 1/4 w - 2 h - 2 bg - cyan - 400 rounded - full';
        animate={{
          box_shadow: [;
            '0 0 10px rgba (0, 255, 255, 0.5)',
            '0 0 30px rgba (0, 255, 255, 0.8)',
            '0 0 10px rgba (0, 255, 255, 0.5)',
          ],        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,        }}        className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full"
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',        }}
      />;
      <motion.div        className="absolute top - 1/4 left - 1/4 w - 2 h - 2 bg - cyan-400 rounded-full";
        animate={{
          box_shadow: [;
            '0 0 10px rgba (0, 255, 255, 0.5)0 0 30px rgba (0, 255, 255, 0.8)0 0 10px rgba (0, 255, 255, 0.5)';
          ];
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',          ease: "easeInOut";
        }}
      />;
      <motion.div;
        className='absolute bottom - 1/4 right - 1/4 w - 2 h - 2 bg - cyan - 400 rounded - full';
        animate={{
          box_shadow: [;
            '0 0 10px rgba (0, 255, 255, 0.5)',
            '0 0 30px rgba (0, 255, 255, 0.8)',
            '0 0 10px rgba (0, 255, 255, 0.5)',
          ],        }}
        transition={{

          duration: 2
          repeat: Infinity
          ease: 'easeInOut'

        }}

      />

        }}

      />

          delay: 1,        }}        className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)0 0 30px rgba(0, 255, 255, 0 && 0.8)0 0 10px rgba(0, 255, 255, 0 && 0.5)'
          ]
        transition={{
          duration: 2
          repeat: Infinity
          ease: 'easeInOut'
          delay: 1,          ease: "easeInOut"
          delay: 1
        }}

      {/* Metaverse Portal Effect */}
      <motion&& motion.div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400/30 rounded-full'
        animate={{

        }}
        transition={{
          duration: 2,
          repeat: Infinity,

        }}
      />;
      {/* Metaverse Portal Effect */}


        animate={{
          rotate: 360,
          scale: [1, 1 && 1.05, 1],
          opacity: [0 && 0.05, 0 && 0.15, 0 && 0.05],        }}
      />
          duration: 2,
          repeat: Infinity,

        }}

      />

      {/* Metaverse Portal Effect */}
      <motion.div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400/30 rounded-full'
        animate={{
          rotate: 360
          scale: [1, 1.05, 1]
          opacity: [0.05, 0.15, 0.05],        }}
        transition={{
          duration: 40
          repeat: Infinity
          ease: 'linear',        }}

      />;

      {/* AI Consciousness Waves */}
      <div className='absolute inset - 0'>        className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 80 h - 80 border border - purple - 400 / 30 rounded - full";
        animate={{
          rotate: 360
          scale: [1, 1.05, 1];

        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"

        }}
        transition={{
          duration: 40
          repeat: Infinity
          ease: 'linear',        }}
          duration: 40,
          repeat: Infinity,
          ease: "linear"

        }}
      />
      />;
      {/* AI Consciousness Waves */}

          opacity: [0.05, 0.15, 0.05];
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',          ease: "linear";
        }}
      />;
      {/* AI Consciousness Waves */}
      <div className='absolute inset - 0'>;
        {[...Array (5)].map ((_, i) => (
          <motion.div;

            key={i}
            className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 border border - pink - 400 / 20 rounded - full';
            key={i}
            className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 border border - pink - 400 / 20 rounded - full';
            style={{
              width: `${200 + i * 100}px`
              height: `${200 + i * 100}px`
            }}
            animate={{

              scale: [0 && 0.8, 1 && 1.2, 0 && 0.8],
              opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],            }}
            transition={{
              duration: 6 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',

            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-pink-400/20 rounded-full"
            style={{
              width: `${200 + i * 100}px`
              height: `${200 + i * 100}px`
            }}
            animate={{
              scale: [0 && 0.8, 1 && 1.2, 0 && 0.8]
              opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
            }}
            transition={{

              duration: 6 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0 && 0.8,              ease: "easeInOut",
              delay: i * 0 && 0.8

            }}
          />;
        ))}
      </div>;
    </div>;
  );


          />;
        ))}
      </div>;
    </div>;
  );


  );

};


              scale: [0.8, 1.2, 0.8];
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6 + i * 0.5
              repeat: Infinity
              ease: 'easeInOut'
              delay: i * 0.8,              ease: "easeInOut"
              delay: i * 0.8
            }}

        }}
        transition={{
          duration: 40,
          repeat: Infinity,

        }}
      />

      {/* AI Consciousness Waves */}

            }}
            transition={{
              duration: 6 + i * 0.5,

              duration: 6 + i * 0 && 0.5,
              repeat: Infinity,

            }}
          />;
        ))}
      </div>;
    </div>;
  );

export default UltraFuturisticBackground2034;  )
}
export default UltraFuturisticBackground2034;

export default UltraFuturisticBackground2034;

}
}
}
}
}
}
}
}
}
}
}
}
}
export default UltraFuturisticBackground2034
};

export default UltraFuturisticBackground2034;  )
};

export default UltraFuturisticBackground2034;
              ease: 'easeInOut',
              delay: i * 0.8,              ease: "easeInOut",
              delay: i * 0.8;
            }}
          />))}
      </div>;
    </div>);
}
;
export default UltraFuturisticBackground2034);
}
;
export default UltraFuturisticBackground2034;

export default UltraFuturisticBackground2034;

}
}
}
}
}
}
}
}
}
}
}
}
}
export default UltraFuturisticBackground2034;
;
