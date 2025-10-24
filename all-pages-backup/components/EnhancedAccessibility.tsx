<<<<<<< HEAD
'use client';
import { useEffect } from 'react';

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {;
  useEffect(() => {
    // Add high contrast mode support
<<<<<<< HEAD:all-pages-backup/components/EnhancedAccessibility.tsx
    const handleContrastChange = (e: MediaQueryListEvent) => {;
      if (e.matches) {;
        document.documentElement.classList.add('high-contrast')} else {
        document.documentElement.classList.remove('high-contrast')}
    };

:app/components/EnhancedAccessibility.tsx
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    mediaQuery.addEventListener('change', handleContrastChange);
    // Call with the MediaQueryList directly
    handleContrastChange(mediaQuery as any);

  return (
    <>
      <Helmet>
        <Head>
        <title>EnhancedAccessibility</title>
        <meta name=&quot;description&quot; content=&quot;Advanced EnhancedAccessibility solution for modern businesses.&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, EnhancedAccessibility, AI solutions, intelligent automation&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;>
              EnhancedAccessibility
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced EnhancedAccessibility solution for modern businesses.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
<<<<<<< HEAD:all-pages-backup/components/EnhancedAccessibility.tsx
    return () => {
      mediaQuery.removeEventListener('change', handleContrastChange)}}, []);

  useEffect(() => {
    // Add reduced motion support
    const handleMotionChange = (e: MediaQueryListEvent) => {;
      if (e.matches) {;
        document.documentElement.classList.add('reduce-motion')} else {
        document.documentElement.classList.remove('reduce-motion')}
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', handleMotionChange);
    // Call with the MediaQueryList directly
    handleMotionChange(mediaQuery as any);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange)}}, []);

  useEffect(() => {
    // Add screen reader announcements
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.id = 'announcements';
    document.body.appendChild(announcement);

    return () => {
      const existingAnnouncement = document.getElementById('announcements');
      if (existingAnnouncement) {
        document.body.removeChild(existingAnnouncement)}
    }}, []);

  useEffect(() => {
    // Add keyboard navigation support
    const handleKeyDown = (e: KeyboardEvent) => {;
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {;
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus()}
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown)}}, []);

  return <>{children}</>};

export default EnhancedAccessibility
:app/components/EnhancedAccessibility.tsx
=======
'use client'
import { useEffect } from 'react'
        document.documentElement.classList.add('high-contrast'
        document.documentElement.classList.remove('high-contrast'
    const mediaQuery = window.matchMedia('(prefers-"contrast": high)';,
    mediaQuery.addEventListener('change'
>>>>>>> origin/main
