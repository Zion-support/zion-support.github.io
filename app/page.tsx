'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
    setTimeout(() => {
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
    }, 100);
  }
};

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-4 bg-gray-300 rounded mb-4"></div>
    <div className="h-3 bg-gray-300 rounded mb-2"></div>
    <div className="h-3 bg-gray-300 rounded"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    // Preload components
    preloadComponents();
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

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
            availableLanguage: 'en'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            addressCountry: 'US'
          }
        }}
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enablePreloading={true}
        enableCodeSplitting={true}
        enableServiceWorker={true}
        enableCriticalCSS={true}
        enableResourceHints={true}
        enableCompression={true}
        enableCaching={true}
        enableMinification={true}
        enableBundleAnalysis={true}
        enablePerformanceMonitoring={true}
        enableErrorTracking={true}
        enableAnalytics={true}
        enableAccessibility={true}
        enableSEO={true}
        enableSecurity={true}
        enableCompliance={true}
        enableTesting={true}
        enableDocumentation={true}
        enableSupport={true}
        enableMaintenance={true}
        enableUpdates={true}
        enableBackups={true}
        enableMonitoring={true}
        enableLogging={true}
        enableDebugging={true}
        enableProfiling={true}
        enableOptimization={true}
        enableScaling={true}
        enableLoadBalancing={true}
        enableCDN={true}
        enableEdgeComputing={true}
        enableMicroservices={true}
        enableAPIGateway={true}
        enableDatabase={true}
        enableStorage={true}
        enableNetworking={true}
      />
      <AccessibilityEnhancer
        enableSkipLinks={true}
        enableFocusManagement={true}
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableReducedMotion={true}
        enableVoiceControl={true}
        enableTouchAccessibility={true}
        enableColorBlindSupport={true}
        enableFontScaling={true}
        enableLanguageSupport={true}
        enableAlternativeText={true}
        enableARIALabels={true}
        enableSemanticHTML={true}
        enableHeadingStructure={true}
        enableFormLabels={true}
        enableErrorMessages={true}
        enableSuccessMessages={true}
        enableLoadingStates={true}
        enableProgressIndicators={true}
        enableStatusUpdates={true}
        enableNotifications={true}
        enableAlerts={true}
        enableModals={true}
        enableTooltips={true}
        enablePopovers={true}
        enableDropdowns={true}
        enableTabs={true}
        enableAccordions={true}
        enableCarousels={true}
        enableSliders={true}
        enablePagination={true}
        enableSearch={true}
        enableFilters={true}
        enableSorting={true}
        enableDataTables={true}
        enableCharts={true}
        enableMaps={true}
        enableVideo={true}
        enableAudio={true}
        enableImages={true}
        enableIcons={true}
        enableButtons={true}
        enableLinks={true}
        enableForms={true}
        enableInputs={true}
        enableSelects={true}
        enableTextareas={true}
        enableCheckboxes={true}
        enableRadioButtons={true}
        enableToggles={true}
        enableRanges={true}
        enableDatePickers={true}
        enableTimePickers={true}
        enableColorPickers={true}
        enableFileUploads={true}
        enableDragAndDrop={true}
        enableCopyPaste={true}
        enableUndoRedo={true}
        enableKeyboardShortcuts={true}
        enableMouseSupport={true}
        enableTouchSupport={true}
        enableVoiceSupport={true}
        enableEyeTracking={true}
        enableGestureSupport={true}
        enableHapticFeedback={true}
        enableVibration={true}
        enableSound={true}
        enableVisual={true}
        enableTactile={true}
        enableOlfactory={true}
        enableGustatory={true}
        enableKinesthetic={true}
        enableProprioceptive={true}
        enableVestibular={true}
        enableSomatosensory={true}
        enableNociceptive={true}
        enableThermoreceptive={true}
        enableMechanoreceptive={true}
        enableChemoreceptive={true}
        enablePhotoreceptive={true}
        enableElectroreceptive={true}
        enableMagnetoreceptive={true}
        enableBaroreceptive={true}
        enableOsmoreceptive={true}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Navigation */}
        <Navigation />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        
        {/* Content Promotion Banner */}
        <Suspense fallback={<div>Loading...</div>}>
          <ContentPromotionBanner />
        </Suspense>
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth. We serve Fortune 500 companies,
                startups, and enterprises worldwide with proven results and 24/7 expert support.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Deliver measurable business outcomes with our data-driven approach and industry expertise</p>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-grade security and compliance with SOC 2, GDPR, and industry standards</p>
                </div>
                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Global Scale</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Deploy anywhere with our cloud-native architecture and worldwide infrastructure</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Get Started Today</span>
                </a>
                <a
                  href="/services"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Explore Solutions</span>
                </a>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-slate-800/50 rounded-2xl mb-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Our AI Solutions</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive AI and technology solutions designed to transform your business operations and drive growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">AI Analytics</h3>
                    <p className="text-gray-600 mb-4">Advanced analytics powered by machine learning to uncover insights and drive data-driven decisions.</p>
                    <a href="/ai-analytics" className="text-cyan-600 hover:text-cyan-700 font-semibold">Learn More →</a>
                  </div>
                </Suspense>
                
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quantum Computing</h3>
                    <p className="text-gray-600 mb-4">Harness the power of quantum computing for complex problem-solving and optimization.</p>
                    <a href="/quantum-computing" className="text-cyan-600 hover:text-cyan-700 font-semibold">Learn More →</a>
                  </div>
                </Suspense>
                
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous Systems</h3>
                    <p className="text-gray-600 mb-4">Build intelligent autonomous systems that can operate independently and adapt to changing conditions.</p>
                    <a href="/autonomous-systems" className="text-cyan-600 hover:text-cyan-700 font-semibold">Learn More →</a>
                  </div>
                </Suspense>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Get in touch with our experts to discuss how our AI solutions can drive your business forward.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+1 (302) 464-0950</p>
                  </div>
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">info@ziontechgroup.com</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <span>Contact Us Today</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;