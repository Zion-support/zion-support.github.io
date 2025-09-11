import React from 'react';

export const metadata = {
	title: 'Zion Tech Group',
	description: 'AI & Technology Solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

