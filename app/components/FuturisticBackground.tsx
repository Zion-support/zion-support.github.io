import React, { useEffect, useRef } from 'react';

const FuturisticBackground = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      const colors = ['#06b6d4', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444'];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 300 + 200
      };
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push(createParticle());
      }
    };

    const drawNeuralNetwork = () => {
      const time = Date.now() * 0.001;
      
      // Draw neural network connections
      particles.forEach((particle, index) => {
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 200) {
              const opacity = (1 - distance / 200) * 0.3;
              const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y);
              gradient.addColorStop(0, particle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
              gradient.addColorStop(1, otherParticle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));

              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });
    };

    const drawCyberGrid = () => {
      const time = Date.now() * 0.001;
      const gridSize = 60;
      
      ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 + 0.05 * Math.sin(time)})`;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        const offset = Math.sin(time * 0.5 + x * 0.01) * 10;
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        const offset = Math.cos(time * 0.3 + y * 0.01) * 10;
        ctx.beginPath();
        ctx.moveTo(0, y + offset);
        ctx.lineTo(canvas.width, y + offset);
        ctx.stroke();
      }
    };

    const drawEnergyWaves = () => {
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < 3; i++) {
        const centerX = canvas.width / 2 + Math.cos(time * 0.2 + i * 2) * 300;
        const centerY = canvas.height / 2 + Math.sin(time * 0.2 + i * 2) * 200;
        const radius = 50 + Math.sin(time + i) * 30;
        
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        gradient.addColorStop(0, `rgba(6, 182, 212, ${0.1 * Math.sin(time + i)})`);
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    };

    const drawDataStreams = () => {
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < 5; i++) {
        const x = (canvas.width / 6) * (i + 1);
        const streamHeight = 200 + Math.sin(time * 2 + i) * 100;
        
        const gradient = ctx.createLinearGradient(x, canvas.height - streamHeight, x, canvas.height);
        gradient.addColorStop(0, `rgba(139, 92, 246, ${0.3 * Math.sin(time + i)})`);
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        
        ctx.beginPath();
        ctx.moveTo(x, canvas.height);
        ctx.lineTo(x - 20, canvas.height - streamHeight);
        ctx.lineTo(x + 20, canvas.height - streamHeight);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Draw background effects
      drawCyberGrid();
      drawEnergyWaves();
      drawDataStreams();

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Apply mouse attraction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.1;
          particle.vy += (dy / distance) * force * 0.1;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Update opacity based on life
        particle.opacity = (1 - particle.life / particle.maxLife) * 0.8;

        // Draw particle with glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        ctx.shadowBlur = 0;

        // Reset particle if it's dead
        if (particle.life >= particle.maxLife) {
          particles[index] = createParticle();
        }
      });

      // Draw neural network connections
      drawNeuralNetwork();

      // Draw scan lines
      ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * Math.sin(time * 3)})`;
      ctx.lineWidth = 2;
      const scanY = (time * 100) % canvas.height;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative min-h-screen quantum-particles neural-network">
      {/* Quantum Field Background */}
      <div className="absolute inset-0 quantum-field"></div>
      
      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 matrix-rain opacity-10"></div>
      
      {/* Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full gpu-accelerated"
        style={{ zIndex: 1 }}
      />
      
      {/* Holographic Overlay */}
      <div className="absolute inset-0 holographic opacity-5"></div>
      
      {/* Quantum Tunnel Effect */}
      <div className="absolute inset-0 quantum-tunnel opacity-10"></div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50" style={{ zIndex: 2 }} />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;