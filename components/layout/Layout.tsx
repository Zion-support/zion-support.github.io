import React from 'react';

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="min-h-screen bg-black text-white">
			<main>{children}</main>
		</div>
	);
}
