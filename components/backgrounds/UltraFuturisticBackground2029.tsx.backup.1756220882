import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

<<<<<<< HEAD
const UltraFuturisticBackground2029: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);
=======
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
}

export default function UltraFuturisticBackground2029() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d269

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      type: 'quantum' | 'neon' | 'hologram';
      life: number;
      maxLife: number;
    }> = [];

    // Initialize particles with enhanced variety
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 200; i++) {
        const type = Math.random() > 0.7 ? 'quantum' : Math.random() > 0.5 ? 'neon' : 'hologram';
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 1,
          color: type === 'quantum' ? ['#00ffff', '#ff00ff', '#ffff00'][Math.floor(Math.random() * 3)] :
                 type === 'neon' ? ['#ff0080', '#8000ff', '#00ff80'][Math.floor(Math.random() * 3)] :
                 ['#ffffff', '#00ffff', '#ff8000'][Math.floor(Math.random() * 3)],
          opacity: Math.random() * 0.9 + 0.1,
          type,
          life: Math.random() * 100,
          maxLife: 100
        });
      }
    };

<<<<<<< HEAD
    // Enhanced animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles with enhanced effects
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 0.5;

        // Wrap around edges with bounce effect
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Particle lifecycle
        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Draw particle with enhanced effects
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Enhanced particle effects based on type
        if (particle.type === 'quantum') {
          const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2);
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
        } else if (particle.type === 'neon') {
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 15;
          ctx.fillStyle = particle.color;
        } else {
          ctx.fillStyle = particle.color;
        }
        
        ctx.globalAlpha = particle.opacity * (1 - particle.life / particle.maxLife);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections with enhanced logic
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            if (distance < 120) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              
              // Enhanced connection effects
              if (particle.type === 'quantum' && otherParticle.type === 'quantum') {
                ctx.strokeStyle = '#00ffff';
                ctx.lineWidth = 1.5;
                ctx.globalAlpha = (120 - distance) / 120 * 0.6;
              } else if (particle.type === 'neon' || otherParticle.type === 'neon') {
                ctx.strokeStyle = particle.color;
                ctx.lineWidth = 1;
                ctx.globalAlpha = (120 - distance) / 120 * 0.4;
              } else {
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 0.5;
                ctx.globalAlpha = (120 - distance) / 120 * 0.2;
              }
              
              ctx.stroke();
            }
          }
        });
      });

      // Enhanced quantum wave effects
      const time = Date.now() * 0.001;
      for (let i = 0; i < 8; i++) {
        const waveX = (canvas.width / 9) * (i + 1);
        const waveY = canvas.height / 2 + Math.sin(time + i * 0.5) * 80;
        
        ctx.beginPath();
        ctx.moveTo(waveX - 150, waveY);
        ctx.lineTo(waveX + 150, waveY);
        
        const gradient = ctx.createLinearGradient(waveX - 150, waveY, waveX + 150, waveY);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.5, `rgba(0, 255, 255, ${0.3 + 0.2 * Math.sin(time + i)})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Holographic grid effect
      const gridSize = 50;
      const gridOffset = (time * 20) % gridSize;
      
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let x = gridOffset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = gridOffset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Floating data streams
      for (let i = 0; i < 3; i++) {
        const streamX = canvas.width * 0.2 + (i * canvas.width * 0.3);
        const streamY = canvas.height * 0.3 + Math.sin(time * 0.5 + i) * 100;
        
        ctx.fillStyle = `rgba(0, 255, 255, ${0.4 + 0.2 * Math.sin(time + i)})`;
        ctx.font = '12px monospace';
        ctx.fillText('01', streamX, streamY);
        ctx.fillText('10', streamX + 20, streamY + 20);
        ctx.fillText('11', streamX + 40, streamY + 40);
      }

      // Energy pulse effects
      const pulseRadius = 50 + Math.sin(time * 2) * 30;
      const pulseX = canvas.width * 0.8;
      const pulseY = canvas.height * 0.7;
      
      ctx.beginPath();
      ctx.arc(pulseX, pulseY, pulseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 0, 128, ${0.3 + 0.2 * Math.sin(time * 2)})`;
      ctx.lineWidth = 3;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
=======
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000);

      for (let i = 0; i < particleCount; i++) {
        const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][Math.floor(Math.random() * 4)] as Particle['type'];
        const colors = {
          quantum: ['#00ffff', '#0080ff', '#0040ff'],
          holographic: ['#8b5cf6', '#a855f7', '#c084fc'],
          neural: ['#10b981', '#059669', '#047857'],
          cyberpunk: ['#ec4899', '#f97316', '#f59e0b']
        };

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[type][Math.floor(Math.random() * colors[type].length)],
          type
        });
      }

      particlesRef.current = particles;
    };

    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.1)');
      gradient.addColorStop(0.6, 'rgba(139, 92, 246, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Different effects for different particle types
        switch (particle.type) {
          case 'quantum':
            // Quantum particles with glow effect
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Quantum entanglement lines
            if (index % 10 === 0) {
              const partner = particlesRef.current[(index + 50) % particlesRef.current.length];
              if (partner && partner.type === 'quantum') {
                const distance = Math.sqrt(
                  Math.pow(particle.x - partner.x, 2) + Math.pow(particle.y - partner.y, 2)
                );
                if (distance < 100) {
                  ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 100)})`;
                  ctx.lineWidth = 1;
                  ctx.beginPath();
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(partner.x, partner.y);
                  ctx.stroke();
                }
              }
            }
            break;

          case 'holographic':
            // Holographic particles with rainbow effect
            const time = Date.now() * 0.001;
            const hue = (time * 50 + index * 10) % 360;
            ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
            ctx.shadowColor = `hsl(${hue}, 70%, 60%)`;
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            break;

          case 'neural':
            // Neural particles with network connections
            ctx.fillStyle = particle.color;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Neural network connections
            if (index % 15 === 0) {
              const connections = particlesRef.current.filter(p => 
                p.type === 'neural' && 
                Math.sqrt(Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)) < 80
              );
              connections.forEach(connection => {
                const distance = Math.sqrt(
                  Math.pow(particle.x - connection.x, 2) + Math.pow(particle.y - connection.y, 2)
                );
                ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 * (1 - distance / 80)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(connection.x, connection.y);
                ctx.stroke();
              });
            }
            break;

          case 'cyberpunk':
            // Cyberpunk particles with electric effect
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 2;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 25;
            ctx.beginPath();
            ctx.moveTo(particle.x - particle.size, particle.y - particle.size);
            ctx.lineTo(particle.x + particle.size, particle.y + particle.size);
            ctx.moveTo(particle.x + particle.size, particle.y - particle.size);
            ctx.lineTo(particle.x - particle.size, particle.y + particle.size);
            ctx.stroke();
            break;
        }

        ctx.restore();
      });

      // Draw floating geometric shapes
      drawGeometricShapes(ctx, canvas.width, canvas.height);

      // Draw energy waves
      drawEnergyWaves(ctx, canvas.width, canvas.height);

      animationRef.current = requestAnimationFrame(animate);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d269
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    initParticles();
    animate();

    return () => {
<<<<<<< HEAD
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isClient]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Enhanced futuristic background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
        }}
      />
      
      {/* Additional visual layers */}
      <div className="absolute inset-0 z-0">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20"
=======
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const drawGeometricShapes = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const time = Date.now() * 0.0005;
    
    // Floating hexagons
    for (let i = 0; i < 5; i++) {
      const x = (width * 0.2) + Math.sin(time + i) * 100;
      const y = (height * 0.3) + Math.cos(time + i * 0.7) * 80;
      const size = 20 + Math.sin(time * 2 + i) * 10;
      
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let j = 0; j < 6; j++) {
        const angle = (j * Math.PI) / 3 + time;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }

    // Floating triangles
    for (let i = 0; i < 3; i++) {
      const x = (width * 0.8) + Math.sin(time * 0.8 + i) * 120;
      const y = (height * 0.7) + Math.cos(time * 1.2 + i) * 100;
      const size = 15 + Math.sin(time * 1.5 + i) * 8;
      
      ctx.save();
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let j = 0; j < 3; j++) {
        const angle = (j * Math.PI * 2) / 3 + time;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
  };

  const drawEnergyWaves = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const time = Date.now() * 0.001;
    
    // Horizontal energy waves
    for (let i = 0; i < 3; i++) {
      ctx.save();
      ctx.globalAlpha = 0.05;
      ctx.strokeStyle = `hsl(${180 + i * 60}, 70%, 60%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      for (let x = 0; x < width; x += 5) {
        const y = height * 0.5 + 
                  Math.sin(x * 0.01 + time + i) * 50 +
                  Math.sin(x * 0.02 + time * 2 + i) * 25;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      
      ctx.stroke();
      ctx.restore();
    }

    // Vertical energy waves
    for (let i = 0; i < 2; i++) {
      ctx.save();
      ctx.globalAlpha = 0.04;
      ctx.strokeStyle = `hsl(${240 + i * 60}, 70%, 60%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      for (let y = 0; y < height; y += 5) {
        const x = width * 0.5 + 
                  Math.sin(y * 0.01 + time + i) * 60 +
                  Math.sin(y * 0.015 + time * 1.5 + i) * 30;
        if (y === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      
      ctx.stroke();
      ctx.restore();
    }
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.2) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Additional visual layers */}
      <div className="absolute inset-0">
        {/* Quantum field ripples */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d269
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
<<<<<<< HEAD
            opacity: [0.2, 0.4, 0.2]
=======
            opacity: [0.1, 0.3, 0.1]
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d269
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        {/* Holographic matrix */}
        <motion.div
<<<<<<< HEAD
          className="absolute top-40 right-32 w-24 h-24 border border-pink-500 opacity-30"
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 border border-yellow-400 opacity-25"
          animate={{
            rotate: 180,
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{
            duration: 10,
=======
          className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 5,
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d269
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
<<<<<<< HEAD
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        {children}
=======
        
        {/* Neural network nodes */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>
      
      {/* Floating orbs with glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 8)}%`,
              filter: 'blur(1px)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3
            }}
          />
        ))}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d269
      </div>
    </div>
  );
}