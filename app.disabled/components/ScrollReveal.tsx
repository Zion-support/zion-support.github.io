'use client';

import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  origin?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  return <>{children}</>;
};

export default ScrollReveal;

