'use client';

import { PropsWithChildren } from 'react';

type ScrollRevealProps = PropsWithChildren<{ origin?: 'bottom' | 'top' | 'left' | 'right'; delay?: number }>;

export default function ScrollReveal({ children }: ScrollRevealProps) {
  return <>{children}</>;
}
