"use client";
import React{ useEffectuseRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2046: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize'resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'quantum' | 'neural' | 'data' | 'energy';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.life = Math.random() * 100;
        this.maxLife = 100;
        
        const types = ['quantum'neural'data'energy'];
        this.type = types[Math.floor(Math.random() * types.length)] as any;
        
        switch (this.type) {
          case 'quantum':
            this.color = `hsl(${180 + Math.random() * 60}70%60%)`;
            break;
          case 'neural':
            this.color = `hsl(${280 + Math.random() * 40}80%70%)`;
            break;
          case 'data':
            this.color = `hsl(${200 + Math.random() * 40}90%80%)`;
            break;
          case 'energy':
            this.color = `hsl(${40 + Math.random() * 60}100%70%)`;
            break;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Add some quantum randomness
        if (Math.random() < 0.01) {
          this.vx += (Math.random() - 0.5) * 0.5;
          this.vy += (Math.random() - 0.5) * 0.5;
        }

        // Limit velocity
        this.vx = Math.max(-3Math.min(3this.vx));
        this.vy = Math.max(-3Math.min(3this.vy));
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
            ctx.arc(this.xthis.ythis.size0Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Wave function rings
            for (let i = 1; i <= 3; i++) {
              ctx.beginPath();
              ctx.arc(this.xthis.ythis.size + i * 20Math.PI * 2);
              ctx.strokeStyle = this.color;
              ctx.lineWidth = 1;
              ctx.globalAlpha = alpha * (0.3 - i * 0.1);
              ctx.stroke();
            }
            break;
            
          case 'neural':
            // Neural network nodes
            ctx.beginPath();
            ctx.arc(this.xthis.ythis.size0Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Neural connections
            particlesRef.current.forEach(particle => {
              if (particle.type === 'neural' && particle !== this) {
                const distance = Math.sqrt(
                  Math.pow(this.x - particle.x2) + Math.pow(this.y - particle.y2)
                );
                if (distance < 100) {
                  ctx.beginPath();
                  ctx.moveTo(this.xthis.y);
                  ctx.lineTo(particle.xparticle.y);
                  ctx.strokeStyle = this.color;
                  ctx.lineWidth = 0.5;
                  ctx.globalAlpha = alpha * (1 - distance / 100);
                  ctx.stroke();
                }
              }
            });
            break;
            
          case 'data':
            // Data streams
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x - this.size/2this.y - this.size/2this.size);
            
            // Data flow lines
            ctx.beginPath();
            ctx.moveTo(this.xthis.y);
            ctx.lineTo(this.x + this.vx * 10this.y + this.vy * 10);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.stroke();
            break;
            
          case 'energy':
            // Energy particles with glow effect
            ctx.beginPath();
            ctx.arc(this.xthis.ythis.size0Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Glow effect
            const gradient = ctx.createRadialGradient(this.xthis.y0this.xthis.ythis.size * 3);
            gradient.addColorStop(0this.color);
            gradient.addColorStop(1'transparent');
            ctx.fillStyle = gradient;
            ctx.fill();
            break;
        }
        
        ctx.restore();
      }

      isDead() {
        return this.life <= 0;
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 150; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(00.1)';
      ctx.fillRect(0canvas.widthcanvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particleindex) => {
        particle.update();
        particle.draw();
        
        // Remove dead particles and add new ones
        if (particle.isDead()) {
          particlesRef.current[index] = new Particle();
        }
      });

      // Draw quantum field lines
      drawQuantumField(ctxcanvas.widthcanvas.height);
      
      // Draw neural network grid
      drawNeuralGrid(ctxcanvas.widthcanvas.height);

      animationRef.current = requestAnimationFrame(animate);
    };

    // Quantum field lines
    const drawQuantumField = (ctx: CanvasRenderingContext2Dwidth: numberheight: number) => {
      const time = Date.now() * 0.001;
      ctx.strokeStyle = 'rgba(02550.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        const x = (i / 20) * width;
        const y = Math.sin(time + i * 0.5) * 50 + height / 2;
        
        ctx.moveTo(x0);
        ctx.lineTo(xheight);
        
        // Add wave interference
        for (let j = 0; j < height; j += 10) {
          const waveY = y + Math.sin(time * 2 + i * 0.3) * 30;
          ctx.lineTo(x + Math.sin(time + j * 0.01) * 20j);
        }
        
        ctx.stroke();
      }
    };

    // Neural network grid
    const drawNeuralGrid = (ctx: CanvasRenderingContext2Dwidth: numberheight: number) => {
      const time = Date.now() * 0.002;
      ctx.strokeStyle = 'rgba(25502550.05)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 50;
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          const offset = Math.sin(time + x * 0.01) * Math.cos(time + y * 0.01) * 10;
          
          ctx.beginPath();
          ctx.moveTo(x + offsety);
          ctx.lineTo(x + gridSize + offsety);
          ctx.moveTo(xy + offset);
          ctx.lineTo(xy + gridSize + offset);
          ctx.stroke();
        }
      }
    };

    // Start animation
    initParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize'resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }[]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/30 to-black"
        animate={{
          background: [
            'linear-gradient(to bottom right#000000#1e1b4b#0c4a6e#000000)',
            'linear-gradient(to bottom right#000000#0c4a6e#1e1b4b#000000)',
            'linear-gradient(to bottom right#000000#1e1b4b#0c4a6e#000000)']}}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Quantum particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-cyan-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`}}
            animate={{
              rotate: [0360],
              scale: [0.510.5],
              opacity: [0.10.30.1]}}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5}}
          />
        ))}
        
        {[...Array(6)].map((_i) => (
          <motion.div
            key={`square-${i}`}
            className="absolute w-24 h-24 border border-purple-500/20 rotate-45"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`}}
            animate={{
              rotate: [45405],
              scale: [0.30.80.3],
              opacity: [0.10.20.1]}}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.7}}
          />
        ))}
      </div>
      
      {/* Energy waves */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"
          animate={{
            height: ['32px'48px'32px']}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"}}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent"
          animate={{
            height: ['24px'40px'24px']}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1}}
        />
      </div>
      
      {/* Quantum interference patterns */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_i) => (
          <motion.div
            key={`interference-${i}`}
            className="absolute inset-0 opacity-5"
            style={{
              background: `radial-gradient(circle at ${20 + i * 20}% ${30 + i * 15}%rgba(02550.3) 0%transparent 50%)`}}
            animate={{
              scale: [1.51],
              opacity: [0.050.10.05]}}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8}}
          />
        ))}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2046;