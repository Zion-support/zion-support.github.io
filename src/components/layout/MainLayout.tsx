 import Head from 'next/head' import { AccessibilityProvider, AccessibilityControls } from '../Accessibility/EnhancedAccessibilityProvider' ;import AdvancedPerformanceMonitor from '../Performance/AdvancedPerformanceMonitor' import EnhancedSEOOptimizer from '../SEO/EnhancedSEOOptimizer' import MobileExperienceEnhancer from '../Mobile/MobileExperienceEnhancer' import { ParticleBackground, } from '../UI/InteractiveElements' ;interface MainLayoutProps {;"
 import Head from 'next/head' import { AccessibilityProvider, AccessibilityControls } from '../Accessibility/EnhancedAccessibilityProvider' ;import AdvancedPerformanceMonitor from '../Performance/AdvancedPerformanceMonitor' import EnhancedSEOOptimizer from '../SEO/EnhancedSEOOptimizer' import MobileExperienceEnhancer from '../Mobile/MobileExperienceEnhancer' import { ParticleBackground, } from '../UI/InteractiveElements' ;interface MainLayoutProps {
  children: React.ReactNode
   title?: string
   description?: string
   keywords?: string
   image?: string
   url?: string"
   type?: 'website' | 'article' | 'product'
   noindex?: boolean
   nofollow?: boolean
   canonical?: string;",
} const MainLayout: React.FC<MainLayoutProps></MainLayoutProps> = ({ children, title, description, keywords, image, url, type = 'website', noindex = false, nofollow = false, canonical}) => { return ( <AccessibilityProvider></AccessibilityProvide> <EnhancedSEOOptimizer title={title} description={description} keywords={keywords} image={image} url={url} type={type} noindex={noindex} nofollow={nofollow} canonical={canonical} /" ></EnhancedSEOOptimizer> <MobileExperienceEnhancer></MobileExperienceEnhance> <div className='min-h-screen bg-gray-50 dark: bg-gray-900'></di> {} <ParticleBackground particleCount={30} color='#3b82f6' /" ></ParticleBackground> {} <main className='relative z-10'></mai> {children} </main> {} <AccessibilityControls /" ></AccessibilityControls> {} {process.env.NODE_ENV === 'development' && ( <AdvancedPerformanceMonitor /" ></AdvancedPerformanceMonitor> )} </div> </MobileExperienceEnhancer> </AccessibilityProvider> ) } export default MainLayout";"
}