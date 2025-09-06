import React, { useState, useEffect, Suspense } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ErrorBoundary } from '../components/ErrorBoundary';

interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;
}

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  site: string;
}

const contact: ContactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  site: 'https://ziontechgroup.com'
};

export default function Home() {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isLoaded: false,
    hasError: false
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, isLoaded: true }));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (animationState.hasError) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Zion Tech Group - Innovative Micro SaaS, AI Services & IT Solutions</title>
        <meta
          name="description"
          content="Leading provider of 150+ micro SaaS products, 100+ AI services, and 100+ IT solutions. Transform your business with cutting-edge technology solutions."
        />
        <meta
          name="keywords"
          content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, quantum computing, blockchain"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={contact.site} />
      </Head>

      <ErrorBoundary>
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center" role="banner" aria-labelledby="hero-title">
            <div className="max-w-4xl mx-auto">
              <h1
                id="hero-title"
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${
                  animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Zion Tech Group
              </h1>
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${
                animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Innovative Micro SaaS, AI Services & IT Solutions
              </p>
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                We deliver cutting-edge technology solutions with 150+ micro SaaS products, 
                100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization 
                to AI automation, quantum computing to blockchain solutions, we help businesses scale 
                efficiently and securely in the digital age.
              </p>
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${
                animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} role="navigation" aria-label="Main navigation">
                <Link
                  href="/services"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors text-lg"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors text-lg"
                >
                  View Pricing
                </Link>
              </div>
              <div className={`grid md:grid-cols-3 gap-6 text-center transition-all duration-1000 delay-800 ${
                animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2" aria-label="150 plus micro SaaS products">150+</h3>
                  <p className="text-slate-300">Micro SaaS Products</p>
                </div>
                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2" aria-label="100 plus AI services">100+</h3>
                  <p className="text-slate-300">AI Services</p>
                </div>
                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-green-400 mb-2" aria-label="100 plus IT solutions">100+</h3>
                  <p className="text-slate-300">IT Solutions</p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section className="py-16 px-4" role="main">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" id="service-categories">
                Our Service Categories
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SaaS Products</h3>
                  <p className="text-slate-300 mb-6">
                    Innovative, focused software solutions designed for modern businesses. 
                    Each product is built with scalability, security, and user experience in mind.
                  </p>
                  <ul className="text-slate-400 space-y-2 mb-6">
                    <li>• AI-Powered Video Clip Maker</li>
                    <li>• Smart Contract Analyzer</li>
                    <li>• Cybersecurity Threat Intelligence</li>
                    <li>• Multi-Language Website Translator</li>
                    <li>• Predictive Inventory Optimizer</li>
                  </ul>
                  <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">
                    View All Micro SaaS Products →
                  </Link>
                </div>
                <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>
                  <p className="text-slate-300 mb-6">
                    Advanced artificial intelligence solutions that transform how businesses operate, 
                    from machine learning to quantum AI integration.
                  </p>
                  <ul className="text-slate-400 space-y-2 mb-6">
                    <li>• Autonomous AI Agents</li>
                    <li>• AI-Powered Financial Trading</li>
                    <li>• AI Legal Document Analysis</li>
                    <li>• AI-Powered Voice Analytics</li>
                    <li>• AI-Powered Search & Discovery</li>
                  </ul>
                  <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">
                    Explore AI Services →
                  </Link>
                </div>
                <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">IT & Cloud Services</h3>
                  <p className="text-slate-300 mb-6">
                    Comprehensive IT solutions for enterprise-grade operations, 
                    from cloud migration to quantum computing consulting.
                  </p>
                  <ul className="text-slate-400 space-y-2 mb-6">
                    <li>• Quantum Computing Consulting</li>
                    <li>• Blockchain & Web3 Solutions</li>
                    <li>• DevSecOps & Security Automation</li>
                    <li>• Enterprise Data Platform</li>
                    <li>• High-Performance Computing Solutions</li>
                  </ul>
                  <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold">
                    Discover IT Solutions →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Join hundreds of businesses that trust Zion Tech Group for their technology needs. 
                Let's discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                  Call {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                  Email Us
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
      </ErrorBoundary>
    </>
  );
}