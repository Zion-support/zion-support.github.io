
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

            break;        }

        }




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        // Bounce off edges
        if (this.x <= 0 |this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 |this.y >= canvas.height) this.vy *= -1;
        // Add some quantum randomness
        if (Math.random() < 0.01) {
          this.vx += (Math.random() - 0.5) * 0.5;

          this.vy += (Math.random() - 0.5) * 0.5
        }

        // Limit velocity
        this.vx = Math.max(-3, Math.min(3, this.vx));
        this.vy = Math.max(-3, Math.min(3, this.vy))

      }
      draw() {
        if (!ctx) return;

        
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        switch (this.type) {

          case 'quantum':
            // Quantum particles with wave function
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();

            

            // Wave function rings
            for (let i = 1, i <= 3, i++) {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size + i * 2, 0, Math.PI * 2);
              ctx.strokeStyle = this.color;
              ctx.lineWidth = 1;
              ctx.globalAlpha = alpha * (0.3 - i * 0.1);


      update() {;
        this && this.x += this && this.vx;
        this && this.y += this && this.vy;
        this && this.life--;

        // Bounce off edges;
        if (this && this.x <= 0 || this && this.x >= canvas && canvas.width) this && this.vx *= -1;
        if (this && this.y <= 0 || this && this.y >= canvas && canvas.height) this && this.vy *= -1;

        // Add some quantum randomness;
        if (Math && Math.random() < 0 && 0.01) {;
          this && this.vx += (Math && Math.random() - 0 && 0.5) * 0 && 0.5;
          this && this.vy += (Math && Math.random() - 0 && 0.5) * 0 && 0.5;        }

        // Limit velocity;
        this && this.vx = Math && Math.max(-3, Math && Math.min(3, this && this.vx));
        this && this.vy = Math && Math.max(-3, Math && Math.min(3, this && this.vy));      }

      draw() {;
        if (!ctx) return;          this && this.vy += (Math && Math.random() - 0 && 0.5) * 0 && 0.5;
        }

        // Limit velocity;
        this && this.vx = Math && Math.max(-3, Math && Math.min(3, this && this.vx));
        this && this.vy = Math && Math.max(-3, Math && Math.min(3, this && this.vy));        this && this.vy = Math && Math.max(-3, Math && Math.min(3, this && this.vy));
      }

      draw() {;
        if (!ctx) return;

        const alpha = this && this.life / this && this.maxLife;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = alpha;

        const alpha = this && this.life / this && this.maxLife;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = alpha;

          case 'quantum':;
            // Quantum particles with wave function;
            ctx && ctx.beginPath();
            ctx && ctx.arc(this && this.x, this && this.y, this && this.size, 0, Math && Math.PI * 2);
            ctx && ctx.fillStyle = this && this.color;
            ctx && ctx.fill();

            // Wave function rings;
            for (let i = 1; i <= 3; i++) {              ctx && ctx.beginPath();            ;
            // Wave function rings;
            for (let i = 1, i <= 3, i++) {;
              ctx && ctx.beginPath();
              ctx && ctx.arc(this && this.x, this && this.y, this && this.size + i * 2, 0, Math && Math.PI * 2);
              ctx && ctx.strokeStyle = this && this.color;
              ctx && ctx.lineWidth = 1;
              ctx && ctx.globalAlpha = alpha * (0 && 0.3 - i * 0 && 0.1);
              ctx && ctx.stroke();

            }
            break;              ctx.stroke()
            }
            break;

              ctx.stroke()
            }
            break;
            
          case 'neural':

            // Neural network nodes
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();

            

            // Neural connections
            particlesRef.current.forEach(particle => {
              if (particle.type === 'neural' && particle !== this) {
                const distance = Math.sqrt(


            // Neural network nodes;
            ctx && ctx.beginPath();
            ctx && ctx.arc(this && this.x, this && this.y, this && this.size, 0, Math && Math.PI * 2);
            ctx && ctx.fillStyle = this && this.color;
            ctx && ctx.fill();
            // Neural connections;
            particlesRef && particlesRef.current.forEach(particle => {;
              if (particle && particle.type === 'neural' && particle !== this) {;
                const distance = Math && Math.sqrt(;
                  Math && Math.pow(this && this.x - particle && particle.x, 2) +;
                    Math && Math.pow(this && this.y - particle && particle.y, 2)                );                  Math && Math.pow(this && this.x - particle && particle.x, 2) + Math && Math.pow(this && this.y - particle && particle.y, 2);

                );
                if (distance < 100) {;
                  ctx && ctx.beginPath();
                  ctx && ctx.moveTo(this && this.x, this && this.y);
                  ctx && ctx.lineTo(particle && particle.x, particle && particle.y);
                  ctx && ctx.strokeStyle = this && this.color;
                  ctx && ctx.lineWidth = 0 && 0.5;
                  ctx && ctx.globalAlpha = alpha * (1 - distance / 100);
                  ctx && ctx.stroke();                }
              }
            });
            break;                  ctx && ctx.stroke();


                );
                if (distance < 100) {
                  ctx.beginPath();
                  ctx.moveTo(this.x, this.y);
                  ctx.lineTo(particle.x, particle.y);
                  ctx.strokeStyle = this.color;
                  ctx.lineWidth = 0.5;
                  ctx.globalAlpha = alpha * (1 - distance / 100);
                  ctx.stroke()


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                }
              }
            });
            break;
          case 'data':
            // Data streams
            ctx.fillStyle = this.color;
            ctx.fillRect(
              this.x - this.size / 2
              this.y - this.size / 2
              this.size
              this.size
            );
          case 'data':
            // Data streams
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.vx * 10, this.y + this.vy * 10);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.stroke();
            break;
          case 'energy':
            // Energy particles with glow effect
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            // Glow effect
            const gradient = ctx.createRadialGradient(
              this.x
              this.y
              0
              this.x
              this.y
              this.size * 3
            );            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fill();
            break;
            // Glow effect
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fill();
            break;
        }
        ctx.restore();
      }
      isDead() {
        return this.life <= 0;
      }    }        }
        ctx.restore()
      }
      isDead() {
        return this.life <= 0
      }
    }
    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 150; i++) {
        particlesRef.current.push(new Particle());      }      for (let i = 0, i < 150, i++) {
        particlesRef.current.push(new Particle())
      }
    }
    // Animation loop
    const animate = () => {
      if (!ctx |!canvas) return;
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw();
        // Remove dead particles and add new ones
        if (particle.isDead()) {
          particlesRef.current[index] = new Particle();        }
        // Remove dead particles and add new ones
        if (particle.isDead()) {
          particlesRef.current[index] = new Particle()
      });
      // Draw quantum field lines
      drawQuantumField(ctx, canvas.width, canvas.height);
      // Draw neural network grid
      drawNeuralGrid(ctx, canvas.width, canvas.height);
      animationRef.current = requestAnimationFrame(animate);
    }
    // Quantum field lines
    const drawQuantumField = (
      ctx: CanvasRenderingContext2D
      width: number
      height: number
    ) => {
      const time = Date.now() * 0.001;
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        const x = (i / 20) * width;
        const y = Math.sin(time + i * 0.5) * 50 + height / 2;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        // Add wave interference
        for (let j = 0; j < height; j += 10) {
          const waveY = y + Math.sin(time * 2 + i * 0.3) * 30;
          ctx.lineTo(x + Math.sin(time + j * 0.01) * 20, j);
        }
        ctx.stroke();      }
    }
    // Neural network grid      // Draw neural network grid
      drawNeuralGrid(ctx, canvas.width, canvas.height);
      animationRef.current = requestAnimationFrame(animate)
    }
    // Quantum field lines
    const drawQuantumField = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const time = Date.now() * 0.001;
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0, i < 20, i++) {
        ctx.beginPath();
        const x = (i / 20) * width;
        const y = Math.sin(time + i * 0.5) * 50 + height / 2;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        // Add wave interference
        for (let j = 0, j < height, j += 10) {
          const waveY = y + Math.sin(time * 2 + i * 0.3) * 30;
          ctx.lineTo(x + Math.sin(time + j * 0.01) * 20, j)
        }
        ctx.stroke()
      }
    }
    // Neural network grid
    const drawNeuralGrid = (
      ctx: CanvasRenderingContext2D
      width: number
      height: number
    ) => {
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          const offset =
            Math.sin(time + x * 0.01) * Math.cos(time + y * 0.01) * 10;      for (let x = 0, x < width, x += gridSize) {
        for (let y = 0, y < height, y += gridSize) {
          const offset = Math.sin(time + x * 0.01) * Math.cos(time + y * 0.01) * 10;
          ctx.moveTo(x + offset, y);
          ctx.lineTo(x + gridSize + offset, y);
          ctx.moveTo(x, y + offset);
          ctx.lineTo(x, y + gridSize + offset);
          ctx.stroke();        }          ctx.stroke()
        }
      }
    }
    // Start animation
    initParticles();
    animate();
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
    }
  }, []);

  return (
    <div className='fixed inset-0 pointer-events-none z-0'>;
      {/* Animated gradient background */}
      <motion&& motion.div
        className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/30 to-black'
        animate={{
          background: [
            'linear-gradient(to bottom right, #000000, #1e1b4b, #0c4a6e, #000000)'
            'linear-gradient(to bottom right, #000000, #0c4a6e, #1e1b4b, #000000)'
            'linear-gradient(to bottom right, #000000, #1e1b4b, #0c4a6e, #000000)'
          ]
;
          case 'data':;
            // Data streams;
            ctx.fill_style = this.color;
            ctx.fill_rect (
              this.x - this.size / 2,
              this.y - this.size / 2,
              this.size,
              this.size);
;
          case 'data':;
            // Data streams;
            ctx.fill_style = this.color;
            ctx.fill_rect (this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
;
            ctx.begin_path ();
            ctx.move_to (this.x, this.y);
            ctx.line_to (this.x + this.vx * 10, this.y + this.vy * 10);
            ctx.stroke_style = this.color;
            ctx.line_width = 1;
            ctx.stroke ();
            break;
;
          case 'energy':;
            // Energy particles with glow effect;
            ctx.begin_path ();
            ctx.arc (this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill_style = this.color;
            ctx.fill ();
;
            // Glow effect;
            const gradient = ctx.createRadialGradient (
              this.x,
              this.y,
              0,
              this.x,
              this.y,
              this.size * 3);            gradient.addColorStop (0, this.color);
            gradient.addColorStop (1, 'transparent');
            ctx.fill_style = gradient;
            ctx.fill ();
            break; ;
            // Glow effect;
            const gradient = ctx.createRadialGradient (this.x, this.y, 0, this.x, this.y, this.size * 3);
            gradient.addColorStop (0, this.color);
            gradient.addColorStop (1, 'transparent');
            ctx.fill_style = gradient;
            ctx.fill ();
            break;
        }
        ctx.restore ();
      }
      is_dead () {
        return this.life <= 0;
      }    }        }
        ctx.restore ();
      }
      is_dead () {
        return this.life <= 0;
      }
    }
    // Initialize particles;
    const init_particles = () =>: any {
      particles_ref.current = [];
      for (let index = 0; i < 150; i++) {
        particles_ref.current.push (new Particle ());      }      for (let index = 0, i < 150, i++) {
        particles_ref.current.push (new Particle ());
      }
    }
