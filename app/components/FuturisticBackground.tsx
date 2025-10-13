import React from "react";

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-500/5 rounded-full blur-2xl animate-bounce delay-300"></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 bg-yellow-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full cyber-grid"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        ></div>
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-5 matrix-rain">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 floating-particles">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent"></div>
      </div>

      {/* Scan Lines */}
      <div className="absolute inset-0 scan-lines">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
      </div>

      {/* Neural Network Connections */}
      <div className="absolute inset-0 neural-network-bg">
        <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <g>
            <line x1="10" y1="20" x2="30" y2="40" stroke="url(#neuralGradient)" strokeWidth="0.5" />
            <line x1="30" y1="40" x2="50" y2="60" stroke="url(#neuralGradient)" strokeWidth="0.5" />
            <line x1="50" y1="60" x2="70" y2="80" stroke="url(#neuralGradient)" strokeWidth="0.5" />
            <line x1="70" y1="80" x2="90" y2="60" stroke="url(#neuralGradient)" strokeWidth="0.5" />
            <line x1="90" y1="60" x2="80" y2="40" stroke="url(#neuralGradient)" strokeWidth="0.5" />
            <line x1="80" y1="40" x2="60" y2="20" stroke="url(#neuralGradient)" strokeWidth="0.5" />
            <line x1="60" y1="20" x2="40" y2="30" stroke="url(#neuralGradient)" strokeWidth="0.5" />
            <line x1="40" y1="30" x2="20" y2="50" stroke="url(#neuralGradient)" strokeWidth="0.5" />
            <line x1="20" y1="50" x2="10" y2="70" stroke="url(#neuralGradient)" strokeWidth="0.5" />
            <line x1="10" y1="70" x2="30" y2="90" stroke="url(#neuralGradient)" strokeWidth="0.5" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FuturisticBackground;
