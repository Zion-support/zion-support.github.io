'use client';

import React, { useEffect, useRef } from 'react';

type ScrollRevealProps = {
  children: React.ReactNode;
  origin?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
};

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    element.style.opacity = '1';
    element.style.transform = 'none';
  }, []);

  return (
    <div ref={containerRef} style={{ opacity: 0, transform: 'translateY(8px)', transition: 'all 400ms ease' }}>
      {children}
    </div>
  );
}