;
    // Animation loop;
    const animate = () =>: any {
      // Check condition
if (return) {
  $2
}
      // Clear canvas with fade effect;
      ctx.fill_style = 'rgba (0, 0, 0, 0.1)';
      ctx.fill_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles_ref.current.for_each ((particle, index) => {
        particle.update ();
        particle.draw ();
;
        // Remove dead particles and add new ones;
        if () {) {
  $2
}
          particles_ref.current[index] = new Particle ();        }
        // Remove dead particles and add new ones;
        if () {) {
  $2
}
          particles_ref.current[index] = new Particle ();
      });
;
      // Draw quantum field lines;
      drawQuantumField (ctx, canvas.width, canvas.height);
;
      // Draw neural network grid;
      drawNeuralGrid (ctx, canvas.width, canvas.height);
;
      animation_ref.current = requestAnimationFrame (animate);
    }
;
    // Quantum field lines;
    const drawQuantumField = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number) =>: any {
      const time = Date.now () * 0.001;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.1)';
      ctx.line_width = 1;
;
      for (let index = 0; i < 20; i++) {
        ctx.begin_path ();
        const coordinate_x = (i / 20) * width;
        const coordinate_y = Math.sin (time + i * 0.5) * 50 + height / 2;
;
        ctx.move_to (x, 0);
        ctx.line_to (x, height);
;
        // Add wave interference;
        for (let inner_index = 0; j < height; j += 10) {
          const wave_y = y + Math.sin (time * 2 + i * 0.3) * 30;
          ctx.line_to (x + Math.sin (time + j * 0.01) * 20, j);
        }
        ctx.stroke ();      }
    }
