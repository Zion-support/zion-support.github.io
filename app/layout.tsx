import React from 'react';
import type { ReactNode } from 'react';

export const metadata = {
	title: 'Zion Tech Group - AI & Technology Solutions',
	description:
		'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body className="antialiased">{children}</body>
		</html>
	);
}