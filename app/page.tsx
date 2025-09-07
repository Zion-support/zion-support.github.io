import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Enterprise AI & IT Solutions | Micro SaaS Development',
  description: 'Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',
  keywords: 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions',
  openGraph: {
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of micro SaaS products, AI services, and IT solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of micro SaaS products, AI services, and IT solutions.',
    images: ['/og-image.jpg']
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header />
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 animate-pulse" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 gradient-text">
            Zion Tech Group
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-8">
            Innovative Micro SaaS, AI Services & IT Solutions
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge technology solutions. 
            From AI-powered automation to cloud infrastructure, we deliver 
            enterprise-grade solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold hover-lift flex items-center gap-2"
            >
              Get Started Today
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold hover-lift flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Get in touch with our experts to discuss your project requirements and discover
            how our innovative solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold hover-lift flex items-center gap-2"
            >
              Get Started Today
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold hover-lift flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
          </div>
          <div className="mt-6 text-sm text-slate-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ title, href, description, icon }: {
  title: string;
  href: string;
  description: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 hover-lift block"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </Link>
  );
}