'use client';
import React from 'react';
'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';
  
  useEffect (() => {
    setIsLoaded(true);
    return () => clearTimeout(timer);)
}, []);
  // Analytics tracking for phone clicks - optimized;
const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number';)
});;);
=======
    return () => clearTimeout(timer)]
    }, []);
  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number']
    });]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
  }, []);
  return (
    <React.Fragment>
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
            availableLanguage: 'en']
    },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
addressCountry: 'US']
    }
        }}
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enablePreloading={true}
        enableCodeSplitting={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
        enableSkipLinks={true}
        enableARIALabels={true}
      />
      <Analytics
        enableGoogleAnalytics={true}
        enablePerformanceMonitoring={true}
        enableErrorTracking={true}
        enableUserBehaviorTracking={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
        enableContentTypeSniffingProtection={true}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain"></div>
        {/* Navigation */}</div>
        <Navigation />
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        ></a>
          Skip to main content
        </a>
      {/* Content Promotion Banner */}
      <Suspense fallback={<div></Suspense>}>
        <ContentPromotionBanner />
      </Suspense>
      <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main"></main>
        {/* Hero Section */}
>>>>>>> main
        <section
          className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
            isLoaded && isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8']
    }`}
          aria-labelledby="hero-heading"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
            <h1 
              id="hero-heading" 
              className="text-5xl md: text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text holographic-text glitch"
              data-text="Zion Tech Group"
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
              Transform your business with our cutting-edge technology and achieve unprecedented growth.
            <
            
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
              <a
                href="te,
    l:+13024640950"
                onClick = { handlePhoneClick };
                className="cyber-button w-full sm: w-auto text-center")
                aria-label="Call us at (302) 464-0950"
            ></a>
              📞 Call: (302) 464-0950
            <
            <a 
              href="
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            ></a>
              Get Free Consultation
                    Learn More →
                  <
                <
              <

                    Learn More →
                  <
                <
              <

                    Learn More →
                  <
                <
              <

                    Learn More →
                  <
                <
              <

                    Learn More →
                  <
                <
              <

                    Learn More →
                  <
                <
              <

              Get in touch with our experts to discuss your AI and IT needs. We're here to help you achieve unprecedented growth.
            <
            
                        +1 (302) 464-0950
                      <
                    <
                  <
                  
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg"></a>
>>>>>>> main
                        kleber@ziontechgroup.com
                      <
                    <
                  <
                  
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Address</p>
                      <p className="text-white font-semibold"></p>
                        364 E Main St STE 1008<br />
>>>>>>> main
                        Middletown, DE 19709
                      <
                    <
                  <
                  
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Business Hours</p>
                      <p className="text-white font-semibold"></p>
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        24/7 Emergency Support Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact Form */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 neon-text"></h>Get Free Consultation</h3>
                <form className="space-y-6"></form>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2"></label>
>>>>>>> main
                      Full Name
                    <
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your full name"

                  <
                  
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2"></label>
>>>>>>> main
                      Email Address
                    <
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"

                  <
                  
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2"></label>
>>>>>>> main
                      Phone Number
                    <
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your phone number"
                    
                  <
                  
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2"></label>
>>>>>>> main
                      Service Interest
                    <
                    <select
                      id="service"
                      name="service"
                  
                  <button
                    type="submit"
                    className="w-full cyber-button text-center py-4"
                  ></button>
                    Send Message
HomePage.displayName = 'HomePage';
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
export default HomePage;