import React, { useState } from 'react';
import EnhancedNavigation2025 from './EnhancedNavigation2025';
import UltraFuturisticNavigation2034 from './UltraFuturisticNavigation2034';
import UltraFuturisticFooter2034 from './UltraFuturisticFooter2034';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2035 from '../ui/UltraFuturisticBackground2035';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Skip to content link for accessibility */}
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-black/80 focus:text-white focus:border focus:border-cyan-500 focus:rounded px-3 py-2 z-[100]">
        Skip to content
      </a>
      
      {/* Futuristic Background */}
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
        {/* Layout Structure */}
        <div className="relative z-10">
          {/* Navigation */}
          <UltraFuturisticNavigation2034 onMenuClick={() => setSidebarOpen(true)} />
          
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
          <UltraFuturisticFooter2034 />
        </div>
      </UltraFuturisticBackground2035>
    </div>
  );
}
