import React, { useEffect, useRef } from 'react';
interface UltraFuturisticBackground2034Props {
  intensity?: number;
  theme?: 'quantum' | 'neon' | 'holographic';
}
const UltraFuturisticBackground2034: React.FC<UltraFuturisticBackground2034Props> = ({
  intensity = 0.8,
  theme = 'quantum'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];
    const colors = {
      quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'],
      neon: ['#ff0080', '#8000ff', '#00ffff', '#ffff00'],
      holographic: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']
    };
    const selectedColors = colors[theme];
    // Create particles
    for (let i = 0; i < 100; i++) {
      particles({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: selectedColors[Math.floor(Math.random() * selectedColors.length)]
      });
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
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
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `${particle.color}${Math.floor((1 - distance / 150) * 0.3 * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      // Add quantum effects
      if (theme === 'quantum') {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        
        // Quantum wave effect
        for (let i = 0; i < 5; i++) {
          const time = Date.now() * 0.001;
          const wave = Math.sin(time + i) * 100;
          
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, 100 + wave, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * intensity})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        
        ctx.restore();
      }
      // Add neon effects
      if (theme === 'neon') {
        ctx.save();
        ctx.shadowColor = '#ff0080';
        ctx.shadowBlur = 20;
        
        particles.forEach(particle => {
          if (particle.size > 2) {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
        
        ctx.restore();
      }
      // Add holographic effects
      if (theme === 'holographic') {
        ctx.save();
        ctx.globalCompositeOperation = 'overlay';
        
        // Holographic grid
        const gridSize = 50;
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * intensity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
        
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * intensity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
        
        ctx.restore();
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity, theme]);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: intensity,
        filter: theme === 'quantum' ? 'blur(0.5px)' : 'none'
      }}
    />
  );
};
export default UltraFuturisticBackground2034;