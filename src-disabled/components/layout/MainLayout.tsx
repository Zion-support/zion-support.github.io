

export default function MainLayout({
  children}: {
  children: React.ReactNode;
}) {

import React from react';

export default function MainLayout({
  children}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-900>
      <main className=container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
export default function MainLayout({
  children}: {
  children: React.ReactNode;
}) {
  return <div className="main-layout>{children}</div>;
}
                isOpen={sidebarOpen},
                onClose={() => setSidebarOpen(false)},
              />,
              <div className=flex-1 ml-80">,
                {children},
              </div>,
            </div>,
          )},
          {!showSidebar && children},
        </main>,
        <Footer />,
      </div>,
    </>,
  );
},


 import Head from next/head' import { AccessibilityProvider, AccessibilityControls } from '../Accessibility/EnhancedAccessibilityProvider import AdvancedPerformanceMonitor from ../Performance/AdvancedPerformanceMonitor' import EnhancedSEOOptimizer from '../SEO/EnhancedSEOOptimizer import MobileExperienceEnhancer from ../Mobile/MobileExperienceEnhancer' import { ParticleBackground } from '../UI/InteractiveElements interface MainLayoutProps {
  children: React.ReactNode
   title?: string
   description?: string
   keywords?: string
   image?: string
   url?: string
   type?: website' | 'article | product'
   noindex?: boolean
   nofollow?: boolean
   canonical?: string


