<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  showSidebar?: boolean;
}

export default function MainLayout({ 
  children, 
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.",
  keywords = "AI solutions, cloud services, technology consulting, digital transformation",
  showSidebar = false
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 pt-20">
          {showSidebar && (
            <div className="flex">
              <Sidebar 
                isOpen={sidebarOpen} 
                onClose={() => setSidebarOpen(false)} 
              />
              <div className="flex-1 ml-80">
                {children}
              </div>
            </div>
          )}
          
          {!showSidebar && children}
        </main>
        
        <Footer />
      </div>
    </>
  );
}
=======
import React from 'react'; import Head from 'next/head'; import { AccessibilityProvider,AccessibilityControls } from '../Accessibility/EnhancedAccessibilityProvider'; import AdvancedPerformanceMonitor from '../Performance/AdvancedPerformanceMonitor'; import EnhancedSEOOptimizer from '../SEO/EnhancedSEOOptimizer'; import MobileExperienceEnhancer from '../Mobile/MobileExperienceEnhancer'; import { ParticleBackground } from '../UI/InteractiveElements'; interface MainLayoutProps { children: Reac t.ReactNode; title?: string; description?: string; keywords?: string; image?: string; url?: string; type?: 'website' | 'article' | 'product'; noindex?: boolean; nofollow?: boolean; canonical?: string} const MainLayout: Reac t.FC<MainLayoutProps> = ({ children,title,description,keywords,image,url,type = 'website',noindex = false,nofollow = false,canonical,}) => { return (<AccessibilityProvider> <EnhancedSEOOptimizer title={title} description={description} keywords={keywords} image={image} url={url} type={type} noindex={noindex} nofollow={nofollow} canonical={canonical} /> <MobileExperienceEnhancer> <div className="min-h-screen bg-gray-50 dark: b g-gray-900"> {} <ParticleBackground particleCount={30} color="#3b82f6" /> {} <main className="relative z-10"> {children} </main> {} <AccessibilityControls /> {} {process.env.NODE_ENV === 'development' && ( <AdvancedPerformanceMonitor /> )} </div> </MobileExperienceEnhancer> </AccessibilityProvider> )}; export default MainLayout; </MainLayoutProps>
>>>>>>> origin/automation-improvements
