import React from 'react';
import Card from './Card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  isActive?: boolean;
  onMouseEnter?: () => void;

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features = [],
  isActive = false,
  onMouseEnter,
) => {
  return (
    <Card
      className={`cursor-pointer ${
        isActive ? 'ring-2 ring-blue-400 shadow-lg shadow-blue-400/25' : ''
      }`}
      onMouseEnter={onMouseEnter}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map(feature, index) => (
          <li key={index} className="text-sm text-gray-400 flex items-center">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            {feature}
          </li>
        )}
      </ul>
    </Card>
  );

export default ServiceCard;