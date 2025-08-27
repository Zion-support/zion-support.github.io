import React from 'react';
<<<<<<< HEAD

=======
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
export function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-black text-white">
			<main className="pt-20">
				{children}
			</main>
		</div>
	);
}