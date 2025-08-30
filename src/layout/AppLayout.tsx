<<<<<<< HEAD
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function AppLayout({ children }: { children: React.ReactNode }) {
=======
<<<<<<< HEAD
import React from 'react.ts';
import { Header  } from "../components/Header";
import { Footer  } from "../components/Footer";
export function AppLayout(...args[]):  {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
	return (
		<div className = "min-h-screen bg-black text-white">
			<main className="pt-20">
				{children}
			</main>
		</div>
	)};
=======;
import React from 'react';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className = "min-h-screen bg-black text-white">;
			<main className="pt-20">;
				{children};
			</main>;
		</div>;
	);
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
