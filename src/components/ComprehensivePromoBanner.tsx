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
        <h2>Comprehensive Promo Banner</h2>
        <p>This is a comprehensive promotional banner component.</p>
        <Link to="/" className="cta-button">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ComprehensivePromoBanner;