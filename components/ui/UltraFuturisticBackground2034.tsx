<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD


=======
const UltraFuturisticBackground2034: React.FC = () => {
      canvas.height = window.innerHeight
    };
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2034: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;      canvas.height = window.innerHeight
    }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Particle system
    class Particle {
<<<<<<< HEAD
const UltraFuturisticBackground2034: React.FC = () => {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;
    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;
    // Set canvas size;
    const resizeCanvas = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;      canvas && canvas.height = window && window.innerHeight;
    };
    resizeCanvas();
    window && window.addEventListener('resize', resizeCanvas);
    // Particle system;
    class Particle {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      x: number;
      y: number;
  const canvas_ref = useRef < HTMLCanvasElement>(null);
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
    // Set canvas size;
    const resize_canvas = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;      canvas.height = window.inner_height;
    }
    resize_canvas ();
    window.addEventListener ('resize', resize_canvas);
;
    // Particle system;
    class Particle {
      coordinate_x: number;
      coordinate_y: number;
=======
      x: number;
      y: number;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
<<<<<<< HEAD

      x: number,
      y: number,
=======
      max_life: number;      coordinate_x: number,
      coordinate_y: number,

=======
<<<<<<< HEAD
      x: number,
      y: number,
      max_life: number;      coordinate_x: number,
      coordinate_y: number,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,
      life: number,
<<<<<<< HEAD

        this.maxLife = this.life

=======
this.maxLife = this.life
=======
      maxLife: number;      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      alpha: number
      life: number
      maxLife: number
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
        this.alpha = Math.random() * 0.5 + 0.3;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;      }        this.maxLife = this.life
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        if (this.x < 0 |this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 |this.y > canvas.height) this.vy *= -1;
        if (this.life <= 0) {
          this.life = this.maxLife;
          this.x = Math.random() * canvas.width;

<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          this.y = Math.random() * canvas.height;        }

        }

<<<<<<< HEAD
      }

=======



      }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      draw() {
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
          this.y = Math.random() * canvas.height

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
          this.y = Math.random() * canvas.height
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
      }
      draw() {;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        if (!ctx) return;


          }
        }
      }



=======
=======
<<<<<<< HEAD
          this.y = Math.random() * canvas.height;        }          this.y = Math.random() * canvas.height
        }
<<<<<<< HEAD
      }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          this.y = Math.random() * canvas.height;        }

        }

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      draw() {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha * (this.life / this.maxLife);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
<<<<<<< HEAD
        ctx.restore()
=======
        ctx.restore();      }
    }
    // Create particles        ctx.restore()
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      }
    }
    // Create particles
    const particles: Particle[] = [];
<<<<<<< HEAD
=======
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());    }    const particles: Particle[] = []
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    for (let i = 0, i < 100, i++) {
      particles.push(new Particle())
    }
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
<<<<<<< HEAD
        particle.draw()
=======
        particle.draw();      });        particle.draw()
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      });
      // Draw connecting lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD
=======
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
<<<<<<< HEAD
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
      // Draw connecting lines;
      ctx && ctx.strokeStyle = 'rgba(0, 255, 255, 0 && 0.1)';
      ctx && ctx.lineWidth = 0 && 0.5;
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
      requestAnimationFrame(animate);    };            ctx && ctx.stroke();
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke()
          }
        }
      }
      requestAnimationFrame(animate)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    };
    animate();
<<<<<<< HEAD



  }, []);
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      window.removeEventListener ('resize', resize_canvas);
    }
  }, []);
