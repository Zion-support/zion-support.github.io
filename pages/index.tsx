
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>Zion Tech Group - Revolutionary Technology Solutions | AI, Cybersecurity & Cloud Services</title>
        <meta name="description" content="Leading provider of revolutionary micro SaaS services, AI solutions, cybersecurity, and cutting-edge technology services. Transform your business with our innovative solutions." />
        <meta name="keywords" content="micro SaaS, AI services, technology solutions, Zion Tech Group, cloud infrastructure, cybersecurity, machine learning, software development, Delaware tech company" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Leading provider of revolutionary micro SaaS services, AI solutions, and cutting-edge technology services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta name="twitter:description" content="Leading provider of revolutionary micro SaaS services, AI solutions, and cutting-edge technology services." />
        
        {/* Canonical */}
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "description": "Leading provider of revolutionary micro SaaS services, AI solutions, and cutting-edge technology services",
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
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              }
            })
          }}
        />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Zion Tech Group</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge micro SaaS services, IT solutions, and AI innovations. 
            From quantum computing to space technology, we&apos;re building the future today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </Link>
            <Link href="#services" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-gray-900">
              Learn More
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div id="services" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
            <p className="text-gray-300 mb-6">Multi-agent workflows, RAG systems, and intelligent automation platforms.</p>
            <Link href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold">Learn More →</Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Cloud & DevOps</h3>
            <p className="text-gray-300 mb-6">Serverless infrastructure, Kubernetes orchestration, and DevOps automation.</p>
            <Link href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold">Learn More →</Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-6">Enterprise-grade security with AI threat detection and zero-trust architecture.</p>
            <Link href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold">Learn More →</Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Active Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Services Offered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="mt-24 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our technology solutions can drive growth, efficiency, and innovation for your organization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-3">📱</div>
              <div className="font-semibold text-white mb-2">Phone</div>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">✉️</div>
              <div className="font-semibold text-white mb-2">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📍</div>
              <div className="font-semibold text-white mb-2">Address</div>
              <div className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10 mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

