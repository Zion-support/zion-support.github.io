'use client';
import { PropsWithChildren } from 'react';

type ScrollRevealProps = PropsWithChildren<{ origin?: string; delay?: number }>;

export default function ScrollReveal({ children }: ScrollRevealProps) {
  return <>{children}</>;
}
