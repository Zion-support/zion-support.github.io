<<<<<<< HEAD
<<<<<<< HEAD
"use client";

import React from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  origin?: "bottom" | "top" | "left" | "right";
  delay?: number;
};
=======
'use client';
import { PropsWithChildren } from 'react';

type ScrollRevealProps = PropsWithChildren<{ origin?: string; delay?: number }>;
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-b295
=======
'use client';

import React from 'react';

type ScrollRevealProps = {
  origin?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  children: React.ReactNode;
};
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-a4bf

export default function ScrollReveal({ children }: ScrollRevealProps) {
  return <>{children}</>;
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-b295
=======

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-a4bf
