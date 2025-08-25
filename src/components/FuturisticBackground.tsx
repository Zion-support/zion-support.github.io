<<<<<<< HEAD


const FuturisticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 text-xs font-mono animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Quantum Mesh Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(168,85,247,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(0,255,65,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Holographic Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
            style={{
              top: `${20 + i * 15}%`,
              left: '0',
              right: '0',
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={i + 5}
            className="absolute w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: '0',
              bottom: '0',
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Energy Waves */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/30 text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {['⚡', '🔮', '💎', '🌟', '🚀', '🎯', '🔬', '⚙️', '🎨', '🌐', '🔋', '📡'][i]}
          </div>
        ))}
      </div>

      {/* Quantum Entanglement Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Neural Network Connections */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              cx={`${20 + i * 10}%`}
              cy={`${30 + Math.sin(i) * 20}%`}
              r="2"
              fill="url(#neuralGradient)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <line
              key={i}
              x1={`${25 + i * 10}%`}
              y1={`${25 + Math.sin(i) * 15}%`}
              x2={`${35 + i * 10}%`}
              y2={`${35 + Math.sin(i + 1) * 15}%`}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default FuturisticBackground;
=======
import React, { useEffect, useRef } from 'react';

interface FuturisticBackgroundProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export function FuturisticBackground({ className = '', intensity = 'medium' }: FuturisticBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

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

    // Matrix rain effect
    const matrixRain = () => {
      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const fontSize = 14;
      const columns = canvas.width / fontSize;
      const drops: number[] = [];

      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }

      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#22ddd2';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = characters.charAt(Math.floor(Math.random() * characters.length));
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };

      const interval = setInterval(draw, 50);
      return () => clearInterval(interval);
    };

    const cleanup = matrixRain();

    return () => {
      cleanup();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;

    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 2;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;

      particle.className = 'absolute rounded-full bg-zion-cyan opacity-20';
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        animation: float ${duration}s ease-in-out infinite;
        animation-delay: ${delay}s;
      `;

      particlesContainer.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, (duration + delay) * 1000);
    };

    // Create particles based on intensity
    const particleCount = intensity === 'low' ? 10 : intensity === 'medium' ? 20 : 35;
    const interval = setInterval(() => {
      for (let i = 0; i < particleCount; i++) {
        createParticle();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      {/* Matrix rain canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-10"
        style={{ zIndex: 1 }}
      />
      
      {/* Floating particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0"
        style={{ zIndex: 2 }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 221, 210, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 221, 210, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(140, 21, 233, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(34, 221, 210, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(140, 21, 233, 0.05) 0%, transparent 50%)
          `
        }}
      />
    </div>
  );
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a2e5
