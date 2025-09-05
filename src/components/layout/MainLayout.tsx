import React, { useState } from 'react';
import Head from 'next/head';
import { AccessibilityProvider, AccessibilityControls } from '../Accessibility/EnhancedAccessibilityProvider';
import AdvancedPerformanceMonitor from '../Performance/AdvancedPerformanceMonitor';
import EnhancedSEOOptimizer from '../SEO/EnhancedSEOOptimizer';
import MobileExperienceEnhancer from '../Mobile/MobileExperienceEnhancer';
import { ParticleBackground } from '../UI/InteractiveElements';
import NextNavigation from '../navigation/NextNavigation';
import { Footer } from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website', 
  noindex = false, 
  nofollow = false, 
  canonical 
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AccessibilityProvider>
      <EnhancedSEOOptimizer 
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        url={url}
        type={type}
        noindex={noindex}
        nofollow={nofollow}
        canonical={canonical}
      />
      <MobileExperienceEnhancer>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
          {/* Sidebar */}
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            <NextNavigation onMenuClick={() => setSidebarOpen(true)} />
            <ParticleBackground particleCount={30} color="#3b82f6" />
            <main className="relative z-10 flex-1">
              {children}
            </main>
            <Footer />
          </div>
          
          <AccessibilityControls />
          {process.env.NODE_ENV === 'development' && (
            <AdvancedPerformanceMonitor />
          )}
        </div>
      </MobileExperienceEnhancer>
    </AccessibilityProvider>
  );
};

export default MainLayout;
