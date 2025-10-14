import React from 'react';

interface FuturisticServiceCardProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({ 
  icon, 
  title = "Service", 
  description = "Service description" 
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FuturisticServiceCard;
