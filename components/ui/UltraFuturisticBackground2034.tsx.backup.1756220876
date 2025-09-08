import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160

const UltraFuturisticBackground2034: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

<<<<<<< HEAD
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
=======
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
<<<<<<< HEAD
      life: number;
      maxLife: number;
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
<<<<<<< HEAD
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
        this.alpha = Math.random() * 0.5 + 0.3;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
=======
        this.color = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][Math.floor(Math.random() * 5)];
        this.alpha = Math.random() * 0.5 + 0.3;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
<<<<<<< HEAD
        this.life--;
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

<<<<<<< HEAD
        if (this.life <= 0) {
          this.life = this.maxLife;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha * (this.life / this.maxLife);
        ctx.fillStyle = this.color;
=======
        this.alpha = Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.3 + 0.5;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 20;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

<<<<<<< HEAD
    // Create particles
    const particles: Particle[] = [];
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

<<<<<<< HEAD
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.05)');
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

<<<<<<< HEAD
      // Draw connecting lines
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
=======
      // Draw connections
      connections.forEach(connection => {
        connection.draw();
      });

      // Draw floating geometric shapes
      drawFloatingShapes();

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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
    };

    animate();

<<<<<<< HEAD
    return () => {
      window.removeEventListener('resize', resizeCanvas);
=======
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
    };
  }, []);

  return (
<<<<<<< HEAD
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)' }}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 transform rotate-45"
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 rounded-lg"
        animate={{
          rotate: 360,
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Energy Orbs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Quantum Field Lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
            style={{
              left: `${(i + 1) * 12.5}%`,
              top: '20%'
            }}
            animate={{
              height: [32, 64, 32],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      {/* Holographic Rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1]
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
          rotate: -360,
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Neural Network Nodes */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-green-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Data Streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"
            style={{
              left: `${(i + 1) * 16.66}%`,
              top: '-20px'
            }}
            animate={{
              y: [0, window.innerHeight + 20],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
      </div>

      {/* Quantum Entanglement Effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0.5)',
            '0 0 30px rgba(0, 255, 255, 0.8)',
            '0 0 10px rgba(0, 255, 255, 0.5)'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 255, 0.5)',
            '0 0 30px rgba(0, 255, 255, 0.8)',
            '0 0 10px rgba(0, 255, 255, 0.5)'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Metaverse Portal Effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400/30 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* AI Consciousness Waves */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-pink-400/20 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          />
        ))}
      </div>
    </div>
=======
    <>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ zIndex: 0 }}
      />

      {/* Additional CSS-based animated elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,255,0.05),transparent_50%)]"></div>
      </div>
    </>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d160
  );
};

export default UltraFuturisticBackground2034;