'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FuturisticHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const FuturisticHero: React.FC<FuturisticHeroProps> = ({
  title = 'Futuristic Solutions',
  subtitle = 'Next-Generation Technology',
  description = 'Experience the future of technology with our cutting-edge solutions.',
}) => {
  return (
    <>
      <Helmet>
        <title>Futuristic Hero - Zion Tech Group</title>
        <meta name="description" content="Futuristic technology solutions for the modern world." />
      </Helmet>
      
      <div className="futuristic-hero">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <h2 className="hero-subtitle">{subtitle}</h2>
          <p className="hero-description">{description}</p>
        </div>
      </div>
    </>
  );
};

export default FuturisticHero;