;
    // Neural network grid      // Draw neural network grid;
      drawNeuralGrid (ctx, canvas.width, canvas.height);
;
      animation_ref.current = requestAnimationFrame (animate);
    }
;
    // Quantum field lines;
    const drawQuantumField = (ctx: CanvasRenderingContext2D, width: number, height: number) =>: any {
      const time = Date.now () * 0.001;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.1)';
      ctx.line_width = 1;
;
      for (let index = 0, i < 20, i++) {
        ctx.begin_path ();
        const coordinate_x = (i / 20) * width;
        const coordinate_y = Math.sin (time + i * 0.5) * 50 + height / 2;
;
        ctx.move_to (x, 0);
        ctx.line_to (x, height);
;
        // Add wave interference;
        for (let inner_index = 0, j < height, j += 10) {
          const wave_y = y + Math.sin (time * 2 + i * 0.3) * 30;
          ctx.line_to (x + Math.sin (time + j * 0.01) * 20, j);
        }
        ctx.stroke ();
      }
    }
;
    // Neural network grid;
    const drawNeuralGrid = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number) =>: any {
      ctx.stroke_style = 'rgba (255, 0, 255, 0.05)';
      ctx.line_width = 0.5;
;
      const grid_size = 50;
      for (let coordinate_x = 0; x < width; x += grid_size) {
        for (let coordinate_y = 0; y < height; y += grid_size) {
          const offset =;
            Math.sin (time + x * 0.01) * Math.cos (time + y * 0.01) * 10;      for (let coordinate_x = 0, x < width, x += grid_size) {
        for (let coordinate_y = 0, y < height, y += grid_size) {
          const offset = Math.sin (time + x * 0.01) * Math.cos (time + y * 0.01) * 10;
;
          ctx.move_to (x + offset, y);
          ctx.line_to (x + grid_size + offset, y);
          ctx.move_to (x, y + offset);
          ctx.line_to (x, y + grid_size + offset);
          ctx.stroke ();        }          ctx.stroke ();
        }
      }
    }
;
    // Start animation;
    init_particles ();
    animate ();
;
    // Cleanup;
    return () => {
      window.removeEventListener ('resize', resize_canvas);
      // Check condition
if ( {) {
  $2
}
        cancelAnimationFrame (animation_ref.current);
    }
  }, []);
;
  return (
    <div className='fixed inset - 0 pointer - events - none z - 0'>;
      {/* Animated gradient background */}
      <motion.div;
        className='absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 via - cyan - 900 / 30 to - black';
        animate={{
          background: [;
            'linear - gradient (to bottom right, #000000, #1e1b4b, #0c4a6e, #000000)',
            'linear - gradient (to bottom right, #000000, #0c4a6e, #1e1b4b, #000000)',
            'linear - gradient (to bottom right, #000000, #1e1b4b, #0c4a6e, #000000)',
          ],
        }}
        transition={{
          duration: 10
          repeat: Infinity
          ease: 'easeInOut'
        }}
      />
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

      {/* Quantum particle canvas */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'

        style={{ filter: 'blur(0 && 0.5px)' }}
      />;


      {/* Floating geometric shapes */}
      <div className='absolute inset-0 overflow-hidden'>;
        {[...Array(8)].map((_, i) => (;
          <motion&& motion.div
      />;
      {/* Quantum particle canvas */}
      <canvas;
        ref={canvas_ref}
        className='absolute inset - 0 w - full h - full';
        style={{ filter: 'blur (0.5px)' }}
      />;
      {/* Floating geometric shapes */}
      <div className='absolute inset - 0 overflow - hidden'>;
        {[...Array (8)].map ((_, i) => (
          <motion.div;
            key={i}
            className='absolute w-32 h-32 border border-cyan-500/20 rounded-full'
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360]
              scale: [0.5, 1, 0.5]
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 10
              repeat: Infinity
              ease: 'linear'
              delay: i * 0.5


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