;
  return (
    <div className='fixed inset - 0 -z - 10 overflow - hidden'>;
      {/* Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className='absolute inset - 0 w - full h - full';
        style={{
<<<<<<< HEAD

            'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0 && 0.8) 100%)',
        }}
      />;


=======
            'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0 && 0.8) 100%)',
        }}
      />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Animated Grid */}
      <div className='absolute inset-0 opacity-20'>;
=======
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();          }
        }
      }
      requestAnimationFrame(animate);    };            ctx.stroke()
          }
        }
      }
      requestAnimationFrame(animate);      requestAnimationFrame(animate)
    }
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    }
  }, []);
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />
      {/* Animated Grid */}
      <div className='absolute inset-0 opacity-20'>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `

<<<<<<< HEAD
<<<<<<< HEAD
=======

            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `
            backgroundSize: '50px 50px'
          }}
        />      </div>
      {/* Floating Geometric Shapes */}
      <motion.div  }, []);
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD



=======
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, []);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Floating Geometric Shapes */}
      <motion&& motion.div  }, [])
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">;
=======
<<<<<<< HEAD
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
=======
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `
            backgroundSize: '50px 50px'
          }}
        />      </div>
      {/* Floating Geometric Shapes */}
      <motion.div  }, []);
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
<<<<<<< HEAD

        style={{ background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0 && 0.8) 100%)' }}
      />;


=======
<<<<<<< HEAD
        style={{ background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0 && 0.8) 100%)' }}
      />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">;
        <divclassName="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
          `
          backgroundSize: '50px 50px'
<<<<<<< HEAD


