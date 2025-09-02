 import Head from &apos;next/head&apos; import { AccessibilityProvider, AccessibilityControls } from &apos;../Accessibility/EnhancedAccessibilityProvider&apos; import AdvancedPerformanceMonitor from &apos;../Performance/AdvancedPerformanceMonitor&apos; import EnhancedSEOOptimizer from &apos;../SEO/EnhancedSEOOptimizer&apos; import MobileExperienceEnhancer from &apos;../Mobile/MobileExperienceEnhancer&apos; import { ParticleBackground } from &apos;../UI/InteractiveElements&apos; interface MainLayoutProps {
  children: React.ReactNode;
   title?: string;
   description?: string;
   keywords?: string;
   image?: string;
   url?: string;
   type?: &apos;website&apos; | &apos;article&apos; | &apos;product';
   noindex?: boolean;
   nofollow?: boolean
   canonical?: string}&apos;&apos; const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords, image, url, type = &apos;website&apos;, noindex = false, nofollow = false, canonical}) => { return (&apos;} <AccessibilityProvider> <EnhancedSEOOptimizer title={title} description={description} keywords={keywords} image={image} url={url} type={type} noindex={noindex} nofollow={nofollow} canonical={canonical} /> <MobileExperienceEnhancer> <div className=&apos;min-h-screen bg-gray-50 dark: bg-gray-900&apos;> {}&apos; <ParticleBackground particleCount={30} color=&apos;#3b82f6&apos; /> {}&apos; <main className=&apos;relative z-10&apos;> {children}&apos; </main> {} <AccessibilityControls /> {} {process.env.NODE_ENV === &apos;development&apos; && (&apos;} <AdvancedPerformanceMonitor /> )} </div> </MobileExperienceEnhancer> </AccessibilityProvider> ) } export;export default MainLayout';&quot;&quot;"