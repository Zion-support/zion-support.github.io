import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedNavigation2025 from './EnhancedNavigation2025';
import UltraFuturisticFooter2034 from './UltraFuturisticFooter2034';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraAdvancedFuturisticBackground from '../backgrounds/UltraAdvancedFuturisticBackground';
import TopContactBar from './TopContactBar';
import NeoFuturisticFooter from './NeoFuturisticFooter';

interface LayoutProps {
  children: React.ReactNode;
  backgroundIntensity?: 'low' | 'medium' | 'high' | 'extreme';
  backgroundTheme?: 'quantum' | 'neon' | 'holographic' | 'cyberpunk' | 'quantum-fusion';
  backgroundParticleCount?: number;
  backgroundAnimationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
}

export default function Layout({ 
  children, 
  backgroundIntensity = 'medium',
  backgroundTheme = 'quantum',
  backgroundParticleCount = 200,
  backgroundAnimationSpeed = 1.0,
  enableHolographic = true,
  enableQuantumEffects = true
}: LayoutProps) {
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
}
