import React from 'react';

interface AdvertisingBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  imageUrl?: string;
  backgroundColor?: string;
  textColor?: string;
}

const AdvertisingBanner: React.FC<AdvertisingBannerProps> = ({
  title,
  description,
  ctaText,
  ctaUrl,
  imageUrl,
  backgroundColor = '#3b82f6',
  textColor = '#ffffff',
}) => {
  return (
    <div
      className="advertising-banner"
      style={{
        backgroundColor,
        color: textColor,
        padding: '2rem',
        borderRadius: '0.5rem',
        margin: '1rem 0',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      {imageUrl && (
        <div className="banner-image">
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: '200px',
              height: 'auto',
              borderRadius: '0.25rem',
            }}
          />
        </div>
      )}

      <div className="banner-content" style={{ flex: 1 }}>
        <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>{title}</h2>
        <p style={{ margin: '0 0 1.5rem 0', fontSize: '1rem', opacity: 0.9 }}>{description}</p>
        <a
          href={ctaUrl}
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: textColor,
            textDecoration: 'none',
            borderRadius: '0.25rem',
            fontWeight: 'bold',
            transition: 'background-color 0.2s',
          }}
          onMouseOver={e => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          }}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default AdvertisingBanner;
