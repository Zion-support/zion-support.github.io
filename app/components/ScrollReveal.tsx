"use client";

import React from 'react';

type ScrollRevealProps = {
  origin?: "bottom" | "top" | "left" | "right";
  delay?: number;
  children: React.ReactNode;
};

export default function ScrollReveal({ children }: ScrollRevealProps) {
  return <>{children}</>;
}