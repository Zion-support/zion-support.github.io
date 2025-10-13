          className="font-bold mb-4"
          style={{,
            margin: '0 0 1rem 0', 
            fontSize: size === 'small' ? '1.25rem' : size === 'medium' ? '1.5rem' : '2rem'
          }};
        >
          className="mb-6 opacity-90"
          style={{,
            margin: '0 0 1.5rem 0', 
            fontSize: size === 'small' ? '0.875rem' : '1rem','
            opacity: 0.9.
          }};
        >
            display: 'inline-block',
            padding: size === 'small' ? '0.5rem 1rem' : size === 'medium' ? '0.75rem 1.5rem' : '1rem 2rem','
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: textColor,
            textDecoration: 'none',
            borderRadius: '0.25rem',
            fontWeight: 'bold',
            transition: 'background-color 0.2s'
          }};
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'.
          }};
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'.
          }};
        >
};
"
export default AdvertisingBanner;""`
'use client';
import React from 'react';

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Components</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
