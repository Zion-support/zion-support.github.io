'use client';
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
}

const AdvancedFuturisticBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Create initial particles
    const initialParticles: Particle[] = [];
    const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ff8000', '#ff0040', '#8000ff'];
    
    for (let i = 0; i < 50; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.8 + 0.2
      });
    }
    
    setParticles(initialParticles);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;
          let newVx = particle.vx;
          let newVy = particle.vy;

          // Bounce off walls
          if (newX <= 0 || newX >= window.innerWidth) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(window.innerWidth, newX));
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(window.innerHeight, newY));
          }

          // Mouse interaction
          const dx = mousePosition.x - newX;
          const dy = mousePosition.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const force = (100 - distance) / 100;
            newVx += (dx / distance) * force * 0.1;
            newVy += (dy / distance) * force * 0.1;
          }

          // Apply friction
          newVx *= 0.99;
          newVy *= 0.99;

          return {
            ...particle,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        })
      );

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Cyber Matrix Background */}
      <div className="cyber-matrix-bg"></div>
      
      {/* Quantum Field Background */}
      <div className="quantum-field-bg"></div>
      
      {/* Holographic Grid */}
      <div className="holographic-grid"></div>
      
      {/* Animated Particles */}
      <div className="quantum-particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 5}px ${particle.color}`
            }}
          />
        ))}
      </div>
      
      {/* Scanning Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="scanning-line" style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
          animation: 'scanLine 3s linear infinite'
        }}></div>
      </div>
      
      {/* Holographic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent"></div>
      
      <style jsx>{`
        @keyframes scanLine {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default AdvancedFuturisticBackground;