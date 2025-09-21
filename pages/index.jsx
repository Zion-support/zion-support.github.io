import React from 'react';
import Link from 'next/link';
import { AnimatedCard } from '../components/ui/AnimatedCard';
import { GradientButton } from '../components/ui/GradientButton';
import { FloatingElements } from '../components/ui/FloatingElements';
import { TypewriterEffect } from '../components/ui/TypewriterEffect';
import { SEOHead } from '../components/ui/SEOHead';

export default function Home() {
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI solutions, enterprise IT services, and micro SaaS development",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://github.com/Zion-Holdings",
      "https://linkedin.com/company/zion-tech-group"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "AI & Machine Learning Solutions",
        "description": "Custom AI solutions, ML model development, and intelligent automation"
      },
      {
        "@type": "Service", 
        "name": "Enterprise IT Solutions",
        "description": "Cloud infrastructure, DevOps, security, and system integration"
      },
      {
        "@type": "Service",
        "name": "Micro SaaS Development", 
        "description": "Rapid prototyping, MVP development, and scalable SaaS platforms"
      }
    ]
  };

  return (
    <div>
      <SEOHead
        title="Zion Tech Group - AI, IT & Micro SaaS Services"
        description="Leading provider of AI solutions, enterprise IT services, and micro SaaS development. 1000% ROI target with proven architectures and 24/7 support."
        keywords="AI services, IT solutions, micro SaaS, machine learning, cloud infrastructure, DevOps, enterprise technology, automation"
        canonicalUrl="https://ziontechgroup.com"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <FloatingElements />
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-b border-white/10 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-white font-semibold">Home</Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </div>
              <a href="tel:+13024640950" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Call Now
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Advanced Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforming businesses with{' '}
              <TypewriterEffect 
                texts={[
                  'cutting-edge AI solutions',
                  'enterprise IT services', 
                  'rapid micro SaaS development',
                  'innovative automation',
                  'scalable cloud architecture'
                ]}
                className="text-cyan-400 font-semibold"
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton href="/services-advertising" size="lg">
                Explore Services
              </GradientButton>
              <GradientButton variant="outline" size="lg" href="tel:+13024640950">
                Call Now: +1 302 464 0950
              </GradientButton>
            </div>
          </div>
        </section>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <AnimatedCard key={index} delay={index * 200} className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </AnimatedCard>
            ))}
          </div>

          {/* Features Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <AnimatedCard key={index} delay={index * 100} className="p-4">
                  <p className="text-gray-200">{feature}</p>
                </AnimatedCard>
              ))}
            </div>
          </section>

        {/* Contact CTA */}
        <section className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">Get in touch with our experts for a free consultation</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton href="mailto:kleber@ziontechgroup.com" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Email Us
              </GradientButton>
              <GradientButton variant="outline" size="lg" href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709">
                Visit Our Office
              </GradientButton>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}