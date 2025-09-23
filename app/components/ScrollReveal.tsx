"use client";

import React, { PropsWithChildren } from 'react';

type ScrollRevealProps = PropsWithChildren<{ origin?: string; delay?: number }>;

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
	return <>{children}</>;
};

export default ScrollReveal;

