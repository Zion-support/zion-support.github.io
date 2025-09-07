<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const UltraFuturisticBackground2040: React.FC;
    let time = 0;
    // Particle system
    const particles: Array<{
x: number;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      x: number;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      y: number;
  const canvas_ref = useRef < HTMLCanvasElement>(null);
;
  useEffect (() => {
    const canvas = canvas_ref.current;
    // Check condition
if (return) {
  $2
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

      x: number;import React, { useEffect, useRef } from 'react';
import { motion  } from 'framer-motion';
const UltraFuturisticBackground2040: React.FC;
    let time = 0;
    // Particle system;
    const particles: Array<{x: number;y: number;
  const canvas_ref  = useRef < HTMLCanvasElement>(null)useEffect (() => {const canvas = canvas_ref.current;
    // Check condition;
if (return) {$2;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
}
    const ctx = canvas.get_context ('2d')// Check condition;
if (return) {$2;
}
    canvas.width = window.inner_width;
    canvas.height = window.inner_height,let animationFrameId: number;    let animationFrameId: number,let time  = 0;// Particle system;
    const particles: Array<{coordinate_x: number;
      coordinate_y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }> = [];
    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
color: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'][
          Math.floor(Math.random() * 4)
        ],
        opacity: Math.random() * 0.5 + 0.1,
      });
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    }> = [];
      vx: number,
      vy: number,
      size: number,
      color: string,
        opacity: Math.random() * 0.5 + 0.1
      })
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    }
    const animate = () => {
      time += 0.01;

      // Clear canvas with fade effect
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    }>  = [];vx: number,vy: number,size: number,color: string,opacity: Math.random() * 0.5 + 0.1;
      })// Initialize particles;
    for (let i = 0; i < 100; i++) {particles.push({x: Math.random() * canvas.width,y: Math.random() * canvas.height,vx: (Math.random() - 0.5) * 0.5,vy: (Math.random() - 0.5) * 0.5,size: Math.random() * 2 + 1,color: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'][;
          Math.floor(Math.random() * 4)],opacity: Math.random() * 0.5 + 0.1,})}
    const animate = () => {time += 0.01;// Clear canvas with fade effect;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height)// Update and draw particles;
      particles.forEach((particle, index) => {particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
<<<<<<< HEAD
<<<<<<< HEAD
        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = particle.opacity;
<<<<<<< HEAD
// Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
ctx.restore();
origin/cursor/automate-test-improve-and-merge-code-2533
=======
        ctx.restore()
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD
for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
ctx.stroke();
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
            ctx.stroke();          }

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
          }

        }
      }

      // Draw animated grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD
