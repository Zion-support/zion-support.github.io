import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const UltraFuturisticBackground2040: React.FC = () => {
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    let animationFrameId: number,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    let time = 0;

    // Particle system
    const particles: Array<{
<<<<<<< HEAD
<<<<<<< HEAD
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 100; i++) {
=======
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number
    }> = [];

    // Initialize particles
    for (let i = 0, i < 100, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number
    }> = [];

    // Initialize particles
    for (let i = 0, i < 100, i++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
<<<<<<< HEAD
<<<<<<< HEAD
        color: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'][
          Math.floor(Math.random() * 4)
        ],
        opacity: Math.random() * 0.5 + 0.1,
      });
=======
        color: ['#06b6d4#3b82f6#8b5cf6#ec4899'][Math.floor(Math.random() * 4)],
        opacity: Math.random() * 0.5 + 0.1
      })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        color: ['#06b6d4#3b82f6#8b5cf6#ec4899'][Math.floor(Math.random() * 4)],
        opacity: Math.random() * 0.5 + 0.1
      })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    const animate = () => {
      time += 0.01;
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD

        // Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;

=======
        
        // Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        // Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
<<<<<<< HEAD
<<<<<<< HEAD

        ctx.restore();
=======
        
        ctx.restore()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        ctx.restore()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD
<<<<<<< HEAD

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

=======
      
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
<<<<<<< HEAD
<<<<<<< HEAD
            ctx.stroke();
=======
            ctx.stroke()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ctx.stroke()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }
        }
      }

      // Draw animated grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
        ctx.stroke();
=======
      
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
        ctx.stroke()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        ctx.stroke()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }

      // Draw floating geometric shapes
      const shapes = [
<<<<<<< HEAD
<<<<<<< HEAD
        {
          x: canvas.width * 0.2,
          y: canvas.height * 0.3,
          size: 60,
          rotation: time * 0.5,
        },
        {
          x: canvas.width * 0.8,
          y: canvas.height * 0.7,
          size: 40,
          rotation: time * -0.3,
        },
        {
          x: canvas.width * 0.6,
          y: canvas.height * 0.2,
          size: 50,
          rotation: time * 0.7,
        },
=======
        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 60, rotation: time * 0.5 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 40, rotation: time * -0.3 },
        { x: canvas.width * 0.6, y: canvas.height * 0.2, size: 50, rotation: time * 0.7 }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 60, rotation: time * 0.5 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 40, rotation: time * -0.3 },
        { x: canvas.width * 0.6, y: canvas.height * 0.2, size: 50, rotation: time * 0.7 }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      ];

      shapes.forEach((shape, index) => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + Math.sin(time + index) * 0.05})`;
        ctx.lineWidth = 2;
        
        if (index === 0) {
          // Square
          ctx.strokeRect(-shape.size/2, -shape.size/2, shape.size, shape.size)
        } else if (index === 1) {
          // Circle
          ctx.beginPath();
          ctx.arc(0, 0, shape.size/2, 0, Math.PI * 2);
          ctx.stroke()
        } else {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(0, -shape.size/2);
          ctx.lineTo(shape.size/2, shape.size/2);
          ctx.lineTo(-shape.size/2, shape.size/2);
          ctx.closePath();
          ctx.stroke()
        }
<<<<<<< HEAD

        ctx.restore();
=======
        
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + Math.sin(time + index) * 0.05})`;
        ctx.lineWidth = 2;
        
        if (index === 0) {
          // Square
          ctx.strokeRect(-shape.size/2, -shape.size/2, shape.size, shape.size)
        } else if (index === 1) {
          // Circle
          ctx.beginPath();
          ctx.arc(0, 0, shape.size/2, 0, Math.PI * 2);
          ctx.stroke()
        } else {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(0, -shape.size/2);
          ctx.lineTo(shape.size/2, shape.size/2);
          ctx.lineTo(-shape.size/2, shape.size/2);
          ctx.closePath();
          ctx.stroke()
        }
        
        ctx.restore()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        ctx.restore()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      });

      // Draw energy waves
      const waveCount = 3;
