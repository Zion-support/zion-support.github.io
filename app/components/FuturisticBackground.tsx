import React, { useEffect, useState } from 'react';

const FuturisticBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        
        {/* Enhanced Animated Grid Lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="grid grid-cols-16 grid-rows-16 h-full w-full">
            {Array.from({ length: 256 }).map((_, i) => (
              <div
                key={i}
                className="border border-purple-500/40 animate-pulse"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '4s',
                  boxShadow: '0 0 10px rgba(168, 85, 247, 0.3)'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Dynamic Floating Neon Orbs */}
        <div 
          className="absolute w-32 h-32 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 rounded-full blur-xl animate-pulse"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            boxShadow: '0 0 50px rgba(168, 85, 247, 0.5)'
          }}
        ></div>
        <div 
          className="absolute w-24 h-24 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded-full blur-xl animate-pulse"
          style={{
            top: '40%',
            right: '20%',
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            boxShadow: '0 0 40px rgba(6, 182, 212, 0.5)'
          }}
        ></div>
        <div 
          className="absolute w-40 h-40 bg-gradient-to-r from-pink-500/40 to-purple-500/40 rounded-full blur-xl animate-pulse"
          style={{
            bottom: '30%',
            left: '25%',
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            boxShadow: '0 0 60px rgba(236, 72, 153, 0.5)'
          }}
        ></div>
        <div 
          className="absolute w-28 h-28 bg-gradient-to-r from-green-500/40 to-cyan-500/40 rounded-full blur-xl animate-pulse"
          style={{
            bottom: '20%',
            right: '30%',
            animationDelay: '0.5s',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            boxShadow: '0 0 45px rgba(34, 197, 94, 0.5)'
          }}
        ></div>

        {/* Enhanced Animated Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
              }}
            ></div>
          ))}
        </div>

        {/* Enhanced Neon Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80 shadow-lg shadow-purple-500/50"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-80 shadow-lg shadow-cyan-500/50"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-80 shadow-lg shadow-purple-500/50"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-80 shadow-lg shadow-cyan-500/50"></div>

        {/* Animated Circuit Lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              d="M0,100 Q200,50 400,100 T800,100 L1000,100"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            <path
              d="M0,300 Q300,250 600,300 T1200,300 L1400,300"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDuration: '4s', animationDelay: '1s' }}
            />
            <path
              d="M0,500 Q400,450 800,500 T1600,500 L1800,500"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDuration: '5s', animationDelay: '2s' }}
            />
          </svg>
        </div>

        {/* Holographic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 animate-pulse"></div>
      </div>
    </div>
  );
};

export default FuturisticBackground;