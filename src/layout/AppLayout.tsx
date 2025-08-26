import React from 'react';
import EnhancedNavigation2025 from '../../components/layout/EnhancedNavigation2025';
import EnhancedSidebar2025 from '../../components/layout/EnhancedSidebar2025';
import EnhancedFooter from '../../components/layout/EnhancedFooter';

export function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col">
			<header>
				<EnhancedNavigation2025 />
			</header>
			<div className="flex-1 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
				<aside className="hidden lg:block lg:col-span-3">
					<EnhancedSidebar2025 />
				</aside>
				<main className="col-span-1 lg:col-span-9 py-6">
					{children}
				</main>
			</div>
			<footer className="mt-8">
				<EnhancedFooter />
			</footer>
		</div>
	);
}
