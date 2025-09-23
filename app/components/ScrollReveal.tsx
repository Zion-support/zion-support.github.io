"use client";
import React from 'react';

type ScrollRevealProps = {
  children: React.ReactNode;
  origin?: 'bottom' | 'top' | 'left' | 'right';
  delay?: number;
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  return <>{children}</>;
};

export default ScrollReveal;

