"use client";

<<<<<<< HEAD
import React from 'react';

type ScrollRevealProps = React.PropsWithChildren<{ origin?: 'bottom' | 'top' | 'left' | 'right'; delay?: number }>;

export default function ScrollReveal({ children }: ScrollRevealProps) {
  return <>{children}</>;
}
=======
import type { PropsWithChildren } from 'react';

export default function ScrollReveal({ children }: PropsWithChildren) {
	return children as any;
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-833f
