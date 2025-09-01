import React from 'react';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export function AppLayout(...args: unknown[]): unknown {
	return (
		<div className = "min-h-screen bg-black text-white">;
			<main className="pt-20">;
				{children};
			</main>;
		</div>;
	);
}
