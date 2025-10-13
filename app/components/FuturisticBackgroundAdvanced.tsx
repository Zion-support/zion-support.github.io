import React, { useRef, useEffect, useState } from 'react';

interface FuturisticBackgroundAdvancedProps {
  children: React.ReactNode;
  variant?: 'default' | 'neon' | 'cyber' | 'quantum';
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
}

const FuturisticBackgroundAdvanced: React.FC<FuturisticBackgroundAdvancedProps> = ({
  children,
  variant = 'default',
  intensity = 'medium',
  animated = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const getVariantConfig = () => {
      switch (variant) {
        case 'neon':
          return {
            primaryColor: 'rgba(6, 182, 212, 0.8)',
            secondaryColor: 'rgba(139, 92, 246, 0.6)',
            accentColor: 'rgba(236, 72, 153, 0.4)',
            particleCount: intensity === 'high' ? 100 : intensity === 'medium' ? 60 : 30,
            lineCount: intensity === 'high' ? 20 : intensity === 'medium' ? 12 : 6,
            glowIntensity: intensity === 'high' ? 0.8 : intensity === 'medium' ? 0.6 : 0.4
          };
        case 'cyber':
          return {
            primaryColor: 'rgba(0, 255, 0, 0.7)',
            secondaryColor: 'rgba(0, 255, 255, 0.5)',
            accentColor: 'rgba(255, 0, 255, 0.3)',
            particleCount: intensity === 'high' ? 80 : intensity === 'medium' ? 50 : 25,
            lineCount: intensity === 'high' ? 15 : intensity === 'medium' ? 10 : 5,
            glowIntensity: intensity === 'high' ? 0.9 : intensity === 'medium' ? 0.7 : 0.5
          };
        case 'quantum':
          return {
            primaryColor: 'rgba(147, 51, 234, 0.6)',
            secondaryColor: 'rgba(59, 130, 246, 0.4)',
            accentColor: 'rgba(236, 72, 153, 0.3)',
            particleCount: intensity === 'high' ? 120 : intensity === 'medium' ? 70 : 35,
            lineCount: intensity === 'high' ? 25 : intensity === 'medium' ? 15 : 8,
            glowIntensity: intensity === 'high' ? 0.7 : intensity === 'medium' ? 0.5 : 0.3
          };
        default:
          return {
            primaryColor: 'rgba(6, 182, 212, 0.5)',
            secondaryColor: 'rgba(139, 92, 246, 0.3)',
            accentColor: 'rgba(236, 72, 153, 0.2)',
            particleCount: intensity === 'high' ? 60 : intensity === 'medium' ? 40 : 20,
            lineCount: intensity === 'high' ? 10 : intensity === 'medium' ? 6 : 3,
            glowIntensity: intensity === 'high' ? 0.6 : intensity === 'medium' ? 0.4 : 0.2
          };
      }
    };

    const config = getVariantConfig();
    let time = 0;

    const animate = () => {
      if (!animated) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Create animated particles
      for (let i = 0; i < config.particleCount; i++) {
        const angle = (i / config.particleCount) * Math.PI * 2;
        const radius = 200 + Math.sin(time + i) * 100;
        const x = canvas.width / 2 + Math.cos(angle + time) * radius;
        const y = canvas.height / 2 + Math.sin(angle + time) * radius;
        const size = Math.sin(time * 2 + i) * 3 + 2;
        
        // Create glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
        gradient.addColorStop(0, config.primaryColor);
        gradient.addColorStop(0.5, config.secondaryColor);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(x, y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Core particle
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = config.primaryColor;
        ctx.fill();
      }

      // Create connecting lines
      for (let i = 0; i < config.lineCount; i++) {
        const x1 = canvas.width / 2 + Math.cos(time + i) * 150;
        const y1 = canvas.height / 2 + Math.sin(time + i) * 150;
        const x2 = canvas.width / 2 + Math.cos(time + i + Math.PI) * 150;
        const y2 = canvas.height / 2 + Math.sin(time + i + Math.PI) * 150;
        
        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, config.primaryColor);
        gradient.addColorStop(0.5, config.secondaryColor);
        gradient.addColorStop(1, config.accentColor);
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Mouse interaction effect
      if (mousePosition.x > 0 && mousePosition.y > 0) {
        const gradient = ctx.createRadialGradient(
          mousePosition.x, mousePosition.y, 0,
          mousePosition.x, mousePosition.y, 100
        );
        gradient.addColorStop(0, config.accentColor);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, 100, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Add grid overlay for cyber variant
      if (variant === 'cyber') {
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.1)';
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

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity, animated, mousePosition]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Additional CSS-based effects */}
      <div 
        className={`absolute inset-0 w-full h-full pointer-events-none ${
          variant === 'neon' ? 'bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5' :
          variant === 'cyber' ? 'bg-gradient-to-br from-green-500/5 via-cyan-500/5 to-blue-500/5' :
          variant === 'quantum' ? 'bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5' :
          'bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-slate-900/20'
        }`}
        style={{ zIndex: 2 }}
      />
      
      {/* Animated overlay */}
      {animated && (
        <div 
          className={`absolute inset-0 w-full h-full pointer-events-none ${
            variant === 'neon' ? 'animate-pulse' :
            variant === 'cyber' ? 'animate-pulse' :
            variant === 'quantum' ? 'animate-pulse' :
            ''
          }`}
          style={{ 
            zIndex: 3,
            background: variant === 'quantum' 
              ? 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)'
              : 'none'
          }}
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackgroundAdvanced;