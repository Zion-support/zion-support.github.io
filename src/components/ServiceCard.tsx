import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  pricing?: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  color,
  features,
  pricing,
  onClick
}) => {
  return (
    <div 
      className="service-card"
      style={{ '--card-color': color } as React.CSSProperties}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
      aria-label={`Learn more about ${title}`}
    >
      <div className="service-icon" role="img" aria-label={`${title} icon`}>
        {icon}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            ✓ {feature}
          </li>
        ))}
      </ul>
      {pricing && (
        <div className="service-pricing">
          <span className="price">{pricing}</span>
          <span className="price-note">Starting from</span>
        </div>
      )}
      <button className="service-btn">
        Get Started
      </button>
    </div>
  );
};

export default ServiceCard;