=======
        }} />;
      </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Floating Geometric Shapes */}
      <motion&& motion.div
        className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full'
        animate={{
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        style={{ background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)' }}
      />
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `;
          backgroundSize: '50px 50px'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        }} />
      </div>
      {/* Floating Geometric Shapes */}
      <motion.div
<<<<<<< HEAD
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full"
      {/* Floating Geometric Shapes */}
      <motion.div  }, []);
;
  return (
    <div className="fixed inset - 0 -z - 10 overflow - hidden">;
      {/* Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w - full h - full";
        style={{ background: 'radial - gradient (ellipse at center, rgba (0, 0, 0, 0) 0%, rgba (0, 0, 0, 0.8) 100%)' }}
      />;
      {/* Animated Grid */}
      <div className="absolute inset - 0 opacity - 20">;
        <div className="absolute inset - 0" style={{
          background_image: `;
            linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px);
            linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px);
          `;
          background_size: '50px 50px';
        }} />;
      </div>;
      {/* Floating Geometric Shapes */}
      <motion.div;
        className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - full';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        animate={{
          rotate: 360,
          scale: [1, 1 && 1.2, 1],
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],        }}
=======
        className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full'
        animate={{
          rotate: 360
          scale: [1, 1.2, 1]
          opacity: [0.3, 0.6, 0.3],        }}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        transition={{
          duration: 20
          repeat: Infinity
          ease: 'linear',        }}
<<<<<<< HEAD

      />;
      <motion.div        className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - full";

        animate={{
          rotate: 360
          scale: [1, 1.2, 1];

=======
<<<<<<< HEAD
      />;
      <motion.div        className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - full";
        animate={{
          rotate: 360
          scale: [1, 1.2, 1];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />;
      <motion&& motion.div        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1 && 1.2, 1]
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]
<<<<<<< HEAD

=======
=======
      />
      <motion.div        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full"
        animate={{
          rotate: 360
          scale: [1, 1.2, 1];
          opacity: [0.3, 0.6, 0.3]
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        transition={{
          duration: 20
          repeat: Infinity
          ease: 'linear',          ease: "linear"
        }}
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          opacity: [0.3, 0.6, 0.3];
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',          ease: "linear";
        }}
      />;
      <motion.div;
        className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 30 transform rotate - 45';
<<<<<<< HEAD

=======
=======
      />
      <motion.div
        className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 transform rotate-45'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        animate={{
          rotate: -360
          scale: [1, 1.3, 1]
          opacity: [0.2, 0.5, 0.2],        }}
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />;
      <motion&& motion.div
        className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 transform rotate-45'
        animate={{
          rotate: -360,
          scale: [1, 1 && 1.3, 1],
          opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],        }}
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',        }}
      />;
      <motion.div        className="absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 30 transform rotate - 45";
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1];
          opacity: [0.2, 0.5, 0.2];
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        transition={{
          duration: 25
          repeat: Infinity
          ease: 'linear',        }}
<<<<<<< HEAD
=======
<<<<<<< HEAD

      constructor() {
        this.x = Math.random() * canvas.width,
        this.y = Math.random() * canvas.height,
        this.vx = (Math.random() - 0.5) * 0.5,
        this.vy = (Math.random() - 0.5) * 0.5,
        this.size = Math.random() * 2 + 1,
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`,
        this.alpha = Math.random() * 0.5 + 0.3,
        this.life = Math.random() * 100 + 50,
        this.maxLife = this.life
      }

      update() {
        this.x += this.vx,
        this.y += this.vy,
        this.life--,

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1,
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1,

        if (this.life <= 0) {
          this.life = this.maxLife,
          this.x = Math.random() * canvas.width,
          this.y = Math.random() * canvas.height
        }
      }

      draw() {
        if (!ctx) return,
        ctx.save(),
        ctx.globalAlpha = this.alpha * (this.life / this.maxLife),
        ctx.fillStyle = this.color,
        ctx.beginPath(),
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2),
        ctx.fill(),
        ctx.restore()
      }
    }

    // Create particles
    const particles: Particle[] = []
    for (let i = 0, i < 100, i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return,
      
      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height),
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)'),
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.05)'),
      ctx.fillStyle = gradient,
      ctx.fillRect(0, 0, canvas.width, canvas.height),

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(),
        particle.draw()
      }),

      // Draw connecting lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)',
      ctx.lineWidth = 0.5,
      
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
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
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className=&quot;absolute inset-0 w-full h-full&quot;
        style={{ background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)' }}
      />

      {/* Animated Grid */}
      <div className=&quot;absolute inset-0 opacity-20&quot;>
        <div className=&quot;absolute inset-0&quot; style={{
          backgroundImage: `
            linear-gradient(rgba(0, _255, _255, _0.1) 1px, _transparent 1px), _linear-gradient(90deg, _rgba(0, _255, _255, _0.1) 1px, _transparent 1px)
          `, _backgroundSize: '50px 50px'}} />
      </div>

      {_/* Floating Geometric Shapes */}
      <motion.div
        className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full&quot;
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

        }}
        transition={{
          duration: 20,
          repeat: Infinity,
<<<<<<< HEAD

        transition={{

=======
=======
ease: 'linear',          ease: "linear";
        }}
      />;
      <motion.div;
        className='absolute bottom - 32 left - 1/4 w - 20 h - 20 border border - pink - 400 / 30 rounded - lg';
        animate={{
          rotate: 360,
          scale: [1, 1 && 1.4, 1],
          opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],        }}
        transition={{
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
<<<<<<< HEAD
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 rounded-lg'
        animate={{
          rotate: 360
          scale: [1, 1.4, 1]
          opacity: [0.4, 0.7, 0.4],        }}
        transition={{

          ease: 'linear',        }}        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 rounded-lg"
=======
        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 rounded-lg"
<<<<<<< HEAD

=======
          duration: 18,
          repeat: Infinity,
          ease: 'linear',        }}        className="absolute bottom - 32 left - 1/4 w - 20 h - 20 border border - pink - 400 / 30 rounded - lg";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        animate={{

          rotate: 360,
          scale: [1, 1 && 1.4, 1]
          opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]

=======
          duration: 18,
          repeat: Infinity,
          ease: 'linear',        }}        className="absolute bottom - 32 left - 1/4 w - 20 h - 20 border border - pink - 400 / 30 rounded - lg";
        animate={{
          rotate: 360,
          scale: [1, 1 && 1.4, 1]
          opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]
=======
      />
      <motion.div        className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 transform rotate-45"
        animate={{
          rotate: -360
          scale: [1, 1.3, 1];
          opacity: [0.2, 0.5, 0.2]
        transition={{
          duration: 25
          repeat: Infinity
          ease: 'linear',          ease: "linear"
        }}
      />
      <motion.div
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 rounded-lg'
        animate={{
          rotate: 360
          scale: [1, 1.4, 1]
          opacity: [0.4, 0.7, 0.4],        }}
        transition={{
<<<<<<< HEAD
<<<<<<< HEAD
          duration: 18
          repeat: Infinity
=======
          duration: 18,
          repeat: Infinity,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          ease: 'linear',        }}        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 rounded-lg"
        animate={{
          rotate: 360
          scale: [1, 1.4, 1];
          opacity: [0.4, 0.7, 0.4]
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        transition={{
          duration: 18
          repeat: Infinity
          ease: 'linear',          ease: "linear"
        }}
<<<<<<< HEAD
      />;
=======
      />

        }}

      />

=======
<<<<<<< HEAD

      />;


=======

          duration: 18,
          repeat: Infinity,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
          duration: 18,
          repeat: Infinity,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

        }}

      />

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Energy Orbs */}
      <motion&& motion.div
        className='absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm'
        animate={{
<<<<<<< HEAD

          y: [0, -20, 0],
          scale: [1, 1 && 1.2, 1],
          opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],        }}

