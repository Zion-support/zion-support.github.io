"use client";

import React from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  origin?: string;
  delay?: number;
};

export default function ScrollReveal({ children }: ScrollRevealProps) {
  return <>{children}</>;
}

