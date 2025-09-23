<<<<<<< HEAD:app-disabled/components/ScrollReveal.tsx
<<<<<<< HEAD
import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  return (
    <div className={className} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
=======
"use client";

import React from 'react';

const ScrollReveal: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default ScrollReveal;

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-5719
=======
'use client';

import React, { useEffect, useRef } from 'react';

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.6s ease-out';
    const onIntersect: IntersectionObserverCallback = ([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850:app/components/ScrollReveal.tsx
