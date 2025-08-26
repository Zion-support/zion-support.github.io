import React, { useState } from 'react';
import UltraFuturisticNavigation2034 from './UltraFuturisticNavigation2034';
import UltraFuturisticFooter2029 from './UltraFuturisticFooter2029';
import UltraFuturisticBackground2035 from '../ui/UltraFuturisticBackground2035';
// import TopContactBar from './TopContactBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="min-h-screen bg-black text-white">
			<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-black/80 focus:text-white focus:border focus:border-cyan-500 focus:rounded px-3 py-2 z-[100]">Skip to content</a>
			<UltraFuturisticBackground2035 
				intensity="high" 
				colorScheme="quantum-fusion"
				particleCount={400}
				animationSpeed={1.8}
				enableHolographic={true}
				enableQuantumEffects={true}
				enableNeonEffects={true}
				enableSpaceTime={true}
			>
				{/* TopContactBar temporarily disabled due to missing module */}
				<UltraFuturisticNavigation2034 onMenuClick={() => setSidebarOpen(true)} />
				<div className="flex">
					{/* EnhancedSidebar2025 temporarily disabled due to build issues */}
					<main id="main" className="flex-1 pt-24 lg:pt-28">
						{children}
					</main>
				</div>
				<UltraFuturisticFooter2029 />
			</UltraFuturisticBackground2035>
		</div>
	);
<<<<<<< HEAD
}
=======
}

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-43b7
