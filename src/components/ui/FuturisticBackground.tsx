<<<<<<< HEAD
<<<<<<< HEAD

interface FuturisticBackgroundProps {
  variant?: 'particles' | 'grid' | 'waves' | 'matrix';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function FuturisticBackground({ 
  variant = 'particles', 
  intensity = 'medium',
  className = '' 
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
<<<<<<< HEAD
  colorScheme?: 'cyberpunk' | 'neon' | 'holographic' | 'matrix';
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
}

export function FuturisticBackground({ 
  children, 
  className = '', 
<<<<<<< HEAD
  intensity = 'medium',
  colorScheme = 'cyberpunk' 
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
  intensity = 'medium' 
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
}: FuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

<<<<<<< HEAD
<<<<<<< HEAD
    // Set canvas size
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
<<<<<<< HEAD
<<<<<<< HEAD
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let particles: Array<{
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
<<<<<<< HEAD
<<<<<<< HEAD
      color: string;
    }> = [];

    let time = 0;

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
=======
      color: string;
    }> = [];

    const colors = [
      '#8c15e9', // zion-purple
      '#22ddd2', // zion-cyan
      '#2e73ea', // zion-blue
      '#b971f2', // zion-purple-light
      '#7aeae4', // zion-cyan-light
    ];

    // Initialize particles
    const initParticles = () => {
      const particleCount = intensity === 'high' ? 150 : intensity === 'medium' ? 100 : 50;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
<<<<<<< HEAD
          opacity: Math.random() * 0.5 + 0.3,
          color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`
=======
      life: number;
      maxLife: number;
    }> = [];

    const getColorScheme = () => {
      switch (colorScheme) {
        case 'cyberpunk':
          return {
            primary: '#8c15e9',
            secondary: '#22ddd2',
            accent: '#ff0080',
            background: 'rgba(8, 8, 8, 0.8)'
          };
        case 'neon':
          return {
            primary: '#00ffff',
            secondary: '#ff00ff',
            accent: '#ffff00',
            background: 'rgba(0, 0, 0, 0.9)'
          };
        case 'holographic':
          return {
            primary: '#ff6b6b',
            secondary: '#4ecdc4',
            accent: '#45b7d1',
            background: 'rgba(0, 0, 0, 0.7)'
          };
        case 'matrix':
          return {
            primary: '#00ff00',
            secondary: '#00cc00',
            accent: '#009900',
            background: 'rgba(0, 0, 0, 0.95)'
          };
        default:
          return {
            primary: '#8c15e9',
            secondary: '#22ddd2',
            accent: '#ff0080',
            background: 'rgba(8, 8, 8, 0.8)'
          };
      }
    };

    const colors = getColorScheme();

    // Create particles
    const createParticle = () => {
      const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
      
      if (particles.length < particleCount) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          life: Math.random() * 100,
          maxLife: 100
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
        });
      }
    };

<<<<<<< HEAD
<<<<<<< HEAD
    // Draw grid pattern
    const drawGrid = () => {
      const gridSize = 40;
      const gridOpacity = 0.1;
      
      ctx.strokeStyle = `rgba(34, 221, 210, ${gridOpacity})`;
      ctx.lineWidth = 1;
      
      // Vertical lines
=======
    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.fill();

        // Draw connections between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw grid lines
      ctx.strokeStyle = '#8c15e9';
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;

      const gridSize = 50;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
<<<<<<< HEAD
      
      // Horizontal lines
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
<<<<<<< HEAD
    };

    // Draw wave pattern
    const drawWaves = () => {
      const waveCount = 3;
      const waveHeight = 100;
      
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(140, 115, 242, ${0.1 + i * 0.1})`;
        ctx.lineWidth = 2;
        
        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height / 2 + 
            Math.sin((x + time * 0.5) * 0.01 + i) * waveHeight +
            Math.sin((x + time * 0.3) * 0.005) * 50;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };

    // Draw matrix effect
    const drawMatrix = () => {
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      const drops: number[] = [];
      
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
      
      ctx.fillStyle = 'rgba(34, 221, 210, 0.1)';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Draw particles
    const drawParticles = () => {
      particles.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        
        // Create glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        
=======
    // Update and draw particles
    const animate = () => {
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new particles
      createParticle();

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
          return;
        }

        // Draw particle
        const alpha = (particle.life / particle.maxLife) * particle.opacity;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, colors.primary);
        gradient.addColorStop(0.5, colors.secondary);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });
<<<<<<< HEAD
    };

    // Update particles
    const updateParticles = () => {
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };

    // Draw connections between nearby particles
    const drawConnections = () => {
      const connectionDistance = 150;
      
      ctx.strokeStyle = 'rgba(34, 221, 210, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(34, 221, 210, ${opacity * 0.2})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background pattern based on variant
      switch (variant) {
        case 'grid':
          drawGrid();
          break;
        case 'waves':
          drawWaves();
          break;
        case 'matrix':
          drawMatrix();
          break;
        default:
          break;
      }
      
      // Update and draw particles
      updateParticles();
      drawParticles();
      drawConnections();
      
      time += 0.016; // 60 FPS
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(23, 45, 103, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />
      
      {/* Additional overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-zion-purple/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-zion-cyan/5 to-transparent" />
      
      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-zion-cyan/30 animate-pulse" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-zion-purple/30 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-zion-purple/30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-zion-cyan/30 animate-pulse" />
    </div>
  );
=======

      // Draw connecting lines between nearby particles
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          );
          
          if (distance < 100) {
            const alpha = (1 - distance / 100) * 0.3;
            ctx.strokeStyle = colors.accent;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      // Draw grid lines for cyberpunk effect
      if (colorScheme === 'cyberpunk' || colorScheme === 'matrix') {
        ctx.strokeStyle = colors.primary;
        ctx.globalAlpha = 0.1;
        ctx.lineWidth = 1;
        
        const gridSize = 50;
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
      }

      // Draw scanning line effect
      if (intensity === 'high') {
        const scanY = (Date.now() / 20) % canvas.height;
        const gradient = ctx.createLinearGradient(0, scanY - 10, 0, scanY + 10);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.5, colors.accent + '40');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, scanY - 10, canvas.width, 20);
=======

      // Draw scanning line effect
      const time = Date.now() * 0.001;
      const scanY = (Math.sin(time * 0.5) * 0.5 + 0.5) * canvas.height;
      
      ctx.strokeStyle = '#22ddd2';
      ctx.globalAlpha = 0.3;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();

      // Draw scanning line glow
      ctx.strokeStyle = '#22ddd2';
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 20;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();

      // Draw corner brackets
      const bracketSize = 30;
      const bracketThickness = 3;
      
      ctx.strokeStyle = '#8c15e9';
      ctx.globalAlpha = 0.6;
      ctx.lineWidth = bracketThickness;

      // Top-left bracket
      ctx.beginPath();
      ctx.moveTo(20, 20 + bracketSize);
      ctx.lineTo(20, 20);
      ctx.lineTo(20 + bracketSize, 20);
      ctx.stroke();

      // Top-right bracket
      ctx.beginPath();
      ctx.moveTo(canvas.width - 20 - bracketSize, 20);
      ctx.lineTo(canvas.width - 20, 20);
      ctx.lineTo(canvas.width - 20, 20 + bracketSize);
      ctx.stroke();

      // Bottom-left bracket
      ctx.beginPath();
      ctx.moveTo(20, canvas.height - 20 - bracketSize);
      ctx.lineTo(20, canvas.height - 20);
      ctx.lineTo(20 + bracketSize, canvas.height - 20);
      ctx.stroke();

      // Bottom-right bracket
      ctx.beginPath();
      ctx.moveTo(canvas.width - 20 - bracketSize, canvas.height - 20);
      ctx.lineTo(canvas.width - 20, canvas.height - 20);
      ctx.lineTo(canvas.width - 20, canvas.height - 20 - bracketSize);
      ctx.stroke();

      // Draw floating orbs
      const orbCount = 3;
      for (let i = 0; i < orbCount; i++) {
        const orbX = canvas.width * 0.2 + (canvas.width * 0.6 * i) / (orbCount - 1);
        const orbY = canvas.height * 0.3 + Math.sin(time + i) * 50;
        const orbSize = 20 + Math.sin(time * 2 + i) * 5;
        
        // Orb glow
        const gradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbSize * 2);
        gradient.addColorStop(0, 'rgba(140, 21, 233, 0.8)');
        gradient.addColorStop(0.5, 'rgba(34, 221, 210, 0.4)');
        gradient.addColorStop(1, 'rgba(140, 21, 233, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orbX, orbY, orbSize * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Orb core
        ctx.fillStyle = '#8c15e9';
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.arc(orbX, orbY, orbSize, 0, Math.PI * 2);
        ctx.fill();
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
<<<<<<< HEAD
  }, [intensity, colorScheme]);
=======
  }, [intensity]);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
<<<<<<< HEAD
        style={{ zIndex: -1 }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
      
      {/* Content */}
=======
        style={{ zIndex: 0 }}
      />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

<<<<<<< HEAD
// Preset background components for common use cases
export function CyberpunkBackground({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <FuturisticBackground 
      className={className} 
      intensity="high" 
      colorScheme="cyberpunk"
    >
      {children}
    </FuturisticBackground>
  );
}

export function NeonBackground({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <FuturisticBackground 
      className={className} 
      intensity="medium" 
      colorScheme="neon"
    >
      {children}
    </FuturisticBackground>
  );
}

export function HolographicBackground({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <FuturisticBackground 
      className={className} 
      intensity="low" 
      colorScheme="holographic"
    >
      {children}
    </FuturisticBackground>
  );
}

export function MatrixBackground({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <FuturisticBackground 
      className={className} 
      intensity="high" 
      colorScheme="matrix"
    >
      {children}
    </FuturisticBackground>
  );
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
// Simplified version for performance
export function SimpleFuturisticBackground({ 
  children, 
  className = '' 
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark animate-pulse"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-purple/30 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-zion-cyan/40 transform rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-tr from-zion-purple/30 to-zion-cyan/30 rounded animate-spin-reverse"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(140,21,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(140,21,233,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
}