import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';

export function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-black text-white">
			<Sidebar />
			<div className="lg:ml-80">
				<Header />
				<main className="pt-20">
					{children}
				</main>
				<Footer />
			</div>
		</div>
	);
}