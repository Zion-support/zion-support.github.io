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
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Secondary floating elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-orange-500/5 rounded-full blur-xl animate-pulse delay-1200"></div>
        
        {/* Quantum particles */}
        <div className="quantum-particles absolute inset-0"></div>
      </div>

      {/* Enhanced cyber grid pattern */}
      <div className="cyber-grid-enhanced absolute inset-0 opacity-30"></div>
      
      {/* Matrix rain effect */}
      <div className="matrix-rain-enhanced absolute inset-0 opacity-20"></div>
      
      {/* Cyber circuit pattern */}
      <div className="cyber-circuit absolute inset-0 opacity-10"></div>

      {/* Scan lines effect */}
      <div className="scan-lines-enhanced absolute inset-0"></div>

      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FuturisticBackground;
