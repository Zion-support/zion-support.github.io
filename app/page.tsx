import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import FuturisticNavigation from './components/FuturisticNavigation';
import FuturisticFooter from './components/FuturisticFooter';
import AnimatedBackground from './components/AnimatedBackground';
import FuturisticDesign from './components/FuturisticDesign';
import ResponsiveContainer from './components/ResponsiveContainer';
import ResponsiveGrid from './components/ResponsiveGrid';
import ResponsiveText from './components/ResponsiveText';

// Import components
import ContentPromotionBanner from './components/ContentPromotionBanner';
import ContentCarousel from './components/ContentCarousel';
import DynamicContentShowcase from './components/DynamicContentShowcase';
import ContentStatistics from './components/ContentStatistics';
import ContentNewsletterSignup from './components/ContentNewsletterSignup';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
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
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks
  const handlePhoneClick = useCallback(() => {
    if (
      typeof window !== 'undefined' &&
      (
        window as unknown as {
          gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void;
        }
      ).gtag
    ) {
      (
        window as unknown as {
          gtag: (command: string, action: string, parameters: Record<string, unknown>) => void;
        }
      ).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="particles" intensity="medium" color="cyan" />
      
      {/* Navigation */}
      <FuturisticNavigation />
      
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Content Promotion Banner */}
      <ContentPromotionBanner />

      <main id="main-content" className="py-16" role="main">
        <ResponsiveContainer maxWidth="7xl" padding="lg">
        {/* Hero Section */}
        <section
          className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded && isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          aria-labelledby="hero-heading"
        >
          <FuturisticDesign variant="neon" intensity="high" className="rounded-3xl p-6 sm:p-8 md:p-12 mb-8">
            <ResponsiveText 
              as="h1" 
              id="hero-heading"
              size={{ default: '4xl', sm: '5xl', md: '6xl', lg: '7xl', xl: '8xl' }}
              weight="bold"
              color="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              align="center"
              className="mb-6 animate-pulse"
            >
              Zion Tech Group
            </ResponsiveText>
            <ResponsiveText 
              as="p" 
              role="doc-subtitle"
              size={{ default: 'xl', sm: '2xl', md: '3xl' }}
              weight="light"
              color="text-cyan-300"
              align="center"
              className="mb-8"
            >
              Advanced AI & Technology Solutions
            </ResponsiveText>
            <ResponsiveText 
              as="p"
              size={{ default: 'base', sm: 'lg', md: 'xl' }}
              color="text-gray-300"
              align="center"
              lineHeight="relaxed"
              className="max-w-4xl mx-auto mb-8"
            >
              Leading provider of enterprise AI solutions, digital transformation, and cutting-edge technology services. 
              Transform your business with our proven strategies delivering $50M+ annual savings and 95% process automation.
            </ResponsiveText>
          </FuturisticDesign>
          
          {/* Key Benefits */}
          <ResponsiveGrid 
            cols={{ default: 1, md: 3 }} 
            gap="md" 
            className="max-w-5xl mx-auto mb-12"
          >
            <FuturisticDesign variant="glass" intensity="medium" className="rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-cyan-400">🚀</div>
              <h3 className="font-bold text-white mb-3 text-lg">AI-Powered Solutions</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
            </FuturisticDesign>
            <FuturisticDesign variant="holographic" intensity="medium" className="rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-pink-400">⚡</div>
              <h3 className="font-bold text-white mb-3 text-lg">Proven Results</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
            </FuturisticDesign>
            <FuturisticDesign variant="cyber" intensity="medium" className="rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-green-400">🔒</div>
              <h3 className="font-bold text-white mb-3 text-lg">Enterprise Security</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
            </FuturisticDesign>
          </ResponsiveGrid>
        </section>

        {/* Services Section */}
        <section className="mb-16" aria-labelledby="services-heading">
          <div className="text-center mb-12">
            <ResponsiveText 
              as="h2" 
              id="services-heading"
              size={{ default: '3xl', sm: '4xl', md: '5xl' }}
              weight="bold"
              color="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              align="center"
              className="mb-4"
            >
              Our Services
            </ResponsiveText>
            <ResponsiveText 
              as="p"
              size={{ default: 'lg', sm: 'xl' }}
              color="text-gray-300"
              align="center"
              className="max-w-3xl mx-auto"
            >
              Comprehensive AI and IT solutions designed to transform your business operations
            </ResponsiveText>
          </div>
          <ResponsiveGrid cols={{ default: 1, md: 3 }} gap="lg" className="mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <FuturisticDesign variant="neon" intensity="medium" className="rounded-xl p-8 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-6 text-center text-cyan-400">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">AI Services</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">Starting at $1,500/month</div>
                  <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300">
                    Learn More →
                  </a>
                </div>
              </FuturisticDesign>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <FuturisticDesign variant="holographic" intensity="medium" className="rounded-xl p-8 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-6 text-center text-pink-400">⚛️</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Computing</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Next-generation quantum computing capabilities for complex problem solving and optimization.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-2">Custom Pricing</div>
                  <a href="/quantum-computing" className="text-pink-400 hover:text-pink-300 font-medium transition-colors duration-300">
                    Learn More →
                  </a>
                </div>
              </FuturisticDesign>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <FuturisticDesign variant="cyber" intensity="medium" className="rounded-xl p-8 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-6 text-center text-green-400">🔄</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Autonomous Systems</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Self-managing and self-optimizing systems for enterprise operations and infrastructure.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">Starting at $2,500/month</div>
                  <a href="/autonomous-systems" className="text-green-400 hover:text-green-300 font-medium transition-colors duration-300">
                    Learn More →
                  </a>
                </div>
              </FuturisticDesign>
            </Suspense>
          </ResponsiveGrid>
          
          {/* Additional Services Grid */}
          <ResponsiveGrid cols={{ default: 1, md: 3 }} gap="lg" className="mb-12">
            <FuturisticDesign variant="glass" intensity="low" className="rounded-lg p-6 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-cyan-400">🤖</div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-4">
                Harness the power of artificial intelligence to drive innovation and efficiency in
                your organization.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
              </ul>
            </FuturisticDesign>

            <FuturisticDesign variant="holographic" intensity="low" className="rounded-lg p-6 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-pink-400">🔄</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-4">
                Transform your business processes with cutting-edge technology and expert
                consultation.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Process Automation</li>
                <li>• Legacy System Modernization</li>
                <li>• Workflow Optimization</li>
                <li>• Change Management</li>
              </ul>
            </FuturisticDesign>

            <FuturisticDesign variant="cyber" intensity="low" className="rounded-lg p-6 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-green-400">☁️</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Cloud Services</h3>
              <p className="text-gray-300 mb-4">
                Scale your infrastructure with secure, reliable, and efficient cloud solutions.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Cloud Migration</li>
                <li>• Infrastructure as Code</li>
                <li>• DevOps & CI/CD</li>
                <li>• 24/7 Monitoring</li>
              </ul>
            </FuturisticDesign>
          </ResponsiveGrid>

          {/* New Real Services Section */}
          <div className="mb-12">
            <ResponsiveText 
              as="h3"
              size={{ default: '2xl', sm: '3xl' }}
              weight="bold"
              color="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              align="center"
              className="mb-8"
            >
              Real Micro SAAS Solutions
            </ResponsiveText>
            <ResponsiveGrid cols={{ default: 1, md: 2, lg: 4 }} gap="md">
              <FuturisticDesign variant="neon" intensity="low" className="rounded-lg p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-cyan-400">🔍</div>
                <h4 className="text-lg font-semibold text-white mb-2">AI Code Review</h4>
                <p className="text-sm text-gray-300 mb-3">Automated code analysis and bug detection</p>
                <div className="text-cyan-400 font-bold">$89/month</div>
              </FuturisticDesign>

              <FuturisticDesign variant="holographic" intensity="low" className="rounded-lg p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-pink-400">📄</div>
                <h4 className="text-lg font-semibold text-white mb-2">Document Intelligence</h4>
                <p className="text-sm text-gray-300 mb-3">OCR and data extraction automation</p>
                <div className="text-pink-400 font-bold">$149/month</div>
              </FuturisticDesign>

              <FuturisticDesign variant="cyber" intensity="low" className="rounded-lg p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-green-400">📊</div>
                <h4 className="text-lg font-semibold text-white mb-2">Analytics Dashboard</h4>
                <p className="text-sm text-gray-300 mb-3">Real-time business intelligence</p>
                <div className="text-green-400 font-bold">$99/month</div>
              </FuturisticDesign>

              <FuturisticDesign variant="glass" intensity="low" className="rounded-lg p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-purple-400">🔌</div>
                <h4 className="text-lg font-semibold text-white mb-2">API Testing Suite</h4>
                <p className="text-sm text-gray-300 mb-3">Automated API testing and monitoring</p>
                <div className="text-purple-400 font-bold">$79/month</div>
              </FuturisticDesign>
            </ResponsiveGrid>
          </div>
          
          <div className="text-center mt-8">
            <FuturisticDesign variant="gradient" intensity="medium" className="inline-block rounded-lg">
              <a 
                href="/services"
                className="inline-block px-8 py-4 text-white font-semibold hover:scale-105 transition-all duration-300"
              >
                View All Services →
              </a>
            </FuturisticDesign>
          </div>
>>>>>>> origin/main
        </section>
        </ResponsiveContainer>
      </main>
      
      {/* Footer */}
      <FuturisticFooter />
    </div>
  );
};

export default HomePage;
