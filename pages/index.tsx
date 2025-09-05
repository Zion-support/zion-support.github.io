import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo, AnimationState } from '../types';

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
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
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

  const services = [
    {
      title: 'AI Services',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      href: '/ai-services',
      icon: '🤖'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Build the future with secure and scalable blockchain technology.',
      href: '/blockchain',
      icon: '⛓️'
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions designed for your specific needs.',
      href: '/contact',
      icon: '💻'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - AI & Blockchain Solutions</title>
        <meta name="description" content="Transform your business with our cutting-edge AI and blockchain solutions. Expert development, consulting, and support for modern enterprises." />
        <link rel="canonical" href={contact.site} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white">
                  Zion Tech Group
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-white font-medium">
                  Home
                </Link>
                <Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">
                  AI Services
                </Link>
                <Link href="/blockchain" className="text-gray-300 hover:text-white transition-colors">
                  Blockchain
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI & Blockchain
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link 
                href="#services" 
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link key={index} href={service.href} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group-hover:scale-105">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Contact Us Today
              </Link>
              <a 
                href={`tel:${contact.phone}`} 
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-gray-300 mb-4">
                  Transforming businesses through innovative technology solutions.
                </p>
                <div className="text-gray-300">
                  <p>{contact.address}</p>
                  <p>Phone: {contact.phone}</p>
                  <p>Email: {contact.email}</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/ai-services" className="hover:text-white transition-colors">AI Services</Link></li>
                  <li><Link href="/blockchain" className="hover:text-white transition-colors">Blockchain</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Consulting</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/contact" className="hover:text-white transition-colors">Get Quote</Link></li>
                  <li><a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">Call Us</a></li>
                  <li><a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">Email Us</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}