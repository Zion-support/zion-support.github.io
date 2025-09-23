"use client";

import React from 'react';

type Props = React.PropsWithChildren<{ origin?: string; delay?: number }>;

export default function ScrollReveal({ children }: Props) {
	return <>{children}</>;
}

