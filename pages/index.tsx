import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

export default function Home(): any {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Micro SaaS, AI & IT Solutions Provider</title>
        <meta name="description" content="Zion Tech Group delivers 330+ cutting-edge technology solutions: 140+ micro SaaS products, 95+ AI services, and 95+ IT solutions. From quantum computing to AI automation, we help businesses scale efficiently and securely." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, quantum computing, blockchain, cybersecurity, machine learning, DevOps, automation, edge computing, 5G, IoT, data analytics" />
        <link rel="canonical" href={contact.site} />
        <meta property="og:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 280+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta property="og:url" content={contact.site} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${contact.site}/og-image.svg`} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 280+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta name="twitter:image" content={`${contact.site}/og-image.svg`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
              "sameAs": [
                contact.site
              ]
            })
          }
        />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white" role="main">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 text-center" aria-labelledby="hero-heading">
          <div className="max-w-4xl mx-auto">
            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6">
              Zion Tech Group
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 sm:mb-8">
              Innovative Micro SaaS, AI Services & IT Solutions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with 30+ micro SaaS products, 
              32+ advanced AI services, and 32+ comprehensive IT solutions. From quantum computing 
              to AI-powered drug discovery, we help businesses pioneer the future of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12" role="group" aria-label="Main navigation actions">
              <Link href="/services" className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-200 hover:scale-105 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label="View all our services">
                View All Services
              </Link>
              <Link href="/services-catalog" className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-200 hover:scale-105 text-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label="Browse our services catalog">
                Services Catalog
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-200 hover:scale-105 text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900" aria-label="Get a quote for our services">
                Get Quote
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">30+</h3>
                <p className="text-slate-300">Micro SaaS Products</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">32+</h3>
                <p className="text-slate-300">AI Services</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-green-400 mb-2">32+</h3>
                <p className="text-slate-300">IT Solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
              Our Service Categories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-200 hover:scale-105">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-400">Micro SaaS Products</h3>
                <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                  Innovative, focused software solutions including Cloud Cost Guard, 
                  Smart Invoice Processing, AI-Powered Code Review, and 36+ more specialized tools.
                </p>
                <ul className="text-xs sm:text-sm text-slate-400 space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  <li>• Cloud Cost Guard (FinOps Assistant)</li>
                  <li>• Smart Contract Security Auditor</li>
                  <li>• AI-Powered Code Review Assistant</li>
                  <li>• Predictive Maintenance System</li>
                </ul>
                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold text-sm sm:text-base transition-colors">
                  View All Micro SaaS →
                </Link>
              </div>

              <div className="p-6 sm:p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-200 hover:scale-105">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-400">AI Services</h3>
                <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                  Advanced artificial intelligence solutions including healthcare diagnostics, 
                  cybersecurity threat detection, smart manufacturing, and 25+ more AI-powered services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• AI-Powered Drug Discovery Platform</li>
                  <li>• Quantum Machine Learning Platform</li>
                  <li>• Autonomous Vehicle AI System</li>
                  <li>• AI-Powered Climate Modeling</li>
                </ul>
                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold text-sm sm:text-base transition-colors">
                  View All AI Services →
                </Link>
              </div>

              <div className="p-6 sm:p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-all duration-200 hover:scale-105">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-green-400">IT & Cloud Services</h3>
                <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                  Comprehensive IT solutions including enterprise integration, high-performance computing, 
                  IoT platforms, digital transformation, and 30+ more enterprise-grade services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Quantum Computing Infrastructure</li>
                  <li>• Metaverse & Web3 Infrastructure</li>
                  <li>• Edge Computing & 5G Networks</li>
                  <li>• Digital Twin Platform Development</li>
                </ul>
                <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold text-sm sm:text-base transition-colors">
                  View All IT Services →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed">
              Get in touch with our experts to discuss your project requirements and discover 
              how our innovative solutions can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-200 hover:scale-105 text-center">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-200 hover:scale-105 text-center">
                Email {contact.email}
              </a>
              <Link href="/contact" className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-200 hover:scale-105 text-center">
                Contact Form
              </Link>
            </div>
            
            <div className="text-sm sm:text-base text-slate-400">
              <p className="mb-2">{contact.address}</p>
              <p>Visit us at <a href={contact.site} className="text-blue-400 hover:text-blue-300 transition-colors">{contact.site}</a></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
;