=======
          y: [0, -20, 0],
          scale: [1, 1 && 1.2, 1],
          opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],        }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        transition={{
          duration: 4
          repeat: Infinity
          ease: 'easeInOut',        }}
<<<<<<< HEAD

        }}
        transition={{
<<<<<<< HEAD

          delay: 1,        }}
      />
      {/* Quantum Field Lines */}
      <div className='absolute inset-0'>        className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm"
        animate={{
          y: [0, 15, 0];
          scale: [1, 1.3, 1];
          opacity: [0.4, 0.9, 0.4]
        transition={{
          duration: 5
          repeat: Infinity
          ease: 'easeInOut'
          delay: 1,          ease: "easeInOut"
=======
=======
        }}
        transition={{
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          duration: 18,
          repeat: Infinity,
          ease: "linear"
          opacity: [0.4, 0.7, 0.4];
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',          ease: "linear";
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        }}
      />;
      {/* Energy Orbs */}


        animate={{
          coordinate_y: [0, -20, 0];
          scale: [1, 1.2, 1];

      />;


          y: [0, 15, 0];

=======
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
          duration: 5
          repeat: Infinity
          ease: 'easeInOut'
=======
          duration: 5,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'easeInOut',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          delay: 1,        }}
      />
      {/* Quantum Field Lines */}
      <div className='absolute inset-0'>        className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        animate={{
          y: [0, 15, 0];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
<<<<<<< HEAD
          ease: "easeInOut",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
ease: "easeInOut",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

            key={i}
            className='absolute w - px h - 32 bg - gradient - to - b from - transparent via - cyan - 400 / 50 to - transparent';
            style={{

      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (

=======
            key={i}
            className='absolute w - px h - 32 bg - gradient - to - b from - transparent via - cyan - 400 / 50 to - transparent';
            style={{
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <motion.div
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,            }}        {[...Array (8)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - px h - 32 bg - gradient - to - b from - transparent via - cyan - 400 / 50 to - transparent";
            style={{
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              top: '20%'
              left: `${(i + 1) * 12.5}%`,
              top: '20%';
            }}
            animate={{
<<<<<<< HEAD
<<<<<<< HEAD
              height: [32, 64, 32];
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 3 + i * 0.5
              repeat: Infinity
              ease: 'easeInOut'
              delay: i * 0.2,              ease: "easeInOut"
              delay: i * 0.2
            }}
          />
        ))}
      </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


<<<<<<< HEAD
      {/* Quantum Field Lines */}

=======
              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0 && 0.2,              ease: "easeInOut",
              delay: i * 0 && 0.2
              height: [32, 64, 32];
              opacity: [0.2, 0.6, 0.2];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            }}
            transition={{
<<<<<<< HEAD
              duration: 3 + i * 0.5,
              repeat: Infinity,
<<<<<<< HEAD

            }}

          />
        ))}
      </div>

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
</div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Holographic Rings */}
      <motion&& motion.div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full'
        animate={{
<<<<<<< HEAD

=======
      </div>

=======
      </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        animate={{
          rotate: 360,
          scale: [1, 1 && 1.1, 1],
          opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],        }}
        transition={{
          duration: 30
          repeat: Infinity
          ease: 'linear',        }}
<<<<<<< HEAD

      />;
      <motion.div        className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 96 h - 96 border border - cyan - 400 / 20 rounded - full";

        animate={{
          rotate: 360
          scale: [1, 1.1, 1];

=======
      />;
      <motion.div        className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 96 h - 96 border border - cyan - 400 / 20 rounded - full";
        animate={{
          rotate: 360
          scale: [1, 1.1, 1];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />;
      <motion&& motion.div        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1 && 1.1, 1]
          opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        transition={{
          duration: 30
          repeat: Infinity
          ease: 'linear',          ease: "linear"
        }}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />;
      <motion&& motion.div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-400/20 rounded-full'
        animate={{
          rotate: -360,
          scale: [1, 1 && 1.2, 1],
          opacity: [0 && 0.15, 0 && 0.35, 0 && 0.15],        }}
<<<<<<< HEAD

        transition={{

<<<<<<< HEAD
          ease: 'linear',        }}
=======
=======
        transition={{
          duration: 25
          repeat: Infinity
          ease: 'linear',        }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
<<<<<<< HEAD
          ease: "linear"
=======
ease: "linear"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-400/20 rounded-full"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        animate={{
          rotate: -360
          scale: [1, 1.2, 1];
          opacity: [0.15, 0.35, 0.15]
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
<<<<<<< HEAD
          ease: "linear"

=======
ease: "linear"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }}
      />
      />;
      {/* Neural Network Nodes */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          opacity: [0.1, 0.3, 0.1];
=======
              duration: 3 + i * 0.5
              repeat: Infinity
              ease: 'easeInOut'
              delay: i * 0.2,              ease: "easeInOut"
              delay: i * 0.2
            }}
          />
        ))}
      </div>
