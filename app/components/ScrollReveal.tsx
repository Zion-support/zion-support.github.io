"use client";

<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';

type ScrollRevealProps = {
  children: React.ReactNode;
  origin?: 'bottom' | 'top' | 'left' | 'right';
  delay?: number;
};

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    let observer: IntersectionObserver | null = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.style.opacity = '1';
            node.style.transform = 'none';
            observer?.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    node.style.opacity = '0';
    node.style.transform = 'translateY(12px)';
    node.style.transition = 'opacity 600ms ease, transform 600ms ease';
    observer.observe(node);
    return () => observer?.disconnect();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

=======
import React from 'react';

type ScrollRevealProps = {
	children: React.ReactNode;
	origin?: 'bottom' | 'top' | 'left' | 'right';
	delay?: number;
};

export default function ScrollReveal({ children }: ScrollRevealProps) {
	return <>{children}</>;
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-45f8