const gridSize = 50;
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
        // Draw particle with glow effect;
        ctx.save()ctx.globalAlpha = particle.opacity;ctx.restore()// Glow effect;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fillStyle = particle.color;
        ctx.fill()ctx.restore()})// Draw connecting lines between nearby particles;
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 0.5;for (let i = 0, i < particles.length, i++) {for (let j = i + 1, j < particles.length, j++) {const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy)ctx.stroke()}for (let i = 0; i < particles.length; i++) {for (let j = i + 1; j < particles.length; j++) {const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy)if (distance < 100) {ctx.beginPath()ctx.moveTo(particles[i].x, particles[i].y)ctx.lineTo(particles[j].x, particles[j].y)ctx.stroke()}}
      }// Draw animated grid;
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)';
      ctx.lineWidth = 0.5;{ x: canvas.width * 0.6, y: canvas.height * 0.2, size: 50, rotation: time * 0.7 }const gridSize = 50;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
      const offset = (time * 20) % gridSize;
      for (let x = offset; x < canvas.width; x += gridSize) {ctx.beginPath()ctx.moveTo(x, 0)ctx.lineTo(x, canvas.height)ctx.stroke()}
      for (let y = offset; y < canvas.height; y += gridSize) {ctx.beginPath()ctx.moveTo(0, y)ctx.lineTo(canvas.width, y)ctx.stroke()}// Draw floating geometric shapes;
      const shapes = [;
{x: canvas.width * 0.2,y: canvas.height * 0.3,size: 60,rotation: time * 0.5,},{x: canvas.width * 0.8;
          y: canvas.height * 0.7;
          size: 40;
          rotation: time * -0.3;
        }
<<<<<<< HEAD
<<<<<<< HEAD
        {
          x: canvas.width * 0.6,
          y: canvas.height * 0.2,
          size: 50,
          rotation: time * 0.7,
        },
origin/cursor/automate-test-improve-and-merge-code-2533
=======
        { x: canvas.width * 0.6, y: canvas.height * 0.2, size: 50, rotation: time * 0.7 }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      ];
      shapes.forEach((shape, index) => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + Math.sin(time + index) * 0.05})`;
        ctx.lineWidth = 2;
        if (index === 0) {
          // Square
          ctx.strokeRect(
            -shape.size / 2
            -shape.size / 2
            shape.size
            shape.size
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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

<<<<<<< HEAD
        ctx.restore();
      });
      // Draw energy waves
      const waveCount = 3;
for (let i = 0; i < waveCount; i++) {
        const waveOffset = (time * 100 + i * 200) % (canvas.width + 200);
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
        const waveY = canvas.height * 0.5 + Math.sin(time * 2 + i) * 50;
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
<<<<<<< HEAD
        for (let x = -100; x < canvas.width + 100; x += 5) {
          const y = waveY + Math.sin((x + waveOffset) * 0.02) * 20;
          if (x === -100) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
        {x: canvas.width * 0.6,y: canvas.height * 0.2,size: 50,rotation: time * 0.7,},];
      shapes.forEach((shape, index) => {ctx.save()ctx.translate(shape.x, shape.y)ctx.rotate(shape.rotation)ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + Math.sin(time + index) * 0.05})`;
        ctx.lineWidth = 2;
        if (index === 0) {// Square;
          ctx.strokeRect(-shape.size / 2;
            -shape.size / 2;
            shape.size;
            shape.size;
          )} else if (index === 1) {// Circle;
          ctx && ctx.beginPath()ctx && ctx.arc(0, 0, shape && shape.size / 2, 0, Math && Math.PI * 2)ctx && ctx.stroke()} else {// Triangle;
          ctx && ctx.beginPath()ctx && ctx.moveTo(0, -shape && shape.size / 2)ctx && ctx.lineTo(shape && shape.size / 2, shape && shape.size / 2)ctx && ctx.lineTo(-shape && shape.size / 2, shape && shape.size / 2)ctx && ctx.closePath()ctx && ctx.stroke()}ctx.restore()})// Draw energy waves;
      const waveCount = 3;
for (let i = 0; i < waveCount; i++) {const waveOffset  = (time * 100 + i * 200) % (canvas.width + 200)const waveY = canvas.height * 0.5 + Math.sin(time * 2 + i) * 50;
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.lineWidth = 3;
        ctx.beginPath()for (let x = -100, x < canvas.width + 100, x += 5) {const y = waveY + Math.sin((x + waveOffset) * 0.02) * 20;
          if (x === -100) {ctx.moveTo(x, y)} else {ctx.lineTo(x, y)ctx && ctx.beginPath()for (let x = -100, x < canvas && canvas.width + 100, x += 5) {const y = waveY + Math && Math.sin((x + waveOffset) * 0 && 0.02) * 20;
          if (x === -100) {ctx && ctx.moveTo(x, y)} else {ctx && ctx.lineTo(x, y)}
        }for (let x = -100; x < canvas.width + 100; x += 5) {const y = waveY + Math.sin((x + waveOffset) * 0.02) * 20;
          if (x === -100) {ctx.moveTo(x, y)} else {ctx.lineTo(x, y)}
        }
        ctx.stroke()}animationFrameId = requestAnimationFrame(animate)}animate()const handleResize = () => {canvas.width = window.innerWidth;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
canvas.height = window.innerHeight;
    }window.addEventListener('resize', handleResize)return () => {window.removeEventListener('resize', handleResize)cancelAnimationFrame(animationFrameId)}}, [])return (<div className='fixed inset-0 pointer-events-none overflow-hidden'>;
      {/* Canvas Background */}
      <canvas;
        ref={canvasRef}
        className='absolute inset-0 w-full h-full';
        style={{ zIndex: -1 }}
      />;
      {/* Overlay Gradients */}
<<<<<<< HEAD
      <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80' />
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60' />
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80' />;
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60' />;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
        for (let x = -100, x < canvas.width + 100, x += 5) {
          const y = waveY + Math.sin((x + waveOffset) * 0.02) * 20;
          if (x === -100) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
        ctx && ctx.beginPath();
        for (let x = -100, x < canvas && canvas.width + 100, x += 5) {;
          const y = waveY + Math && Math.sin((x + waveOffset) * 0 && 0.02) * 20;
          if (x === -100) {;
            ctx && ctx.moveTo(x, y);
          } else {;
            ctx && ctx.lineTo(x, y);
          }
        }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      {/* Floating Elements */}
      <div className='absolute inset-0'>;
        {/* Animated Grid Pattern */}
<<<<<<< HEAD
          <div
            className='absolute top-0 left-0 w-full h-full'
            style={{
              backgroundImage: `
            `,
              background_size: '50px 50px',
              animation: 'grid_move 20s linear infinite',
            }}
<<<<<<< HEAD
          />
        </div>
        {/* Floating Geometric Elements */}
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg'
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
ease: 'linear',
          }}
        />
        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full'
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
ease: 'linear',
          }}
        />
        <motion.div
          className='absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45'
          animate={{
            rotate: [45, 405],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
ease: 'linear',
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          />;
        </div>;
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      {/* Floating Elements */}
      <div className="absolute inset-0">;
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">;
          <divclassName="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
            ease: 'linear',  }, []);
