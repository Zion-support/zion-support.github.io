import React from 'react';

interface FuturisticServiceCardProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  children,
  className = '',
  title,
  description,
  icon: Icon
}) => {
  return (
    <div className={`futuristic-service-card ${className}`}>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
        {Icon && (
          <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-white" />
          </div>
        )}
        {title && (
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        )}
        {description && (
          <p className="text-gray-300 mb-4">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default FuturisticServiceCard;