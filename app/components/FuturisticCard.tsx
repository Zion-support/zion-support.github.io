import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticCard;