<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { Header } from "../components/Header";
import { EnhancedFooter } from "../components/layout/EnhancedFooter";
import { EnhancedSidebar } from "../components/layout/EnhancedSidebar";

export function AppLayout({ children }: { children: React.ReactNode }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="min-h-screen bg-black text-white">
			<Header onMenuClick={() => setSidebarOpen(true)} />
			<EnhancedSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
			<main className="pt-20">
				{children}
			</main>
			<EnhancedFooter />
		</div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
	);
}
