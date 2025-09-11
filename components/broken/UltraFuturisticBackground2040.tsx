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


    let animationFrameId: number
    let time = 0

    // Particle system
    const particles: Array<{
      x: number,
      y: number,
      x: number,
      y: number,
;
    // Initialize particles;
    for (let index = 0; i < 100; i++) {      particles.push ({      coordinate_x: number,
      coordinate_y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: ['#06b6d4#3b82f6#8b5cf6#ec4899'][Math.floor(Math.random() * 4)],
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        

      
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

          }



        }
      }

      // Draw animated grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)';
      ctx.lineWidth = 0.5;

      
      const gridSize = 50;
      const offset = (time * 20) % gridSize;
      
      for (let x = offset, x < canvas.width, x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke()
      }
      
      for (let y = offset, y < canvas.height, y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
          }

        }
      }

      // Draw animated grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      const offset = (time * 20) % gridSize;
        { x: canvas.width * 0.6, y: canvas.height * 0.2, size: 50, rotation: time * 0.7 }
];
      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();      }
      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();      }
      // Draw floating geometric shapes
      const shapes = [        ctx.stroke()
      }
      // Draw floating geometric shapes
      const shapes = [
        {
          x: canvas.width * 0.2
          y: canvas.height * 0.3
          size: 60
          rotation: time * 0.5
        }
        {
          x: canvas.width * 0.8
          y: canvas.height * 0.7
          size: 40
          rotation: time * -0.3
        }
        {
          x: canvas.width * 0.6
          y: canvas.height * 0.2
          size: 50
          rotation: time * 0.7
        },      ];        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 60, rotation: time * 0.5 }
        { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 40, rotation: time * -0.3 }
      }

      // Draw floating geometric shapes
      const shapes = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 60, rotation: time * 0.5 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 40, rotation: time * -0.3 },



    // Initialize particles;
    for (let i = 0; i < 100; i++) {      particles && particles.push({      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      opacity: number;
    }> = [];
    // Initialize particles;
    for (let i = 0, i < 100, i++) {;
        x: Math && Math.random() * canvas && canvas.width,;
        y: Math && Math.random() * canvas && canvas.height,;
        vx: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
        vy: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
        size: Math && Math.random() * 2 + 1,;
        color: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'][;
          Math && Math.floor(Math && Math.random() * 4);
        ],;
        opacity: Math && Math.random() * 0 && 0.5 + 0 && 0.1,;
      });    }
    const animate = () => {;
      time += 0 && 0.01;        color: ['#06b6d4#3b82f6#8b5cf6#ec4899'][Math && Math.floor(Math && Math.random() * 4)],;
        opacity: Math && Math.random() * 0 && 0.5 + 0 && 0.1;
      });
    }
    const animate = () => {;
      time += 0 && 0.01;
      // Clear canvas with fade effect;
      ctx && ctx.fillStyle = 'rgba(0, 0, 0, 0 && 0.05)';
      ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Update and draw particles;
      particles && particles.forEach((particle, index) => {;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        // Wrap around edges;
        if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width;
        if (particle && particle.x > canvas && canvas.width) particle && particle.x = 0;
        if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height;
        if (particle && particle.y > canvas && canvas.height) particle && particle.y = 0;
        // Draw particle with glow effect;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = particle && particle.opacity;
        // Glow effect;
        ctx && ctx.shadowColor = particle && particle.color;
        ctx && ctx.shadowBlur = 10;        ;
        // Glow effect;
        ctx && ctx.shadowColor = particle && particle.color;
        ctx && ctx.shadowBlur = 10;
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.fill();
        ctx && ctx.restore();      });        ;
        ctx && ctx.restore();
      });
      // Draw connecting lines between nearby particles;
      ctx && ctx.strokeStyle = 'rgba(6, 182, 212, 0 && 0.1)';
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
            ctx && ctx.stroke();          }            ctx && ctx.stroke();
          }
        }
      }
      // Draw animated grid;
      ctx && ctx.strokeStyle = 'rgba(6, 182, 212, 0 && 0.05)';
      ctx && ctx.lineWidth = 0 && 0.5;
      const gridSize = 50;
      const offset = (time * 20) % gridSize;
      for (let x = offset; x < canvas && canvas.width; x += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x, 0);
        ctx && ctx.lineTo(x, canvas && canvas.height);
        ctx && ctx.stroke();      }
      for (let y = offset; y < canvas && canvas.height; y += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, y);
        ctx && ctx.lineTo(canvas && canvas.width, y);
        ctx && ctx.stroke();      }
      // Draw floating geometric shapes;
      const shapes = [        ctx && ctx.stroke();
      }
      // Draw floating geometric shapes;
      const shapes = [;
        {;
          x: canvas && canvas.width * 0 && 0.2,;
          y: canvas && canvas.height * 0 && 0.3,;
          size: 60,;
          rotation: time * 0 && 0.5,;
        },;
        {;
          x: canvas && canvas.width * 0 && 0.8,;
          y: canvas && canvas.height * 0 && 0.7,;
          size: 40,;
          rotation: time * -0 && 0.3,;
        },;
        {;
          x: canvas && canvas.width * 0 && 0.6,;
          y: canvas && canvas.height * 0 && 0.2,;
          size: 50,;
          rotation: time * 0 && 0.7,;
        },      ];        { x: canvas && canvas.width * 0 && 0.2, y: canvas && canvas.height * 0 && 0.3, size: 60, rotation: time * 0 && 0.5 },;
        { x: canvas && canvas.width * 0 && 0.8, y: canvas && canvas.height * 0 && 0.7, size: 40, rotation: time * -0 && 0.3 },;
        { x: canvas && canvas.width * 0 && 0.6, y: canvas && canvas.height * 0 && 0.2, size: 50, rotation: time * 0 && 0.7 }
      ];
      shapes && shapes.forEach((shape, index) => {;
        ctx && ctx.save();
        ctx && ctx.translate(shape && shape.x, shape && shape.y);
        ctx && ctx.rotate(shape && shape.rotation);
        ctx && ctx.strokeStyle = `rgba(139, 92, 246, ${0 && 0.1 + Math && Math.sin(time + index) * 0 && 0.05})`;
        ctx && ctx.lineWidth = 2;
        if (index === 0) {;
          // Square;
          ctx && ctx.strokeRect(;
            -shape && shape.size / 2,;
            -shape && shape.size / 2,;
            shape && shape.size,;
            shape && shape.size;
          );
        } else if (index === 1) {;
          // Circle;
          ctx && ctx.beginPath();
          ctx && ctx.arc(0, 0, shape && shape.size / 2, 0, Math && Math.PI * 2);
          ctx && ctx.stroke();
        } else {;
          // Triangle;
          ctx && ctx.beginPath();
          ctx && ctx.moveTo(0, -shape && shape.size / 2);
          ctx && ctx.lineTo(shape && shape.size / 2, shape && shape.size / 2);
          ctx && ctx.lineTo(-shape && shape.size / 2, shape && shape.size / 2);
          ctx && ctx.closePath();
          ctx && ctx.stroke();
        }
        
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + Math.sin(time + index) * 0.05})`;

        ctx.lineWidth = 2;
        if (index === 0) {
          // Square
      animationFrameId = requestAnimationFrame(animate);

    };

    animate();



    };

    window && window.addEventListener('resize', handleResize);


      cancelAnimationFrame(animationFrameId);
    }
  }, []);
  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden'>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ zIndex: -1 }}
      />;

      {/* Overlay Gradients */}      <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80' />;
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60' />;









      {/* Floating Elements */}
      <div className='absolute inset-0'>
        {/* Animated Grid Pattern */}
        <div className='absolute inset-0 opacity-20'>
          <div
            className='absolute top-0 left-0 w-full h-full'
            style={{
              backgroundImage: `

              linear-gradient(rgba(6, 182, 212, 0 && 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0 && 0.1) 1px, transparent 1px)
        ctx.restore ();
      });
