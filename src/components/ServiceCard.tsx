import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className = ''
}) => {
  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 ${className}`}>
      <div className="text-5xl mb-6 text-center">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 text-center">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;