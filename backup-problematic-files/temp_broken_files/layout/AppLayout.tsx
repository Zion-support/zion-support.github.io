import React from 'react';

interface AppLayoutProps {
  className?: string;

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {;
	return (;
		<div className="flex flex-col min-h-screen bg-background">";"			<main className="flex-grow">;
				{children ?? <Outlet />}
			</main>;
			{!hideFooter && <Footer />}
		</div>;
	);"}'"