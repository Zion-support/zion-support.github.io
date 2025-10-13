import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
<<<<<<< HEAD
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 ${className}`}>
=======
  variant?: 'default' | 'glow' | 'gradient';
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const baseClasses = 'rounded-xl p-6 border border-white/20 backdrop-blur-sm';
  
  const variantClasses = {
    default: 'bg-white/10',
    glow: 'bg-white/10 shadow-lg shadow-blue-500/20',
    gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-0bb0
      {children}
    </div>
  );
};

export default FuturisticCard;