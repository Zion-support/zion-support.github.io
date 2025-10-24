'use client';
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FuturisticServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price?: string;
  isPopular?: boolean;
  onClick?: () => void;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  price,
  isPopular = false,
  onClick,
}) => {
  return (
    <div 
      className={`futuristic-service-card ${isPopular ? 'popular' : ''}`}
      onClick={onClick}
    >
      {isPopular && (
        <div className="popular-badge">
          Most Popular
        </div>
      )}
      
      <div className="card-header">
        <div className="icon-container">
          <Icon size={32} />
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      
      <div className="card-features">
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              <span className="feature-check">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      {price && (
        <div className="card-price">
          <span className="price-amount">{price}</span>
          <span className="price-period">/month</span>
        </div>
      )}
      
      <button className="card-button">
        Get Started
      </button>
    </div>
  );
};

export default FuturisticServiceCard;