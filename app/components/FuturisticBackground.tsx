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
      className={`relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 quantum-field holographic-grid ${className}`}
    >
      {/* Advanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary quantum field */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Secondary floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-br from-pink-500/15 to-red-500/15 rounded-full blur-xl animate-pulse delay-1200"></div>
      </div>

      {/* Holographic grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full holographic-grid"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(0, 255, 136, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
          }}
        ></div>
      </div>

      {/* Plasma effect overlay */}
      <div className="absolute inset-0 plasma-effect opacity-20"></div>

      {/* Data stream effect */}
      <div className="absolute inset-0 data-stream opacity-10"></div>

      {/* Scan lines */}
      <div className="absolute inset-0 scan-lines opacity-5"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FuturisticBackground;
