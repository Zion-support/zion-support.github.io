import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Footer as SimpleFooter } from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import { Header } from '@/components/header/Header';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="relative min-h-screen bg-zion-slate-dark">
			<Header />
			<main className="relative z-10 pt-24 lg:pt-28 lg:ml-80">
				<div className="min-h-screen">{children}</div>
			</main>
			<SimpleFooter />

			<button
				onClick={() => setSidebarOpen(!sidebarOpen)}
				className="fixed bottom-6 left-6 z-50 lg:hidden w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
			>
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>

			{sidebarOpen && (
				<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={() => setSidebarOpen(false)}>
					<motion.div
						initial={{ x: '-100%' }}
						animate={{ x: 0 }}
						exit={{ x: '-100%' }}
						transition={{ type: 'spring', damping: 25, stiffness: 200 }}
						className="absolute left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/20 overflow-y-auto"
						onClick={(e) => e.stopPropagation()}
					>
						<Sidebar />
					</motion.div>
				</div>
			)}
		</div>
	);
};

export default Layout;
