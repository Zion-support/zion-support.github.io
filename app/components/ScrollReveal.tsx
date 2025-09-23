"use client";

import React from 'react';

type ScrollRevealProps = React.PropsWithChildren<{
  origin?: "top" | "bottom" | "left" | "right";
  delay?: number;
}>;

export default function ScrollReveal({ children }: ScrollRevealProps) {
  return <>{children}</>;
}

