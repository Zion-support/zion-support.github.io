import React from 'react';
import { Link } from 'react-router-dom';

interface ComprehensivePromoBannerProps {
  variant?: 'hero' | 'compact' | 'featured';
  showCount?: number;
  className?: string;
}

const ComprehensivePromoBanner: React.FC<ComprehensivePromoBannerProps> = ({
  variant = 'hero',
  showCount = 3,
  className = ''
}) => {
  return (
    <div className={`comprehensive-promo-banner ${variant} ${className}`}>
      <div className="banner-content">
        <h2>Comprehensive Solutions</h2>
        <p>Discover our full range of services and solutions.</p>
        <Link to="/services">
          Explore Services
        </Link>
      </div>
    </div>
  );
};

export default ComprehensivePromoBanner;