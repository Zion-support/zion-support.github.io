import React, { useEffect, useRef } from 'react';

<<<<<<< HEAD
export default function UltraAdvancedFuturisticBackground() {
=======
interface UltraAdvancedFuturisticBackgroundProps {
  children?: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'futuristic';
}

export default function UltraAdvancedFuturisticBackground({ 
  children, 
  intensity = 'medium',
  theme = 'futuristic' 
}: UltraAdvancedFuturisticBackgroundProps) {
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8f08
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
<<<<<<< HEAD
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
=======
      type: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'futuristic';
      life: number;
      maxLife: number;
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'],
      neon: ['#ff0066', '#00ffff', '#ff6600', '#9900ff', '#00ff99', '#ff1493'],
      holographic: ['#ff1493', '#00bfff', '#ffd700', '#7fff00', '#ff69b4', '#00ced1'],
      cyberpunk: ['#ff0066', '#00ffff', '#ff6600', '#9900ff', '#00ff99', '#ff1493'],
      futuristic: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff', '#ff1493', '#00bfff']
    };

    const selectedColors = colors[theme] || colors.futuristic;

    // Initialize particles
    const initParticles = () => {
      const particleCount = intensity === 'high' ? 300 : intensity === 'medium' ? 180 : 120;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          size: Math.random() * 6 + 2,
          opacity: Math.random() * 0.9 + 0.1,
          color: selectedColors[Math.floor(Math.random() * selectedColors.length)],
          type: ['quantum', 'neon', 'holographic', 'cyberpunk', 'futuristic'][Math.floor(Math.random() * 5)] as any,
          life: Math.random() * 100,
          maxLife: 100 + Math.random() * 100
        });
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8f08
      }

<<<<<<< HEAD
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
=======
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Update life
        particle.life += 0.5;
        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Bounce off edges with enhanced physics
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8f08

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

