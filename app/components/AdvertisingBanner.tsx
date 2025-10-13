import React from 'react';

interface AdvertisingBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  imageUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  variant?: 'default' | 'gradient' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const AdvertisingBanner: React.FC<AdvertisingBannerProps> = ({
  title,
  description,
  ctaText,
  ctaUrl,
  imageUrl,
  backgroundColor = '#3b82f6',
  textColor = '#ffffff',
  variant = 'default',
  size = 'medium',
  className = ''
} => {
  const sizeClasses = {
    small: 'py-4 px-6',
    medium: 'py-8 px-12',
    large: 'py-12 px-16'
  };

  const variantClasses = {
    default: 'rounded-lg shadow-lg',
    gradient: 'rounded-xl bg-gradient-to-r from-blue-500 to-purple-600',
    minimal: 'rounded-md border border-gray-200'
  };

  return (
    <div
      className={`advertising-banner ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      style={{
        backgroundColor: variant === 'gradient' ? undefined : backgroundColor,
        color: textColor,
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        margin: '1rem 0'
      }}
    >
      {imageUrl && (
        <div className="banner-image flex-shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-md"
            style={{
              width: size === 'small' ? '120px' : size === 'medium' ? '200px' : '280px',
              height: 'auto'
            }}
          />
        </div>
      )}

      <div className="banner-content flex-1">
        <h2 
          className="font-bold mb-4"
          style={{ 
            margin: '0 0 1rem 0', 
            fontSize: size === 'small' ? '1.25rem' : size === 'medium' ? '1.5rem' : '2rem'
          }}
        >
          {title}
        </h2>
        <p 
          className="mb-6 opacity-90"
          style={{ 
            margin: '0 0 1.5rem 0', 
            fontSize: size === 'small' ? '0.875rem' : '1rem',
            opacity: 0.9
          }}
        >
          {description}
        </p>
        <a
          href={ctaUrl}
          className="inline-block px-6 py-3 rounded-md font-bold transition-all duration-200 hover:opacity-80"
          style={{
            display: 'inline-block',
            padding: size === 'small' ? '0.5rem 1rem' : size === 'medium' ? '0.75rem 1.5rem' : '1rem 2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: textColor,
            textDecoration: 'none',
            borderRadius: '0.25rem',
            fontWeight: 'bold',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          }}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default AdvertisingBanner;)