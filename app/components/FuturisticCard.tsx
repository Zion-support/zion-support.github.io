import React from 'react';
import FuturisticCard from "../components/FuturisticCard";

interface FuturisticcardProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Futuristiccard({ className = '', children, ...props }: FuturisticcardProps) {
=======
const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
//   children, 
  className = '', 
  variant = 'default' 
}) => {
  const baseClasses = "rounded-xl p-6 transition-all duration-300";
  
  const variantClasses = {
//     default: "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20",
//     glass: "bg-white/5 backdrop-blur-md border border-cyan-500/30 hover:bg-white/10",
//     neon: "bg-slate-800/50 border border-cyan-400/50 hover:border-cyan-400 shadow-lg shadow-cyan-500/10",
//     hologram: "bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 hover:from-cyan-500/20 hover:to-purple-500/20"
  };

>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  return (
    <div className={`futuristiccard-component ${className}`} {...props}>
      {children}
</div>
  );
}