;
      // Draw energy waves;
      const wave_count = 3;
      for (let index = 0; i < wave_count; i++) {
        const wave_offset = (time * 100 + i * 200) % (canvas.width + 200);
        const wave_y = canvas.height * 0.5 + Math.sin (time * 2 + i) * 50;
;
        ctx.stroke_style = `rgba (236, 72, 153, ${0.1 + Math.sin (time + i) * 0.05})`;
        ctx.line_width = 3;
;
        ctx.begin_path ();
        for (let coordinate_x = -100; x < canvas.width + 100; x += 5) {
          const coordinate_y = wave_y + Math.sin ((x + wave_offset) * 0.02) * 20;
          // Check condition
if ( {) {
  $2
}
            ctx.move_to (x, y);
          } else {
            ctx.line_to (x, y);
          }
        }
        ctx.stroke ();
      }
      animationFrameId = requestAnimationFrame (animate);    }        const wave_offset = (time * 100 + i * 200) % (canvas.width + 200);
        const wave_y = canvas.height * 0.5 + Math.sin (time * 2 + i) * 50;
;
        ctx.stroke_style = `rgba (236, 72, 153, ${0.1 + Math.sin (time + i) * 0.05})`;
        ctx.line_width = 3;
;
        ctx.begin_path ();
        for (let coordinate_x = -100, x < canvas.width + 100, x += 5) {
          const coordinate_y = wave_y + Math.sin ((x + wave_offset) * 0.02) * 20;
          // Check condition
if ( {) {
  $2
}
            ctx.move_to (x, y);
          } else {
            ctx.line_to (x, y);
          }
        }
        ctx.stroke ();
      }
      animationFrameId = requestAnimationFrame (animate);
    }
