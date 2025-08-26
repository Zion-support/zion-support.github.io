<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import UltraFuturisticNavigation from './UltraFuturisticNavigation';
=======
import EnhancedNavigation from './EnhancedNavigation';
<<<<<<< HEAD
import UltraAdvancedNavigation from './UltraAdvancedNavigation';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8a5d
import EnhancedFooter from './EnhancedFooter';
=======
import NeoFuturisticFooter from './NeoFuturisticFooter';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9cca
=======
import React, { useState } from 'react';
import UltraFuturisticNavigation2035 from './UltraFuturisticNavigation2035';
import UltraFuturisticFooter2035 from './UltraFuturisticFooter2035';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-aa58
import UltraAdvancedFuturisticBackground from '../ui/UltraAdvancedFuturisticBackground';
=======
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
import { motion } from 'framer-motion';
import UltraFuturisticNavigation2035 from './UltraFuturisticNavigation2035';
import UltraFuturisticFooter2035 from './UltraFuturisticFooter2035';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2025 from '../backgrounds/UltraFuturisticBackground2025';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7e85
=======
import React, { useState } from 'react';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e015
import TopContactBar from './TopContactBar';
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7cbf
=======
import NeoFuturisticFooter from './NeoFuturisticFooter';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-cb67

interface SimpleLayoutProps { children: React.ReactNode }

export default function Layout({ children }: SimpleLayoutProps) {
	return <div className="min-h-screen bg-white">{children}</div>;
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen bg-black text-white">
<<<<<<< HEAD
<<<<<<< HEAD
			<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-black/80 focus:text-white focus:border focus:border-cyan-500 focus:rounded px-3 py-2 z-[100]">Skip to content</a>
			<UltraAdvancedFuturisticBackground intensity="high" colorScheme="quantum-fusion" particleCount={300} animationSpeed={1.5} enableHolographic={true} enableQuantumEffects={true}>
				<TopContactBar />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
				<UltraFuturisticNavigation />
=======
				<EnhancedNavigation />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9cca
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
<<<<<<< HEAD
				<EnhancedFooter />
=======
				<UltraFuturisticNavigation2035 />
				<div className="flex">
					<EnhancedSidebar2025 isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
					<main id="main" className="flex-1 pt-24 lg:pt-28">
						{children}
					</main>
				</div>
				<UltraFuturisticFooter2035 />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-aa58
=======
				<NeoFuturisticFooter />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-cb67
			</UltraAdvancedFuturisticBackground>
=======
			<TopContactBar />
			<header className="bg-gray-900/90 border-b border-cyan-500/20 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
								Zion Tech Group
							</h1>
						</div>
						<nav className="hidden md:flex items-center space-x-8">
							<a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
							<a href="/cutting-edge-services-2025" className="text-gray-300 hover:text-cyan-400 transition-colors">Cutting-Edge Services</a>
							<a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">All Services</a>
							<a href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</a>
							<a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
						</nav>
						<div className="md:hidden">
							<button className="text-gray-300 hover:text-cyan-400">
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</header>
			<main className="pt-24">
				{children}
			</main>
			<footer className="bg-gray-900/90 border-t border-cyan-500/20 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div>
							<h3 className="text-lg font-semibold text-cyan-400 mb-4">Zion Tech Group</h3>
							<p className="text-gray-400 text-sm">
								Leading provider of innovative IT, AI, and micro SAAS solutions for modern enterprises.
							</p>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Services</h4>
							<ul className="space-y-2 text-sm text-gray-400">
								<li><a href="/cutting-edge-services-2025" className="hover:text-cyan-400 transition-colors">Cutting-Edge Services 2025</a></li>
								<li><a href="/ai-services" className="hover:text-cyan-400 transition-colors">AI & Consciousness</a></li>
								<li><a href="/quantum-services" className="hover:text-cyan-400 transition-colors">Quantum & Emerging Tech</a></li>
								<li><a href="/enterprise-it" className="hover:text-cyan-400 transition-colors">Enterprise IT</a></li>
								<li><a href="/micro-saas" className="hover:text-cyan-400 transition-colors">Micro SAAS</a></li>
							</ul>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Company</h4>
							<ul className="space-y-2 text-sm text-gray-400">
								<li><a href="/about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
								<li><a href="/careers" className="hover:text-cyan-400 transition-colors">Careers</a></li>
								<li><a href="/blog" className="hover:text-cyan-400 transition-colors">Blog</a></li>
								<li><a href="/case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
							</ul>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Contact</h4>
							<div className="space-y-2 text-sm text-gray-400">
								<p>+1 302 464 0950</p>
								<p>kleber@ziontechgroup.com</p>
								<p>364 E Main St STE 1008<br />Middletown DE 19709</p>
							</div>
						</div>
					</div>
					<div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
						<p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
					</div>
				</div>
			</footer>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e015
		</div>
	);
};

<<<<<<< HEAD
export default Layout;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7cbf
=======
=======
export default function Layout({ children }: LayoutProps) {
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
<<<<<<< HEAD
      {/* Futuristic Background */}
      <UltraFuturisticBackground2025 />
=======
      {/* Skip to content link for accessibility */}
      <a href="#main" className="skip-link">Skip to main content</a>
              {/* Futuristic Background */}
        <UltraFuturisticBackground2036 variant="quantum" intensity="high" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-917e
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2035 />
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 />
          
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
