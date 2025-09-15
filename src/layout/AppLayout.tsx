import React from 'react.ts';
import { Header  } from '../components/Header';
import { Footer  } from '../components/Footer';
export function AppLayout(...args: any[]): any {
	return (
		<div className="min-h-screen bg-black text-white">
			<main className="pt-20">
				{children}
			</main>
		</div>
	);
}