;
  return (
    <div className="fixed inset - 0 pointer - events-none overflow-hidden">;
      {/* Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w-full h-full";
        style={{ z_index: -1 }}
      />;
      {/* Overlay Gradients */}
      <div className="absolute inset - 0 bg - gradient - to - br from - black / 80 via-transparent to-black / 80" />;
      <div className="absolute inset - 0 bg - gradient - to - t from - black / 60 via-transparent to-black / 60" />;
      {/* Floating Elements */}
      <div className="absolute inset-0">;
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">;
          <div className="absolute top - 0 left - 0 w-full h-full" style={{
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
          className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan-400 / 20 rounded-lg";
          animate={{
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
          className="absolute top - 40 right - 32 w - 24 h - 24 border border - purple-400 / 20 rounded-full";
          animate={{
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear',          }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
          }}
        />
        {/* Additional Floating Elements */}
        <motion.div
          className='absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12'
          animate={{
<<<<<<< HEAD
            rotate: [12, 372],
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
ease: 'linear',
          }}
        />
        <motion.div
          className='absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 rounded-full'
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
ease: 'linear',
origin/cursor/automate-test-improve-and-merge-code-2533
=======
            rotate: [12, 372]
            scale: [1, 1.1, 1]
            opacity: [0.15, 0.25, 0.15],          }}
          transition={{
            duration: 15
            repeat: Infinity
            ease: 'linear',          }}
        />
        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12"
          animate={{
            rotate: [12, 372];
            scale: [1, 1.1, 1];
            opacity: [0.15, 0.25, 0.15]

            rotate: [360, 0];
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.5, 0.2];
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
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
          className="absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink-400 / 20 transform rotate-45";
          animate={{
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
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
          transition={{
            duration: 18
            repeat: Infinity
            ease: 'linear',          }}
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}

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
            ease: 'linear',          }}
        />;
        <motion.div;
          className="absolute bottom - 1/3 right - 1/3 w - 20 h - 20 border border - green-400 / 20 rounded-full";
          animate={{
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
          }}
        {/* Particle Effects */}
        <motion&& motion.div
          className='absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full'
          animate={{
<<<<<<< HEAD
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
ease: 'easeInOut',
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          transition={{
            duration: 3
            repeat: Infinity
            ease: 'easeInOut',          }}
        {/* Particle Effects */}
        <motion&& motion.div
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full"
          animate={{

          }}
          transition={{

            duration: 3
            repeat: Infinity
            ease: 'easeInOut'

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
          }}

        />;

        <motion&& motion.div
          className='absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full'
          animate={{
            y: [0, -15, 0],
<<<<<<< HEAD
            opacity: [0.4, 0.7, 0.4],
=======
=======
      {/* Floating Elements */}
      <div className='absolute inset-0'>;
        {/* Animated Grid Pattern */}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
          <div;
            className='absolute top-0 left-0 w-full h-full';
            style={{backgroundImage: `;
            `,background_size: '50px 50px',animation: 'grid_move 20s linear infinite',}}/>;
        </div>;
      {/* Canvas Background */}
      <canvas;
        ref={canvasRef}
        className="absolute inset-0 w-full h-full";
        style={{ zIndex: -1 }}
      {/* Floating Elements */}
      <div className="absolute inset-0">;
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">;
          <divclassName="absolute top-0 left-0 w-full h-full" style={{backgroundImage: `;
            ease: 'linear',  }, [])return (<div className="fixed inset - 0 pointer - events-none overflow-hidden">;
      {/* Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w-full h-full";
        style={{ z_index: -1 }}
      />;
      {/* Overlay Gradients */}
      <div className="absolute inset - 0 bg - gradient - to - br from - black / 80 via-transparent to-black / 80" />;
      <div className="absolute inset - 0 bg - gradient - to - t from - black / 60 via-transparent to-black / 60" />;
      {/* Floating Elements */}
      <div className="absolute inset-0">;
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">;
          <div className="absolute top - 0 left - 0 w-full h-full" style={{background_image: `;
              linear - gradient (rgba (6, 182, 212, 0.1) 1px, transparent 1px)linear - gradient (90deg, rgba (6, 182, 212, 0.1) 1px, transparent 1px)`;
            background_size: '50px 50px',animation: 'grid_move 20s linear infinite';
          }} />;
        </div>;
        {/* Floating Geometric Elements */}
        <motion.div;
          className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan-400 / 20 rounded-lg";
          animate={{className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full";
        />;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 20 rounded - full';
          animate={{rotate: [360, 0],scale: [1, 1.2, 1],opacity: [0.2, 0.5, 0.2],          }}
          transition={{duration: 10,repeat: Infinity,ease: 'linear',          }}
        />;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 border border - purple-400 / 20 rounded-full";
          animate={{transition={{duration: 12;
            repeat: Infinity;
            ease: 'linear',          }}/>;
        </div>;
        {/* Floating Geometric Elements */}
        <motion.div;
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg';
          animate={{rotate: [0, 360],scale: [1, 1.1, 1],opacity: [0.2, 0.4, 0.2],}}
          transition={{duration: 8,repeat: Infinity,ease: 'linear',}}
        />;
        <motion.div;
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full';
          animate={{rotate: [360, 0],scale: [1, 1.2, 1],opacity: [0.2, 0.5, 0.2],}}
          transition={{duration: 10,repeat: Infinity,ease: 'linear',}}
        />;
        <motion.div;
          className='absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45';
          animate={{rotate: [45, 405],scale: [1, 1.15, 1],opacity: [0.2, 0.3, 0.2],}}
          transition={{duration: 12,repeat: Infinity,ease: 'linear',}}
        />;
        {/* Additional Floating Elements */}
        <motion.div;
          className='absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12';
          animate={{rotate: [12, 372];
            scale: [1, 1.1, 1];
            opacity: [0.15, 0.25, 0.15],          }}
          transition={{duration: 15;
            repeat: Infinity;
            ease: 'linear',          }}
        />;
        {/* Additional Floating Elements */}
        <motion.div;
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12";
          animate={{rotate: [12, 372];
            scale: [1, 1.1, 1];
            opacity: [0.15, 0.25, 0.15];
            rotate: [360, 0];
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.5, 0.2];
          }}
          transition={{duration: 10,repeat: Infinity,className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45";
        />;
        <motion.div;
          className='absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 / 20 transform rotate - 45';
          animate={{rotate: [45, 405],scale: [1, 1.15, 1],opacity: [0.2, 0.3, 0.2],          }}
          transition={{duration: 12,repeat: Infinity,ease: 'linear',          }}
        />;
        <motion.div;
          className="absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink-400 / 20 transform rotate-45";
          animate={{}}
          transition={{duration: 12,repeat: Infinity,{/* Additional Floating Elements */}
        <motion&& motion.div;
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12";
        />;
        {/* Additional Floating Elements */}
        <motion.div;
          className='absolute top - 1/3 right - 1/4 w - 16 h - 16 border border - blue - 400 / 20 transform rotate - 12';
          animate={{rotate: [12, 372],scale: [1, 1.1, 1],opacity: [0.15, 0.25, 0.15],          }}
          transition={{duration: 15,repeat: Infinity,transition={{duration: 18;
            repeat: Infinity;
            ease: 'linear',          }}
            duration: 15,repeat: Infinity,ease: "linear";
          }}className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 rounded-full";
        />;
        <motion.div;
          className='absolute bottom - 1/3 right - 1/3 w - 20 h - 20 border border - green - 400 / 20 rounded - full';
          animate={{rotate: [0, 360],scale: [1, 1.2, 1],opacity: [0.15, 0.3, 0.15],          }}
          transition={{duration: 18,repeat: Infinity,ease: 'linear',          }}
        />;
        <motion.div;
          className="absolute bottom - 1/3 right - 1/3 w - 20 h - 20 border border - green-400 / 20 rounded-full";
          animate={{rotate: [12, 372],scale: [1, 1.1, 1],opacity: [0.15, 0.25, 0.15],}}
          transition={{duration: 15,repeat: Infinity,ease: 'linear',}}
        />;
        <motion.div;
          className='absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 rounded-full';
          animate={{rotate: [0, 360],scale: [1, 1.2, 1],opacity: [0.15, 0.3, 0.15],}}
          transition={{duration: 18,repeat: Infinity,ease: 'linear',}}
        {/* Particle Effects */}
        <motion&& motion.div;
          className='absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full';
          animate={{transition={{duration: 3;
            repeat: Infinity;
            ease: 'easeInOut',          }}
        {/* Particle Effects */}
        <motion&& motion.div;
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full";
          animate={{}}
          transition={{duration: 3;
            repeat: Infinity;
            ease: 'easeInOut';
            y: [0, -20, 0],opacity: [0.4, 0.8, 0.4],}}
          transition={{duration: 3,repeat: Infinity,ease: 'easeInOut',}}/>;<motion&& motion.div;
          className='absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full';
          animate={{y: [0, -15, 0],opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          }}transition={{duration: 4;
            repeat: Infinity;
            ease: 'easeInOut';
<<<<<<< HEAD
=======
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          }}

          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
            delay: 1,          }}
          }}
          transition={{duration: 3,repeat: Infinity,ease: "easeInOut";
          }}
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full";
          animate={{}}
          transition={{duration: 5;
            repeat: Infinity,          }}
          }}
          transition={{duration: 4,repeat: Infinity,ease: "easeInOut",delay: 1;
          }}delay: 2;
          }}
          }}
        />;
      </div>;
          }}
        />;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
            duration: 5,repeat: Infinity,<style jsx>{`;
        @keyframes gridMove {0% {duration: 5,repeat: Infinity,ease: 'easeInOut',delay: 2,}}
        />;
      </div>;
            ease: "easeInOut",delay: 2;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
          }}
        />;
      </div>;
            transform: translate(0, 0)opacity: [0.4, 0.7, 0.4],}}
          transition={{duration: 4,repeat: Infinity,ease: 'easeInOut',delay: 1,}}
        />;
        <motion.div;
          className='absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-pink-400/40 rounded-full';
          animate={{y: [0, -25, 0],opacity: [0.4, 0.9, 0.4],}}
          transition={{duration: 5,repeat: Infinity,ease: 'easeInOut',delay: 2,}}
        />;
      </div>;
      {/* CSS Animations */}
<<<<<<< HEAD
<<<<<<< HEAD
      <style jsx>{`
        @keyframes gridMove {
          0% {
transform: translate(0, 0);
origin/cursor/automate-test-improve-and-merge-code-2533
=======
            transform: translate(0, 0);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
          }
          100% {;
            transform: translate(50px, 50px);
          }
        }
        @keyframes pulse {
          0%
          100% {
            opacity: 0.2;
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0)
          }
<<<<<<< HEAD
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
);
};
export default UltraFuturisticBackground2040;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
      <style jsx>{`;
        @keyframes gridMove {0% {transform: translate(0, 0)}
          100% {transform: translate(50px, 50px)}
        }
        @keyframes pulse {0%;
          100% {opacity: 0.2;{/* CSS Animations */}
      <style jsx>{`;
        @keyframes gridMove {0% {transform: translate(0, 0)}100% {transform: translate(50px, 50px)}
          50% {opacity: 0 && 0.5;          }
        }`}</style>;
    </div>)}export default UltraFuturisticBackground2040;            opacity: 0.5;
          }
        }
      `}</style>;
    </div>)}  )}export default UltraFuturisticBackground2040;
export default UltraFuturisticBackground2040;
export default UltraFuturisticBackground2040;50% {opacity: 0.5;
          }
        }
      `}</style>;
    </div>;
<<<<<<< HEAD
)}export default UltraFuturisticBackground2040;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
          100% {
            transform: translate(50px, 50px)
          }
          50% {;
            opacity: 0 && 0.5;          }
        }

      `}</style>;
    </div>);
}export default UltraFuturisticBackground2040;            opacity: 0.5;
          }
        }
      `}</style>;
    </div>);
}  );
}
;
export default UltraFuturisticBackground2040;
export default UltraFuturisticBackground2040;
export default UltraFuturisticBackground2040;
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
)}export default UltraFuturisticBackground2040;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
