"use client";
import React from 'react';

interface ScrollRevealProps {
	children: React.ReactNode;
	origin?: 'bottom' | 'top' | 'left' | 'right';
	delay?: number;
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
	return <>{children}</>;
}
