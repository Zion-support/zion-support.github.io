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
	);
}
