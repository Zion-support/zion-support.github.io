import React, { useState } from 'react';
import EnhancedNavigation2025 from './EnhancedNavigation2025';
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Top Contact Bar */}
      <TopContactBar />
      {/* Navigation */}
      <EnhancedNavigation2025 />
      {/* Sidebar */}
      <EnhancedSidebar2025 />
      {/* Main Content */}
      <main className="relative z-10 pt-32 lg:pt-36 lg:ml-80">
        <div className="min-h-screen">{children}</div>
      </main>
      {/* Footer */}
      <UltraFuturisticFooter2034 />
      {/* Floating Elements */}
      <>
        <div className="fixed top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse z-50"></div>
        <div className="fixed top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000 z-50"></div>
        <div className="fixed bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-2000 z-50"></div>
        <div className="fixed bottom-20 right-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-3000 z-50"></div>
      </>
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-6 left-6 z-50 lg:hidden w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={() => setSidebarOpen(false)}>
          {/* Off-canvas content would go here if needed */}
        </div>
      )}
    </div>
  );
}
=======
import EnhancedNavigation2025 from './EnhancedNavigation2025';
import UltraFuturisticNavigation2034 from './UltraFuturisticNavigation2034';
import UltraFuturisticFooter2034 from './UltraFuturisticFooter2034';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2035 from '../ui/UltraFuturisticBackground2035';
// import TopContactBar from './TopContactBar';
=======
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Skip to content link for accessibility */}
      <a href="#main" className="skip-link">Skip to main content</a>
      {/* Futuristic Background */}
      <UltraFuturisticBackground2035>
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
            <main id="main" role="main" className="flex-1 pt-24 lg:pt-28">
              {children}
            </main>
          </div>
          {/* Footer */}
          <UltraFuturisticFooter2035 />
        </div>
      </UltraFuturisticBackground2035>
    </div>
  );
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
					<EnhancedSidebar2025 isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
					<main id="main" className="flex-1 pt-24 lg:pt-28">
						{children}
					</main>
				</div>
				<UltraFuturisticFooter2034 />
			</UltraFuturisticBackground2035>
		</div>
	);
}
