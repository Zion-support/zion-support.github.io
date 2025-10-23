'use client'
import React from 'react'
'use client'
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import SEOOptimizer from './components/SEOOptimizer'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import Analytics from './components/Analytics'
import SecurityEnhancer from './components/SecurityEnhancer'
// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'))
const ContentCarousel = lazy(() => import('./components/ContentCarousel'))
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'))
const ContentStatistics = lazy(() => import('./components/ContentStatistics'))
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'))
// Preload critical components
const preloadComponents = (
if (typeof window !== 'undefined') {
// Preload critical components after initial render
setTimeout(() => {
import('./components/ContentPromotionBanner');) => {
return (
$3
)
}
import('./components/ContentCarousel');}
}, 100)
}
}
// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
<div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card"></div>
<div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
<div className="h-4 bg-gray-200 rounded mb-2"></div>
<div className="h-4 bg-gray-200 rounded w-5/6"></div>
</div>
))
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton'
const HomePage: React.FC = memo(() => {
const [isLoaded, setIsLoaded] = useState(false)
const [isVisible, setIsVisible] = useState(false)
useEffect(() => {
setIsLoaded(true)
// Trigger visibility animation
const timer = setTimeout(() => setIsVisible(true), 100)
// Preload components
preloadComponents()
return () => clearTimeout(timer);}
}, [])
// Analytics tracking for phone clicks - optimized
const handlePhoneClick = useCallback(() => {
if (typeof window !== 'undefined' && 'gtag' in window) {
(window as any).gtag('event', 'phone_click', {
event_category: 'engagement',
event_label: 'main_phone_number';}
})
}
}, [])
return (
    <>
<SEOOptimizer
title="Zion Tech Group - Advanced AI and IT Solutions"
description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services']}
canonicalUrl="https://ziontechgroup.com"
structuredData={{
'@context': 'https://schema.org',
'@type': 'TechCompany',
name: 'Zion Tech Group',
url: 'https://ziontechgroup.com',
description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
foundingDate: '2020',
numberOfEmployees: '50-100',
industry: 'Technology',
services: [
'AI Solutions',
'Quantum Computing',
'Autonomous Systems',
'Digital Transformation',
'Cloud Services',
'Automation',
'Business Intelligence'
],
contactPoint: {
'@type': 'ContactPoint',
telephone: '+1-302-464-0950',
contactType: 'Customer Service',
areaServed: 'US',
availableLanguage: 'en';}
},
address: {
'@type': 'PostalAddress',
streetAddress: '364 E Main St STE 1008',
addressLocality: 'Middletown',
addressRegion: 'DE',
postalCode: '19709',
addressCountry: 'US';}
}

export default PageOriginalPage;
  </>

export default PageOriginalPage;