=======
<<<<<<< HEAD
          duration: 5,
          repeat: Infinity,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

        }}
      />

      {/* Quantum Field Lines */}

            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,

            }}

          />
        ))}
      </div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Holographic Rings */}
      <motion.div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full'
        animate={{
          rotate: 360
          scale: [1, 1.1, 1]
          opacity: [0.1, 0.3, 0.1],        }}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
          duration: 25,
          repeat: Infinity,
=======
<<<<<<< HEAD
<<<<<<< HEAD
          duration: 25
          repeat: Infinity
=======
          duration: 25,
          repeat: Infinity,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          ease: 'linear',        }}
      />;
      {/* Neural Network Nodes */}
      <div className='absolute inset - 0'>        className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 64 h - 64 border border - purple - 400 / 20 rounded - full";
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
<<<<<<< HEAD

            key={i}
            className='absolute w - 3 h - 3 bg - green - 400 rounded - full';
            style={{

              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,

=======
            key={i}
            className='absolute w - 3 h - 3 bg - green - 400 rounded - full';
            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            }}
            animate={{
              scale: [1, 1.5, 1]
              opacity: [0.3, 0.8, 0.3],            }}
            transition={{
<<<<<<< HEAD

      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (

=======
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <motion.div
              duration: 2 + Math.random () * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random () * 2,            }}        {[...Array (12)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - 3 h - 3 bg - green - 400 rounded - full";
            style={{
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`;
<<<<<<< HEAD

            }}
            animate={{
<<<<<<< HEAD
              scale: [1, 1.5, 1];
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 2 + Math.random() * 2
              repeat: Infinity
              ease: 'easeInOut'
              delay: Math.random() * 2,              ease: "easeInOut"
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      {/* Data Streams */}
      <div className='absolute inset-0 overflow-hidden'>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
            }}
            animate={{
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              duration: 2 + Math && Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math && Math.random() * 2,              ease: "easeInOut",
              delay: Math && Math.random() * 2
<<<<<<< HEAD

<<<<<<< HEAD
=======
              scale: [1, 1.5, 1];
              opacity: [0.3, 0.8, 0.3];
            }}
            transition={{
              duration: 2 + Math.random () * 2,
              repeat: Infinity,
      </div>;
      {/* Data Streams */}
      <div className='absolute inset-0 overflow-hidden'>;
        {[...Array(6)].map((_, i) => (;
          <motion&& motion.div
              ease: 'easeInOut',
              delay: Math.random () * 2,              ease: "easeInOut",
              delay: Math.random () * 2;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            }}

          />
        ))}
      </div>

      {/* Data Streams */}
<<<<<<< HEAD
      <div className='absolute inset-0 overflow-hidden'>
=======
=======

          duration: 25,
          repeat: Infinity,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

        {[...Array(6)].map((_, i) => (
          <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            key={i}
            className='absolute w - px h - 20 bg - gradient - to - b from - transparent via - blue - 400 / 60 to - transparent';
            style={{

<<<<<<< HEAD
=======

              left: `${(i + 1) * 16.66}%`,
              top: '-20px',


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            }}
            animate={{

=======
      <div className='absolute inset - 0 overflow - hidden'>;
        {[...Array (6)].map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute w - px h - 20 bg - gradient - to - b from - transparent via - blue - 400 / 60 to - transparent';
            style={{
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>
      {/* Data Streams */}
<<<<<<< HEAD
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (

=======
<<<<<<< HEAD
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <motion.div
              coordinate_y: [0, window.inner_height + 20],
              opacity: [0, 1, 0],            }}
            transition={{
<<<<<<< HEAD

              delay: i * 1.5,            }}        {[...Array(6)].map((_, i) => (
          <motion.div
=======
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,            }}        {[...Array (6)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - px h - 20 bg - gradient - to - b from - transparent via - blue - 400 / 60 to - transparent";
            style={{
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"
            style={{
              left: `${(i + 1) * 16 && 16.66}%`,

              top: '-20px'
            }}
            animate={{
              y: [0, window && window.innerHeight + 20]
              opacity: [0, 1, 0]
<<<<<<< HEAD
=======
=======
=======
      <div className='absolute inset-0 overflow-hidden'>
=======
<<<<<<< HEAD
          duration: 25,
          repeat: Infinity,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent'
            style={{
<<<<<<< HEAD
              left: `${(i + 1) * 16.66}%`
              top: '-20px'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
              left: `${(i + 1) * 16.66}%`,
              top: '-20px',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            }}
            animate={{
              y: [0, window.innerHeight + 20]
              opacity: [0, 1, 0],            }}
            transition={{
<<<<<<< HEAD

              duration: 8 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'linear',

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            }}
          />;
        ))}

      </div>;


=======

              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'linear',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
<<<<<<< HEAD
              duration: 8 + i * 0.5
              repeat: Infinity
              ease: 'linear'
=======
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'linear',
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              delay: i * 1.5,            }}        {[...Array(6)].map((_, i) => (
          <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"
            style={{
              left: `${(i + 1) * 16 && 16.66}%`,
              top: '-20px'
            }}
            animate={{
              y: [0, window && window.innerHeight + 20]
              opacity: [0, 1, 0]
<<<<<<< HEAD
              left: `${(i + 1) * 16.66}%`,
              top: '-20px';
            }}
            animate={{
              coordinate_y: [0, window.inner_height + 20];
              opacity: [0, 1, 0];
            }}
            transition={{
              duration: 8 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'linear',
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
=======
<<<<<<< HEAD
            }}
            transition={{
              duration: 8 + i * 0.5
              repeat: Infinity
              ease: 'linear'
              delay: i * 1.5,              ease: "linear"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              delay: i * 1.5
            }}
          />;
        ))}
<<<<<<< HEAD
      </div>;
=======
      </div>
=======
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,            }}

=======
=======
              delay: i * 1.5,            }}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
              ease: 'linear',
              delay: i * 1.5,              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
      </div>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

            }}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          />
        ))}
      </div>

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Quantum Entanglement Effect */}
      <motion&& motion.div
        className='absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full'
        animate={{
          boxShadow: [
<<<<<<< HEAD

            '0 0 10px rgba(0, 255, 255, 0 && 0.5)',
            '0 0 30px rgba(0, 255, 255, 0 && 0.8)',
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)',

=======
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)',
            '0 0 30px rgba(0, 255, 255, 0 && 0.8)',
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          ],        }}
        transition={{
          duration: 2
          repeat: Infinity
          ease: 'easeInOut',        }}
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />;
      <motion&& motion.div        className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
<<<<<<< HEAD

=======
      </div>

=======
      </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Quantum Entanglement Effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
=======
      />
      <motion.div        className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)0 0 30px rgba(0, 255, 255, 0 && 0.8)0 0 10px rgba(0, 255, 255, 0 && 0.5)'
          ]
<<<<<<< HEAD

      />;

      <motion&& motion.div
=======
<<<<<<< HEAD
      />;
      <motion&& motion.div
=======
        transition={{
          duration: 2
          repeat: Infinity
          ease: 'easeInOut',          ease: "easeInOut"
        }}
      />
      <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        className='absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full'
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)',
            '0 0 30px rgba(0, 255, 255, 0 && 0.8)',
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)',
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

          delay: 1,        }}        className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full"
=======
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',        }}
      />;
      <motion.div        className="absolute top - 1/4 left - 1/4 w - 2 h - 2 bg - cyan - 400 rounded - full";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
          duration: 2
          repeat: Infinity
          ease: 'easeInOut'
=======
          duration: 2,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'easeInOut',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          delay: 1,        }}        className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0 && 0.5)0 0 30px rgba(0, 255, 255, 0 && 0.8)0 0 10px rgba(0, 255, 255, 0 && 0.5)'
          ]
        transition={{
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          duration: 2
          repeat: Infinity
          ease: 'easeInOut'
          delay: 1,          ease: "easeInOut"
          delay: 1
        }}
<<<<<<< HEAD
<<<<<<< HEAD
      />

        }}

      />

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Metaverse Portal Effect */}
      <motion&& motion.div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400/30 rounded-full'
        animate={{
<<<<<<< HEAD

=======
        }}
        transition={{
          duration: 2,
          repeat: Infinity,

        }}
      />;
      {/* Metaverse Portal Effect */}


=======
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
ease: 'easeInOut',
          delay: 1,        }}        className="absolute bottom - 1/4 right - 1/4 w - 2 h - 2 bg - cyan - 400 rounded - full";
        animate={{
          box_shadow: [;
            '0 0 10px rgba (0, 255, 255, 0.5)0 0 30px rgba (0, 255, 255, 0.8)0 0 10px rgba (0, 255, 255, 0.5)';
          ];
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,          ease: "easeInOut",
          delay: 1;
        }}
      />;
      {/* Metaverse Portal Effect */}
      <motion.div;
        className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 80 h - 80 border border - purple - 400 / 30 rounded - full';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        animate={{
          rotate: 360,
          scale: [1, 1 && 1.05, 1],
          opacity: [0 && 0.05, 0 && 0.15, 0 && 0.05],        }}
=======
      />
=======
<<<<<<< HEAD
          duration: 2,
          repeat: Infinity,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

        }}

      />

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Metaverse Portal Effect */}
      <motion.div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400/30 rounded-full'
        animate={{
          rotate: 360
          scale: [1, 1.05, 1]
          opacity: [0.05, 0.15, 0.05],        }}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        transition={{
          duration: 40
          repeat: Infinity
          ease: 'linear',        }}
<<<<<<< HEAD

      />;

=======
<<<<<<< HEAD
      />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* AI Consciousness Waves */}
      <div className='absolute inset - 0'>        className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 80 h - 80 border border - purple - 400 / 30 rounded - full";
        animate={{
          rotate: 360
          scale: [1, 1.05, 1];
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }}
        transition={{
<<<<<<< HEAD

          ease: 'linear',          ease: "linear"
=======
          duration: 40,
          repeat: Infinity,
          ease: "linear"
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }}
      />
      />;
      {/* AI Consciousness Waves */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='absolute inset-0'>

        }}
      />

      {/* AI Consciousness Waves */}

            }}
            transition={{
              duration: 6 + i * 0.5,
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

            key={i}
            className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 border border - pink - 400 / 20 rounded - full';
=======
            key={i}
            className='absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 border border - pink - 400 / 20 rounded - full';
=======
      />
      {/* AI Consciousness Waves */}
      <div className='absolute inset-0'>        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400/30 rounded-full"
        animate={{
          rotate: 360
          scale: [1, 1.05, 1];
          opacity: [0.05, 0.15, 0.05]
        transition={{
<<<<<<< HEAD
          duration: 40
          repeat: Infinity
=======
          duration: 40,
          repeat: Infinity,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          ease: 'linear',          ease: "linear"
        }}
      />
      {/* AI Consciousness Waves */}
      <div className='absolute inset-0'>
<<<<<<< HEAD
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-pink-400/20 rounded-full'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            style={{
              width: `${200 + i * 100}px`
              height: `${200 + i * 100}px`
            }}
            animate={{
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              scale: [0 && 0.8, 1 && 1.2, 0 && 0.8],
              opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],            }}
            transition={{
              duration: 6 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
<<<<<<< HEAD

=======
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
              delay: i * 0.8,            }}        {[...Array (5)].map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 border border - pink - 400 / 20 rounded - full";
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`;
            }}
            animate={{
              scale: [0.8, 1.2, 0.8];
              opacity: [0.1, 0.3, 0.1];
      />

      {_/* Metaverse Portal Effect */}
      <motion.div
        className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400/30 rounded-full&quot;
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
          opacity: [0.05, 0.15, 0.05]
=======
              scale: [0.8, 1.2, 0.8]
              opacity: [0.1, 0.3, 0.1],            }}
            transition={{
              duration: 6 + i * 0.5
              repeat: Infinity
              ease: 'easeInOut'
              delay: i * 0.8,            }}        {[...Array(5)].map((_, i) => (
          <motion.div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-pink-400/20 rounded-full"
            style={{
              width: `${200 + i * 100}px`
              height: `${200 + i * 100}px`
            }}
            animate={{
<<<<<<< HEAD
              scale: [0 && 0.8, 1 && 1.2, 0 && 0.8]
              opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
            }}
            transition={{

              duration: 6 + i * 0 && 0.5,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0 && 0.8,              ease: "easeInOut",
              delay: i * 0 && 0.8

            }}
<<<<<<< HEAD

          />
=======
          />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        ))}
      </div>;
    </div>;
  );
<<<<<<< HEAD

export default UltraFuturisticBackground2034;  )
}
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

=======


=======
  );

};


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
=======
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
<<<<<<< HEAD
          ease: &quot;linear&quot;
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        }}
      />

      {/* AI Consciousness Waves */}
<<<<<<< HEAD
      <div className=&quot;absolute inset-0&quot;>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-pink-400/20 rounded-full&quot;
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1]
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
<<<<<<< HEAD
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
=======

            }}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          />
        ))}
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default UltraFuturisticBackground2034;  )
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
export default UltraFuturisticBackground2034;
<<<<<<< HEAD
;
=======

<<<<<<< HEAD
=======
export default UltraFuturisticBackground2034;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

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
=======
export default UltraFuturisticBackground2034;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