<<<<<<< HEAD
        // Fade out as life decreases
        this.opacity = (this.life / this.maxLife) * 0.5 + 0.3;
      }

      draw() {
        if (ctx) {
          ctx.save();
          ctx.globalAlpha = this.opacity;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }

    // Grid system
    class Grid {
      spacing: number;
      offset: number;

      constructor() {
        this.spacing = 50;
        this.offset = 0;
      }

      update() {
        this.offset += 0.1;
      }

      draw() {
        if (ctx) {
          ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
          ctx.lineWidth = 0.5;

          // Vertical lines
          for (let x = this.offset % this.spacing; x < canvas.width; x += this.spacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
          }

          // Horizontal lines
          for (let y = this.offset % this.spacing; y < canvas.height; y += this.spacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }
        }
      }
    }

    // Energy waves
    class EnergyWave {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 0;
        this.maxRadius = Math.random() * 200 + 100;
        this.speed = Math.random() * 2 + 1;
        this.opacity = 1;
      }

      update() {
        this.radius += this.speed;
        this.opacity = 1 - (this.radius / this.maxRadius);

        if (this.radius >= this.maxRadius) {
          this.radius = 0;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.maxRadius = Math.random() * 200 + 100;
        }
      }

      draw() {
        if (ctx) {
          ctx.save();
          ctx.strokeStyle = `rgba(0, 255, 255, ${this.opacity * 0.3})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Create instances
    const particles: Particle[] = Array.from({ length: 100 }, () => new Particle());
    const grid = new Grid();
    const energyWaves: EnergyWave[] = Array.from({ length: 5 }, () => new EnergyWave());

    // Animation loop
    let animationId: number;
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw grid
      grid.update();
      grid.draw();

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Update and draw energy waves
      energyWaves.forEach(wave => {
        wave.update();
        wave.draw();
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
=======
        // Draw particle with enhanced effects
        ctx.save();
        
        // Calculate opacity based on life
        const lifeOpacity = Math.sin(particle.life * 0.1) * 0.3 + 0.7;
        ctx.globalAlpha = particle.opacity * lifeOpacity;
        
        if (particle.type === 'quantum') {
          // Quantum particle with wave effect
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 4
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.3, particle.color + '80');
          gradient.addColorStop(0.7, particle.color + '40');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
          ctx.fill();

          // Add quantum entanglement lines
          if (Math.random() > 0.95) {
            ctx.strokeStyle = particle.color + '40';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(
              particle.x + (Math.random() - 0.5) * 100,
              particle.y + (Math.random() - 0.5) * 100
            );
            ctx.stroke();
          }
        } else if (particle.type === 'neon') {
          // Neon particle with glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size * 3;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Add neon trail
          ctx.globalAlpha = particle.opacity * 0.3;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x - particle.vx * 2, particle.y - particle.vy * 2);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = particle.size * 0.5;
          ctx.stroke();
        } else if (particle.type === 'holographic') {
          // Holographic particle with prism effect
          const colors = [particle.color, '#ffffff', particle.color];
          colors.forEach((color, i) => {
            ctx.globalAlpha = particle.opacity * (0.3 - i * 0.1);
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(
              particle.x + i * 2, 
              particle.y + i * 2, 
              particle.size - i, 
              0, 
              Math.PI * 2
            );
            ctx.fill();
          });
        } else if (particle.type === 'cyberpunk') {
          // Cyberpunk particle with digital effect
          ctx.fillStyle = particle.color;
          ctx.fillRect(
            particle.x - particle.size / 2, 
            particle.y - particle.size / 2, 
            particle.size, 
            particle.size
          );

          // Add digital connections
          if (Math.random() > 0.98) {
            ctx.strokeStyle = particle.color + '60';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(
              particle.x + (Math.random() - 0.5) * 80,
              particle.y + (Math.random() - 0.5) * 80
            );
            ctx.stroke();
            ctx.setLineDash([]);
          }
        } else {
          // Futuristic particle with advanced effects
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.5, particle.color + '80');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();

          // Add energy field
          ctx.globalAlpha = particle.opacity * 0.2;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 6, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.restore();
      });

      // Add connection lines between nearby particles
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          );
          
          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.1;
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8f08
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      // Add floating geometric shapes
<<<<<<< HEAD
      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const x = (Math.sin(time + i) * 100) + canvas.width / 2;
        const y = (Math.cos(time + i * 0.7) * 100) + canvas.height / 2;
        const size = Math.sin(time + i) * 20 + 30;
        
        ctx.save();
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + Math.sin(time + i) * 0.1})`;
        ctx.lineWidth = 1;
        ctx.translate(x, y);
        ctx.rotate(time + i);
        
        // Draw hexagon
        ctx.beginPath();
        for (let j = 0; j < 6; j++) {
          const angle = (j * Math.PI) / 3;
          const px = Math.cos(angle) * size;
          const py = Math.sin(angle) * size;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
=======
      if (intensity === 'high') {
        const time = Date.now() * 0.001;
        const shapes = [
          { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 20, rotation: time * 0.5 },
          { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 25, rotation: time * 0.3 },
          { x: canvas.width * 0.5, y: canvas.height * 0.8, size: 15, rotation: time * 0.7 }
        ];

        shapes.forEach(shape => {
          ctx.save();
          ctx.translate(shape.x, shape.y);
          ctx.rotate(shape.rotation);
          ctx.globalAlpha = 0.1;
          ctx.strokeStyle = '#00ffff';
          ctx.lineWidth = 2;
          
          // Draw hexagon
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = Math.cos(angle) * shape.size;
            const y = Math.sin(angle) * shape.size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8f08
    };
  }, []);

  return (
<<<<<<< HEAD
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'radial-gradient(ellipse at center, rgba(0, 20, 40, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%)' }}
    />
=======
    <div className="relative min-h-screen overflow-hidden">
      {/* Futuristic Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.1) 100%)'
        }}
      />
      
      {/* Additional Visual Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full opacity-30"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-6 h-6 bg-purple-400 rounded-full opacity-20"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-25"
          animate={{
            y: [0, -15, 0],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8f08
  );
}