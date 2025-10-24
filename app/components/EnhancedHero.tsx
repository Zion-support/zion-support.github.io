<<<<<<< HEAD
import React from 'react';

interface EnhancedHeroProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedHero: React.FC<EnhancedHeroProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default EnhancedHero;
=======
'use client'

import React from 'react'

interface EnhancedHeroProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

const EnhancedHero: React.FC<EnhancedHeroProps> = ({ title, subtitle, children }) => {
  return (
    <section className="hero-section">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      {children}
    </section>
  )
}

export default EnhancedHero
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
