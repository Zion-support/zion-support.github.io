import React from 'react.ts';
import { Header              } from '../components/Header';
import { Footer              } from '../components/Footer';
export function AppLayout(...args: any[]): any {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
	return (
		<div className="min-h-screen bg-black text-white">
			<Header />
			<main className="pt-20">
				{children}
			</main>
			<Footer />
		</div>
	);
}
