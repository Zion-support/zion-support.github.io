"use client";
import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const onScroll = () => {
      // no-op placeholder to simulate reveal
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}