import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FuturisticServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  className?: string;
  onClick?: () => void;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features = [],
  className = '',
  onClick
}) => {
  return (
    <div 
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 text-center">{title}</h3>
      <p className="text-gray-300 text-center mb-4">{description}</p>
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-400 flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FuturisticServiceCard;
