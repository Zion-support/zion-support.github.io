import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticCard;