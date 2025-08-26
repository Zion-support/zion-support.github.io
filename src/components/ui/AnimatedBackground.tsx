<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'section' | 'card';
  className?: string;
}

export function AnimatedBackground({ variant = 'hero', className = '' }: AnimatedBackgroundProps) {
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Animated gradient background */}
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 animate-pulse"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-blue-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }}></div>
=======
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark animate-pulse"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-zion-cyan/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-zion-blue/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }}></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,113,242,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,113,242,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Neon lines */}
<<<<<<< HEAD
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
=======
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-zion-blue to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-zion-cyan to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Subtle animated background */}
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-blue-500/5 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-500/40 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-500/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-10 left-1/2 w-1.5 h-1.5 bg-blue-500/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
=======
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 via-zion-cyan/5 to-zion-blue/5 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-zion-cyan/40 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-zion-purple/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-10 left-1/2 w-1.5 h-1.5 bg-zion-blue/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`absolute inset-0 overflow-hidden rounded-lg ${className}`}>
        {/* Card glow effect */}
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-blue-500/10 animate-pulse"></div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500/60 rounded-full animate-pulse"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500/60 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
=======
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/10 via-zion-cyan/5 to-zion-blue/10 animate-pulse"></div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-zion-cyan/60 rounded-full animate-pulse"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-zion-purple/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-zion-blue/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-zion-cyan/60 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      </div>
    );
  }

  return null;
}

export function NeonBorder({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`relative ${className}`}>
      {/* Neon border effect */}
<<<<<<< HEAD
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-lg blur-sm opacity-50"></div>
      <div className="relative bg-slate-800/90 rounded-lg border border-purple-500/30">
=======
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue rounded-lg blur-sm opacity-50"></div>
      <div className="relative bg-zion-slate-dark/90 rounded-lg border border-zion-purple/30">
=======
import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  className?: string;
  variant?: 'grid' | 'particles' | 'waves' | 'matrix';
}

export function AnimatedBackground({ className = '', variant = 'grid' }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      const particleCount = variant === 'particles' ? 100 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const drawGrid = () => {
      const gridSize = 40;
      const offset = (Date.now() * 0.001) % gridSize;
      
      ctx.strokeStyle = 'rgba(139, 21, 233, 0.1)';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawParticles = () => {
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
        ctx.fillStyle = `rgba(34, 221, 210, ${particle.opacity})`;
        ctx.fill();
        
        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(139, 21, 233, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
    };

    const drawWaves = () => {
      const time = Date.now() * 0.001;
      const amplitude = 50;
      const frequency = 0.01;
      
      ctx.strokeStyle = 'rgba(34, 221, 210, 0.3)';
      ctx.lineWidth = 2;
      
      // Draw multiple wave layers
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height / 2 + 
                   amplitude * Math.sin(frequency * x + time + layer) +
                   layer * 30;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };

    const drawMatrix = () => {
      const time = Date.now() * 0.001;
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      
      ctx.fillStyle = 'rgba(34, 221, 210, 0.8)';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < columns; i++) {
        const x = i * fontSize;
        const y = (Math.sin(time + i) * 0.5 + 0.5) * canvas.height;
        
        const char = String.fromCharCode(
          Math.floor(Math.random() * 26) + 65
        );
        
        ctx.fillText(char, x, y);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      switch (variant) {
        case 'grid':
          drawGrid();
          break;
        case 'particles':
          drawParticles();
          break;
        case 'waves':
          drawWaves();
          break;
        case 'matrix':
          drawMatrix();
          break;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
      }}
    />
  );
}

// Neon glow effect component
export function NeonGlow({ children, className = '', glowColor = '#8c15e9' }: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`,
        filter: `drop-shadow(0 0 10px ${glowColor})`
      }}
    >
      {children}
    </div>
  );
}

// Floating particles component
export function FloatingParticles({ count = 20, className = '' }: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-zion-cyan rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

// Gradient border component
export function GradientBorder({ children, className = '', borderWidth = '2px' }: {
  children: React.ReactNode;
  className?: string;
  borderWidth?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: `linear-gradient(45deg, #8c15e9, #22ddd2, #8c15e9)`,
        padding: borderWidth,
        borderRadius: 'inherit',
      }}
    >
      <div className="bg-zion-blue-dark rounded-[inherit] h-full w-full">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-ac34
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
        {children}
      </div>
    </div>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
}

export function GlowingText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`${className} bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent animate-pulse`}>
      {children}
    </span>
  );
}

export function FloatingElement({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`animate-float ${className}`}>
      {children}
    </div>
  );
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-ac34
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
}