<<<<<<< HEAD
<<<<<<< HEAD
      for (let i = 0; i < waveCount; i++) {
=======
      for (let i = 0, i < waveCount, i++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        const waveOffset = (time * 100 + i * 200) % (canvas.width + 200);
        const waveY = canvas.height * 0.5 + Math.sin(time * 2 + i) * 50;
        
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        for (let x = -100, x < canvas.width + 100, x += 5) {
          const y = waveY + Math.sin((x + waveOffset) * 0.02) * 20;
          if (x === -100) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

<<<<<<< HEAD
      animationFrameId = requestAnimationFrame(animate);
=======
      for (let i = 0, i < waveCount, i++) {
        const waveOffset = (time * 100 + i * 200) % (canvas.width + 200);
        const waveY = canvas.height * 0.5 + Math.sin(time * 2 + i) * 50;
        
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        for (let x = -100, x < canvas.width + 100, x += 5) {
          const y = waveY + Math.sin((x + waveOffset) * 0.02) * 20;
          if (x === -100) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      animationFrameId = requestAnimationFrame(animate)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
<<<<<<< HEAD
<<<<<<< HEAD
      canvas.height = window.innerHeight;
=======
      canvas.height = window.innerHeight
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      canvas.height = window.innerHeight
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
<<<<<<< HEAD
<<<<<<< HEAD
      cancelAnimationFrame(animationFrameId);
    };
=======
      cancelAnimationFrame(animationFrameId)
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
        
        {/* Floating Geometric Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
          animate={{
<<<<<<< HEAD
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
=======
      cancelAnimationFrame(animationFrameId)
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
        
        {/* Floating Geometric Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
          animate={{
            rotate: [0, 360];
            scale: [1, 1.1, 1];
            opacity: [0.2, 0.4, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [0, 360];
            scale: [1, 1.1, 1];
            opacity: [0.2, 0.4, 0.2]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
<<<<<<< HEAD
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
=======
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
            rotate: [360, 0];
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [360, 0];
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
          animate={{
<<<<<<< HEAD
            rotate: [45, 405],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
=======
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
          animate={{
            rotate: [45, 405];
            scale: [1, 1.15, 1];
            opacity: [0.2, 0.3, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [45, 405];
            scale: [1, 1.15, 1];
            opacity: [0.2, 0.3, 0.2]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        
        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12"
          animate={{
<<<<<<< HEAD
            rotate: [12, 372],
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
=======
            ease: "linear"
          }}
        />
        
        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12"
          animate={{
            rotate: [12, 372];
            scale: [1, 1.1, 1];
            opacity: [0.15, 0.25, 0.15]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [12, 372];
            scale: [1, 1.1, 1];
            opacity: [0.15, 0.25, 0.15]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 rounded-full"
          animate={{
<<<<<<< HEAD
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
=======
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 rounded-full"
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1];
            opacity: [0.15, 0.3, 0.15]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [0, 360];
            scale: [1, 1.2, 1];
            opacity: [0.15, 0.3, 0.15]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        
        {/* Particle Effects */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full"
          animate={{
<<<<<<< HEAD
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
=======
            ease: "linear"
          }}
        />
        
        {/* Particle Effects */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full"
          animate={{
            y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 3,
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
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full"
          animate={{
<<<<<<< HEAD
            y: [0, -15, 0],
            opacity: [0.4, 0.7, 0.4],
=======
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full"
          animate={{
            y: [0, -15, 0];
            opacity: [0.4, 0.7, 0.4]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            y: [0, -15, 0];
            opacity: [0.4, 0.7, 0.4]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
            delay: 1,
=======
            ease: "easeInOut",
            delay: 1
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-pink-400/40 rounded-full"
          animate={{
<<<<<<< HEAD
            y: [0, -25, 0],
            opacity: [0.4, 0.9, 0.4],
=======
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-pink-400/40 rounded-full"
          animate={{
            y: [0, -25, 0];
            opacity: [0.4, 0.9, 0.4]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            y: [0, -25, 0];
            opacity: [0.4, 0.9, 0.4]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

=======
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
<<<<<<< HEAD
<<<<<<< HEAD
            transform: translate(0, 0);
=======
            transform: translate(0, 0)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }
          100% {
            transform: translate(50px, 50px)
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px)
          }
          50% {
            transform: translateY(-20px)
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2
          }
          50% {
<<<<<<< HEAD
            opacity: 0.5;
=======
            transform: translate(0, 0)
          }
          100% {
            transform: translate(50px, 50px)
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px)
          }
          50% {
            transform: translateY(-20px)
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2
          }
          50% {
            opacity: 0.5
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            opacity: 0.5
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }
        }
      `}</style>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
=======
  )
};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default UltraFuturisticBackground2040;
