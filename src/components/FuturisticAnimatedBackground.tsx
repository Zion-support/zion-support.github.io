import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function FuturisticAnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.opacity += (Math.random() - 0.5) * 0.02;
        this.opacity = Math.max(0.1, Math.min(0.8, this.opacity));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Connection class
    class Connection {
      particle1: Particle;
      particle2: Particle;
      opacity: number;

      constructor(p1: Particle, p2: Particle) {
        this.particle1 = p1;
        this.particle2 = p2;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      draw() {
        const distance = Math.sqrt(
          Math.pow(this.particle1.x - this.particle2.x, 2) +
          Math.pow(this.particle1.y - this.particle2.y, 2)
        );

        if (distance < 150) {
          ctx.save();
          ctx.globalAlpha = this.opacity * (1 - distance / 150);
          ctx.strokeStyle = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.particle1.x, this.particle1.y);
          ctx.lineTo(this.particle2.x, this.particle2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Initialize particles and connections
    const init = () => {
      particles = [];
      connections = [];

      // Create particles
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }

      // Create connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          if (Math.random() < 0.1) {
            connections.push(new Connection(particles[i], particles[j]));
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      connections.forEach(connection => {
        connection.draw();
      });

      // Draw grid pattern
      drawGrid();

      // Draw floating elements
      drawFloatingElements();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Draw grid pattern
    const drawGrid = () => {
      const gridSize = 50;
      const offsetX = (Date.now() * 0.01) % gridSize;
      const offsetY = (Date.now() * 0.01) % gridSize;

      ctx.save();
      ctx.strokeStyle = 'rgba(34, 221, 210, 0.1)';
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = offsetX; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = offsetY; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      ctx.restore();
    };

    // Draw floating elements
    const drawFloatingElements = () => {
      const time = Date.now() * 0.001;

      // Floating circles
      for (let i = 0; i < 5; i++) {
        const x = Math.sin(time * 0.5 + i) * 200 + canvas.width / 2;
        const y = Math.cos(time * 0.3 + i) * 150 + canvas.height / 2;
        const size = Math.sin(time + i) * 20 + 40;

        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = 'rgba(34, 221, 210, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Floating squares
      for (let i = 0; i < 3; i++) {
        const x = Math.cos(time * 0.4 + i) * 300 + canvas.width / 2;
        const y = Math.sin(time * 0.6 + i) * 200 + canvas.height / 2;
        const size = Math.cos(time + i) * 15 + 25;
        const rotation = time * 0.5 + i;

        ctx.save();
        ctx.globalAlpha = 0.08;
        ctx.strokeStyle = 'rgba(140, 21, 233, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.strokeRect(-size / 2, -size / 2, size, size);
        ctx.restore();
      }
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark/20 via-transparent to-zion-slate-dark/20" />
      
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 right-32 w-24 h-24 border border-zion-purple/10 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles */}
      <motion.div
        className="absolute top-40 right-40 w-2 h-2 bg-zion-cyan rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-zion-purple rounded-full"
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Scanning line effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zion-cyan to-transparent"
        animate={{
          y: [0, window.innerHeight],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-zion-cyan/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-zion-purple/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-zion-cyan/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-zion-purple/20" />

      {/* Energy field effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(34, 221, 210, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(140, 21, 233, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(34, 221, 210, 0.03) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}