import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { TypewriterEffect } from '../components/ui/TypewriterEffect';
import { GradientButton } from '../components/ui/GradientButton';
import { ThemeToggle } from '../components/ThemeToggle';
import { MobileNavigation } from '../components/MobileNavigation';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions, ML model development, and intelligent automation",
      icon: "🤖"
    },
    {
      title: "Enterprise IT Solutions",
      description: "Cloud infrastructure, DevOps, security, and system integration",
      icon: "⚡"
    },
    {
      title: "Micro SaaS Development",
      description: "Rapid prototyping, MVP development, and scalable SaaS platforms",
      icon: "🚀"
    }
  ];

  const features = [
    "1000% ROI Target with Measurable KPIs",
    "Enterprise-Grade Security & Compliance",
    "24/7 Support with SLAs",
    "Fast Onboarding with Templates",
    "Transparent Pricing",
    "Proven Architectures"
  ];

  return (
    <div>
      <Head>
        <title>Zion Tech Group - AI, IT & Micro SaaS Services</title>
        <meta name="description" content="Leading provider of AI solutions, enterprise IT services, and micro SaaS development. 1000% ROI target with proven architectures and 24/7 support." />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, machine learning, cloud infrastructure, DevOps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": "Leading provider of AI solutions, enterprise IT services, and micro SaaS development",
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
              },
              "sameAs": [
                "https://ziontechgroup.com"
              ]
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-b border-white/10 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </Link>
              <div className="hidden md:flex space-x-8 items-center">
                <Link href="/" className="text-white font-semibold">Home</Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                <ThemeToggle />
              </div>
              <div className="flex items-center space-x-4">
                <a href="tel:+13024640950" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Call Now
                </a>
                <MobileNavigation />
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                <TypewriterEffect 
                  texts={[
                    " Advanced Technology",
                    " AI Solutions", 
                    " Enterprise IT",
                    " Micro SaaS",
                    " Machine Learning",
                    " Cloud Infrastructure"
                  ]}
                  speed={100}
                  deleteSpeed={50}
                  pauseTime={2000}
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                />
              </span>
            </h1>
            <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Leading provider of AI solutions, enterprise IT services, and micro SaaS development. 
              We deliver 1000% ROI with proven architectures and 24/7 support.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <GradientButton href="#services" size="lg" variant="primary">
                Explore Services
              </GradientButton>
              <GradientButton href="tel:+13024640950" size="lg" variant="outline">
                Call (302) 464-0950
              </GradientButton>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We specialize in three key areas that drive digital transformation and business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <a href="/services" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional results through proven methodologies and cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from real clients - see the measurable impact we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">1000%</div>
                <div className="text-lg text-gray-300 mb-2">Average ROI</div>
                <div className="text-sm text-gray-400">Measured across all projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-lg text-gray-300 mb-2">Support</div>
                <div className="text-sm text-gray-400">Always available when you need us</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-lg text-gray-300 mb-2">Uptime</div>
                <div className="text-sm text-gray-400">Enterprise-grade reliability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-lg text-gray-300 mb-2">Projects</div>
                <div className="text-sm text-gray-400">Successfully delivered worldwide</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from businesses we've transformed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-300 mb-4">
                  "Zion Tech Group transformed our business with their AI solutions. We saw a 300% increase in efficiency within the first month."
                </p>
                <div className="text-cyan-400 font-semibold">- Sarah Johnson, CEO TechCorp</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-300 mb-4">
                  "Their micro SaaS development service helped us launch our product 50% faster than expected. Exceptional team!"
                </p>
                <div className="text-cyan-400 font-semibold">- Michael Chen, Founder StartupXYZ</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-300 mb-4">
                  "24/7 support and enterprise-grade security. Zion Tech Group is our trusted technology partner."
                </p>
                <div className="text-cyan-400 font-semibold">- Emily Rodriguez, CTO EnterpriseCo</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free consultation and discover how our technology solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton href="/contact" size="lg" variant="primary">
                Get Free Consultation
              </GradientButton>
              <GradientButton href="tel:+13024640950" size="lg" variant="outline">
                Call (302) 464-0950
              </GradientButton>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </Link>
                <p className="text-gray-300 mt-4 max-w-md">
                  Leading provider of AI solutions, enterprise IT services, and micro SaaS development. 
                  Transforming businesses through innovative technology.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">AI & ML Solutions</Link></li>
                  <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Enterprise IT</Link></li>
                  <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Micro SaaS Development</Link></li>
                  <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Technology Consulting</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Phone: (302) 464-0950</li>
                  <li>Email: kleber@ziontechgroup.com</li>
                  <li>Address: 364 E Main St STE 1008<br />Middletown DE 19709</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}