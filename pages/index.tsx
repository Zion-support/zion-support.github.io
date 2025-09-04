import Link from 'next/link';
import Head from 'next/head';
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
        <title>Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 280+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, enterprise software, digital transformation" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
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
          }}
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
            <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge technology solutions with 120+ micro SaaS products, 
              80+ advanced AI services, and 80+ comprehensive IT solutions. From cloud optimization 
              to AI automation, we help businesses scale efficiently and securely.
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center" role="group" aria-label="Service statistics">
              <div className="p-4 sm:p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20" role="article" aria-labelledby="micro-saas-count">
                <h3 id="micro-saas-count" className="text-xl sm:text-2xl font-bold text-blue-400 mb-2 animate-pulse">120+</h3>
                <p className="text-sm sm:text-base text-slate-300">Micro SaaS Products</p>
              </div>
              <div className="p-4 sm:p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20" role="article" aria-labelledby="ai-services-count">
                <h3 id="ai-services-count" className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 animate-pulse">80+</h3>
                <p className="text-sm sm:text-base text-slate-300">AI Services</p>
              </div>
              <div className="p-4 sm:p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20" role="article" aria-labelledby="it-solutions-count">
                <h3 id="it-solutions-count" className="text-xl sm:text-2xl font-bold text-green-400 mb-2 animate-pulse">80+</h3>
                <p className="text-sm sm:text-base text-slate-300">IT Solutions</p>
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
                  <li>• Smart Invoice Processing & AP Automation</li>
                  <li>• AI-Powered Code Review Assistant</li>
                  <li>• Dynamic Pricing Optimization Engine</li>
                  <li>• Intelligent Supply Chain Monitor</li>
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
                <ul className="text-xs sm:text-sm text-slate-400 space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  <li>• AI-Powered Healthcare Diagnostics</li>
                  <li>• AI-Powered Cybersecurity Threat Detection</li>
                  <li>• Smart Manufacturing Quality Control</li>
                  <li>• AI-Powered Smart City Solutions</li>
                  <li>• Intelligent Process Mining & Optimization</li>
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
                <ul className="text-xs sm:text-sm text-slate-400 space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  <li>• Enterprise Application Integration</li>
                  <li>• Advanced Threat Intelligence Platform</li>
                  <li>• High-Performance Computing Solutions</li>
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