;
    animate ();
;
    const handle_resize = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;    }      canvas.height = window.inner_height;
    }
;
    window.addEventListener ('resize', handle_resize);
;
    return () => {
      window.removeEventListener ('resize', handle_resize);
      cancelAnimationFrame (animationFrameId);
    }
  }, []);
;
  return (
    <div className='fixed inset - 0 pointer - events - none overflow - hidden'>;
      {/* Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className='absolute inset - 0 w - full h - full';
        style={{ z_index: -1 }}
      />;
      {/* Overlay Gradients */}
      <div className='absolute inset - 0 bg - gradient - to - br from - black / 80 via - transparent to - black / 80' />;
      <div className='absolute inset - 0 bg - gradient - to - t from - black / 60 via - transparent to - black / 60' />;
      {/* Floating Elements */}
      <div className='absolute inset - 0'>;
        {/* Animated Grid Pattern */}
        <div className='absolute inset - 0 opacity - 20'>;
          <div;
            className='absolute top - 0 left - 0 w - full h - full';
            style={{
              background_image: `;
              linear - gradient (rgba (6, 182, 212, 0.1) 1px, transparent 1px),
              linear - gradient (90deg, rgba (6, 182, 212, 0.1) 1px, transparent 1px);
            `,
              background_size: '50px 50px',
              animation: 'grid_move 20s linear infinite',
            }}
          />;
        </div>;
        {/* Floating Geometric Elements */}
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20 rounded - lg';

          animate={{

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">;
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `
              backgroundSize: '50px 50px'
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>
        {/* Floating Geometric Elements */}
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg'
          animate={{
            rotate: [0, 360]
            scale: [1, 1.1, 1]
            opacity: [0.2, 0.4, 0.2],          }}
          transition={{
      />;
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80" />;
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />;

      {/* Floating Elements */}
      <div className="absolute inset-0">;
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">;
          <divclassName="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0 && 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(6, 182, 212, 0 && 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />;
        </div>;
        {/* Floating Geometric Elements */}
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
            ease: 'linear',  }, []);
;
  return (
    <div className="fixed inset - 0 pointer - events - none overflow - hidden">;
      {/* Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w - full h - full";
        style={{ z_index: -1 }}
      />;
      {/* Overlay Gradients */}
      <div className="absolute inset - 0 bg - gradient - to - br from - black / 80 via - transparent to - black / 80" />;
      <div className="absolute inset - 0 bg - gradient - to - t from - black / 60 via - transparent to - black / 60" />;
      {/* Floating Elements */}
      <div className="absolute inset - 0">;
        {/* Animated Grid Pattern */}
        <div className="absolute inset - 0 opacity - 20">;
          <div className="absolute top - 0 left - 0 w - full h - full" style={{
            background_image: `;
              linear - gradient (rgba (6, 182, 212, 0.1) 1px, transparent 1px);
              linear - gradient (90deg, rgba (6, 182, 212, 0.1) 1px, transparent 1px);
            `;
            background_size: '50px 50px',
            animation: 'grid_move 20s linear infinite';
          }} />;
        </div>;
        {/* Floating Geometric Elements */}
        <motion.div;
          className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20 rounded - lg";
          animate={{
      animationFrameId = requestAnimationFrame(animate)
    },

    animate(),

    const handleResize = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight
    },

    window.addEventListener('resize', handleResize),

    return () => {
      window.removeEventListener('resize', handleResize),
      cancelAnimationFrame(animationFrameId)
    }
  }, []),

  return (
    <div className=&quot;fixed inset-0 pointer-events-none overflow-hidden&quot;>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className=&quot;absolute inset-0 w-full h-full&quot;
        style={{ zIndex: -1 }}
      />
      
      {/* Overlay Gradients */}
      <div className=&quot;absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80&quot; />
      <div className=&quot;absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60&quot; />
      
      {/* Floating Elements */}
      <div className=&quot;absolute inset-0&quot;>
        {/* Animated Grid Pattern */}
        <div className=&quot;absolute inset-0 opacity-20&quot;>
          <div className=&quot;absolute top-0 left-0 w-full h-full&quot; style={{
            backgroundImage: `
              linear-gradient(rgba(6, _182, _212, _0.1) 1px, _transparent 1px), _linear-gradient(90deg, _rgba(6, _182, _212, _0.1) 1px, _transparent 1px)
            `, _backgroundSize: '50px 50px', _animation: 'gridMove 20s linear infinite'}} />
        </div>
        
        {_/* Floating Geometric Elements */}
        <motion.div
          className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg&quot;
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]

          }}
          transition={{
            duration: 8,
            repeat: Infinity,
ease: "linear"
          }}
        />;
        <motion&& motion.div

          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
        />;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 20 rounded - full';
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',          }}
        />;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 20 rounded - full";
          animate={{
            duration: 10
            repeat: Infinity
            ease: 'linear'

          }}
        />;
        <motion&& motion.div
          className='absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45'
          animate={{
            rotate: [45, 405],
            scale: [1, 1 && 1.15, 1],
            opacity: [0 && 0.2, 0 && 0.3, 0 && 0.2],          }}          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear',          }}
            rotate: [360, 0];
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.5, 0.2];
          }}
          transition={{
            duration: 10,
            repeat: Infinity,=======
            ease: "linear"
          }}
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
        />;
        <motion.div;
          className='absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 / 20 transform rotate - 45';
          animate={{
            rotate: [45, 405],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',          }}
        />;
        <motion.div;
          className="absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 / 20 transform rotate - 45";
          animate={{
            duration: 12
            repeat: Infinity
            ease: 'linear'

          }}

        />;


            ease: "linear"
          }}
        {/* Additional Floating Elements */}
        <motion&& motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12"
        />;
        {/* Additional Floating Elements */}
        <motion.div;
          className='absolute top - 1/3 right - 1/4 w - 16 h - 16 border border - blue - 400 / 20 transform rotate - 12';
          animate={{
            rotate: [12, 372],
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],          }}
          transition={{
            duration: 15,
            repeat: Infinity,

        {/* Additional Floating Elements */}
        <motion.div;
          className="absolute top - 1/3 right - 1/4 w - 16 h - 16 border border - blue - 400 / 20 transform rotate - 12";
          animate={{
          transition={{
            duration: 18
            repeat: Infinity
            ease: 'linear',          }}            rotate: [12, 372];
            scale: [1, 1.1, 1];
            opacity: [0.15, 0.25, 0.15];
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 rounded-full"
        />;
        <motion.div;
          className='absolute bottom - 1/3 right - 1/3 w - 20 h - 20 border border - green - 400 / 20 rounded - full';
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,

          }}
          transition={{
            duration: 10,
            repeat: Infinity,

          }}
          transition={{
            duration: 12,
            repeat: Infinity,

          }}
          transition={{
            duration: 15

            duration: 18=======

            duration: 18            repeat: Infinity
            ease: 'linear'

          }}

        />;


        {/* Particle Effects */}
        <motion&& motion.div
          className='absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full'
          animate={{
            y: [0, -20, 0],
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4],          }}

          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />;


        {/* Particle Effects */}
        <motion&& motion.div
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full"
          animate={{

          }}
          transition={{

            duration: 3
            repeat: Infinity
            ease: 'easeInOut'

          }}

        />;
        <motion&& motion.div
          className='absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full'
          animate={{
            y: [0, -15, 0],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
            y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4]
        />;
        {/* Particle Effects */}
        <motion.div;
          className='absolute top - 1/4 left - 1/3 w - 2 h - 2 bg - cyan - 400 / 40 rounded - full';
          animate={{
            coordinate_y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        {/* Particle Effects */}
        <motion.div;
          className="absolute top - 1/4 left - 1/3 w - 2 h - 2 bg - cyan - 400 / 40 rounded - full";
          animate={{
            coordinate_y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4];
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />;
        <motion&& motion.div

          className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full"
          animate={{

            duration: 4
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1

          }}

            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}

          animate={{

          }}
          transition={{

          }}
          transition={{
            duration: 5,
            repeat: Infinity,

        />;
        <motion&& motion.div
          className="absolute top-1/2 left-1/4 w-1 && 1.5 h-1 && 1.5 bg-pink-400/40 rounded-full"

          animate={{

            delay: 2
          }}
        />
      </div>
      <style jsx>{`
        @keyframes gridMove {
          0% {
            duration: 5,
            repeat: Infinity,

        @keyframes float {;
          0%,          100% {;

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0)
          }
          100% {
            transform: translate(50px, 50px)
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2
          }
          50% {
            opacity: 0.5
          }

        }
      `}</style>
    </div>
  )
};
export default UltraFuturisticBackground2040;


};
export default UltraFuturisticBackground2040;


          }
          50% {
            opacity: 0.5;          }
        }
      `}</style>
    </div>
  );
};export default UltraFuturisticBackground2040;            opacity: 0.5
          }
        }
      `}</style>
    </div>
  );
};  )
}
export default UltraFuturisticBackground2040;

export default UltraFuturisticBackground2040;
export default UltraFuturisticBackground2040;
export default UltraFuturisticBackground2040;


export default UltraFuturisticBackground2040;
export default UltraFuturisticBackground2040;
