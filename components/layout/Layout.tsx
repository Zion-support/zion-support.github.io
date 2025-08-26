import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EnhancedNavigation2025 from './EnhancedNavigation2025';
import UltraFuturisticFooter2035 from './UltraFuturisticFooter2035';
import UltraFuturisticBackground2035 from '../backgrounds/UltraFuturisticBackground2035';
import TopContactBar from './TopContactBar';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticNavigation2035 from './UltraFuturisticNavigation2035';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <a href="#main" className="skip-link">Skip to main content</a>
      <UltraFuturisticBackground2035>
        <div className="relative z-10">
          <TopContactBar />
          <UltraFuturisticNavigation2035 />
          <div className="flex">
            <EnhancedSidebar2025 
              isOpen={sidebarOpen} 
              onClose={() => setSidebarOpen(false)} 
            />
            <main id="main" role="main" className="flex-1 pt-24 lg:pt-28">
              {children}
            </main>
          </div>
          <UltraFuturisticFooter2035 />
        </div>
      </UltraFuturisticBackground2035>

      {/* Mobile Sidebar Toggle */}
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
            <div className="p-4">
              <div className="pt-4 border-t border-gray-800">
                <a
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300"
                  onClick={() => setSidebarOpen(false)}
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
