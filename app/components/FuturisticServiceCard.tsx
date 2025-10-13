import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FuturisticServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({ icon: Icon, title, description, benefits }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-sm text-gray-400">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FuturisticServiceCard;