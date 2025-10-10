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

const AdvertisingBanner: React.FC<AdvertisingBannerProps> = ({</AdvertisingBannerProps>title</AdvertisingBannerProps>,
  description,
  ctaText,
  ctaUrl,
  imageUrl,
  backgroundColor = '#3 b82 f6',
  textColor = '#ffffff',
}) => {
  return (
    <div
      className="advertising-banner"
      style={{
        backgroundColor,
        color: textColor,
        padding: '2 rem',
        borderRadius: '0.5 rem',
        margin: '1 rem 0',
        display: 'flex',
        alignItems: 'center',
        gap: '2 rem',
      }}
    ></div>
      {imageUrl && (
        <div className="banner-image"></div>
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: '200 px',
              height: 'auto',
              borderRadius: '0.25 rem',
            }}
          /></img>
        </div>
      )}

      <div className="banner-content" style={{ flex: 1 }}></div>
        <h2 style={{ margin: '0 0 1 rem 0', fontSize: '1.5 rem' }}>{title}</h2>
        <p style={{ margin: '0 0 1.5 rem 0', fontSize: '1 rem', opacity: 0.9 }}>{description}</p>
        <a
          href={ctaUrl}
          style={{
            display: 'inline-block',
            padding: '0.75 rem 1.5 rem',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: textColor,
            textDecoration: 'none',
            borderRadius: '0.25 rem',
            fontWeight: 'bold',
            transition: 'background-color 0.2 s',
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
