import React from 'react';
// Removed unused: import { Header } from '../components/Header';
// Removed unused: import { Footer } from '../components/Footer';
export function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-black text-white">
			<main className="pt-20">
				{children}
			</main>
		</div>
	);
}