import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, Suspense } from 'react';
import { ContactInfo, AnimationState } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
// import PerformanceMonitor from '../components/PerformanceMonitor';
export default function Home() {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isLoaded: false,
    hasError: false
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, isLoaded: true }))
    }, 100);
    return () => clearTimeout(timer)
  }, []);
  if (animationState.hasError) {
    return (
      <div className=&quot;min-h-screen bg-slate-950 flex items-center justify-center&quot;>
        <div className=&quot;text-center text-white&quot;>
          <h1 className=&quot;text-2xl font-bold mb-4&quot;>Something went wrong</h1>
          <button 
            onClick={() => window.location.reload()} 
            className=&quot;px-4 py-2 bg-blue-600 rounded-lg hover: bg-blue-700&quot;
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
        <meta name=&quot;description&quot; content=&quot;Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; />
        <meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
        <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
        <meta name=&quot;language&quot; content=&quot;en-US&quot; />
        <link rel=&quot;canonical&quot; href={contact.site} />
        <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />
        <link rel=&quot;apple-touch-icon&quot; href=&quot;/apple-touch-icon.png&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.&quot; />
        <meta property=&quot;og:url&quot; content={contact.site} />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:site_name&quot; content=&quot;Zion Tech Group&quot; />
        <meta property=&quot;og:locale&quot; content=&quot;en_US&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
        <meta name=&quot;twitter:title&quot; content=&quot;Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions&quot; />
        <meta name=&quot;twitter:description&quot; content=&quot;Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.&quot; />
        <meta name=&quot;twitter:site&quot; content=&quot;@ziontechgroup&quot; />
        <meta name=&quot;twitter:creator&quot; content=&quot;@ziontechgroup&quot; />
        <script
          type=&quot;application/ld+json&quot;
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              &quot;@context&quot;: &quot;https://schema.org&quot;,
              &quot;@type&quot;: &quot;Organization&quot;,
              &quot;name&quot;: &quot;Zion Tech Group&quot;,
              &quot;url&quot;: contact.site,
              &quot;logo&quot;: `${contact.site}/favicon.svg`,
              &quot;description&quot;: &quot;Leading provider of micro SaaS products, AI services, and IT solutions&quot;,
              &quot;address&quot;: {
                &quot;@type&quot;: &quot;PostalAddress&quot;,
                &quot;streetAddress&quot;: &quot;364 E Main St STE 1008&quot;,
                &quot;addressLocality&quot;: &quot;Middletown&quot;,
                &quot;addressRegion&quot;: &quot;DE&quot;,
                &quot;postalCode&quot;: &quot;19709&quot;,
                &quot;addressCountry&quot;: &quot;US&quot;
              },
              &quot;contactPoint&quot;: {
                &quot;@type&quot;: &quot;ContactPoint&quot;,
                &quot;telephone&quot;: contact.phone,
                &quot;contactType&quot;: &quot;customer service&quot;,
                &quot;email&quot;: contact.email
              },
              &quot;sameAs&quot;: [contact.site]
            })
          }}
        />
      </Head>
      <ErrorBoundary level=&quot;page&quot;>
        <Suspense fallback={<LoadingSpinner fullScreen text=&quot;Loading Zion Tech Group...&quot; />}>
          <main className=&quot;min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
        {/* Hero Section */}
        <section className=&quot;py-20 px-4 text-center&quot; role=&quot;banner&quot; aria-labelledby=&quot;hero-title&quot;>
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <h1 
              id=&quot;hero-title&quot;
              className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} role=&quot;navigation&quot; aria-label=&quot;Main navigation&quot;>
              <Link 
                href=&quot;/services&quot; 
                className=&quot;px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible&quot;
                aria-label=&quot;View all our services&quot;
                tabIndex={animationState.isLoaded ? 0 : -1}
              >
                View All Services
              </Link>
              <Link 
                href=&quot;/services-catalog&quot; 
                className=&quot;px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible&quot;
                aria-label=&quot;Browse our services catalog&quot;
                tabIndex={animationState.isLoaded ? 0 : -1}
              >
                Services Catalog
              </Link>
              <Link 
                href=&quot;/contact&quot; 
                className=&quot;px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible&quot;
                aria-label=&quot;Get a quote for our services&quot;
                tabIndex={animationState.isLoaded ? 0 : -1}
              >
                Get Quote
              </Link>
            </div>
            <div className={`grid md:grid-cols-3 gap-6 text-center transition-all duration-1000 delay-800 ${animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className=&quot;p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105&quot;>
                <h3 className=&quot;text-2xl font-bold text-blue-400 mb-2&quot; aria-label=&quot;150 plus micro SaaS products&quot;>150+</h3>
                <p className=&quot;text-slate-300&quot;>Micro SaaS Products</p>
              </div>
              <div className=&quot;p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105&quot;>
                <h3 className=&quot;text-2xl font-bold text-purple-400 mb-2&quot; aria-label=&quot;100 plus AI services&quot;>100+</h3>
                <p className=&quot;text-slate-300&quot;>AI Services</p>
              </div>
              <div className=&quot;p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105&quot;>
                <h3 className=&quot;text-2xl font-bold text-green-400 mb-2&quot; aria-label=&quot;100 plus IT solutions&quot;>100+</h3>
                <p className=&quot;text-slate-300&quot;>IT Solutions</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services Overview */}
        <section className=&quot;py-16 px-4&quot; role=&quot;main&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-center mb-12&quot; id=&quot;service-categories&quot;>
              Our Service Categories
            </h2>
            <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
              <div className=&quot;p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors&quot;>
                <h3 className=&quot;text-2xl font-bold mb-4 text-blue-400&quot;>Micro SaaS Products</h3>
                <p className=&quot;text-slate-300 mb-6&quot;>
                  Innovative, focused software solutions including AI-Powered Video Clip Maker, 
                  Smart Contract Analyzer, Cybersecurity Threat Intelligence, and 50+ more specialized tools.
                </p>
                <ul className=&quot;text-slate-400 space-y-2 mb-6&quot;>
                  <li>• AI-Powered Video Clip Maker</li>
                  <li>• Smart Contract Analyzer</li>
                  <li>• Cybersecurity Threat Intelligence</li>
                  <li>• Multi-Language Website Translator</li>
                  <li>• Predictive Inventory Optimizer</li>
                </ul>
                <Link href=&quot;/micro-saas&quot; className=&quot;text-blue-400 hover:text-blue-300 font-semibold&quot;>
                  View All Micro SaaS →
                </Link>
              </div>
              <div className=&quot;p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors&quot;>
                <h3 className=&quot;text-2xl font-bold mb-4 text-purple-400&quot;>AI Services</h3>
                <p className=&quot;text-slate-300 mb-6&quot;>
                  Advanced artificial intelligence solutions including autonomous AI agents, 
                  financial trading systems, legal document analysis, and 40+ more AI-powered services.
                </p>
                <ul className=&quot;text-slate-400 space-y-2 mb-6&quot;>
                  <li>• Autonomous AI Agents</li>
                  <li>• AI-Powered Financial Trading</li>
                  <li>• AI Legal Document Analysis</li>
                  <li>• AI-Powered Voice Analytics</li>
                  <li>• AI-Powered Search & Discovery</li>
                </ul>
                <Link href=&quot;/ai-services&quot; className=&quot;text-purple-400 hover:text-purple-300 font-semibold&quot;>
                  View All AI Services →
                </Link>
              </div>
              <div className=&quot;p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors&quot;>
                <h3 className=&quot;text-2xl font-bold mb-4 text-green-400&quot;>IT & Cloud Services</h3>
                <p className=&quot;text-slate-300 mb-6&quot;>
                  Comprehensive IT solutions including quantum computing consulting, blockchain & Web3 solutions, 
                  DevSecOps automation, and 40+ more enterprise-grade services.
                </p>
                <ul className=&quot;text-slate-400 space-y-2 mb-6&quot;>
                  <li>• Quantum Computing Consulting</li>
                  <li>• Blockchain & Web3 Solutions</li>
                  <li>• DevSecOps & Security Automation</li>
                  <li>• Enterprise Data Platform</li>
                  <li>• High-Performance Computing Solutions</li>
                </ul>
                <Link href=&quot;/it-services&quot; className=&quot;text-green-400 hover:text-green-300 font-semibold&quot;>
                  View All IT Services →
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className=&quot;py-16 px-4 bg-slate-900/40&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-8&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-lg text-slate-300 mb-8&quot;>
              Get in touch with our experts to discuss your project requirements and discover 
              how our innovative solutions can drive your business forward.
            </p>
            <div className=&quot;flex flex-col sm:flex-row items-center justify-center gap-4 mb-8&quot;>
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className=&quot;px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors&quot;>
                Call {contact.phone}
              </Link>
              <a href={`mailto:${contact.email}`} className=&quot;px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors&quot;>
                Email {contact.email}
              </Link>
              <Link href=&quot;/contact&quot; className=&quot;px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors&quot;>
                Contact Form
              </Link>
            </div>
            <div className=&quot;text-slate-400&quot;>
              <p>{contact.address}</p>
              <p className=&quot;mt-2&quot;>Visit us at <a href={contact.site} className=&quot;text-blue-400 hover:text-blue-300&quot;>{contact.site}</Link></p>
            </div>
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
  );
import React from 'react';
import Homepage2025 from '../components/Homepage2025';

export default function HomePage() {
  return <Homepage2025 />;
}
