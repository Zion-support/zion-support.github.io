:src_backup/components/layout/MainLayout.tsx

:src_backup/components/layout/MainLayout.tsx
import React from 'react';

import React from 'react';
import React from 'react;


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

import React from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="main-layout">{children}</div>;
}
                isOpen={sidebarOpen},;
                onClose={() => setSidebarOpen(false)},;
              />,;
              <div className="flex-1 ml-80">,;
                {children},;
              </div>,;
          )},;
          {!showSidebar && children},;
        </main>,;
        <Footer />,;
      </div>,;
    </>,;
  );
},;

import React from 'react';

 import Head from 'next/head' import { AccessibilityProvider, AccessibilityControls } from '../Accessibility/EnhancedAccessibilityProvider' import AdvancedPerformanceMonitor from '../Performance/AdvancedPerformanceMonitor' import EnhancedSEOOptimizer from '../SEO/EnhancedSEOOptimizer' import MobileExperienceEnhancer from '../Mobile/MobileExperienceEnhancer' import { ParticleBackground } from '../UI/InteractiveElements' interface MainLayoutProps {;
 import Head from 'next/head' import { AccessibilityProvider, AccessibilityControls } from '../Accessibility/EnhancedAccessibilityProvider' import AdvancedPerformanceMonitor from '../Performance/AdvancedPerformanceMonitor' import EnhancedSEOOptimizer from '../SEO/EnhancedSEOOptimizer' import MobileExperienceEnhancer from '../Mobile/MobileExperienceEnhancer' import { ParticleBackground } from '../UI/InteractiveElements' interface MainLayoutProps {
  children: React.ReactNode
   title?: string
   description?: string
   keywords?: string
   image?: string
   url?: string
   type?: 'website' | 'article' | 'product'
   noindex?: boolean
   nofollow?: boolean
   canonical?: string


:src_backup/components/layout/MainLayout.tsx
} const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords, image, url, type = 'website', noindex = false, nofollow = false, canonical}) => { return ( <AccessibilityProvider> <EnhancedSEOOptimizer title={title} description={description} keywords={keywords} image={image} url={url} type={type} noindex={noindex} nofollow={nofollow} canonical={canonical} /> <MobileExperienceEnhancer> <div className='min-h-screen bg-gray-50 dark: bg-gray-900'> {} <ParticleBackground particleCount={30} color='#3b82f6' /> {} <main className='relative z-10'> {children} </main> {} <AccessibilityControls /> {} {process.env.NODE_ENV === 'development' && ( <AdvancedPerformanceMonitor /> )} </div> </MobileExperienceEnhancer> </AccessibilityProvider> ) } export default MainLayout';"'"
} const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords, image, url, type = 'website', noindex = false, nofollow = false, canonical}) => { return ( <AccessibilityProvider> <EnhancedSEOOptimizer title={title} description={description} keywords={keywords} image={image} url={url} type={type} noindex={noindex} nofollow={nofollow} canonical={canonical} /> <MobileExperienceEnhancer> <div className='min-h-screen bg-gray-50 dark: bg-gray-900'> {} <ParticleBackground particleCount={30} color='#3b82f6' /> {} <main className='relative z-10'> {children} </main> {} <AccessibilityControls /> {} {process.env.NODE_ENV === 'development' && ( <AdvancedPerformanceMonitor /> )} </div> </MobileExperienceEnhancer> </AccessibilityProvider> ) } export default MainLayout';"'"
} const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords, image, url, type = 'website', noindex = false, nofollow = false, canonical}) => { return ( <AccessibilityProvider> <EnhancedSEOOptimizer title={title} description={description} keywords={keywords} image={image} url={url} type={type} noindex={noindex} nofollow={nofollow} canonical={canonical} /> <MobileExperienceEnhancer> <div className='min-h-screen bg-gray-50 dark: bg-gray-900'> {} <ParticleBackground particleCount={30} color='#3b82f6' /> {} <main className='relative z-10'> {children} </main> {} <AccessibilityControls /> {} {process.env.NODE_ENV === 'development' && ( <AdvancedPerformanceMonitor /> )} </div> </MobileExperienceEnhancer> </AccessibilityProvider> ) } export default MainLayout';"'"
} const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords, image, url, type = 'website, noindex = false, nofollow = false, canonical}) => { return ( <AccessibilityProvider> <EnhancedSEOOptimizer title={title} description={description} keywords={keywords} image={image} url={url} type={type} noindex={noindex} nofollow={nofollow} canonical={canonical} /> <MobileExperienceEnhancer> <div className=min-h-screen bg-gray-50 dark: bg-gray-900'> {} <ParticleBackground particleCount={30} color='#3b82f6 /> {} <main className=relative z-10'> {children} </main> {} <AccessibilityControls /> {} {process.env.NODE_ENV === 'development && ( <AdvancedPerformanceMonitor /> )} </div> </MobileExperienceEnhancer> </AccessibilityProvider> ) } export default MainLayout;"'
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
export default function MainLayout() {return <div className="main-layout">{children}</div>;
}
                isOpen={sidebarOpen},onClose={() => setSidebarOpen(false)},/>,<div className="flex-1 ml-80">,{children},</div>,</div>,)},{!showSidebar && children},</main>,<Footer />,</div>,</>,)},import React from 'react';
 import Head from 'next/head' import { AccessibilityProvider, AccessibilityControls } from '../Accessibility/EnhancedAccessibilityProvider' import AdvancedPerformanceMonitor from '../Performance/AdvancedPerformanceMonitor' import EnhancedSEOOptimizer from '../SEO/EnhancedSEOOptimizer' import MobileExperienceEnhancer from '../Mobile/MobileExperienceEnhancer' import { ParticleBackground } from '../UI/InteractiveElements' interface MainLayoutProps  {children: React.ReactNode;
   title?: string;
   description?: string;
   keywords?: string;
   image?: string;
   url?: string;
   type?: 'website' | 'article' | 'product';
   noindex?: boolean;
   nofollow?: boolean;
   canonical?: string;
} const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords, image, url, type = 'website', noindex = false, nofollow = false, canonical}) => { return ( <AccessibilityProvider> <EnhancedSEOOptimizer title={title} description={description} keywords={keywords} image={image} url={url} type={type} noindex={noindex} nofollow={nofollow} canonical={canonical} /> <MobileExperienceEnhancer> <div className='min-h-screen bg-gray-50 dark: bg-gray-900'> {} <ParticleBackground particleCount={30} color='#3b82f6' /> {} <main className='relative z-10'> {children} </main> {} <AccessibilityControls /> {} {process.env.NODE_ENV === 'development' && ( <AdvancedPerformanceMonitor /> )} </div> </MobileExperienceEnhancer> </AccessibilityProvider> ) } export default MainLayout';"'";
} const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords, image, url, type = 'website', noindex = false, nofollow = false, canonical}) => { return ( <AccessibilityProvider> <EnhancedSEOOptimizer title={title} description={description} keywords={keywords} image={image} url={url} type={type} noindex={noindex} nofollow={nofollow} canonical={canonical} /> <MobileExperienceEnhancer> <div className='min-h-screen bg-gray-50 dark: bg-gray-900'> {} <ParticleBackground particleCount={30} color='#3b82f6' /> {} <main className='relative z-10'> {children} </main> {} <AccessibilityControls /> {} {process.env.NODE_ENV === 'development' && ( <AdvancedPerformanceMonitor /> )} </div> </MobileExperienceEnhancer> </AccessibilityProvider> ) } export default MainLayout';"'"