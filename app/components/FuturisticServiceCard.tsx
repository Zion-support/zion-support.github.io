import React from 'react';

interface FuturisticServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-cyan-500/25 transition-all duration-300 group">
      <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default FuturisticServiceCard;