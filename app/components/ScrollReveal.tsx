'use client';

import React from 'react';

type ScrollRevealProps = {
  origin?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  children: React.ReactNode;
};

export default function ScrollReveal({ children }: ScrollRevealProps) {
  return <>{children}</>;
}

