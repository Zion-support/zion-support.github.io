import React, { useState, useEffect } from 'react';
import UltraFuturisticNavigation2040 from './UltraFuturisticNavigation2040';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2036 from '../backgrounds/UltraFuturisticBackground2036';
import TopContactBar from './TopContactBar';
import PerformanceMonitor from '../PerformanceMonitor';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export default function Layout({
  children,
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions",
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses.",
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation",
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  noIndex = false
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Futuristic Background */}
      <UltraFuturisticBackground2036 />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <div className="sticky top-0 z-50">
          <div className="absolute left-4 top-5 lg:hidden">
            <button
              aria-label="Open sidebar"
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg bg-gray-900/80 border border-gray-700/60 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-300" />
            </button>
          </div>
          <UltraFuturisticNavigation2040 />
        </div>
        
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
      </div>

      {/* Performance and Accessibility Enhancements */}
      <PerformanceMonitor />
      <AccessibilityEnhancer />
      <CookieConsentBanner />
    </div>
  );
}