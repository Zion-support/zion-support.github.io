import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, Suspense, useCallback } from 'react';
import { ContactInfo, AnimationState } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import OptimizedImage from '../components/OptimizedImage';
// import PerformanceMonitor from '../components/PerformanceMonitor';
export default function Home() {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isLoaded: false,
    hasError: false
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, isLoaded: true }))
    }, 100);
    return () => clearTimeout(timer)
  }, []);

  // Intersection Observer for better performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const heroElement = document.getElementById('hero-section');
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  const handleError = useCallback(() => {
    setAnimationState(prev => ({ ...prev, hasError: true }));
  }, []);
  if (animationState.hasError) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center" role="alert" aria-live="polite">
        <div className="text-center text-white max-w-md mx-auto p-6">
          <h1 className="text-2xl font-bold mb-4" role="heading" aria-level="1">
            Something went wrong
          </h1>
          <p className="text-slate-300 mb-6">
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Reload the page to try again"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };
  return (
    <>
      <Head>
        <title>Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="language" content="en-US" />
        <link rel="canonical" href={contact.site} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta property="og:url" content={contact.site} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": contact.site,
              "logo": `${contact.site}/favicon.svg`,
              "description": "Leading provider of micro SaaS products, AI services, and IT solutions",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": contact.phone,
                "contactType": "customer service",
                "email": contact.email
              },
              "sameAs": [contact.site]
            })
          }}
        />
      </Head>
      <ErrorBoundary level="page">
        <Suspense fallback={<LoadingSpinner fullScreen text="Loading Zion Tech Group..." />}>
          <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section 
          id="hero-section"
          className="py-20 px-4 text-center" 
          role="banner" 
          aria-labelledby="hero-title"
          onError={handleError}
        >
          <div className="max-w-4xl mx-auto">
            <h1 
              id="hero-title"
              className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              tabIndex={-1}
            >
              Zion Tech Group
            </h1>
            <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Innovative Micro SaaS, AI Services & IT Solutions
            </p>
            <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              We deliver cutting-edge technology solutions with 150+ micro SaaS products, 
              100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization 
              to AI automation, quantum computing to blockchain solutions, we help businesses scale 
              efficiently and securely in the digital age.
            </p>
            <nav className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} role="navigation" aria-label="Main navigation">
              <Link 
                href="/services" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="View all our services and solutions"
                tabIndex={animationState.isLoaded ? 0 : -1}
                onMouseEnter={(e) => e.currentTarget.focus()}
              >
                View All Services
              </Link>
              <Link 
                href="/services-catalog" 
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Browse our comprehensive services catalog"
                tabIndex={animationState.isLoaded ? 0 : -1}
                onMouseEnter={(e) => e.currentTarget.focus()}
              >
                Services Catalog
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Get a personalized quote for our services"
                tabIndex={animationState.isLoaded ? 0 : -1}
                onMouseEnter={(e) => e.currentTarget.focus()}
              >
                Get Quote
              </Link>
            </nav>
            <div className={`grid md:grid-cols-3 gap-6 text-center transition-all duration-1000 delay-800 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} role="region" aria-label="Service statistics">
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900" tabIndex={0}>
                <h3 className="text-2xl font-bold text-blue-400 mb-2" aria-label="150 plus micro SaaS products">150+</h3>
                <p className="text-slate-300">Micro SaaS Products</p>
                <p className="text-sm text-slate-400 mt-2">Innovative focused solutions</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900" tabIndex={0}>
                <h3 className="text-2xl font-bold text-purple-400 mb-2" aria-label="100 plus AI services">100+</h3>
                <p className="text-slate-300">AI Services</p>
                <p className="text-sm text-slate-400 mt-2">Advanced AI solutions</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900" tabIndex={0}>
                <h3 className="text-2xl font-bold text-green-400 mb-2" aria-label="100 plus IT solutions">100+</h3>
                <p className="text-slate-300">IT Solutions</p>
                <p className="text-sm text-slate-400 mt-2">Enterprise-grade services</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services Overview */}
        <section className="py-16 px-4" role="main" aria-labelledby="service-categories">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" id="service-categories">
              Our Service Categories
            </h2>
            <div className="grid md:grid-cols-3 gap-8" role="region" aria-label="Service categories">
              <article className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900" tabIndex={0}>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SaaS Products</h3>
                <p className="text-slate-300 mb-6">
                  Innovative, focused software solutions including AI-Powered Video Clip Maker, 
                  Smart Contract Analyzer, Cybersecurity Threat Intelligence, and 50+ more specialized tools.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6" role="list" aria-label="Featured micro SaaS products">
                  <li role="listitem">• AI-Powered Video Clip Maker</li>
                  <li role="listitem">• Smart Contract Analyzer</li>
                  <li role="listitem">• Cybersecurity Threat Intelligence</li>
                  <li role="listitem">• Multi-Language Website Translator</li>
                  <li role="listitem">• Predictive Inventory Optimizer</li>
                </ul>
                <Link 
                  href="/micro-saas" 
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  aria-label="View all micro SaaS products and solutions"
                >
                  View All Micro SaaS →
                </Link>
              </article>
              <article className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900" tabIndex={0}>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>
                <p className="text-slate-300 mb-6">
                  Advanced artificial intelligence solutions including autonomous AI agents, 
                  financial trading systems, legal document analysis, and 40+ more AI-powered services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6" role="list" aria-label="Featured AI services">
                  <li role="listitem">• Autonomous AI Agents</li>
                  <li role="listitem">• AI-Powered Financial Trading</li>
                  <li role="listitem">• AI Legal Document Analysis</li>
                  <li role="listitem">• AI-Powered Voice Analytics</li>
                  <li role="listitem">• AI-Powered Search & Discovery</li>
                </ul>
                <Link 
                  href="/ai-services" 
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  aria-label="View all AI services and solutions"
                >
                  View All AI Services →
                </Link>
              </article>
              <article className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900" tabIndex={0}>
                <h3 className="text-2xl font-bold mb-4 text-green-400">IT & Cloud Services</h3>
                <p className="text-slate-300 mb-6">
                  Comprehensive IT solutions including quantum computing consulting, blockchain & Web3 solutions, 
                  DevSecOps automation, and 40+ more enterprise-grade services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6" role="list" aria-label="Featured IT services">
                  <li role="listitem">• Quantum Computing Consulting</li>
                  <li role="listitem">• Blockchain & Web3 Solutions</li>
                  <li role="listitem">• DevSecOps & Security Automation</li>
                  <li role="listitem">• Enterprise Data Platform</li>
                  <li role="listitem">• High-Performance Computing Solutions</li>
                </ul>
                <Link 
                  href="/it-services" 
                  className="text-green-400 hover:text-green-300 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  aria-label="View all IT and cloud services"
                >
                  View All IT Services →
                </Link>
              </article>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-900/40" role="region" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Get in touch with our experts to discuss your project requirements and discover 
              how our innovative solutions can drive your business forward.
            </p>
            <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8" role="navigation" aria-label="Contact options">
              <a 
                href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label={`Call us at ${contact.phone}`}
              >
                Call {contact.phone}
              </a>
              <a 
                href={`mailto:${contact.email}`} 
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label={`Send us an email at ${contact.email}`}
              >
                Email {contact.email}
              </a>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Fill out our contact form"
              >
                Contact Form
              </Link>
            </nav>
            <address className="text-slate-400 not-italic">
              <p>{contact.address}</p>
              <p className="mt-2">
                Visit us at <a 
                  href={contact.site} 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  aria-label="Visit our website"
                >
                  {contact.site}
                </a>
              </p>
            </address>
          </div>
        </section>
          </main>
        </Suspense>
        {/* <PerformanceMonitor 
          showMetrics={process.env.NODE_ENV === 'development'}
          logMetrics={true}
          onThresholdExceeded={(metrics) => {
            console.warn('Performance thresholds exceeded:', metrics)
          }}
        /> */}
      </ErrorBoundary>
    </>
  )
}
