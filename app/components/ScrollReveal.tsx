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

export default function ScrollReveal({ children }: ScrollRevealProps) {
	return <>{children}</>;
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-e382
