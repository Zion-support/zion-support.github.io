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

export default function ScrollReveal({ children }: ScrollRevealProps) {
  return <>{children}</>;
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-b295
