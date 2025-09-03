import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
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
        <meta name="description" content="Leading provider of 120+ micro SaaS products, 80+ AI services, and 80+ IT solutions. Cloud optimization, AI automation, quantum computing, and enterprise technology solutions for modern businesses." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, enterprise software, digital transformation" />
        <link rel="canonical" href={contact.site} />
        <meta property="og:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of 120+ micro SaaS products, 80+ AI services, and 80+ IT solutions. Cloud optimization, AI automation, quantum computing, and enterprise technology solutions for modern businesses." />
        <meta property="og:url" content={contact.site} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${contact.site}/og-image.svg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of 120+ micro SaaS products, 80+ AI services, and 80+ IT solutions. Cloud optimization, AI automation, quantum computing, and enterprise technology solutions for modern businesses." />
        <meta name="twitter:image" content={`${contact.site}/og-image.svg`} />
        <meta name="twitter:site" content="@ZionTechGroup" />
        <meta name="twitter:creator" content="@ZionTechGroup" />
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
        <section className="py-20 px-4 text-center" aria-labelledby="hero-heading">
          <div className="max-w-4xl mx-auto">
            <h1 id="hero-heading" className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Innovative Micro SaaS, AI Services & IT Solutions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with 120+ micro SaaS products, 
              80+ advanced AI services, and 80+ comprehensive IT solutions. From cloud optimization 
              to AI automation, we help businesses scale efficiently and securely.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12" role="group" aria-label="Main actions">
              <Link href="/services" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label="View all our services">
                View All Services
              </Link>
              <Link href="/services-catalog" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label="Browse our services catalog">
                Services Catalog
              </Link>
              <Link href="/contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label="Get a quote for our services">
                Get Quote
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center" role="list" aria-label="Service statistics">
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-colors" role="listitem">
                <h3 className="text-2xl font-bold text-blue-400 mb-2" aria-label="120 plus">120+</h3>
                <p className="text-slate-300">Micro SaaS Products</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-purple-500/40 transition-colors" role="listitem">
                <h3 className="text-2xl font-bold text-purple-400 mb-2" aria-label="80 plus">80+</h3>
                <p className="text-slate-300">AI Services</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-green-500/40 transition-colors" role="listitem">
                <h3 className="text-2xl font-bold text-green-400 mb-2" aria-label="80 plus">80+</h3>
                <p className="text-slate-300">IT Solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Service Categories
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="Service categories">
              <article className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors focus-within:border-blue-500/40" role="listitem">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SaaS Products</h3>
                <p className="text-slate-300 mb-6">
                  Innovative, focused software solutions including Cloud Cost Guard, 
                  Smart Invoice Processing, AI-Powered Code Review, and 36+ more specialized tools.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6" role="list" aria-label="Featured micro SaaS products">
                  <li role="listitem">• Cloud Cost Guard (FinOps Assistant)</li>
                  <li role="listitem">• Smart Invoice Processing & AP Automation</li>
                  <li role="listitem">• AI-Powered Code Review Assistant</li>
                  <li role="listitem">• Dynamic Pricing Optimization Engine</li>
                  <li role="listitem">• Intelligent Supply Chain Monitor</li>
                </ul>
                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded" aria-label="View all micro SaaS products">
                  View All Micro SaaS →
                </Link>
              </article>

              <article className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors focus-within:border-purple-500/40" role="listitem">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>
                <p className="text-slate-300 mb-6">
                  Advanced artificial intelligence solutions including healthcare diagnostics, 
                  cybersecurity threat detection, smart manufacturing, and 25+ more AI-powered services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6" role="list" aria-label="Featured AI services">
                  <li role="listitem">• AI-Powered Healthcare Diagnostics</li>
                  <li role="listitem">• AI-Powered Cybersecurity Threat Detection</li>
                  <li role="listitem">• Smart Manufacturing Quality Control</li>
                  <li role="listitem">• AI-Powered Smart City Solutions</li>
                  <li role="listitem">• Intelligent Process Mining & Optimization</li>
                </ul>
                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded" aria-label="View all AI services">
                  View All AI Services →
                </Link>
              </article>

              <article className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors focus-within:border-green-500/40" role="listitem">
                <h3 className="text-2xl font-bold mb-4 text-green-400">IT & Cloud Services</h3>
                <p className="text-slate-300 mb-6">
                  Comprehensive IT solutions including enterprise integration, high-performance computing, 
                  IoT platforms, digital transformation, and 30+ more enterprise-grade services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6" role="list" aria-label="Featured IT services">
                  <li role="listitem">• Enterprise Application Integration</li>
                  <li role="listitem">• Advanced Threat Intelligence Platform</li>
                  <li role="listitem">• High-Performance Computing Solutions</li>
                  <li role="listitem">• IoT Platform & Device Management</li>
                  <li role="listitem">• Enterprise Digital Transformation Consulting</li>
                </ul>
                <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded" aria-label="View all IT services">
                  View All IT Services →
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-900/40" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Get in touch with our experts to discuss your project requirements and discover 
              how our innovative solutions can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8" role="group" aria-label="Contact options">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label={`Call us at ${contact.phone}`}>
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label={`Email us at ${contact.email}`}>
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label="Fill out our contact form">
                Contact Form
              </Link>
            </div>
            
            <address className="text-slate-400 not-italic">
              <p>{contact.address}</p>
              <p className="mt-2">Visit us at <a href={contact.site} className="text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded" aria-label="Visit our main website">{contact.site}</a></p>
            </address>
          </div>
        </section>
      </main>
    </>
  );
}
