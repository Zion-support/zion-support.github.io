"use client";
import React from 'react';

type ScrollRevealProps = {
  children: React.ReactNode;
  origin?: 'bottom' | 'top' | 'left' | 'right';
  delay?: number;
};

export default function ScrollReveal({ children }: ScrollRevealProps) {
  return <>{children}</>;
}

