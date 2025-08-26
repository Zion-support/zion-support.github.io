<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import UltraFuturisticNavigation from './UltraFuturisticNavigation';
=======
import EnhancedNavigation from './EnhancedNavigation';
import UltraAdvancedNavigation from './UltraAdvancedNavigation';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8a5d
import EnhancedFooter from './EnhancedFooter';
import UltraAdvancedFuturisticBackground from '../ui/UltraAdvancedFuturisticBackground';
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UltraFuturisticNavigation2035 from './UltraFuturisticNavigation2035';
import UltraFuturisticFooter2035 from './UltraFuturisticFooter2035';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2025 from '../backgrounds/UltraFuturisticBackground2025';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7e85
import TopContactBar from './TopContactBar';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7cbf

interface SimpleLayoutProps { children: React.ReactNode }

export default function Layout({ children }: SimpleLayoutProps) {
	return <div className="min-h-screen bg-white">{children}</div>;
}
<<<<<<< HEAD
=======

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen bg-black text-white">
<<<<<<< HEAD
			<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-black/80 focus:text-white focus:border focus:border-cyan-500 focus:rounded px-3 py-2 z-[100]">Skip to content</a>
			<UltraAdvancedFuturisticBackground intensity="high" colorScheme="quantum-fusion" particleCount={300} animationSpeed={1.5} enableHolographic={true} enableQuantumEffects={true}>
				<TopContactBar />
<<<<<<< HEAD
				<UltraFuturisticNavigation />
				<main id="main" className="pt-24 lg:pt-28">
=======
			<UltraAdvancedFuturisticBackground variant="fusion">
				<QuantumHolographicNavbar />
=======
				<UltraAdvancedNavigation />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8a5d
				<main className="pt-24 lg:pt-28">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7f29
					{children}
				</main>
				<EnhancedFooter />
			</UltraAdvancedFuturisticBackground>
		</div>
	);
};

<<<<<<< HEAD
export default Layout;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7cbf
=======
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Futuristic Background */}
      <UltraFuturisticBackground2025 />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2035 />
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          
          <main id="main" className="flex-1 pt-24 lg:pt-28">
            {children}
          </main>
        </div>
        
        {/* Footer */}
        <UltraFuturisticFooter2035 />
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7e85
