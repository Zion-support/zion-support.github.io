"use client";

import React, { useEffect, useRef } from 'react';

type ScrollRevealProps = {
  children: React.ReactNode;
  origin?: 'bottom' | 'top' | 'left' | 'right';
  delay?: number;
};

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    let observer: IntersectionObserver | null = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            element.classList.remove('opacity-0', 'translate-y-4');
            element.classList.add('opacity-100', 'translate-y-0');
            observer && observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(element);
    return () => observer && observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="opacity-0 translate-y-4 transition-all duration-700 ease-out">
      {children}
    </div>
  );
}

