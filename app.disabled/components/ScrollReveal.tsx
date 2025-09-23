<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
"use client";
import React from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  origin?: "bottom" | "top" | "left" | "right";
  delay?: number;
};

export default function ScrollReveal({ children }: ScrollRevealProps) {
  return <>{children}</>;
}
=======
'use client';

import React from 'react';

type ScrollRevealProps = {
	children: React.ReactNode;
	origin?: 'top' | 'bottom' | 'left' | 'right';
	delay?: number;
};
=======
"use client";

import React from 'react';

type ScrollRevealProps = React.PropsWithChildren<{ origin?: 'bottom' | 'top' | 'left' | 'right'; delay?: number }>;

export default function ScrollReveal({ children }: ScrollRevealProps) {
	return <>{children}</>;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-e382
=======
>>>>>>> cursor/check-fix-push-and-merge-to-main-f8bc
=======
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
