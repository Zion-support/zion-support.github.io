import React, { useEffect, useRef } from "react";

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({
  children,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ["#8b5cf6", "#ec4899", "#06b6d4", "#10b981", "#3b82f6"];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color + Math.floor((1 - distance / 100) * 50).toString(16).padStart(2, '0');
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      className={`relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs with enhanced animations */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-500/15 to-yellow-500/15 rounded-full blur-2xl animate-pulse delay-300"></div>
        
        {/* Moving light streaks */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-cyan-500 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-1 h-24 bg-gradient-to-b from-purple-500 to-transparent animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1 h-40 bg-gradient-to-b from-pink-500 to-transparent animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Enhanced grid pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full cyber-grid"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Neural network connections */}
      <div className="absolute inset-0 neural-network-bg"></div>

      {/* Particle system canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ zIndex: 1 }}
      />

      {/* Scan lines effect */}
      <div className="absolute inset-0 scan-lines"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FuturisticBackground;
