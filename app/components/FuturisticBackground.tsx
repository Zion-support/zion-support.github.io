import React from "react";

interface FuturisticBackgroundProps {
  children: React.ReactNode;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        </div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackground;