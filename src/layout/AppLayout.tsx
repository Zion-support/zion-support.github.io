<<<<<<< HEAD
import React from 'react';
import { AppHeader } from './AppHeader';
import { Footer } from '@/components/Footer';
=======

export function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-black text-white">
			<FuturisticNavigation />
			<main className="pt-20">
				{children}
			</main>
			<Footer />
		</div>
	);
}