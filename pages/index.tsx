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
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity" />
        <link rel="canonical" href={contact.site} />
        <meta property="og:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta property="og:url" content={contact.site} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
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
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Innovative Micro SaaS, AI Services & IT Solutions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with 150+ innovative micro SaaS products, 
              90+ advanced AI services, and 100+ comprehensive IT solutions. From AI-powered automation 
              to quantum-safe security, we help businesses scale efficiently, securely, and profitably.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/services" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                View All Services
              </Link>
              <Link href="/services-catalog" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Services Catalog
              </Link>
              <Link href="/contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Get Quote
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">150+</h3>
                <p className="text-slate-300">Micro SaaS Products</p>
                <p className="text-sm text-slate-400 mt-1">Starting from $99/month</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">90+</h3>
                <p className="text-slate-300">AI Services</p>
                <p className="text-sm text-slate-400 mt-1">Starting from $2,000 setup</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-green-400 mb-2">100+</h3>
                <p className="text-slate-300">IT Solutions</p>
                <p className="text-sm text-slate-400 mt-1">Starting from $80/hour</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Service Categories
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SaaS Products</h3>
                <p className="text-slate-300 mb-6">
                  Revolutionary micro SaaS solutions that deliver instant ROI. Our 150+ specialized tools 
                  automate complex business processes, reduce costs by up to 40%, and scale with your growth. 
                  From AI-powered automation to smart analytics, we've got your business covered.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• AI-Powered Video Content Generator - 90% faster video production</li>
                  <li>• Smart Energy Management System - 25% energy cost reduction</li>
                  <li>• AI Fraud Detection & Prevention - 99.5% accuracy</li>
                  <li>• Voice Commerce Assistant - 40% conversion increase</li>
                  <li>• Predictive Maintenance Platform - 30% maintenance cost savings</li>
                </ul>
                <div className="flex items-center justify-between">
                  <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">
                    View All Micro SaaS →
                  </Link>
                  <span className="text-sm text-slate-500">Starting at $99/month</span>
                </div>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>
                <p className="text-slate-300 mb-6">
                  Cutting-edge AI solutions that transform businesses. Our 90+ AI services deliver 
                  unprecedented accuracy, automation, and insights. From medical imaging analysis 
                  to quantum-safe security, we're pushing the boundaries of artificial intelligence.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Generative AI Content Studio - 95% content creation time reduction</li>
                  <li>• AI-Powered Medical Imaging Analysis - 98% diagnostic accuracy</li>
                  <li>• AI-Powered Supply Chain Optimization - 25% cost reduction</li>
                  <li>• AI-Powered Code Generation & Review - 60% faster development</li>
                  <li>• AI-Powered Semantic Search Engine - 85% relevance improvement</li>
                </ul>
                <div className="flex items-center justify-between">
                  <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">
                    View All AI Services →
                  </Link>
                  <span className="text-sm text-slate-500">Starting at $2,000 setup</span>
                </div>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-green-400">IT & Cloud Services</h3>
                <p className="text-slate-300 mb-6">
                  Enterprise-grade IT solutions that power digital transformation. Our 100+ services 
                  include quantum-safe security, 5G infrastructure, and neuromorphic computing. 
                  We deliver future-proof technology that scales with your ambitions.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Zero Trust Security Architecture - Enhanced security posture</li>
                  <li>• Quantum-Safe Cryptography Implementation - Future-proof security</li>
                  <li>• 5G Network Infrastructure & Applications - Ultra-fast connectivity</li>
                  <li>• Digital Twin Development Platform - Predictive maintenance</li>
                  <li>• Neuromorphic Computing Solutions - Revolutionary AI processing</li>
                </ul>
                <div className="flex items-center justify-between">
                  <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold">
                    View All IT Services →
                  </Link>
                  <span className="text-sm text-slate-500">Starting at $80/hour</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Transform Your Business with Cutting-Edge Technology?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Join 500+ successful businesses that have transformed their operations with our innovative solutions. 
              Our expert team delivers measurable results: average 40% cost reduction, 60% efficiency improvement, 
              and 99.9% uptime guarantee. Let's discuss how we can accelerate your digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Contact Form
              </Link>
            </div>
            
            <div className="text-slate-400">
              <p>{contact.address}</p>
              <p className="mt-2">Visit us at <a href={contact.site} className="text-blue-400 hover:text-blue-300">{contact.site}</a></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
