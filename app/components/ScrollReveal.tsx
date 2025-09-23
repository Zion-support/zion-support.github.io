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