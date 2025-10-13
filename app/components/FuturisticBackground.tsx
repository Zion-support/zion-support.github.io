import React, { useEffect, useRef } from 'react';

const FuturisticBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
      maxLife: number;
      type: 'neural' | 'data' | 'energy';
      pulsePhase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.7 + 0.3;
        this.type = Math.random() > 0.7 ? 'neural' : Math.random() > 0.4 ? 'data' : 'energy';
        this.pulsePhase = Math.random() * Math.PI * 2;
        
        switch (this.type) {
          case 'neural':
            this.color = '#8b5cf6';
            this.maxLife = Math.random() * 300 + 200;
            break;
          case 'data':
            this.color = '#06b6d4';
            this.maxLife = Math.random() * 400 + 300;
            break;
          case 'energy':
            this.color = '#ec4899';
            this.maxLife = Math.random() * 200 + 100;
            break;
        }
        
        this.life = 0;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;
        this.pulsePhase += 0.1;

        // Mouse interaction with different forces based on type
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          const attraction = this.type === 'neural' ? 0.02 : this.type === 'data' ? 0.015 : 0.025;
          this.vx += (dx / distance) * force * attraction;
          this.vy += (dy / distance) * force * attraction;
        }

        // Boundary check with bounce
        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -0.8;
          this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -0.8;
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        // Fade out based on type
        const fadeRate = this.type === 'energy' ? 0.003 : this.type === 'data' ? 0.001 : 0.002;
        this.opacity = Math.max(0, this.opacity - fadeRate);
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Pulsing effect
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        const currentSize = this.size * pulse;
        
        if (this.type === 'neural') {
          // Neural network nodes
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 15;
          ctx.shadowColor = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Inner glow
          ctx.shadowBlur = 0;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.beginPath();
          ctx.arc(this.x, this.y, currentSize * 0.3, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 'data') {
          // Data packets
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 12;
          ctx.shadowColor = this.color;
          ctx.fillRect(this.x - currentSize/2, this.y - currentSize/2, currentSize, currentSize);
          
          // Data lines
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 5;
          ctx.beginPath();
          ctx.moveTo(this.x - currentSize/2, this.y);
          ctx.lineTo(this.x + currentSize/2, this.y);
          ctx.moveTo(this.x, this.y - currentSize/2);
          ctx.lineTo(this.x, this.y + currentSize/2);
          ctx.stroke();
        } else {
          // Energy particles
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 20;
          ctx.shadowColor = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Energy rings
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(this.x, this.y, currentSize * 1.5, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        ctx.restore();
      }

      isDead() {
        return this.life >= this.maxLife || this.opacity <= 0;
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw neural network connections
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.15)';
      ctx.lineWidth = 1;
      ctx.shadowBlur = 2;
      ctx.shadowColor = 'rgba(139, 92, 246, 0.3)';
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120;
            ctx.globalAlpha = opacity * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw data flow lines
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 0.5;
      ctx.shadowBlur = 1;
      ctx.shadowColor = 'rgba(6, 182, 212, 0.2)';
      
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].type === 'data') {
          for (let j = 0; j < particles.length; j++) {
            if (i !== j && particles[j].type === 'data') {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 80) {
                const opacity = (80 - distance) / 80;
                ctx.globalAlpha = opacity * 0.2;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
              }
            }
          }
        }
      }

      // Draw energy waves
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.2)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 3;
      ctx.shadowColor = 'rgba(236, 72, 153, 0.4)';
      
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].type === 'energy') {
          const waveRadius = 30 + Math.sin(time + particles[i].pulsePhase) * 10;
          ctx.globalAlpha = particles[i].opacity * 0.3;
          ctx.beginPath();
          ctx.arc(particles[i].x, particles[i].y, waveRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        if (particle.isDead()) {
          particles[index] = new Particle();
        }
      });

      // Reset global alpha
      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Initialize
    handleResize();
    initParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Enhanced futuristic elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs with enhanced effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-gradient-to-r from-green-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-56 h-56 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-4000"></div>
        
        {/* Enhanced grid pattern with animation */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        ></div>
        
        {/* Neural network overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
            `,
            animation: 'neuralPulse 8s ease-in-out infinite'
          }}
        ></div>
        
        {/* Enhanced scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse delay-2000"></div>
          <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse delay-3000"></div>
          <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse delay-4000"></div>
        </div>
        
        {/* Data flow particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `dataFlow ${3 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Holographic overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            background: `
              linear-gradient(45deg, 
                rgba(139, 92, 246, 0.1) 0%, 
                rgba(236, 72, 153, 0.1) 25%, 
                rgba(6, 182, 212, 0.1) 50%, 
                rgba(16, 185, 129, 0.1) 75%, 
                rgba(139, 92, 246, 0.1) 100%
              )`,
            backgroundSize: '200% 200%',
            animation: 'holographicShift 3s ease-in-out infinite'
          }}
        ></div>
      </div>
      
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(50px) translateY(50px); }
        }
        
        @keyframes neuralPulse {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.6; transform: scale(1.1) rotate(180deg); }
        }
        
        @keyframes dataFlow {
          0% { transform: translateX(-100px) translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100vw) translateY(-50px); opacity: 0; }
        }
        
        @keyframes holographicShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default FuturisticBackground;