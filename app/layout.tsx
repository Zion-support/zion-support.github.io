import React from 'react';
import EnhancedNavigation from '../components/EnhancedNavigation';

export const metadata = {
	title: 'Zion Tech Group',
	description: 'AI & Technology Solutions',
	metadataBase: new URL('https://zion.tech'),
	applicationName: 'Zion Tech Group',
	generator: 'Next.js',
	authors: [{ name: 'Zion Tech Group' }],
	keywords: [
		'AI',
		'Artificial Intelligence',
		'Edge Computing',
		'Autonomous Systems',
		'Consulting',
		'Case Studies',
		'Implementation Guide',
	],
	openGraph: {
		title: 'Zion Tech Group — AI & Technology Solutions',
		description: 'Strategy, implementation, and measurable ROI from modern AI systems.',
		url: 'https://zion.tech',
		siteName: 'Zion Tech Group',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Zion Tech Group',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@ZionTech',
		title: 'Zion Tech Group — AI & Technology Solutions',
		description: 'Strategy, implementation, and measurable ROI from modern AI systems.',
		images: ['/og-image.png'],
	},
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
	},
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#0b1020' },
	],
	alternates: {
		canonical: 'https://zion.tech',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
				<link rel="dns-prefetch" href="https://fonts.gstatic.com" />
				<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
			</head>
			<body>
				<EnhancedNavigation />
				{children}
			</body>
		</html>
	);
}

